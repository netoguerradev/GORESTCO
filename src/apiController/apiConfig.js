const axios = require('axios');

require('dotenv').config();

const api = axios.create({
  baseURL: 'https://gorest.co.in',
  headers: {
    'Authorization':
      process.env.TOKEN_ACESS,
  },
});

module.exports = api;
