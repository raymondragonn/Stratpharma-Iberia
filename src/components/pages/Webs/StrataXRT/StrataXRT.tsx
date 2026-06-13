import { useState, useEffect } from 'react'
import './StrataXRT.scss'
import Navbar from '../../../common/Navbar/Navbar'
import Footer from '../../../common/Footer/Footer'

const HERO_BG = '/assets/img/products/strataxrt/38.jpg'
const A = '/assets/img/webs/strataxrt'

const slides = [
  {
    bg: HERO_BG,
    title: 'Para la prevención y tratamiento\nde la dermatitis por radiación.',
    pos: 'tl' as const
  },
  {
    bg: HERO_BG,
    title: 'StrataXRT reduce el dolor, enrojecimiento, calor\ny calma las áreas expuestas de la piel',
    pos: 'tr' as const
  },
  {
    bg: HERO_BG,
    title: 'Tu apoyo a lo largo\nde la radiación de terapia.',
    pos: 'bl' as const
  }
]

const features = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"/>
        <path d="M12 6v6l4 2"/>
        <path d="M8 14s1.5 2 4 2 4-2 4-2"/>
      </svg>
    ),
    label: 'Resistente al agua'
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="7" width="20" height="4" rx="2"/>
        <rect x="4" y="13" width="16" height="4" rx="2"/>
        <line x1="12" y1="3" x2="12" y2="7"/>
        <line x1="12" y1="17" x2="12" y2="21"/>
      </svg>
    ),
    label: 'Apósito flexible'
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
      </svg>
    ),
    label: 'Alivio de síntomas'
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
        <polyline points="9 12 11 14 15 10"/>
      </svg>
    ),
    label: 'Bacteriostático y no reactivo'
  }
]

export default function StrataXRT() {
  const [activeSlide, setActiveSlide] = useState(0)

  useEffect(() => {
    const t = setInterval(() => setActiveSlide(p => (p + 1) % slides.length), 8000)
    return () => clearInterval(t)
  }, [])

  return (
    <div className="sx-page">
      <Navbar />

      {/* ── HERO ── */}
      <section className="sx-hero">
        {slides.map((slide, i) => (
          <div key={i} className={`sx-hero__slide${i === activeSlide ? ' active' : ''}`}
            style={{ backgroundImage: `url(${slide.bg})` }}>
            <div className={`sx-hero__content sx-hero__content--${slide.pos}`}>
              <h1 className="sx-hero__title">
                {slide.title.split('\n').map((l, j) => <span key={j}>{l}<br /></span>)}
              </h1>
            </div>
          </div>
        ))}
        <button
          className="sx-hero__arrow sx-hero__arrow--prev"
          onClick={() => setActiveSlide(p => (p - 1 + slides.length) % slides.length)}
          aria-label="Slide anterior"
        >
          <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </button>
        <button
          className="sx-hero__arrow sx-hero__arrow--next"
          onClick={() => setActiveSlide(p => (p + 1) % slides.length)}
          aria-label="Siguiente slide"
        >
          <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </button>

        <div className="sx-hero__dots">
          {slides.map((_, i) => (
            <button key={i} className={`sx-hero__dot${i === activeSlide ? ' active' : ''}`}
              onClick={() => setActiveSlide(i)} aria-label={`Slide ${i + 1}`} />
          ))}
        </div>
      </section>

      {/* ── PRODUCT ── */}
      <section className="sx-product">
        <div className="sx-product__inner">
          <div className="sx-product__text">
            <h2 className="sx-product__heading">
              El innovador <span>apósito para heridas</span> para la dermatitis por la radiación
            </h2>
            <ul className="sx-product__list">
              <li>Forma una capa protectora que previene y retrasa los primeros síntomas de la dermatitis</li>
              <li>Ayuda a promover un ambiente de recuperación <strong>mucho más rápido después de la terapia, normalmente entre 10-15 días</strong></li>
            </ul>
          </div>
          <div className="sx-product__imgs">
            <img src="/assets/img/products/strataxrt/imagenes stratpharma_Mesa de trabajo 1 copia 9.png" alt="StrataXRT" className="sx-product__img" />
            <img src="/assets/img/products/strataxrt/imagenes stratpharma_Mesa de trabajo 1 copia 8.png" alt="StrataXRT" className="sx-product__img" />
          </div>
        </div>
      </section>

      {/* ── FEATURES ── */}
      <section className="sx-features">
        <div className="sx-features__inner">
          <h2 className="sx-section-title">Tu apoyo a lo largo del viaje de <span>radioterapia</span></h2>
          <div className="sx-features__grid">
            {features.map((f, i) => (
              <div key={i} className="sx-features__item">
                <span className="sx-features__icon">{f.icon}</span>
                <p>{f.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BEFORE / AFTER ── */}
      <section className="sx-ba">
        <div className="sx-ba__inner">
          <div className="sx-ba__cols">
            <div className="sx-ba__text">
              <h2 className="sx-ba__title">
                <span className="sx-ba__title-line">Míralo</span>
                <span className="sx-ba__title-line sx-ba__title-line--accent">Tú mismo</span>
              </h2>
              <p className="sx-ba__caption">
                Mejora visible después de 19 días de uso de StrataXRT durante la radioterapia en curso.
                El paciente fue diagnosticado con un carcinoma epidérmico avanzado de la laringe.
              </p>
            </div>
            <div className="sx-ba__imgs">
              <div className="sx-ba__photo">
                <img src={`${A}/20151001-br2.jpg`} alt="Antes del tratamiento con StrataXRT" />
                <span className="sx-ba__photo-label">Antes</span>
              </div>
              <div className="sx-ba__photo">
                <img src={`${A}/20151019-0021.jpg`} alt="Después del tratamiento con StrataXRT" />
                <span className="sx-ba__photo-label">Después</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── BUY ── */}
      <section className="sx-buy">
        <div className="sx-buy__inner">
          <div className="sx-buy__cols">
            <div className="sx-buy__text">
              <h2 className="sx-buy__title">
                <span className="sx-buy__title-line">Dónde</span>
                <span className="sx-buy__title-line sx-buy__title-line--accent">comprar</span>
              </h2>
              <p className="sx-buy__lead">Disponible en 40 hospitales públicos españoles así como en los hospitales GenesisCare y Grupo Recoletas, en todas las farmacias de España, y muy pronto en Portugal.</p>
              <a href="https://www.farmavazquez.com/buscar?controller=search&orderby=position&orderway=desc&search_query=strataxrt&submitsearch=Search" className="sx-btn sx-btn--lg" target="_blank" rel="noopener noreferrer">
                Comprar Online
              </a>
            </div>
            <div className="sx-buy__imgs">
              <img src="/assets/img/products/strataxrt/imagenes stratpharma_Mesa de trabajo 1 copia 8.png" alt="StrataXRT gel apósito" />
              <img src="/assets/img/products/strataxrt/imagenes stratpharma_Mesa de trabajo 1 copia 9.png" alt="StrataXRT" />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
