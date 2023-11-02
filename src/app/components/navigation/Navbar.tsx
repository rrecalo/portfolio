'use client'
import Link from 'next/link'
import React from 'react'
import {Variants, motion} from 'framer-motion'
import { usePathname } from 'next/navigation'
import NavbarLink from './NavbarLink'

const navbarVariants : Variants = {
    initial:{
    },
    enter: {
        transition:{
            staggerChildren:0.1,
        }
    },
}



export default function Navbar() {

    const path = usePathname();

  return (
    <motion.div className='pt-7 w-1/2 mx-auto bg-black text-slate-200 font-light flex justify-around items-center whitespace-nowrap'
    variants={navbarVariants} initial="initial" animate="enter">
        <NavbarLink linkName="Robert Recalo" hrefLink=""/>
        <NavbarLink linkName="Projects" hrefLink="projects"/>
        <NavbarLink linkName="Techs" hrefLink="techs"/>
        
    </motion.div>
  )
}