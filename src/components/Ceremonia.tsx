import { FC } from 'react'

interface CeremoniaProps {
  
}

const Ceremonia: FC<CeremoniaProps> = ({}) => {
  return(
   <div className='flex flex-col'>
        <div className='bg-[#F9FBEB] md:h-[100vh]'>
            <div className='grid md:grid-cols-2 sm:grid-cols-1 -gap-4'>
                <div className='-bg-green-100 flex flex-col p-10 my-auto -align-middle justify-center'>
                    {/* <img src="/images/church.png" className='h-20 w-20 mx-auto' /> */}
                    
                    <div className='mt-6 flex flex-col gap-3'>
                        <p className='text-center secondary-font text-xl subpixel-antialiased'> ACOMPAÑANOS A UNIR NUESTRO MATRIMONIO ANTE <br/> DIOS EN </p>

                        <img className='object-scale-down md:h-28 sm:h-16' src="/images/IMG_5722.png" alt="" />

                        <p className='text-center secondary-font text-xl subpixel-antialiased'> A LAS </p>

                        <p className='text-center secondary-font text-4xl pb-2'> 19:00 </p>

                        <p className='text-center secondary-font subpixel-antialiased underline'> <a href="https://shorturl.at/bcARZ" target="_blank"> ANTIGUO CAMINO A VILLA DE SANTIAGO KM. 265, <br/> COL. EL URO, 64986 MONTERREY, N.L.</a></p>
                    </div>
                </div>
                <div className='bg-black -relative -w-1/2 -h-full'>
                    <img className='-w-screen md:h-[100vh] -object-fill' src="/images/iglesia.jpeg" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Ceremonia