import React from "react";
import "../gallery.css";

const Gallery = React.memo(() => {
  const images = [
    "/landscape_1.jpg",
    "/landscape_2.jpg",
    "/landscape_3.jpg",
    "/landscape_4.jpg",
    "/landscape_5.jpg",
    "/landscape_6.jpg",
    "/landscape_7.jpg",
    "/landscape_8.jpg",
    "/landscape_9.jpg",
    "/landscape_10.jpg",
    "/buildings_1.jpg",
    "/buildings_2.jpg",
    "/buildings_3.jpg",
    "/buildings_4.jpg",
    "/buildings_5.jpg",
    "/buildings_6.jpg",
    "/buildings_7.jpg",
    "/buildings_8.jpg",
    "/buildings_9.jpg",
    "/buildings_10.jpg",
  ];

  return (
    <div className="gallery">
      {images.map((image, index) => (
        <div key={index} className="gallery-item">
          <img src={image} alt={`gallery-${index}`} loading="lazy" />
        </div>
      ))}
    </div>
  );
});

export default Gallery;
