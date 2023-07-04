import { FC } from 'react'

interface SectionProps {
  
}

const Section: FC<SectionProps> = ({}) => {
  return(
    <div className='h-[50vh] container mx-auto flex flex-col gap-10'>
        <div className='w-1/2 flex mx-auto my-auto'>
            <p className='text-3xl font-light italic text-center text-[#439088]'>“Sometimes the most ordinary things could be made extraordinary, simply by doing them with the right people."</p>
        </div>
    </div>
  )
}

export default Section