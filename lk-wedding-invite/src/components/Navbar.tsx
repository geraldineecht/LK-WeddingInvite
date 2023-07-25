import React from 'react';
import { FC } from 'react'

interface NavbarProps {

}

const Navbar: FC<NavbarProps> = ({ }) => {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
	<nav className="sticky top-0  flex flex-wrap items-center justify-between px-2 py-4 bg-[#6E7742]">
		<div className="container px-4 mx-auto flex flex-wrap items-center justify-center">
			<div className="w-full relative flex justify-end lg:w-auto lg:static lg:block lg:justify-start">
				<button
				className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
				type="button"
				onClick={() => setNavbarOpen(!navbarOpen)}
				>
					<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
					<path strokeLinecap="round" strokeLinejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
					</svg>

				</button>
			</div>
			<div className={ "lg:flex flex-grow items-center" + (navbarOpen ? " flex" : " hidden")}id="example-navbar-danger">
				<ul className="flex flex-col lg:flex-row list-none lg:mx-auto">
					<li className="nav-item">
						<a className="px-3 py-2 flex items-center text-base leading-snug text-white hover:opacity-75" href="#ceremonia">Ceremonia</a>
					</li>
					<li className="nav-item">
						<a className="px-3 py-2 flex items-center text-base leading-snug text-white hover:opacity-75" href="#recepcion">Recepción</a>
					</li>
					<li className="nav-item">
						<a className="px-3 py-2 flex items-center text-base leading-snug text-white hover:opacity-75" href="#transporteYHotel">Transporte y Hotel</a>
					</li>
					<li className="nav-item">
						<a className="px-3 py-2 flex items-center text-base leading-snug text-white hover:opacity-75" href="#rspv">RSPV</a>
					</li>
				</ul>
			</div>
		</div>
	</nav>
  )
}

export default Navbar