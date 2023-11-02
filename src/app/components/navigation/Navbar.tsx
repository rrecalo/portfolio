'use client'
import {Variants, motion} from 'framer-motion'
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

  return (
    <div className='w-full fixed top-0 bg-black bg-opacity-75 backdrop-filter backdrop-blur-lg z-10'>
        <motion.div className='pt-7 pb-5 w-1/2 mx-auto text-slate-200 font-light flex justify-around items-center whitespace-nowrap'
        variants={navbarVariants} initial="initial" animate="enter">
            <NavbarLink linkName="Robert Recalo" hrefLink=""/>
            <NavbarLink linkName="Projects" hrefLink="projects"/>
            <NavbarLink linkName="Techs" hrefLink="techs"/>
        </motion.div>
    </div>
  )
}