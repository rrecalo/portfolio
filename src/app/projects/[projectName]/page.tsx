'use client'
import {useEffect} from 'react'
import {motion} from 'framer-motion'
import { useParams, useRouter } from "next/navigation";

export default function Page() {
  const params = useParams();
  const router = useRouter();

  useEffect(()=>{
    console.log(params);
  },[params])

  function returnToProjects(){
    router.push("/projects");
  }

  return (
    <motion.div className='text-xl font-bold sm:mt-[72px]  p-5 rounded-lg bg-zinc-950'
    initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}}
    >
      <div className='flex justify-between items-center'>
      {params?.projectName}
      <motion.div className='text-zinc-400 mr-1 py-1 rounded-lg px-2'
      animate={{backgroundColor:"transparent"}} whileHover={{backgroundColor:"rgb(24, 24, 27)"}} onClick={()=>returnToProjects()}>
        {'<-'}
      </motion.div>
      </div>
    </motion.div>
  )
}

