import { motion } from 'framer-motion';
import React from 'react';
import { urlFor } from '../sanity';
import { Skill } from '../typings';

type Props = {
    skill: Skill;
    directionLeft?: boolean;
}

const Skill = ({skill, directionLeft }: Props) => {
  return (
    <div className='group relative flex'>
        <motion.img 
            initial={{
                x: directionLeft ? -100 : 100,
                opacity: 0
            }}
            transition={{ duration: 1}}
            whileInView={{opacity: 1, x: 0}}
            src={urlFor(skill?.image).url()}
            alt=''
            className='rounded-xl border border-gray-500 object-fill w-12 h-12 md:w-28 md:h-28 xl:w-32 xl:h-32 filter group-hover:grayscale transition duration-300 ease-in-out'
        />
        <div className='absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-12 w-12 md:w-28 md:h-28 xl:w-32 xl:h-32 rounded-xl z-0'>
            <div className='flex items-center justify-center h-full'>
                <p className='text-[10px] sm:text-sm font-bold text-black opacity-100'>{skill.title} - {" "} {skill.progress}%</p>
            </div>
        </div>
    </div>
  )
}

export default Skill;