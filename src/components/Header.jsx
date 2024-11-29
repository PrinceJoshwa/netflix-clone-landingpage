// import React from "react";
// import { useNavigate } from "react-router-dom"; 
// import bannerImage from "../assets/banner.jpg";
// import logo from "../assets/logo.png";
// import { AiOutlineRight } from "react-icons/ai";
// import { BsFillCaretDownFill } from "react-icons/bs";

// const Header = () => {
//   const navigate = useNavigate(); 

//   return (
//     <header
//       className="relative h-[700px] bg-cover bg-center text-white object-center"
//       style={{
//         backgroundImage: `url(${bannerImage})`,
//         backgroundSize: "130%",
//       }}
//     >
//       <div className="absolute inset-0 bg-black bg-opacity-60"></div>

//       <div className="relative z-10 container mx-auto flex justify-between items-center px-4 pt-6">
//         <div className="flex items-center">
//           <img src={logo} alt="Logo" className="h-25" />
//         </div>

//         <div className="flex items-center space-x-2">
//           <div className="relative">
//             <select className="bg-inherit text-white p-1 rounded-md border border-white text-lg appearance-none pr-10 hover:outline">
//               <option value="en" className="text-black">English</option>
//               <option value="es" className="text-black">हिन्दी</option>
//             </select>
//             <BsFillCaretDownFill className="absolute right-2 top-1/2 transform -translate-y-1/2 text-white text-lg pointer-events-none" />
//           </div>
//           <button
//             className="bg-red-600 text-white px-4 py-1 rounded-md text-lg"
//             onClick={() => navigate("/login")} 
//           >
//             Sign In
//           </button>
//         </div>
//       </div>

//       <div className="relative z-10 flex flex-col items-center justify-center text-center h-[500px]">
//         <h1 className="text-5xl font-bold mb-4">
//           Unlimited movies, TV shows, and more
//         </h1>
//         <h2 className="text-2xl mb-4">Watch anywhere. Cancel anytime.</h2>
//         <h4 className="text-xl ">
//           Ready to watch? Enter your email to create or restart your membership.
//         </h4>

//         <div className="mt-8 flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-4">
//           <div className="relative w-full md:w-80">
//             <input
//               type="email"
//               placeholder=" "
//               className="peer bg-transparent border border-white text-white py-3 px-4 rounded-md w-full text-base placeholder-transparent"
//             />
//             <label
//               className="absolute left-4 top-3 text-base text-white transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-white peer-focus:top-1 peer-focus:text-sm peer-focus:text-gray-400"
//               htmlFor="email"
//             >
//               Enter your email
//             </label>
//           </div>
//           <button className="bg-red-600 text-white py-3 px-6 rounded-md w-full md:w-auto text-lg flex items-center justify-center">
//             Get Started
//             <AiOutlineRight className="ml-2 text-xl" />
//           </button>
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Header;


import React from "react";
import { useNavigate } from "react-router-dom";
import { AiOutlineRight } from "react-icons/ai";
import { BsFillCaretDownFill } from "react-icons/bs";
import Logo from "./common/Logo";

const Header = () => {
  const navigate = useNavigate();

  return (
    <header
      className="relative h-[700px] bg-cover bg-center text-white"
      style={{
        backgroundImage: `url('https://assets.nflxext.com/ffe/siteui/vlv3/c31c3123-3df7-4359-8b8c-475bd2d9925d/15feb590-3d73-45e9-9e4a-2eb334c83921/IN-en-20231225-popsignuptwoweeks-perspective_alpha_website_large.jpg')`,
        backgroundSize: "cover"
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>

      <div className="relative z-10 container mx-auto flex justify-between items-center px-4 pt-6">
        <div className="flex items-center">
          <Logo />
        </div>

        <div className="flex items-center space-x-4">
          <div className="relative">
            <select className="bg-transparent text-white p-2 rounded-md border border-white text-lg appearance-none pr-10">
              <option value="en" className="text-black">English</option>
              <option value="hi" className="text-black">हिन्दी</option>
            </select>
            <BsFillCaretDownFill className="absolute right-2 top-1/2 transform -translate-y-1/2 text-white" />
          </div>
          <button
            className="bg-red-600 text-white px-4 py-2 rounded-md text-lg hover:bg-red-700 transition-colors"
            onClick={() => navigate("/login")}
          >
            Sign In
          </button>
        </div>
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center text-center h-[500px] px-4">
        <h1 className="text-5xl font-bold mb-4">
          Unlimited movies, TV shows, and more
        </h1>
        <h2 className="text-2xl mb-4">Watch anywhere. Cancel anytime.</h2>
        <h4 className="text-xl">
          Ready to watch? Enter your email to create or restart your membership.
        </h4>

        <form className="mt-8 flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-4 w-full max-w-3xl">
          <div className="relative w-full md:w-96">
            <input
              type="email"
              placeholder="Email address"
              className="w-full px-4 py-3 bg-black bg-opacity-70 border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:border-white"
              required
            />
          </div>
          <button type="submit" className="bg-red-600 text-white py-3 px-8 rounded-md text-lg flex items-center justify-center hover:bg-red-700 transition-colors whitespace-nowrap">
            Get Started
            <AiOutlineRight className="ml-2" />
          </button>
        </form>
      </div>
    </header>
  );
};

export default Header;