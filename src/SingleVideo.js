import React, { useState, useEffect } from "react";

function SingleVideo({
  thumb_img,
  profile_img,
  title,
  channel_name,
  views,
  timestamps,
  video_duration,
}) {
  const [movieData, setMovieData] = useState(null);

  useEffect(() => {
    fetch("http://www.omdbapi.com/?i=tt3896198&apikey=77a2c932")
      .then((response) => response.json())
      .then((data) => {
        setMovieData(data);
      })
      .catch((error) => {
        console.error("Error fetching movie data:", error);
      });
  }, []);

  return (
    <div className="col-4">
      <div className="thumbnail_img relative">
        <img
          src={thumb_img}
          alt=""
          className="thumb-img pointer"
          style={{ width: "100%" }}
        />
        <span className="videos_duration absolute">{video_duration}</span>
        <div className="description_option d-flex">
          <div className="profile_img">
            <img src={profile_img} className="channel_image pointer" />
          </div>
          <div className="title d-flex align-items-center justify-content-center">
            <span className="channelname">{channel_name}</span>
            <div className="time_description">
              <span className="views">{views}</span>
              <span className="timestamp">{timestamps}</span>
            </div>
          </div>
        </div>
      </div>
      {movieData && (
        <div className="movie-details">
          <h2>{movieData.Title}</h2>
          <p>Release Year: {movieData.Year}</p>
          <p>Genre: {movieData.Genre}</p>
          <p>Director: {movieData.Director}</p>
          {/* Render any other relevant movie data */}
        </div>
      )}
    </div>
  );
}

export default SingleVideo;
