import React from 'react';
import {motion} from 'framer-motion';
import Image from 'next/image';
import manaPic from '../public/mana.png'

type Props = {}

function ExperienceCard({}: Props) {
  return (
    <article>
        <motion.div 
        initial={{
            y:-100,
            opacity:0
        }}
        transition={{
            duration:1.2
        }}
        whileInView={{opacity:1, y:0}}
        viewport={{once: true}}
        >  
            <Image 
            className='h-32 w-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center'
                src={manaPic}
                alt=''
        />
        </motion.div>
        <div className='px-0 md:px-10'>
            <h4 className='text-4xl font-light'>Assistant Supervisor</h4>
            <p className='font-bold text-2xl mt-1'>Mana Products</p>
            <div className='flex space-x-2 my-2'>
                <p>Assistant Supervisor - </p>
                <p>Compounder</p>
            </div>
            <p>Started 07/22/2021 - Ended (present)</p>

            <ul className='list-disc space-y-4 ml-5 text-lg'>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
            </ul>
        </div>
        
    </article>
  )
}

export default ExperienceCard;