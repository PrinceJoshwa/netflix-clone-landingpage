import React from "react";

const Profile = () => {
  return (
    <section className="bg-black py-20 ">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-32">
        <div className="md:w-1/2 flex justify-center md:justify-start mb-10 md:mb-0">
          <img
            src="https://occ-0-2164-58.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABVr8nYuAg0xDpXDv0VI9HUoH7r2aGp4TKRCsKNQrMwxzTtr-NlwOHeS8bCI2oeZddmu3nMYr3j9MjYhHyjBASb1FaOGYZNYvPBCL.png?r=54d"
            alt="Section 1"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
        <div className="md:w-1/2 mb-10 md:mb-0 text-center md:text-left">
          <h2 className="text-5xl font-bold mb-4 text-white">
            Create profiles for kids
          </h2>
          <h3 className="text-2xl text-white">
            Send children on adventures with their favourite characters in a
            space made just for them—free with your membership.
          </h3>
        </div>
      </div>
    </section>
  );
};

export default Profile;
