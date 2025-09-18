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

          {/* Right Content - Interactive Metallic 3D Roof */}
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
              {/* 3D Metallic Roof Container */}
              <motion.div
                style={roofRotation}
                className="roof-3d w-full h-full relative"
              >
                {/* Main Metallic Roof Structure */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative w-80 h-80 lg:w-96 lg:h-96">
                    
                    {/* Metallic Roof Panels - Main Structure */}
                    <div className="absolute inset-0 transform rotate-12 scale-110">
                      {/* Primary Roof Panel */}
                      <div className="absolute inset-0 bg-gradient-to-br from-slate-300 via-slate-400 to-slate-600 rounded-lg shadow-2xl"
                           style={{
                             background: 'linear-gradient(135deg, #cbd5e1 0%, #94a3b8 25%, #64748b 50%, #475569 75%, #334155 100%)',
                             boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.3)'
                           }}>
                        
                        {/* Metallic Seams */}
                        <div className="absolute inset-0">
                          {Array.from({ length: 6 }).map((_, i) => (
                            <div
                              key={i}
                              className="absolute w-full h-0.5 bg-gradient-to-r from-transparent via-slate-200 to-transparent opacity-60"
                              style={{
                                top: `${15 + i * 15}%`,
                                transform: `rotate(${i * 2 - 5}deg)`
                              }}
                            />
                          ))}
                        </div>
                        
                        {/* Metallic Rivets */}
                        <div className="absolute inset-0">
                          {Array.from({ length: 20 }).map((_, i) => (
                            <div
                              key={i}
                              className="absolute w-2 h-2 bg-gradient-to-br from-slate-200 to-slate-400 rounded-full shadow-inner"
                              style={{
                                left: `${10 + (i % 4) * 20}%`,
                                top: `${15 + Math.floor(i / 4) * 20}%`,
                                boxShadow: 'inset 0 1px 2px rgba(0,0,0,0.3), 0 1px 0 rgba(255,255,255,0.5)'
                              }}
                            />
                          ))}
                        </div>
                      </div>
                      
                      {/* Secondary Roof Panel */}
                      <div className="absolute inset-0 bg-gradient-to-br from-slate-400 via-slate-500 to-slate-700 rounded-lg transform -rotate-6 scale-95 shadow-xl"
                           style={{
                             background: 'linear-gradient(135deg, #94a3b8 0%, #64748b 25%, #475569 50%, #334155 75%, #1e293b 100%)',
                             boxShadow: '0 20px 40px -12px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.2)'
                           }}>
                        
                        {/* Weathering Effects */}
                        <div className="absolute inset-0 opacity-30">
                          <div className="absolute top-0 left-0 w-full h-1/3 bg-gradient-to-b from-slate-300/40 to-transparent"></div>
                          <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-gradient-to-tl from-slate-600/40 to-transparent"></div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Metallic Roof Tiles with Realistic Overlap */}
                    <div className="absolute inset-0 flex flex-wrap justify-center items-center p-4">
                      {Array.from({ length: 12 }).map((_, i) => (
                        <motion.div
                          key={i}
                          className="w-10 h-6 rounded-sm shadow-lg"
                          style={{
                            background: 'linear-gradient(135deg, #e2e8f0 0%, #cbd5e1 25%, #94a3b8 50%, #64748b 75%, #475569 100%)',
                            transform: `rotate(${i * 3 - 18}deg) translateY(${Math.sin(i * 0.5) * 8}px) translateX(${Math.cos(i * 0.3) * 5}px)`,
                            boxShadow: '0 4px 8px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.4)',
                            border: '1px solid rgba(255,255,255,0.2)'
                          }}
                          animate={{
                            y: [0, -2, 0],
                            rotate: [i * 3 - 18, i * 3 - 16, i * 3 - 18],
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
                    
                    {/* Metallic Chimney with Weathering */}
                    <motion.div 
                      className="absolute top-8 right-8 w-8 h-20 rounded-sm shadow-xl"
                      style={{
                        background: 'linear-gradient(180deg, #e2e8f0 0%, #cbd5e1 25%, #94a3b8 50%, #64748b 75%, #334155 100%)',
                        boxShadow: '0 8px 16px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.3)'
                      }}
                      animate={{
                        y: [0, -1, 0],
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    >
                      {/* Chimney Cap */}
                      <div className="absolute -top-1 left-0 w-full h-2 bg-gradient-to-b from-slate-200 to-slate-400 rounded-t-sm"></div>
                      {/* Weathering on Chimney */}
                      <div className="absolute top-4 left-0 w-full h-8 bg-gradient-to-r from-transparent via-slate-500/30 to-transparent"></div>
                    </motion.div>
                    
                    {/* Metallic Windows with Frames */}
                    <motion.div 
                      className="absolute top-16 left-8 w-14 h-10 bg-gradient-to-br from-sky-200 to-blue-300 rounded shadow-lg"
                      style={{
                        border: '2px solid #475569',
                        boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.2), 0 4px 8px rgba(0,0,0,0.3)'
                      }}
                      animate={{
                        scale: [1, 1.02, 1],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    >
                      {/* Window Frame */}
                      <div className="absolute inset-0 border-2 border-slate-600 rounded"></div>
                      {/* Window Reflection */}
                      <div className="absolute top-1 left-1 w-2 h-2 bg-white/60 rounded-full"></div>
                    </motion.div>
                    
                    <motion.div 
                      className="absolute top-16 right-16 w-14 h-10 bg-gradient-to-br from-sky-200 to-blue-300 rounded shadow-lg"
                      style={{
                        border: '2px solid #475569',
                        boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.2), 0 4px 8px rgba(0,0,0,0.3)'
                      }}
                      animate={{
                        scale: [1, 1.02, 1],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 0.5,
                      }}
                    >
                      <div className="absolute inset-0 border-2 border-slate-600 rounded"></div>
                      <div className="absolute top-1 left-1 w-2 h-2 bg-white/60 rounded-full"></div>
                    </motion.div>
                    
                    {/* Metallic Door */}
                    <motion.div 
                      className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-10 h-18 bg-gradient-to-b from-amber-700 to-amber-900 rounded-t shadow-xl"
                      style={{
                        border: '2px solid #92400e',
                        boxShadow: '0 8px 16px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.2)'
                      }}
                      animate={{
                        y: [0, -1, 0],
                      }}
                      transition={{
                        duration: 5,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    >
                      {/* Door Handle */}
                      <div className="absolute top-1/2 right-1 w-1 h-1 bg-amber-200 rounded-full"></div>
                    </motion.div>
                  </div>
                </div>

                {/* Dynamic Metallic Particles */}
                <motion.div
                  animate={{
                    y: [0, -20, 0],
                    rotate: [0, 360, 0],
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute top-4 left-4 w-3 h-3 bg-gradient-to-br from-slate-300 to-slate-500 rounded-full shadow-lg"
                  style={{
                    boxShadow: '0 4px 8px rgba(0,0,0,0.3), 0 0 20px rgba(148, 163, 184, 0.5)'
                  }}
                />
                
                <motion.div
                  animate={{
                    y: [0, -25, 0],
                    rotate: [0, -360, 0],
                    scale: [1, 1.3, 1],
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1,
                  }}
                  className="absolute top-8 right-4 w-2 h-2 bg-gradient-to-br from-slate-400 to-slate-600 rounded-full shadow-lg"
                  style={{
                    boxShadow: '0 4px 8px rgba(0,0,0,0.3), 0 0 15px rgba(100, 116, 139, 0.4)'
                  }}
                />
                
                <motion.div
                  animate={{
                    y: [0, -15, 0],
                    rotate: [0, 180, 0],
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.5,
                  }}
                  className="absolute bottom-8 left-8 w-2 h-2 bg-gradient-to-br from-slate-500 to-slate-700 rounded-full shadow-lg"
                  style={{
                    boxShadow: '0 4px 8px rgba(0,0,0,0.3), 0 0 10px rgba(71, 85, 105, 0.3)'
                  }}
                />

                {/* Metallic Shimmer Effect */}
                <motion.div
                  className="absolute inset-0 pointer-events-none"
                  animate={{
                    opacity: [0, 0.3, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-gradient-to-br from-transparent via-white/20 to-transparent rounded-full blur-xl"></div>
                  <div className="absolute bottom-1/4 right-1/4 w-24 h-24 bg-gradient-to-br from-transparent via-slate-300/20 to-transparent rounded-full blur-xl"></div>
                </motion.div>
              </motion.div>
            </div>

            {/* Enhanced Decorative Elements */}
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-gradient-to-br from-slate-400/20 to-slate-600/20 rounded-full blur-xl"></div>
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-gradient-to-br from-slate-500/20 to-slate-700/20 rounded-full blur-xl"></div>
            
            {/* Metallic Accent Lights */}
            <motion.div
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.6, 1, 0.6],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute top-8 left-8 w-2 h-2 bg-slate-300 rounded-full shadow-lg"
              style={{
                boxShadow: '0 0 20px rgba(148, 163, 184, 0.8)'
              }}
            />
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.4, 0.8, 0.4],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1,
              }}
              className="absolute bottom-12 right-12 w-1 h-1 bg-slate-400 rounded-full"
              style={{
                boxShadow: '0 0 15px rgba(100, 116, 139, 0.6)'
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
