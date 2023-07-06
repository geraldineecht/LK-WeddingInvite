import { FC } from 'react'
import Image from "next/image";
import { greenColor, grayColor } from '@/utils';

interface CoverProps {
  
}

const Cover: FC<CoverProps> = ({}) => {
  return(
    <div className="relative h-screen w-full flex flex-col bg-[url('/images/imagenPrincipal.jpg')] bg-cover">
        <div className='h-screen'>
            <div className='-bg-white container mx-auto px-8 my-14 flex flex-col gap-10'>
                <p className={`text-2xl text-center text-[#A89F7D]`}>14 • 10 • 2023</p>
                <div className='-bg-black flex justify-center'>
                    <img className='object-cover md:h-48 sm:h-24' src="/images/LK1.png" alt="" />
                </div>  
            </div>
        </div>
    </div>
  )
}

export default Cover