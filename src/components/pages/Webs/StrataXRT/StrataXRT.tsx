import { useState, useEffect } from 'react'
import './StrataXRT.scss'
import Navbar from '../../../common/Navbar/Navbar'
import Footer from '../../../common/Footer/Footer'

const A = '/assets/img/webs/strataxrt'

const slides = [
  {
    bg: `${A}/iStock-498200652.jpg`,
    title: 'Para la prevención y el tratamiento\nde la dermatitis por radiación',
    sub: 'StrataXRT reduce el dolor, el enrojecimiento y el calor, y ayuda a calmar las zonas de piel expuestas'
  },
  {
    bg: `${A}/20151001-br2.jpg`,
    title: 'Su apoyo durante\nla radioterapia',
    sub: 'El apósito innovador para la dermatitis por radiación'
  },
  {
    bg: `${A}/20151019-0021.jpg`,
    title: 'Apósito innovador\ny flexible',
    sub: 'Forma una capa protectora que previene los síntomas tempranos de la dermatitis por radiación'
  }
]

const features = [
  { title: 'Prevención', desc: 'Forma una capa protectora que previene los síntomas tempranos de la dermatitis por radiación' },
  { title: 'Tratamiento', desc: 'Favorece un entorno húmedo de cicatrización de la herida para una recuperación más rápida post-terapia' },
  { title: 'Apósito innovador', desc: 'Apósito flexible que puede aplicarse durante todo el tratamiento de radioterapia' },
  { title: 'Adición simple', desc: 'Para médicos que desean un complemento seguro y sencillo a los protocolos existentes de cuidado de heridas' }
]

export default function StrataXRT() {
  const [activeSlide, setActiveSlide] = useState(0)

  useEffect(() => {
    const t = setInterval(() => setActiveSlide(p => (p + 1) % slides.length), 5000)
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
            <div className="sx-hero__overlay" />
            <div className="sx-hero__content">
              <h1 className="sx-hero__title">
                {slide.title.split('\n').map((l, j) => <span key={j}>{l}<br /></span>)}
              </h1>
              <p className="sx-hero__sub">{slide.sub}</p>
            </div>
          </div>
        ))}
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
              El apósito innovador para la dermatitis por radiación<br />
              <span>Su apoyo durante todo el tratamiento de radioterapia</span>
            </h2>
            <ul className="sx-product__list">
              <li>Apósito innovador y flexible para heridas</li>
              <li>Forma una capa protectora que previene los síntomas tempranos de la dermatitis por radiación</li>
              <li>Favorece un entorno húmedo de cicatrización para una recuperación rápida post-terapia</li>
            </ul>
            <a href="#" className="sx-btn">Leer Más</a>
          </div>
          <div className="sx-product__imgs">
            <img src={`${A}/SX-20-EX00-Tube-HighRes-1.png`} alt="StrataXRT 20g" className="sx-product__tube" />
            <img src={`${A}/SX-50-EX00-Tube-HighRes3-1.png`} alt="StrataXRT 50g" className="sx-product__tube sx-product__tube--lg" />
          </div>
        </div>
      </section>

      {/* ── FEATURES ── */}
      <section className="sx-features">
        <div className="sx-features__inner">
          <h2 className="sx-section-title">El apósito innovador para la <span>dermatitis por radiación</span></h2>
          <div className="sx-features__grid">
            {features.map((f, i) => (
              <div key={i} className="sx-features__item">
                <h3 className="sx-features__title">{f.title}</h3>
                <p>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BEFORE / AFTER ── */}
      <section className="sx-ba">
        <div className="sx-ba__inner">
          <h2 className="sx-section-title">Véalo <span>usted mismo</span></h2>
          <p className="sx-ba__caption">
            Mejora visible después de 19 días usando StrataXRT durante una radioterapia en curso.
            El paciente fue diagnosticado con un carcinoma epidermoide avanzado de laringe.
          </p>
          <div className="sx-ba__imgs">
            <div className="sx-ba__col">
              <img src={`${A}/20151001-br2.jpg`} alt="Inicio del tratamiento" />
              <span>Inicio</span>
            </div>
            <div className="sx-ba__col">
              <img src={`${A}/20151019-0021.jpg`} alt="Día 19" />
              <span>Día 19</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── BUY ── */}
      <section className="sx-buy">
        <div className="sx-buy__inner">
          <h2 className="sx-buy__title">Dónde comprar</h2>
          <a href="https://es.stratpharma-shop.com/product-category/strataxrt/" className="sx-btn sx-btn--lg" target="_blank" rel="noopener noreferrer">
            Comprar Online
          </a>
        </div>
      </section>

      <Footer />
    </div>
  )
}
