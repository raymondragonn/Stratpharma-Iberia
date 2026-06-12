import { useState, useEffect } from 'react'
import './Stratamark.scss'
import Navbar from '../../../common/Navbar/Navbar'
import Footer from '../../../common/Footer/Footer'

const A = '/assets/img/webs/stratamark'

const slides = [
  {
    bg: `${A}/enjoy-your-pregnancy.jpg`,
    text: 'Disfruta del embarazo:\nnuestra especialidad es una piel sin estrías durante todo el embarazo',
    pos: 'tr',
    small: false
  },
  {
    bg: `${A}/breakthrough.jpg`,
    text: 'El producto médico\npara la prevención y el\ntratamiento de las estrías',
    pos: 'br',
    small: false
  },
  {
    bg: `${A}/stretch-marks-affects-.jpg`,
    text: 'Los estudios publicados y documentados en revistas médicas demuestran que entre el 65 y 75% de las mujeres embarazadas tratadas con stratamark no han desarrollado ninguna estrías durante el embarazo.',
    pos: 'bl',
    small: true
  },
  {
    bg: '/assets/img/products/stratamark/18.jpg',
    text: 'Reduce el enrojecimiento y la\ndecoloración de las estrías',
    pos: 'tl',
    small: false
  }
]

const indications = [
  'Embarazo',
  'Estirones crecimiento adolescencia',
  'Aumento de senos',
  'Aumento de peso o culturismo',
  'Cambios hormonales'
]

const features = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2C9 6.5 4 11 4 15a8 8 0 0 0 16 0c0-4-5-8.5-8-13z"/>
      </svg>
    ),
    label: 'Impermeable'
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="9"/>
        <polyline points="9 12 11 14 15 10"/>
      </svg>
    ),
    label: 'Clínicamente probado'
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
        <circle cx="12" cy="12" r="4"/>
        <line x1="12" y1="2" x2="12" y2="5"/><line x1="12" y1="19" x2="12" y2="22"/>
        <line x1="2" y1="12" x2="5" y2="12"/><line x1="19" y1="12" x2="22" y2="12"/>
        <line x1="4.93" y1="4.93" x2="7.05" y2="7.05"/><line x1="16.95" y1="16.95" x2="19.07" y2="19.07"/>
        <line x1="4.93" y1="19.07" x2="7.05" y2="16.95"/><line x1="16.95" y1="7.05" x2="19.07" y2="4.93"/>
      </svg>
    ),
    label: 'Inodoro y transparente'
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="9"/>
        <polyline points="12 7 12 12 15 15"/>
      </svg>
    ),
    label: 'Larga duración'
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2C9 6.5 5 10 5 14a7 7 0 0 0 14 0c0-4-4-7.5-7-12z"/>
        <path d="M9 17c.5 1.5 1.5 2.5 3 3"/>
      </svg>
    ),
    label: 'Hidratante'
  }
]


export default function Stratamark() {
  const [activeSlide, setActiveSlide] = useState(0)

  useEffect(() => {
    const t = setInterval(() => setActiveSlide(p => (p + 1) % slides.length), 5000)
    return () => clearInterval(t)
  }, [])

  return (
    <div className="sm-page">
      <Navbar />

      {/* ── HERO ── */}
      <section className="sm-hero">
        {slides.map((slide, i) => (
          <div
            key={i}
            className={`sm-hero__slide${i === activeSlide ? ' active' : ''}`}
            style={{ backgroundImage: `url(${slide.bg})` }}
          >
            <div className={`sm-hero__content sm-hero__content--${slide.pos}`}>
              <p className={`sm-hero__text${slide.small ? ' sm-hero__text--sm' : ''}`}>
                {slide.text.split('\n').map((line, j) => <span key={j}>{line}<br /></span>)}
              </p>
            </div>
          </div>
        ))}

        <button
          className="sm-hero__arrow sm-hero__arrow--prev"
          onClick={() => setActiveSlide(p => (p - 1 + slides.length) % slides.length)}
          aria-label="Slide anterior"
        >
          <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </button>
        <button
          className="sm-hero__arrow sm-hero__arrow--next"
          onClick={() => setActiveSlide(p => (p + 1) % slides.length)}
          aria-label="Siguiente slide"
        >
          <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </button>

        <div className="sm-hero__dots">
          {slides.map((_, i) => (
            <button
              key={i}
              className={`sm-hero__dot${i === activeSlide ? ' active' : ''}`}
              onClick={() => setActiveSlide(i)}
              aria-label={`Slide ${i + 1}`}
            />
          ))}
        </div>
      </section>

      {/* ── PRODUCT INFO ── */}
      <section className="sm-product">
        <div className="sm-product__inner">
          <div className="sm-product__text">
            <h2 className="sm-product__heading">
              Disfrute de su maternidad libre de estrés.<br />
              <span>El cuidado de su piel es nuestra tarea.</span>
            </h2>
            <p className="sm-product__lead">
              Stratamark es un producto novedoso, exclusivo fabricado con alta tecnología y diseñado para prevenir y tratar todo tipo de estrías, resultantes de:
            </p>
            <ul className="sm-product__list">
              {indications.map((item, i) => <li key={i}>{item}</li>)}
            </ul>
            <p className="sm-product__sub-label">Producto tópico con evidencia clínica comprobada</p>
            <a href="#" className="sm-btn">Leer Más</a>
          </div>
          <div className="sm-product__imgs">
            <img src={`${A}/pack-1.jpg`} alt="Stratamark envase" className="sm-product__pack" />
            <img src={`${A}/tube.png`} alt="Stratamark tubo" className="sm-product__tube" />
          </div>
        </div>
      </section>

      {/* ── FEATURES ── */}
      <section className="sm-features">
        <div className="sm-features__inner">
          <div className="sm-features__grid">
            {features.map((f, i) => (
              <div key={i} className="sm-features__item">
                <span className="sm-features__icon">{f.icon}</span>
                <p>{f.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BEFORE / AFTER ── */}
      <section className="sm-ba">
        <div className="sm-ba__inner">
          <div className="sm-ba__cols">
            <div className="sm-ba__text">
              <h2 className="sm-ba__title">
                <span className="sm-ba__title-line">Compruébelo</span>
                <span className="sm-ba__title-line sm-ba__title-line--accent">usted mismo</span>
              </h2>
              <p className="sm-ba__caption">
                Stratamark – después de dos meses de tratamiento en monoterapia en el abdomen (después del parto).
                Aplicado tópicamente, una vez al día, o después de cada lavado.
              </p>
            </div>
            <div className="sm-ba__imgs">
              <img src="/assets/img/products/stratamark/23.png" alt="Antes y después del tratamiento con Stratamark" />
            </div>
          </div>
        </div>
      </section>


{/* ── WHERE TO BUY ── */}
      <section className="sm-buy">
        <div className="sm-buy__inner">
          <div className="sm-buy__cols">
            <div className="sm-buy__text">
              <h2 className="sm-buy__title">
                <span className="sm-buy__title-line">Dónde</span>
                <span className="sm-buy__title-line sm-buy__title-line--accent">comprar</span>
              </h2>
              <a href="https://www.farmavazquez.com/stratamark-5951" className="sm-btn sm-btn--lg" target="_blank" rel="noopener noreferrer">
                Comprar Online
              </a>
              <p className="sm-buy__note">*Consulte el prospecto de información al paciente</p>
            </div>
            <div className="sm-buy__imgs">
              <img src="/assets/img/products/stratamark/imagenes stratpharma_Mesa de trabajo 1 copia.png" alt="Stratamark gel para el tratamiento de estrías" />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
