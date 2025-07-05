import { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "leaflet/dist/leaflet.css";

const dummyIncidents = [
  {
    id: 1,
    title: "Chemical Spill at Factory",
    date: "2025-07-01",
    severity: "High",
    industry: "Manufacturing",
    description: "A hazardous chemical spill occurred in a textile factory.",
    location: [6.8013, -58.1551],
  },
  {
    id: 2,
    title: "Power Line Failure",
    date: "2025-07-02",
    severity: "Medium",
    industry: "Utilities",
    description: "High voltage line collapse caused a major outage.",
    location: [6.8278, -58.1631],
  },
];

const dummyStats = [
  { name: "Manufacturing", reports: 14 },
  { name: "Utilities", reports: 10 },
  { name: "Mining", reports: 5 },
  { name: "Construction", reports: 8 },
];

export default function Dashboard() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentIncident = dummyIncidents[currentIndex];

  const nextIncident = () => {
    setCurrentIndex((prev) => (prev + 1) % dummyIncidents.length);
  };

  const prevIncident = () => {
    setCurrentIndex((prev) => (prev - 1 + dummyIncidents.length) % dummyIncidents.length);
  };

  return (
    <div className="bg-gray-50 min-h-screen py-8 px-4">
      <div className="max-w-5xl mx-auto space-y-6">
        {/* Incident Viewer */}
        <div className="bg-white shadow-xl rounded-2xl p-6 relative border border-gray-200">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Recent Incident</h2>
          <button
            onClick={prevIncident}
            className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white border rounded-full p-2 shadow hover:bg-gray-100"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            onClick={nextIncident}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white border rounded-full p-2 shadow hover:bg-gray-100"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
          <div className="space-y-2">
            <p className="text-lg font-bold text-blue-600">{currentIncident.title}</p>
            <p className="text-sm text-gray-600">Date: {currentIncident.date}</p>
            <p className="text-sm text-gray-600">Severity: {currentIncident.severity}</p>
            <p className="text-sm text-gray-600">Industry: {currentIncident.industry}</p>
            <p className="text-sm text-gray-700">{currentIncident.description}</p>
          </div>
        </div>

        {/* Map */}
        <div className="bg-white shadow-xl rounded-2xl p-6 border border-gray-200">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Incident Location</h2>
          <MapContainer
            center={currentIncident.location}
            zoom={13}
            scrollWheelZoom={false}
            className="h-64 w-full rounded-lg z-0"
          >
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={currentIncident.location}>
              <Popup>{currentIncident.title}</Popup>
            </Marker>
          </MapContainer>
        </div>

        {/* Stats */}
        <div className="bg-white shadow-xl rounded-2xl p-6 border border-gray-200">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Reports by Industry</h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={dummyStats} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
              <XAxis dataKey="name" stroke="#8884d8" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="reports" fill="#60A5FA" radius={[10, 10, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
