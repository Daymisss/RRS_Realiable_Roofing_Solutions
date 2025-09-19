'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Menu, X, Phone, Mail } from 'lucide-react'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ]

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
    >
      <motion.div
        className={`backdrop-blur-md px-6 py-4 transition-all duration-300 ${
          isScrolled 
            ? 'bg-black/80 shadow-2xl' 
            : 'bg-black/60 shadow-xl'
        }`}
      >
        <div className="flex items-center justify-between max-w-6xl mx-auto">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-3"
          >
            {/* Roof Icon */}
            <div className="flex items-center justify-center">
              <svg 
                width="24" 
                height="24" 
                viewBox="0 0 24 24" 
                fill="none" 
                className="teal-primary"
              >
                <path 
                  d="M12 2L2 8L12 14L22 8L12 2Z" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                />
                <path 
                  d="M2 8L12 14L22 8" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            
            {/* RRS Text */}
            <div className="flex items-center space-x-2">
              <h1 className="text-2xl font-bold text-white">RRS</h1>
              <div className="h-6 w-px bg-white/30"></div>
            </div>
            
            {/* Company Name */}
            <div>
              <h2 className="text-lg font-semibold text-white">Reliable Roofing</h2>
              <p className="text-sm text-white/80">Solutions</p>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <motion.a
                key={item.name}
                href={item.href}
                whileHover={{ scale: 1.05 }}
                className="text-white hover:text-teal-400 font-medium transition-colors duration-200"
              >
                {item.name}
              </motion.a>
            ))}
          </nav>

          {/* Contact Info & CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            <div className="flex items-center space-x-2 text-sm text-white/80">
              <Phone className="w-4 h-4" />
              <span>+64 9 123 4567</span>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-black font-semibold px-6 py-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
            >
              Free Quote
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-white/10 transition-colors"
          >
            {isMenuOpen ? <X className="w-6 h-6 text-white" /> : <Menu className="w-6 h-6 text-white" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <motion.div
          initial={false}
          animate={{ height: isMenuOpen ? 'auto' : 0 }}
          transition={{ duration: 0.3 }}
          className="lg:hidden overflow-hidden"
        >
          <div className="py-4 space-y-4 border-t border-white/20">
            {/* Mobile Logo */}
            <div className="flex items-center space-x-3 pb-4 border-b border-white/20">
              <div className="flex items-center justify-center">
                <svg 
                  width="20" 
                  height="20" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  className="teal-primary"
                >
                  <path 
                    d="M12 2L2 8L12 14L22 8L12 2Z" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                  />
                  <path 
                    d="M2 8L12 14L22 8" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">RRS</h3>
                <p className="text-xs text-white/80">Reliable Roofing Solutions</p>
              </div>
            </div>
            
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className="block text-white hover:text-teal-400 font-medium transition-colors duration-200"
              >
                {item.name}
              </a>
            ))}
            <div className="pt-4 space-y-2">
              <div className="flex items-center space-x-2 text-sm text-white/80">
                <Phone className="w-4 h-4" />
                <span>+64 9 123 4567</span>
              </div>
              <button className="bg-white text-black font-semibold px-6 py-2 rounded-lg hover:bg-gray-100 transition-colors duration-200 w-full">
                Free Quote
              </button>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </motion.header>
  )
}

export default Header
