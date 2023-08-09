import { FC } from 'react'

interface EventoProps {
  
}

const Evento: FC<EventoProps> = ({}) => {
  return (
    <div className='flex flex-col'>
        <div className='bg-[#F9FBEB] -bg-pink-950 md:h-[100VH]'>
                <div className='grid md:grid-cols-2 sm:grid-cols-1 -gap-4'>
                <div className='-bg-green-100 flex flex-col p-10 my-auto -align-middle justify-center'>
                    {/* <img src="/images/cheers.png" className='h-20 w-20 mx-auto' /> */}
                    
                    <div className='mt-6 flex flex-col gap-3'>
                        <p className='text-center secondary-font text-xl subpixel-antialiased'> CELEBRA CON NOSOTROS EN </p>

                        <img className='object-scale-down md:h-28 sm:h-16' src="/images/IMG_5724.png" alt="" />

                        <p className='text-center secondary-font text-xl subpixel-antialiased'> A LAS </p>

                        <p className='text-center secondary-font text-4xl pb-2'> 20:00 </p>

                        <p className='text-center secondary-font subpixel-antialiased underline'> <a href="https://shorturl.at/uzAJW" target="_blank"> CARR NACIONAL, SIN NOMBRE DE COL 52, MONTERREY, N.L</a></p>
                    </div>

                    <div className='mx-auto mt-6'>
                        <button type="button" className="w-60 text-[#6E7742] border-2 border-[#6E7742] -bg-blue-700 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2">Confírmanos tu Asistencia</button>
                    </div>
                </div>
                    <div className='-bg-black'>
                        <img className='md:h-[100vh]' src="/images/Koba1.jpg" />
                    </div>
                </div> 
        </div>
    </div>
  )
}

export default Evento