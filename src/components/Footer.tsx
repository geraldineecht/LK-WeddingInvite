import Link from 'next/link'
import { FC } from 'react'

interface FooterProps {

}

const Footer: FC<FooterProps> = ({ }) => {
	return (
		<div className='bg-[#97A699] p-10'>
			<p className='secondary-font-2 text-white text-3xl font-bold'>¡Te esperamos en nuestro gran día!</p>
			<div className='-bg-orange-500 container mx-auto '>
				<div className='grid md:grid-cols-4 p-4 mt-4 -gap-4 md:gap-0 divide-y md:divide-x md:divide-y-0'>
					<div className='flex justify-center h-[20vh]'> 
						<p className='secondary-font-2 text-white text-xl align-middle my-auto'> No Niños </p>
					</div>
					<div className='flex flex-col justify-center h-[20vh] px-4'>
						<p className='secondary-font-2 text-white text-2xl pb-2 text-center font-bold'>Código de Vestimenta</p>
						<p className='secondary-font-2 text-white text-xl text-center'> Mujeres: Formal o Cocktail middi</p>
						<p className='secondary-font-2 text-white text-xl text-center'> Hombres: Formal</p>
					</div>
					<div className='flex justify-center -my-auto -bg-black h-[20vh]'> 
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-12 h-12 text-white my-auto">
							<path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
						</svg>
					</div>
					<div className='flex flex-col justify-center h-[20vh] px-4 my-auto'>
						<p className='secondary-font-2 text-white text-2xl pb-2 text-center font-bold'>¡No manejes!</p>
						<p className='secondary-font-2 text-white text-xl pb-2 text-center'>Revisa nuestro paquete de: </p>
						<p className='secondary-font-2 text-white text-xl pb-2 text-center underline'><a href='FLAYER DE BODAS 2.pdf'>Hotel y Transporte</a></p>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Footer