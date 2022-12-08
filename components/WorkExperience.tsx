import React from 'react';
import {motion} from 'framer-motion';
import ExperienceCard from './ExperienceCard';
import { Experience } from '../typings';

type Props = {
  experineces: Experience[];
}

 const WorkExperience = ({experineces}: Props) => {
  return (
    <motion.div 
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 1.5 }}
    className='h-screen top-20 flex relative overflow-hidden flex-col text-lft md:flex-row w-full md:max-w-full md:px-10 justify-evenly mx-auto items-center snap'>

        <h3 className='absolute -top-2 md:top-5 uppercase tracking-[20px] text-gray-500 text-2xl'>
            Experience
        </h3>

        <div className='w-11/12 h-5/6 mt-6 md:mt-0 md:w-full flex space-x-5 overflow-x-scroll pl-1 md:pl-10 snap-x scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80'>
            {experineces?.map((experinece) => (
              <ExperienceCard 
                key={experinece._id} 
                experience={experinece}
              />
            ))}
        </div>
    </motion.div>
  )
}

export default WorkExperience;