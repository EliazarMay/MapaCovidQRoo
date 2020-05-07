import React from "react";
import { Map, Marker, Popup, TileLayer } from "react-leaflet";
import { Icon } from "leaflet";
import useSwr from "swr";
import "./App.css";

const fetcher = (...args) => fetch(...args).then(response => response.json());


const icon = new Icon({
  iconUrl: "/virus.svg",
  iconSize: [25, 25]
});


export default function App() {
  const url =
    "https://data.police.uk/api/crimes-street/all-crime?lat=52.629729&lng=-1.131592&date=2019-10";
  const { data, error } = useSwr(url, fetcher);
  const cases = data && !error ? data.slice(0, 50) : [];
  const [activeCrime, setActiveCrime] = React.useState(null);

  return (
    <Map center={[52.6376, -1.135171]} zoom={12}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />

      {cases.map(crime => (
        <Marker
          position={[crime.location.latitude, crime.location.longitude]}
          icon={icon}
          onClick={() => {

          }}
        />
      ))}
    </Map>
  );
}
