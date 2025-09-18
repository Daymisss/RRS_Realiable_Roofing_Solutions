'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { 
  Home, 
  Wrench, 
  Building, 
  Droplets, 
  Sun, 
  Shield,
  ArrowRight,
  CheckCircle
} from 'lucide-react'

const Services = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const coreServices = [
    {
      icon: Home,
      title: 'Residential Roofing',
      description: 'Complete roof installation and replacement for homes using premium materials and expert craftsmanship.',
      features: ['New roof installation', 'Roof replacement', 'Material selection', 'Warranty included']
    },
    {
      icon: Wrench,
      title: 'Roof Repairs',
      description: 'Fast and reliable repair services to fix leaks, storm damage, and other roofing issues.',
      features: ['Leak repairs', 'Storm damage', 'Emergency service', 'Quick response']
    },
    {
      icon: Building,
      title: 'Commercial Roofing',
      description: 'Professional roofing solutions for businesses, warehouses, and commercial properties.',
      features: ['Flat roof systems', 'Industrial roofing', 'Maintenance plans', 'Bulk pricing']
    },
    {
      icon: Droplets,
      title: 'Gutters & Downpipes',
      description: 'Complete gutter installation, repair, and maintenance to protect your property from water damage.',
      features: ['Gutter installation', 'Downpipe repair', 'Cleaning service', 'Leaf protection']
    }
  ]

  const specialtyServices = [
    {
      icon: Sun,
      title: 'Skylight Installation',
      description: 'Add natural light to your home with professional skylight installation.',
      features: ['Energy efficient', 'Weather sealed', 'Custom sizing', 'Professional installation']
    },
    {
      icon: Shield,
      title: 'Roof Insulation',
      description: 'Improve energy efficiency and comfort with proper roof insulation.',
      features: ['Energy savings', 'Temperature control', 'Moisture protection', 'Long-term benefits']
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  }

  return (
    <section id="services" className="section-padding bg-gray-50">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.h2
            variants={itemVariants}
            className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6"
          >
            Our <span className="text-gradient">Services</span>
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            From new installations to emergency repairs, we provide comprehensive roofing solutions 
            that protect your most valuable asset with unmatched quality and reliability.
          </motion.p>
        </motion.div>

        {/* Core Services */}
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="mb-16"
        >
          <motion.h3
            variants={itemVariants}
            className="text-2xl font-bold text-gray-900 mb-8 text-center"
          >
            Core Services
          </motion.h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {coreServices.map((service, index) => (
              <motion.div
                key={service.title}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 card-hover"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-lg flex items-center justify-center mb-4">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-3">
                  {service.title}
                </h4>
                <p className="text-gray-600 mb-4">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="mt-4 text-primary-600 font-semibold flex items-center group"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </motion.button>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Specialty Services */}
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <motion.h3
            variants={itemVariants}
            className="text-2xl font-bold text-gray-900 mb-8 text-center"
          >
            Specialty Services
          </motion.h3>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {specialtyServices.map((service, index) => (
              <motion.div
                key={service.title}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 card-hover border-l-4 border-accent-500"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-accent-500 to-accent-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-semibold text-gray-900 mb-2">
                      {service.title}
                    </h4>
                    <p className="text-gray-600 mb-4">
                      {service.description}
                    </p>
                    <ul className="space-y-1">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                          <CheckCircle className="w-3 h-3 text-green-500 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-primary-600 to-accent-500 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Need a Roofing Expert?
            </h3>
            <p className="text-lg mb-6 opacity-90">
              Get a free inspection and quote for your roofing project
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-primary-600 font-semibold px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors"
            >
              Get Free Quote
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Services
