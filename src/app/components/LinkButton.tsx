import { motion, useAnimationControls } from "framer-motion"
import { useRouter } from "next/navigation";
import { useEffect } from "react";

interface LinkButtonProps {
    buttonName : string,
    buttonDesc : string,
    hrefLink : string,

}

export default function LinkButton({buttonName, buttonDesc, hrefLink} : LinkButtonProps) {

    const router = useRouter();
    const buttonControls = useAnimationControls();
    const arrowControls = useAnimationControls();
    //animate={{rotate:360, transition:{repeat: Infinity, repeatType:'mirror'}}}
    async function handleReroute(newPath : string){
        arrowControls.start({rotate:360, transition:{duration:0.25}});
        await buttonControls.start({x:"100vw", transition:{duration:0.25, delay:0.25}});
        router.push(newPath);
      }

    useEffect(()=>{
        buttonControls.start({rotate:0, y:0, opacity:1, transition:{delay:2, duration:0.25}})
    }, [])

  return (
    <motion.button className='bg-zinc-950 p-5 w-80 h-fit rounded-lg text-left' onClick={() => {handleReroute(hrefLink)}}
    initial={{rotate:-15, y:-10, opacity:0}}
    animate={buttonControls}
    whileHover={{x:10, boxShadow: "4px 4px 0px 0px rgb(37, 99, 235, 0.5)", transition:{ease: "easeInOut"}}}>
        <motion.p className='font-bold text-xl text-zinc-50'>
          {buttonName}
            <motion.span className="ml-2 inline-block w-fit h-fit" animate={arrowControls}>
                {'->'}
            </motion.span>
        </motion.p>
        <motion.p className='mt-1 text-base font-light text-zinc-400'>
          {buttonDesc}
        </motion.p>
      </motion.button>
  )
}

