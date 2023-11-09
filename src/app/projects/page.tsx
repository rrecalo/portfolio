'use client'
import React from 'react'
import {Variants, motion} from 'framer-motion'
import ProjectCard from './ProjectCard'
import { data } from '../data'



export default function Projects() {

  const headerVariant : Variants = {
    initial:{
      x:"-100vw"
    },
    animate:{
      x:0,
      transition:{
        type:'spring',
        stiffness:100,
        damping:15,
        delayChildren:0.75
      }
    }
  }
  
  const projectListVariant : Variants = {
    initial:{},
    animate:{
      transition:{
        staggerChildren:0.25
      }
    }
  }

  return (
    <motion.div key="projects" className='text-slate-300 mt-2 p-5 sm:mt-0' initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}}>
      <motion.div  layout="size" className='text-4xl sm:text-6xl sm:hidden origin-left whitespace-nowrap' variants={headerVariant} initial="initial" animate="animate">
        {"My Projects"}
      </motion.div>
      <motion.div className='flex flex-col mt-0 sm:mt-10 gap-10' variants={projectListVariant} initial="initial" animate="animate">
        {data.map((project : any)=>  <ProjectCard key={project.name} title={project.name} desc={project.subtitle} tags={project.tags}/>)}
      </motion.div>
    </motion.div>
  )
}
