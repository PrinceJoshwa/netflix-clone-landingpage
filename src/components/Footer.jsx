// import React from "react";

// const Footer = () => {
//   return (
//     <footer className="bg-black text-white py-10 px-32">
//       <div className="text-left mb-8">
//         <p className="text-lg">Question? Call 000-800-919-1694</p>
//       </div>

//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center md:text-left mb-8 px-4 md:px-0">
//         <div>
//           <ul>
//             <li className="mb-2">
//               <a href="#" className="hover:underline">
//                 FAQ
//               </a>
//             </li>
//             <li className="mb-2">
//               <a href="#" className="hover:underline">
//                 Investor Relations
//               </a>
//             </li>
//             <li className="mb-2">
//               <a href="#" className="hover:underline">
//                 Privacy
//               </a>
//             </li>
//             <li className="mb-2">
//               <a href="#" className="hover:underline">
//                 Speed Test
//               </a>
//             </li>
//           </ul>
//         </div>
//         <div>
//           <ul>
//             <li className="mb-2">
//               <a href="#" className="hover:underline">
//                 Help Centre
//               </a>
//             </li>
//             <li className="mb-2">
//               <a href="#" className="hover:underline">
//                 Jobs
//               </a>
//             </li>
//             <li className="mb-2">
//               <a href="#" className="hover:underline">
//                 Cookie Preferences
//               </a>
//             </li>
//             <li className="mb-2">
//               <a href="#" className="hover:underline">
//                 Legal Notices
//               </a>
//             </li>
//           </ul>
//         </div>
//         <div>
//           <ul>
//             <li className="mb-2">
//               <a href="#" className="hover:underline">
//                 Account
//               </a>
//             </li>
//             <li className="mb-2">
//               <a href="#" className="hover:underline">
//                 Ways to Watch
//               </a>
//             </li>
//             <li className="mb-2">
//               <a href="#" className="hover:underline">
//                 Corporate Information
//               </a>
//             </li>
//             <li className="mb-2">
//               <a href="#" className="hover:underline">
//                 Only on Netflix
//               </a>
//             </li>
//           </ul>
//         </div>
//         <div>
//           <ul>
//             <li className="mb-2">
//               <a href="#" className="hover:underline">
//                 Media Centre
//               </a>
//             </li>
//             <li className="mb-2">
//               <a href="#" className="hover:underline">
//                 Terms of Use
//               </a>
//             </li>
//             <li className="mb-2">
//               <a href="#" className="hover:underline">
//                 Contact Us
//               </a>
//             </li>
//           </ul>
//         </div>
//       </div>

//       <div className="flex items-center space-x-4">
//         <select className="bg-inherit text-white p-1 rounded-md hover:outline border border-white">
//           <option value="en" className="text-black">English</option>
//           <option value="es" className="text-black">हिन्दी</option>
//         </select>
//       </div>
//       <br />
//       <div className="text-left">
//         <p>Netflix India</p>
//       </div>
//     </footer>
//   );
// };

// export default Footer;



import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-400 py-16 px-4 md:px-32">
      <div className="container mx-auto">
        <div className="mb-8">
          <p className="text-lg">Questions? Call 000-123-456-7890</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <ul className="space-y-3">
              <li><a href="#" className="hover:underline">FAQ</a></li>
              <li><a href="#" className="hover:underline">Investor Relations</a></li>
              <li><a href="#" className="hover:underline">Privacy</a></li>
              <li><a href="#" className="hover:underline">Speed Test</a></li>
            </ul>
          </div>
          <div>
            <ul className="space-y-3">
              <li><a href="#" className="hover:underline">Help Centre</a></li>
              <li><a href="#" className="hover:underline">Jobs</a></li>
              <li><a href="#" className="hover:underline">Cookie Preferences</a></li>
              <li><a href="#" className="hover:underline">Legal Notices</a></li>
            </ul>
          </div>
          <div>
            <ul className="space-y-3">
              <li><a href="#" className="hover:underline">Account</a></li>
              <li><a href="#" className="hover:underline">Ways to Watch</a></li>
              <li><a href="#" className="hover:underline">Corporate Information</a></li>
              <li><a href="#" className="hover:underline">Only on Netflix</a></li>
            </ul>
          </div>
          <div>
            <ul className="space-y-3">
              <li><a href="#" className="hover:underline">Media Centre</a></li>
              <li><a href="#" className="hover:underline">Terms of Use</a></li>
              <li><a href="#" className="hover:underline">Contact Us</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-8">
          <select className="bg-transparent text-white p-2 rounded-md border border-gray-600 appearance-none pr-8">
            <option value="en" className="text-black">English</option>
            <option value="hi" className="text-black">हिन्दी</option>
          </select>
        </div>

        <div className="mt-6">
          <p>Netflix India</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;