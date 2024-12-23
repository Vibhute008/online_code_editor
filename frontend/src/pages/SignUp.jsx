import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import logo from "../images/logo.svg";
import image from "../images/authPageSide.png";
import { api_base_url } from "../helper";
import Lottie from "react-lottie"; // Import Lottie
import Loading from "../images/loading.json"; // Lottie animation JSON file


const SignUp = () => {
  const [username, setUsername] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true); // Loading state
  
  const options = {
    animationData: Loading,
    loop: true,
    autoplay: true, // Auto play the animation
  };

  useEffect(() => {
    // Simulating a loading period before displaying routes
    setTimeout(() => setLoading(false), 4000); // Adjust the timeout as needed
  }, []);

  if (loading) {
    return (
      <div className="loading-container h-[100vh] flex items-center justify-center">
        <Lottie options={options} height={400} width={400} />
      </div>
    );
  }

  const validatePassword = (password) => {
    const errors = [];
    if (password.length < 8) {
      errors.push("at least 8 characters long");
    }
    if (!/[A-Z]/.test(password)) {
      errors.push("one uppercase letter");
    }
    if (!/[a-z]/.test(password)) {
      errors.push("one lowercase letter");
    }
    if (!/\d/.test(password)) {
      errors.push("one number");
    }
    if (!/[@#$%^&*!]/.test(password)) {
      errors.push("one special character (e.g., @, #, $, etc.)");
    }

    if (errors.length > 0) {
      toast.error(`Password must include: ${errors.join(", ")}.`);
      return false;
    }
    return true;
  };

  const submitForm = (e) => {
    e.preventDefault();

    if (!validatePassword(pwd)) {
      return; // Stop submission if the password is invalid
    }

    fetch(api_base_url + "/signUp", {
      mode: "cors",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, name, email, password: pwd }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          toast.success("Account created successfully!");
          navigate("/login");
        } else {
          toast.error(data.message || "Signup failed. Please try again.");
        }
      })
      .catch(() => toast.error("An error occurred. Please try again."));
  };

  return (
    <div className="container w-screen min-h-screen flex items-center justify-between pl-[100px]">
      <div className="left w-[35%]">
        <img className="w-[260px] h-[310px] fixed mt-[-9rem]" src={logo} alt="App Logo" />
        <form onSubmit={submitForm} className="w-full mt-[60px] relative">
          <div className="inputBox">
            <input
              required
              onChange={(e) => setUsername(e.target.value)}
              value={username}
              type="text"
              placeholder="Username"
            />
          </div>
          <div className="inputBox">
            <input
              required
              onChange={(e) => setName(e.target.value)}
              value={name}
              type="text"
              placeholder="Name"
            />
          </div>
          <div className="inputBox">
            <input
              required
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              type="email"
              placeholder="Email"
            />
          </div>
          <div className="inputBox">
            <input
              required
              onChange={(e) => setPwd(e.target.value)}
              value={pwd}
              type="password"
              placeholder="Password"
            />
          </div>
          <p className="text-[gray]">
            Already have an account?{" "}
            <Link to="/login" className="text-[#00AEEF]">Login</Link>
          </p>
          <button className="btnBlue w-full mt-[20px]">Sign Up</button>
        </form>
      </div>
      <div className="right w-[55%]">
        <img className="h-[100vh] w-[100%] object-cover" src={image} alt="Side Graphic" />
      </div>
    </div>
  );
};

export default SignUp;
