'use client'
import React from 'react'
import {motion} from 'framer-motion'

export default function Techs() {
  return (
    <motion.div key="techs" className='w-full text-slate-300 h-[300vh] mt-2 sm:mt-[52px] p-5' initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}}>
      techs
    </motion.div>
  )
}
