import { useState, useRef, useEffect } from 'react'
import './HowToBuy.scss'

const steps = [
  { number: 1, text: 'Ingresa en la sección "Nuestros productos" de la web y elige el producto que deseas comprar.' },
  { number: 2, text: 'Haz clic en "Comprar producto"; serás redirigido a la tienda online de Stratpharma.' },
  { number: 3, text: 'Selecciona tu idioma y el país de entrega.' },
  { number: 4, text: 'Añade el producto a tu carrito de la compra.' },
  { number: 5, text: 'Haz clic en el carrito para ver tu pedido.' },
  { number: 6, text: 'Introduce el código del 40% de descuento: 854362' },
  { number: 7, text: 'Completa tus datos de compra.' },
  { number: 8, text: 'Haz clic en "Realizar compra" y sigue los pasos de pago.' }
]

export default function HowToBuy() {
  const [modalOpen, setModalOpen] = useState(false)
  const modalVideoRef = useRef<HTMLVideoElement>(null)

  const openVideoModal = () => setModalOpen(true)
  const closeVideoModal = () => {
    setModalOpen(false)
    if (modalVideoRef.current) {
      modalVideoRef.current.pause()
      modalVideoRef.current.currentTime = 0
    }
  }

  useEffect(() => {
    if (modalOpen && modalVideoRef.current) {
      modalVideoRef.current.play().catch(() => {})
    }
  }, [modalOpen])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeVideoModal()
    }
    if (modalOpen) document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [modalOpen])

  return (
    <section id="como-comprar" className="how-to-buy">
      <div className="how-to-buy__banner">
        <h2 className="how-to-buy__banner-title">PASOS PARA REALIZAR LA COMPRA</h2>
      </div>

      <div className="how-to-buy__content">
        <div className="how-to-buy__content-inner">
          <div className="how-to-buy__grid">
            <div className="how-to-buy__image">
              <div
                className="how-to-buy__video-card how-to-buy__video-card--clickable"
                role="button"
                tabIndex={0}
                aria-expanded={modalOpen}
                aria-describedby="how-to-buy-video-hint"
                aria-label="Reproducir video explicativo"
                onClick={openVideoModal}
                onKeyDown={e => {
                  if (e.key === 'Enter') openVideoModal()
                  if (e.key === ' ') { e.preventDefault(); openVideoModal() }
                }}
              >
                <video
                  src="/assets/img/video-explicativo.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="metadata"
                  controlsList="nodownload"
                  onContextMenu={e => e.preventDefault()}
                />
              </div>
              <p id="how-to-buy-video-hint" className="how-to-buy__video-hint">
                Haz clic sobre el vídeo para verlo más grande.
              </p>
            </div>

            <div className="how-to-buy__info">
              <div className="how-to-buy__steps">
                {steps.map(step => (
                  <div key={step.number} className="how-to-buy__step">
                    <span className="how-to-buy__step-number">{step.number}</span>
                    <div className="how-to-buy__step-body">
                      <h4 className="how-to-buy__step-title">PASO {step.number}</h4>
                      <p className="how-to-buy__step-text">{step.text}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="how-to-buy__cta">
                <a
                  href="https://es.stratpharma-shop.com/shop/"
                  className="how-to-buy__btn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  COMPRAR PRODUCTO
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {modalOpen && (
        <div
          className="how-to-buy__modal-backdrop"
          onClick={closeVideoModal}
          role="presentation"
        >
          <div
            className="how-to-buy__modal-dialog"
            role="dialog"
            aria-modal={true}
            aria-labelledby="how-to-buy-modal-title"
            onClick={e => e.stopPropagation()}
          >
            <h3 id="how-to-buy-modal-title" className="how-to-buy__modal-title">
              Video explicativo
            </h3>
            <button
              type="button"
              className="how-to-buy__modal-close"
              onClick={closeVideoModal}
              aria-label="Cerrar"
            >
              ×
            </button>
            <video
              ref={modalVideoRef}
              className="how-to-buy__modal-video"
              src="/assets/img/video-explicativo2.mp4"
              controls
              playsInline
              preload="metadata"
              controlsList="nodownload"
              onContextMenu={e => e.preventDefault()}
            />
          </div>
        </div>
      )}
    </section>
  )
}
