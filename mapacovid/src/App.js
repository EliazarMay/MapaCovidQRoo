import React from "react";
import { Map, Marker, Popup, TileLayer } from "react-leaflet";
import { Icon } from "leaflet";
import useSwr from "swr";
import "./App.css";

const fetcher = (...args) => fetch(...args).then(response => response.json());


const icon = new Icon({
  iconUrl: "/cows.svg",
  iconSize: [60, 60]
});

const pumas = new Icon({
  iconUrl: "/Pumas.svg",
  iconSize: [60, 60]
});

export default function App() {
  /*const url =
    "https://data.police.uk/api/crimes-street/all-crime?lat=52.629729&lng=-1.131592&date=2019-10";
  const { data, error } = useSwr(url, fetcher);
  const cases = data && !error ? data.slice(0, 50) : [];
  const [activeCrime, setActiveCrime] = React.useState(null);
  */
  return (
    <Map center={[21.1607406, -86.8613988]} zoom={12}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
        <Marker
          position={[21.1607406, -86.8613988]}
          icon={icon}
          onClick={() => {

          }}
        />
        <Marker
          position={[21.1756608, -86.8402514]}
          icon={icon}
          onClick={() => {

          }}
        />
        <Marker
          position={[21.177697, -86.8220446]}
          icon={icon}
          onClick={() => {

          }}
        />
        <Marker
          position={[21.1846515, -86.8532496]}
          icon={pumas}
          onClick={() => {

          }}
        />
      </Map>
  );
}
