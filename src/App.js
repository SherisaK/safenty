import ReportForm from "./components/ReportForm";

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="text-center py-4 bg-blue-700 text-white">
        <h1 className="text-2xl font-bold">SafeNet Guyana – HSSE Reporting</h1>
      </header>
      <main className="p-4">
        <ReportForm />
      </main>
    </div>
  );
}

export default App;
