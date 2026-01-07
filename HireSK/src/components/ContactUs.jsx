import React, { useState } from 'react'
import Title from './Title'
import assets from '../assets/assets'
import toast from 'react-hot-toast'
import { motion } from "framer-motion";

const ContactUs = () => {

  const [emailError, setEmailError] = useState(false);
  const [isEmailValid, setIsEmailValid] = useState(false);

  const isValidEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const onSubmit = async (event) => {
    event.preventDefault();

    const form = event.target;
    const email = form.email.value.trim();

    // ⛔ Safety check (extra protection)
    if (!isValidEmail(email)) {
      setEmailError(true);
      setIsEmailValid(false);
      toast.error('Please enter a valid email address');
      return;
    }

    const formData = new FormData(form);
    formData.append("access_key", "f9709783-fa3a-473d-a9d1-200ebd86dbed"); // your Web3Forms key

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        toast.success('Thank you for your submission!');
        form.reset();
        setIsEmailValid(false);
        setEmailError(false);
      } else {
        toast.error(data.message);
      }
    } catch {
      toast.error('Something went wrong. Please try again.');
    }
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ staggerChildren: 0.2 }}
      id='contact-us'
      className='flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-30 text-gray-700 dark:text-white'
    >
      <Title
        title='Reach out to us'
        desc='From strategy to execution, we craft digital solutions that move your business forward.'
      />

      <motion.form
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        viewport={{ once: true }}
        onSubmit={onSubmit}
        className='grid sm:grid-cols-2 gap-3 sm:gap-5 max-w-2xl w-full'
      >

        {/* Name */}
        <div>
          <p className='mb-2 text-sm font-medium'>Your name</p>
          <div className='flex pl-3 rounded-lg border border-gray-300 dark:border-gray-600'>
            <img src={assets.person_icon} alt="" />
            <input
              name="name"
              type="text"
              placeholder='Enter your name'
              className='w-full p-3 text-sm outline-none'
              required
            />
          </div>
        </div>

        {/* Email */}
        <div>
          <p className='mb-2 text-sm font-medium'>Email id</p>
          <div
            className={`flex pl-3 rounded-lg border ${
              emailError
                ? 'border-red-500'
                : 'border-gray-300 dark:border-gray-600'
            }`}
          >
            <img src={assets.email_icon} alt="" />
            <input
              name="email"
              type="email"
              placeholder='Enter your email'
              className='w-full p-3 text-sm outline-none'
              required
              onChange={(e) => {
                const value = e.target.value.trim();
                const valid = isValidEmail(value);

                setIsEmailValid(valid);
                setEmailError(!valid && value.length > 0);
              }}
            />
          </div>
        </div>

        {/* Message */}
        <div className='sm:col-span-2'>
          <p className='mb-2 text-sm font-medium'>Message</p>
          <textarea
            name="message"
            rows={8}
            placeholder='Enter your message'
            className='w-full p-3 text-sm outline-none rounded-lg border border-gray-300 dark:border-gray-600'
            required
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={!isEmailValid}
          className={`w-max flex gap-2 text-sm px-10 py-3 rounded-full transition-all
            ${
              isEmailValid
                ? 'bg-primary text-white cursor-pointer hover:scale-103'
                : 'bg-gray-400 text-gray-200 cursor-not-allowed'
            }`}
        >
          Submit <img src={assets.arrow_icon} alt="" className='w-4' />
        </button>

      </motion.form>
    </motion.div>
  );
};

export default ContactUs;
