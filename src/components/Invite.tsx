import { FC } from 'react'
import Navbar from './Navbar'
import Ceremonia from './Ceremonia'
import Counter from './Counter'
import Evento from './Evento'
import Info from './Info'

interface InviteProps {
  
}

const Invite: FC<InviteProps> = ({}) => {
  return(
    <div className="relative w-full flex flex-col -bg-[#fefce8] -bg-[#EFEFEF]">
        <Ceremonia></Ceremonia>
        <Evento></Evento>
    </div>
  )
}

export default Invite