import React from 'react'
import assets from '../assets/assets'
import Title from './Title'
import ServiceCard from './ServiceCard'
import { motion } from "framer-motion";


const Services = () => {

    const servicesData = [
        {
          title: 'Outbound Lead Generation',
          description: 'Multi-channel outbound that drives real sales conversations.',
          icon: assets.ads_icon
        },
        {
          title: 'Sales Development',
          description: 'Managed SDR teams built to scale pipeline fast.',
          icon: assets.marketing_icon
        },
        {
            title: 'Decision-Maker Targeting',
            description: 'Reach the right buyers, not gatekeepers.',
            icon: assets.content_icon,
        },
        {
            title: 'Appointment Setting',
            description: 'Predictable, qualified meetings booked for your team.',
            icon: assets.social_icon,
        },
    ]

  return (
    <motion.div 
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ staggerChildren: 0.2 }}
      
    id='services' className='relative flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-30 text-gray-700 dark:text-white'>
        
        <img src={assets.bgImage2} alt="" className='absolute -top-110 -left-70 -z-1 dark:hidden'/>

    <Title title='How we help you?' desc='We help businesses generate qualified conversations, expand into new markets, and build predictable sales pipelines.
Everything we do is performance-driven and focused on real revenue outcomes.'/>

    <div className='flex flex-col md:grid grid-cols-2'>
        {servicesData.map((service, index)=>(
            <ServiceCard key={index} service={service} index={index}/>
        ))}
    </div>

    </motion.div>
  )
}

export default Services
