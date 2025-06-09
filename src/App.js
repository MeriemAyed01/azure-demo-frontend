import { useEffect, useState } from "react";
export default function App() {
  const [time, setTime] = useState("loading...");
  useEffect(() => {
    fetch("/api/time")
      .then((res) => res.json())
      .then((d) => setTime(d.now))
      .catch(() => setTime("error"));
  }, []);
  return (
    <main className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-3xl font-bold mb-4">Azure Demo Frontend</h1>
      <p>Current DB time: {time}</p>
    </main>
  );
}