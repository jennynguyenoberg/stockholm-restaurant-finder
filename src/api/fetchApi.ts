import axios from 'axios';

const apiUrl = 'https://worldwide-restaurants.p.rapidapi.com/search';
const apiKey = process.env.VITE_API_KEY;

const encodedParams = new URLSearchParams();
encodedParams.set('language', 'en_US');
encodedParams.set('location_id', '189852');
encodedParams.set('currency', 'USD');
encodedParams.set('offset', '0');

const options = {
  method: 'POST',
  url: apiUrl,
  headers: {
    'content-type': 'application/x-www-form-urlencoded',
    'X-RapidAPI-Key': apiKey,
    'X-RapidAPI-Host': 'worldwide-restaurants.p.rapidapi.com',
  },
  data: encodedParams,
};

export const fetchData = async () => {
  try {
    const response = await axios.request(options);
    return response.data.results.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
