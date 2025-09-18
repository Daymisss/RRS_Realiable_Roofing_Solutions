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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg' 
          : 'bg-transparent'
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-3"
          >
            {/* Logo Container with Dark Background */}
            <div className="bg-gray-800 px-4 py-3 rounded-lg shadow-lg">
              {/* Roof Icon */}
              <div className="flex justify-center mb-2">
                <svg 
                  width="32" 
                  height="24" 
                  viewBox="0 0 32 24" 
                  fill="none" 
                  className="text-white"
                >
                  <path 
                    d="M16 2L4 10L16 18L28 10L16 2Z" 
                    stroke="currentColor" 
                    strokeWidth="3" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                    fill="none"
                  />
                  <path 
                    d="M4 10L16 18L28 10" 
                    stroke="currentColor" 
                    strokeWidth="3" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                    fill="none"
                  />
                </svg>
              </div>
              
              {/* RRS Text */}
              <div className="text-center">
                <h1 className="text-2xl font-bold text-white mb-1">RRS</h1>
                <div className="text-xs text-white leading-tight">
                  <div>RELIABLE ROOFING</div>
                  <div>SOLUTIONS</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <motion.a
                key={item.name}
                href={item.href}
                whileHover={{ scale: 1.05 }}
                className="text-gray-700 hover:text-primary-600 font-medium transition-colors duration-200"
              >
                {item.name}
              </motion.a>
            ))}
          </nav>

          {/* Contact Info & CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <Phone className="w-4 h-4" />
              <span>+64 9 123 4567</span>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary"
            >
              Free Quote
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <motion.div
          initial={false}
          animate={{ height: isMenuOpen ? 'auto' : 0 }}
          transition={{ duration: 0.3 }}
          className="lg:hidden overflow-hidden"
        >
          <div className="py-4 space-y-4 border-t border-gray-200">
            {/* Mobile Logo */}
            <div className="flex justify-center pb-4 border-b border-gray-100">
              <div className="bg-gray-800 px-3 py-2 rounded-lg shadow-lg">
                {/* Roof Icon */}
                <div className="flex justify-center mb-1">
                  <svg 
                    width="24" 
                    height="18" 
                    viewBox="0 0 32 24" 
                    fill="none" 
                    className="text-white"
                  >
                    <path 
                      d="M16 2L4 10L16 18L28 10L16 2Z" 
                      stroke="currentColor" 
                      strokeWidth="2.5" 
                      strokeLinecap="round" 
                      strokeLinejoin="round"
                      fill="none"
                    />
                    <path 
                      d="M4 10L16 18L28 10" 
                      stroke="currentColor" 
                      strokeWidth="2.5" 
                      strokeLinecap="round" 
                      strokeLinejoin="round"
                      fill="none"
                    />
                  </svg>
                </div>
                
                {/* RRS Text */}
                <div className="text-center">
                  <h3 className="text-lg font-bold text-white mb-1">RRS</h3>
                  <div className="text-xs text-white leading-tight">
                    <div>RELIABLE ROOFING</div>
                    <div>SOLUTIONS</div>
                  </div>
                </div>
              </div>
            </div>
            
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className="block text-gray-700 hover:text-primary-600 font-medium transition-colors duration-200"
              >
                {item.name}
              </a>
            ))}
            <div className="pt-4 space-y-2">
              <div className="flex items-center space-x-2 text-sm text-gray-600">
                <Phone className="w-4 h-4" />
                <span>+64 9 123 4567</span>
              </div>
              <button className="btn-primary w-full">
                Free Quote
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.header>
  )
}

export default Header
