import { FC } from 'react'
import AutoPlayCarousel from './AutoPlayCarousel';

interface CoverProps {
  
}

const Cover: FC<CoverProps> = ({}) => {
  return(
    <div className="relative h-auto w-full flex flex-col -bg-[url('/images/imagenPrincipal.jpg')] -bg-cover">
      <div className='h-[100vh] bg-orange-200 z-0'>
        <div className="overflow-hidden">
          <AutoPlayCarousel></AutoPlayCarousel>
        </div>
      </div>
        <div className='h-[100vh] absolute inset-x-0 top-0'>
            <div className='grid grid-rows-10'>
              <div className='row-span-9 -bg-white container mx-auto px-8 my-14 flex flex-col -gap-4 -bg-orange-50'>
                  <div className='pt-5 -bg-black flex justify-center'>
                      <img className='object-cover md:h-48 sm:h-24' src="/images/LK2.png" alt="" />
                  </div>  
                  <p className={`-p-10 text-center text-[#FEECD3] -secondary-font text-xl`}>14 • 10 • 2023</p>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Cover