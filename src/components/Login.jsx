import React from "react";
import bannerImage from "../assets/banner.jpg";
import logo from "../assets/logo.png";

const Login = () => {
  return (
    <div className="relative h-screen bg-cover bg-center"
         style={{ backgroundImage: `url(${bannerImage})`, backgroundSize: "cover" }}>
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>
      
      <div className="absolute top-0 left-58">
        <img src={logo} alt="Logo" className="h-22" />
      </div>
      
      <div className="relative z-10 flex items-center justify-center h-[800px]">
        <div className=" bg-black bg-opacity-80 rounded-lg w-full max-w-md px-16 py-14">

          <h2 className="text-white text-3xl font-bold mb-6">Sign In</h2>
          
          <form className="flex flex-col space-y-4">
            <input
              type="text"
              placeholder="Email or phone number"
              className="px-4 py-3 rounded-md border border-gray-600 bg-transparent text-white placeholder-gray-400 "
            />
            <input
              type="password"
              placeholder="Password"
              className="px-4 py-3 rounded-md border border-gray-600 bg-transparent text-white placeholder-gray-400"
            />
            <button className="bg-red-600 text-white py-3 rounded-md">
              Sign In
            </button>
            
            <div className="text-gray-400 flex flex-col space-y-4 mt-4">
                <span className="text-center">or</span>
              <div className="text-center">
                <button className="bg-white bg-opacity-20 text-white py-2 px-24 text-nowrap rounded">
                  use a sign-in code
                </button>
              </div>
              <a href="/forgot-password" className="text-white text-center">
                Forgot password?
              </a>
              <div className="flex items-center text-white">
                <input type="checkbox" id="remember-me" className="mr-2" />
                <label htmlFor="remember-me">Remember me</label>
              </div>
              <div className="text-gray-400">
                New to Netflix? <a href="/signup" className="text-white">Sign up now.</a>
              </div>
              <div className="text-gray-400 text-sm">
              This page is protected by Google reCAPTCHA to ensure you're not a bot. <a href="/learnmore" className="text-blue-800">LearnMore.</a>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
