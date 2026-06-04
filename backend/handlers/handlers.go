package handlers

import (
	"fmt"
	"log/slog"
	"net/http"
	"os"
	"strings"
	"time"

	"github.com/jackc/pgx/v5/pgxpool"
	"github.com/labstack/echo/v4"
	resend "github.com/resend/resend-go/v2"
)

type Handler struct {
	db     *pgxpool.Pool
	resend *resend.Client
}

func New(db *pgxpool.Pool) *Handler {
	rc := resend.NewClient(os.Getenv("RESEND_API_KEY"))
	return &Handler{db: db, resend: rc}
}

// Health returns server status and db connectivity.
func (h *Handler) Health(c echo.Context) error {
	status := "ok"
	dbStatus := "disconnected"

	if h.db != nil {
		if err := h.db.Ping(c.Request().Context()); err == nil {
			dbStatus = "connected"
		}
	}

	return c.JSON(http.StatusOK, map[string]any{
		"status":    status,
		"db":        dbStatus,
		"timestamp": time.Now().UTC(),
	})
}

// ContactRequest is the expected body for contact form submissions.
type ContactRequest struct {
	Name    string `json:"name"    validate:"required,min=2"`
	Email   string `json:"email"   validate:"required,email"`
	Subject string `json:"subject" validate:"required,min=5"`
	Message string `json:"message" validate:"required,min=20"`
}

// Contact handles contact form submissions and sends an email via Resend.
func (h *Handler) Contact(c echo.Context) error {
	var req ContactRequest
	if err := c.Bind(&req); err != nil {
		return echo.NewHTTPError(http.StatusBadRequest, "invalid request body")
	}

	if err := validateContact(req); err != nil {
		return echo.NewHTTPError(http.StatusBadRequest, err.Error())
	}

	to := os.Getenv("CONTACT_EMAIL")
	if to == "" {
		to = "slingadal127@gmail.com"
	}

	body := fmt.Sprintf(`<div style="font-family:system-ui,sans-serif;max-width:600px">
<h2>%s</h2>
<p style="color:#71717a;font-size:13px">From <strong>%s</strong> (%s)</p>
<hr style="border:none;border-top:1px solid #e4e4e7;margin:16px 0"/>
<p style="white-space:pre-wrap;line-height:1.6">%s</p>
</div>`, req.Subject, req.Name, req.Email, req.Message)

	params := &resend.SendEmailRequest{
		From:    "Portfolio Contact <onboarding@resend.dev>",
		To:      []string{to},
		ReplyTo: []string{req.Email},
		Subject: "[Portfolio] " + req.Subject,
		Html:    body,
	}

	if _, err := h.resend.Emails.Send(params); err != nil {
		slog.Error("failed to send contact email", "error", err)
		return echo.NewHTTPError(http.StatusInternalServerError, "failed to send email")
	}

	if h.db != nil {
		_, _ = h.db.Exec(c.Request().Context(),
			`INSERT INTO contact_submissions (name, email, subject, message, created_at)
             VALUES ($1, $2, $3, $4, NOW())`,
			req.Name, req.Email, req.Subject, req.Message,
		)
	}

	return c.JSON(http.StatusOK, map[string]any{"ok": true})
}

// Stats returns public portfolio metrics stored in the database.
func (h *Handler) Stats(c echo.Context) error {
	stats := map[string]any{
		"projects":      4,
		"blog_posts":    3,
		"github_stars":  1240,
		"years_coding":  8,
	}

	if h.db != nil {
		var count int
		if err := h.db.QueryRow(c.Request().Context(),
			"SELECT COUNT(*) FROM contact_submissions").Scan(&count); err == nil {
			stats["total_messages"] = count
		}
	}

	return c.JSON(http.StatusOK, stats)
}

func validateContact(r ContactRequest) error {
	r.Name = strings.TrimSpace(r.Name)
	r.Email = strings.TrimSpace(r.Email)
	r.Subject = strings.TrimSpace(r.Subject)
	r.Message = strings.TrimSpace(r.Message)

	if len(r.Name) < 2 {
		return fmt.Errorf("name must be at least 2 characters")
	}
	if !strings.Contains(r.Email, "@") {
		return fmt.Errorf("invalid email address")
	}
	if len(r.Subject) < 5 {
		return fmt.Errorf("subject must be at least 5 characters")
	}
	if len(r.Message) < 20 {
		return fmt.Errorf("message must be at least 20 characters")
	}
	return nil
}
