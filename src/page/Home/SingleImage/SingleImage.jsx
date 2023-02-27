import React from "react";

const SingleImage = ({ clickedImage }) => {
  const { urls, user, tags } = clickedImage;
  //   console.log(clickedImage);
  return (
    <div
      class="modal fade"
      id="exampleModal"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <img className="img-fluid" src={urls?.full} alt="" />
            <div>
              <img src={user?.profile_image.small} alt="" />
              <div>
                <h6>{user?.first_name}</h6>
                <p>@{user?.instagram_username}</p>
              </div>
              <div>
                <span>{user?.instagram_username}</span>
                <span>{user?.twitter_username}</span>
              </div>
              <div>
                <span>1.2k downloads</span>
                <div>
                  <img src="" alt="" />
                  <span>{user?.total_likes} likes</span>
                </div>
              </div>
            </div>
          </div>
          {/* <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Close
            </button>
            <button type="button" class="btn btn-primary">
              Send message
            </button>
          </div> */}
          <div className="">
            <h5>Related Tags</h5>
            <div>
              {tags.map((tag, index) => (
                <span key={index}>{tag?.title}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleImage;
