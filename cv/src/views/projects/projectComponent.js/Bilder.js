import React, { useState, useEffect } from "react";
import axios from "axios";

const Chucknorris = () => {
  const [quote, setQuote] = useState(0);

  useEffect(() => {
    const options = {
      method: "GET",
      url: "https://api.chucknorris.io/jokes/random",
    };
    axios
      .request(options)
      .then(function(response) {
        setQuote(response.data.value);
      })
      .catch(function(error) {
        console.error(error);
      });
  }, []);

  return quote;
};
export default Chucknorris;
