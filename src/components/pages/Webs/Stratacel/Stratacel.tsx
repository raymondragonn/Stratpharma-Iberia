import { useState, useEffect } from 'react'
import './Stratacel.scss'
import Navbar from '../../../common/Navbar/Navbar'
import Footer from '../../../common/Footer/Footer'

const P = '/assets/img/products/stratacel'

const slides = [
  {
    bg: `${P}/33.jpg`,
    title: 'Apósito avanzado para post-procedimiento\ncon láser fraccionados y/o CO2',
    sub: '',
    pos: 'tl' as const
  },
  {
    bg: `${P}/34.jpg`,
    title: 'Stratacel: para indicaciones\ncosméticas o médicas',
    sub: '',
    pos: 'tl' as const
  },
  {
    bg: `${P}/35.jpg`,
    // title: 'Un avance revolucionario\nen el cuidado posterior\na procedimientos',
    // sub: '',
    // pos: 'tr' as const,
    title: '',
    sub: '',
    pos: null
  },
  {
    bg: `${P}/36.jpg`,
    // title: 'Stratacel es un complemento práctico\npara los protocolos actuales\nde cuidado de heridas',
    // sub: '',
    // pos: 'bl' as const,
    title: '',
    sub: '',
    pos: null
  }
]

const features = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="9" y="2" width="6" height="5" rx="1"/>
        <path d="M9 7H7a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2"/>
        <path d="M9 14c.5 1.5 1.5 2.5 3 2.5s2.5-1 3-2.5"/>
      </svg>
    ),
    label: 'Apósito para heridas en formato gel'
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
    label: 'Apósito de contacto total y flexible'
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
      </svg>
    ),
    label: 'Alivio de síntomas agudos'
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
        <polyline points="9 12 11 14 15 10"/>
      </svg>
    ),
    label: 'Bacteriostático, no reactivo y estéril'
  }
]

const experts = [
  {
    quote: 'Imagina que vas a reformar tu casa. El suelo necesita nuevas baldosas, pero antes hay que nivelarlo. Los constructores prometen una solución mágica: cemento autonivelante que hace que cada paso posterior sea algo sencillo. Stratacel actúa de la misma manera.',
    author: 'Dr. Leonardo Marini, Trieste, Italia',
    media: { type: 'image' as const, src: `${P}/dr1.png`, alt: 'Dr. Leonardo Marini' }
  },
  {
    quote: 'Stratamed y Stratacel son los primeros agentes oclusivos en película que realmente podemos aplicar sobre las heridas de inmediato, y nunca habíamos tenido eso. Así que incluso si alguien tiene una herida abierta o cerrada con suturas, no tenemos que esperar a que se retiren las suturas.',
    author: 'Dr. Michael Gold, Nashville, TN, EE. UU.',
    media: { type: 'video' as const, src: 'https://www.youtube.com/embed/YVAQSqf33oM', alt: 'Dr. Gold habla de los apósitos en formato gel' }
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
            {slide.pos && slide.title && (
              <div className={`sc-hero__content sc-hero__content--${slide.pos}`}>
                <h1 className="sc-hero__title">
                  {slide.title.split('\n').map((l, j) => <span key={j}>{l}<br /></span>)}
                </h1>
                {slide.sub && <p className="sc-hero__sub">{slide.sub}</p>}
              </div>
            )}
          </div>
        ))}
        <button
          className="sc-hero__arrow sc-hero__arrow--prev"
          onClick={() => setActiveSlide(p => (p - 1 + slides.length) % slides.length)}
          aria-label="Slide anterior"
        >
          <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </button>
        <button
          className="sc-hero__arrow sc-hero__arrow--next"
          onClick={() => setActiveSlide(p => (p + 1) % slides.length)}
          aria-label="Siguiente slide"
        >
          <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </button>

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
              Apósito altamente tecnológico y exclusivo en formato gel para los distintos
              tratamientos estéticos en la clínica de dermatología/estética de tu confianza
            </h2>
            <ul className="sc-product__list">
              <li>
                Para los médicos, dermatólogos y/o estéticos y para las clínicas de dermatología
                estéticas que usen láser fraccionados o CO2 en sus tratamientos y que desean
                el mejor resultado para sus pacientes.
              </li>
            </ul>
          </div>
          <div className="sc-product__imgs">
            <img src={`${P}/stratpharma-14-rotated.png`} alt="Stratacel" className="sc-product__img sc-product__img--rotated" />
          </div>
        </div>
      </section>

      {/* ── FEATURES ── */}
      <section className="sc-features">
        <div className="sc-features__inner">
          <h2 className="sc-section-title">Reduce el tiempo de curación a menos de la mitad.</h2>
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
          <div className="sc-ba__cols">
            <div className="sc-ba__text">
              <h2 className="sc-ba__title">
                <span className="sc-ba__title-line">Ver para</span>
                <span className="sc-ba__title-line sc-ba__title-line--accent">Tú mismo</span>
              </h2>
              <p className="sc-ba__caption">
                Proceso de curación de heridas después de un rejuvenecimiento con láser fraccional para eliminar las cicatrices del acné (7 días).
              </p>
            </div>
            <div className="sc-ba__imgs">
              <img src={`${P}/40.png`} alt="Antes y después del tratamiento con Stratacel" />
            </div>
          </div>
        </div>
      </section>

      {/* ── EXPERTS ── */}
      <section className="sc-experts">
        <div className="sc-experts__inner">
          <h2 className="sc-experts__title">Opinión de expertos</h2>
          <div className="sc-experts__grid">
            {experts.map((e, i) => {
              const text = (
                <div className="sc-expert__text">
                  <blockquote className="sc-expert__quote">{e.quote}</blockquote>
                  <p className="sc-expert__author">{e.author}</p>
                </div>
              )
              const media = e.media.type === 'image' ? (
                <img className="sc-expert__photo" src={e.media.src} alt={e.media.alt} />
              ) : (
                <div className="sc-expert__video">
                  <iframe
                    src={e.media.src}
                    title={e.media.alt}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  />
                </div>
              )
              return (
                <div key={i} className="sc-expert">
                  {i % 2 === 0 ? <>{text}{media}</> : <>{media}{text}</>}
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── BUY ── */}
      <section className="sc-buy">
        <div className="sc-buy__inner">
          <div className="sc-buy__cols">
            <div className="sc-buy__text">
              <h2 className="sc-buy__title">
                <span className="sc-buy__title-line">Dónde</span>
                <span className="sc-buy__title-line sc-buy__title-line--accent">comprar</span>
              </h2>
              <p className="sc-buy__lead">Disponible en todas las farmacias de España y Portugal y online</p>
              <a href="https://www.farmavazquez.com/stratacel-10-g-601092.html" className="sc-btn sc-btn--lg" target="_blank" rel="noopener noreferrer">
                Comprar Online
              </a>
            </div>
            <div className="sc-buy__imgs">
              <img src="/assets/img/products/stratacel/imagenes stratpharma_Mesa de trabajo 1 copia 11.png" alt="Stratacel gel apósito" />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
