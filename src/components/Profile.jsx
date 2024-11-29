// import React from "react";
// import image from "../assets/profile.png"

// const Profile = () => {
//   return (
//     <section className="bg-black py-20 ">
//       <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-32">
//         <div className="md:w-1/2 flex justify-center md:justify-start mb-10 md:mb-0">
//           <img
//             src={image}
//             alt="Section 1"
//             className="w-full h-auto rounded-lg shadow-lg"
//           />
//         </div>
//         <div className="md:w-1/2 mb-10 md:mb-0 text-center md:text-left">
//           <h2 className="text-5xl font-bold mb-4 text-white">
//             Create profiles for kids
//           </h2>
//           <h3 className="text-2xl text-white">
//             Send children on adventures with their favourite characters in a
//             space made just for them—free with your membership.
//           </h3>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Profile;

import React from "react";

const Profile = () => {
  return (
    <section className="bg-black py-20">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4 md:px-32">
        <div className="md:w-1/2 flex justify-center md:justify-start mb-10 md:mb-0">
          <img
            src="https://occ-0-2482-3646.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABfpnX3dbgjZ-Je8Ax3xn0kXehZm_5L6-xe6YSTq_ucht9TI5jwDMqusWZKNYT8DfGudD0_wWVVTFLiN2_kaQJumz2iivUWbIbAtF.png"
            alt="Kids Profile"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
        <div className="md:w-1/2 text-center md:text-left">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Create profiles for kids
          </h2>
          <h3 className="text-xl md:text-2xl text-white">
            Send children on adventures with their favorite characters in a
            space made just for them—free with your membership.
          </h3>
        </div>
      </div>
    </section>
  );
};

export default Profile;