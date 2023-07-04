import { FC } from 'react'
import Navbar from './Navbar'
import Section from './Section'

interface InviteProps {
  
}

const Invite: FC<InviteProps> = ({}) => {
  return(
    <div className="relative w-full flex flex-col -bg-[#EFF3F4] bg-[#EFEFEF]">
        <Navbar></Navbar>
        <Section></Section>
        <Section></Section>
        <Section></Section>
    </div>
  )
}

export default Invite