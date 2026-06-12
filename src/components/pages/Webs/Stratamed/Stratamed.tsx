import { useState, useEffect, useCallback } from 'react'
import './Stratamed.scss'
import Navbar from '../../../common/Navbar/Navbar'
import Footer from '../../../common/Footer/Footer'

const P = '/assets/img/products/stratamed'

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
                <img src={`${P}/1-150x150.png`} alt="Estéril" />
              </div>
              <p>Estéril (apto para su uso inmediatamente después de la cirugía dentro del quirófano)</p>
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
        </div>
      </section>

      {/* ── PROMO ── */}
      <section className="sd-promo">
        <div className="sd-promo__inner">
          <div className="sd-promo__text">
            <span className="sd-promo__label">Stratamed</span>
            <h2 className="sd-promo__title">Para una curación más rápida y una prevención temprana de cicatrices anormales</h2>
            <p><strong>Un tubo de Stratamed reemplaza la necesidad de múltiples productos para el cuidado de heridas,</strong> como apósitos tradicionales, hidrogeles para la cicatrización de heridas húmedas y antibióticos tópicos utilizados para la prevención de infecciones.</p>
            <p>Stratamed es un <strong>dispositivo médico de clase IIa.</strong></p>
          </div>
          <div className="sd-promo__img">
            <img src={`${P}/stratamed00.jpeg`} alt="Stratamed producto" />
          </div>
        </div>
      </section>

      {/* ── BEFORE/AFTER ── */}
      <section className="sd-beforeafter">
        <div className="sd-beforeafter__inner">
          <h2 className="sd-beforeafter__title">Protección invisible, resultados <strong>visibles</strong></h2>
          <div className="sd-beforeafter__cols">
            <div className="sd-beforeafter__col">
              <span className="sd-beforeafter__tag">Cirugía de Mohs - labio</span>
              <p>Tratamiento en monoterapia con <strong>Stratamed durante 2 meses.</strong></p>
            </div>
            <div className="sd-beforeafter__col">
              <span className="sd-beforeafter__tag">Incisión lineal - cabeza</span>
              <p>Tratamiento en monoterapia con <strong>Stratamed durante 2 meses.</strong></p>
            </div>
          </div>
          <img src={`${P}/antes-despues.png`} className="sd-beforeafter__img" alt="Antes y después con Stratamed" />
        </div>
      </section>

      {/* ── EXPERTS ── */}
      <section className="sd-experts">
        <div className="sd-experts__inner">
          <h2 className="sd-experts__title">Opiniones de expertos</h2>
          <p className="sd-experts__sub">Testimonios de los principales profesionales médicos que confían en la eficacia de Stratamed, para apoyar la cicatrización efectiva de heridas en su práctica clínica.</p>
          <div className="sd-experts__grid">
            <div className="sd-experts__card">
              <p className="sd-experts__quote">"Creemos que este gel fue una de las principales razones por las que todos los pacientes tuvieron mejoría y curación de las heridas de su cuero cabelludo después de un período prolongado de falta de curación. Stratamed para nuestros pacientes utiliza las propiedades únicas de los geles formadores de película en una formulación que puede ser ideal para estas heridas."</p>
              <div className="sd-experts__doctor">
                <img src={`${P}/Doctor-Benedetto.png`} alt="Profesor Anthony Benedetto" className="sd-experts__photo" />
                <div>
                  <strong className="sd-experts__name">Profesor Anthony Benedetto</strong>
                  <span className="sd-experts__role">MD, DO, FACP,</span>
                  <span className="sd-experts__location">Filadelfia, EE. UU.</span>
                </div>
              </div>
            </div>

            <div className="sd-experts__card sd-experts__card--light">
              <p className="sd-experts__quote">"Usamos Stratamed inmediatamente después de terminar con nuestras suturas en la línea de contacto entre los dos bordes de la herida. Esto proporciona una bonita envoltura para proteger cualquier herida en su fase de reparación más temprana y delicada. Construye un entorno protegido para que comience la curación."</p>
              <div className="sd-experts__doctor">
                <img src={`${P}/Doctor-Marini.png`} alt="Dr. Leonardo Marini" className="sd-experts__photo" />
                <div>
                  <strong className="sd-experts__name">Dr. Leonardo Marini</strong>
                  <span className="sd-experts__role">Centro del dermatologo,</span>
                  <span className="sd-experts__location">Trieste, Italia</span>
                </div>
              </div>
            </div>

            <div className="sd-experts__card">
              <p className="sd-experts__quote">"Stratamed es el primer agente oclusivo de película que realmente podemos poner en las heridas inmediatamente, y nunca tuvimos eso. Así que incluso si alguien tiene una herida abierta o una herida cerrada con suturas, no tenemos que esperar a que salgan las suturas."</p>
              <div className="sd-experts__doctor">
                <img src={`${P}/Doctor-Gold.png`} alt="Dr. Michael Gold" className="sd-experts__photo" />
                <div>
                  <strong className="sd-experts__name">Dr. Michael Gold</strong>
                  <span className="sd-experts__role">MD, VAAD,</span>
                  <span className="sd-experts__location">Nashville, TN, EE. UU.</span>
                </div>
              </div>
            </div>
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
              <h2 className="sd-modal__title">Stratamed está indicado para los tipos más comunes de <span>procedimientos médicos y cosméticos:</span></h2>
              <p className="sd-modal__subtitle">Después de los procedimientos médicos, el enfoque principal para los médicos es lograr una rápida epitelización de la piel. Lograr una cicatrización rápida de heridas no solo es clave para prevenir o minimizar la formación anormal de cicatrices, sino también para prevenir infecciones.</p>

              <section className="sd-modal__section">
                <h3>Heridas agudas y superficiales</h3>
                <ul className="sd-modal__list">
                  <li>Las heridas agudas más comunes incluyen lesiones como cortes y laceraciones, abrasiones, quemaduras (1er y 2do grado), mordeduras e incisiones quirúrgicas.</li>
                  <li>Cuando la barrera cutánea se daña, la herida se vuelve vulnerable a la infección. La humedad, el calor y los nutrientes en el sitio de la herida crean condiciones ideales para el crecimiento microbiano. Como resultado, las infecciones pueden ocurrir en ~5,6 % a 26 % de todas las heridas.</li>
                </ul>
                <img src={`${P}/41.png`} className="sd-modal__img" alt="Heridas agudas y superficiales" />
              </section>

              <section className="sd-modal__section">
                <h3>Factores de riesgo en la cicatrización</h3>
                <ul className="sd-modal__list">
                  <li>La infección es una de las principales razones por las que las heridas no se curan adecuadamente. Si bien el objetivo del uso de antibióticos es tratar o prevenir la infección, no hay evidencia que respalde el uso de antibióticos para heridas no infectadas.</li>
                  <li>La resistencia a los antimicrobianos está aumentando rápidamente en todo el mundo debido al uso excesivo de antibióticos, muchos de los cuales son inapropiados, lo que lleva a una morbilidad y mortalidad significativas.</li>
                  <li>Los efectos secundarios de los antibióticos tópicos pueden incluir dermatitis alérgica de contacto, condritis inflamatoria, anafilaxia y síndrome de Stevens-Johnson.</li>
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
                <h3>¿Lo sabías?</h3>
                <div className="sd-modal__cards">
                  <div className="sd-modal__card">La epitelización tardía más allá de 10 a 14 días aumenta drásticamente la incidencia de cicatrices hipertróficas.</div>
                  <div className="sd-modal__card">La apariencia y los efectos secundarios de las cicatrices pueden mejorar significativamente si la prevención comienza inmediatamente después de la sutura o una vez que se ha producido una herida.</div>
                </div>
                <p>Hay algunos factores de riesgo que el médico no puede controlar, como el cumplimiento del cuidado de heridas del paciente, el riesgo de infección y otras complicaciones de cicatrización de heridas.</p>
                <ul className="sd-modal__list">
                  <li>La clave del éxito del tratamiento con Stratamed es que esté en permanente contacto con la herida/piel 24/7, para lo cual tienes que ponértelo 2 veces al día, mañana y noche, o cada vez que laves.</li>
                  <li>Mínimo entre 30 y 60 días de tratamiento (1-2 meses), y luego otro par de meses con Strata-triz para que no quede ninguna marca.</li>
                </ul>
              </section>

              <section className="sd-modal__section sd-modal__section--blue-cards">
                <h3>Stratamed® — Un avance en la cicatrización de heridas</h3>
                <div className="sd-modal__blue-card">Stratamed es un apósito avanzado para heridas para su uso inmediatamente después de procedimientos médicos y estéticos, en heridas agudas o crónicas y superficies de piel comprometidas.</div>
                <div className="sd-modal__blue-card">Está clínicamente probado que Stratamed cura heridas 2 veces más rápido en comparación con el tratamiento estándar* en quemaduras y reduce el tiempo de inactividad.</div>
                <div className="sd-modal__blue-card">Stratamed permite que la prevención de cicatrices anormales comience inmediatamente después de la sutura o una vez que se ha producido una herida.</div>
                <div className="sd-modal__blue-card">Stratamed proporciona un alivio sintomático de la picazón, la sensación de ardor y la incomodidad, reduce el enrojecimiento y la decoloración asociados con la piel dañada.</div>
                <div className="sd-modal__blue-card">Stratamed es una alternativa viable a los antibióticos tópicos en la prevención de infecciones sin riesgo de dermatitis de contacto.</div>
                <div className="sd-modal__blue-card">Un tubo de Stratamed reemplaza la necesidad de múltiples productos para el cuidado de heridas, como apósitos tradicionales, hidrogeles para la cicatrización de heridas húmedas y antibióticos tópicos utilizados para la prevención de infecciones.</div>
                <div className="sd-modal__blue-card">Stratamed es un Producto Sanitario, registrado en la FDA, EMA y TGA.</div>
                <p className="sd-modal__footnote">*Tratamiento estándar: apósitos de plata, colagenasas, alginatos</p>
                <img src={`${P}/imagenes stratpharma_Mesa de trabajo 1 copia 7.png`} className="sd-modal__img sd-modal__img--right" alt="Stratamed" />
              </section>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  )
}
