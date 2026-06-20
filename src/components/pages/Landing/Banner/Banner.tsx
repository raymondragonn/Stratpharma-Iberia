import './Banner.scss'

const navItems = [
  'Especialización médica',
  'Innovación tecnológica',
  'Confianza y respaldo profesional'
]

const bannerContent = {
  taglineMain: 'CON CIENCIA, INVESTIGACIÓN Y ALTA TECNOLOGÍA, HEMOS DESARROLLADO FÓRMULAS EXCLUSIVAS',
  taglineSub: 'QUE HACEN QUE CUREMOS MEJOR LA PIEL, Y EN LA MITAD DE TIEMPO EN EL QUE LO HACEN LOS TRATAMIENTOS CONVENCIONALES',
  buttonText: 'VER PRODUCTOS',
  buttonFragment: 'productos'
}

export default function Banner() {
  const onProductsClick = (e: React.MouseEvent) => {
    e.preventDefault()
    const el = document.getElementById('productos')
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="inicio" className="hero-banner">
      <div className="hero-banner__nav-row">
        {navItems.map((item, i) => (
          <div key={i} className="hero-banner__nav-col">{item}</div>
        ))}
      </div>
      <div className="hero-banner__bg"></div>
      <div className="hero-banner__content">
        <div className="hero-banner__text-block">
          <h1 className="hero-banner__title-wrap">
            <span className="hero-banner__title">{bannerContent.taglineMain}</span>
          </h1>
          <p className="hero-banner__subtitle-wrap">
            <span className="hero-banner__subtitle">{bannerContent.taglineSub}</span>
          </p>
          <a
            href="#productos"
            onClick={onProductsClick}
            className="hero-banner__btn default-btn"
          >
            {bannerContent.buttonText}
            <span></span>
          </a>
        </div>
      </div>
    </section>
  )
}
