'use client'
import React from 'react'
import {Variants, motion} from 'framer-motion'

const techs = {
  languages:[
    "HTML/CSS/JS",
    "TypeScript",
    "Java",
    "C/C++/C#",
    "Python",
    "PHP",
  ],
  front:[
    "React.js",
    "Next.js",
    "Redux.js",
    "Angular.js",
  ],
  back:[
    "Node.js",
    "Express.js",
    "ASP.NET",
    "AWS (EC2, S3, DNS)"
  ],
  misc:[
    "Agile Development",
    "GitHub, git",
    "Jira (Sprint/Task management)"
  ]
}

const itemClass = "text-base text-blue-500 font-light"

export default function Techs() {

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

  return (
    <motion.div key="techs" className='text-slate-300 h-[300vh] mt-2 p-5 sm:mt-[72px]' initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}}>
      <motion.div  layout="size" className='text-4xl sm:text-6xl sm:hidden origin-left whitespace-nowrap' variants={headerVariant} initial="initial" animate="animate">
        {"My Techs"}
      </motion.div>
    </motion.div>
  )
}
