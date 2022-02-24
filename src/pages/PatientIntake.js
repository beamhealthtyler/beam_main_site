import Style from './Styles/PatientIntake.module.css'

const PatientIntake = () => {
  return (
    <>
      <div className={Style.backgroundImage + ' ' + Style.section}>
        <div className='container'>
          <div className="row" >
            <div className="col-md-6">
              <h1 className='title'>Streamline Patient Registration</h1>
              <p>Eliminate clipboards with digital patient intake forms from your homepage</p>
            </div>
            <div className="col-md-6">
              <img className='image1' src="https://beam.health/wp-content/uploads/2021/12/mental-health-header-image.png"></img>
            </div>
          </div>
        </div>
      </div>

      <div className={Style.section}>
        <div className="row" >
          <div className="col-md-6">
            <img className='image1' src="https://beam.health/wp-content/uploads/2021/12/widget-w-red-background.png"></img>
          </div>
          <div className="col-md-6">
            <h1 className='title'>Paperless patient enrollment</h1>
            <p>Upgrade your patient intake system and collect the info you need before they ever set foot in your office:</p>
            <ul>
              <li>Contact Info</li>
              <li>Insurance</li>
              <li>Medical History</li>
              <li>Preferred Payment Method</li>
            </ul>
            <button>Learn More</button>
          </div>
        </div>
      </div>

      <div className={Style.backgroundImage + ' ' + Style.section}>
        <div className='container'>
          <div className="row" >
            <div className="col-md-6">
              <h1 className='title'>Accelerate practice growth</h1>
              <p>Patients appreciate open and convenient access to their provider. Give them what they desire right from your homepage with:</p>
              <ul>
                <li>Live Chat</li>
                <li>Appointment Requests</li>
                <li>Telehealth</li>
                <li>Much More!</li>
              </ul>
              <button>Learn More</button>
            </div>
            <div className="col-md-6">
              <img className='image1' src="https://beam.health/wp-content/uploads/2021/12/Image-140-1024x690.png"></img>
            </div>
          </div>
        </div>
      </div>
    </>
  )
};

export default PatientIntake;
