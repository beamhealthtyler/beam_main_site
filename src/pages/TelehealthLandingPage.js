import Style from './Styles/Telehealth.module.css'

const TelehealthLandingPage = () => {
  return (
    <>
    <div className={Style.backgroundImage}>
      <div className='container'>
        <div className={"row " + Style.section} >
          <div className="col-md-6">
            <img className='image1' src="https://beam.health/wp-content/uploads/2021/11/telehealth-header-image-1.png"></img>
          </div>
          <div className={"col-md-6 " + Style.text}>
            <h1 className='title'>Beyond Today's Standard for Telehealth</h1>
            <p>Choppy audio kills a conversation, a video feed that cuts out or blurs interrupts care-healthcare calls for a solution that is reliable. One that works even when a patient is in their car, or going for a walk, or traveling on vacation.</p>
            <button class='btn btn-secondary homeButton'>Learn More</button>
          </div>
        </div>
      </div>
    </div>

      <div className='container'>
        <div className={"row " + Style.section}>
          <div className="col-md-6">
            <h1 className='title'>Advanced Controls</h1>
            <div className={Style.section2}>
              <p>With Beam you can:</p>
              <ul>
                <li>See your patient’s internet connection strength in real-time</li>
                <li>Share medical information from your screen, adjust patient’s audio and video settings settings during group video calls</li>
                <li>Take patient notes that automatically flow into your EHR</li>
                <li>Collect patient payments automatically provide patients with financial assistance through specialized payment plans</li>
                <li>Track your business metrics in a data room</li>
              </ul>
            </div>
          </div>
          <div className="col-md-6">
            <img className='image1' src="https://beam.health/wp-content/uploads/2022/01/image-7.png"></img>
          </div>
        </div>
      </div>

      <div className={Style.backgroundImage}>
        <div className={'row ' + Style.section3}>
          <div className='col-12'>
            <div className={Style.banner}>For a limited time, Beam is offering free Telehealth to mental health clinics. Try the platform now!</div>
            <button className={Style.bannerButton + ' ' + Style.whiteButton}>Try Live Demo</button>
          </div>
        </div>
      </div>

      <div className='container'>
        <div className={"row " + Style.section} >
          <div className="col-md-6">
            <img className='image1' src="https://beam.health/wp-content/uploads/2021/11/scheduling-telehealth-landing-page-1.png"></img>
          </div>
          <div className={"col-md-6 " + Style.telehealth_section4}>
            <h1 className={'title ' +Style.title}>Digital Infrastructures For The Modern Practice</h1>
            <p>
You’re not limited to the patient experience created by someone else. With Beam, you can easily craft a better patient experience in telehealth, onboarding, online chat, payment collections, and more!</p>
            <button class='btn btn-secondary homeButton'>Learn More</button>
          </div>
        </div>
      </div>

      <div className='row'>
        <div className='col'>
          <div className='craft-and-measure'>We're Raising the Bar</div>
        </div>
      </div>
    </>
  )
};

export default TelehealthLandingPage;
