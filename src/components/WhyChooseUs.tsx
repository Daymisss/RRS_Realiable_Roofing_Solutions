'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { 
  Award, 
  Shield, 
  Users, 
  Clock, 
  CheckCircle, 
  Star,
  Phone,
  Wrench
} from 'lucide-react'

const WhyChooseUs = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const reasons = [
    {
      icon: Award,
      title: '20+ Years Experience',
      description: 'Over two decades of roofing expertise with thousands of successful projects completed.',
      stats: '500+ Projects',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Shield,
      title: 'Quality Materials',
      description: 'We use only premium materials from trusted brands with strong warranties.',
      stats: '10 Year Warranty',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: Users,
      title: 'Certified Team',
      description: 'Fully licensed and insured professionals with ongoing training and certifications.',
      stats: '100% Licensed',
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: Clock,
      title: '24/7 Emergency Service',
      description: 'Round-the-clock emergency repairs to protect your property when you need it most.',
      stats: '2 Hour Response',
      color: 'from-red-500 to-red-600'
    },
    {
      icon: CheckCircle,
      title: 'Guaranteed Workmanship',
      description: 'All our work comes with comprehensive warranties and satisfaction guarantees.',
      stats: '100% Satisfaction',
      color: 'from-orange-500 to-orange-600'
    },
    {
      icon: Wrench,
      title: 'Local Auckland Expertise',
      description: 'Deep knowledge of Auckland\'s climate, weather patterns, and NZ Building Code requirements for optimal roofing solutions.',
      stats: 'Auckland Specialists',
      color: 'from-teal-500 to-teal-600'
    }
  ]

  const testimonials = [
    {
      name: 'Sarah Mitchell',
      location: 'Auckland, New Zealand',
      rating: 5,
      text: 'Exceptional work! They replaced our entire roof in just 3 days. Professional, clean, and the quality is outstanding. Perfect for Auckland weather.',
      project: 'Complete Roof Replacement'
    },
    {
      name: 'James Thompson',
      location: 'Auckland, New Zealand',
      rating: 5,
      text: 'Emergency repair service saved us from major water damage during the storm. Quick response and excellent workmanship.',
      project: 'Emergency Leak Repair'
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
    <section id="about" className="section-padding relative overflow-hidden">
      {/* Teal/Cream Background with Dynamic Grid */}
      <div
        className="absolute inset-0 dynamic-grid"
        style={{
          background: `
            linear-gradient(135deg, rgba(168, 213, 227, 0.18) 0%, rgba(242, 240, 234, 0.4) 50%, rgba(168, 213, 227, 0.12) 100%),
            repeating-linear-gradient(
              45deg,
              transparent,
              transparent 16px,
              rgba(168, 213, 227, 0.05) 16px,
              rgba(168, 213, 227, 0.05) 17px
            )
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
            Why Choose <span className="text-gradient">Reliable Roofing?</span>
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            We combine decades of experience with cutting-edge techniques and premium materials 
            to deliver roofing solutions that stand the test of time.
          </motion.p>
        </motion.div>

        {/* Main Reasons Grid */}
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
        >
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              variants={itemVariants}
              whileHover={{ y: -5, scale: 1.02 }}
              className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300 group"
            >
              <div className={`w-16 h-16 bg-gradient-to-br ${reason.color} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <reason.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {reason.title}
              </h3>
              <p className="text-gray-600 mb-4">
                {reason.description}
              </p>
              <div className="text-sm font-semibold text-primary-600">
                {reason.stats}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Trust Indicators */}
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="rounded-2xl p-8 mb-16"
          style={{
            background: `linear-gradient(135deg, rgba(255, 120, 172, 0.9) 0%, rgba(255, 120, 172, 0.3) 100%)`,
            boxShadow: '0 8px 32px rgba(255, 120, 172, 0.3)'
          }}
        >
          <div className="grid md:grid-cols-4 gap-8 text-center text-white">
            <motion.div variants={itemVariants}>
              <div className="text-4xl font-bold mb-2">20+</div>
              <div className="text-lg opacity-90">Years Experience</div>
            </motion.div>
            <motion.div variants={itemVariants}>
              <div className="text-4xl font-bold mb-2">500+</div>
              <div className="text-lg opacity-90">Projects Completed</div>
            </motion.div>
            <motion.div variants={itemVariants}>
              <div className="text-4xl font-bold mb-2">100%</div>
              <div className="text-lg opacity-90">Customer Satisfaction</div>
            </motion.div>
            <motion.div variants={itemVariants}>
              <div className="text-4xl font-bold mb-2">24/7</div>
              <div className="text-lg opacity-90">Emergency Service</div>
            </motion.div>
          </div>
        </motion.div>

        {/* Testimonials */}
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <motion.h3
            variants={itemVariants}
            className="text-3xl font-bold text-gray-900 mb-8 text-center"
          >
            What Our Customers Say
          </motion.h3>
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                variants={itemVariants}
                className="bg-white rounded-xl p-6 shadow-lg border-l-4 border-accent-500"
              >
                <div className="flex items-center mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">
                  "{testimonial.text}"
                </p>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">{testimonial.location}</div>
                  </div>
                  <div className="text-sm text-primary-600 font-medium">
                    {testimonial.project}
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
          <div className="bg-gray-900 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Ready to Experience the Difference?
            </h3>
            <p className="text-lg mb-6 opacity-90">
              Join hundreds of satisfied customers who trust Reliable Roofing Solutions
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-accent text-lg px-8 py-3 flex items-center justify-center space-x-2"
              >
                <Phone className="w-5 h-5" />
                <span>Call +64 9 123 4567</span>
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-secondary text-lg px-8 py-3"
              >
                Get Free Quote
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default WhyChooseUs
