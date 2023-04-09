import React from 'react';
import { BsArrowUpRight } from 'react-icons/bs';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';

const services = [
  {
    name: 'NodeJS Engineer',
    description: 'Node. js developers deploy and maintain network applications. They manage the exchange of data between servers and users, develop back-end components, and connect applications with other web services.',
    link: 'Learn more',
    website:'https://github.com/aliyr/Nodejs-Developer-Roadmap',
  },
  {
    name: 'BackEnd Developer',
    description: 'Back-end is the programming that handles the behind-the-scenes of a website or application that people do not see, such as the server and database.',
    link: 'Learn more',
    website:'https://en.wikibooks.org/wiki/Web_Development/What_is_a_backend%3F',
  },
  {
    name: 'Software Engineer',
    description: 'Software engineering is an engineering-style system of software development. A software engineer is a person who applies the principles of software engineering to design, develop, maintain, test, and evaluate computer software.',
    link: 'Learn more',
    website:'https://en.wikipedia.org/wiki/Software_engineering',
  },
  {
    name: 'Web Developer',
    description: "A web developer makes and maintains websites. Web developers also handle the technical aspects of a website, including its performance website speed and capacity like the maximum amount of traffic the site could handle at a given time.",
    link: 'Learn more',
    website:'https://www.wearedevelopers.com/magazine/what-is-a-web-developer',
  }
]

const Services = () => {
  return (
    <section className='section' id='services'>

      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row'>
          {/* text $ image*/}
          <motion.div
            variants={fadeIn('right', 0.3)}
            initial="hidden"
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
            className='flex-1 lg:bg-services lg:bg-bottom bg-no-repeat mix-blend-lighten mb-12 lg:mb-0'>
            <h2 className='h2 text-accent mb-6'>What I Do.</h2>
            <h3 className='h3 max-w-[455px] mb-16'>I'm a Back-End Developer at FunctionUp with over 6 months of experience.</h3>
            <a href='https://github.com/Priyanka9120?tab=repositories' target='_blank' rel='noreferrer'>
            <button className='btn btn-sm'>See My work</button>
            </a>
          </motion.div>

          {/* Services */}
          <motion.div
            variants={fadeIn('left', 0.5)}
            initial="hidden"
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
            className='flex-1'>
            {/* services list */}
            <div>
              {services.map((service, index) => {

                const { name, description, link, website } = service;

                return (
                  <div className='border-b border-white/20 h-[176px] mb-[38px] flex' key={index}>
                    <div className='max-w-[476px]'>
                      <h4 className='text-[20px] tracking-wider font-primary font-semibold mb-6'>{name}</h4>
                      <p className='font-secondary leading-tight'>{description}</p>
                    </div>
                    <div className='flex flex-col flex-1 items-end'>
                      <a href={website}  target='_blank' rel='noreferrer' className='btn w-9 h-9 mb-[42px] flex justify-center items-center'>
                        <BsArrowUpRight />
                      </a>
                      <a href={website} target='_blank' rel='noreferrer' className='text-gradient text-sm'>
                        {link}
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>


    </section>
  )
};

export default Services;
