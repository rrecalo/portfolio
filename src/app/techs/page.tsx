'use client'
import React from 'react'
import {motion} from 'framer-motion'
import { headerVariant } from '../page'

export default function Techs() {
  return (
    <motion.div key="techs" className='text-slate-300 h-[300vh] mt-2 p-5 sm:mt-[72px]' initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}}>
      <motion.div  layout="size" className='text-4xl sm:text-6xl sm:hidden origin-left whitespace-nowrap' variants={headerVariant} initial="initial" animate="animate">
        {"My Techs"}
      </motion.div>
    </motion.div>
  )
}
