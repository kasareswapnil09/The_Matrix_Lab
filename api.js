// src/api.js
import axios from 'axios';

const API_BASE_URL = 'https://api.dexscreener.com/latest';

export async function searchPairs(tokenAddress) {
  try {
    const response = await axios.get(`${API_BASE_URL}/dex/search?q=${tokenAddress}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
}
