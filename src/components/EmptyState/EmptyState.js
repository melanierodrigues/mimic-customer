import '../EmptyState/EmptyState.scss'

const EmptyState = (props) => {
  return (
    <div className="empty-state-container">
      <div className="text">
        <h3>{props.title}</h3>
        {/* <div>{props.content}</div> */}
        <p>Please, try different <strong>search</strong> words.</p>
      </div>
      <div className="image">
        <img src={props.image} alt={props.imageAlt} onerror/>
      </div>
    </div>
  )
}

export default EmptyState
