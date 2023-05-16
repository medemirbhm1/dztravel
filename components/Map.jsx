import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useCallback, useContext, useEffect, useState } from "react";
import { authContext } from "@/context/authContext";
import Link from "next/link";
import Nav from "./Nav";

const Map = () => {
  const { access } = useContext(authContext);
  const { data } = useQuery(["places"], async () => {
    const res = await axios.get(
      "https://modulus-project.onrender.com/AllLieux",
      {
        headers: {
          Authorization: `JWT ${access}`,
        },
      }
    );
    return res.data;
  });
  const [location, setLocation] = useState([36.737232, 3.086472]);
  const successCallback = useCallback(({ coords }) => {
    setLocation([coords.latitude, coords.longitude]);
  });
  useEffect(() => {
    const id = navigator.geolocation.watchPosition(successCallback, () => {});
    return () => {
      navigator.geolocation.clearWatch(id);
    };
  }, []);
  return (
    <div className="relative">
      <Nav />
      <MapContainer
        className="h-screen z-0"
        center={location}
        zoom={13}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {data?.map(({ latitude, longitude, id, nom }) => (
          <Marker position={[latitude, longitude]} key={id}>
            <Popup>
              <Link href={`/details/${id}`}>
                <span className="font-medium text-lg font-sans text-black capitalize hover:underline">
                  {nom}
                </span>
              </Link>
            </Popup>
          </Marker>
        ))}
        <Marker position={location}>
          <Popup>You</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default Map;
