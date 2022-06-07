import React from "react";
import GalleryItem from "./GalleryItem";
import placeholder from '../assets/placeholder.jpg'

const Gallery = () => {
  return (
    <div className="div grid grid-cols-3 mx-10 mt-10 ">
    
      <GalleryItem image={placeholder} text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam aspernatur earum eos accusamus a tempora suscipit, esse dolore"/>
      <GalleryItem image={placeholder} text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam aspernatur earum eos accusamus a tempora suscipit, esse dolore"/>
      <GalleryItem image={placeholder} text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam aspernatur earum eos accusamus a tempora suscipit, esse dolore"/>
      <GalleryItem image={placeholder} text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam aspernatur earum eos accusamus a tempora suscipit, esse dolore"/>
      <GalleryItem image={placeholder} text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam aspernatur earum eos accusamus a tempora suscipit, esse dolore"/>
      <GalleryItem image={placeholder} text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam aspernatur earum eos accusamus a tempora suscipit, esse dolore"/>
      <GalleryItem image={placeholder} text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam aspernatur earum eos accusamus a tempora suscipit, esse dolore"/>
      <GalleryItem image={placeholder} text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam aspernatur earum eos accusamus a tempora suscipit, esse dolore"/>
      <GalleryItem image={placeholder} text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam aspernatur earum eos accusamus a tempora suscipit, esse dolore"/>
    </div>
  );
};

export default Gallery;
