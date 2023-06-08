import '../Card/Card.scss'

const Card = (props) => {
  return (
    <a className="card-wrapper" href={`https://www.talkdesk.com/${props.link.url}`} target={props.link.target}>
      <div className="card-wrapper image-container">
        <img src={props.image} alt={props.imageAlt} />
      </div>
      <a className="text-container" href={`https://www.talkdesk.com/${props.link.url}`} target={props.link.target}>
        <span className="label">{props.label}</span>
        <h5 className="title">{props.title}</h5>
        {/* <p if className="description">{props.content?.text}</p> */}
      </a>
    </a>
  )
}

export default Card
