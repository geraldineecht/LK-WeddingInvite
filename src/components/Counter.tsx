import { FC, useEffect, useState } from 'react'
import TimeSection from './ui/TimeSection';

interface CounterProps {
  
}

const Counter: FC<CounterProps> = ({}) => {

    const [days, setDays] = useState(0);
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);

    useEffect(() => {
        // const target = new Date("14/10/2023 00:00:00")
        const target = new Date("10/14/2023 23:59:59");

        const interval = setInterval(() => {
            const now = new Date();
            const difference = target.getTime() - now.getTime();

            const d = Math.floor(difference / (1000 * 60 * 60 * 24));
            setDays(d);

            const h = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            setHours(h);

            const m = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
            setMinutes(m);

            const s = Math.floor((difference % (1000 * 60)) / 1000);
            setSeconds(s);

        }, 1000)

        return () => clearInterval(interval);
    }, [])

    return (
        <div className='flex gap-2 -md:gap-10 mx-auto -my-auto -bg-orange-500'>
            <TimeSection borderBlock={false} timeData={days} />
            <TimeSection borderBlock={true} timeData={hours} />
            <TimeSection borderBlock={true} timeData={minutes} />
            <TimeSection borderBlock={true} timeData={seconds} />
        </div>
        // <div className=' bg-[#E8B46A] -bg-slate-100 w-full'>
        //     <div className='h-[30vh] container mx-auto flex flex-col gap-10'>
        //         <div className='flex gap-2 -md:gap-10 mx-auto my-auto -bg-slate-500'>
        //             <TimeSection borderBlock={false} timeData={days} subtitle='Días'/>
        //             <TimeSection borderBlock={true} timeData={hours} subtitle='Horas'/>
        //             <TimeSection borderBlock={true} timeData={minutes} subtitle='Minutos'/>
        //             <TimeSection borderBlock={true} timeData={seconds} subtitle='Segundos'/>
        //         </div>
        //     </div>
        // </div>
    )
}

export default Counter