'use client'

import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import { 
  Home, 
  Wrench, 
  Building, 
  Droplets, 
  Sun, 
  Shield,
  ArrowRight,
  CheckCircle,
  ChevronLeft,
  ChevronRight,
  Play,
  Pause
} from 'lucide-react'

const Services = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const [direction, setDirection] = useState(0)

  const coreServices = [
    {
      icon: Home,
      title: 'Residential Roofing',
      description: 'Complete roof installation and replacement for Auckland homes using premium Colorsteel and other NZ-approved materials.',
      features: ['New roof installation', 'Roof replacement', 'Colorsteel roofing', 'NZ Building Code compliance']
    },
    {
      icon: Wrench,
      title: 'Roof Repairs',
      description: 'Fast and reliable repair services to fix leaks, storm damage, and other roofing issues common in Auckland weather.',
      features: ['Leak repairs', 'Storm damage', 'Emergency service', 'Weatherproofing']
    },
    {
      icon: Building,
      title: 'Commercial Roofing',
      description: 'Professional roofing solutions for Auckland businesses, warehouses, and commercial properties.',
      features: ['Flat roof systems', 'Industrial roofing', 'Maintenance plans', 'Commercial warranties']
    },
    {
      icon: Droplets,
      title: 'Gutters & Downpipes',
      description: 'Complete gutter installation, repair, and maintenance to handle Auckland\'s heavy rainfall and protect your property.',
      features: ['Gutter installation', 'Downpipe repair', 'Leaf protection', 'Stormwater management']
    }
  ]

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return
    
    const interval = setInterval(() => {
      setDirection(1)
      setCurrentSlide((prev) => (prev + 1) % coreServices.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [isAutoPlaying, coreServices.length])

  const nextSlide = () => {
    setDirection(1)
    setCurrentSlide((prev) => (prev + 1) % coreServices.length)
  }

  const prevSlide = () => {
    setDirection(-1)
    setCurrentSlide((prev) => (prev - 1 + coreServices.length) % coreServices.length)
  }

  const goToSlide = (index: number) => {
    setDirection(index > currentSlide ? 1 : -1)
    setCurrentSlide(index)
  }

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

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.8,
      rotateY: direction > 0 ? 45 : -45
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1,
      rotateY: 0
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.8,
      rotateY: direction < 0 ? 45 : -45
    })
  }

  const slideTransition = {
    x: { type: "spring", stiffness: 300, damping: 30 },
    opacity: { duration: 0.2 },
    scale: { duration: 0.3 },
    rotateY: { duration: 0.4 }
  }

  return (
    <section id="services" className="section-padding relative overflow-hidden">
      {/* Teal/Cream Background with Dynamic Grid */}
      <div
        className="absolute inset-0 dynamic-grid"
        style={{
          background: `
            linear-gradient(135deg, rgba(242, 240, 234, 0.4) 0%, rgba(168, 213, 227, 0.2) 50%, rgba(242, 240, 234, 0.3) 100%),
            repeating-linear-gradient(
              30deg,
              transparent,
              transparent 15px,
              rgba(168, 213, 227, 0.05) 15px,
              rgba(168, 213, 227, 0.05) 16px
            )
          `
        }}
      />
      
      {/* Floating Teal Particles */}
      <div className="absolute inset-0">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-3 h-3 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              background: 'linear-gradient(135deg, rgba(166, 213, 227, 0.3) 0%, rgba(139, 196, 216, 0.2) 100%)',
              boxShadow: '0 0 20px rgba(166, 213, 227, 0.3)'
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.6, 0.2],
              scale: [1, 1.3, 1],
            }}
            transition={{
              duration: 5 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
          />
        ))}
      </div>
      
      <div className="container-custom relative z-10">
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
            Our <span className="text-black">Services</span>
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            From new installations to emergency repairs, we provide comprehensive roofing solutions 
            that protect your most valuable asset with unmatched quality and reliability. Specializing in 
            Auckland's unique climate and building requirements.
          </motion.p>
        </motion.div>

        {/* Core Services Carousel */}
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
          
          {/* Carousel Container */}
          <div className="relative max-w-4xl mx-auto">
            <div className="relative h-96 overflow-hidden rounded-2xl">
              <AnimatePresence mode="wait" custom={direction}>
                <motion.div
                  key={currentSlide}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={slideTransition}
                  className="absolute inset-0 flex items-center justify-center"
                >
                  <motion.div
                    className="bg-white rounded-2xl p-8 shadow-2xl max-w-2xl mx-auto transform-gpu"
                    whileHover={{ 
                      scale: 1.02,
                      boxShadow: "0 25px 50px rgba(0,0,0,0.15)"
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="flex flex-col lg:flex-row items-center gap-8">
                      {/* Icon and Content */}
                      <motion.div 
                        className="flex-shrink-0"
                        whileHover={{ 
                          rotate: [0, -10, 10, 0],
                          scale: 1.1
                        }}
                        transition={{ duration: 0.6 }}
                      >
                        <div className="w-24 h-24 bg-gradient-to-br from-teal-500 to-teal-600 rounded-2xl flex items-center justify-center shadow-lg">
                          {React.createElement(coreServices[currentSlide].icon, { className: "w-12 h-12 text-white" })}
                        </div>
                      </motion.div>
                      
                      <div className="flex-1 text-center lg:text-left">
                        <motion.h4 
                          className="text-3xl font-bold text-gray-900 mb-4"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.2 }}
                        >
                          {coreServices[currentSlide].title}
                        </motion.h4>
                        <motion.p 
                          className="text-lg text-gray-600 mb-6"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.3 }}
                        >
                          {coreServices[currentSlide].description}
                        </motion.p>
                        <motion.div 
                          className="grid grid-cols-2 gap-2 mb-6"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.4 }}
                        >
                          {coreServices[currentSlide].features.map((feature, featureIndex) => (
                            <motion.div
                              key={featureIndex}
                              className="flex items-center text-sm text-gray-600"
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: 0.5 + featureIndex * 0.1 }}
                            >
                              <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                              {feature}
                            </motion.div>
                          ))}
                        </motion.div>
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="bg-gradient-to-r from-teal-500 to-teal-600 text-white font-semibold px-6 py-3 rounded-lg flex items-center mx-auto lg:mx-0 group"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.6 }}
                        >
                          Learn More
                          <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                        </motion.button>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Carousel Controls */}
            <div className="flex items-center justify-center mt-8 space-x-4">
              {/* Previous Button */}
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={prevSlide}
                className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:shadow-xl transition-all duration-300"
              >
                <ChevronLeft className="w-6 h-6 text-teal-500" />
              </motion.button>

              {/* Play/Pause Button */}
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                className="w-12 h-12 bg-gradient-to-r from-teal-500 to-teal-600 rounded-full shadow-lg flex items-center justify-center hover:shadow-xl transition-all duration-300"
              >
                {isAutoPlaying ? (
                  <Pause className="w-6 h-6 text-white" />
                ) : (
                  <Play className="w-6 h-6 text-white" />
                )}
              </motion.button>

              {/* Next Button */}
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={nextSlide}
                className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:shadow-xl transition-all duration-300"
              >
                <ChevronRight className="w-6 h-6 text-teal-500" />
              </motion.button>
            </div>

            {/* Dots Indicator */}
            <div className="flex justify-center mt-6 space-x-2">
              {coreServices.map((_, index) => (
                <motion.button
                  key={index}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.8 }}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentSlide 
                      ? 'bg-teal-500 scale-125' 
                      : 'bg-gray-300 hover:bg-teal-300'
                  }`}
                />
              ))}
            </div>
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
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 card-hover border-l-4 border-teal-500"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-teal-600 rounded-lg flex items-center justify-center flex-shrink-0">
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
          <div className="bg-gradient-to-r from-teal-500 to-teal-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Need a Roofing Expert?
            </h3>
            <p className="text-lg mb-6 opacity-90">
              Get a free inspection and quote for your roofing project
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-black font-semibold px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors"
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
