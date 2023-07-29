import { FC } from 'react'

interface InfoProps {
  
}

const Info: FC<InfoProps> = ({}) => {
    return(
        <div className='h-[100vh]'>
            <div className='grid md:grid-cols-2'>
                <div className='-h-[50vh] bg-slate-400 overflow-hidden'>
                    <img className='object-cover' src="/images/iglesia.jpeg" />
                </div>
                <div>02</div>
                <div className=''>03</div>
                <div className='-h-[50vh] bg-purple-800'>
                    <div className='h-[50vh] bg-slate-400 overflow-hidden'>
                        <img className='object-cover' src="/images/Koba1.jpg" />
                    </div>
                </div>
            </div>
        </div>
      )
}

export default Info