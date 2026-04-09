import React from 'react'
import { motion } from 'framer-motion'

interface PostProps {
  id: number
  title: string
  category: string
  date: string
  imageUrl: string
}

const posts: PostProps[] = [
  {
    id: 1,
    title: 'AUTUMN CHESTNUT RICE',
    category: 'Recipe',
    date: 'August 7, 2015',
    imageUrl: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800&q=80',
  },
  {
    id: 2,
    title: 'TRAVEL THE WORD',
    category: 'Recipe / Stories',
    date: 'August 20, 2015',
    imageUrl: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=800&q=80',
  },
  {
    id: 3,
    title: 'DIARY OF MINE',
    category: 'Stories',
    date: 'August 18, 2015',
    imageUrl: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800&q=80',
  },
  {
    id: 4,
    title: 'AUTUMN CHESTNUT RICE',
    category: 'Recipe',
    date: 'August 7, 2015',
    imageUrl: 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=800&q=80',
  },
  {
    id: 5,
    title: 'TRAVEL THE WORD',
    category: 'Recipe / Stories',
    date: 'August 20, 2015',
    imageUrl: 'https://images.unsplash.com/photo-1488085061387-422e29b40080?w=800&q=80',
  },
  {
    id: 6,
    title: 'DIARY OF MINE',
    category: 'Stories',
    date: 'August 18, 2015',
    imageUrl: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800&q=80',
  },
]

const BlogPost: React.FC<PostProps> = ({ title, category, date, imageUrl }) => (
  <motion.div
    className="blog-post"
    whileHover={{ y: -10 }}
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
  >
    <div className="post-image" style={{ backgroundImage: `url(${imageUrl})` }}>
      <div className="glass-box post-overlay">
        <div className="post-category">... {category} ...</div>
        <h3 className="post-title">{title}</h3>
        <div className="post-date">{date}</div>
      </div>
    </div>
  </motion.div>
)

const BlogGrid: React.FC = () => {
  return (
    <section className="blog-grid">
      {posts.map((post) => (
        <BlogPost key={post.id} {...post} />
      ))}
    </section>
  )
}

export default BlogGrid
