import React from 'react';

const getNames = () => {
    Axios.get("http://localhost:45030/colors/" + person)
    .then(response => {
      console.log(response.data);
    })
    .catch(error => {
      console.log("Error " + error);
    });
  };