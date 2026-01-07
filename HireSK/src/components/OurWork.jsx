import React from 'react'
import Title from './Title'
import assets from '../assets/assets'
import { motion } from "framer-motion";


const OurWork = () => {

    const workData = [
        {
            title: 'SaaS Sales Pipeline Generation',
            description: 'Delivered a predictable revenue pipeline for a SaaS company through targeted decision-maker outreach.',
            image: assets.SaaS_Sales_Pipeline_Generation
        },
        {
            title: 'IT Services Lead Generation',
            description: 'Delivered qualified discovery calls for an IT and technology consulting firm by engaging CIOs and CTOs.',
            image: assets.it_services_lead
        },
        {
            title: 'Business Consulting Lead Generation',
            description: 'Delivered high-intent, qualified leads for a business consulting firm through appointment-focused outreach.',
            image: assets.business_consulting_lead
        },
    ]

  return (
    <motion.div 
        initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ staggerChildren: 0.2 }}
    id='our-work' className='flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-30 text-gray-700 dark:text-white'>
      <Title title='Our latest work' desc='From strategy to execution, we craft digital solutions that move your business forward.'/>

    <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-5xl'>
        {
            workData.map((work, index)=>(
                <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                key={index} className='hover:scale-102 duration-500 transition-all cursor-pointer'>
                    <img src={work.image} className='w-full rounded-xl' alt="" />
                    <h3 className='mt-3 mb-2 text-lg font-semibold'>{work.title}</h3>
                    <p className='text-sm opacity-60 w-5/6'>{work.description}</p>
                </motion.div>
            ))
        }
    </div>

    </motion.div>
  )
}

export default OurWork
