import React, { useEffect, useState } from "react";

const ImageSlider = () => {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(200);

  const images = [
    "https://thumbs.dreamstime.com/b/idyllic-summer-landscape-clear-mountain-lake-alps-45054687.jpg",
    "https://posterjack.ca/cdn/shop/articles/landscape_photography_tips_featured_image.jpg?v=1563408049&width=2048",
    "https://media.istockphoto.com/id/1381637603/photo/mountain-landscape.jpg?s=612x612&w=0&k=20&c=w64j3fW8C96CfYo3kbi386rs_sHH_6BGe8lAAAFS-y4=",
    "https://www.aaronreedphotography.com/images/xl/The-Wash-Web-2019.jpg",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
      setDirection((prev) => prev * -1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <h1>Image Slider</h1>

      <img
        src={images[index]}
        alt="img-here"
        style={{
          height: "200px",
          width: "200px",
          transform: `translateX(${direction}px)`,
          transition: "transform 0.8s ease-in-out",
        }}
      />
    </div>
  );
};

export default ImageSlider;