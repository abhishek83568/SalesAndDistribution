import "./login.css";
import galvinusLogo from "../assets/galvinus_logo.jpeg";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import { useState } from "react";

const SignUp = () => {
  const navigate = useNavigate();

  const [register, setRegister] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    password: "",
  });

  const [emailVerified, setEmailVerified] = useState(false);
  const [showEmailOTPInput, setShowEmailOTPInput] = useState(false);
  const [emailOTP, setEmailOTP] = useState("");

  const handleChange = (e) => {
    const { value, name } = e.target;
    setRegister((prev) => ({ ...prev, [name]: value }));
  };

  // 🔹 Send Email OTP
  const sendEmailVerification = async () => {
    try {
      const response = await fetch(
        "http://localhost:8799/api/auth/send-email-otp",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email: register.email }),
        }
      );

      const data = await response.json();
      if (!response.ok) throw new Error(data.error || "Failed to send OTP");

      setShowEmailOTPInput(true);
      toast.success("OTP sent to email!");
    } catch (error) {
      toast.error(error.message);
    }
  };

  // 🔹 Verify Email OTP
  const verifyEmailOTP = async () => {
    try {
      const response = await fetch(
        "http://localhost:8799/api/auth/verify-email-otp",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email: register.email, otp: emailOTP }),
        }
      );

      const data = await response.json();
      if (!response.ok) throw new Error(data.error || "Invalid OTP");

      setEmailVerified(true);
      setShowEmailOTPInput(false);
      toast.success("Email verified!");
    } catch (error) {
      toast.error(error.message);
    }
  };

  // 🔹 Register User
  const registerUser = async (event) => {
    event.preventDefault();

    if (!emailVerified) {
      toast.error("Please verify email first.");
      return;
    }

    try {
      const response = await fetch("http://localhost:8799/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(register),
      });

      const data = await response.json();
      if (!response.ok) throw new Error(data.error || "Registration failed");

      toast.success("User registered successfully!");
      setTimeout(() => navigate("/login"), 1500);
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div className="auth-form">
      <Toaster position="top-center" />
      <div className="logo-box">
        <img src={galvinusLogo} alt="galvinus-logo" />
      </div>
      <h2>Sales & Distribution Sign Up</h2>

      <form onSubmit={registerUser}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={register.name}
          onChange={handleChange}
          required
        />

        <div className="input-group">
          <input
            type="email"
            placeholder="Email"
            name="email"
            value={register.email}
            onChange={handleChange}
            required
          />
          <button
            type="button"
            onClick={sendEmailVerification}
            disabled={emailVerified}
          >
            {emailVerified ? "✅ Verified" : "Verify Email"}
          </button>
        </div>

        {showEmailOTPInput && (
          <div className="otp-input">
            <input
              type="text"
              placeholder="Enter Email OTP"
              value={emailOTP}
              onChange={(e) => setEmailOTP(e.target.value)}
            />
            <button type="button" onClick={verifyEmailOTP}>
              Verify
            </button>
          </div>
        )}

        <input
          type="password"
          placeholder="Password"
          name="password"
          value={register.password}
          onChange={handleChange}
          required
        />

        <div className="input-group">
          <input
            type="tel"
            placeholder="Phone Number"
            name="phoneNumber"
            value={register.phoneNumber}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit">Sign Up</button>
      </form>

      <p>
        Already have an account? <a href="login">Login</a>
      </p>
    </div>
  );
};

export default SignUp;
