import React, { useState, useEffect } from 'react'
import { Search, Menu, X } from 'lucide-react'

const Header: React.FC = () => {
  const [isSticky, setIsSticky] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight) {
        setIsSticky(true)
      } else {
        setIsSticky(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`main-nav ${isSticky ? 'sticky' : ''}`}>
      <div className="container nav-container">
        <div 
          className="mobile-menu-toggle" 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} color="#666" /> : <Menu size={24} color="#666" />}
        </div>
        <ul className={`nav-links ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
          <li><a href="#home">HOME</a></li>
          <li><a href="#features">FEATURES</a></li>
          <li><a href="#layouts">LAYOUTS</a></li>
          <li><a href="#pages">PAGES</a></li>
          <li><a href="#light">LIGHT VERSION</a></li>
        </ul>
        <div className="nav-search">
          <input type="text" placeholder="Search and hit enter..." />
          <Search size={16} />
        </div>
      </div>
    </nav>
  )
}

export default Header
