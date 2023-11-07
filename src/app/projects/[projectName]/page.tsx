'use client'
import {useEffect, useState} from 'react'
import {motion} from 'framer-motion'
import { useParams, useRouter } from "next/navigation";
import { data } from '@/app/data';

export default function Page() {

  const [projectData, setProjectData] = useState<any[]>([]);
  const params = useParams();
  const router = useRouter();

  useEffect(()=>{
    if(params?.projectName){
      setProjectData(data.filter((obj : any) => obj.name === params.projectName));
    }
  },[params])

  function returnToProjects(){
    router.push("/projects");
  }


  return (
    <motion.div className='relative text-xl h-60 mt-[72px] mx-5 sm:mx-auto p-5 rounded-lg bg-zinc-950'
    initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}}
    >
      <div className='flex justify-between items-center font-bold'>
        {params?.projectName}
        <motion.div className='text-zinc-400 mr-1 py-1 rounded-lg px-2'
        animate={{backgroundColor:"transparent"}} whileHover={{backgroundColor:"rgb(24, 24, 27)"}} onClick={()=>returnToProjects()}>
          {'<-'}
        </motion.div>
      </div>
      <motion.p className='text-zinc-400 text-sm font-normal'>
        {projectData[0]?.summary}
      </motion.p>
      <div className='absolute bottom-5 left-5 flex gap-5'>
        <motion.a target="_blank" href={projectData[0]?.repo} className=' px-3 py-2 text-sm  bg-black rounded-lg'
        initial={{y:-10, opacity:0}}
        animate={{opacity:1, y:0}}
        whileHover={{x:3, boxShadow: "2px 2px 0px 0px rgb(37, 99, 235, 0.5)", transition:{ease: "easeInOut"}}}>
          View on GitHub
        </motion.a>
        <motion.a target="_blank" href={projectData[0]?.repo} className='px-3 py-2 text-sm  bg-black rounded-lg'
        initial={{y:-10, opacity:0}}
        animate={{opacity:1, y:0}}
        whileHover={{x:3, boxShadow: "2px 2px 0px 0px rgb(37, 99, 235, 0.5)", transition:{ease: "easeInOut"}}}>
          Open Live Deploy
        </motion.a>
      </div>
    </motion.div>
  )
}

