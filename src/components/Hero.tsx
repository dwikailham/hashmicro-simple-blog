import React from 'react'
import SocialIcons from './SocialIcons'
import { motion } from 'framer-motion'

interface HeroProps {
  backgroundImage: string
}

const Hero: React.FC<HeroProps> = ({ backgroundImage }) => {
  return (
    <div 
      className="hero" 
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="hero-overlay">
        <header className="hero-header">
          <motion.div 
            className="logo-container"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="logo-img">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 100 100" 
                width="60" 
                height="60"
                fill="currentColor"
              >
                <path d="M50 10 L80 30 L80 70 L50 90 L20 70 L20 30 Z" opacity="0.1" />
                <path d="M50 20 L70 35 L70 65 L50 80 L30 65 L30 35 Z" stroke="white" fill="none" strokeWidth="2" />
                <text x="50" y="55" fontSize="20" textAnchor="middle" fill="white" fontWeight="bold">#</text>
              </svg>
            </div>
            <div className="logo-text">
              <h1>HASHMICRO</h1>
              <span>THINK FORWARD</span>
            </div>
            <SocialIcons />
          </motion.div>
        </header>

        <motion.div 
          className="editable-container"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <div className="glass-box editable-content" contentEditable="true" suppressContentEditableWarning={true}>
            <div className="category">... Recipe ...</div>
            <h2 className="title">AUTUMN CHESTNUT RICE</h2>
            <div className="date">August 7, 2015</div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Hero
