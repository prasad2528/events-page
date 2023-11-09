// Write your code here
import './index.css'

const EventItem = props => {
  const {eventDetails, setActiveId} = props
  const {imageUrl, name, location, id} = eventDetails
  const onClickid = () => {
    setActiveId(id)
  }
  return (
    <li className="each-list">
      <button className="button" type="button" onClick={onClickid}>
        <img src={imageUrl} alt="event" className="image" />
      </button>
      <p className="title">{name}</p>
      <p className="location">{location}</p>
    </li>
  )
}
export default EventItem
