import { useState } from "react";
import ReferenceCard from "./ReferenceCard";

const SearchBox = () => {
  const [results, setResults] = useState([]);

  const search = () => {
    setResults([
      {
        answer: "Refund allowed within 30 days.",
        source: "refund_policy.pdf",
        page: 3,
      },
    ]);
  };

  return (
    <div className="card">
      <h2>Search SOP</h2>
      <input placeholder="Ask a policy question" />
      <button onClick={search}>Search</button>

      {results.map((r, i) => (
        <ReferenceCard key={i} data={r} />
      ))}
    </div>
  );
};

export default SearchBox;
