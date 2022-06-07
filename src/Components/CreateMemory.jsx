import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { closeCreateMemory } from "../features/toggleSlice";
import { IoMdClose } from "react-icons/io";

const CreateMemory = () => {
  const dispatch = useDispatch();
  const [image, setImage] = useState();
  return (
    <div className="z-10 bg-gradient-to-r from-[#A88BEB] to-[#F8CEEC] bg-opacity-90 absolute top-0 left-0 h-[100%] w-[100%] p-12 flex flex-col px-[20vw]">
      <IoMdClose
        style={{ color: "white" }}
        className="absolute top-5 right-5 hover:animate-spin cursor-pointer bg-red-500 rounded-full"
        onClick={() => dispatch(closeCreateMemory())}
      />

      <div className="justify-center flex flex-col">
        <h1 className="font-bold text-white lg:text-3xl text-2xl px-[6%] text-center">
          Create A New Memory
        </h1>
        <form className="flex justify-center flex-col">
          <input type="file" value={image} className="my-4 border-b-2 border-white p-2"/>
          <textarea type="text" placeholder="So How Was Your Day Today?" rows="10" className="p-3 bg-opacity-50 bg-white placeholder:text-white placeholder:text-sm focus:outline-none text-white rounded-lg shadow-lg"/>
          <button type="submit" className="border-2 border-white px-4 py-1 my-5 rounded-full text-white hover:scale-105 bg-white bg-opacity-30 transition-all ease-in self-center">Add To Gallery</button>
        </form>
      </div>
    </div>
  );
};

export default CreateMemory;
