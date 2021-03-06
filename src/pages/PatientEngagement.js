import Style from './Styles/PatientEngagement.module.css'
import { Link } from "react-router-dom";

const PatientEngagement = () => {
  return (
    <>
    <div className={Style.backgroundImage}>
      <div className='container'>
        <div className={"row " + Style.section}>
          <div className="col-md-6">
            <img className={Style.section1Img} src="https://beam.health/wp-content/uploads/2021/12/group-video-enterprise-landing-page.png"></img>
          </div>
          <div className="col-md-6">
            <h1 className={Style.title}>Total Patient Engagement with Beam Health</h1>
            <p className={Style.subtitle}>Upgrade your traditional practice by opening an online storefront</p>
            <ul className={Style.list}>
              <li>Drive more revenue</li>
              <li>Grow your practice</li>
              <li>Save staff time</li>
            </ul>
            <div className='patientengagementInput'>
              <div className='emailInput'>
                <p className="flex">Email <p className='astrisk'>*</p></p>
                <input type="text" id="fname" name="fname"></input>
                <button className='LearnMoreButton'>Learn More</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

        <div className="row flip">
          <div className="col-md-6">
            <div className={Style.textContainer}>
              <h1 className={Style.subTitle}>What is Beam?</h1>
              <p className={Style.text}>Add the Beam button to your site to increase revenue and bring more patients to your practice</p>
              <Link to='/demo'><button className={Style.button}>Get Started</button></Link>
            </div>
          </div>
          <div className="col-md-6">
            <img className='image1' src="https://beam.health/wp-content/uploads/2021/07/princeton-plainsboro-fp-widget-blue-bg-920x1024.png"></img>
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

export default PatientEngagement;
