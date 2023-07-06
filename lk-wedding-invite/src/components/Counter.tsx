import { FC } from 'react'

interface CounterProps {
  
}

const Counter: FC<CounterProps> = ({}) => {
  return (
    <div className='bg-slate-100 w-full'>
        <div className='h-[50vh] container mx-auto flex flex-col gap-10'>
            <div className='-w-1/2 flex mx-auto my-auto'>
                <p>contador</p>
            </div>
        </div>
    </div>
  )
}

export default Counter