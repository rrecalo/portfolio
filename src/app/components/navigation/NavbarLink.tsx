import { usePathname } from 'next/navigation'
import {Variants, motion} from 'framer-motion'
import Link from 'next/link';

interface NavbarLinkProps {
    linkName : string,
    hrefLink : string,
}

export default function NavbarLink({linkName, hrefLink}: NavbarLinkProps) {
    
    const path = usePathname();

    const navbarLinkVariants : Variants = {
        initial:{
            opacity:0,
            y:-10
        },
        enter: {
            opacity:1,
            y:0,
            transition:{duration:0.25}
        },
    }



    return (
    <motion.div className={`${path === '/'+hrefLink ? 'text-blue-600': ''}`} variants={navbarLinkVariants}
        animate={{y:0, color: path === '/'+hrefLink ? 'rgb(37, 99, 235)': ''}}
        whileHover={{y:3, color:path === '/'+hrefLink ? 'rgb(37, 99, 235)' : 'rgb(212, 212, 216)'}}
        >
            <Link className="p-5" href={"/"+hrefLink}>{linkName}</Link>
        </motion.div>
  )
}
