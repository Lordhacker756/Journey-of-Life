import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    sideBar:false,
    createMemory:false,
}

export const toggleSlice = createSlice({
    name:"toggle",
    initialState,
    reducers:{
        openSideBar:(state)=>{state.sideBar=true},
        closeSideBar:(state)=>{state.sideBar=false},
        openCreateMemory:(state)=>{state.createMemory=true},
        closeCreateMemory:(state)=>{state.createMemory=false}
    }
})

export const {openSideBar,closeSideBar, openCreateMemory, closeCreateMemory} = toggleSlice.actions

export default toggleSlice.reducer