import '../Card/Card.scss'

const BrokenImage = "https://infra-cloudfront-talkdeskcom.svc.talkdeskapp.com/talkdesk_com/2021/06/16035537/broken-image-3_2.png";

const Card = (props) => {
  const imageOnError = (event) => {
    event.currentTarget.src = BrokenImage;
    event.currentTarget.className = "error";
  };

  return (
    <a className="card-wrapper" href={`https://www.talkdesk.com/${props.link.url}`} target={props.link.target}>
      <div className="card-wrapper image-container">
        <img src={props.image} alt={props.imageAlt} onError={imageOnError}/>
      </div>
      <a className="text-container" href={`https://www.talkdesk.com/${props.link.url}`} target={props.link.target}>
        <span className="label">{props.label}</span>
        <h5 className="title">{props.title}</h5>
      </a>
    </a>
  )
}

export default Card
