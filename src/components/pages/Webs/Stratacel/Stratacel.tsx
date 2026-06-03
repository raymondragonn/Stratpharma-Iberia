import { useState, useEffect } from 'react'
import './Stratacel.scss'
import Navbar from '../../../common/Navbar/Navbar'
import Footer from '../../../common/Footer/Footer'

const A = '/assets/img/webs/stratacel'

const slides = [
  {
    bg: `${A}/^F8C5BF8432A976640B0C91A3D15E2AB9CDEF4F637E465AD5C1^pimgpsh_fullsize_distr.jpg`,
    title: 'Stratacel\nApósito avanzado para procedimientos fraccionados',
    sub: 'Para indicaciones cosméticas o médicas'
  },
  {
    bg: `${A}/before7.jpg`,
    title: 'Avance en los cuidados\npost-procedimiento',
    sub: 'Un complemento conveniente a los protocolos existentes de cuidado de heridas'
  },
  {
    bg: `${A}/after7.jpg`,
    title: 'Tiempo de recuperación\nreducido',
    sub: 'Para médicos que desean el mejor resultado para sus pacientes'
  }
]

const features = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="9"/>
        <polyline points="12 7 12 12 15 15"/>
        <polyline points="16 5 21 5 21 10"/>
      </svg>
    ),
    label: 'Tiempo de recuperación reducido'
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="9" y="2" width="6" height="5" rx="1"/>
        <path d="M9 7H7a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2"/>
        <path d="M9 14c.5 1.5 1.5 2.5 3 2.5s2.5-1 3-2.5"/>
      </svg>
    ),
    label: 'Apósito tradicional en formato gel'
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2"/>
        <line x1="12" y1="8" x2="12" y2="16"/>
        <line x1="8" y1="12" x2="16" y2="12"/>
      </svg>
    ),
    label: 'Apósito avanzado para procedimientos fraccionados'
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
      </svg>
    ),
    label: 'Para médicos que quieren el mejor resultado'
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
        <polyline points="9 12 11 14 15 10"/>
      </svg>
    ),
    label: 'Adición segura y sencilla al protocolo'
  }
]

const experts = [
  {
    quote: '"Imagina que vas a reformar tu casa. El suelo necesita nuevas baldosas, pero antes hay que nivelarlo. Los constructores prometen una solución mágica: cemento autonivelante que hace que cada paso posterior sea algo sencillo. Stratacel actúa de la misma manera."',
    author: 'Leonardo Marini, Trieste, Italia'
  },
  {
    quote: '"Stratamed y Stratacel son los primeros agentes oclusivos en película que realmente podemos aplicar sobre las heridas de inmediato, y nunca habíamos tenido eso. Así que incluso si alguien tiene una herida abierta o cerrada con suturas, no tenemos que esperar a que se retiren las suturas."',
    author: 'Michael Gold, Nashville, TN, USA'
  }
]

export default function Stratacel() {
  const [activeSlide, setActiveSlide] = useState(0)

  useEffect(() => {
    const t = setInterval(() => setActiveSlide(p => (p + 1) % slides.length), 5000)
    return () => clearInterval(t)
  }, [])

  return (
    <div className="sc-page">
      <Navbar />

      {/* ── HERO ── */}
      <section className="sc-hero">
        {slides.map((slide, i) => (
          <div key={i} className={`sc-hero__slide${i === activeSlide ? ' active' : ''}`}
            style={{ backgroundImage: `url(${slide.bg})` }}>
            <div className="sc-hero__overlay" />
            <div className="sc-hero__content">
              <h1 className="sc-hero__title">
                {slide.title.split('\n').map((l, j) => <span key={j}>{l}<br /></span>)}
              </h1>
              <p className="sc-hero__sub">{slide.sub}</p>
            </div>
          </div>
        ))}
        <div className="sc-hero__dots">
          {slides.map((_, i) => (
            <button key={i} className={`sc-hero__dot${i === activeSlide ? ' active' : ''}`}
              onClick={() => setActiveSlide(i)} aria-label={`Slide ${i + 1}`} />
          ))}
        </div>
      </section>

      {/* ── PRODUCT ── */}
      <section className="sc-product">
        <div className="sc-product__inner">
          <div className="sc-product__text">
            <h2 className="sc-product__heading">
              Avance en los cuidados post-procedimiento<br />
              <span>Apósito avanzado para procedimientos fraccionados</span>
            </h2>
            <p>
              Stratacel es un apósito avanzado para heridas diseñado específicamente para procedimientos
              de rejuvenecimiento fraccionado. Es un complemento conveniente a los protocolos existentes de
              cuidado de heridas, tanto para indicaciones cosméticas como médicas.
            </p>
            <ul className="sc-product__list">
              <li>Para médicos que desean el mejor resultado para sus pacientes</li>
              <li>Adición segura y sencilla a los protocolos existentes</li>
              <li>Tiempo de recuperación reducido</li>
              <li>Apósito tradicional en formato gel innovador</li>
            </ul>
            <a href="#" className="sc-btn">Leer Más</a>
          </div>
          <div className="sc-product__imgs">
            <img src={`${A}/SD-20small-2.png`} alt="Stratacel 20g" className="sc-product__img" />
            <img src={`${A}/SD-50-EX00-Tube-HighRes2.png`} alt="Stratacel 50g" className="sc-product__img sc-product__img--lg" />
          </div>
        </div>
      </section>

      {/* ── FEATURES ── */}
      <section className="sc-features">
        <div className="sc-features__inner">
          <div className="sc-features__grid">
            {features.map((f, i) => (
              <div key={i} className="sc-features__item">
                <span className="sc-features__icon">{f.icon}</span>
                <p>{f.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BEFORE / AFTER ── */}
      <section className="sc-ba">
        <div className="sc-ba__inner">
          <h2 className="sc-section-title">Véalo <span>usted mismo</span></h2>
          <p className="sc-ba__caption">
            Proceso de cicatrización de heridas después de un láser fraccionado para eliminar cicatrices de acné (7 días).
          </p>
          <div className="sc-ba__imgs">
            <div className="sc-ba__col">
              <img src={`${A}/before7.jpg`} alt="Antes" />
              <span>Antes</span>
            </div>
            <div className="sc-ba__col">
              <img src={`${A}/after7.jpg`} alt="7 días" />
              <span>7 días</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── EXPERTS ── */}
      <section className="sc-experts">
        <div className="sc-experts__inner">
          <h2 className="sc-section-title">Opinión de <span>los expertos</span></h2>
          <div className="sc-experts__grid">
            {experts.map((e, i) => (
              <div key={i} className="sc-expert">
                <blockquote className="sc-expert__quote">{e.quote}</blockquote>
                <p className="sc-expert__author">{e.author}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BUY ── */}
      <section className="sc-buy">
        <div className="sc-buy__inner">
          <h2 className="sc-buy__title">Dónde comprar</h2>
          <a href="https://es.stratpharma-shop.com/product-category/stratacel/" className="sc-btn sc-btn--lg" target="_blank" rel="noopener noreferrer">
            Comprar Online
          </a>
        </div>
      </section>

      <Footer />
    </div>
  )
}
