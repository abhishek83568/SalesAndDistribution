import "./login.css";
import { useState } from "react";
import galvinusLogo from "../assets/galvinus_logo.jpeg";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";

const SignUp = () => {
  const navigate = useNavigate();
  const [register, setRegister] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    password: "",
  });
  const [emailError, setEmailError] = useState("");
  const [error, setError] = useState(""); // State to store error message

  const validateEmail = (email) => {
    const emailRegex =
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.(com|in|net|org|gov|edu|co)$/;
    return emailRegex.test(email);
  };

  const handleChange = (e) => {
    const { value, name } = e.target;

    setRegister((prev) => ({
      ...prev,
      [name]: value,
    }));
    setError(""); // Clear error when typing
    setEmailError("");
  };

  const registerUser = async (event) => {
    event.preventDefault();
    // Validate email format before sending request
    if (!validateEmail(register.email)) {
      setEmailError(
        "Please enter a valid email address ending with .com, .in, .org, etc."
      );
      return;
    } else {
      setEmailError(""); // Clear error if email is valid
    }

    try {
      const response = await fetch("http://localhost:8799/api/auth/register", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({
          name: register.name,
          email: register.email,
          password: register.password,
          phoneNumber: register.phoneNumber,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Registration failed");
      }
      toast.success("User registered successfully!");
      setRegister({
        name: "",
        email: "",
        phoneNumber: "",
        password: "",
      });
      setError(""); // Clear error after successful signup
      setTimeout(() => {
        navigate("/login");
      }, 1500);
    } catch (error) {
      setError(error.message); // Set error message from backend
    }
  };

  return (
    <div className="auth-form">
      <Toaster position="top-center" reverseOrder={false} />
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
        <input
          type="email"
          placeholder="Email"
          name="email"
          value={register.email}
          onChange={handleChange}
          required
        />
        {emailError && <p className="error-message">{emailError}</p>}
        <input
          type="password"
          placeholder="Password"
          name="password"
          value={register.password}
          onChange={handleChange}
          required
        />
        {/* Show error message below password field */}
        {error && <p className="error-message">{error}</p>}

        <input
          type="Number"
          placeholder="Phone Number"
          name="phoneNumber"
          value={register.phoneNumber}
          onChange={handleChange}
          required
        />
        <button type="submit">Sign Up</button>
      </form>
      <p>
        Already have an account? <a href="login">Login</a>
      </p>
    </div>
  );
};

export default SignUp;
