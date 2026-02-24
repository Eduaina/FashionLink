/**
 * Login.jsx
 * Handles both login and signup.
 * Role selection → redirect to correct portal.
 *
 * /login → role === "artisan" → /artisan/dashboard
 *        → role === "client"  → /client/dashboard
 */
import { useState } from "react";
import { useNavigate } from "react-router-dom";
// import "./Login.css";

export default function Login() {
  const navigate = useNavigate();

  const [mode, setMode]       = useState("login");   // "login" | "signup"
  const [role, setRole]       = useState("artisan"); // "artisan" | "client"
  const [email, setEmail]     = useState("");
  const [password, setPassword] = useState("");
  const [name, setName]       = useState("");
  const [error, setError]     = useState("");

  const ROLE_ROUTES = {
    artisan: "/artisan/dashboard",
    client:  "/client/dashboard",
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    // ── Validation ──────────────────────────────────────────────
    if (!email || !password) { setError("Email and password are required."); return; }
    if (mode === "signup" && !name.trim()) { setError("Name is required."); return; }

    // ── TODO: replace with real API call ────────────────────────
    // const res = await fetch("/api/auth/login", { method: "POST", body: JSON.stringify({ email, password }) });
    // const { role } = await res.json();

    // Mock: use selected role directly
    const destination = ROLE_ROUTES[role] ?? "/artisan/dashboard";
    navigate(destination, { replace: true });
  };

  return (
    <div className="login-page">
      <div className="login-card">
        {/* Logo */}
        <div className="login-logo">
          <svg viewBox="0 0 32 32" fill="none" width="36" height="36">
            <circle cx="16" cy="16" r="16" fill="#6C63FF"/>
            <path d="M10 22 L16 8 L22 22" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M12.5 17.5 H19.5" stroke="white" strokeWidth="2" strokeLinecap="round"/>
          </svg>
          <span className="login-logo__text">Fashion Link</span>
        </div>

        <h1 className="login-title">
          {mode === "login" ? "Welcome back" : "Create an account"}
        </h1>
        <p className="login-subtitle">
          {mode === "login" ? "Sign in to your account" : "Join Fashion Link today"}
        </p>

        <form className="login-form" onSubmit={handleSubmit} noValidate>

          {/* Role selector — visible on both modes */}
          <div className="login-role-group">
            <button
              type="button"
              className={`login-role-btn ${role === "artisan" ? "active" : ""}`}
              onClick={() => setRole("artisan")}
            >
              ✂️ Artisan
            </button>
            <button
              type="button"
              className={`login-role-btn ${role === "client" ? "active" : ""}`}
              onClick={() => setRole("client")}
            >
              👤 Client
            </button>
          </div>

          {mode === "signup" && (
            <div className="login-field">
              <label className="login-label" htmlFor="login-name">Full Name</label>
              <input
                id="login-name"
                className="login-input"
                type="text"
                placeholder="Grace Adebayo"
                value={name}
                onChange={(e) => setName(e.target.value)}
                autoComplete="name"
              />
            </div>
          )}

          <div className="login-field">
            <label className="login-label" htmlFor="login-email">Email</label>
            <input
              id="login-email"
              className="login-input"
              type="email"
              placeholder="you@fashionlink.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              autoComplete="email"
            />
          </div>

          <div className="login-field">
            <label className="login-label" htmlFor="login-password">Password</label>
            <input
              id="login-password"
              className="login-input"
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoComplete={mode === "login" ? "current-password" : "new-password"}
            />
          </div>

          {error && <p className="login-error">{error}</p>}

          <button className="login-submit" type="submit">
            {mode === "login" ? "Sign In" : "Create Account"}
          </button>
        </form>

        <p className="login-switch">
          {mode === "login" ? "Don't have an account?" : "Already have an account?"}
          {" "}
          <button
            className="login-switch__btn"
            type="button"
            onClick={() => { setMode(mode === "login" ? "signup" : "login"); setError(""); }}
          >
            {mode === "login" ? "Sign up" : "Sign in"}
          </button>
        </p>
      </div>
    </div>
  );
}
