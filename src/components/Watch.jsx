import React from "react";

const Watch = () => {
  return (
    <section className="bg-black py-20">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-32">
        <div className="md:w-1/2 mb-10 md:mb-0 text-center md:text-left ">
          <h2 className="text-5xl font-bold mb-4 text-white">
            Enjoy on your TV
          </h2>
          <h3 className="text-2xl text-white">
            Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray
            players and more.
          </h3>
        </div>

        <div className="md:w-1/2 flex justify-center md:justify-end">
          <img
            src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png"
            alt="Section 2"
            className="w-full h-auto max-w-md rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default Watch;