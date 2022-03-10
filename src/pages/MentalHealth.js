import Style from './Styles/MentalHealth.module.css'

const MentalHealth = () => {
  return (
    <>
    <div className={Style.backgroundImage}>
      <div className='container'>
        <div className={"row " + Style.section}>
          <div className="col-md-6">
            <iframe className={Style.movie} width="560" height="315" src="https://www.youtube.com/embed/DcMy7_ZV6tw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
          <div className="col-md-6">
            <h1 className={'title ' + Style.title}>Beam’s Commitment to Mental Health</h1>
            <p className={Style.text}>Watch our CEO speak about his mental health journey and his aim to increase access to treatment</p>
          </div>
        </div>
      </div>
    </div>

    <div className='container'>
      <div className={"row " + Style.section}>
        <div className="col-md-6">
          <h1 className={Style.subTitle}>Try Beam’s telehealth functionality for free, right now!</h1>
          <p className={Style.text}>Enter a mock telehealth visit with a member of our Customer Service team.</p>
          <button className={Style.blueButton + ' ' + Style.solutionsButton}>Try Now</button>
        </div>
        <div className="col-md-6">
          <img className={Style.image} src="https://beam.health/wp-content/uploads/2021/12/mental-health-header-image.png"></img>
        </div>
      </div>
    </div>

    <div className={Style.backgroundImage}>
      <div className={'row ' + Style.section2}>
        <div className='col-12'>
          <div className={Style.banner}>For a limited time, Beam is offering free Telehealth to mental health clinics. Try the platform now!</div>
          <button className={Style.bannerButton + ' ' + Style.whiteButton}>Try Live Demo</button>
        </div>
      </div>
    </div>

    <div className="row section1">
      <div className="col-md-6">
        <img className={'image1 ' + Style.image3} src="https://beam.health/wp-content/uploads/2021/11/scalable-image-1.png"></img>
      </div>
      <div className="col-md-6">
        <h1 className={Style.subTitle}>Beyond Today’s Standard for Telehealth</h1>
        <p className={Style.text}>Choppy audio kills a conversation, a video feed that cuts out or blurs interrupts care-healthcare calls for a solution that is reliable. One that works even when a patient is in their car, or going for a walk, or traveling on vacation</p>
        <button className={Style.blueButton + ' ' + Style.solutionsButton}>Learn More</button>
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

export default MentalHealth;
