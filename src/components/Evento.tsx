import { FC } from 'react'

interface EventoProps {
  
}

const Evento: FC<EventoProps> = ({}) => {
  return (
    <div className='flex flex-col'>
        <div className='bg-[#F9FBEB] -bg-pink-950 md:h-[93vh]'>
                <div className='grid md:grid-cols-2 sm:grid-cols-1 -gap-4'>
                <div className='-bg-green-100 flex flex-col p-10 my-auto -align-middle justify-center'>
                    <img src="/images/cheers.png" className='h-20 w-20 mx-auto' />
                    
                    <div className='mt-6'>
                        <p className='text-xl text-center pb-2 secondary-font'> Celebra con nosotros en: </p>
                        <p className='text-center pb-2 main-font text-4xl'> Kobá Jardín</p>
                        <p className='text-xl text-center pb-2'> 20:00 </p>
                        <p className='text-base text-center underline text-[#6E7742]'> <a href="https://shorturl.at/uzAJW" target="_blank"> Carr Nacional, Sin Nombre de Col 52, Monterrey, N.L</a> </p>
                    </div>

                    <div className='mx-auto mt-6'>
                        <button type="button" className="w-60 text-[#6E7742] border-2 border-[#6E7742] -bg-blue-700 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2">Confírmanos tu Asistencia</button>
                    </div>
                </div>
                    <div className='-bg-black'>
                        <img className='md:h-[93vh]' src="/images/Koba1.jpg" />
                    </div>
                </div> 
        </div>
    </div>
  )
}

export default Evento