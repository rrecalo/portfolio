'use client'
import {AnimatePresence, motion, Variant, Variants } from 'framer-motion';
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import {BiMenu} from 'react-icons/bi';
import SidebarLink from './SidebarLink';

export default function Sidebar() {
  
  const [collapsed, setCollapsed] = useState<boolean>(true);
  const path = usePathname();

  useEffect(()=>{
    setCollapsed(true);
  }, [path])


  useEffect(()=>{
    const sideNav = document.getElementById("side-nav-menu");
    const handleClick = (event : any ) =>{
      if(!sideNav?.contains(event.target)){setCollapsed(true);}

    }
    document.addEventListener("click", handleClick);
    return()=>{document.removeEventListener('click', handleClick);}
  },[])


  

  const sidebarVariants : Variants = {
    collapsed:{

    },
    open:{

    }
    
  };
  
  const linkParentVariant : Variants = {
    collapsed:{
      opacity:0,
      x:"100%",
    },
    open:{
      opacity:1,
      x:15,
      transition:{
        delayChildren:0.10,
        staggerChildren:0.05,
      },
    },
    exit:{
      transition:{
        //staggerChildren:0.05,
      }
    }

  }



  return (
    <motion.div id='side-nav-menu' className='text-slate-200 font-light fixed right-7 top-7 w-30 z-10'>
      
      <motion.div className='flex justify-end items-centers'>
        <motion.button className='w-8 h-8' onClick={() => {setCollapsed(!collapsed)}} layout="size"
        initial={{}} animate={!collapsed ? {rotate:90, scaleX:4, x:-20, } : {}}>
          <BiMenu className='w-full h-full'/>
        </motion.button>
      </motion.div>
      <AnimatePresence>
      {
        !collapsed ?
          <motion.ul key="navlist" className='flex flex-col py-3 mt-3 text-right text-lg ' variants={linkParentVariant} initial="collapsed" animate="open" exit="exit">
            <SidebarLink linkName='About Me' hrefLink=''/>
            <SidebarLink linkName='Projects' hrefLink='projects'/>
            <SidebarLink linkName='Techs' hrefLink='techs'/>
            
          </motion.ul>
        : <></>
      }
            </AnimatePresence>

    </motion.div>
  )
}

