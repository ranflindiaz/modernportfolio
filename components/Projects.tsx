import React from 'react';
import {motion} from 'framer-motion';
import Image from 'next/image';
import projectImg from '../public/me.jpg';

type Props = {}

function Projects({}: Props) {
    const projects = [1,2,3,4,5];
  return (
    <div className='h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0'>
        <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
            Projects
        </h3>

        <motion.div 
        initial={{y: -300, opacity: 0}}
        transition={{duration: 1.2}}
        whileInView={{opacity: 1, y: 0}}
        viewport={{once: true}}
        className='relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20'>
        {projects.map((project, i) => (
            // eslint-disable-next-line react/jsx-key
            <div className='w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen'>
                <Image
                    
                    src={projectImg}
                    alt=''
                />

                <div className='space-y-10 px-0 md:px-10 max-x-6xl'>
                    <h4 className='text-4xl font-semibold text-center'>
                        <span className='underline decoration-[#F7AB0A]/50'>
                            Case of Study {i+1} of {projects.length}
                        </span> Note: add project title here 
                    </h4>
                    <p className='text-lg text-center md:text-left'>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit, suscipit laborum? Laborum pariatur laboriosam iusto voluptas vel fuga ratione! Quia deleniti provident aliquam? Amet accusantium, quod totam eum minima expedita. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus, itaque sed ut, accusantium officia esse quam eius tenetur quos cum dolorum dolores. Ad, in. Ducimus, minus animi. Deserunt, quam excepturi!
                    </p>
                </div>
            </div>
            ))}
        </motion.div>

        <div className='w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12'/>
    </div>
  )
}

export default Projects;