import { useState, useEffect } from 'react'
import './Stratamed.scss'
import Navbar from '../../../common/Navbar/Navbar'
import Footer from '../../../common/Footer/Footer'

const A = '/assets/img/webs/stratamed'

const slides = [
  {
    bg: `${A}/SM-banner-US-packshotcomp.jpg`,
    title: 'Stratamed\nAvance en el cuidado de heridas',
    sub: 'Cicatrización más rápida y prevención anticipada de cicatrices anormales'
  },
  {
    bg: `${A}/start-of-treatment-optimized-1.jpg`,
    title: 'Prevención de cicatrices anormales\nantes que nunca',
    sub: 'Antes de la retirada de las suturas'
  },
  {
    bg: `${A}/day-7-optimized-1.jpg`,
    title: 'Alivio del picor,\nquemazón y molestias',
    sub: 'Reduce el enrojecimiento y la decoloración asociados a la piel dañada'
  }
]

const features = [
  'Una avanzada formulación en gel que se seca formando una película fina y flexible',
  'Favorece un entorno húmedo de cicatrización para una cicatrización más rápida',
  'Inerte, no contiene esteroides, alcohol, parabenos ni fragancias',
  'Asegura un contacto constante con la herida'
]

export default function Stratamed() {
  const [activeSlide, setActiveSlide] = useState(0)

  useEffect(() => {
    const t = setInterval(() => setActiveSlide(p => (p + 1) % slides.length), 5000)
    return () => clearInterval(t)
  }, [])

  return (
    <div className="sd-page">
      <Navbar />

      {/* ── HERO ── */}
      <section className="sd-hero">
        {slides.map((slide, i) => (
          <div key={i} className={`sd-hero__slide${i === activeSlide ? ' active' : ''}`}
            style={{ backgroundImage: `url(${slide.bg})` }}>
            <div className="sd-hero__overlay" />
            <div className="sd-hero__content">
              <h1 className="sd-hero__title">
                {slide.title.split('\n').map((l, j) => <span key={j}>{l}<br /></span>)}
              </h1>
              <p className="sd-hero__sub">{slide.sub}</p>
            </div>
          </div>
        ))}
        <div className="sd-hero__dots">
          {slides.map((_, i) => (
            <button key={i} className={`sd-hero__dot${i === activeSlide ? ' active' : ''}`}
              onClick={() => setActiveSlide(i)} aria-label={`Slide ${i + 1}`} />
          ))}
        </div>
      </section>

      {/* ── PRODUCT ── */}
      <section className="sd-product">
        <div className="sd-product__inner">
          <div className="sd-product__text">
            <h2 className="sd-product__heading">
              Avance en el cuidado de las heridas<br />
              <span>una avanzada formulación en gel</span>
            </h2>
            <p>
              Stratamed es un apósito flexible y avanzado para heridas que se utiliza inmediatamente después de
              intervenciones médicas y estéticas. Permite que la prevención de cicatrices anormales comience
              antes que nunca — antes de la retirada de las suturas.
            </p>
            <ul className="sd-product__list">
              <li>Proporciona alivio del picor, quemazón y molestias</li>
              <li>Reduce el enrojecimiento y la decoloración</li>
              <li>Favorece la cicatrización rápida</li>
              <li>Apto para uso inmediato post-intervención</li>
            </ul>
            <a href="#" className="sd-btn">Más Información</a>
          </div>
          <div className="sd-product__imgs">
            <img src={`${A}/stratamed-10g-ES.png`} alt="Stratamed 10g" className="sd-product__img" />
          </div>
        </div>
      </section>

      {/* ── FEATURES ── */}
      <section className="sd-features">
        <div className="sd-features__inner">
          <h2 className="sd-section-title">Avance en el cuidado de <span>las heridas</span></h2>
          <div className="sd-features__grid">
            {features.map((f, i) => (
              <div key={i} className="sd-features__item">
                <span className="sd-features__icon">✓</span>
                <p>{f}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BEFORE / AFTER ── */}
      <section className="sd-ba">
        <div className="sd-ba__inner">
          <h2 className="sd-section-title">Compruébelo <span>usted mismo</span></h2>
          <p className="sd-ba__caption">
            Tratamiento satisfactorio de una herida del cuero cabelludo.
          </p>
          <div className="sd-ba__imgs">
            <div className="sd-ba__col">
              <img src={`${A}/start-of-treatment-optimized-1.jpg`} alt="Inicio del tratamiento" />
              <span>Inicio del tratamiento</span>
            </div>
            <div className="sd-ba__col">
              <img src={`${A}/day-7-optimized-1.jpg`} alt="Día 7" />
              <span>Día 7</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── EXPERT ── */}
      <section className="sd-expert">
        <div className="sd-expert__inner">
          <h2 className="sd-section-title">Opinión del <span>experto</span></h2>
          <blockquote className="sd-expert__quote">
            "Creemos que Stratamed fue una de las principales razones por las que todos los pacientes
            presentaron mejoría y cicatrización de sus heridas en el cuero cabelludo tras un prolongado
            periodo sin cicatrizar. Stratamed utiliza las propiedades únicas de los geles filmógenos
            en una formulación que puede ser ideal para estas heridas."
          </blockquote>
          <p className="sd-expert__author">Anthony Benedetto, MD, DO, FACP — Philadelphia, USA</p>
        </div>
      </section>

      {/* ── BUY ── */}
      <section className="sd-buy">
        <div className="sd-buy__inner">
          <h2 className="sd-buy__title">Dónde comprar</h2>
          <a href="https://www.farmavazquez.com/stratamed-5-g-605796.html" className="sd-btn sd-btn--lg" target="_blank" rel="noopener noreferrer">
            Comprar Online
          </a>
        </div>
      </section>

      <Footer />
    </div>
  )
}
