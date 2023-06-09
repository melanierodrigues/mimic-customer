import '../EmptyState/EmptyState.scss'

const BrokenImage = "https://infra-cloudfront-talkdeskcom.svc.talkdeskapp.com/talkdesk_com/2021/06/16035537/broken-image-3_2.png";

const EmptyState = (props) => {
  const imageOnError = (event) => {
    event.currentTarget.src = BrokenImage;
    event.currentTarget.className = "error";
  };

  return (
    <div className="empty-state-container">
      <div className="text">
        <h3 className="title">{props.title}</h3>
        {/* <div>{props.content}</div> */}
        <p>Please, try different <strong>search</strong> words.</p>
      </div>
      <div className="image">
        <img src={props.image} alt={props.imageAlt} onError={imageOnError}/>
      </div>
    </div>
  )
}

export default EmptyState
