import './Banner.scss'

const navItems = [
  'Especialización médica',
  'Innovación tecnológica',
  'Confianza y respaldo profesional'
]

const bannerContent = {
  subTitle: 'CURAMOS MEJOR TU PIEL EN LA MITAD DE TIEMPO',
  title: 'CIENCIA CON ALTA TECNOLOGÍA',
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
          <h1 className="hero-banner__title">{bannerContent.title}</h1>
          <p className="hero-banner__subtitle">{bannerContent.subTitle}</p>
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
