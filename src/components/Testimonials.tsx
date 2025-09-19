'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { 
  Star, 
  Quote, 
  ChevronLeft, 
  ChevronRight,
  CheckCircle,
  Award,
  Calendar
} from 'lucide-react'

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const testimonials = [
    {
      id: 1,
      name: 'Sarah Mitchell',
      location: 'Auckland, New Zealand',
      rating: 5,
      project: 'Complete Roof Replacement',
      date: 'March 2024',
      text: 'Exceptional work! They replaced our entire roof in just 3 days. Professional, clean, and the quality is outstanding. Perfect for Auckland weather conditions.',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
      features: ['3-day completion', 'Clean work site', 'Colorsteel materials', 'Professional team']
    },
    {
      id: 2,
      name: 'James Thompson',
      location: 'Auckland, New Zealand',
      rating: 5,
      project: 'Emergency Leak Repair',
      date: 'February 2024',
      text: 'Emergency repair service saved us from major water damage during the Auckland storm. Quick response and excellent workmanship. They arrived within 2 hours.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
      features: ['2-hour response', 'Emergency service', 'Storm damage repair', 'Water damage prevention']
    },
    {
      id: 3,
      name: 'Emma Wilson',
      location: 'Auckland, New Zealand',
      rating: 5,
      project: 'Commercial Roofing',
      date: 'January 2024',
      text: 'Outstanding commercial roofing service. They handled our large Auckland warehouse project with expertise and professionalism. Perfect through all weather conditions.',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
      features: ['Large project', 'Weather tested', 'Commercial expertise', 'Long-term durability']
    },
    {
      id: 4,
      name: 'Michael Chen',
      location: 'Auckland, New Zealand',
      rating: 5,
      project: 'Gutter Installation',
      date: 'December 2023',
      text: 'Professional gutter installation and maintenance service. They solved our Auckland stormwater drainage issues completely. Highly recommend their expertise.',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
      features: ['Stormwater solution', 'Fair pricing', 'Expert installation', 'Problem solving']
    }
  ]

  const stats = [
    { number: '500+', label: 'Happy Customers' },
    { number: '4.9/5', label: 'Average Rating' },
    { number: '20+', label: 'Years Experience' },
    { number: '100%', label: 'Satisfaction Rate' }
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [testimonials.length])

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

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
    <section className="section-padding relative overflow-hidden">
      {/* Teal/Cream Background with Dynamic Grid */}
      <div
        className="absolute inset-0 dynamic-grid"
        style={{
          background: `
            linear-gradient(135deg, rgba(242, 240, 234, 0.35) 0%, rgba(168, 213, 227, 0.25) 50%, rgba(242, 240, 234, 0.2) 100%)
          `
        }}
      />
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
            Customer <span className="text-gradient">Testimonials</span>
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Don't just take our word for it. Here's what our satisfied customers have to say 
            about their experience with Reliable Roofing Solutions.
          </motion.p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              variants={itemVariants}
              className="text-center rounded-2xl p-4 relative overflow-hidden"
              style={{
                background: `linear-gradient(135deg, rgba(255, 120, 172, 0.9) 0%, rgba(255, 120, 172, 0.3) 100%)`,
                boxShadow: '0 8px 32px rgba(255, 120, 172, 0.3)'
              }}
            >
              <div className="text-4xl font-bold text-white mb-2">
                {stat.number}
              </div>
              <div className="text-white/90 font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Testimonials Carousel */}
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="relative"
        >
          <div className="bg-gradient-to-r from-teal-600 to-teal-500 rounded-2xl p-8 md:p-12 text-black">
            <div className="max-w-4xl mx-auto">
              <Quote className="w-12 h-12 text-black/30 mb-6" />
              
              <motion.div
                key={currentTestimonial}
                initial={{ opacity: 0, x: 50, scale: 0.9 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: -50, scale: 0.9 }}
                transition={{ 
                  duration: 0.6,
                  type: "spring",
                  stiffness: 100
                }}
                className="mb-8"
              >
                <p className="text-xl md:text-2xl leading-relaxed mb-6 italic">
                  "{testimonials[currentTestimonial].text}"
                </p>
                
                <div className="flex items-center justify-between">
                  <motion.div 
                  className="flex items-center space-x-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                    <motion.img
                      src={testimonials[currentTestimonial].image}
                      alt={testimonials[currentTestimonial].name}
                      className="w-16 h-16 rounded-full object-cover"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.3 }}
                    />
                    <div>
                      <motion.div 
                        className="font-semibold text-lg"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                      >
                        {testimonials[currentTestimonial].name}
                      </motion.div>
                      <motion.div 
                        className="text-black/80"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                      >
                        {testimonials[currentTestimonial].location}
                      </motion.div>
                      <motion.div 
                        className="flex items-center space-x-2 mt-1"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                      >
                        <Calendar className="w-4 h-4" />
                        <span className="text-sm text-black/70">
                          {testimonials[currentTestimonial].date}
                        </span>
                      </motion.div>
                    </div>
                  </motion.div>
                  
                  <motion.div 
                    className="flex items-center space-x-1"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                  >
                    {Array.from({ length: testimonials[currentTestimonial].rating }).map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: 0.7 + i * 0.1 }}
                      >
                        <Star className="w-5 h-5 text-yellow-400 fill-current" />
                      </motion.div>
                    ))}
                  </motion.div>
                </div>
              </motion.div>

              {/* Project Features */}
              <motion.div
                key={`features-${currentTestimonial}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="grid md:grid-cols-2 gap-4 mb-8"
              >
                <div>
                  <div className="flex items-center mb-3">
                    <Award className="w-5 h-5 mr-2" />
                    <span className="font-semibold">Project: {testimonials[currentTestimonial].project}</span>
                  </div>
                  <div className="space-y-2">
                    {testimonials[currentTestimonial].features.map((feature, index) => (
                      <div key={index} className="flex items-center text-white/90">
                        <CheckCircle className="w-4 h-4 mr-2 text-green-300" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Navigation */}
              <div className="flex items-center justify-center space-x-4">
                <button
                  onClick={prevTestimonial}
                  className="p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                
                <div className="flex space-x-2">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentTestimonial(index)}
                      className={`w-3 h-3 rounded-full transition-colors ${
                        index === currentTestimonial ? 'bg-white' : 'bg-white/50'
                      }`}
                    />
                  ))}
                </div>
                
                <button
                  onClick={nextTestimonial}
                  className="p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Trust Badges */}
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="mt-16"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Trusted by Leading Brands
            </h3>
            <p className="text-gray-600">
              We use premium materials from industry-leading manufacturers
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center opacity-60">
            <div className="text-center">
              <div className="w-24 h-16 bg-gray-200 rounded mx-auto mb-2 flex items-center justify-center">
                <span className="text-gray-500 font-semibold">Colorsteel</span>
              </div>
            </div>
            <div className="text-center">
              <div className="w-24 h-16 bg-gray-200 rounded mx-auto mb-2 flex items-center justify-center">
                <span className="text-gray-500 font-semibold">GAF</span>
              </div>
            </div>
            <div className="text-center">
              <div className="w-24 h-16 bg-gray-200 rounded mx-auto mb-2 flex items-center justify-center">
                <span className="text-gray-500 font-semibold">CertainTeed</span>
              </div>
            </div>
            <div className="text-center">
              <div className="w-24 h-16 bg-gray-200 rounded mx-auto mb-2 flex items-center justify-center">
                <span className="text-gray-500 font-semibold">Owens Corning</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Testimonials
