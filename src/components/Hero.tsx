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
              Quality roof installation, repairs, and maintenance with unmatched workmanship in Auckland
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

          {/* Right Content - Interactive 3D Roof Sheets */}
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
              {/* 3D Roof Sheets Container */}
              <motion.div
                style={roofRotation}
                className="roof-3d w-full h-full relative"
              >
                {/* Main Roof Structure with Realistic Sheets */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative w-80 h-80 lg:w-96 lg:h-96">
                    
                    {/* Corrugated Steel Roof Sheets */}
                    <div className="absolute inset-0 transform rotate-12 scale-110">
                      {/* Primary Roof Sheet */}
                      <motion.div 
                        className="absolute inset-0 rounded-lg shadow-2xl overflow-hidden"
                        style={{
                          background: 'linear-gradient(135deg, #2c3e50 0%, #34495e 25%, #2c3e50 50%, #1a252f 75%, #0f1419 100%)',
                          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.6), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
                        }}
                        animate={{
                          y: [0, -2, 0],
                          rotateX: [0, 2, 0],
                        }}
                        transition={{
                          duration: 4,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                      >
                        {/* Corrugated Pattern */}
                        <div className="absolute inset-0">
                          {Array.from({ length: 8 }).map((_, i) => (
                            <motion.div
                              key={i}
                              className="absolute w-full h-8 bg-gradient-to-r from-transparent via-gray-300/20 to-transparent"
                              style={{
                                top: `${i * 12.5}%`,
                                background: `linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.1) 20%, rgba(255,255,255,0.3) 50%, rgba(255,255,255,0.1) 80%, transparent 100%)`,
                                clipPath: 'polygon(0% 0%, 100% 0%, 95% 50%, 100% 100%, 0% 100%, 5% 50%)'
                              }}
                              animate={{
                                opacity: [0.3, 0.7, 0.3],
                              }}
                              transition={{
                                duration: 3,
                                repeat: Infinity,
                                ease: "easeInOut",
                                delay: i * 0.2,
                              }}
                            />
                          ))}
                        </div>
                        
                        {/* Steel Rivets */}
                        <div className="absolute inset-0">
                          {Array.from({ length: 24 }).map((_, i) => (
                            <motion.div
                              key={i}
                              className="absolute w-1.5 h-1.5 bg-gradient-to-br from-gray-400 to-gray-600 rounded-full shadow-inner"
                              style={{
                                left: `${8 + (i % 6) * 15}%`,
                                top: `${10 + Math.floor(i / 6) * 12}%`,
                                boxShadow: 'inset 0 1px 2px rgba(0,0,0,0.5), 0 1px 0 rgba(255,255,255,0.3)'
                              }}
                              animate={{
                                scale: [1, 1.1, 1],
                                opacity: [0.6, 1, 0.6],
                              }}
                              transition={{
                                duration: 2 + Math.random() * 2,
                                repeat: Infinity,
                                ease: "easeInOut",
                                delay: i * 0.1,
                              }}
                            />
                          ))}
                        </div>
                      </motion.div>
                      
                      {/* Secondary Roof Sheet */}
                      <motion.div 
                        className="absolute inset-0 rounded-lg transform -rotate-6 scale-95 shadow-xl overflow-hidden"
                        style={{
                          background: 'linear-gradient(135deg, #34495e 0%, #2c3e50 25%, #1a252f 50%, #0f1419 75%, #000000 100%)',
                          boxShadow: '0 20px 40px -12px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.05)'
                        }}
                        animate={{
                          y: [0, -1, 0],
                          rotateX: [0, -1, 0],
                        }}
                        transition={{
                          duration: 5,
                          repeat: Infinity,
                          ease: "easeInOut",
                          delay: 0.5,
                        }}
                      >
                        {/* Weathering and Patina */}
                        <div className="absolute inset-0 opacity-40">
                          <div className="absolute top-0 left-0 w-full h-1/3 bg-gradient-to-b from-gray-400/30 to-transparent"></div>
                          <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-gradient-to-tl from-gray-600/40 to-transparent"></div>
                          <div className="absolute top-1/3 left-1/4 w-1/2 h-1/3 bg-gradient-to-r from-transparent via-gray-500/20 to-transparent"></div>
                        </div>
                      </motion.div>
                    </div>
                    
                    {/* Individual Roof Sheets with Realistic Movement */}
                    <div className="absolute inset-0 flex flex-wrap justify-center items-center p-4">
                      {Array.from({ length: 16 }).map((_, i) => (
                        <motion.div
                          key={i}
                          className="w-12 h-8 rounded-sm shadow-lg overflow-hidden"
                          style={{
                            background: 'linear-gradient(135deg, #2c3e50 0%, #34495e 25%, #2c3e50 50%, #1a252f 75%, #0f1419 100%)',
                            transform: `rotate(${i * 2 - 16}deg) translateY(${Math.sin(i * 0.3) * 6}px) translateX(${Math.cos(i * 0.2) * 4}px)`,
                            boxShadow: '0 6px 12px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.1)',
                            border: '1px solid rgba(255,255,255,0.05)'
                          }}
                          animate={{
                            y: [0, -3, 0],
                            rotate: [i * 2 - 16, i * 2 - 14, i * 2 - 16],
                            scale: [1, 1.02, 1],
                          }}
                          transition={{
                            duration: 3 + Math.random() * 2,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: i * 0.15,
                          }}
                        >
                          {/* Corrugated lines on each sheet */}
                          <div className="absolute inset-0">
                            {Array.from({ length: 3 }).map((_, j) => (
                              <div
                                key={j}
                                className="absolute w-full h-0.5 bg-gradient-to-r from-transparent via-gray-300/30 to-transparent"
                                style={{
                                  top: `${25 + j * 25}%`,
                                  background: `linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.2) 20%, rgba(255,255,255,0.4) 50%, rgba(255,255,255,0.2) 80%, transparent 100%)`
                                }}
                              />
                            ))}
                          </div>
                        </motion.div>
                      ))}
                    </div>
                    
                    {/* Steel Chimney */}
                    <motion.div 
                      className="absolute top-8 right-8 w-8 h-20 rounded-sm shadow-xl overflow-hidden"
                      style={{
                        background: 'linear-gradient(180deg, #34495e 0%, #2c3e50 25%, #1a252f 50%, #0f1419 75%, #000000 100%)',
                        boxShadow: '0 8px 16px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.1)'
                      }}
                      animate={{
                        y: [0, -1, 0],
                        rotateY: [0, 2, 0],
                      }}
                      transition={{
                        duration: 6,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    >
                      {/* Chimney Cap */}
                      <div className="absolute -top-1 left-0 w-full h-2 bg-gradient-to-b from-gray-300 to-gray-500 rounded-t-sm"></div>
                      {/* Steel rivets on chimney */}
                      <div className="absolute top-4 left-1 w-1 h-1 bg-gray-400 rounded-full"></div>
                      <div className="absolute top-8 right-1 w-1 h-1 bg-gray-400 rounded-full"></div>
                    </motion.div>
                    
                    {/* Steel Windows */}
                    <motion.div 
                      className="absolute top-16 left-8 w-14 h-10 bg-gradient-to-br from-sky-200 to-blue-300 rounded shadow-lg"
                      style={{
                        border: '2px solid #2c3e50',
                        boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.3), 0 4px 8px rgba(0,0,0,0.4)'
                      }}
                      animate={{
                        scale: [1, 1.02, 1],
                        rotateY: [0, 1, 0],
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    >
                      {/* Steel Frame */}
                      <div className="absolute inset-0 border-2 border-gray-600 rounded"></div>
                      {/* Window Reflection */}
                      <div className="absolute top-1 left-1 w-2 h-2 bg-white/70 rounded-full"></div>
                    </motion.div>
                    
                    <motion.div 
                      className="absolute top-16 right-16 w-14 h-10 bg-gradient-to-br from-sky-200 to-blue-300 rounded shadow-lg"
                      style={{
                        border: '2px solid #2c3e50',
                        boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.3), 0 4px 8px rgba(0,0,0,0.4)'
                      }}
                      animate={{
                        scale: [1, 1.02, 1],
                        rotateY: [0, -1, 0],
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 0.5,
                      }}
                    >
                      <div className="absolute inset-0 border-2 border-gray-600 rounded"></div>
                      <div className="absolute top-1 left-1 w-2 h-2 bg-white/70 rounded-full"></div>
                    </motion.div>
                    
                    {/* Steel Door */}
                    <motion.div 
                      className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-10 h-18 bg-gradient-to-b from-gray-700 to-gray-900 rounded-t shadow-xl"
                      style={{
                        border: '2px solid #1a252f',
                        boxShadow: '0 8px 16px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.1)'
                      }}
                      animate={{
                        y: [0, -1, 0],
                        rotateY: [0, 1, 0],
                      }}
                      transition={{
                        duration: 7,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    >
                      {/* Steel Handle */}
                      <div className="absolute top-1/2 right-1 w-1 h-1 bg-gray-300 rounded-full"></div>
                    </motion.div>
                  </div>
                </div>

                {/* Floating Steel Particles */}
                <motion.div
                  animate={{
                    y: [0, -25, 0],
                    rotate: [0, 360, 0],
                    scale: [1, 1.3, 1],
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute top-4 left-4 w-3 h-3 bg-gradient-to-br from-gray-400 to-gray-600 rounded-full shadow-lg"
                  style={{
                    boxShadow: '0 4px 8px rgba(0,0,0,0.4), 0 0 20px rgba(52, 73, 94, 0.6)'
                  }}
                />
                
                <motion.div
                  animate={{
                    y: [0, -30, 0],
                    rotate: [0, -360, 0],
                    scale: [1, 1.4, 1],
                  }}
                  transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1,
                  }}
                  className="absolute top-8 right-4 w-2 h-2 bg-gradient-to-br from-gray-500 to-gray-700 rounded-full shadow-lg"
                  style={{
                    boxShadow: '0 4px 8px rgba(0,0,0,0.4), 0 0 15px rgba(44, 62, 80, 0.5)'
                  }}
                />
                
                <motion.div
                  animate={{
                    y: [0, -20, 0],
                    rotate: [0, 180, 0],
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.5,
                  }}
                  className="absolute bottom-8 left-8 w-2 h-2 bg-gradient-to-br from-gray-600 to-gray-800 rounded-full shadow-lg"
                  style={{
                    boxShadow: '0 4px 8px rgba(0,0,0,0.4), 0 0 10px rgba(26, 37, 47, 0.4)'
                  }}
                />

                {/* Steel Shimmer Effect */}
                <motion.div
                  className="absolute inset-0 pointer-events-none"
                  animate={{
                    opacity: [0, 0.4, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-gradient-to-br from-transparent via-gray-300/30 to-transparent rounded-full blur-xl"></div>
                  <div className="absolute bottom-1/4 right-1/4 w-24 h-24 bg-gradient-to-br from-transparent via-gray-400/20 to-transparent rounded-full blur-xl"></div>
                </motion.div>
              </motion.div>
            </div>

            {/* Steel-themed Decorative Elements */}
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-gradient-to-br from-gray-500/20 to-gray-700/20 rounded-full blur-xl"></div>
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-gradient-to-br from-gray-600/20 to-gray-800/20 rounded-full blur-xl"></div>
            
            {/* Steel Accent Lights */}
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute top-8 left-8 w-2 h-2 bg-gray-400 rounded-full shadow-lg"
              style={{
                boxShadow: '0 0 20px rgba(52, 73, 94, 0.8)'
              }}
            />
            <motion.div
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.3, 0.8, 0.3],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1,
              }}
              className="absolute bottom-12 right-12 w-1 h-1 bg-gray-500 rounded-full"
              style={{
                boxShadow: '0 0 15px rgba(44, 62, 80, 0.6)'
              }}
            />
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
