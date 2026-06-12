import { Link } from 'react-router-dom'
import { productCards } from '../../../../data/products'
import './Products.scss'

export default function Products() {
  return (
    <section id="productos" className="products-section">
      <div className="products-section__disclaimer">
        <p>Toda la información que vais a ver aquí está debidamente documentada y registrada en las tres principales Agencias de Salud Pública del mundo, lo que nos garantiza su veracidad.</p>
        <img src="/assets/img/imagen-agencias.jpeg" alt="Agencias de Salud Pública" className="products-section__disclaimer-img" />
      </div>

      <div className="products-section__banner">
        <h2 className="products-section__banner-title">NUESTROS PRODUCTOS</h2>
      </div>

      <div className="products-section__content">
        <div className="products-section__grid">
          {productCards.map(product => {
            const titleNoMark = product.title.replace('®', '')
            const hasMark = product.title.includes('®')
            const cardClass = [
              'product-item__image-card',
              product.id === '1' ? 'product-item__image-card--strata-triz' : '',
              product.id === '2' ? 'product-item__image-card--stratamed' : '',
              product.id === '3' ? 'product-item__image-card--stratacel' : '',
              product.id === '4' ? 'product-item__image-card--stratamark' : '',
              product.id === '5' ? 'product-item__image-card--strataxrt' : ''
            ].filter(Boolean).join(' ')

            return (
              <article key={product.id} className="product-item">
                <Link
                  to={`/${product.slug}`}
                  className={cardClass}
                  aria-label={`Más información: ${product.title}`}
                >
                  {product.imageUrl && (
                    <img src={product.imageUrl} alt={product.title} loading="lazy" decoding="async" />
                  )}
                  {!product.imageUrl && (
                    <span className="product-item__placeholder">{product.title}</span>
                  )}
                </Link>
                <h3 className="product-item__title">
                  {titleNoMark.toUpperCase()}
                  {hasMark && <sup className="product-item__mark">®</sup>}
                </h3>
                <p className="product-item__desc">{product.description}</p>
                <Link to={`/${product.slug}`} className="product-item__btn">
                  Más información
                </Link>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
