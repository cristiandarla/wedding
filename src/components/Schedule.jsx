import React from "react";
import {schedule} from "../data.js"

const Schedule = () => {
  const eventsTitle = schedule.eventsTitle;
  const events = schedule.events;


  return (
    <section id="schedule" className="p-0 relative bg-[#e7ebde] w-full h-full">
      <div className="image-container h-full w-full absolute bg-cover bg-no-repeat bg-local bg-center"></div>
      <div className="h-full w-full py-8 md:py-16 flex flex-col justify-center items-center md:grid md:grid-cols-12 gap-8 md:gap-0 text-center ">
        <div className="z-10 h-full w-full md:col-span-1 md:flex md:flex-col md:justify-center md:items-center">
          <h1 className="font-gistesy text-3xl md:-rotate-90">{eventsTitle}</h1>
        </div>
        <div className="z-20 h-full w-full px-4 sm:max-md:px-8 md:px-0 md:grid md:grid-cols-12 md:col-span-11">

          {events.map((event, index) => (
            <div key={index} className={`grid grid-cols-4 py-4 gap-2 sm:max-md:gap-4 md:gap-0 md:py-0 border-black border-b last:border-b-0 md:border-b-0 md:border-r last:border-r-0 md:flex md:flex-col md:col-span-4 `}>
              <div id="schedule-image" className="col-span-1">
                <img src={event.icon} alt={event.title} className="mx-auto mb-3 w-20 h-auto" />
              </div>
              <div id="schedule-text" className="col-span-3">
                <h4 className="font-tt-commons-pro-bold text-xl">Ora {event.time}</h4>
                <a href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(event.location_maps)}`} target="_blank" rel="noopener noreferrer">
                  <h6 className="m-0 font-tt-commons-pro">{`${event.location}${event.hasOwnProperty('location_extra') ? ', ' + event.location_extra : ''}`}</h6>
                </a>
                <a href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(event.location_maps)}`} target="_blank" rel="noopener noreferrer">
                  <p className="m-0 font-tt-commons-pro-thin">{event.address}</p>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Schedule;
