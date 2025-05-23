import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()

  const links = [
    { path: '/', label: 'Home' },
    { path: '/menu', label: 'Menu' },
    { path: '/about', label: 'About' },
    { path: '/gallery', label: 'Gallery' },
    { path: '/contact', label: 'Contact' },
  ]

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/10 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link 
            to="/" 
            className="font-display text-3xl font-bold text-white hover:text-primary-400 transition-colors"
          >
            Sebastian‘s Gemüse Kebap
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {links.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="relative group py-2"
              >
                <span className={`text-lg font-medium ${
                  location.pathname === link.path 
                    ? 'text-primary-400' 
                    : 'text-white hover:text-primary-400'
                } transition-colors`}>
                  {link.label}
                </span>
                {location.pathname === link.path && (
                  <motion.div
                    layoutId="underline"
                    className="absolute -bottom-1 left-0 w-full h-0.5 bg-primary-400"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                )}
              </Link>
            ))}
            
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-md text-white hover:text-primary-400 hover:bg-white/5 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <div className="w-6 h-6 flex flex-col justify-center space-y-1.5">
              <span className={`block w-6 h-0.5 bg-current transform transition-transform ${
                isOpen ? 'rotate-45 translate-y-2' : ''
              }`} />
              <span className={`block w-6 h-0.5 bg-current transition-opacity ${
                isOpen ? 'opacity-0' : ''
              }`} />
              <span className={`block w-6 h-0.5 bg-current transform transition-transform ${
                isOpen ? '-rotate-45 -translate-y-2' : ''
              }`} />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={false}
        animate={{ 
          height: isOpen ? 'auto' : 0,
          opacity: isOpen ? 1 : 0
        }}
        transition={{ duration: 0.3 }}
        className="md:hidden overflow-hidden bg-secondary-900/95 backdrop-blur-md border-t border-white/10"
      >
        <div className="max-w-7xl mx-auto px-4 py-3 space-y-3">
          {links.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`block px-3 py-2 rounded-lg text-base font-medium ${
                location.pathname === link.path
                  ? 'text-primary-400 bg-white/5'
                  : 'text-white hover:text-primary-400 hover:bg-white/5'
              } transition-colors`}
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <motion.button
            whileTap={{ scale: 0.95 }}
            className="w-full bg-primary-500 hover:bg-primary-600 text-white px-6 py-3 rounded-lg text-base font-medium transition-colors mt-4"
            onClick={() => setIsOpen(false)}
          >
            Reserve Table
          </motion.button>
        </div>
      </motion.div>
    </nav>
  )
}

export default Navbar 