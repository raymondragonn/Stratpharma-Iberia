import { useState, useEffect, useCallback } from 'react'
import './Stratamed.scss'
import Navbar from '../../../common/Navbar/Navbar'
import Footer from '../../../common/Footer/Footer'

const A = '/assets/img/webs/stratamed'
const P = '/assets/img/products/stratamed'

const features = [
  { title: 'Película flexible', desc: 'Apósito flexible y de contacto total que forma una fina película y garantiza contacto constante con la herida.' },
  { title: 'Alivio sintomático', desc: 'Proporciona alivio del picor, quemazón e incomodidad, y reduce el enrojecimiento.' },
  { title: 'Cicatrización rápida', desc: 'Favorece un entorno húmedo de cicatrización para una recuperación más rápida y menor tiempo de inactividad.' },
  { title: 'Protección', desc: 'Protege la piel comprometida de agentes químicos y microbianos, reduciendo el riesgo de dermatitis de contacto.' },
  { title: 'Prevención de cicatrices', desc: 'Permite que la prevención de cicatrices anormales comience de inmediato tras el procedimiento.' },
  { title: 'Hidratación', desc: 'Semioclusivo, permite que la piel respire y se mantenga hidratada.' },
  { title: 'Zonas difíciles', desc: 'Apto para zonas expuestas como cara y cuello, articulaciones y zonas con vello.' },
  { title: 'No reactivo', desc: 'Inerte, sin pH medible, sin alcohol, parabenos ni fragancias.' },
  { title: 'Fácil de aplicar', desc: 'Fácil de aplicar sin necesidad de retirar antes de reaplicar.' },
  { title: 'Bacteriostático', desc: 'Reduce el riesgo de infección bacteriana en heridas y piel comprometida.' },
]

const medicalIndications = [
  'Incisiones y escisiones quirúrgicas',
  'Biopsias y electrodesecación',
  'Cirugía general con suturas (Mohs, cesáreas)',
  'Heridas crónicas (úlceras venosas, por presión, diabéticas)',
  'Quemaduras de 1.er y 2.o grado',
  'Traumatismos cutáneos',
  'Criocirugía y dermoabrasión',
  'Terapia post 5-FU',
  'Tatuaje médico (post reconstrucción mamaria)',
  'Afecciones inflamatorias de la piel',
]

const cosmeticIndications = [
  'Procedimientos láser (ablativo de campo completo)',
  'Terapia con plasma rico en plaquetas (PRP)',
  'Peeling químico (medio y profundo)',
  'Cirugía estética facial y corporal',
  'Eliminación de tatuajes',
  'Tatuaje cosmético y paramédico',
]

const videos = [
  { id: 'PLKiMz4IdRhtc06cTIU1qvRb0u6I9-dx55', label: 'Opiniones de médicos', list: true },
  { id: 'PLKiMz4IdRhtctu9cXlsDjPD1oIPlvjViX', label: 'Casos de éxito', list: true },
]

