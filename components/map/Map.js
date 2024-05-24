"use client";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { useRef } from "react";

import "leaflet/dist/leaflet.css";
import { Box, Typography, Button } from "@mui/material";
import { Icon } from "leaflet";
import Link from "next/link";
const legalIcon = new Icon({
  iconUrl: "https://img.icons8.com/color/marker",
  iconSize: [35, 35],
});

export function Map() {
  //   const [center, setCenter] = useState({ lat: 13.084622, lng: 80.248357 });
  const ZOOM_LEVEL = 9;
  const mapRef = useRef();
  const position = [39.925425504135205, 32.83710005406194];

  const cityData = [
    {
      city: "Ankara",
      position: [39.925425504135205, 32.83710005406194],
    },
    {
      city: "Yozgat",
      position: [39.82314165533662, 34.807956776251864],
    },

    {
      city: "Çorum",
      position: [40.5520214524454, 34.954603217758134],
    },
  ];

  const mockData = [
    {
      companyName: "Gib Teknoloji",
      city: "Ankara",
      description: "Lorem ipsum ahmed sit lorem",
      tag: "Software House",
      endpoint: "gib-teknoloji",
    },
    {
      companyName: "Foto Alper",
      city: "Yozgat",
      description: "Lorem ipsum ahmed sit lorem",
      tag: "Software House",
      endpoint: "foto-alper",
    },

    {
      companyName: "Bilmem Ne Tuhafiye",
      city: "Çorum",
      description: "Lorem ipsum ahmed sit lorem",
      tag: "Software House",
      endpoint: "bilmem-ne",
    },

    {
      companyName: "Aselsan",
      city: "Ankara",
      description: "Lorem ipsum ahmed sit lorem",
      tag: "aselsan",
      endpoint: "Aselsan",
    },
  ];

  return (
    <MapContainer
      center={position}
      zoom={ZOOM_LEVEL}
      ref={mapRef}
      style={{ width: "100%", height: "100%" }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {cityData.map((cityInfo, index) => {
        const cityMockData = mockData.filter(
          (item) => item.city === cityInfo.city
        );
        if (cityMockData.length === 0) {
          return null;
        }
        return (
          <Marker key={index} position={cityInfo.position} icon={legalIcon}>
            <Popup>
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                {cityMockData.map((company, index) => (
                  <Link href={`${company.endpoint}`}>
                    <Button key={index}> {company.companyName}</Button>
                  </Link>
                ))}
              </Box>
            </Popup>
          </Marker>
        );
      })}
    </MapContainer>
  );
}
