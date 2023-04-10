import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';
import img1 from '../assets/portfolio-img1.png';
import img2 from '../assets/portfolio-img2.png';
import img3 from '../assets/portfolio-img3.png';

const Work = () => {
  return (
    <section className='section' id='work'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row gap-x-10'>

          <motion.div
          variants={fadeIn('right', 0.3)}
          initial="hidden"
          whileInView={'show'}
          viewport={{ once: false, amount: 0.3 }}
          className='flex-1 flex flex-col gap-y-12 mb-10 lg:mb-0'>
            {/* text */}
            <div>
              <h2 className='h2 leading-tight text-accent'>
                My Latest <br />
                Project Work.
              </h2>
              <p className='max-w-sm mb-16'>
              My latest project work is Currency Converter. This is a software application that allows users to convert one currency to another. It is designed to be user-friendly and provides accurate conversion rates in real-time with minimum and maximum values. To build a currency converter project, you will need to obtain up-to-date currency exchange rates from a reliable source, such as an API provider. I used that. Overall, a currency converter project can be a useful tool for individuals and businesses who need to exchange currencies. It can also be a great way to learn programming concepts such as APIs, data parsing, and user interface design.
              </p>
              <a href='https://github.com/Priyanka9120?tab=repositories' target='_blank' rel='noreferrer'>
              <button className='btn btn-sm'>View all projects</button>
              </a>
            </div>
            {/* image */}
            <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
              {/* overlay */}
              <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>

              {/* img */}
              <img className='group-hover:scale-125 transition-all duration-500' src={img1} alt='' />

              {/* pretitle */}
              <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
                <span className='text-gradient'>
                  <a href='https://github.com/Priyanka9120/Project-05' target='_blank' rel='noreferrer'>
                  Github Repo Link
                  </a>
                </span>
              </div>

              {/* title */}
              <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
                <span className='text-3xl text-white'>E-Commerce and Cart Management</span>
              </div>

            </div>

          </motion.div>
          <motion.div
          variants={fadeIn('left', 0.2)}
          initial="hidden"
          whileInView={'show'}
          viewport={{ once: false, amount: 0.3 }}
          className='flex-1 flex flex-col gap-y-10'>
            {/* image */}
            <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
              {/* overlay */}
              <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>

              {/* img */}
              <img className='group-hover:scale-125 transition-all duration-500' src={img2} alt='' />

              {/* pretitle */}
              <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
                <span className='text-gradient'>
                  <a href='https://github.com/Priyanka9120/CurrencyConverter_FrontEnd' target='_blank' rel='noreferrer'>
                  Github Repo Link
                  </a>
                </span>
              </div>

              {/* title */}
              <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
                <span className='text-3xl text-white'>Currency Converted</span>
              </div>

            </div>
            {/* image */}
            <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
              {/* overlay */}
              <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>

              {/* img */}
              <img className='group-hover:scale-125 transition-all duration-500' src={img3} alt='' />

              {/* pretitle */}
              <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
                <span className='text-gradient'>
                  <a href='https://github.com/Priyanka9120/Project-4-Url-shortner' target='_blank' rel='noreferrer'>
                  Github Repo Link
                  </a>
                </span>
              </div>

              {/* title */}
              <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
                <span className='text-3xl text-white'>URL Shortner</span>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
};

export default Work;
