import React from 'react'
import { FaFacebookF, FaTwitter, FaPinterestP, FaInstagram } from 'react-icons/fa6'
import { FaRegHeart } from 'react-icons/fa'
import { motion } from 'framer-motion'

const SocialIcons: React.FC = () => {
  const icons = [
    { name: 'Facebook', icon: FaFacebookF, href: 'https://www.facebook.com/hashmicro' },
    { name: 'Twitter', icon: FaTwitter, href: 'https://twitter.com/hashmicro' },
    { name: 'Pinterest', icon: FaPinterestP, href: 'https://pinterest.com/hashmicro' },
    { name: 'Instagram', icon: FaInstagram, href: 'https://instagram.com/hashmicro' },
    { name: 'Favorites', icon: FaRegHeart, href: '#' },
  ]

  return (
    <div className="social-icons">
      {icons.map((item) => (
        <motion.a
          key={item.name}
          href={item.href}
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon"
          whileHover={{ scale: 1.2, backgroundColor: 'rgba(255,255,255,0.2)' }}
          whileTap={{ scale: 0.9 }}
        >
          <item.icon size={18} strokeWidth={1.5} />
        </motion.a>
      ))}
    </div>
  )
}

export default SocialIcons
