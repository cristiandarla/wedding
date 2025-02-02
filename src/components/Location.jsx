import React from "react";
import { location } from "../data"

const Location = () => {

  const locationTitle = location.locationTitle;
  const locations = location.locations;

  return (
    <section id="location" className="py-0 bg-[#e7ebde] relative w-full h-full">
      <div className="image-container h-full w-full absolute bg-cover bg-no-repeat bg-local bg-center"></div>
      <div className="h-full w-full py-8 flex flex-col justify-center items-center md:grid md:grid-cols-12 md:gap-0 text-center">
        <div className="h-full w-full md:col-span-1 md:flex md:flex-col md:justify-center md:items-center">
          <h1 className="font-gistesy text-3xl md:max-lg:text-5xl md:text-6xl md:-rotate-90">{locationTitle}</h1>
        </div>
        <div className="md:grid md:grid-col-12 md:col-span-11">
          {locations.map((item, index) => (
            <div key={index} className="border-black border-b last:border-b-0 py-8 mx-4 md:grid md:grid-cols-12 md:gap-8">
              <div className={`pb-8 md:col-span-3 md:flex md:flex-col md:items-center md:justify-center ${index % 2 ? '' : 'md:hidden'}`}>
                <img src={item.imagePath} className="w-full" alt={item.name} />
              </div>
              <div className="md:col-span-9 md:flex md:flex-col md:justify-center md:items-center">
                <p className="lead">{item.text}</p>
              </div>
              <div className={`pb-8 md:col-span-3 md:flex md:flex-col md:items-center md:justify-center ${index % 2 ? 'hidden md:hidden' : 'hidden'}`}>
                <img src={item.imagePath} className="w-full" alt={item.name} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Location;
