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
    <div
      className="container py-4"
      style={{ maxHeight: "100vh", overflowY: "auto", boxSizing: "border-box" }}
    >
      <div className="row justify-content-center">
        <div className="col-md-8 col-lg-6">
          <h2 className="mb-3">Country Search</h2>

          <input
            type="text"
            className="form-control"
            placeholder="Search countries..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            aria-label="Search countries"
          />

          <div className="text-muted mt-2 mb-3">
            Showing {results.length} result{results.length !== 1 ? "s" : ""}.
          </div>

          <ul className="list-group shadow-sm countries-list">
            {results.length === 0 ? (
              <li className="list-group-item text-muted">No results found</li>
            ) : (
              results.map((c) => (
                <li
                  key={c}
                  className="list-group-item d-flex justify-content-between align-items-center"
                >
                  <span>{c}</span>
                  <small className="text-muted">Country</small>
                </li>
              ))
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
