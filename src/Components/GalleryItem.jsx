import React from "react";
import "../index.css";

const GalleryItem = ({ image, text }) => {
  return (
    <div className="my-3 shadow-lg border-2 border-white mx-3 glass rounded-lg transition-all ease-linear hover:scale-105">
      <div>
        <img className="rounded-t-lg" src={image} alt="" />
      </div>
      <div className="content__div p-4">
        <p className="text-white">{text}</p>
        <div className="flex justify-center mt-4">
          <button className="border-2 border-white rounded-full text-white px-5 py-1 hover:scale-105 transition-all ease-in">Read More</button>
        </div>
      </div>
    </div>
  );
};

export default GalleryItem;
