import React from 'react';
import {motion} from 'framer-motion';
import { Experience } from '../typings';
import { urlFor } from '../sanity';

type Props = {
    experience: Experience;
}

const ExperienceCard = ({experience}: Props) => {
  return (
    <article className='flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] 
    md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-60 
    cursor-pointer transition-opacity duration-200 overflow-hidden'>
        <motion.img 
        initial={{ y: -100, opacity: 0  }}
        transition={{ duration: 1.2 }}
        whileInView={{opacity: 1, y: 0}}
        viewport={{once: true}}
        className='h-32 w-32 xl:w-[200px] xl:h-[200px] object-fit object-center'
        src={urlFor(experience?.companyImage).url()}
        alt='Mana logo'
        >
        </motion.img>
        <div className='px-0 md:px-10'>
        <h4 className="text-xl
        sm:text-4xl font-light pb-2">{experience?.jobTitle}  </h4>
            <p className='font-bold text-2xl mt-1'>{experience?.company}</p>
            <div className='flex space-x-2 my-2'>
                {experience?.technologies.map(tech => (
                    <img 
                        key={tech._id}
                        className='h-10 w-10 rounded-full'
                        src={urlFor(tech?.image).url()}
                    />
                ))}
            </div>

            <p className='uppercase py-3 text-gray-500 font-semibold'>
                {new Date(experience?.dateStarted).toDateString()} - {" "}
                {experience.isCurrentlyWorkingHere ? "Present" : new Date(experience?.dateEnded).toDateString()}
            </p>

            <ul className='list-disc space-y-4 ml-5 text-lg h-96 overflow-y-scroll scrollbar-thin scrollbar-track-black scrollbar-thumb-[#F7AB0A]/80'>
                {experience.points?.map((point, i) => (
                    <li key={i}> {point}</li>
                ))}
            </ul>
        </div>
        
    </article>
  )
}

export default ExperienceCard;