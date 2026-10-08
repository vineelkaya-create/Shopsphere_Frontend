import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Mail,
  Lock,
  Eye,
  EyeOff,
  ShieldCheck,
  Truck,
  Sparkles,
} from "lucide-react";
import { useAuth } from "../context/AuthContext";

export default function Login() {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [remember, setRemember] = useState(false);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.email || !form.password) {
      alert("Please enter email and password.");
      return;
    }

    login(form.email);
    navigate("/");
  };

  return (
    <>
      <style>{`
        * {
          box-sizing: border-box;
        }

        .login-page {
          min-height: calc(100vh - 72px);
          display: grid;
          grid-template-columns: 1fr 1fr;
          background: #f8fafc;
        }

        /* ================= LEFT SIDE ================= */

        .login-left {
          position: relative;
          overflow: hidden;
          padding: 70px;
          display: flex;
          align-items: center;
          color: white;
          background:
            radial-gradient(
              circle at 15% 20%,
              rgba(96, 165, 250, 0.35),
              transparent 30%
            ),
            radial-gradient(
              circle at 85% 80%,
              rgba(139, 92, 246, 0.3),
              transparent 30%
            ),
            linear-gradient(135deg, #0f172a, #172554);
        }

        .login-left::before {
          content: "";
          position: absolute;
          width: 450px;
          height: 450px;
          border-radius: 50%;
          border: 70px solid rgba(255,255,255,0.04);
          right: -180px;
          top: -150px;
        }

        .login-left::after {
          content: "";
          position: absolute;
          width: 320px;
          height: 320px;
          border-radius: 50%;
          border: 50px solid rgba(255,255,255,0.04);
          left: -150px;
          bottom: -140px;
        }

        .login-left-content {
          position: relative;
          z-index: 2;
          max-width: 560px;
        }

        .login-brand {
          font-size: 30px;
          font-weight: 900;
          letter-spacing: -1.5px;
          margin-bottom: 75px;
        }

        .login-brand span {
          color: #60a5fa;
        }

        .login-left h1 {
          font-size: clamp(40px, 4vw, 62px);
          line-height: 1.05;
          letter-spacing: -2.5px;
          margin: 0 0 25px;
        }

        .login-left-description {
          color: #cbd5e1;
          font-size: 17px;
          line-height: 1.7;
          max-width: 500px;
          margin-bottom: 35px;
        }

        .login-benefits {
          display: grid;
          gap: 17px;
        }

        .login-benefit {
          display: flex;
          align-items: center;
          gap: 14px;
        }

        .login-benefit-icon {
          width: 42px;
          height: 42px;
          border-radius: 12px;
          background: rgba(255,255,255,0.09);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #93c5fd;
          flex-shrink: 0;
        }

        .login-benefit-text strong {
          display: block;
          font-size: 14px;
          margin-bottom: 2px;
        }

        .login-benefit-text span {
          color: #94a3b8;
          font-size: 12px;
        }

        .login-feature {
          margin-top: 38px;
          padding: 17px;
          max-width: 420px;
          display: flex;
          align-items: center;
          gap: 14px;
          border-radius: 17px;
          background: rgba(255,255,255,0.08);
          border: 1px solid rgba(255,255,255,0.1);
        }

        .login-feature-icon {
          width: 52px;
          height: 52px;
          border-radius: 14px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(96,165,250,0.12);
          color: #93c5fd;
        }

        .login-feature strong {
          display: block;
          font-size: 14px;
        }

        .login-feature span {
          color: #94a3b8;
          font-size: 12px;
        }

        /* ================= RIGHT SIDE ================= */

        .login-right {
          background: white;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 50px;
        }

        .login-form-container {
          width: 100%;
          max-width: 450px;
        }

        .login-header {
          margin-bottom: 30px;
        }

        .login-header h2 {
          margin: 0 0 8px;
          color: #111827;
          font-size: 34px;
          letter-spacing: -1px;
        }

        .login-header p {
          margin: 0;
          color: #6b7280;
          font-size: 14px;
        }

        .login-header a {
          color: #2563eb;
          text-decoration: none;
          font-weight: 750;
        }

        .login-form-group {
          margin-bottom: 19px;
        }

        .login-label-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 8px;
        }

        .login-label {
          font-size: 13px;
          font-weight: 750;
          color: #111827;
        }

        .forgot-password {
          font-size: 12px;
          color: #2563eb;
          text-decoration: none;
          font-weight: 700;
        }

        .login-input-wrapper {
          position: relative;
        }

        .login-input {
          width: 100%;
          height: 52px;
          padding: 0 45px 0 44px;
          border: 1px solid #e5e7eb;
          border-radius: 11px;
          outline: none;
          background: #f8fafc;
          color: #111827;
          font-size: 14px;
          transition: 0.2s;
        }

        .login-input:focus {
          border-color: #2563eb;
          background: white;
          box-shadow: 0 0 0 4px rgba(37,99,235,0.08);
        }

        .login-input::placeholder {
          color: #9ca3af;
        }

        .login-input-icon {
          position: absolute;
          left: 14px;
          top: 50%;
          transform: translateY(-50%);
          color: #9ca3af;
        }

        .login-password-button {
          position: absolute;
          right: 12px;
          top: 50%;
          transform: translateY(-50%);
          border: none;
          background: transparent;
          color: #9ca3af;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
        }

        .login-options {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin: 8px 0 22px;
        }

        .remember-me {
          display: flex;
          align-items: center;
          gap: 8px;
          color: #6b7280;
          font-size: 13px;
          cursor: pointer;
        }

        .remember-me input {
          width: 15px;
          height: 15px;
          accent-color: #2563eb;
        }

        .login-submit {
          width: 100%;
          height: 52px;
          border: none;
          border-radius: 11px;
          color: white;
          background: linear-gradient(135deg, #2563eb, #4f46e5);
          font-weight: 800;
          font-size: 15px;
          cursor: pointer;
          box-shadow: 0 8px 20px rgba(37,99,235,0.2);
          transition: 0.2s;
        }

        .login-submit:hover {
          transform: translateY(-1px);
          box-shadow: 0 12px 25px rgba(37,99,235,0.28);
        }

        .login-divider {
          display: flex;
          align-items: center;
          gap: 12px;
          margin: 25px 0;
          color: #9ca3af;
          font-size: 12px;
        }

        .login-divider::before,
        .login-divider::after {
          content: "";
          flex: 1;
          height: 1px;
          background: #e5e7eb;
        }

        .google-login {
          width: 100%;
          height: 50px;
          border: 1px solid #e5e7eb;
          background: white;
          border-radius: 11px;
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 10px;
          font-weight: 700;
          color: #111827;
          cursor: pointer;
          transition: 0.2s;
        }

        .google-login:hover {
          background: #f8fafc;
          border-color: #cbd5e1;
        }

        .google-icon {
          font-size: 18px;
          font-weight: 900;
          color: #4285f4;
        }

        .login-terms {
          margin-top: 22px;
          text-align: center;
          color: #9ca3af;
          font-size: 11px;
          line-height: 1.6;
        }

        .login-terms a {
          color: #2563eb;
          text-decoration: none;
          font-weight: 700;
        }

        /* ================= MOBILE ================= */

        @media (max-width: 850px) {
          .login-page {
            grid-template-columns: 1fr;
          }

          .login-left {
            display: none;
          }

          .login-right {
            min-height: calc(100vh - 72px);
            padding: 35px 20px;
          }
        }

        @media (max-width: 480px) {
          .login-right {
            padding: 30px 16px;
          }

          .login-header h2 {
            font-size: 29px;
          }

          .login-options {
            align-items: flex-start;
            gap: 10px;
          }
        }
      `}</style>

      <div className="login-page">

        {/* LEFT SIDE */}
        <div className="login-left">
          <div className="login-left-content">

            <div className="login-brand">
              Shop<span>Sphere</span>
            </div>

            <h1>
              Everything you need.
              <br />
              All in one place.
            </h1>

            <p className="login-left-description">
              Discover thousands of products, exclusive deals and a shopping
              experience designed around you.
            </p>

            <div className="login-benefits">

              <div className="login-benefit">
                <div className="login-benefit-icon">
                  <ShieldCheck size={21} />
                </div>

                <div className="login-benefit-text">
                  <strong>Secure Shopping</strong>
                  <span>Your account and payments stay protected.</span>
                </div>
              </div>

              <div className="login-benefit">
                <div className="login-benefit-icon">
                  <Truck size={21} />
                </div>

                <div className="login-benefit-text">
                  <strong>Fast Delivery</strong>
                  <span>Reliable delivery right to your doorstep.</span>
                </div>
              </div>

              <div className="login-benefit">
                <div className="login-benefit-icon">
                  <Sparkles size={21} />
                </div>

                <div className="login-benefit-text">
                  <strong>Exclusive Deals</strong>
                  <span>Get access to special offers and discounts.</span>
                </div>
              </div>

            </div>

            <div className="login-feature">
              <div className="login-feature-icon">
                <Sparkles size={24} />
              </div>

              <div>
                <strong>Welcome back to ShopSphere</strong>
                <span>Continue your shopping journey.</span>
              </div>
            </div>

          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="login-right">

          <div className="login-form-container">

            <div className="login-header">
              <h2>Welcome back 👋</h2>

              <p>
                Don't have an account?{" "}
                <Link to="/register">
                  Create one
                </Link>
              </p>
            </div>

            <form onSubmit={handleSubmit}>

              {/* EMAIL */}
              <div className="login-form-group">

                <div className="login-label-row">
                  <label className="login-label">
                    Email address
                  </label>
                </div>

                <div className="login-input-wrapper">

                  <Mail
                    size={18}
                    className="login-input-icon"
                  />

                  <input
                    className="login-input"
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    value={form.email}
                    onChange={handleChange}
                    required
                  />

                </div>

              </div>

              {/* PASSWORD */}
              <div className="login-form-group">

                <div className="login-label-row">

                  <label className="login-label">
                    Password
                  </label>

                  <a
                    href="#forgot"
                    className="forgot-password"
                    onClick={(e) => {
                      e.preventDefault();
                      alert("Password recovery will be connected to the backend later.");
                    }}
                  >
                    Forgot password?
                  </a>

                </div>

                <div className="login-input-wrapper">

                  <Lock
                    size={18}
                    className="login-input-icon"
                  />

                  <input
                    className="login-input"
                    type={showPassword ? "text" : "password"}
                    name="password"
                    placeholder="Enter your password"
                    value={form.password}
                    onChange={handleChange}
                    required
                  />

                  <button
                    type="button"
                    className="login-password-button"
                    onClick={() =>
                      setShowPassword(!showPassword)
                    }
                  >
                    {showPassword ? (
                      <EyeOff size={18} />
                    ) : (
                      <Eye size={18} />
                    )}
                  </button>

                </div>

              </div>

              {/* OPTIONS */}
              <div className="login-options">

                <label className="remember-me">
                  <input
                    type="checkbox"
                    checked={remember}
                    onChange={(e) =>
                      setRemember(e.target.checked)
                    }
                  />

                  Remember me
                </label>

              </div>

              {/* LOGIN */}
              <button
                type="submit"
                className="login-submit"
              >
                Sign In
              </button>

            </form>

            {/* DIVIDER */}
            <div className="login-divider">
              <span>OR CONTINUE WITH</span>
            </div>

            {/* GOOGLE */}
            <button
              type="button"
              className="google-login"
              onClick={() =>
                alert("Google login will be connected with the backend later.")
              }
            >
              <span className="google-icon">G</span>
              Continue with Google
            </button>

            {/* TERMS */}
            <div className="login-terms">
              By continuing, you agree to our{" "}
              <a href="#terms">Terms of Service</a>{" "}
              and{" "}
              <a href="#privacy">Privacy Policy</a>.
            </div>

          </div>

        </div>

      </div>
    </>
  );
}