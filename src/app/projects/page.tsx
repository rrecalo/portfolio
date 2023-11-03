'use client'
import React from 'react'
import {motion} from 'framer-motion'
import ProjectCard from './ProjectCard'

export default function Projects() {
  return (
    <motion.div key="projects" className='w-full text-slate-300 h-[300vh] mt-2 sm:mt-[52px] p-5' initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}}>
      <motion.div className='flex flex-col mt-0 sm:mt-10 gap-10'>
        <ProjectCard title='ONote' desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget cursus nisl. Donec lobortis sit amet urna non porttitor. Aliquam ornare suscipit aliquet. In elementum libero id lectus auctor rhoncus."/>
        <ProjectCard title='Temperature-Monitor' desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget cursus nisl. Donec lobortis sit amet urna non porttitor. Aliquam ornare suscipit aliquet. In elementum libero id lectus auctor rhoncus."/>
      </motion.div>
    </motion.div>
  )
}
