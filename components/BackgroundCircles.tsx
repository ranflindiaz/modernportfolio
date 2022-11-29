import React from 'react';
import {motion} from 'framer-motion';

type Props = {}

const BackgroundCircles = ({}: Props) => {
  return (
    <motion.div 
      initial ={{
        opacity: 0
      }}
      animate={{
        scale: [1,2,2,3,1],
        opacity: [0.1, 0.2, 0.4, 0.8, 0.1, 1.0],
        borderRadius: ["20%", "20%", "50%", "80%", "20%"]
      }}
      transition={{
        duration: 2.5
      }}
    className='relative flex justify-center items-center'>

        <div className='absolute border border-[#F7Ab0A] rounded-full opacity-20 w-80 h-80 md:h-[670px] md:w-[670px] mt-52 animate-pulse' />

    </motion.div>
  )
}

export default BackgroundCircles;