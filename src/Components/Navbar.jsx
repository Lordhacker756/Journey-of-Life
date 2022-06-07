import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { useDispatch, useSelector } from "react-redux";
import { openSideBar } from "../features/toggleSlice";
import Sidebar from "./Sidebar";

const Navbar = () => {

  const sideBarState = useSelector((state)=>state.toggle.sideBar)
  const dispatch = useDispatch()

  return (
    <div className="bg-gradient-to-r relative from-purple-50 to-indigo-50 px-3 py-2 flex font-extrabold tracking-wider border-b-[1px] border-gray-300 text-2xl items-center">
      <div className="flex w-1/4">
        <GiHamburgerMenu className="cursor-pointer" onClick={()=>dispatch(openSideBar())}/>
      </div>
      <div className="flex w-1/2 justify-center">
        <p className="md:text-5xl sm:text-xl">THE JOURNEY OF LIFE</p>
      </div>
      <div className="flex w-1/4">
      </div>
      {sideBarState && <Sidebar/>}
    </div>
  );
};

export default Navbar;
