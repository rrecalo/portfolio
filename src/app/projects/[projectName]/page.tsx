'use client'
import {useEffect} from 'react'
import { useParams } from "next/navigation";

export default function Page() {
  const params = useParams();
  
  useEffect(()=>{
    console.log(params);
  },[params])

  return (
    <div className='text-xl font-bold sm:mt-[72px]'>{params?.projectName}</div>
  )
}

