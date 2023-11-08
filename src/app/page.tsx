'use client'
import { AnimatePresence, motion,  Variants, } from 'framer-motion'
import LinkButton from './components/LinkButton';
import { useState } from 'react';
import AboutSection from './AboutSection';

export const headerVariant : Variants = {
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

export default function Home() {

  const [selection, setSelection] = useState<number>(0);



  const subHeaderVariant : Variants = {
    initial:{
      opacity:0,
      y:-5
    },
    animate:{
      opacity:1,
      y:0,
      transition:{duration:0.5, staggerChildren:0.25}
    }
  }

  const traitVariant : Variants = {
    initial:{
      opacity:0,
      y:-5
    },
    animate:{
      opacity:1,
      y:0,
      transition:{duration:0.25}
    }
  }

  

  return (
    <motion.div key="home" className='w-full text-slate-300 h-[300vh] mt-2 sm:mt-[52px] p-5' initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0,y:20, transition:{duration:5}}}>
      <motion.div id="hero" layout="size" className='text-4xl sm:text-6xl mt-0 sm:mt-10 origin-left whitespace-nowrap' variants={headerVariant} initial="initial" animate="animate">
        {"Hi, I'm Robert"}
       <motion.div className='text-xs sm:text-base font-light mt-2 whitespace-normal' variants={subHeaderVariant}>
          <motion.p className={`inline-block`} variants={traitVariant} 
          animate={{color: selection === 0 ? 'rgb(59, 130, 246)' : 'rgb(255, 255, 255)'}}
          onClick={()=>{setSelection(0)}}>
            {"Software Engineer"}
          </motion.p>
          <motion.p className={`inline-block`} variants={traitVariant} onClick={()=>{setSelection(1)}}
          animate={{color: selection === 1 ? 'rgb(59, 130, 246)' : 'rgb(255, 255, 255)'}}>
          <span className='text-white mx-1'>/</span>{"Musician"}
          </motion.p>
          <motion.p className={`inline-block`} variants={traitVariant} onClick={()=>{setSelection(2)}}
          animate={{color: selection === 2 ? 'rgb(59, 130, 246)' : 'rgb(255, 255, 255)'}}>
          <span className='text-white mx-1'>/</span>{"Leader"}
          </motion.p>
          <motion.p className='text-xs inline-block ml-3'
          initial={{opacity:0, x:10}}
          animate={{opacity:[1, 1, 1], x:[0, 10, 0], transition:{delay:3, repeat:Infinity, repeatDelay:3, repeatType:"mirror"}}}>{"<- click me"}</motion.p>
        </motion.div>
      </motion.div>
      <AboutSection selection={selection}/>
      <motion.div layout="position" className='flex flex-col sm:flex-row items-center justify-center mt-20 gap-10'>
      <LinkButton buttonName='Projects' buttonDesc="See some of the projects I've worked on" hrefLink='/projects'/>
      <LinkButton buttonName='Techs' buttonDesc='Have a quick look at the technologies I know' hrefLink='/techs'/>
      </motion.div>
    </motion.div>
  )
}
