'use client'
import React from 'react'
import {motion} from 'framer-motion'
import ProjectCard from './ProjectCard'
import { data } from '../data'

export default function Projects() {
  return (
    <motion.div key="projects" className=' text-slate-300 h-[300vh] mt-[72px] sm:mt-[72px] mx-5' initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}}>
      <motion.div className='flex flex-col mt-0 sm:mt-10 gap-10'>
        {data.map((project : any)=>  <ProjectCard key={project.name} title={project.name} desc={project.summary}/>)}
      </motion.div>
    </motion.div>
  )
}
