import React from "react";
import bannerImage from "../assets/banner.jpg";
import logo from "../assets/logo.png";
import { AiOutlineRight } from "react-icons/ai";
import { BsFillCaretDownFill } from "react-icons/bs";

const Header = () => {
  return (
    <header
      className="relative h-[700px] bg-cover bg-center text-white object-center"
      style={{
        backgroundImage: `url(${bannerImage})`,
        backgroundSize: "130%",
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>

      <div className="relative z-10 container mx-auto flex justify-between items-center px-4 pt-6">
        <div className="flex items-center">
          <img src={logo} alt="Logo" className="h-25" />
        </div>

        <div className="flex
         items-center space-x-2">
          <div className="relative">
            <select className="bg-inherit text-white p-1 rounded-md border border-white text-lg appearance-none pr-10 hover:outline">
              <option value="en" className="text-black">English</option>
              <option value="es" className="text-black">हिन्दी</option>
            </select>
            <BsFillCaretDownFill className="absolute right-2 top-1/2 transform -translate-y-1/2 text-white text-lg pointer-events-none" />
          </div>
          <button className="bg-red-600 text-white px-4 py-1 rounded-md text-lg">
            Sign In
          </button>
        </div>
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center text-center h-[500px]">
        <h1 className="text-5xl font-bold mb-4">
          Unlimited movies, TV shows, and more
        </h1>
        <h2 className="text-2xl mb-4">Watch anywhere. Cancel anytime.</h2>
        <h4 className="text-xl ">
          Ready to watch? Enter your email to create or restart your membership.
        </h4>

        <div className="mt-8 flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-4">
          <div className="relative w-full md:w-80">
            <input
              type="email"
              placeholder=" "
              className="peer bg-transparent border border-white text-white py-3 px-4 rounded-md w-full text-base placeholder-transparent"
            />
            <label
              className="absolute left-4 top-3 text-base text-white transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-white peer-focus:top-1 peer-focus:text-sm peer-focus:text-gray-400"
              htmlFor="email"
            >
              Enter your email
            </label>
          </div>
          <button className="bg-red-600 text-white py-3 px-6 rounded-md w-full md:w-auto text-lg flex items-center justify-center">
            Get Started
            <AiOutlineRight className="ml-2 text-xl" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
