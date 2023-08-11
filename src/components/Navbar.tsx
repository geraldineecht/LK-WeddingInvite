import Link from 'next/link';
import React from 'react';
import { FC } from 'react'

interface NavbarProps {

}

const Navbar: FC<NavbarProps> = ({ }) => {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
	<nav className={"sticky top-0  flex flex-wrap items-center justify-between px-2 py-4" + (navbarOpen ? " flex bg-[#97A699]" : " -bg-[#97A699]/50")}>
		<div className="container px-4 mx-auto flex flex-wrap items-center justify-center">
			<div className={ "lg:flex flex-grow items-center" + (navbarOpen ? " flex -bg-[#97A699]" : "hidden")}id="example-navbar-danger">
				<ul className="flex flex-col lg:flex-row list-none lg:mx-auto">
					<li className="nav-item">
						<Link href='/' className="px-3 py-2 flex items-center text-base leading-snug text-white hover:opacity-75" onClick={() => setNavbarOpen(false)}>Home</Link>
					</li>
					<li className="nav-item">
						<Link href='/ceremoniaPagina' className="px-3 py-2 flex items-center text-base leading-snug text-white hover:opacity-75" onClick={() => setNavbarOpen(true)}>Ceremonia</Link>
					</li>
					<li className="nav-item">
						<Link href='/eventoPagina' className="px-3 py-2 flex items-center text-base leading-snug text-white hover:opacity-75" onClick={() => setNavbarOpen(true)}>Recepción</Link>
					</li>
					<li className="nav-item">
						<Link href='FLAYER DE BODAS 2.pdf' target="_blank" className="px-3 py-2 flex items-center text-base leading-snug text-white hover:opacity-75" onClick={() => setNavbarOpen(true)}>Transporte y Hotel</Link>
					</li>
				</ul>
			</div>
		</div>
	</nav>
  )
}

export default Navbar