import {useState} from 'react'
import {motion} from 'framer-motion'
import { useRouter } from 'next/navigation';

interface ProjectCardProps {
    title : string,
    desc : string,
}

export default function ProjectCard({title, desc} : ProjectCardProps) {

  const [max, setMax] = useState<boolean>(false);
  const router = useRouter();

  function openProject(){
    router.push("/projects/" + title);
  }

  return (
    <motion.div className='top-[72px] left-0 w-full mx-5 h-60 bg-zinc-950 p-5 rounded-lg'
    initial={{opacity:0}} animate={{opacity:1, width: "100%"}} onClick={()=>{openProject()}}>
        <div className='text-xl font-bold text-zinc-50'>
            {title}
        </div>
        <p className='text-sm text-zinc-300'>
            {desc}
        </p>
    </motion.div>
  )
}
