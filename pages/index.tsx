import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import WorkExperience from '../components/WorkExperience';

export default function Home() {
  return (
    <div className='bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-scroll z-0'>
      <Head>
        <title>Modern Portfolio</title>
      </Head>

      <Header />

      <section id='hero' className='snap-start'>
        <Hero/>
      </section>

      {/* About */}
      <section id='about' className='snap-center'>
        <About/>
      </section>

      {/* Experience */}
      <section id='experience' className='snap-center'>
      <WorkExperience />
      </section>
      

      {/* Skills */}

      {/* Projects */}

      {/* Contact Me */}
    </div>
  )
}
