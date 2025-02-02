import React from "react";
import {introduction} from "../data.js"

export default function Introduction({ imageClassName }){

  return (
    <section id="introduction" className="flex flex-col justify-center items-center m-0 p-0 w-screen h-screen">
      <div className={`bg-cover bg-no-repeat bg-fixed bg-center opacity-50 w-full h-full ${imageClassName}`}></div>
      <div className={`absolute w-full h-full flex flex-col justify-center items-center md:grid md:grid-cols-2`}>
        <div className="pb-4 md:pb-0 md:pr-4 text-center md:text-end border-black border-b-2 md:border-b-0 md:border-r">
          <h1 className="font-gistesy text-3xl md:text-4xl">{`${introduction.bridesName} &`}</h1>
          <h1 className="font-gistesy text-3xl md:text-4xl">{introduction.groomsName}</h1>

        </div>
        <div className="pt-4 md:pt-0 md:pl-4 text-center md:text-start">
          <h2 className="font-blackmango">{introduction.date}</h2>
          <h1 className="font-blackmango">{introduction.year}</h1>
          <h3 className="font-blackmango">{introduction.city}</h3>
        </div>
      </div>
    </section>
  );
}; 