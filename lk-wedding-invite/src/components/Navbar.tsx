import { FC } from 'react'

interface NavbarProps {
  
}

const Navbar: FC<NavbarProps> = ({}) => {
  return(
    <div className='h-[10vh] -bg-[#fefce8] bg-[#E8B46A] -bg-[#6E7742] sticky top-0 flex flex-col justify-center'>
        <p className="text-white text-2xl text-center">Sticky Nav Bar</p>
    </div>
  )
}

export default Navbar