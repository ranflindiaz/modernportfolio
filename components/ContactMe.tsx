import React from 'react';
import {EnvelopeIcon} from '@heroicons/react/24/solid';
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
    name: string,
    email: string,
    subject: string,
    message: string
  };

type Props = {}

const ContactMe =({}: Props) => {
    const { 
        register, 
        handleSubmit, 
         }
         = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = formData => {
    window.location.href = `mailto:ranflindiaz@hotmail.com?subject${formData.subject}&body=Hi my name is ${formData.name}. ${formData.message} (${formData.email})`;
  };
    

  return (
    <div className='h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl justify-evenly mx-auto items-center'>
        <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
            Contact
        </h3>
        <div className='flex flex-col space-y-10'>
            <h4 className='text-lg md:text-4xl font-semibold text-center'>
                I am the developer you are looking for. { ""}
                <span className='decoration-[#F7AB0A]/50 underline'>
                    Lets do it.
                </span>
            </h4>
            <div className='space-y-10'>
                <div className='flex items-center space-x-5 justify-center'>
                    <EnvelopeIcon className='text-[#F7AB0A] h-7 w-7 animate-pulse'/>
                    <p>ranflindiaz@hotmail.com</p>
                </div>               
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col space-y-2 w-fit mx-auto'>
                <div className='w-80 sm:w-full space-x-0 space-y-2 sm:flex sm:space-x-2 sm:space-y-0' >
                    <input {...register('name')} placeholder='Name' className='contactInput w-full' type="text" />
                    <input {...register('email')} placeholder='Email' className='contactInput w-full' type="email" />
                </div>

                <input  {...register('subject')}placeholder='Subject' className='contactInput' type="text" />

                <textarea {...register('message')} placeholder='Message' className='contactInput' />
                <button type='submit' className='bg-[#F7AB0A] py-5 rounded-sm text-black font-bold text-lg hover:bg-[#F7AB0A]/40'>Submit</button>
            </form>
        </div>
    </div>
  )
}

export default ContactMe;
