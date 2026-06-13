import { useState, useEffect, useCallback } from 'react'
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
    text: 'Los estudios publicados y documentados en revistas médicas demuestran que entre el 65 y 75% de las mujeres embarazadas tratadas con stratamark no han desarrollado ninguna estrías durante el embarazo. El 25 - 30% restante las han desarrollado tan leves, que con 3 meses más de tratamiento las han curado completamente.',
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
  const [modalOpen, setModalOpen] = useState(false)

  useEffect(() => {
    const t = setInterval(() => setActiveSlide(p => (p + 1) % slides.length), 8000)
    return () => clearInterval(t)
  }, [])

  const closeModal = useCallback(() => setModalOpen(false), [])

  useEffect(() => {
    if (!modalOpen) return
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') closeModal() }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [modalOpen, closeModal])

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
            <button className="sm-btn" onClick={() => setModalOpen(true)}>Leer Más</button>
          </div>
          <div className="sm-product__imgs">
            <img src="/assets/img/products/stratamark/imagenes stratpharma-17.png" alt="Stratamark" className="sm-product__pack" />
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
              <div className="sm-ba__photo">
                <img src={`${A}/BEFORE.jpg`} alt="Antes del tratamiento con Stratamark" />
                <span className="sm-ba__photo-label">Antes</span>
              </div>
              <div className="sm-ba__photo">
                <img src={`${A}/AFTER.jpg`} alt="Después del tratamiento con Stratamark" />
                <span className="sm-ba__photo-label">Después</span>
              </div>
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

      {/* ── MODAL ── */}
      {modalOpen && (
        <div className="sm-modal__overlay" onClick={closeModal} role="dialog" aria-modal="true">
          <div className="sm-modal" onClick={e => e.stopPropagation()}>
            <button className="sm-modal__close" onClick={closeModal} aria-label="Cerrar">
              <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
              </svg>
            </button>

            <div className="sm-modal__body">
              <h2 className="sm-modal__title">Stratamark <span>Información del producto</span></h2>

              {/* Qué es */}
              <section className="sm-modal__section">
                <h3>¿Qué es Stratamark?</h3>
                <p>Stratamark es un novedoso producto médico, específicamente diseñado y clínicamente probado para la prevención y el tratamiento de las estrías (Striae Distensae). Stratamark se seca formando una fina lámina de gel flexible y protectora, permeable a los gases e impermeable al agua. No penetra por debajo del nivel de la capa superior de la piel (estrato córneo).</p>
              </section>

              {/* Características */}
              <section className="sm-modal__section">
                <h3>Características principales</h3>
                <div className="sm-modal__cards">
                  {[
                    { title: 'Non-reactive', desc: 'Apto para embarazadas, madres lactantes, niños y personas con piel sensible, ya que no contiene alcohol, fragancias ni parabenos. Indicado para mujeres embarazadas desde la semana 10 / 13.' },
                    { title: 'Protección', desc: 'Protege de agentes irritantes e invasión microbiana, reduciendo el riesgo de dermatitis de contacto.' },
                    { title: 'Hidratación', desc: 'Semioclusiva y permeable a gases; permite que la piel respire y se mantenga hidratada.' },
                    { title: 'Película flexible', desc: 'Forma una película fina y flexible que mantiene contacto constante con la piel.' },
                    { title: 'Modulación', desc: 'Influye en la cascada de señalización epidérmico-dérmica y en la producción de fibroblastos.' },
                    { title: 'Fácil de usar', desc: 'Aplicación cómoda y sencilla, una vez al día o después de cada lavado.' },
                  ].map((c, i) => (
                    <div key={i} className="sm-modal__card">
                      <span className="sm-modal__card-title">{c.title}</span>
                      <p className="sm-modal__card-desc">{c.desc}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Qué puede hacer */}
              <section className="sm-modal__section">
                <h3>¿Qué puede hacer Stratamark por mi?</h3>
                <p>Stratamark es un producto sanitario innovador, específicamente diseñado y clínicamente probado para la prevención y el tratamiento de las estrías (Striae Distensae).</p>
                <p>Stratamark es el único producto tópico con evidencia clínica probada.</p>
                <div className="sm-modal__imgs-stack">
                  <img src="/assets/img/products/stratamark/que-puede-hacer-1.png" alt="Qué puede hacer Stratamark 1" />
                  <img src="/assets/img/products/stratamark/que-puede-hacer-2.png" alt="Qué puede hacer Stratamark 2" />
                </div>
              </section>

              {/* Cómo usar */}
              <section className="sm-modal__section">
                <h3>Cómo utilizar <span className="sm-modal__h3-accent">Stratamark</span></h3>
                <p>Se recomienda utilizar Stratamark desde el inicio del segundo trimestre (13 semanas) o al primer signo de estría.</p>
                <p>Puede aplicar Stratamark en todas las zonas del cuerpo, incluidas las nalgas, el abdomen, los muslos, los senos y la espalda.</p>
                <div className="sm-modal__how-grid">
                  <div className="sm-modal__how-item">
                    <img src="/assets/img/products/stratamark/number-1.png" alt="Una vez al día" />
                    <strong>Una vez al día</strong>
                    <p>Stratamark es fácil de usar: se aplica una vez al día o después de cada lavado.</p>
                  </div>
                  <div className="sm-modal__how-item">
                    <img src="/assets/img/products/stratamark/24-7.png" alt="24/7" />
                    <strong>24/7</strong>
                    <p>Para obtener los mejores resultados, Stratamark debe estar en contacto continuo con la piel (24 horas al día/7 días a la semana).</p>
                  </div>
                </div>
              </section>

              {/* Aplicación */}
              <section className="sm-modal__section">
                <h3>Aplicación <span className="sm-modal__h3-accent">de Stratamark</span></h3>
                <div className="sm-modal__app-steps">
                  <div className="sm-modal__app-step">
                    <img src="/assets/img/products/stratamark/step1.png" alt="Paso 1" className="sm-modal__app-img" />
                    <div className="sm-modal__app-text">
                      <strong>Paso 1: Prepara tu piel</strong>
                      <p>Asegúrese de que su piel está limpia y seca.</p>
                    </div>
                  </div>
                  <div className="sm-modal__app-step">
                    <img src="/assets/img/products/stratamark/step2.png" alt="Paso 2" className="sm-modal__app-img" />
                    <div className="sm-modal__app-text">
                      <strong>Paso 2: Aplicar Stratamark</strong>
                      <p>Aplique una capa muy fina de Stratamark en las zonas pertinentes con las yemas de los dedos y distribuya uniformemente. Stratamark no penetra en la piel.</p>
                      <p>Normalmente con una gota del tamaño de dos granos de arroz extendiéndolo nos daría para cubrir lo que sería el tamaño del dorso de una mano.</p>
                    </div>
                  </div>
                  <div className="sm-modal__app-step">
                    <img src="/assets/img/products/stratamark/step3.png" alt="Paso 3" className="sm-modal__app-img" />
                    <div className="sm-modal__app-text">
                      <strong>Paso 3: Dejar secar el gel</strong>
                      <p>Si se aplica correctamente, Stratamark debería estar seco en 5-6 minutos.</p>
                    </div>
                  </div>
                  <div className="sm-modal__app-step sm-modal__app-step--note">
                    <img src="/assets/img/products/stratamark/step3.png" alt="Nota" className="sm-modal__app-img" />
                    <div className="sm-modal__app-text">
                      <p>Si tarda más en secarse, probablemente ha aplicado demasiado. <strong>No retires, aconsejamos que lo extiendas más y amplíes la zona para hacer la capa más fina y que la próxima vez pongas menos cantidad.</strong></p>
                    </div>
                  </div>
                  <div className="sm-modal__app-step">
                    <img src="/assets/img/products/stratamark/step4.png" alt="Paso 4" className="sm-modal__app-img" />
                    <div className="sm-modal__app-text">
                      <strong>Paso 4: ¡Listo para salir!</strong>
                      <p>Una vez seco, Stratamark puede cubrirse con ropa, crema solar o cosméticos.</p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Eliminación */}
              <section className="sm-modal__section">
                <h3>Eliminación <span className="sm-modal__h3-accent">de la marca de estratos</span></h3>
                <div className="sm-modal__app-steps">
                  <div className="sm-modal__app-step">
                    <img src="/assets/img/products/stratamark/remove-hands.png" alt="Eliminar de la piel" className="sm-modal__app-img" />
                    <div className="sm-modal__app-text">
                      <strong>Eliminar de la piel</strong>
                      <p>El exceso de Stratamark en sus manos se puede eliminar fácilmente lavándolas con jabón líquido y agua tibia. Repita si es necesario.</p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Duración */}
              <section className="sm-modal__section">
                <h3>Duración recomendada <span className="sm-modal__h3-accent">del tratamiento</span></h3>
                <p>Stratamark está disponible en dos tamaños de envase.</p>
                <div className="sm-modal__duration-grid">
                  <div className="sm-modal__duration-item">
                    <img src="/assets/img/products/stratamark/tube.png" alt="Stratamark 20g" />
                    <strong>Stratamark 20g</strong>
                    <p>Contiene suficiente gel para aproximadamente un mes de tratamiento en las últimas fases del embarazo.</p>
                  </div>
                  <div className="sm-modal__duration-item">
                    <img src="/assets/img/products/stratamark/50g.png" alt="Stratamark 50g" />
                    <strong>Stratamark 50g</strong>
                    <p>Contiene suficiente gel para aproximadamente dos meses de tratamiento durante el embarazo.</p>
                  </div>
                </div>
                <p className="sm-modal__duration-note">Al principio del embarazo o después del parto, un tubo durará más debido a la menor superficie de aplicación.</p>
              </section>

              {/* Prevención embarazo */}
              <section className="sm-modal__section">
                <h3>Prevención y tratamiento <span className="sm-modal__h3-accent">de estrías durante el embarazo</span></h3>
                <div className="sm-modal__prevention">
                  <img src="/assets/img/products/stratamark/treatment.jpg" alt="Prevención de estrías durante el embarazo" className="sm-modal__prevention-img" />
                  <ul className="sm-modal__prevention-list">
                    <li>Se recomienda utilizar Stratamark desde el inicio del segundo trimestre o al primer signo de estrías.</li>
                    <li>Se necesitan aproximadamente 3 tubos de Stratamark 50g para un período de tratamiento completo hasta el nacimiento de su hijo.</li>
                    <li>El tratamiento debe continuar tras el nacimiento de su hijo durante un mínimo de 60 a 90 días.</li>
                  </ul>
                </div>
                <p className="sm-modal__prevention-note">Stratamark debe aplicarse una vez al día (o después de cada lavado) para que permanezca en contacto continuo 24 horas al día / 7 días a la semana.</p>
              </section>

              {/* Tratamiento estrías existentes */}
              <section className="sm-modal__section">
                <h3>Tratamiento de estrías <span className="sm-modal__h3-accent">existentes</span></h3>

                <div className="sm-modal__estrias-sub">
                  <h4 className="sm-modal__estrias-title sm-modal__estrias-title--red">Estrías rojas</h4>
                  <ul className="sm-modal__prevention-list">
                      <li>Stratamark debe utilizarse durante al menos 4-5 meses (rojas) o mínimo 4 meses.</li>
                      <li>Se recomienda su uso continuado hasta que no se observe ninguna mejoría.</li>
                      <li>Las estrías más severas pueden necesitar un tratamiento más prolongado, dependiendo del tipo de piel que tengas.</li>
                      <li>Stratamark debe aplicarse una vez al día (o después de cada lavado) para que permanezca en contacto continuo 24 horas al día / 7 días a la semana.</li>
                  </ul>
                </div>

                <div className="sm-modal__estrias-sub">
                  <h4 className="sm-modal__estrias-title sm-modal__estrias-title--white">Estrías blancas</h4>
                  <p className="sm-modal__prevention-text">Stratamark ha demostrado en ensayos clínicos una mejoría estética de las estrías blancas de alrededor del 70%. La estría de color blanco nos indica que ya lleva tiempo contigo y te aconsejamos lo siguiente:</p>
                  <p className="sm-modal__prevention-text">Acude a una clínica dermatológica de prestigio o estética con profesionales titulados o de tu confianza que traten las estrías blancas con distintos láseres tipo CO2 + Stratamark.</p>
                  <p className="sm-modal__prevention-text">Usar Stratamark acto seguido una vez finalizada la sesión de láser (o procedimiento). Una estría blanca tras la primera sesión de láser se va a volver de un color rojo intenso, eso es normal y con Stratamark en tres días lo tendrás del mismo color de la piel.</p>
                  <p className="sm-modal__prevention-text">El número de sesiones recomendadas con láser CO2 para el tratamiento de las estrías dependerá de lo que tu dermatólogo o médico estético considere oportuno para tu tipo de piel y donde tienes la estría. Sigue siempre sus consejos, pero no dejes de utilizar Stratamark todos los días las 24h tras el procedimiento láser.</p>
                  <img src="/assets/img/products/stratamark/tratamiento-estrias.png" alt="Tratamiento estrías blancas" className="sm-modal__estrias-img" />
                </div>
              </section>


              {/* Descargas */}
              <section className="sm-modal__section">
                <h3>Descargas</h3>
                <div className="sm-modal__dl">
                  <img src="/assets/img/products/stratamark/Screen-Shot-2019-05-17-at-10.51.59.png" alt="Folleto para pacientes" className="sm-modal__dl-img" />
                  <div className="sm-modal__dl-body">
                    <span className="sm-modal__dl-tag">PDF</span>
                    <strong>Folleto para pacientes</strong>
                    <p>El producto médico para la prevención y el tratamiento de las estrías</p>
                    <a href="#" className="sm-modal__dl-btn">
                      <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                        <polyline points="7 10 12 15 17 10"/>
                        <line x1="12" y1="15" x2="12" y2="3"/>
                      </svg>
                      Descargar
                    </a>
                  </div>
                </div>
              </section>

              {/* Precauciones */}
              <section className="sm-modal__section sm-modal__section--last">
                <h3>Precauciones</h3>
                <ul className="sm-modal__list">
                  <li>Sólo para uso externo.</li>
                  <li>Stratamark no debe aplicarse en quemaduras de tercer grado ni en heridas abiertas.</li>
                  <li>Stratamark no debe ponerse en contacto con las mucosas ni con los ojos.</li>
                  <li>Stratamark no debe aplicarse sobre otros tratamientos cutáneos sin el consejo de su médico.</li>
                  <li>El producto es estéril y bacteriostático (no permite que se infecte la zona por bacterias).</li>
                  <li>En caso de irritación, interrumpa su uso y consulte a su médico.</li>
                  <li>Mantener fuera del alcance de los niños.</li>
                  <li>No utilizar después de la fecha de caducidad (EXP) indicada en el tubo.</li>
                </ul>
              </section>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  )
}
