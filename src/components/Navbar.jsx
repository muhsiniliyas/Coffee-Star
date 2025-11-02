import { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { ShoppingBag, User, Menu, X } from 'lucide-react'
import { useCart } from '../contexts/CartContext'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { cartCount } = useCart()

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY
      if (offset > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu on escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') setIsOpen(false)
    }
    document.addEventListener('keydown', handleEscape)
    return () => document.removeEventListener('keydown', handleEscape)
  }, [])

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Shop', path: '/shop' },
    { name: 'Blog', path: '/blog' },
  ]

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl shadow-lg' 
          : 'bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-md'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`flex items-center justify-between transition-all duration-300 ${
          scrolled ? 'h-14 sm:h-16' : 'h-16 sm:h-20'
        }`}>
          {/* Logo */}
          <Link 
            to="/" 
            className="flex items-center gap-1.5 sm:gap-2 text-xl sm:text-2xl font-bold group z-50"
            onClick={() => setIsOpen(false)}
          >
            <div className="relative">
              <span className="text-2xl sm:text-3xl group-hover:scale-110 transition-transform inline-block">☕</span>
              <div className="absolute -inset-2 bg-amber-500/20 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            <span className="font-display bg-gradient-to-r from-amber-900 to-amber-700 dark:from-amber-400 dark:to-amber-200 bg-clip-text text-transparent">
              Coffee-Star
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  `relative px-3 lg:px-4 py-2 rounded-lg font-medium transition-all duration-300 text-sm lg:text-base ${
                    isActive
                      ? 'text-amber-900 dark:text-amber-400'
                      : 'text-gray-700 dark:text-gray-300 hover:text-amber-800 dark:hover:text-amber-300 hover:bg-amber-50 dark:hover:bg-gray-800'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {link.name}
                    {isActive && (
                      <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-amber-600 to-amber-400 rounded-full" />
                    )}
                  </>
                )}
              </NavLink>
            ))}
          </div>

          {/* Right Side - Desktop */}
          <div className="hidden md:flex items-center gap-2 lg:gap-3">
            {/* Cart Button */}
            <Link
              to="/cart"
              className="p-2 lg:p-2.5 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-200 hover:scale-105 active:scale-95 relative"
              aria-label="Shopping cart"
            >
              <ShoppingBag className="w-4 h-4 lg:w-5 lg:h-5" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-4 h-4 lg:w-5 lg:h-5 flex items-center justify-center font-semibold shadow-md animate-bounce">
                  {cartCount}
                </span>
              )}
            </Link>

            {/* Enhanced Sign In Button */}
            <Link 
              to="/signin" 
              className="group relative inline-flex items-center gap-2 px-4 lg:px-6 py-2 lg:py-2.5 bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-700 hover:to-amber-600 text-white rounded-full font-medium transition-all duration-300 shadow-md hover:shadow-xl overflow-hidden"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-amber-700 to-amber-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <User className="w-4 h-4 lg:w-5 lg:h-5 relative z-10 group-hover:rotate-12 transition-transform" />
              <span className="relative z-10 text-sm lg:text-base">Sign In</span>
              <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-200 active:scale-95 z-50"
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isOpen}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        {isOpen && (
          <div 
            className="fixed inset-0 bg-black/50 backdrop-blur-sm md:hidden z-40"
            onClick={() => setIsOpen(false)}
            aria-hidden="true"
          />
        )}

        {/* Mobile Menu */}
        <div 
          className={`fixed top-14 sm:top-16 left-0 right-0 md:hidden bg-white dark:bg-gray-900 shadow-2xl transition-all duration-300 ease-in-out overflow-hidden z-40 ${
            isOpen ? 'max-h-[calc(100vh-4rem)] opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="max-h-[calc(100vh-4rem)] overflow-y-auto px-4 py-4 space-y-2">
            {/* Mobile Navigation Links */}
            {navLinks.map((link, index) => (
              <NavLink
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `flex items-center px-4 py-3 rounded-xl font-medium transition-all duration-200 ${
                    isActive
                      ? 'bg-gradient-to-r from-amber-100 to-amber-50 dark:from-amber-900/30 dark:to-amber-800/20 text-amber-900 dark:text-amber-400 shadow-sm'
                      : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 active:scale-98'
                  }`
                }
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <span className="flex-grow">{link.name}</span>
                {({ isActive }) => 
                  isActive && <span className="w-2 h-2 bg-amber-600 rounded-full" />
                }
              </NavLink>
            ))}

            {/* Mobile Action Buttons */}
            <div className="pt-4 pb-2">
              <Link
                to="/cart"
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-center gap-2 px-6 py-3 bg-gray-100 dark:bg-gray-800 rounded-xl font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all active:scale-95 w-full"
              >
                <ShoppingBag className="w-5 h-5" />
                <span className="text-sm">View Cart ({cartCount})</span>
              </Link>
            </div>

            {/* Mobile Sign In Button */}
            <Link 
              to="/signin" 
              onClick={() => setIsOpen(false)} 
              className="flex items-center justify-center gap-2 px-6 py-4 bg-gradient-to-r from-amber-600 to-amber-500 text-white rounded-xl font-medium hover:from-amber-700 hover:to-amber-600 transition-all duration-300 shadow-lg active:scale-95 mt-2"
            >
              <User className="w-5 h-5" />
              <span>Sign In to Your Account</span>
            </Link>

            {/* Mobile Footer Info */}
            <div className="pt-4 pb-2 text-center">
              <p className="text-xs text-gray-500 dark:text-gray-400">
                New to Coffee-Star? <Link to="/signup" className="text-amber-600 dark:text-amber-400 font-medium hover:underline" onClick={() => setIsOpen(false)}>Create Account</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}
