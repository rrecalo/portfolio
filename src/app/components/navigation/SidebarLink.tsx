import { usePathname } from 'next/navigation'
import {Variants, motion} from 'framer-motion'
import Link from 'next/link';

interface SidebarLinkProps {
    linkName : string,
    hrefLink : string,
}

export default function SidebarLink({linkName, hrefLink}: SidebarLinkProps) {
    
    const path = usePathname();

    const linkChildVariant : Variants = {
        collapsed:{
          opacity:0,
          y:-5,
        },
        open:{
          y:0,
          opacity:1,
        },
        exit:{
          opacity:0,
          x:"100%"
        }
    
      }


    return (
        <motion.li className={`pb-3 bg-black bg-opacity-75 ${path === '/'+hrefLink ? 'text-blue-600': ''}`} variants={linkChildVariant}
        animate={{x:0}} whileHover={{x:-5}}>
          <Link className='p-5 pe-[-20px]' href={"/"+hrefLink} key={hrefLink}>{linkName}</Link>
        </motion.li>
  )
}
