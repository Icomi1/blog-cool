import { workExperience } from '@/data'
import React from 'react'
import { Button } from './ui/MovingBorders'

const Experience = () => {
  return (
    <div className='py-20' id="experince">
        
    <h1 className='heading'>
        我的
        <span className='text-purple'> 工作经验
        </span>
    </h1>
    
    <div 
    // className='w-full mt-12 grid lg:grid-cols-4 grid-cols-1 gap-10'
    className='w-full mt-12 flex flex-col items-center justify-center gap-6'>
        {workExperience.map((card) => (
            <Button
            key={card.id}
            duration={Math.floor(Math.random() * 10000 + 10000)}
            borderRadius='1.75rem'
            className='flex-1 text-white border-neutral-200
            dark:border-slate-800'> 
             <div className='flex lg:flex-row flex-col lg:items-center p-3
             py-6 md:p-5 lg:p-10 gap-2'>
                <img src={card.thumbnail} alt={card.thumbnail}
                className='lg:w-32 md:w-20 w-16'/>
                <div className='lg:ms-5'>

                    <div className='flex items-center justify-between'>
                <h1 className='text-start text-xl md:text-2xl font-bold'> 
                        {card.companyName}
                    </h1>
                    <h2 className='text-start text-white-200 text-l md:text-xl font-semibold'>
                        {card.date}
                        </h2>
                    </div>
                    <h1 className='text-start text-white-200 text-l md:text-xl font-semibold'> 
                        {card.title}
                    </h1>
                    <p className='text-start text-white-100 mt-3 font-semibold'>
                        {card.desc}
                    </p>
                </div>
             </div>
            </Button>
        ))}
        </div>
        
        </div>
  )
}

export default Experience