import { FC } from 'react'

interface TimeSectionProps {
  timeData: number,
  subtitle?: string,
  borderBlock: boolean,
}

const TimeSection: FC<TimeSectionProps> = ({timeData, subtitle, borderBlock}) => {
  return (
    <div>
		<div className='flex'>
			{borderBlock ? (<div className='border-r-2 border-white'></div>) : ''}
			<div className='flex flex-col -w-24 -md:w-36 px-8 -md:py-4 -bg-white'>
				<p className='text-2xl text-center text-white -text-[#A89F7D]'>{timeData}</p>
			</div>
		</div>
		{subtitle ? (<p className='text-base text-center -text-[#A89F7D] pt-2'>{subtitle}</p>) : ''}
    </div>
  )
}

export default TimeSection