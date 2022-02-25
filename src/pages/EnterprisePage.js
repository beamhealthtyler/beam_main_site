import Style from './Styles/EnterprisePage.module.css'

const EnterprisePage = () => {
  return (
    <>
      <div className='container'>
        <div className={"row " + Style.section} >
          <div className="col-md-6">
            <h1 className='title'>Engineered To Scale With Practices Of All Sizes</h1>
            <p>Generate more revenue, simplify workflows, and connect with patients using the one and only telehealth platform built for healthcare enterprises.</p>
          </div>
          <div className="col-md-6">
            <img className='image1' src="https://beam.health/wp-content/uploads/2021/11/enterprise-landing-page-header-image.png"></img>
          </div>
        </div>
      </div>

      <div className={Style.backgroundImage}>
        <div className='container'>

          <div className={"row " + Style.section} >
            <div className="col-md-8">
              <h1 className='title'>Built to Scale With Any Practice, No Matter the Size</h1>
              <p>Beam is a platform that’s changing the way providers view virtual care. Connect with patients like never before through:</p>
            </div>

          <div className={"row " + Style.section2Subsection} >
            <div className="col-6">
              <h1 className='title'>Picture-In-Picture Mode</h1>
              <p>Keep focus on your patients. Pop out of video calls to look up information or take notes while staying visually connected.</p>
            </div>
            <div className="col-6">
              <img className='image1' src="https://beam.health/wp-content/uploads/2021/11/scheduling-enterprise-landing-768x450.png"></img>
            </div>
          </div>

          <div className={"row " + Style.section2Subsection} >
            <div className="col-6">
              <h1 className='title'>Smart Group Therapy Controls</h1>
              <p>Direct the flow of group therapy sessions. Use individual video and audio controls to ensure each patient has their chance to participate.</p>
            </div>
            <div className="col-6">
              <img className='image1' src="https://beam.health/wp-content/uploads/2021/11/group-video-enterprise-landing-page.png"></img>
            </div>
          </div>

          <div className={"row " + Style.section2Subsection} >
            <div className="col-6">
              <h1 className='title'>Maximize Touchpoints</h1>
              <p>Get patients engaged from the start with a custom waiting room. Provide your own content or get help from one of our experts.</p>
            </div>
            <div className="col-6">
              <img className='image1' src="https://beam.health/wp-content/uploads/2021/11/waiting-room-ad-enterprise-landing-page-768x452.png"></img>
            </div>
          </div>
          </div>

        </div>
      </div>

      <div className={Style.section + ' ' + 'container'}>
        <p>Simplify Practice Management</p>
        <p>Elevate your practice with digital infrastructure designed to support seamless growth.</p>
        <div className='row'>
          <div className="col-4">
            <img className={Style.iconImage} src='https://beam.health/wp-content/uploads/2021/11/revenue-optimize-300x227.png'></img>
            <div className={Style.iconText}>
              <p>Optimize Your Revenue</p>
              <p>Beam is a platform that’s changing the way providers view virtual care. Connect with patients like never before through:</p>
            </div>
          </div>
          <div className="col-4">
            <img className={Style.iconImage} src='https://beam.health/wp-content/uploads/2021/11/user-role-icon-300x261.png'></img>
            <div className={Style.iconText}>
              <p>Delegate Intelligently</p>
              <p>Use Beam to share management roles responsibly. Control levels of employee access on our platform for comprehensive security and streamlined operations.</p>
            </div>
          </div>
          <div className="col-4">
            <img className={Style.iconImage} src='https://beam.health/wp-content/uploads/2021/11/file-export-icon-105x105.png'></img>
            <div className={Style.iconText}>
              <p>Share Documents Securely</p>
              <p>Make your patient a partner-in-care. Instantly send test results through our HIPAA-compliant channels.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
};

export default EnterprisePage;
