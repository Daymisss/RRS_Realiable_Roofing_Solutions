'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { 
  ChevronLeft, 
  ChevronRight, 
  X, 
  ZoomIn,
  Calendar,
  MapPin,
  Wrench
} from 'lucide-react'

const ProjectGallery = () => {
  const [selectedProject, setSelectedProject] = useState<number | null>(null)
  const [currentSlide, setCurrentSlide] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const projects = [
    {
      id: 1,
      title: 'Modern Auckland Residential Roof',
      location: 'Auckland, New Zealand',
      date: '2024',
      type: 'Complete Roof Replacement',
      description: 'Full roof replacement using premium Colorsteel materials with enhanced insulation and modern gutters designed for Auckland weather.',
      images: [
        'https://images.unsplash.com/photo-1581578731548-c6a0c3f2fcc0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1600607687644-c7171b42498b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
      ],
      features: ['Colorsteel roofing', 'Enhanced insulation', 'Stormwater management', 'NZ Building Code compliant'],
      beforeAfter: {
        before: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        after: 'https://images.unsplash.com/photo-1581578731548-c6a0c3f2fcc0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
      }
    },
    {
      id: 2,
      title: 'Auckland Commercial Warehouse',
      location: 'Auckland, New Zealand',
      date: '2024',
      type: 'Commercial Installation',
      description: 'Large-scale commercial roofing project with industrial-grade materials and specialized installation techniques for Auckland industrial zone.',
      images: [
        'https://images.unsplash.com/photo-1600607687644-c7171b42498b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1581578731548-c6a0c3f2fcc0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
      ],
      features: ['Industrial materials', 'Weather sealing', 'Drainage system', '15-year warranty'],
      beforeAfter: {
        before: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        after: 'https://images.unsplash.com/photo-1600607687644-c7171b42498b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
      }
    },
    {
      id: 3,
      title: 'Auckland Storm Damage Repair',
      location: 'Auckland, New Zealand',
      date: '2024',
      type: 'Emergency Repair',
      description: 'Rapid response to Auckland storm damage with complete roof restoration and weatherproofing improvements.',
      images: [
        'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1581578731548-c6a0c3f2fcc0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1600607687644-c7171b42498b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
      ],
      features: ['24/7 emergency service', 'Storm damage assessment', 'Quick repairs', 'Insurance assistance'],
      beforeAfter: {
        before: 'https://images.unsplash.com/photo-1600607687644-c7171b42498b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        after: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
      }
    },
    {
      id: 4,
      title: 'Heritage Auckland Building',
      location: 'Auckland, New Zealand',
      date: '2024',
      type: 'Heritage Restoration',
      description: 'Careful restoration of heritage Auckland building roof while maintaining architectural integrity and heritage value.',
      images: [
        'https://images.unsplash.com/photo-1581578731548-c6a0c3f2fcc0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1600607687644-c7171b42498b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
      ],
      features: ['Heritage materials', 'Historical accuracy', 'Expert craftsmanship', 'Heritage compliance'],
      beforeAfter: {
        before: 'https://images.unsplash.com/photo-1600607687644-c7171b42498b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        after: 'https://images.unsplash.com/photo-1581578731548-c6a0c3f2fcc0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
      }
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

  const nextSlide = () => {
    if (selectedProject !== null) {
      const project = projects[selectedProject]
      setCurrentSlide((prev) => (prev + 1) % project.images.length)
    }
  }

  const prevSlide = () => {
    if (selectedProject !== null) {
      const project = projects[selectedProject]
      setCurrentSlide((prev) => (prev - 1 + project.images.length) % project.images.length)
    }
  }

  return (
    <section id="gallery" className="section-padding bg-gray-50">
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
            Our <span className="text-gradient">Project Gallery</span>
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Explore our portfolio of completed projects showcasing quality craftsmanship, 
            attention to detail, and customer satisfaction.
          </motion.p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer"
              onClick={() => {
                setSelectedProject(index)
                setCurrentSlide(0)
              }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.images[0]}
                  alt={project.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <ZoomIn className="w-8 h-8 text-white" />
                </div>
                <div className="absolute top-4 right-4 bg-accent-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  {project.type}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {project.title}
                </h3>
                <div className="flex items-center text-gray-600 mb-3">
                  <MapPin className="w-4 h-4 mr-2" />
                  <span className="text-sm">{project.location}</span>
                  <Calendar className="w-4 h-4 ml-4 mr-2" />
                  <span className="text-sm">{project.date}</span>
                </div>
                <p className="text-gray-600 text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.features.slice(0, 2).map((feature, featureIndex) => (
                    <span
                      key={featureIndex}
                      className="bg-primary-100 text-primary-700 px-2 py-1 rounded text-xs"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Modal */}
        <AnimatePresence>
          {selectedProject !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-hidden"
                onClick={(e) => e.stopPropagation()}
              >
                {selectedProject !== null && (
                  <>
                    <div className="relative">
                      <img
                        src={projects[selectedProject].images[currentSlide]}
                        alt={projects[selectedProject].title}
                        className="w-full h-96 object-cover"
                      />
                      <button
                        onClick={() => setSelectedProject(null)}
                        className="absolute top-4 right-4 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
                      >
                        <X className="w-6 h-6" />
                      </button>
                      <button
                        onClick={prevSlide}
                        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
                      >
                        <ChevronLeft className="w-6 h-6" />
                      </button>
                      <button
                        onClick={nextSlide}
                        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
                      >
                        <ChevronRight className="w-6 h-6" />
                      </button>
                      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                        {projects[selectedProject].images.map((_, index) => (
                          <button
                            key={index}
                            onClick={() => setCurrentSlide(index)}
                            className={`w-3 h-3 rounded-full ${
                              index === currentSlide ? 'bg-white' : 'bg-white/50'
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">
                        {projects[selectedProject].title}
                      </h3>
                      <div className="flex items-center text-gray-600 mb-4">
                        <MapPin className="w-5 h-5 mr-2" />
                        <span>{projects[selectedProject].location}</span>
                        <Calendar className="w-5 h-5 ml-6 mr-2" />
                        <span>{projects[selectedProject].date}</span>
                        <Wrench className="w-5 h-5 ml-6 mr-2" />
                        <span>{projects[selectedProject].type}</span>
                      </div>
                      <p className="text-gray-700 mb-6">
                        {projects[selectedProject].description}
                      </p>
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-3">Project Features</h4>
                          <ul className="space-y-2">
                            {projects[selectedProject].features.map((feature, index) => (
                              <li key={index} className="flex items-center text-gray-600">
                                <div className="w-2 h-2 bg-primary-500 rounded-full mr-3"></div>
                                {feature}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-3">Before & After</h4>
                          <div className="grid grid-cols-2 gap-4">
                            <div>
                              <img
                                src={projects[selectedProject].beforeAfter.before}
                                alt="Before"
                                className="w-full h-24 object-cover rounded"
                              />
                              <p className="text-sm text-gray-600 mt-1">Before</p>
                            </div>
                            <div>
                              <img
                                src={projects[selectedProject].beforeAfter.after}
                                alt="After"
                                className="w-full h-24 object-cover rounded"
                              />
                              <p className="text-sm text-gray-600 mt-1">After</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                )}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}

export default ProjectGallery
