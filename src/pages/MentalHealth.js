import Style from './Styles/MentalHealth.module.css'
import { Link } from "react-router-dom";

const MentalHealth = () => {
  return (
    <>
    <div className={Style.backgroundImage}>
      <div className='container'>
        <div className={"row " + Style.section}>
          <div className="col-md-6">
            <iframe className={Style.movie} width="100%" height="450px" src="https://www.youtube.com/embed/DcMy7_ZV6tw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
          <div className={"col-md-6 col-sm-12" + Style.mental_health_section1_text}>
            <h1 className={'title ' + Style.title}>Beam’s Commitment to Mental Health</h1>
            <p className={Style.text}>Watch our CEO speak about his mental health journey and his aim to increase access to treatment</p>
          </div>
        </div>
      </div>
    </div>

    <div className='container '>
      <div className={"row flip " + Style.section}>
        <div className="col-md-6">
          <h1 className={Style.subTitle}>Try Beam’s telehealth functionality for free, right now!</h1>
          <p className={Style.text}>Enter a mock telehealth visit with a member of our Customer Service team.</p>
          <a href='https://demo.beam.health/demo/login/?utm_source=mental+health+page&utm_medium=website&utm_campaign=live+demo&utm_id=Live+demo' target='_blank'><button className={Style.blueButton + ' ' + Style.solutionsButton}>Try Now</button></a>
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
          <Link to='/demo'><button className={Style.bannerButton + ' ' + Style.whiteButton}>Try Live Demo</button></Link>
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
        <Link to='/demo'><button className={Style.blueButton + ' ' + Style.solutionsButton}>Learn More</button></Link>
      </div>
    </div>

    <div className='row'>
      <div className='col'>
        <div className='craft-and-measure'>We're Raising the Bar</div>
        <iframe src="https://meetings.hubspot.com/drew160/beam-health-demo?embed=true&amp;parentHubspotUtk=653dcb903fc615dc2dcbbcb3f3f109ec&amp;parentPageUrl=https://beam.health/request-a-free-demo/&amp;ab=undefined&amp;abStatus=undefined&amp;contentId=undefined" width="100%" style={{minWidth: "312px", minHeight: '516px', height: "756px", border: "none"}}></iframe>
      </div>
    </div>
    </>
  )
};

export default MentalHealth;
