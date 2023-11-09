import React from 'react';
import axios from 'axios';


export default axios.create({
  baseURL: `${process.env.BASE_URL}`,
  headers: {
    'Authorization': `Bearer ${localStorage.getItem("accessToken")}`,
    "content-Type": "application/json",
  },
});
