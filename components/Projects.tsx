import React from 'react';
import {motion} from 'framer-motion';
import { Project } from '../typings';
import { urlFor } from '../sanity';
import Link from 'next/link';

type Props = {
    projects: Project[]
}

const Projects = ({projects}: Props) => {
  return (

    <motion.div className='h-[800px] sm:h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0 scrollbar-thin'
    >
        <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'
        >
            Projects
        </h3>

        <div className='relative -top-12 w-11/12 flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80'>
        
            {projects?.map((project, i) => (
                <div 
                key={project._id}
                className='w-full flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen'
                >
                    <Link  href={`${project?.linkToBuild}`} legacyBehavior>
                        <a target='_blank'>
                            
                            <motion.img
                            initial={{
                                y: -150,
                                opacity: 0
                            }}
                            transition={{duration: 1.2}}
                            whileInView={{opacity: 1, y: 0}}
                            viewport={{once: true}}
                            className='h-100 w-80 mx-auto rounded-lg'
                            src={urlFor(project?.image).url()}
                            alt='Project image'
                            
                            />
                        </a>
                    </Link>
                    <div className='space-y-10 px-0 md:px-10 max-x-6xl'>
                        <h4 className='text-4xl font-semibold text-center'>
                            <span className='underline decoration-[#F7AB0A]/50'>
                                
                            </span> {project?.title} 
                        </h4>
                        <div className='flex items-center space-x-2 justify-center'>
                            {project.technologies.map((tech) => (
                                <img 
                                    className='h-10 w-10 rounded-full'
                                    key={tech._id}
                                    src={urlFor(tech?.image).url()}
                                    alt=''
                                />
                            ))}
                        </div>
                        <p className='text-lg text-center md:text-left'>
                            {project?.summary}
                        </p>
                    </div>
                </div>
            ))}
        </div>
        <div className='w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12'/>
    </motion.div> 
  )
}

export default Projects;
