import { useState, useEffect } from 'react'
import './StrataTriz.scss'
import Navbar from '../../../common/Navbar/Navbar'
import Footer from '../../../common/Footer/Footer'

const A = '/assets/img/webs/strata-triz'

const slides = [
  {
    bg: `${A}/SD-visual-woman-scar.jpg`,
    title: 'Tratamiento de primera línea\npara las cicatrices',
    desc: 'Strata-triz se recomiendan como terapia no invasiva de primera línea para el tratamiento de cicatrices anormales',
    pos: 'right'
  },
  {
    bg: `${A}/SD-visual-man-scar.jpg`,
    title: 'Adecuado para todo\ntipo de pieles',
    desc: 'Strata-triz es adecuado para todas las zonas de la piel, incluidas las zonas expuestas',
    pos: 'left'
  },
]

const features = [
  'El efecto terapéutico de Strata-triz tiene documentado y registrado una duración de 36 horas.',
  'Suaviza y aplana las cicatrices abultadas',
  'Normaliza el ciclo de síntesis de colágeno',
  'Adecuado para todas las zonas de la piel, incluidas las zonas expuestas'
]

export default function StrataTriz() {
  const [activeSlide, setActiveSlide] = useState(0)

  useEffect(() => {
    const t = setInterval(() => setActiveSlide(p => (p + 1) % slides.length), 8000)
    return () => clearInterval(t)
  }, [])

  return (
    <div className="st-page">
      <Navbar />

      {/* ── HERO ── */}
      <section className="st-hero">
        {slides.map((slide, i) => (
          <div
            key={i}
            className={`st-hero__slide${i === activeSlide ? ' active' : ''}`}
            style={{ backgroundImage: `url(${slide.bg})` }}
          >
            <div className={`st-hero__content st-hero__content--${slide.pos}`}>
              <h1 className="st-hero__title">
                {slide.title.split('\n').map((line, j) => (
                  <span key={j}>{line}<br /></span>
                ))}
              </h1>
              <p className="st-hero__desc">{slide.desc}</p>
            </div>
          </div>
        ))}

        <button
          className="st-hero__arrow st-hero__arrow--prev"
          onClick={() => setActiveSlide(p => (p - 1 + slides.length) % slides.length)}
          aria-label="Slide anterior"
        >
          <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </button>
        <button
          className="st-hero__arrow st-hero__arrow--next"
          onClick={() => setActiveSlide(p => (p + 1) % slides.length)}
          aria-label="Siguiente slide"
        >
          <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </button>

        <div className="st-hero__dots">
          {slides.map((_, i) => (
            <button
              key={i}
              className={`st-hero__dot${i === activeSlide ? ' active' : ''}`}
              onClick={() => setActiveSlide(i)}
              aria-label={`Slide ${i + 1}`}
            />
          ))}
        </div>
      </section>

      {/* ── PRODUCT INFO ── */}
      <section className="st-product">
        <div className="st-product__inner">
          <div className="st-product__top">
            <div className="st-product__imgs">
              <img src={`${A}/ST-10-ES-Box-LowRes-1536x1499.jpg`} alt="Strata-triz caja" className="st-product__box" />
            </div>
            <div className="st-product__heading">
              <p className="st-product__label">
                Para el tratamiento<br />
                profesional<br />
                <span>de las cicatrices</span>
              </p>
              <p className="st-product__daily">aplicación una vez al día*</p>
            </div>
          </div>
          <ul className="st-product__list">
            <li>Para el tratamiento de cicatrices anormales, tanto antiguas como nuevas.</li>
            <li>Alivia el picor y las molestias de las cicatrices.</li>
            <li>Reduce el enrojecimiento, la inflamación y la coloración asociados a las cicatrices.</li>
          </ul>
        </div>
      </section>

      {/* ── INDICATIONS ── */}
      <section className="st-indications">
        <div className="st-indications__inner">
          <h2 className="st-indications__title">
            Strata-triz está indicado para el uso en todo tipo de cicatrices, incluidas las resultantes de:
          </h2>
          <div className="st-indications__grid">
            <div className="st-indications__item">Cirugía general y estética (cesáreas,...)</div>
            <div className="st-indications__item">Quemaduras</div>
            <div className="st-indications__item">Heridas crónicas</div>
            <div className="st-indications__item">Acné y otras enfermedades de la piel</div>
          </div>
        </div>
      </section>

      {/* ── FEATURES ── */}
      <section className="st-features">
        <div className="st-features__inner">
          <div className="st-features__cols">
            <div className="st-features__left">
              <h2 className="st-features__title">
                <span>Strata-triz</span><br />
                la única<br />
                formulación con<br />
                una aplicación<br />
                diaria
              </h2>
            </div>
            <div className="st-features__center">
              <img src="/assets/img/products/strata-triz/imagenes stratpharma-15.png" alt="Strata-triz tubo" />
            </div>
            <ul className="st-features__list">
              {features.map((f, i) => (
                <li key={i}>{f}</li>
              ))}
            </ul>
          </div>
          <p className="st-features__desc">
            Strata-triz®, formulación de gel de silicona transparente de secado rápido para el tratamiento
            de cicatrices, tanto antiguas como nuevas.
          </p>
        </div>
      </section>

      {/* ── BEFORE / AFTER ── */}
      <section className="st-ba">
        <div className="st-ba__inner">
          <div className="st-ba__cols">
            <div className="st-ba__text">
              <h2 className="st-ba__title">
                <span className="st-ba__title-line">Compruébelo</span>
                <span className="st-ba__title-line st-ba__title-line--accent">usted mismo</span>
              </h2>
              <p className="st-ba__caption">
                Cicatriz queloide lineal tras la extracción de un nevus.
                La cicatriz de la izquierda no fue tratada.
                La cicatriz de la derecha fue tratada durante 2 meses con Strata-triz.
                Edad de las cicatrices antes del tratamiento: 14 meses.
              </p>
            </div>
            <div className="st-ba__imgs">
              <div className="st-ba__photo">
                <img src={`${A}/before-1-300x164.jpg`} alt="Cicatriz antes del tratamiento con Strata-triz" />
                <span className="st-ba__photo-label">Antes</span>
              </div>
              <div className="st-ba__photo">
                <img src={`${A}/after-4-300x199.jpg`} alt="Cicatriz después del tratamiento con Strata-triz" />
                <span className="st-ba__photo-label">Después</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CLINICAL RESULTS ── */}
      <section className="st-results">
        <div className="st-results__inner">
          <h2 className="st-results__title">
            Resultados clínicos <span>con Strata-triz</span>
          </h2>
          <p className="st-results__subtitle">
            Cicatriz hipertrófica generalizada tras quemadura térmica profunda por contacto - cara
          </p>
          <p className="st-results__age">
            Edad de la cicatriz antes del tratamiento: 2 meses. Edad del paciente: 6 meses.
          </p>
          <div className="st-results__cols">
            <div className="st-results__imgs">
              <img src="/assets/img/products/strata-triz/Captura de pantalla 2026-06-07 a la(s) 6.21.22 p.m..png" alt="Cicatriz al inicio del tratamiento y después de 5 meses con Strata-triz" />
            </div>
            <div className="st-results__text">
              <p>
                Después de 1 mes de tratamiento con Strata-triz, se observó una reducción del prurito,
                el edema y el eritema. El color de la cicatriz era más claro y su superficie más suave.
              </p>
              <p>
                Tras 5 meses de tratamiento de la cicatriz (8 meses después del traumatismo), el eritema
                posterior a la quemadura se resolvió completamente, y las cicatrices eran más pequeñas
                y suaves. Se observó una importante reducción de la deformación del lado derecho del labio superior.
              </p>
            </div>
          </div>
        </div>
      </section>

      <p className="st-callout">
        ¿Os podéis imaginar la felicidad de los padres detrás de este resultado?
      </p>

      {/* ── WHERE TO BUY ── */}
      <section className="st-buy">
        <div className="st-buy__inner">
          <div className="st-buy__cols">
            <div className="st-buy__text">
              <h2 className="st-buy__title">
                <span className="st-buy__title-line">Dónde</span>
                <span className="st-buy__title-line st-buy__title-line--accent">comprar</span>
              </h2>
              <a href="https://www.farmavazquez.com/comprar-strata-triz-5962" className="st-btn st-btn--lg" target="_blank" rel="noopener noreferrer">
                Comprar Online
              </a>
              <p className="st-buy__note">*Consulte el prospecto de información al paciente</p>
            </div>
            <div className="st-buy__imgs">
              <img src="/assets/img/products/strata-triz/imagenes stratpharma_Mesa de trabajo 1 copia 2.png" alt="Strata-triz gel para el tratamiento de cicatrices" />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