export default function Stratamed() {
  const [modalOpen, setModalOpen] = useState(false)

  const closeModal = useCallback(() => setModalOpen(false), [])

  useEffect(() => {
    document.body.style.overflow = modalOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [modalOpen])

  useEffect(() => {
    if (!modalOpen) return
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') closeModal() }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [modalOpen, closeModal])

  return (
    <div className="sd-page">
      <Navbar />

      {/* ── HERO ── */}
      <section className="sd-hero" style={{ backgroundImage: `url("${P}/30.jpg")` }}>
        <div className="sd-hero__inner">
          <div className="sd-hero__left">
            <h1 className="sd-hero__title">
              El avance en la cicatrización de heridas: <strong>curación más rápida y prevención temprana de cicatrices anormales</strong>
            </h1>
            <div className="sd-hero__actions">
              <img src={`${P}/imagenes stratpharma_Mesa de trabajo 1 copia 5.png`} alt="Stratamed" className="sd-hero__product" style={{ width: '260px', height: 'auto', maxWidth: 'none' }} />
              <a href="https://www.farmavazquez.com/stratamed-5-g-605796.html" className="sd-hero__btn" target="_blank" rel="noopener noreferrer">
                Compra<br />online
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── HERO CARDS ── */}
      <section className="sd-hero-cards">
        <div className="sd-hero-cards__inner">
          <div className="sd-hero-cards__item">Curación más rápida en la mitad de tiempo que el resto de productos del mercado</div>
          <div className="sd-hero-cards__item">Bacteriostático, reduciendo el riesgo de infección</div>
          <div className="sd-hero-cards__item">Previene cicatrices anormales</div>
          <div className="sd-hero-cards__item">Se adapta a todo tipo de superficies de heridas</div>
          <div className="sd-hero-cards__item">Estéril (se puede utilizar dentro del quirófano)</div>
        </div>
      </section>

      <div className="sd-callout">
        Apósito flexible y formador de película avanzado para su uso inmediatamente después de los procedimientos médicos y estéticos.
      </div>

      {/* ── PRODUCT ── */}
      <section className="sd-product">
        <div className="sd-product__inner">
          <div className="sd-product__imgs">
            <img src={`${P}/43.jpg`} alt="Stratamed aplicación" className="sd-product__img" />
          </div>
          <div className="sd-product__text">
            <p className="sd-product__intro">
              Stratamed se ha desarrollado con una consistencia especial para garantizar que permanezca en <strong>pleno contacto</strong> con el lecho de la herida o la superficie dañada.
            </p>
            <div className="sd-product__indications">
              <h3 className="sd-product__ind-title">Indicaciones médicas / procedimientos:</h3>
              <ul className="sd-product__ind-list">
                <li>Incisiones y escisiones quirúrgicas</li>
                <li>Biopsias y ED &amp; C</li>
                <li>Cirugía general que resulta en suturas (es decir, Cirugía de Mohs, cesárea)</li>
                <li>Heridas crónicas (es decir, úlceras venosas, de presión y diabéticas)</li>
                <li>Quemaduras de 1er y 2do grado SIN EPIDERMIS</li>
                <li>Tatuaje médico (es decir, después de la reconstrucción mamaria)</li>
              </ul>
              <h3 className="sd-product__ind-title">Indicaciones / procedimientos cosméticos:</h3>
              <ul className="sd-product__ind-list">
                <li>Cirugía cosmética facial (es decir, blefaroplastia, levantamientos, rinoplastia)</li>
                <li>Cirugía estética corporal (es decir, aumento/reducción de senos, levantamientos, abdominoplastia)</li>
                <li>Eliminación de tatuajes</li>
              </ul>
            </div>
            <button className="sd-product__more" onClick={() => setModalOpen(true)}>
              Obtenga más información sobre la cicatrización de heridas
            </button>
          </div>
        </div>
      </section>

      {/* ── FEATURES ── */}
      <section className="sd-features">
        <div className="sd-features__inner">
          <h2 className="sd-features__title">Un avance en la cicatrización de heridas</h2>
          <div className="sd-features__grid">
            <div className="sd-features__card">
              <div className="sd-features__icon-wrap">
                <img src={`${P}/1-150x150.png`} alt="Inmediatamente después de la cirugía" />
              </div>
              <p>Inmediatamente después de la cirugía</p>
            </div>
            <div className="sd-features__card">
              <div className="sd-features__icon-wrap">
                <img src={`${P}/2-150x150.png`} alt="Tiempo de inactividad reducido" />
              </div>
              <p>Tiempo de inactividad reducido</p>
            </div>
            <div className="sd-features__card">
              <div className="sd-features__icon-wrap">
                <img src={`${P}/3-150x150.png`} alt="Alivio sintomático" />
              </div>
              <p>Alivio sintomático</p>
            </div>
            <div className="sd-features__card">
              <div className="sd-features__icon-wrap">
                <img src={`${P}/4-150x150.png`} alt="Prevención de cicatrices anormales" />
              </div>
              <p>Prevención de cicatrices anormales</p>
            </div>
            <div className="sd-features__card">
              <div className="sd-features__icon-wrap">
                <img src={`${P}/5-150x150.png`} alt="Bacteriostático" />
              </div>
              <p>Bacteriostático: Reduce el riesgo de infección</p>
            </div>
          </div>
          <div className="sd-features__cta">
            <a href="/stratamed/info" className="sd-features__btn">
              Obtenga más información sobre los beneficios de Stratamed
            </a>
          </div>
        </div>
      </section>

      {/* ── INDICATIONS ── */}
      <section className="sd-indications">
        <div className="sd-indications__inner">
          <h2 className="sd-section-title">Indicaciones <span>de uso</span></h2>
          <div className="sd-indications__cols">
            <div className="sd-indications__col">
              <h3>
                <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>
                Indicaciones médicas
              </h3>
              <ul>
                {medicalIndications.map((item, i) => <li key={i}>{item}</li>)}
              </ul>
            </div>
            <div className="sd-indications__col sd-indications__col--cosmetic">
              <h3>
                <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2C9 6.5 4 11 4 15a8 8 0 0 0 16 0c0-4-5-8.5-8-13z"/></svg>
                Indicaciones cosméticas
              </h3>
              <ul>
                {cosmeticIndications.map((item, i) => <li key={i}>{item}</li>)}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section className="sd-how">
        <div className="sd-how__inner">
          <div className="sd-how__text">
            <h2>Cómo actúa <span>Stratamed</span></h2>
            <p>
              Stratamed se seca formando una fina lámina de gel flexible que garantiza un contacto total y constante
              con la herida. Su fórmula semioclusiva favorece un entorno húmedo de cicatrización que acelera la
              reepitelización y reduce el tiempo de recuperación.
            </p>
            <p>
              Al ser transparente, permite monitorear el progreso de la cicatrización sin necesidad de retirar el
              apósito. Protege la piel comprometida de agentes químicos y microbianos, siendo bacteriostático y
              reduciendo el riesgo de infección.
            </p>
            <p>
              Puede aplicarse sobre heridas abiertas y piel comprometida incluso antes de la retirada de suturas,
              adelantando el inicio de la prevención de cicatrices.
            </p>
          </div>
          <div className="sd-how__imgs">
            <img src={`${P}/31.png`} alt="Mecanismo de acción Stratamed" />
          </div>
        </div>
      </section>

      {/* ── APPLICATION ── */}
      <section className="sd-application">
        <div className="sd-application__inner">
          <h2 className="sd-section-title">Aplicación <span>de Stratamed</span></h2>
          <div className="sd-application__grid">
            <div className="sd-application__step">
              <span className="sd-application__num">1</span>
              <div>
                <strong>Preparar la zona</strong>
                <p>Limpiar la herida o zona afectada y secar suavemente el exceso de exudado.</p>
              </div>
            </div>
            <div className="sd-application__step">
              <span className="sd-application__num">2</span>
              <div>
                <strong>Aplicar Stratamed</strong>
                <p>Aplicar una capa fina con el dedo o un aplicador. No frotar ni masajear. Distribuir uniformemente.</p>
              </div>
            </div>
            <div className="sd-application__step">
              <span className="sd-application__num">3</span>
              <div>
                <strong>Dejar secar</strong>
                <p>Sin vendaje secundario: dejar secar 5-6 minutos. Una vez seco puede cubrirse con protector solar, cosméticos o vendajes.</p>
              </div>
            </div>
            <div className="sd-application__step">
              <span className="sd-application__num">4</span>
              <div>
                <strong>Con vendaje secundario</strong>
                <p>Reaplicar al cambiar el vendaje. No es necesario esperar a que seque antes de cubrir con el vendaje secundario.</p>
              </div>
            </div>
          </div>
          <div className="sd-application__note">
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
            Si el lavado elimina el producto, reaplicar inmediatamente. Para mejores resultados, mantener contacto continuo con la piel.
          </div>
        </div>
      </section>

      {/* ── RESULTS ── */}
      <section className="sd-results">
        <div className="sd-results__inner">
          <h2 className="sd-section-title">Resultados <span>clínicos</span></h2>
          <p className="sd-results__sub">
            Tratamiento satisfactorio de heridas post-procedimiento con Stratamed aplicado desde el primer día.
          </p>
          <div className="sd-results__grid">
            <div className="sd-results__item">
              <img src={`${P}/30.jpg`} alt="Resultado clínico Stratamed 1" />
            </div>
            <div className="sd-results__item">
              <img src={`${P}/32.png`} alt="Resultado clínico Stratamed 2" />
            </div>
          </div>
        </div>
      </section>

      {/* ── VIDEOS ── */}
      <section className="sd-videos">
        <div className="sd-videos__inner">
          <h2 className="sd-section-title">Stratamed <span>en acción</span></h2>
          <div className="sd-videos__grid">
            {videos.map((v, i) => (
              <div key={i} className="sd-videos__item">
                <p className="sd-videos__label">{v.label}</p>
                <div className="sd-videos__frame">
                  <iframe
                    src={`https://www.youtube.com/embed/videoseries?list=${v.id}`}
                    title={v.label}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BUY ── */}
      <section className="sd-buy">
        <div className="sd-buy__inner">
          <div className="sd-buy__cols">
            <div className="sd-buy__text">
              <h2 className="sd-buy__title">
                <span className="sd-buy__title-line">Dónde</span>
                <span className="sd-buy__title-line sd-buy__title-line--accent">comprar</span>
              </h2>
              <a href="https://www.farmavazquez.com/stratamed-5-g-605796.html" className="sd-btn sd-btn--lg" target="_blank" rel="noopener noreferrer">
                Comprar Online
              </a>
              <p className="sd-buy__note">*Consulte el prospecto de información al paciente</p>
            </div>
            <div className="sd-buy__imgs">
              <img src="/assets/img/products/stratamed/imagenes stratpharma_Mesa de trabajo 1 copia 5.png" alt="Stratamed gel para cicatrización" />
            </div>
          </div>
        </div>
      </section>

      {/* ── MODAL CICATRIZACIÓN ── */}
      {modalOpen && (
        <div className="sd-modal__overlay" onClick={closeModal} role="dialog" aria-modal="true">
          <div className="sd-modal" onClick={e => e.stopPropagation()}>
            <button className="sd-modal__close" onClick={closeModal} aria-label="Cerrar">
              <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
            </button>
            <div className="sd-modal__body">
              <h2 className="sd-modal__title">Cicatrización de heridas <span>con Stratamed</span></h2>

              <section className="sd-modal__section">
                <p>Stratamed está indicado para los tipos más comunes de procedimientos médicos y estéticos.</p>
                <p>Tras los procedimientos médicos, el objetivo principal de los médicos es lograr una epitelización rápida de la piel. Conseguir una cicatrización rápida de las heridas no solo es clave para prevenir o minimizar la formación de cicatrices anormales, sino también para prevenir infecciones.</p>
              </section>

              <section className="sd-modal__section">
                <h3>Heridas agudas y superficiales</h3>
                <p>Las heridas agudas más comunes incluyen lesiones como cortes y laceraciones, abrasiones, quemaduras (1.er y 2.o grado), mordeduras e incisiones quirúrgicas.</p>
                <p>Cuando la barrera cutánea está dañada, la herida se vuelve vulnerable a la infección. La humedad, el calor y los nutrientes en el lugar de la herida crean condiciones ideales para el crecimiento microbiano. Como resultado, <em>"las infecciones pueden producirse en aproximadamente el 5,6% al 26% de todas las heridas."</em></p>
                <img src={`${P}/41.png`} className="sd-modal__img" alt="Heridas agudas y superficiales" />
              </section>

              <section className="sd-modal__section">
                <h3>Factores de riesgo en la cicatrización</h3>
                <ul className="sd-modal__list">
                  <li>La infección es una de las principales razones por las que las heridas no se curan adecuadamente. Si bien el objetivo del uso de antibióticos es tratar o prevenir la infección, no hay evidencia que respalde el uso de antibióticos para heridas no infectadas.<sup>13</sup></li>
                  <li>La resistencia a los antimicrobianos está aumentando rápidamente en todo el mundo debido al uso excesivo de antibióticos, muchos de los cuales son inapropiados, lo que lleva a una morbilidad y mortalidad significativas.<sup>3</sup></li>
                  <li>Los efectos secundarios de los antibióticos tópicos pueden incluir dermatitis alérgica de contacto, condritis inflamatoria, anafilaxia y síndrome de Stevens-Johnson.<sup>3</sup></li>
                  <li>Stratamed es estéril, bacteriostático (evita eficazmente la infección de la herida por bacterias) y no favorece el crecimiento bacteriano.</li>
                </ul>
                <img src={`${P}/45.png`} className="sd-modal__img" alt="Factores de riesgo" />
              </section>

              <section className="sd-modal__section">
                <p>Una herida es un tipo de lesión en la que la piel está dañada (profunda o superficialmente). Inmediatamente después de que la piel se lesione, responde con el inicio de un proceso de curación de heridas.</p>
                <p>El tiempo de curación de la piel difiere y depende de varios factores, incluyendo el tipo de lesión, la edad y el estado general de salud. Es importante comenzar con el cuidado adecuado de la herida lo antes posible para lograr el mejor resultado posible, reducir el riesgo de infección y acortar el tiempo de recuperación.</p>
                <p><strong>Nosotros reducimos el tiempo de curación a la mitad.</strong></p>
              </section>

              <section className="sd-modal__section">
                <h3>¿Sabías que?</h3>
                <p><em>"Una epitelización retrasada más allá de los 10 a 14 días aumenta drásticamente la incidencia de cicatrices hipertróficas."</em></p>
                <p>La apariencia y los efectos secundarios de las cicatrices pueden mejorar significativamente <em>"si la prevención comienza inmediatamente después de la sutura o una vez que se ha producido la herida."</em></p>
                <p>Existen factores de riesgo que el médico no puede controlar, como <em>"el cumplimiento del cuidado de la herida por parte del paciente, el riesgo de infección y otras complicaciones en la cicatrización."</em></p>
              </section>

              <section className="sd-modal__section sd-modal__section--highlight">
                <h3>Stratamed® — Un avance en la cicatrización de heridas</h3>
                <p>Stratamed es un apósito avanzado para heridas para su uso inmediatamente después de procedimientos médicos y estéticos, en heridas agudas o crónicas y superficies cutáneas comprometidas.</p>
                <p><em>"Stratamed está clínicamente probado para cicatrizar heridas 2 veces más rápido en comparación con el tratamiento estándar en quemaduras, y reduce el tiempo de inactividad."</em></p>
                <ul className="sd-modal__list">
                  <li>Permite que la prevención de cicatrices anormales comience inmediatamente después de la sutura o una vez producida la herida</li>
                  <li>Proporciona alivio sintomático del picor, sensación de ardor e incomodidad, y reduce el enrojecimiento y la decoloración asociados a la piel dañada</li>
                  <li>Es una alternativa viable a los antibióticos tópicos en la prevención de infecciones sin riesgo de dermatitis de contacto</li>
                  <li>Un tubo de Stratamed reemplaza la necesidad de múltiples productos de cuidado de heridas, como apósitos tradicionales, hidrogeles para la cicatrización húmeda y antibióticos tópicos</li>
                  <li>Stratamed es un Dispositivo Médico</li>
                </ul>
                <p className="sd-modal__footnote">*Tratamiento estándar: apósitos de plata, colagenasas, alginatos</p>
              </section>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  )
}
