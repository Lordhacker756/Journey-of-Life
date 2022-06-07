import React from "react";
import { IoCreateOutline } from "react-icons/io5";
import { BiNotepad } from "react-icons/bi";
import {IoMdClose} from 'react-icons/io'
import {useDispatch} from "react-redux";
import { closeSideBar,openCreateMemory } from "../features/toggleSlice";

const Sidebar = () => {
  const dispatch = useDispatch();

  const openEditor = () => {
    dispatch(closeSideBar())
    dispatch(openCreateMemory())
  }

  return (
    <div className="bg-gradient-to-b from-[#5F72BE] to-[#9921E8] fixed top-0 left-0 h-[100vh] w-20 flex flex-col justify-center items-center transition-all ease-linear">
      <IoMdClose style={{ color: "white" }} className="absolute top-5 hover:animate-spin cursor-pointer hover:bg-red-500 rounded-full" onClick={()=>dispatch(closeSideBar())}/>

      <div className="menu__item flex flex-col justify-center items-center my-3">
        <IoCreateOutline className="hover:scale-110 transition-all ease-in" style={{ color: "white" }} onClick={openEditor}/>
        <p className="text-white text-[10px] font-normal">Create</p>
      </div>

      <div className="menu__item flex flex-col justify-center items-center my-3">
        <BiNotepad className="hover:scale-110 transition-all ease-in" style={{ color: "white" }} />
        <p className="text-white text-[10px] font-normal">All</p>
      </div>
    </div>
  );
};

export default Sidebar;
