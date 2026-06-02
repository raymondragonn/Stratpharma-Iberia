import './Footer.scss'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="app-footer">
      <div className="app-footer__inner">
        <p className="app-footer__text">© {currentYear} Stratpharma Iberia</p>
        <p className="app-footer__note">
          Todos los contenidos que publicamos de expertos son totalmente gratuitos y orgánicos.
        </p>
      </div>
    </footer>
  )
}
