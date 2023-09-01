import React from 'react';

function SearchResults({ results }) {
  if (!Array.isArray(results)) {
    // Handle the case where results is not an array
    return <div className="search-results">No results found</div>;
  }

  return (
    <div className="search-results">
      <h2>Search Results</h2>
      <ul>
        {results.map((result) => (
          <li key={result.id}>
            {result.name} - Price: ${result.price_usd}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SearchResults;
