import React, { useState } from 'react';
import './App.css';
import Header from './Header';
import SearchBar from './SearchBar';
import SearchResults from './SearchResults';
import WalletConnect from './WalletConnect';
import { searchPairs } from './api';

function App() {
  const[results,setResults] = useState([]);

  const handleSearch = async (tokenAddress) => {
    try {
      const data = await searchPairs(tokenAddress);
      setResults(data); // Update results state with API response
    } catch (error) {
      // Handle error
      console.error('Error searching pairs:', error);
    }
  };
  return (
    <div className="App">
      <Header />
      <main>
        <SearchBar onSearch={handleSearch} />
        <SearchResults results={results} />
        <WalletConnect />
      </main>
    </div>
  );
}

export default App;
