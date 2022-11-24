import React from 'react';
import {motion} from 'framer-motion';
import Image from 'next/image'
import aboutPic from '../public/about.jpg';

type Props = {}

const About = ({}: Props) => {
  return (
    <motion.div 
    initial={{
        opacity: 0,
    }}
    whileInView={{
        opacity: 1
    }}
    transition={{
        duration: 1.5
    }}

    className='relative flex flex-col h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
        <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
            About
        </h3>
        <motion.div 
            initial={{
                x: -200,
                opacity: 0
            }}
            transition={{
                duration: 1.2
            }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{once: true}}
            className="-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 object-cover md:rounded-lg md:w-74 md:h-95 xl:w-[500px] xl:h-[600px]"
        >
            <Image className='rounded-full'
            src={aboutPic}
            alt="About picture"
            />
        </motion.div>

        <div className='space-y-10 px-0 md:px-10'>
            <h4 className='text-4xl font-semibold'>
                Here is a{" "}
                <span className='underline decoration-[#F7AB0A]/50'> little</span>{" "}
                background
            </h4>
            <p className='text-base'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam voluptatum dicta consequatur, suscipit fugit similique debitis aperiam ad ipsum illo nihil. Deleniti quia iste pariatur unde corporis id illum doloremque. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore vitae consectetur dicta nesciunt esse sed, vero doloribus, consequuntur vel dolor incidunt ipsum. Repellat quos corrupti quo ratione blanditiis aperiam doloribus.</p>
        </div>
    </motion.div>
  )
}

export default About