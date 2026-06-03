import { useState, useEffect } from 'react'
import './StrataTriz.scss'
import Navbar from '../../../common/Navbar/Navbar'
import Footer from '../../../common/Footer/Footer'

const A = '/assets/img/webs/strata-triz'

const slides = [
  {
    bg: `${A}/SD-visual-woman-scar.jpg`,
    title: 'Tratamiento de primera línea\npara las cicatrices',
    desc: 'tratamiento de cicatrices hipertróficas y queloides, mejorando su aspecto en apenas dos meses de tratamiento.'
  },
  {
    bg: `${A}/SD-visual-man-scar.jpg`,
    title: 'Adecuado para todo\ntipo de pieles',
    desc: 'Strata-triz es adecuado para todas las zonas de la piel, incluidas las zonas expuestas'
  },
]

const features = [
  'Previene la formación anormal y excesiva de cicatrices',
  'Suaviza y aplana las cicatrices abultadas',
  'Ayuda a normalizar el ciclo de síntesis de colágeno',
  'Adecuado para todas las zonas de la piel, incluidas las zonas expuestas'
]

export default function StrataTriz() {
  const [activeSlide, setActiveSlide] = useState(0)

  useEffect(() => {
    const t = setInterval(() => setActiveSlide(p => (p + 1) % slides.length), 5000)
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
            <div className="st-hero__overlay" />
            <div className="st-hero__content">
              <h1 className="st-hero__title">
                {slide.title.split('\n').map((line, j) => (
                  <span key={j}>{line}<br /></span>
                ))}
              </h1>
              <p className="st-hero__desc">{slide.desc}</p>
            </div>
          </div>
        ))}
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
            <li>Previene la formación anormal y excesiva de las cicatrices.</li>
            <li>Alivia el picor y las molestias de las cicatrices.</li>
            <li>Reduce el enrojecimiento y la decoloración asociados a las cicatrices.</li>
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
                la única formulación con una aplicación diaria
              </h2>
            </div>
            <div className="st-features__center">
              <img src="/assets/img/products/strata-triz/22.jpg" alt="Strata-triz tubo" />
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
          <h2 className="st-section-title">
            Compruébelo <span>usted mismo</span>
          </h2>
          <p className="st-ba__caption">
            Cicatriz hipertrófica lineal tras la extracción de un nevus. La cicatriz de la izquierda no fue tratada.
            La cicatriz de la derecha fue tratada durante 2 meses con Strata-triz.
            Edad de las cicatrices antes del tratamiento: 14 meses.
          </p>
          <div className="st-ba__imgs">
            <div className="st-ba__col">
              <img src={`${A}/before-1-300x164.jpg`} alt="Antes" />
              <span>Antes</span>
            </div>
            <div className="st-ba__col">
              <img src={`${A}/after-4-300x199.jpg`} alt="Después" />
              <span>Después</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── EXPERT ── */}
      <section className="st-expert">
        <div className="st-expert__inner">
          <h2 className="st-section-title">
            Opinión del <span>experto</span>
          </h2>
          <blockquote className="st-expert__quote">
            "Strata-triz puede utilizarse para tratar cicatrices antiguas, cicatrices nuevas y cicatrices elevadas.
            Es para pacientes que intentan aplanarlas y mejorar su aspecto."
          </blockquote>
          <p className="st-expert__author">Michael Gold, Nashville, TN, USA</p>
        </div>
      </section>

      {/* ── WHERE TO BUY ── */}
      <section className="st-buy">
        <div className="st-buy__inner">
          <h2 className="st-buy__title">Dónde comprar</h2>
          <a href="https://es.stratpharma-shop.com/product-category/strata-triz/" className="st-btn st-btn--lg" target="_blank" rel="noopener noreferrer">
            Comprar Online
          </a>
          <p className="st-buy__note">*Consulte el prospecto de información al paciente</p>
        </div>
      </section>

      <Footer />
    </div>
  )
}
