import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";

function DetailsMap({ location, place }) {
  return (
    <div className="relative container mt-16">
      <h2 className="text-lg lg:text-2xl mb-6 font-bold text-gray-900 dark:text-white">
        Location
      </h2>
      <MapContainer
        className="h-80 z-0 rounded-md"
        center={location}
        zoom={18}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
      </MapContainer>
    </div>
  );
}

export default DetailsMap;
