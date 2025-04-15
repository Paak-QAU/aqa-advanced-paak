const axios = require('axios');

async function fetchDataWithHeadersAndParams() {
  const response = await axios.get('https://httpbin.org/get', {
    headers: {
      'X-Custom-Header': 'TestHeader'
    },
    params: {
      userId: 123
    }
  });
  return response.data;
}

module.exports = fetchDataWithHeadersAndParams;