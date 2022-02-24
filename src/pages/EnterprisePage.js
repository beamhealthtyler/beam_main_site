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
              <h1 className='title'>Built to Scale With Any Practice, No Matter the Size</h1>
              <p>Beam is a platform that’s changing the way providers view virtual care. Connect with patients like never before through:</p>
            </div>
            <div className="col-6">
              <img className='image1' src="https://beam.health/wp-content/uploads/2021/11/enterprise-landing-page-header-image.png"></img>
            </div>
          </div>

          <div className={"row " + Style.section2Subsection} >
            <div className="col-6">
              <h1 className='title'>Built to Scale With Any Practice, No Matter the Size</h1>
              <p>Beam is a platform that’s changing the way providers view virtual care. Connect with patients like never before through:</p>
            </div>
            <div className="col-6">
              <img className='image1' src="https://beam.health/wp-content/uploads/2021/11/enterprise-landing-page-header-image.png"></img>
            </div>
          </div>

          <div className={"row " + Style.section2Subsection} >
            <div className="col-6">
              <h1 className='title'>Built to Scale With Any Practice, No Matter the Size</h1>
              <p>Beam is a platform that’s changing the way providers view virtual care. Connect with patients like never before through:</p>
            </div>
            <div className="col-6">
              <img className='image1' src="https://beam.health/wp-content/uploads/2021/11/enterprise-landing-page-header-image.png"></img>
            </div>
          </div>
          </div>

        </div>
      </div>

      <div>
        <p>Simplify Practice Management</p>
        <p>Elevate your practice with digital infrastructure designed to support seamless growth.</p>
        <div className='row'>
          <div className="col-4">
            <img src='https://beam.health/wp-content/uploads/2021/11/revenue-optimize-300x227.png'></img>
            <p>Optimize Your Revenue</p>
            <p>Beam is a platform that’s changing the way providers view virtual care. Connect with patients like never before through:</p>
          </div>
          <div className="col-4">
            <img src='https://beam.health/wp-content/uploads/2021/11/revenue-optimize-300x227.png'></img>
            <p>Optimize Your Revenue</p>
            <p>Beam is a platform that’s changing the way providers view virtual care. Connect with patients like never before through:</p>
          </div>
          <div className="col-4">
            <img src='https://beam.health/wp-content/uploads/2021/11/revenue-optimize-300x227.png'></img>
            <p>Optimize Your Revenue</p>
            <p>Beam is a platform that’s changing the way providers view virtual care. Connect with patients like never before through:</p>
          </div>
        </div>
      </div>
    </>
  )
};

export default EnterprisePage;
