'use client'
import Link from 'next/link'
import React from 'react'
import {Variants, motion} from 'framer-motion'
import { usePathname } from 'next/navigation'

const navbarVariants : Variants = {
    initial:{
    },
    enter: {
        transition:{
            staggerChildren:0.1,
        }
    }
}

const navbarLinkVariants : Variants = {
    initial:{
        opacity:0,
        y:-10
    },
    enter: {
        opacity:1,
        y:0,
        transition:{
            duration:0.25,
        }
    },
    hover:{
        y:3,
    }
}

export default function Navbar() {

    const path = usePathname();

  return (
    <motion.div className='pt-7 w-1/2 mx-auto bg-black text-slate-200 font-light flex justify-around items-center whitespace-nowrap'
    variants={navbarVariants} initial="initial" animate="enter">
        <motion.div className={`${path === '/' ? 'text-blue-600': ''}`} variants={navbarLinkVariants} >
            <Link className="p-5" href="/">Robert Recalo</Link>
        </motion.div>

        <motion.div className={`${path === '/projects' ? 'text-blue-600': ''}`} variants={navbarLinkVariants} >
            <Link className="p-5" href="/projects">Projects</Link>
        </motion.div>

        <motion.div className={`${path === '/techs' ? 'text-blue-600': ''}`} variants={navbarLinkVariants} >
            <Link className="p-5" href="/techs">Techs</Link>
        </motion.div>
    </motion.div>
  )
}