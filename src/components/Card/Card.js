import clsx from 'clsx'

import data from './Card.data.json'

import './Card.css'

const Card = () => {
  const { image, label, title, content } = data
  return (
    <div
      className="card card__link"
    >
      <div className="card__media">
        <img {...image} />
      </div>

      <div className={clsx('card__text -margin-top-16')}>
        <span className="-margin-bottom-4" >
          {label.text}
        </span>

        <h5 className="card__title -margin-bottom-4 -margin-bottom-sm-6 -margin-bottom-md-4 -margin-bottom-xl-6" >
          {title}
        </h5>

        <p className="card__description text text--16">{content?.text}</p>
      </div>
    </div >
  )
}

export default Card
