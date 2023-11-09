'use client'
import React from 'react'
import { motion } from 'framer-motion'
import {AiFillGithub, AiFillLinkedin} from 'react-icons/ai'

export default function HomeLinkSection() {
  return (
    <motion.div layout="position" className='mt-10 text-zinc-300 text-[0.75rem] sm:text-sm w-full sm:w-1/2 mx-auto p-5'>
      <div className='flex gap-5 justify-center items-center'>
        <motion.a href='https://github.com/rrecalo' target='_blank' className='rounded-xl'
        whileHover={{y:-3, scale:1.25, }}>
          <AiFillGithub className="w-16 h-16 text-blue-600 bg-zinc-950 p-1 rounded-xl"/>
        </motion.a>
        <motion.a href='https://github.com/rrecalo' target='_blank' className='rounded-xl'
        whileHover={{y:-3, scale:1.25, }}>
          <AiFillLinkedin className="w-16 h-16 text-blue-600 bg-zinc-950 p-1 rounded-xl"/>
        </motion.a>
      </div>
    </motion.div>
  )
}
