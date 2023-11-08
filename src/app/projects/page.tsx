'use client'
import React from 'react'
import {motion} from 'framer-motion'
import ProjectCard from './ProjectCard'
import { data } from '../data'
import {headerVariant} from '../page'

export default function Projects() {
  return (
    <motion.div key="projects" className='text-slate-300 h-[300vh] mt-2 p-5 sm:mt-[72px]' initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}}>
      <motion.div  layout="size" className='text-4xl sm:text-6xl sm:hidden origin-left whitespace-nowrap' variants={headerVariant} initial="initial" animate="animate">
        {"My Projects"}
      </motion.div>
      <motion.div className='flex flex-col mt-0 sm:mt-10 gap-10'>
        {data.map((project : any)=>  <ProjectCard key={project.name} title={project.name} desc={project.subtitle} tags={project.tags}/>)}
      </motion.div>
    </motion.div>
  )
}
