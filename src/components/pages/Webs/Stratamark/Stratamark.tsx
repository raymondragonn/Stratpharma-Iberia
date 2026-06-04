import { useState, useEffect } from 'react'
import './Stratamark.scss'
import Navbar from '../../../common/Navbar/Navbar'
import Footer from '../../../common/Footer/Footer'

const A = '/assets/img/webs/stratamark'

const slides = [
  {
    bg: `${A}/enjoy-your-pregnancy.jpg`,
    title: 'Disfruta de tu maternidad',
    sub: 'Piel sin estrías es nuestra especialidad'
  },
  {
    bg: `${A}/breakthrough.jpg`,
    title: 'Producto tópico con evidencia\nclínica demostrada',
    sub: 'El producto médico para la prevención y el tratamiento de las estrías'
  },
  {
    bg: `${A}/stretch-marks-affects-.jpg`,
    title: 'Estudios demuestran que las estrías\nafectan entre el 60–70% de mujeres embarazadas',
    sub: 'Stratamark, solución clínicamente probada'
  }
]

const indications = [
  'Embarazo',
  'Estirones en la adolescencia',
  'Aumento de pecho',
  'Aumento de peso o de musculación'
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

const testimonials = [
  {
    img: `${A}/becjud.jpg`,
    name: 'Bec Judd',
    text: '"I Kid you not: I don\'t have stretchmarks. I mean, a stretch mark product that not only stops stretch marks forming but also fades existing ones?"'
  },
  {
    img: `${A}/Stephanie-Hua.jpg`,
    name: 'Stéphanie Hua',
    text: '"After one month the result on my old white and silvery paper stretch marks was already amazing and largely noticeable. Now, after 3 months of usage I can say that my stretch marks have improved by 70%."'
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
            <div className="sm-hero__overlay" />
            <div className="sm-hero__content">
              <h1 className="sm-hero__title">
                {slide.title.split('\n').map((line, j) => <span key={j}>{line}<br /></span>)}
              </h1>
              <p className="sm-hero__sub">{slide.sub}</p>
            </div>
          </div>
        ))}
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
              Disfruta de tu maternidad<br />
              <span>Piel sin estrías nuestra especialidad</span>
            </h2>
            <p className="sm-product__lead">
              Stratamark es el novedoso producto sanitario tópico diseñado para prevenir y tratar todo tipo de estrías resultantes de:
            </p>
            <ul className="sm-product__list">
              {indications.map((item, i) => <li key={i}>{item}</li>)}
            </ul>
            <p className="sm-product__sub-label">Producto tópico con evidencia clínica demostrada</p>
            <a href="#" className="sm-btn">Leer Más</a>
          </div>
          <div className="sm-product__imgs">
            <img src={`${A}/pack-1.jpg`} alt="Stratamark envase" className="sm-product__pack" />
            <img src={`${A}/tube.png`} alt="Stratamark tubo" className="sm-product__tube" />
          </div>
        </div>
      </section>

      {/* ── MEDICAL BADGE ── */}
      <section className="sm-badge">
        <div className="sm-badge__inner">
          <img src={`${A}/registered-medical.jpg`} alt="Producto médico registrado" className="sm-badge__img" />
          <div className="sm-badge__text">
            <h3>El producto médico para la prevención y el tratamiento de las estrías</h3>
            <p>Reduce el enrojecimiento y la decoloración de las estrías</p>
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
          <h2 className="sm-section-title">Compruébelo <span>usted mismo</span></h2>
          <p className="sm-ba__caption">
            Stratamark – después de dos meses de tratamiento en monoterapia en el abdomen (después del parto).
            Aplicado tópicamente, una vez al día, o después de cada lavado.
          </p>
          <div className="sm-ba__imgs">
            <div className="sm-ba__col">
              <img src={`${A}/BEFORE.jpg`} alt="Antes" />
              <span>Antes</span>
            </div>
            <div className="sm-ba__col">
              <img src={`${A}/AFTER.jpg`} alt="Después" />
              <span>Después</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── EXPERT QUOTE ── */}
      <section className="sm-expert">
        <div className="sm-expert__inner">
          <h2 className="sm-section-title">Opinión del <span>experto</span></h2>
          <blockquote className="sm-expert__quote">
            "Stratamark® es eficaz en la prevención y el tratamiento de las estrías distensas en la cohorte estudiada;
            El análisis indicó que Stratamark® fue eficaz tanto para prevenir la aparición de estrías gravídicas durante
            el embarazo como para tratar a las mujeres embarazadas y después del parto con estrías gravídicas previas."
          </blockquote>
          <p className="sm-expert__source">— Private gynecology practice (New EU Magazine of Medicine 1–4/2014)</p>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="sm-testimonials">
        <div className="sm-testimonials__inner">
          <h2 className="sm-section-title">Lo que dicen <span>nuestras usuarias</span></h2>
          <div className="sm-testimonials__grid">
            {testimonials.map((t, i) => (
              <div key={i} className="sm-testimonial">
                <img src={t.img} alt={t.name} className="sm-testimonial__img" />
                <p className="sm-testimonial__text">{t.text}</p>
                <span className="sm-testimonial__name">{t.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHERE TO BUY ── */}
      <section className="sm-buy">
        <div className="sm-buy__inner">
          <h2 className="sm-buy__title">Dónde comprar</h2>
          <a href="https://www.farmavazquez.com/stratamark-5951" className="sm-btn sm-btn--lg" target="_blank" rel="noopener noreferrer">
            Comprar online
          </a>
        </div>
      </section>

      <Footer />
    </div>
  )
}
