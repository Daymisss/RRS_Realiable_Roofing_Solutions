'use client'

import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Shield, Award, Clock } from 'lucide-react'

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const roofRef = useRef<HTMLDivElement>(null)

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
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-accent-50">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1581578731548-c6a0c3f2fcc0?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center bg-no-repeat opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-primary-900/80 via-primary-800/60 to-transparent"></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl lg:text-6xl font-bold mb-6 text-shadow-lg"
            >
              Reliable Roofing
              <span className="block text-accent-400">Solutions</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl lg:text-2xl mb-8 text-gray-200"
            >
              Quality roof installation, repairs, and maintenance with unmatched workmanship in Riga
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 mb-12"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-accent text-lg px-8 py-4 flex items-center justify-center space-x-2"
              >
                <span>Get Free Quote</span>
                <ArrowRight className="w-5 h-5" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-secondary text-lg px-8 py-4"
              >
                View Our Work
              </motion.button>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="grid grid-cols-3 gap-6"
            >
              <div className="text-center">
                <Shield className="w-8 h-8 mx-auto mb-2 text-accent-400" />
                <div className="text-2xl font-bold">20+</div>
                <div className="text-sm text-gray-300">Years Experience</div>
              </div>
              <div className="text-center">
                <Award className="w-8 h-8 mx-auto mb-2 text-accent-400" />
                <div className="text-2xl font-bold">500+</div>
                <div className="text-sm text-gray-300">Projects Completed</div>
              </div>
              <div className="text-center">
                <Clock className="w-8 h-8 mx-auto mb-2 text-accent-400" />
                <div className="text-2xl font-bold">24/7</div>
                <div className="text-sm text-gray-300">Emergency Service</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content - Interactive 3D Roof */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div
              ref={roofRef}
              className="relative w-full h-96 lg:h-[500px] perspective-1000"
              style={{ perspective: '1000px' }}
            >
              {/* 3D Roof Container */}
              <motion.div
                style={roofRotation}
                className="roof-3d w-full h-full relative"
              >
                {/* Roof Structure */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative w-80 h-80 lg:w-96 lg:h-96">
                    {/* Main Roof */}
                    <div className="absolute inset-0 bg-gradient-to-br from-gray-700 via-gray-600 to-gray-800 rounded-lg transform rotate-12 scale-110 shadow-2xl">
                      <div className="absolute inset-0 bg-gradient-to-br from-gray-600 to-gray-700 rounded-lg transform -rotate-6 scale-95"></div>
                    </div>
                    
                    {/* Roof Tiles */}
                    <div className="absolute inset-0 flex flex-wrap justify-center items-center p-4">
                      {Array.from({ length: 8 }).map((_, i) => (
                        <div
                          key={i}
                          className="w-8 h-4 bg-gradient-to-r from-red-600 to-red-700 rounded-sm m-1 shadow-md"
                          style={{
                            transform: `rotate(${i * 5 - 20}deg) translateY(${Math.sin(i) * 10}px)`,
                          }}
                        />
                      ))}
                    </div>
                    
                    {/* Chimney */}
                    <div className="absolute top-8 right-8 w-6 h-16 bg-gradient-to-b from-gray-500 to-gray-600 rounded-sm shadow-lg"></div>
                    
                    {/* Windows */}
                    <div className="absolute top-16 left-8 w-12 h-8 bg-blue-200 rounded shadow-lg"></div>
                    <div className="absolute top-16 right-16 w-12 h-8 bg-blue-200 rounded shadow-lg"></div>
                    
                    {/* Door */}
                    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-8 h-16 bg-amber-800 rounded-t shadow-lg"></div>
                  </div>
                </div>

                {/* Floating Elements */}
                <motion.div
                  animate={{
                    y: [0, -10, 0],
                    rotate: [0, 5, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute top-4 left-4 w-6 h-6 bg-accent-500 rounded-full shadow-lg"
                />
                <motion.div
                  animate={{
                    y: [0, -15, 0],
                    rotate: [0, -5, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1,
                  }}
                  className="absolute top-8 right-4 w-4 h-4 bg-primary-500 rounded-full shadow-lg"
                />
                <motion.div
                  animate={{
                    y: [0, -8, 0],
                    rotate: [0, 3, 0],
                  }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.5,
                  }}
                  className="absolute bottom-8 left-8 w-3 h-3 bg-accent-400 rounded-full shadow-lg"
                />
              </motion.div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-accent-500/20 rounded-full blur-xl"></div>
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-primary-500/20 rounded-full blur-xl"></div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-white rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-white rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero
