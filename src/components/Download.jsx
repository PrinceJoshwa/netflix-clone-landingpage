import React from "react";

import image from "../assets/download.jpg"


const Download = () => {
  return (
    <section className="bg-black py-20">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-32">
        <div className="md:w-1/2">
          <img
            src={image}
            alt="Section 1"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
        <div className="md:w-1/2 mb-10 md:mb-0 text-center md:text-left">
          <h2 className="text-5xl font-bold mb-4 text-white">
            Download your shows to watch offline
          </h2>
          <h3 className="text-2xl text-white">
            Save your favourites easily and always have something to watch.
          </h3>
        </div>
      </div>
    </section>
  );
};

export default Download;
