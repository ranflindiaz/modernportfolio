import React from 'react';
import {motion} from 'framer-motion';
import Image from 'next/image';
import manaPic from '../public/mana.png'

type Props = {}

const ExperienceCard = ({}: Props) => {
  return (
    <article className='flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-60 cursor-pointer transition-opacity duration-200 overflow-hidden'>
        <motion.div 
        initial={{ y: -100, opacity: 0  }}
        transition={{ duration: 1.2 }}
        whileInView={{opacity: 1, y: 0}}
        viewport={{once: true}}
        >  
            <Image 
            className='h-32 w-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center'
                src={manaPic}
                alt='Mana logo'
        />
        </motion.div>
        <div className='px-0 md:px-10'>
            <h4 className='text-4xl font-light'>Assistant Supervisor</h4>
            <p className='font-bold text-2xl mt-1'>Mana Products</p>
            <div className='flex space-x-2 my-2'>
                <p>Assistant Supervisor - </p>
                <p>Compounder</p>
            </div>

            <p className='uppercase py-3 text-gray-500 font-semibold'>
                Started 07/22/2021 - Ended (present)
            </p>

            <ul className='list-disc space-y-4 ml-5 text-lg'>
                <li>Manufacture products according to specific batch records.</li>
                <li>Measure, weigh and mix chemical ingredients according to specifications.</li>
                <li>Follow all SOP’s, GMP’s and all other applicable regulations.</li>
                <li>Manufacture products according to specific batch records.</li>
                <li>Works under moderate supervision.</li>
                <li>Trains, develops, and evaluates Team Members.</li>
            </ul>
        </div>
        
    </article>
  )
}

export default ExperienceCard;