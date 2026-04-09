import { useState, useEffect } from 'react'
import Header from './components/Header.tsx'
import Hero from './components/Hero.tsx'
import BlogGrid from './components/BlogGrid.tsx'
import './App.css'

function App() {
  const [heroImage, setHeroImage] = useState('')

  useEffect(() => {
    // Fetch a random high-quality nature/architecture image
    // Using a timestamp to ensure it's different on each refresh
    const randomId = Math.floor(Math.random() * 1000)
    setHeroImage(`https://picsum.photos/seed/${randomId}/1920/1080`)
  }, [])

  return (
    <div className="app">
      <Hero backgroundImage={heroImage} />
      <Header />
      <main>
        <div className="container">
          <BlogGrid />
        </div>
      </main>
      <footer style={{ padding: '4rem 0', textAlign: 'center', opacity: 0.5 }}>
        &copy; 2026 Hashmicro. All rights reserved.
      </footer>
    </div>
  )
}

export default App
