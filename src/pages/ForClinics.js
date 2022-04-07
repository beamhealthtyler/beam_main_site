import Style from './Styles/ForClinics.module.css'

const ForClinics = () => {
  return (
    <>
      <div className={Style.section}>
        <div className='container'>
          <div className={"row " + Style.section} >
            <div className="col-md-6">
              <h1 className={Style.title}>Learn what thousands of medical practices already know</h1>
              <div className='emailInput'>
                <p className="flex">Email <p className='astrisk'>*</p></p>
                <input type="text" id="fname" name="fname"></input>
                <button className='LearnMoreButton'>Learn More</button>
              </div>
            </div>
            <div className="col-md-6">
              <img className='image1' src="https://beam.health/wp-content/uploads/2021/12/image-3.png"></img>
            </div>
          </div>
        </div>
      </div>

      <div className={Style.backgroundImage + ' ' + Style.section}>
        <div className='container'>
          <div className={Style.textContainer}>
            <p className={Style.textTitle}>Private Practices Across All Specialties</p>
            <p  className={Style.textsubtitle}>Beam’s comprehensive suite of analytics and invoicing tools coupled with a bevy of digital features provides everything you need to boost your revenue and optimize the patient experience.</p>
            <p  className={Style.textsubtitle2}>Take your bottom line to a whole new level! Beam provides practices with real-time analytics that track revenue, patient churn, patient transaction volume, and more.  With this information and our invoicing feature that has a collection rate of 99%, private practices can use Beam’s digital features to improve the patient experience and continue to provide world-class care.</p>
          </div>
          <div className={Style.textContainer}>
            <p className={Style.textTitle}>Behavioral and Mental Health</p>
            <p  className={Style.textsubtitle}>A third of all telehealth appointments are in behavioral health, with patients needing frequent touchpoints with their healthcare provider.</p>
            <p  className={Style.textsubtitle2}>If you operate a clinic focused on improving mental health, it’s a competitive necessity to choose a platform that is patient-friendly. With no software download requirement and a support team that guarantees empathic patient customer service, Beam is built to facilitate this level of engagement and to accommodate patients who struggle with mental stability.</p>
          </div>
          <div className={Style.textContainer}>
            <p className={Style.textTitle}>Primary Care & Urgent Care</p>
            <p  className={Style.textsubtitle}>Today, primary and urgent care clinics compete with both vertically integrated telemedicine companies and local brick-and-mortar practices. </p>
            <p  className={Style.textsubtitle2}>The Beam Team anticipated this trend well before COVID-19, and empowers medical practices with the tools needed to compete with VC backed tech companies.</p>
            <p><a href="https://beam.health/case-studies/case-3-urgent-care-looking-to-scale/">General Urgent care related use case</a></p>
            <p><a href="https://beam.health/case-studies/case-4-urgent-care-facing-covid-19/">COVID-19 related use case</a></p>
          </div>
          <div className={Style.textContainer}>
            <p className={Style.textTitle}>All Specialties Are Welcome</p>
            <p  className={Style.textsubtitle}>Engineered for flexibility.</p>
            <p  className={Style.textsubtitle2}>We understand that each practice has unique needs. With custom patient promotional services, workflows, and landing pages, we’ve got you covered. Over 35 specialties are active on Beam, including:</p>
          </div>

          <ul className={Style.unorderedList}>
            <li>Cardiology</li>
            <li>Oncology</li>
            <li>Diabetes</li>
            <li>Care Diet &amp; Nutrition</li>
            <li>Weight Management</li>
            <li>Psychiatry</li>
            <li>Chiropractic</li>
            <li>Dermatology</li>
            <li>Diabetes Care</li>
            <li>Eye Clinics</li>
            <li>Family Medicine</li>
            <li>OBGYN</li>
            <li>Orthopedics</li>
            <li>Pediatrics</li>
            <li>Physical Therapists</li>
            <li>Plastic Surgeon</li>
            <li>Podiatrists</li>
            <li>Spine</li>
            <li>Dentists</li>
            <li>Urgent Care</li>
            <li>Pharmacy</li>
            <li>Nephorology</li>
            <li>Rheumatology</li>
            <li>Urology</li>
            <li>Pulmonology</li>
            <li>ENT</li>
            <li>Allergy</li>
            <li>Pain Management</li>
            <li>Fertility</li>
            <li>Geriatrics</li>
            <li>Psychiatry</li>
            <li>Psychology</li>
            <li>Behavioral Health</li>
            <li>Addiction Services</li>
            <li>Fertility</li>
            <li>Surgery</li>
            <li>Men’s Health</li>
            <li>Women’s Health</li>
            <li>Wellness</li>
            <li>Holistic</li>
            <li>Functional Medicine</li>
            <li>Medical Marijuana</li>
            </ul>

        </div>

      </div>
      <div className='row'>
        <div className='col'>
          <div className='craft-and-measure'>Craft and Measure the Patient Experience</div>
          <iframe src="https://meetings.hubspot.com/drew160/beam-health-demo?embed=true&amp;parentHubspotUtk=653dcb903fc615dc2dcbbcb3f3f109ec&amp;parentPageUrl=https://beam.health/request-a-free-demo/&amp;ab=undefined&amp;abStatus=undefined&amp;contentId=undefined" width="100%" style={{minWidth: "312px", minHeight: '516px', height: "756px", border: "none"}}></iframe>
        </div>
      </div>
    </>
  )
};

export default ForClinics;
