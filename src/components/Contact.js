import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';

const Contact = () => {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const submitHandler = (event) => {
    event.preventDefault()

    const config = {
      SecureToken: "d0a654ec-f69f-416d-91d8-f4f13c20131b",
      To: 'priyanka912066@gmail.com',
      From: 'priyanka912066@gmail.com',
      Subject: "This is the form Priyanka's PortFolio!",
      Body: "Name: " + name
        + "<br> Email: " + email
        + "<br> Message: " + message
    }

    if (window.Email) {
      window.Email.send(config).then((message) => alert('Message Sent!'))   //SmtpJS.cm
    }
  }


  return (
    <section className='py-16 lg:section' id='contact'>
      <div className='container mx-auto'>

        <div className='flex flex-col lg:flex-row'>

          <motion.div
            variants={fadeIn('right', 0.3)}
            initial="hidden"
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
            className='flex-1 flex justify-start items-center'>
            <div>

              <h4 className='text-xl uppercase text-accent font-medium mb-2 tracking-wide'>Get in touch</h4>
              <h2 className='text-[45px] lg:text-[90px] leading-none mb-12'>
                Let's work <br />
                together!
              </h2>

            </div>

          </motion.div>

          <motion.form
            onSubmit={submitHandler}
            variants={fadeIn('left', 0.3)}
            initial="hidden"
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
            className='flex-1 border rounded-2xl flex flex-col gap-y-6 pb-24 p-6 items-start'>
            <input
              className='bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all'
              type='text'
              placeholder='Your name'
              required 
              value={name} 
              onChange={(e) => setName(e.target.value)}
            />
            <input
              className='bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all'
              type='text'
              placeholder='Your email'
              required 
              value={email} 
              onChange={(e) => setEmail(e.target.value)}
            />
            <textarea className='bg-transparent border-b py-12 outline-none w-full placeholder:text-white focus:border-accent transition-all resize-none mb-12' 
            required
            value={message} 
            onChange={(e) => setMessage(e.target.value)}
            placeholder='Your message'></textarea>

            <button type="submit" className='btn btn-lg'>Send message</button>
          </motion.form>
        </div>

      </div>
    </section>)
};

export default Contact;
