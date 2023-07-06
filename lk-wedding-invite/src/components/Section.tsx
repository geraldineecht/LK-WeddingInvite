import { FC } from 'react'

interface SectionProps {
  
}

const Section: FC<SectionProps> = ({}) => {
  return(
   <div className='flex flex-col'>
        <div className='bg-orange-200'>
            <div className='grid md:grid-cols-2 sm:grid-cols-1 -gap-4'>
                <div className='bg-black'>
                    <img className='-rounded-md object-cover' src="/images/Koba1.jpg" />
                </div>
                <div className='-bg-green-100 flex flex-col p-10 my-auto -align-middle justify-center'>
                    <p className='text-3xl text-center pb-4'> La Ceremonia</p>
                    <p className='text-xl text-center pb-2'> Iglesia </p>
                    <p className='text-base text-center'> Vista Nacional Km 262.5, 64985 Monterrey, N.L.</p>
                </div>
            </div>
        </div>
        <div className='bg-sky-50'>
            <div className='grid md:grid-cols-2 sm:grid-cols-1 -gap-4'>
                <div className='-bg-green-100 flex flex-col p-10 my-auto -align-middle justify-center'>
                    <p className='text-3xl text-center pb-4'> El Evento</p>
                    <p className='text-xl text-center pb-2'> Salon Kobá</p>
                    <p className='text-base text-center'> Carr Nacional SN-S"MOTOCROSS, Sin Nombre de Col 52, Monterrey, N.L.</p>
                </div>
                <div className='-bg-black'>
                    <img className='-rounded-md object-cover' src="/images/Koba1.jpg" />
                </div>
            </div> 
        </div>
    </div>
  )
}

export default Section