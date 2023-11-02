'use client'
import {motion, useScroll, useSpring} from 'framer-motion'

function ScrollComponent() {

    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.002
      });

  return (
    <motion.div className='fixed left-0 top-0 bg-blue-600 h-0.5 w-[100vw] z-20 origin-top-left' style={{scaleX}} />

  )
}

export default ScrollComponent