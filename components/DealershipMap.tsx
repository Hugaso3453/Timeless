"use client";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import type { LatLngExpression } from "leaflet";

import L from "leaflet";
import "leaflet/dist/leaflet.css";

const DefaultIcon = L.icon({
  iconUrl: "/marker-icon.png",
  iconRetinaUrl: "/marker-icon-2x.png",
  shadowUrl: "/marker-shadow.png",
  iconSize: [25, 41],        // default Leaflet size
  iconAnchor: [12, 41],      // bottom center
  popupAnchor: [1, -34],     // popup position
  shadowSize: [41, 41],
});

export type Dealership = {
  id: number;
  name: string;
  city: string;
  position: LatLngExpression;
};

const dealerships: Dealership[] = [
  { id: 1, name: "Timeless Madrid", city: "Madrid", position: [40.4168, -3.7038] },
  { id: 2, name: "Timeless Barcelona", city: "Barcelona", position: [41.3874, 2.1686] },
  { id: 3, name: "Timeless Valencia", city: "Valencia", position: [39.4699, -0.3763] },
  { id: 4, name: "Timeless Sevilla", city: "Sevilla", position: [37.3891, -5.9845] },
];

const SPAIN_CENTER: LatLngExpression = [40.0, -3.7];

type Props = {
  onDealerClick: (dealer: Dealership) => void;
};

export default function DealershipMap({ onDealerClick }: Props) {
  return (
    <MapContainer
      center={SPAIN_CENTER}
      zoom={6.5}
      scrollWheelZoom={false}
      dragging={false}
      zoomControl={false}
      className="h-full w-full"
    >
      <TileLayer
        attribution='&copy; OpenStreetMap contributors'
        url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
      />

      {dealerships.map((dealer) => (
        <Marker
          key={dealer.id}
          position={dealer.position}
          icon={DefaultIcon}
          eventHandlers={
            onDealerClick
              ? {
                  click: () => onDealerClick(dealer),
                }
              : undefined
          }
        >
          <Popup>{dealer.name}</Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}

