import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  User,
  Mail,
  Lock,
  Eye,
  EyeOff,
  ShieldCheck,
  Truck,
  Gift,
} from "lucide-react";
import { useAuth } from "../context/AuthContext";

export default function Register() {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [agree, setAgree] = useState(false);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !form.name ||
      !form.email ||
      !form.password ||
      !form.confirmPassword
    ) {
      alert("Please fill all fields.");
      return;
    }

    if (form.password !== form.confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    if (form.password.length < 6) {
      alert("Password must contain at least 6 characters.");
      return;
    }

    if (!agree) {
      alert("Please accept the Terms and Privacy Policy.");
      return;
    }

    // Demo authentication for now.
    // This will be connected to Spring Boot/JWT later.
    login(form.email);

    navigate("/");
  };

  return (
    <>
      <style>{`
        * {
          box-sizing: border-box;
        }

        .register-page {
          min-height: calc(100vh - 72px);
          display: grid;
          grid-template-columns: 1fr 1fr;
          background: #f8fafc;
        }

        /* ================= LEFT SIDE ================= */

        .register-left {
          position: relative;
          overflow: hidden;
          padding: 65px;
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

        .register-left::before {
          content: "";
          position: absolute;
          width: 450px;
          height: 450px;
          border-radius: 50%;
          border: 70px solid rgba(255,255,255,0.04);
          right: -180px;
          top: -150px;
        }

        .register-left::after {
          content: "";
          position: absolute;
          width: 320px;
          height: 320px;
          border-radius: 50%;
          border: 50px solid rgba(255,255,255,0.04);
          left: -150px;
          bottom: -140px;
        }

        .register-left-content {
          position: relative;
          z-index: 2;
          max-width: 560px;
        }

        .register-brand {
          font-size: 30px;
          font-weight: 900;
          letter-spacing: -1.5px;
          margin-bottom: 65px;
        }

        .register-brand span {
          color: #60a5fa;
        }

        .register-left h1 {
          font-size: clamp(40px, 4vw, 60px);
          line-height: 1.05;
          letter-spacing: -2.5px;
          margin: 0 0 25px;
        }

        .register-left-description {
          color: #cbd5e1;
          font-size: 17px;
          line-height: 1.7;
          max-width: 500px;
          margin-bottom: 35px;
        }

        .register-benefits {
          display: grid;
          gap: 17px;
        }

        .register-benefit {
          display: flex;
          align-items: center;
          gap: 14px;
        }

        .register-benefit-icon {
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

        .register-benefit-text strong {
          display: block;
          font-size: 14px;
          margin-bottom: 2px;
        }

        .register-benefit-text span {
          color: #94a3b8;
          font-size: 12px;
        }

        .register-offer {
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

        .register-offer-icon {
          width: 52px;
          height: 52px;
          border-radius: 14px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(96,165,250,0.12);
          color: #93c5fd;
        }

        .register-offer strong {
          display: block;
          font-size: 14px;
        }

        .register-offer span {
          color: #94a3b8;
          font-size: 12px;
        }

        /* ================= RIGHT SIDE ================= */

        .register-right {
          background: white;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 45px 50px;
        }

        .register-form-container {
          width: 100%;
          max-width: 460px;
        }

        .register-header {
          margin-bottom: 25px;
        }

        .register-header h2 {
          margin: 0 0 8px;
          color: #111827;
          font-size: 34px;
          letter-spacing: -1px;
        }

        .register-header p {
          margin: 0;
          color: #6b7280;
          font-size: 14px;
        }

        .register-header a {
          color: #2563eb;
          text-decoration: none;
          font-weight: 750;
        }

        .register-form-group {
          margin-bottom: 15px;
        }

        .register-label {
          display: block;
          margin-bottom: 7px;
          font-size: 13px;
          font-weight: 750;
          color: #111827;
        }

        .register-input-wrapper {
          position: relative;
        }

        .register-input {
          width: 100%;
          height: 50px;
          padding: 0 45px 0 44px;
          border: 1px solid #e5e7eb;
          border-radius: 11px;
          outline: none;
          background: #f8fafc;
          color: #111827;
          font-size: 14px;
          transition: 0.2s;
        }

        .register-input:focus {
          border-color: #2563eb;
          background: white;
          box-shadow: 0 0 0 4px rgba(37,99,235,0.08);
        }

        .register-input::placeholder {
          color: #9ca3af;
        }

        .register-input-icon {
          position: absolute;
          left: 14px;
          top: 50%;
          transform: translateY(-50%);
          color: #9ca3af;
        }

        .register-password-button {
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

        .register-password-strength {
          margin-top: 6px;
          display: flex;
          align-items: center;
          gap: 7px;
        }

        .strength-bars {
          display: flex;
          gap: 3px;
          flex: 1;
        }

        .strength-bar {
          height: 3px;
          flex: 1;
          background: #e5e7eb;
          border-radius: 5px;
        }

        .strength-bar.active {
          background: #2563eb;
        }

        .strength-text {
          font-size: 10px;
          color: #9ca3af;
        }

        .register-terms {
          display: flex;
          align-items: flex-start;
          gap: 9px;
          margin: 17px 0 20px;
          color: #6b7280;
          font-size: 12px;
          line-height: 1.5;
        }

        .register-terms input {
          width: 15px;
          height: 15px;
          margin-top: 2px;
          accent-color: #2563eb;
          flex-shrink: 0;
        }

        .register-terms a {
          color: #2563eb;
          text-decoration: none;
          font-weight: 700;
        }

        .register-submit {
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

        .register-submit:hover {
          transform: translateY(-1px);
          box-shadow: 0 12px 25px rgba(37,99,235,0.28);
        }

        .register-divider {
          display: flex;
          align-items: center;
          gap: 12px;
          margin: 20px 0;
          color: #9ca3af;
          font-size: 11px;
        }

        .register-divider::before,
        .register-divider::after {
          content: "";
          flex: 1;
          height: 1px;
          background: #e5e7eb;
        }

        .register-google {
          width: 100%;
          height: 48px;
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

        .register-google:hover {
          background: #f8fafc;
          border-color: #cbd5e1;
        }

        .register-google-icon {
          color: #4285f4;
          font-size: 18px;
          font-weight: 900;
        }

        /* ================= MOBILE ================= */

        @media (max-width: 850px) {
          .register-page {
            grid-template-columns: 1fr;
          }

          .register-left {
            display: none;
          }

          .register-right {
            min-height: calc(100vh - 72px);
            padding: 35px 20px;
          }
        }

        @media (max-width: 480px) {
          .register-right {
            padding: 30px 16px;
          }

          .register-header h2 {
            font-size: 29px;
          }
        }
      `}</style>

      <div className="register-page">

        {/* LEFT SIDE */}
        <div className="register-left">

          <div className="register-left-content">

            <div className="register-brand">
              Shop<span>Sphere</span>
            </div>

            <h1>
              Start your
              <br />
              shopping journey.
            </h1>

            <p className="register-left-description">
              Create your ShopSphere account and unlock a smarter,
              faster and more personalized shopping experience.
            </p>

            <div className="register-benefits">

              <div className="register-benefit">

                <div className="register-benefit-icon">
                  <ShieldCheck size={21} />
                </div>

                <div className="register-benefit-text">
                  <strong>Secure Account</strong>
                  <span>
                    Your personal information stays protected.
                  </span>
                </div>

              </div>

              <div className="register-benefit">

                <div className="register-benefit-icon">
                  <Truck size={21} />
                </div>

                <div className="register-benefit-text">
                  <strong>Easy Orders</strong>
                  <span>
                    Track and manage your orders easily.
                  </span>
                </div>

              </div>

              <div className="register-benefit">

                <div className="register-benefit-icon">
                  <Gift size={21} />
                </div>

                <div className="register-benefit-text">
                  <strong>Member Benefits</strong>
                  <span>
                    Enjoy exclusive deals and offers.
                  </span>
                </div>

              </div>

            </div>

            <div className="register-offer">

              <div className="register-offer-icon">
                <Gift size={24} />
              </div>

              <div>
                <strong>Welcome bonus</strong>
                <span>
                  Special offers are waiting for you.
                </span>
              </div>

            </div>

          </div>

        </div>

        {/* RIGHT SIDE */}
        <div className="register-right">

          <div className="register-form-container">

            <div className="register-header">

              <h2>Create your account ✨</h2>

              <p>
                Already have an account?{" "}
                <Link to="/login">
                  Sign in
                </Link>
              </p>

            </div>

            <form onSubmit={handleSubmit}>

              {/* NAME */}
              <div className="register-form-group">

                <label className="register-label">
                  Full name
                </label>

                <div className="register-input-wrapper">

                  <User
                    size={18}
                    className="register-input-icon"
                  />

                  <input
                    className="register-input"
                    type="text"
                    name="name"
                    placeholder="Enter your full name"
                    value={form.name}
                    onChange={handleChange}
                    required
                  />

                </div>

              </div>

              {/* EMAIL */}
              <div className="register-form-group">

                <label className="register-label">
                  Email address
                </label>

                <div className="register-input-wrapper">

                  <Mail
                    size={18}
                    className="register-input-icon"
                  />

                  <input
                    className="register-input"
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
              <div className="register-form-group">

                <label className="register-label">
                  Password
                </label>

                <div className="register-input-wrapper">

                  <Lock
                    size={18}
                    className="register-input-icon"
                  />

                  <input
                    className="register-input"
                    type={showPassword ? "text" : "password"}
                    name="password"
                    placeholder="Create a password"
                    value={form.password}
                    onChange={handleChange}
                    required
                  />

                  <button
                    type="button"
                    className="register-password-button"
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

                {/* PASSWORD STRENGTH */}
                {form.password && (
                  <div className="register-password-strength">

                    <div className="strength-bars">

                      <span
                        className={
                          "strength-bar " +
                          (form.password.length >= 1
                            ? "active"
                            : "")
                        }
                      />

                      <span
                        className={
                          "strength-bar " +
                          (form.password.length >= 6
                            ? "active"
                            : "")
                        }
                      />

                      <span
                        className={
                          "strength-bar " +
                          (form.password.length >= 10
                            ? "active"
                            : "")
                        }
                      />

                      <span
                        className={
                          "strength-bar " +
                          (/[A-Z]/.test(form.password) &&
                          /[0-9]/.test(form.password)
                            ? "active"
                            : "")
                        }
                      />

                    </div>

                    <span className="strength-text">
                      {form.password.length < 6
                        ? "Weak"
                        : form.password.length < 10
                        ? "Good"
                        : "Strong"}
                    </span>

                  </div>
                )}

              </div>

              {/* CONFIRM PASSWORD */}
              <div className="register-form-group">

                <label className="register-label">
                  Confirm password
                </label>

                <div className="register-input-wrapper">

                  <Lock
                    size={18}
                    className="register-input-icon"
                  />

                  <input
                    className="register-input"
                    type={
                      showConfirmPassword
                        ? "text"
                        : "password"
                    }
                    name="confirmPassword"
                    placeholder="Confirm your password"
                    value={form.confirmPassword}
                    onChange={handleChange}
                    required
                  />

                  <button
                    type="button"
                    className="register-password-button"
                    onClick={() =>
                      setShowConfirmPassword(
                        !showConfirmPassword
                      )
                    }
                  >
                    {showConfirmPassword ? (
                      <EyeOff size={18} />
                    ) : (
                      <Eye size={18} />
                    )}
                  </button>

                </div>

              </div>

              {/* TERMS */}
              <label className="register-terms">

                <input
                  type="checkbox"
                  checked={agree}
                  onChange={(e) =>
                    setAgree(e.target.checked)
                  }
                />

                <span>
                  I agree to the{" "}
                  <a href="#terms">
                    Terms of Service
                  </a>{" "}
                  and{" "}
                  <a href="#privacy">
                    Privacy Policy
                  </a>
                  .
                </span>

              </label>

              {/* REGISTER */}
              <button
                type="submit"
                className="register-submit"
              >
                Create Account
              </button>

            </form>

            {/* DIVIDER */}
            <div className="register-divider">
              <span>OR CONTINUE WITH</span>
            </div>

            {/* GOOGLE */}
            <button
              type="button"
              className="register-google"
              onClick={() =>
                alert(
                  "Google registration will be connected with the backend later."
                )
              }
            >
              <span className="register-google-icon">
                G
              </span>

              Continue with Google
            </button>

          </div>

        </div>

      </div>
    </>
  );
}