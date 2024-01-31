import { AnimatePresence, Variants, motion } from 'framer-motion'
import React, { useEffect, useState } from 'react'

interface AboutSectionProps {
    selection : number
}

export default function AboutSection({selection} : AboutSectionProps) {

    const [animated, setAnimated] = useState<boolean>(false);

    const sectionVariants : Variants = {
        initial:{
            x:"-100vw",
            opacity:0,
        },
        animate:{
            x:"0vw",
            opacity:1,
            transition:{
                duration:0.75,
                delay: animated ? 0 : 1.5
            }
        },
        exit:{
            x:"100vw",
            opacity:0,
            transition:{
                duration:0.75,
            }
        }
    }
    
    useEffect(()=>{

    }, [selection])

  return (
    <div className='mt-3 text-zinc-300 text-[1rem] sm:text-[0.75rem] xl:text-[1rem] sm:text-sm w-full xl:w-1/2 mx-auto'>
        <AnimatePresence mode='popLayout'>
    {selection === 0 ?
    <motion.div key="software" className='' variants={sectionVariants} initial="initial" animate="animate" exit="exit" onAnimationComplete={()=>{setAnimated(true)}}>
        {"With several years of programming experience in various languages and development environments, I've implemented"
        +" software solutions in some of the latest technologies."}
        <p className='mt-2'>I enjoy exploring new technologies that help create mantainable, resilient and efficient software.</p>
    </motion.div>
    :
    selection === 1 ? 
    <motion.div key="music" className='' variants={sectionVariants} initial="initial" animate="animate" exit="exit">
        {"I play Piano, Acoustic Guitar, and the Bass. Having learnt three instruments, I've built discipline through long hours of practice."}
        <p className='mt-2'>{"I know what it's like to find my way around hours of frustration until I reach a breakthrough."}</p>
        
    </motion.div>
    :
    <motion.div key="leadership" className='' variants={sectionVariants} initial="initial" animate="animate" exit="exit">
        {"Closely related to my musicianship, I've had the honor to help lead my local church's worship team."}
        <p className='mt-2'>{"People are not easy, but practicing servant leadership has help me grow immensely."}</p>
    </motion.div>
    }
        </AnimatePresence>
    </div>
  )
}
