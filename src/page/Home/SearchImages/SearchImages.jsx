import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../../../App";
import useImages from "../../../components/hooks/useImages";
import Loading from "../../../components/Loading/Loading";
import SingleImage from "../SingleImage/SingleImage";

const SearchImages = () => {
  const [images, setImages] = useImages();
  const [clickedImage, setClickedImage] = useState({});
  const [imageId, setImageId] = useState("");
  // const [searchText] = useContext(AppContext);
  // const [images, setImages] = useState([]);
  // useEffect(() => {
  //   fetch(
  //     `https://api.unsplash.com/search/photos?page=1&query=${searchText}&client_id=jIMbxi1dDgrxkRY6F1Bga3EXCkOYYjlZRsG4wRup728`
  //   )
  //     .then((res) => res.json())
  //     .then((data) => setImages(data.results));
  // }, [searchText]);

  useEffect(() => {
    fetch(
      `https://api.unsplash.com/photos/${imageId}?client_id=jIMbxi1dDgrxkRY6F1Bga3EXCkOYYjlZRsG4wRup728`
    )
      .then((res) => res.json())
      .then((data) => setClickedImage(data));
  }, [imageId]);

  console.log(clickedImage);
  // console.log(
  //   `https://api.unsplash.com/search/photos?page=1&query=${searchText}&client_id=jIMbxi1dDgrxkRY6F1Bga3EXCkOYYjlZRsG4wRup728`
  // );

  return (
    <div className="container">
      <div className="row gutter-5">
        {images.map((image) => (
          <div key={image.id} className="col-md-4">
            <button
              onClick={() => setImageId(image.id)}
              type="button"
              class="btn btn-primary"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
              data-bs-whatever="@mdo"
            >
              <img src={image.urls.thumb} alt="img" />
              <div className="d-flex justify-content-center">
                <img src={image.user.profile_image.small} alt="" />
                <div>
                  <h6>{image.user.first_name}</h6>
                  <p>@{image.user.instagram_username}</p>
                </div>
                <div>
                  <img src="" alt="" />
                  <span>{image.user.total_likes}</span>
                </div>
              </div>
            </button>
          </div>
        ))}
        <SingleImage clickedImage={clickedImage} />
      </div>
    </div>
  );
};

export default SearchImages;
