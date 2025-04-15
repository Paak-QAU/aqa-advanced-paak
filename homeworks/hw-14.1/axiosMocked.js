const axios = require('axios');

async function getUserData(id) {
  try {
    const response = await axios.get(`/api/users/${id}`);
    return response.data;
  } catch (error) {
    return { error: error.message };
  }
}

module.exports = getUserData;