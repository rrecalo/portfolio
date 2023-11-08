import {useState} from 'react'
import {motion} from 'framer-motion'
import { useRouter } from 'next/navigation';

interface ProjectCardProps {
    title : string,
    tags: string[],
    desc : string,
}

export default function ProjectCard({title, desc, tags} : ProjectCardProps) {

  const [max, setMax] = useState<boolean>(false);
  const [hover, setHover] = useState<boolean>(false);
  const router = useRouter();

  function openProject(){
    router.push("/projects/" + title);
  }

  return (
    <motion.div className='relative top-[72px] left-0 h-25 bg-zinc-950 p-5 rounded-lg'
    initial={{opacity:0}} animate={{opacity:1}} 
    onMouseEnter={()=>{setHover(true)}}
    onMouseLeave={()=>{setHover(false)}}
    whileHover={{x:3, boxShadow: "4px 4px 0px 0px rgb(37, 99, 235, 0.5)", transition:{ease: "easeInOut"}}}
    onClick={()=>{openProject()}}>
        <div className='text-xl font-bold text-zinc-50'>
            {title}
        </div>
        <p className='text-sm text-zinc-400 mt-1'>
            {desc}
        </p>
        <div className='flex gap-1 text-xs text-zinc-200 mt-2'>
        {tags.map(tag=>(
        <div key={tag} className='bg-blue-800 p-1 rounded-md'>
          {tag}
        </div>))}
        </div>
        <motion.div className="absolute bottom-5 right-5">
          <motion.span className='text-base mr-2 text-zinc-300'
          initial={{opacity:0, y:5}} animate={hover ? {opacity:1, y:0} : {}}>
            see details
          </motion.span>
          <motion.span className=''
          initial={{y:5}} animate={hover ? {y:0, color: "rgb(244, 244, 245)"} : {color:"rgb(161, 161, 170)"}}>
          {"->"}
          </motion.span>
        </motion.div>
    </motion.div>
  )
}
