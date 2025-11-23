import { useState, useEffect } from "react";

function App() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<string[]>([]);

  useEffect(() => {
    fetch(`http://localhost:8000/search?query=${query}`)
      .then((res) => res.json())
      .then((data) => setResults(data.results));
  }, [query]);

  return (
    <div style={{ width: "400px", margin: "50px auto", fontFamily: "sans-serif" }}>
      <h2>Country Search</h2>
      <input
        type="text"
        placeholder="Search..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        style={{
          width: "100%",
          padding: "8px",
          marginBottom: "20px",
        }}
      />

      <ul>
        {results.map((c) => (
          <li key={c}>{c}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
