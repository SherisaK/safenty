import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

// Dummy incident data
const incident = {
  id: 1,
  date: '2025-07-04',
  severity: 'High',
  industry: 'Construction',
  description: 'Crane collapse incident at site.',
  location: { lat: 6.8, lng: -58.15 }, // Example coords in Guyana
};

export default function Dashboard() {
  return (
    <div className="max-w-5xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Public Dashboard</h1>

      {/* Incident Card */}
      <div className="bg-white shadow-md rounded p-6 mb-6">
        <h2 className="text-xl font-semibold mb-2">Recent Incident</h2>
        <p><strong>Date:</strong> {incident.date}</p>
        <p><strong>Severity:</strong> {incident.severity}</p>
        <p><strong>Industry:</strong> {incident.industry}</p>
        <p><strong>Description:</strong> {incident.description}</p>
      </div>

      {/* Map Container */}
      <div className="h-64 mb-6 rounded overflow-hidden shadow-md">
        <MapContainer
          center={[incident.location.lat, incident.location.lng]}
          zoom={13}
          scrollWheelZoom={false}
          style={{ height: '100%', width: '100%' }}
        >
          <TileLayer
            attribution='&copy; <a href="https://osm.org/copyright">OpenStreetMap</a>'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={[incident.location.lat, incident.location.lng]}>
            <Popup>
              {incident.description} <br /> Location on map.
            </Popup>
          </Marker>
        </MapContainer>
      </div>

      {/* Stats Placeholder */}
      <div className="bg-white shadow-md rounded p-6">
        <h2 className="text-xl font-semibold mb-4">Statistics</h2>
        <p>Statistics data will go here (charts, counts, etc.)</p>
      </div>
    </div>
  );
}
