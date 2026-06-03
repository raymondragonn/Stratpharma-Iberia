import { useEffect } from 'react'
import { BrowserRouter, Routes, Route, useLocation, Link, Navigate } from 'react-router-dom'
import { scrollToElement } from './utils/scroll'
import Navbar from './components/common/Navbar/Navbar'
import Footer from './components/common/Footer/Footer'
import Landing from './components/pages/Landing/Landing'
import ProductDetail from './components/pages/ProductDetail/ProductDetail'
import StrataTriz from './components/pages/Webs/StrataTriz/StrataTriz'
import Stratamark from './components/pages/Webs/Stratamark/Stratamark'
import Stratamed from './components/pages/Webs/Stratamed/Stratamed'
import StrataXRT from './components/pages/Webs/StrataXRT/StrataXRT'
import Stratacel from './components/pages/Webs/Stratacel/Stratacel'
import './App.scss'

function ScrollHandler() {
  const location = useLocation()

  useEffect(() => {
    const hash = location.hash
    if (!hash) {
      window.scrollTo(0, 0)
      return
    }
    const id = hash.replace('#', '')
    let attempts = 0
    let timeoutId: ReturnType<typeof setTimeout>

    const tryScroll = () => {
      const el = document.getElementById(id)
      if (el) {
        scrollToElement(el)
      } else if (attempts < 25) {
        attempts++
        timeoutId = setTimeout(tryScroll, 100)
      }
    }
    requestAnimationFrame(tryScroll)

    return () => clearTimeout(timeoutId)
  }, [location])

  return null
}

function NotFound() {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '70vh',
      textAlign: 'center',
      padding: '4rem 1rem',
      fontFamily: 'Arial, sans-serif'
    }}>
      <img
        src="/assets/img/logo_stratpharma.png"
        alt="Stratpharma"
        style={{ maxWidth: '220px', marginBottom: '2rem', opacity: 0.85 }}
      />
      <h1 style={{ fontSize: '5rem', margin: '0', color: 'rgb(181, 47, 89)', fontWeight: 700 }}>404</h1>
      <h2 style={{ fontSize: '1.4rem', marginBottom: '1rem', color: '#031521' }}>Página no encontrada</h2>
      <p style={{ color: '#6b6b84', marginBottom: '2rem', maxWidth: '380px', lineHeight: 1.7 }}>
        La página que buscas no existe o ha sido movida.
      </p>
      <Link
        to="/"
        style={{
          display: 'inline-block',
          backgroundColor: 'rgb(181, 47, 89)',
          color: '#fff',
          padding: '12px 32px',
          borderRadius: '30px',
          textDecoration: 'none',
          fontWeight: 500,
          fontSize: '15px'
        }}
      >
        Volver al inicio
      </Link>
    </div>
  )
}

function ImageProtection() {
  useEffect(() => {
    const prevent = (e: MouseEvent) => {
      if ((e.target as Element).tagName === 'IMG') e.preventDefault()
    }
    document.addEventListener('contextmenu', prevent)
    return () => document.removeEventListener('contextmenu', prevent)
  }, [])
  return null
}

function AppLayout() {
  return (
    <div className="app-layout">
      <ScrollHandler />
      <ImageProtection />
      <Navbar />
      <main className="app-main">
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/product/:id" element={<Navigate to="/" replace />} />
          <Route path="/:slug" element={<ProductDetail />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/strata-triz/info" element={<StrataTriz />} />
        <Route path="/stratamark/info" element={<Stratamark />} />
        <Route path="/stratamed/info" element={<Stratamed />} />
        <Route path="/strataxrt/info" element={<StrataXRT />} />
        <Route path="/stratacel/info" element={<Stratacel />} />
        <Route path="*" element={<AppLayout />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
