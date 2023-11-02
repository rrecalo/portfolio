'use client'
import {motion, useScroll, useAnimationControls, Variants} from 'framer-motion'
import { useRouter } from 'next/navigation';
import LinkButton from './components/LinkButton';

export default function Home() {

  const { scrollYProgress } = useScroll();
  const controls = useAnimationControls();
  const router = useRouter();

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

  const subHeaderVariant : Variants = {
    initial:{
      opacity:0,
      y:-5
    },
    animate:{
      opacity:1,
      y:0,
      transition:{duration:0.5}
    }
  }

  

  return (
    <motion.div className='w-full text-slate-300 h-[300vh] mt-2 sm:mt-[52px] p-5' >
      <motion.div id="hero" layout="size" className='text-4xl sm:text-6xl mt-0 sm:mt-10 origin-left whitespace-nowrap' variants={headerVariant} initial="initial" animate="animate">
        Software Engineer
        <motion.div className='text-xs sm:text-base font-light mt-2 whitespace-normal' variants={subHeaderVariant}>
        Eager new graduate with experience in the most popular technologies
        </motion.div>
      </motion.div>
      <div className='flex flex-col sm:flex-row mt-20 gap-10'>
      <LinkButton buttonName='Projects' buttonDesc="See some of the projects I've worked on" hrefLink='/projects'/>
      <LinkButton buttonName='Techs' buttonDesc='Have a quick look at the technologies I know' hrefLink='/techs'/>
      </div>

    </motion.div>
  )
}
