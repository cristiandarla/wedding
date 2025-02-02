import React from "react";
import Navbar from "./components/Navbar";
import Introduction from "./components/Introduction";
import Schedule from "./components/Schedule";
import Location from "./components/Location";
import Photos from "./components/Photos";
import Rsvp from "./components/Rsvp";


const App = () => {
  return (
    <div>
      <Navbar />
      <Introduction imageClassName={"first-img"}/>
      <Schedule />
      <Introduction imageClassName={"second-img"}/>
      <Location />
      <Introduction imageClassName={"third-img"}/>
      <Rsvp />
      <Introduction imageClassName={"forth-img"}/>
      <Photos />
    </div>
  );
};

export default App;
