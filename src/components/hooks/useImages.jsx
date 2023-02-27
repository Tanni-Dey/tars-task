import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../../App";

const useImages = () => {
  const [searchText] = useContext(AppContext);
  const [images, setImages] = useState([]);
  useEffect(() => {
    fetch(
      `https://api.unsplash.com/search/photos?page=1&query=${searchText}&client_id=jIMbxi1dDgrxkRY6F1Bga3EXCkOYYjlZRsG4wRup728`
    )
      .then((res) => res.json())
      .then((data) => setImages(data.results));
  }, [searchText]);
  return [images, setImages];
};

export default useImages;
