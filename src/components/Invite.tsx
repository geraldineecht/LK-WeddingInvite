import { FC } from 'react'
import Ceremonia from './Ceremonia'
import Evento from './Evento'
import Footer from './Footer'

interface InviteProps {
  
}

const Invite: FC<InviteProps> = ({}) => {
  return(
    <div className="relative w-full flex flex-col -bg-[#fefce8] -bg-[#EFEFEF]">
        <Ceremonia></Ceremonia>
        <Evento></Evento>
        <Footer></Footer>
    </div>
  )
}

export default Invite