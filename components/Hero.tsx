import { count } from 'console';
import React from 'react';
import { Cursor, useTypewriter } from 'react-simple-typewriter';
import BackgroundCircles from './BackgroundCircles';
import Image from 'next/image';
import profilePic from '../public/me.jpg';
import Link from 'next/link';

type Props = {}

const Hero = ({}: Props) => {
    const [text, count] = useTypewriter({
        words:[
            "Hi' my name's Ranflin", 
            "Developer", 
            "Creator"],
            loop: true,
            delaySpeed: 2000,
    });
  return (
    <div className='h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden'>
        <BackgroundCircles />
        <Image className='relative rounded-full h-32 w-32 mx-auto object-fit'
            src={profilePic}
            alt="Picture of Author"
            />
        <div className='z-20'>
            <h2 className='text-sm uppercase text-gray-500 tracking-[15px]'>Software Engenieer</h2>
            <h1 className='text-5xl lg:text-6xl font-semibold px-10'>
                <span className='mr-3'>{text}</span>
                <Cursor cursorColor="#F7AB0A" />
            </h1>

            <div className='pt-5'>
                <Link href="#about">
                    <button className='heroButton'>About</button>
                </Link>
                <Link href="experience">
                    <button className='heroButton'>Experince</button>
                </Link>
                <Link href="skill">
                    <button className='heroButton'>Skill</button>
                </Link>
                <Link href="projects">
                    <button className='heroButton'>Projects</button>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Hero;