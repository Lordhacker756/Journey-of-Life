import React from "react";
import { useSelector } from "react-redux";
import CreateMemory from "./CreateMemory";
import Gallery from "./Gallery";


const Home = () => {
  const createMemoryState = useSelector((state)=>state.toggle.createMemory)

  return (
    <div className="bg-gradient-to-r from-[#647DEE] to-[#7F53AC]">
    {console.log(createMemoryState)}
     {createMemoryState && <CreateMemory className="fixed"/>}
      {/* Hero Section */}
      <div className="h-[100vh] justify-center items-center flex">
        <h1 className="text-white font-bold lg:text-7xl md:text-5xl sm:text-3xl px-[6%] text-center">
          The Canvas For The Memories Of Your Life
        </h1>
      </div>

      {/* Recent Memories */}
      <div className="pb-10">
        <h1 className="font-bold lg:text-7xl md:text-5xl sm:text-3xl px-[6%] text-center text-white mt-12">
          Recent Memories
        </h1>
        <Gallery />
        <div className="flex justify-center">
          <button className="bg-white text-black w-fit text-sm px-8 py-3 rounded-full mt-5 transition-all ease-in hover:scale-110 border-2 border-white">All memories</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
