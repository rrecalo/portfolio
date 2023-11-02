'use client'

import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

export default function Navigation() {

    const [width, setWidth] = useState<number>(0);
    const [showSideBar, setShowSideBar] = useState<boolean>(false);

    function updateWidth(){
        const newWidth = window.innerWidth;
        setWidth(newWidth);
    }

    useEffect(()=>{
        window.addEventListener("resize", updateWidth);
        updateWidth();
    },[])

  return (
    <>
    {
        width > 640 ? 
        <Navbar/>
        :
        <Sidebar/>
    }
    </>
  )
}

