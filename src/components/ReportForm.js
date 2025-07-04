import { useState } from "react";
import { supabase } from "../supabaseClient";

export default function ReportForm() {
  const [form, setForm] = useState({
    reporter_name: "",
    is_anonymous: false,
    incident_description: "",
    date_of_incident: "",
    latitude: "",
    longitude: "",
    location_text: "",
    severity: "",
    industry: "",
    regulation_class: "",
    employer_details: "",
    type_of_accident: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((f) => ({ ...f, [name]: type === "checkbox" ? checked : value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // Build row; if anonymous flag set, blank out name
    const row = {
      ...form,
      reporter_name: form.is_anonymous ? null : form.reporter_name,
      latitude: form.latitude ? Number(form.latitude) : null,
      longitude: form.longitude ? Number(form.longitude) : null,
    };

    const { error } = await supabase.from("reports").insert(row);

    if (error) {
      alert("Error: " + error.message);
    } else {
      alert("Report submitted – thank you!");
      setForm({
        reporter_name: "",
        is_anonymous: false,
        incident_description: "",
        date_of_incident: "",
        latitude: "",
        longitude: "",
        location_text: "",
        severity: "",
        industry: "",
        regulation_class: "",
        employer_details: "",
        type_of_accident: "",
      });
    }
    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto p-4">
      <h2 className="text-xl font-bold mb-2">Submit HSSE Report</h2>

      <label className="block">Your Name (optional)</label>
      <input
        name="reporter_name"
        value={form.reporter_name}
        onChange={handleChange}
        disabled={form.is_anonymous}
        className="border p-2 w-full mb-2"
      />

      <label className="inline-flex items-center mb-3">
        <input
          type="checkbox"
          name="is_anonymous"
          checked={form.is_anonymous}
          onChange={handleChange}
          className="mr-2"
        />
        Submit anonymously
      </label>

      <label className="block">Incident Description*</label>
      <textarea
        name="incident_description"
        value={form.incident_description}
        onChange={handleChange}
        required
        className="border p-2 w-full mb-2"
      />

      <label className="block">Date of Incident*</label>
      <input
        type="date"
        name="date_of_incident"
        value={form.date_of_incident}
        onChange={handleChange}
        required
        className="border p-2 w-full mb-2"
      />

      {/* You can collapse the following fields later with accordions */}
      <label className="block">Latitude</label>
      <input
        name="latitude"
        value={form.latitude}
        onChange={handleChange}
        className="border p-2 w-full mb-2"
      />

      <label className="block">Longitude</label>
      <input
        name="longitude"
        value={form.longitude}
        onChange={handleChange}
        className="border p-2 w-full mb-2"
      />

      <label className="block">Text Location (Village, Site, etc.)</label>
      <input
        name="location_text"
        value={form.location_text}
        onChange={handleChange}
        className="border p-2 w-full mb-2"
      />

      <label className="block">Severity</label>
      <input
        name="severity"
        value={form.severity}
        onChange={handleChange}
        className="border p-2 w-full mb-2"
      />

      <label className="block">Industry</label>
      <input
        name="industry"
        value={form.industry}
        onChange={handleChange}
        className="border p-2 w-full mb-2"
      />

      <label className="block">Regulation Class</label>
      <input
        name="regulation_class"
        value={form.regulation_class}
        onChange={handleChange}
        className="border p-2 w-full mb-2"
      />

      <label className="block">Employer Details</label>
      <input
        name="employer_details"
        value={form.employer_details}
        onChange={handleChange}
        className="border p-2 w-full mb-2"
      />

      <label className="block">Type of Accident</label>
      <input
        name="type_of_accident"
        value={form.type_of_accident}
        onChange={handleChange}
        className="border p-2 w-full mb-2"
      />

      <button
        disabled={loading}
        className="bg-blue-600 text-white px-4 py-2 rounded"
      >
        {loading ? "Submitting…" : "Submit"}
      </button>
    </form>
  );
}
