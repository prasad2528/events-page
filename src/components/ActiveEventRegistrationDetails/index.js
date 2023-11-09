import './index.css'

const registrationStatus = {
  yetToRegister: 'YET_TO_REGISTER',
  register: 'REGISTERED',
  registrationClosed: 'REGISTRATIONS_CLOSED',
}

const ActiveRegistrationDetails = props => {
  const {activeEventRegistrationDetails} = props

  const renderNoEventView = () => (
    <div>
      <p>Click on an event, to view its registration details</p>
    </div>
  )
  const renderYetToRegisterView = () => (
    <div className="res-cont">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-register-img.png"
        alt="yet to register"
        className="logo"
      />
      <p className="description">
        A live performance brings so much to your relationship with dance.
        seeing dance live can often make you fall totally in love with the
        beautiful art form.
      </p>
      <button className="event-button" type="button">
        Register Here
      </button>
    </div>
  )

  const renderRegisterView = () => (
    <div className="res-cont">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-regestered-img.png"
        alt="registered"
        className="logo"
      />
      <h2 className="description">You have already registered for the event</h2>
    </div>
  )

  const renderRegistrationClosedView = () => (
    <div className="res-cont">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-registrations-closed-img.png"
        alt="registrations closed"
        className="logo"
      />
      <h2 className="description">Registrations Are Closed Now!</h2>
      <p className="sub-description">
        Stay tuned, we will reopen the registration soon!
      </p>
    </div>
  )
  const renderRegistrationDetails = () => {
    switch (activeEventRegistrationDetails) {
      case registrationStatus.yetToRegister:
        return renderYetToRegisterView()
      case registrationStatus.register:
        return renderRegisterView()
      case registrationStatus.registrationClosed:
        return renderRegistrationClosedView()
      default:
        return renderNoEventView()
    }
  }

  return <div className="container">{renderRegistrationDetails()}</div>
}
export default ActiveRegistrationDetails
