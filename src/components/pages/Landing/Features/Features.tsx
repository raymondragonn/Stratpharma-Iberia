import './Features.scss'

interface FeatureCircle {
  linesTop?: string[]
  number?: string
  linesBottom?: string[]
  textLines?: string[]
  linkText?: string
  linkUrl?: string
  linesAfterLink?: string[]
}

const introTextLead =
  'Stratpharma, con sede en Basilea desde 2005, es una empresa global especializada en productos sanitarios. Nuestros equipos de primer nivel diseñan, desarrollan, fabrican y comercializan soluciones innovadoras que mejoran la calidad de vida de los '
const introTextHighlight = 'pacientes en todo el mundo.'
const featuresBackgroundImage = '/assets/img/image-two.png'

const circles: FeatureCircle[] = [
  { linesTop: ['Presentes en', 'más de'], number: '30', linesBottom: ['hospitales en', 'España'] },
  { linesTop: ['Desarrollo de', 'negocio en más de'], number: '35', linesBottom: ['países'] },
  { textLines: ['Resultados más', 'rápidos: curas en la', 'mitad de tiempo'] },
  { linesTop: ['Disponibles en'], linkText: 'venta online', linkUrl: '#', linesAfterLink: ['y en tu farmacia más', 'cercana'] }
]

export default function Features() {
  return (
    <section id="nosotros" className="features">
      <div className="features-intro">
        <p className="features-intro__text">
          {introTextLead}<br />
          {introTextHighlight}
        </p>
      </div>

      <div className="features-circles">
        <div
          className="features-circles__bg"
          style={{ backgroundImage: `url(${featuresBackgroundImage})` }}
        ></div>
        <div className="features-circles__content">
          <div className="features-circles__grid">
            {circles.map((circle, i) => (
              <div key={i} className="features-circle">
                {circle.number && (
                  <>
                    {circle.linesTop?.map((line, j) => (
                      <p key={j} className="features-circle__line">{line}</p>
                    ))}
                    <span className="features-circle__number">{circle.number}</span>
                    {circle.linesBottom?.map((line, j) => (
                      <p key={j} className="features-circle__line">{line}</p>
                    ))}
                  </>
                )}
                {circle.textLines && !circle.number && !circle.linkText && (
                  circle.textLines.map((line, j) => (
                    <p key={j} className="features-circle__line">{line}</p>
                  ))
                )}
                {circle.linkText && (
                  <>
                    {circle.linesTop?.map((line, j) => (
                      <p key={j} className="features-circle__line">{line}</p>
                    ))}
                    <a href={circle.linkUrl || '#'} className="features-circle__link">{circle.linkText}</a>
                    {circle.linesAfterLink?.map((line, j) => (
                      <p key={j} className="features-circle__line">{line}</p>
                    ))}
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
