import { useState, useEffect, useCallback, useRef } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { scrollToElement } from '../../../utils/scroll'
import './Navbar.scss'

const navItems = [
  { id: 'inicio', title: 'HOME' },
  { id: 'nosotros', title: 'SOBRE NOSOTROS' },
  { id: 'productos', title: 'NUESTROS PRODUCTOS', titleLines: ['NUESTROS', 'PRODUCTOS'] },
  { id: 'como-comprar', title: 'COMPRA' },
  { id: 'contacto', title: 'CONTACTO' }
]

export default function Navbar() {
  const [isSticky, setIsSticky] = useState(false)
  const [activeId, setActiveId] = useState('inicio')
  const [isOpen, setIsOpen] = useState(false)
  const collapseRef = useRef<HTMLDivElement>(null)
  const location = useLocation()
  const navigate = useNavigate()

  const isHome = location.pathname === '/'

  useEffect(() => {
    setIsOpen(false)
    if (!isHome) {
      setIsSticky(true)
      return
    }

    const THRESHOLD = 120

    // Fallback scroll listener
    const onScroll = () => setIsSticky(window.scrollY > THRESHOLD)
    setIsSticky(window.scrollY > THRESHOLD)
    window.addEventListener('scroll', onScroll, { passive: true })

    // IntersectionObserver como respaldo para IAB donde scrollY puede ser 0
    let sentinel: HTMLElement | null = null
    let observer: IntersectionObserver | null = null
    if (typeof IntersectionObserver !== 'undefined') {
      sentinel = document.createElement('div')
      sentinel.style.cssText = 'position:absolute;top:' + THRESHOLD + 'px;height:1px;width:1px;pointer-events:none;'
      document.body.appendChild(sentinel)
      observer = new IntersectionObserver(([entry]) => {
        setIsSticky(!entry.isIntersecting)
      })
      observer.observe(sentinel)
    }

    return () => {
      window.removeEventListener('scroll', onScroll)
      observer?.disconnect()
      sentinel?.remove()
    }
  }, [location, isHome])

  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 1200) setIsOpen(false) }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  const scrollToSection = useCallback((id: string) => {
    const el = document.getElementById(id)
    if (el) scrollToElement(el)
    setActiveId(id)
    setIsOpen(false)
  }, [])

  const onLogoClick = (e: React.MouseEvent) => {
    e.preventDefault()
    if (isHome) {
      scrollToSection('inicio')
    } else {
      navigate('/#inicio')
    }
  }

  const onNavClick = (e: React.MouseEvent, id: string) => {
    e.preventDefault()
    if (isHome) {
      scrollToSection(id)
    } else {
      navigate(`/#${id}`)
    }
  }

  return (
    <nav className={`navbar navbar-expand-xl navbar-light bg-light${isSticky ? ' is-sticky' : ''}`}>
      <div className="container top-header">
        <a className="navbar-brand top-header__brand" href="#inicio" onClick={onLogoClick}>
          <img
            src="/assets/img/logo_stratpharma.png"
            alt="Stratpharma"
            className="top-header__logo-img"
            width={480}
            height={84}
            fetchPriority="high"
            decoding="async"
          />
        </a>

        <button
          className="navbar-toggler"
          type="button"
          aria-controls="navbarSupportedContent"
          aria-expanded={isOpen}
          aria-label="Toggle navigation"
          onClick={() => setIsOpen(v => !v)}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className={`collapse navbar-collapse${isOpen ? ' show' : ''}`}
          id="navbarSupportedContent"
          ref={collapseRef}
        >
          <ul className="navbar-nav top-header__nav">
            {navItems.map(item => (
              <li key={item.id} className="nav-item">
                <a
                  href={`#${item.id}`}
                  className={`nav-link top-header__link${item.titleLines ? ' top-header__link--multi-line' : ''}${activeId === item.id ? ' top-header__link--active' : ''}`}
                  onClick={e => onNavClick(e, item.id)}
                >
                  {item.titleLines
                    ? item.titleLines.map((line, i) => (
                        <span key={i} className="top-header__link-line">{line}</span>
                      ))
                    : item.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  )
}
