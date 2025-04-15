const axios = require('axios');

async function fetchWithError() {
  try {
  
    await axios.get('https://jsonplaceholder.typicode.com/invalid-endpoint');
  } catch (error) {

    if (error.response) {
      return `Error: ${error.response.status} ${error.response.statusText}`;
    }
    return `Error: ${error.message}`;
  }
}

module.exports = fetchWithError;
