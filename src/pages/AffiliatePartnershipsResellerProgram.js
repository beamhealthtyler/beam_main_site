import Style from './Styles/Affiliate.module.css'

const AffiliatePartnershipsResellerProgram = () => {
  return (
    <>
      <div className={Style.section}>
        <div className='container'>
          <div className="row">
            <div className="col-md-6">
              <img className='image1' src="https://beam.health/wp-content/uploads/2021/12/image-4.png"></img>
            </div>
            <div className={"col-md-6 " + Style.Stylesection1textcontainer}>
              <h1 className='title'>Let’s grow the footprint of digital healthcare together.</h1>
              <p>Our partners bring more medical providers OR more patients to Beam, combining the power of their network with our technology to move healthcare forward.</p>
              <p>Fill out the form below to be contacted by one of our Business Development Representatives</p>
            </div>
          </div>
        </div>
      </div>

      <div className={Style.backgroundImage + ' ' + Style.section2}>
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
        </div>
      </div>
    </>
  )
};

export default AffiliatePartnershipsResellerProgram;
