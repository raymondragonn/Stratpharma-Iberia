import { contact, mapEmbedUrl } from '../../../../data/contact'
import './Contact.scss'

export default function Contact() {
  return (
    <section id="contacto" className="contact-section">
      <div className="contact-section__banner">
        <h2 className="contact-section__banner-title">CONTACTO</h2>
      </div>

      <div className="contact-section__intro-section">
        <div className="contact-section__intro-wrap">
          <p className="contact-section__intro">
            Si quieres más información no dudes en contactarnos
          </p>
        </div>
      </div>

      <div className="contact-section__content">
        <div className="contact-section__content-inner">
          <p className="contact-section__cta-text">
            Si quieres contactar con nosotros o acceder a nuestras redes, haz click aquí.
          </p>
          <ul className="contact-section__list">
            <li className="contact-section__item">
              <i className="las la-phone contact-section__icon" aria-hidden="true"></i>
              <a href={contact.phoneLink}>{contact.phone}</a>
            </li>
            <li className="contact-section__item">
              <i className="las la-envelope contact-section__icon" aria-hidden="true"></i>
              <a href={`mailto:${contact.email}`}>{contact.email}</a>
            </li>
            <li className="contact-section__item">
              <i className="lab la-instagram contact-section__icon" aria-hidden="true"></i>
              <a href={contact.instagramUrl} target="_blank" rel="noopener noreferrer">
                {contact.instagram}
              </a>
            </li>
            <li className="contact-section__item">
              <i className="lab la-facebook-f contact-section__icon" aria-hidden="true"></i>
              <a href={contact.facebookUrl} target="_blank" rel="noopener noreferrer">
                {contact.facebook}
              </a>
            </li>
            <li className="contact-section__item">
              <span className="contact-section__icon contact-section__icon--svg" aria-hidden="true">
                <svg viewBox="0 0 24 24" role="img" focusable={false}>
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.3V2h-3.3v13.17a2.8 2.8 0 1 1-2.8-2.8c.31 0 .61.05.9.15V9.2a6.11 6.11 0 0 0-.9-.07A6.1 6.1 0 1 0 15.82 15V8.33a8.13 8.13 0 0 0 4.77 1.55V6.69z" />
                </svg>
              </span>
              <a href={contact.tiktokUrl} target="_blank" rel="noopener noreferrer">
                {contact.tiktok}
              </a>
            </li>
            <li className="contact-section__item">
              <i className="las la-map-marker-alt contact-section__icon" aria-hidden="true"></i>
              <a href={contact.mapsUrl} target="_blank" rel="noopener noreferrer">
                {contact.addressLine1}<br />
                {contact.addressLine2}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="contact-section__map">
        {mapEmbedUrl && (
          <iframe
            src={mapEmbedUrl}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Ubicación Stratpharma"
          />
        )}
      </div>
    </section>
  )
}
