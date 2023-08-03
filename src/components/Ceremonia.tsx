import { FC } from 'react'

interface CeremoniaProps {
  
}

const Ceremonia: FC<CeremoniaProps> = ({}) => {
  return(
   <div className='flex flex-col'>
        <div className='bg-[#F9FBEB] md:h-[93vh]'>
            <div className='grid md:grid-cols-2 sm:grid-cols-1 -gap-4'>
                <div className='bg-black -relative -w-1/2 -h-full'>
                    <img className='-w-screen md:h-[93vh] -object-fill' src="/images/iglesia.jpeg" />
                </div>
                <div className='-bg-green-100 flex flex-col p-10 my-auto -align-middle justify-center'>
                    <img src="/images/church.png" className='h-20 w-20 mx-auto' />
                    
                    <div className='mt-6'>
                        <p className='text-xl text-center pb-2 secondary-font'> Acompáñanos a unir nuestro matrimonio ante Dios en: </p>
                        <p className='text-center pb-2 main-font text-4xl'> San José del Uro </p>
                        <p className='text-center pb-2 secondary-font text-2xl'> 19:00 </p>
                        <p className='text-base text-center underline text-[#6E7742]'> <a href="https://shorturl.at/bcARZ" target="_blank"> Antiguo Camino a Villa de Santiago Km. 265, Col. El Uro, 64986 Monterrey, N.L.</a></p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Ceremonia