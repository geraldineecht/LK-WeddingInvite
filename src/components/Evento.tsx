import { FC, useState } from 'react'
import Link from 'next/link';

interface EventoProps {
  
}

const Evento: FC<EventoProps> = ({}) => {
    const [isModalOpen, setModalState] = useState(false);

    const handleOpen = () => {
        setModalState(true);
    };

    const handleClose = () => {
        setModalState(false);
    };

	const sendMessage = () => {

	}

	return (
		<div className='flex flex-col'>
			<div className='bg-[#F9FBEB] -bg-pink-950 md:h-[100VH]'>
					<div className='grid md:grid-cols-2 sm:grid-cols-1 -gap-4'>
						<div className='-bg-black'>
							<img className='md:h-[100vh] object-cover' src="/images/Koba1.jpg" />
						</div>
						<div className='-bg-green-100 flex flex-col p-10 my-auto -align-middle justify-center'>
							{/* <img src="/images/cheers.png" className='h-20 w-20 mx-auto' /> */}
							
							<div className='mt-6 flex flex-col gap-3'>
								<p className='text-center secondary-font text-xl subpixel-antialiased'> CELEBRA CON NOSOTROS EN </p>

								<p className='titles-font text-4xl md:text-5xl text-center mt-4'> JARDÍN KOBÁ</p>

								<p className='text-center secondary-font text-xl subpixel-antialiased'> A LAS </p>

								<p className='text-center secondary-font text-4xl pb-2'> 20:00 </p>

								<p className='text-center secondary-font subpixel-antialiased underline'> <a href="https://shorturl.at/uzAJW" target="_blank"> CARR NACIONAL, SIN NOMBRE DE COL 52, MONTERREY, N.L</a></p>
							</div>

							<div className='mx-auto mt-6'>
								<Link href='https://api.whatsapp.com/send?phone=+528116578203&text=Hola,%20mi%20nombre%20es%20______,%20confirmo%20mi%20asistencia%20a%20la%20boda%20de%20Lucia%20y%20Kevin%20el%20pr%C3%B3ximo%2014%20de%20Octubre%20del%202023.%20%0aNumero%20de%20Invitados:%20______'
								 className="w-60 text-[#6E7742] border-2 border-[#6E7742] -bg-blue-700 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2"> Confírmanos tu Asistencia</Link>
							</div>

							
						</div>
						
					</div> 
			</div>
		</div>
	)
}

export default Evento