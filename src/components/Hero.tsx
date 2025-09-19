'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, useScroll, useTransform, useSpring } from 'framer-motion'
import { ArrowRight, Shield, Award, Clock } from 'lucide-react'
import InteractiveRoofEditor from './InteractiveRoofEditor'

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const roofRef = useRef<HTMLDivElement>(null)
  const heroRef = useRef<HTMLDivElement>(null)
  
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  })

  const y = useTransform(scrollYProgress, [0, 1], [0, -50])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (roofRef.current) {
        const rect = roofRef.current.getBoundingClientRect()
        const centerX = rect.left + rect.width / 2
        const centerY = rect.top + rect.height / 2
        
        const x = (e.clientX - centerX) / (rect.width / 2)
        const y = (e.clientY - centerY) / (rect.height / 2)
        
        setMousePosition({ x, y })
      }
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  const roofRotation = {
    rotateX: mousePosition.y * -10,
    rotateY: mousePosition.x * 10,
  }

  return (
    <section ref={heroRef} id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Animated Background */}
      <motion.div 
        className="absolute inset-0" 
        style={{ backgroundColor: '#F2F0EA' }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.div 
          className="absolute inset-0" 
          style={{
            backgroundImage: `
              linear-gradient(rgba(0, 0, 0, 0.05) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0, 0, 0, 0.05) 1px, transparent 1px)
            `,
            backgroundSize: '20px 20px'
          }}
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.5 }}
        />
        
        {/* Floating particles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-teal-400/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </motion.div>

      <motion.div 
        className="container-custom relative z-10"
        style={{ y, opacity, scale }}
      >
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -100, y: 50 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ 
              duration: 1,
              type: "spring",
              stiffness: 100,
              damping: 20
            }}
            className="text-gray-900"
          >
            <motion.h1
              initial={{ opacity: 0, y: 50, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ 
                duration: 1.2, 
                delay: 0.3,
                type: "spring",
                stiffness: 100
              }}
              className="text-5xl lg:text-6xl font-bold mb-6"
            >
              <motion.span
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                Reliable Roofing
              </motion.span>
              <motion.span 
                className="block teal-primary"
                initial={{ opacity: 0, x: 50, scale: 0.5 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                transition={{ 
                  duration: 1, 
                  delay: 0.8,
                  type: "spring",
                  stiffness: 200
                }}
              >
                Solutions
              </motion.span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ 
                duration: 1, 
                delay: 1.1,
                type: "spring",
                stiffness: 80
              }}
              className="text-xl lg:text-2xl mb-8 text-gray-700"
            >
              Quality roof installation, repairs, and maintenance with unmatched workmanship in Auckland
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 40, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ 
                duration: 1.2, 
                delay: 1.4,
                type: "spring",
                stiffness: 100
              }}
              className="flex flex-col sm:flex-row gap-4 mb-12"
            >
              <motion.button
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 1.6 }}
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
                  y: -2
                }}
                whileTap={{ scale: 0.95 }}
                className="btn-accent text-lg px-8 py-4 flex items-center justify-center space-x-2 relative overflow-hidden group"
              >
                <motion.span
                  className="relative z-10"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  Get Free Quote
                </motion.span>
                <motion.div
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <ArrowRight className="w-5 h-5" />
                </motion.div>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-teal-600 to-teal-700 opacity-0 group-hover:opacity-100"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "0%" }}
                  transition={{ duration: 0.3 }}
                />
              </motion.button>
              <motion.button
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 1.8 }}
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
                  y: -2
                }}
                whileTap={{ scale: 0.95 }}
                className="btn-secondary text-lg px-8 py-4 relative overflow-hidden group"
              >
                <motion.span
                  className="relative z-10"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  View Our Work
                </motion.span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-gray-100 to-gray-200 opacity-0 group-hover:opacity-100"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "0%" }}
                  transition={{ duration: 0.3 }}
                />
              </motion.button>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 1.2, 
                delay: 2.0,
                type: "spring",
                stiffness: 80
              }}
              className="grid grid-cols-3 gap-6"
            >
              {[
                { icon: Shield, number: "20+", text: "Years Experience", delay: 0 },
                { icon: Award, number: "500+", text: "Projects Completed", delay: 0.2 },
                { icon: Clock, number: "24/7", text: "Emergency Service", delay: 0.4 }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30, scale: 0.8 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ 
                    duration: 0.8, 
                    delay: 2.2 + item.delay,
                    type: "spring",
                    stiffness: 100
                  }}
                  whileHover={{ 
                    scale: 1.05,
                    y: -5,
                    transition: { duration: 0.2 }
                  }}
                  className="text-center group cursor-pointer"
                >
                  <motion.div
                    whileHover={{ 
                      rotate: [0, -10, 10, 0],
                      scale: 1.1
                    }}
                    transition={{ duration: 0.5 }}
                    className="w-8 h-8 mx-auto mb-2 teal-primary group-hover:text-teal-600"
                  >
                    <item.icon className="w-full h-full" />
                  </motion.div>
                  <motion.div 
                    className="text-2xl font-bold group-hover:text-teal-600"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.2 }}
                  >
                    {item.number}
                  </motion.div>
                  <div className="text-sm text-gray-600 group-hover:text-gray-700">
                    {item.text}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Content - Interactive Roof Designer */}
          <motion.div
            initial={{ opacity: 0, x: 100, y: 50, scale: 0.8 }}
            animate={{ opacity: 1, x: 0, y: 0, scale: 1 }}
            transition={{ 
              duration: 1.2, 
              delay: 0.6,
              type: "spring",
              stiffness: 80
            }}
            whileHover={{ 
              scale: 1.02,
              transition: { duration: 0.3 }
            }}
            className="relative"
          >
            <motion.div 
              className="relative w-full h-96 lg:h-[500px] bg-white rounded-lg shadow-2xl overflow-hidden"
              whileHover={{ 
                boxShadow: "0 25px 50px rgba(0,0,0,0.15)",
                y: -5
              }}
              transition={{ duration: 0.3 }}
            >
              <InteractiveRoofEditor />
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 3 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          whileHover={{ scale: 1.1 }}
          className="w-6 h-10 border-2 border-gray-600 rounded-full flex justify-center cursor-pointer group"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-gray-600 rounded-full mt-2 group-hover:bg-teal-500"
          />
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero
