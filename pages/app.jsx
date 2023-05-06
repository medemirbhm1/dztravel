import Nav from "../components/Nav";
import React from "react";
import "leaflet/dist/leaflet.css";
import DynamicMap from "../components/DynamicMap";

function app() {
  
  return (
    <div>
      <Nav />
      <DynamicMap />
    </div>
  );
}

export default app;
