import { useState, useEffect, useRef } from 'react'
import { useParams, Link } from 'react-router-dom'
import { productsBySlug, buildGalleryItems, type ProductGalleryItem } from '../../../data/products'
import './ProductDetail.scss'

export default function ProductDetail() {
  const { slug } = useParams<{ slug: string }>()
  const product = slug ? productsBySlug[slug] ?? null : null

  const [galleryItems, setGalleryItems] = useState<ProductGalleryItem[]>([])
  const [currentItem, setCurrentItem] = useState<ProductGalleryItem | null>(null)
  const [isPaused, setIsPaused] = useState(false)
  const [lightboxImage, setLightboxImage] = useState<string | null>(null)
  const currentIndexRef = useRef(0)

  useEffect(() => {
    if (product) {
      const items = buildGalleryItems(product)
      setGalleryItems(items)
      setCurrentItem(items[0] ?? null)
      currentIndexRef.current = 0
    } else {
      setGalleryItems([])
      setCurrentItem(null)
      currentIndexRef.current = 0
    }
  }, [product])

  useEffect(() => {
    if (galleryItems.length <= 1 || isPaused) return
    const interval = setInterval(() => {
      currentIndexRef.current = (currentIndexRef.current + 1) % galleryItems.length
      setCurrentItem(galleryItems[currentIndexRef.current])
    }, 3000)
    return () => clearInterval(interval)
  }, [galleryItems, isPaused])

  const selectItem = (item: ProductGalleryItem, index: number) => {
    currentIndexRef.current = index
    setCurrentItem(item)
    setIsPaused(true)
    setTimeout(() => setIsPaused(false), 6000)
  }

  const isCurrentItem = (item: ProductGalleryItem) => {
    if (!currentItem) return false
    if (item.type !== currentItem.type) return false
    return item.type === 'sheet'
      ? item.pdfSrc === currentItem.pdfSrc
      : item.src === currentItem.src
  }

  if (!product) {
    return (
      <section className="product-detail">
        <div className="product-detail__content product-detail__not-found-wrap">
          <div className="product-detail__not-found">
            {!slug
              ? <p>Selecciona un producto desde la landing para ver su información.</p>
              : <p>No hay información disponible para este producto.</p>
            }
            <Link to="/" className="product-detail__btn">Volver a la landing</Link>
          </div>
        </div>
      </section>
    )
  }

  const isSheet = currentItem?.type === 'sheet'
  const currentMainImage = currentItem?.src ?? ''
  const isZoomable = (currentMainImage || product.mainImage).endsWith('/roll-up.png')
  const titleNoMark = product.content.title.replace('®', '')
  const hasMark = product.content.title.includes('®')

  return (
    <section className="product-detail">
      <div className="product-detail__content">
        <div className="product-detail__content-inner">
          <div className="product-detail__grid">
            {/* Columna izquierda: imágenes */}
            <div className="product-detail__images">
              {!isSheet ? (
                <div className="product-detail__main-image-wrap">
                  <a
                    className="product-detail__main-image-link"
                    href={product.shopUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Comprar ${product.content.title}`}
                  >
                    <div className="product-detail__main-image-card">
                      <img
                        src={currentMainImage || product.mainImage}
                        alt={product.content.title}
                        decoding="async"
                      />
                    </div>
                  </a>
                  {isZoomable && (
                    <button
                      type="button"
                      className="product-detail__zoom-btn"
                      onClick={() => setLightboxImage(currentMainImage || product.mainImage)}
                      aria-label={`Ampliar imagen de ${product.content.title}`}
                    >
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" focusable={false} aria-hidden="true">
                        <circle cx="11" cy="11" r="7" />
                        <line x1="21" y1="21" x2="16.65" y2="16.65" />
                        <line x1="11" y1="8" x2="11" y2="14" />
                        <line x1="8" y1="11" x2="14" y2="11" />
                      </svg>
                    </button>
                  )}
                </div>
              ) : (
                <a
                  className="product-detail__main-image-link"
                  href={currentItem?.pdfSrc}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Ver ficha técnica de ${product.content.title}`}
                >
                  <div className="product-detail__main-image-card product-detail__main-image-card--sheet">
                    <div className="product-detail__pdf-preview">
                      <img
                        src={currentMainImage}
                        alt={`Ficha técnica de ${product.content.title}`}
                        decoding="async"
                      />
                      <span className="product-detail__pdf-open-indicator" aria-hidden="true">
                        FICHA TÉCNICA
                        <span className="product-detail__pdf-open-icon">
                          <svg viewBox="0 0 24 24" focusable={false} aria-hidden="true">
                            <path d="M14 3h7v7h-2V6.41l-9.29 9.3-1.42-1.42 9.3-9.29H14V3z" />
                            <path d="M5 5h6v2H7v10h10v-4h2v6H5V5z" />
                          </svg>
                        </span>
                      </span>
                      <div className="product-detail__pdf-preview-overlay" aria-hidden="true">
                        <span className="product-detail__pdf-preview-kicker">Ficha técnica</span>
                        <span className="product-detail__pdf-preview-subtitle">{product.content.title}</span>
                      </div>
                    </div>
                  </div>
                </a>
              )}

              <div className="product-detail__thumbnails">
                {galleryItems.map((item, i) => (
                  <button
                    key={i}
                    type="button"
                    className={`product-detail__thumb-card${item.type === 'sheet' ? ' product-detail__thumb-card--sheet' : ''}${isCurrentItem(item) ? ' is-active' : ''}`}
                    onClick={() => selectItem(item, i)}
                    aria-label={item.type === 'sheet'
                      ? `Ver ficha técnica de ${product.content.title}`
                      : `Ver imagen de ${product.content.title}`}
                  >
                    <img src={item.src} alt={item.label} loading="lazy" decoding="async" />
                  </button>
                ))}
              </div>
            </div>

            {/* Columna derecha: info */}
            <div className="product-detail__info">
              <h1 className="product-detail__title">
                {titleNoMark}
                {hasMark && <sup className="product-detail__mark">®</sup>}
              </h1>
              {product.content.paragraphList.map((p, i) => (
                <p key={i} className="product-detail__paragraph">{p.paragraph}</p>
              ))}
              {product.content.sanitaryLine && (
                <p className="product-detail__sanitary-line">
                  <span className="product-detail__sanitary-inner">
                    <img
                      className="product-detail__ce-img"
                      src="/assets/img/products/ce-2797.png"
                      alt="CE 2797"
                      decoding="async"
                    />
                    <span className="product-detail__sanitary-text">
                      {product.content.sanitaryLine}
                    </span>
                  </span>
                </p>
              )}
              {product.content.highlightLine && (
                <p className="product-detail__highlight">{product.content.highlightLine}</p>
              )}
              <div className="product-detail__cta">
                {product.infoUrl.startsWith('/') ? (
                  <Link
                    to={product.infoUrl}
                    className="product-detail__btn product-detail__btn--secondary"
                  >
                    MÁS INFORMACIÓN
                  </Link>
                ) : (
                  <a
                    href={product.infoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="product-detail__btn product-detail__btn--secondary"
                  >
                    MÁS INFORMACIÓN
                  </a>
                )}
                <a
                  href={product.shopUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="product-detail__btn"
                >
                  COMPRAR PRODUCTO
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {lightboxImage && (
        <div
          className="product-detail__lightbox"
          onClick={() => setLightboxImage(null)}
          role="dialog"
          aria-modal="true"
          aria-label={`Imagen ampliada de ${product.content.title}`}
        >
          <button
            type="button"
            className="product-detail__lightbox-close"
            onClick={() => setLightboxImage(null)}
            aria-label="Cerrar imagen ampliada"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" focusable={false} aria-hidden="true">
              <line x1="6" y1="6" x2="18" y2="18" />
              <line x1="18" y1="6" x2="6" y2="18" />
            </svg>
          </button>
          <img
            src={lightboxImage}
            alt={product.content.title}
            className="product-detail__lightbox-img"
            decoding="async"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  )
}
