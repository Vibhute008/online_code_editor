import React, { useState, useEffect } from 'react'
import logo from "../images/logo.svg"
import { Link, useNavigate } from 'react-router-dom';
import image from "../images/authPageSide.png";
import { api_base_url } from '../helper';
import { toast } from 'react-toastify';
import Lottie from "react-lottie"; // Import Lottie
import Loading from "../images/loading.json"; // Lottie animation JSON file

const Login = () => {
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");

  const [error, setError] = useState("");

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

  const submitForm = (e) => {
    e.preventDefault();
    fetch(api_base_url + "/login",{
      mode: "cors",
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email: email,
        password: pwd
      })
    }).then(res => res.json()).then(data => {
      if(data.success === true){
        localStorage.setItem("token", data.token);
        localStorage.setItem("isLoggedIn", true);
        localStorage.setItem("userId", data.userId);
        setTimeout(() => {
          window.location.href = "/"
        }, 200);
        toast.success("Login successful");
      } else {
        setError(data.message);
        toast.error(data.message);
      }
    })
  }

  return (
    <>
      <div className="container w-screen min-h-screen flex items-center justify-between pl-[100px]">
        <div className="left w-[35%]">
          <img className='w-[260px] h-[310px] fixed mt-[-9rem]' src={logo} alt="" />
          <form onSubmit={submitForm} className='w-full mt-[60px] relative' action="">

            <div className="inputBox">
              <input required onChange={(e)=>{setEmail(e.target.value)}} value={email} type="email" placeholder='Email'/>
            </div>

            <div className="inputBox">
              <input required onChange={(e)=>{setPwd(e.target.value)}} value={pwd} type="password" placeholder='Password'/>
            </div>

            <p className='text-[gray]'>Don't have an account <Link to="/signUp" className='text-[#00AEEF]'>Sign Up</Link></p>
            
            <p className='text-red-500 text-[14px] my-2'>{error}</p>

            <button className="btnBlue w-full mt-[20px]">Login</button>
          </form>
        </div>
        <div className="right w-[55%]">
          <img className='h-[100vh] w-[100%] object-cover' src={image} alt="" />
        </div>
      </div>
    </>
  )
}

export default Login