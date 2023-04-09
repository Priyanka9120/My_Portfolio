import React from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';
import { BsBrie } from 'react-icons/bs';
import { Link } from 'react-scroll';
import Resume from '../assets/Resume_Priyanka_Yadav.pdf';


const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
  })
  return (
    <section className='section' id='about' ref={ref}>
      <div className='container mx-auto'>
        <div className='flex flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0 h-screen'>
          {/* img */}
          <motion.div
            variants={fadeIn('right', 0.3)}
            initial="hidden"
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
            className='flex-1 bg-about bg-contain bg-no-repeat h-[640px] mix-blend-lighten bg-top'>

          </motion.div>

          {/* text */}
          <motion.div
            variants={fadeIn('left', 0.5)}
            initial="hidden"
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }} className='flex-1'>
            <h2 className='h2 text-accent'>About me.</h2>
            <h3 className='h3 mb-4'>I'm a Back-end Developer with over 6 months of experience.</h3>
            <p className='mb-6'>
              Hey... I am Priyanka Yadav. I belong to Raebareli, Uttar Pradesh. I have completed Bachelor's in Computer Application from Kanpur University in 2022. Currently I am doing internship at FunctionUp. And I considered myself as very focused person. I have keen interest in coding. I always work towards my goal in very efficient manner. And I am very optimistic in tough time. I am a team player.
            </p>

            <div className='flex gap-x-6 lg:gap-x-10 mb-12'>
              <div>
                <div className='text-[40px] font-tertiary text-gradient mb-2'>

                  {inView ? <CountUp start={0} end={1} duration={3} /> : null}

                </div>
                <div className='font-primary text-sm tracking-[2px]'>
                  Year of <br />
                  Experience
                </div>
              </div>
              <div>
                <div className='text-[40px] font-tertiary text-gradient mb-2'>

                  {inView ? <CountUp start={0} end={15} duration={3} /> : null}
                  +

                </div>
                <div className='font-primary text-sm tracking-[2px]'>
                  Projects <br />
                  Completed
                </div>
              </div>
              <div>
                <div className='text-[40px] font-tertiary text-gradient mb-2'>

                  {inView ? <CountUp start={0} end={5} duration={3} /> : null}
                  +

                </div>
                <div className='font-primary text-sm tracking-[2px]'>
                  Satisfied <br />
                  Clients
                </div>
              </div>
            </div>
            <div className='flex gap-x-8 items-center'>


              <Link to='contact' activeClass='active' smooth={true} spy={true} >
                <button className='btn btn-lg'>Contact me</button>
              </Link>

              {/* <button className='btn btn-lg'>Contact me</button> */}


              <a href={Resume} className='text-gradient btn-link'>
                My Resume
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
};

export default About;
