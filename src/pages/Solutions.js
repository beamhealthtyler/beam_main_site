import Style from './Styles/Solutions.module.css'

function Solutions() {
  return (
    <div className={Style.backgroundImage}>
    <div className='container'>
      <div className={'row ' + Style.section}>
        <div className='col-md-6 col-sm-0'>
          <div>
            <div className={Style.solutionsSection1Header}>A digital health platform designed for innovation</div>
            <button type="button" className={"btn btn-secondary " + Style.section1Button}>Try Beam Free</button>
          </div>
        </div>
        <div className='col-md-6 col-sm-12'>
          <img className={Style.solutionsImage} src="https://beam.health/wp-content/uploads/2021/11/group-video-enterprise-landing-page.png"></img>
        </div>
      </div>

      <div className={'row ' + Style.section}>
        <div className='col-md-6 col-sm-12'>
          <img className={Style.solutionsImage3} src='https://beam.health/wp-content/uploads/2021/11/Image-124-2.png'></img>
        </div>
        <div className='col-md-6 col-sm-12'>
          <div className='section2-text'>
          <div className='section2-header'>Telehealth Made Personal</div>
          <div className='blue-background'>
            <div>Care only a click away</div>
            <div>HD, HIPAA compliant telehealth built to support a seamless face-to-face connection</div>
          </div>
          <div>Intelligent Group Therapy Controls</div>
          <div>Integrated note taking</div>
            <button type="button" className={"btn btn-secondary " + Style.solutionsButton}>Learn More</button>
          </div>
        </div>

      </div>
    </div>

    <div className={Style.backgroundImage2}>
      <div className={'row ' + Style.sectionNoContainer}>
        <div className='col-md-6 col-sm-12'>
          <div className='section2-text'>
            <div className='section2-header'>Telehealth Made Personal</div>
            <div className='blue-background'>
              <div>Care only a click away</div>
              <div>HD, HIPAA compliant telehealth built to support a seamless face-to-face connection</div>
            </div>
            <div>Intelligent Group Therapy Controls</div>
            <div>Integrated note taking</div>
            <button type="button" className={"btn btn-secondary " + Style.solutionsButton}>Learn More</button>
          </div>
        </div>
        <div className='col-md-6 col-sm-12'>
          <img className={Style.solutionsImage2} src='https://beam.health/wp-content/uploads/2021/11/image-4.png'></img>
        </div>
      </div>
    </div>


    <div className='container'>
      <div className={'row ' + Style.section}>
        <div className='col-md-6 col-sm-12'>
          <img className={Style.solutionsImage3} src='https://beam.health/wp-content/uploads/2021/11/Image-131.png'></img>
        </div>
        <div className='col-md-6 col-sm-12'>
          <div className='section2-text'>
            <div className='section2-header'>Features Providers and Patients Love</div>
            <div className='blue-background'>
              <div>Customizable Patient & Provider Workflows</div>
              <div>No workflow in Beam is set in stone. You can easily craft a better experience from telehealth, to onboarding, to online chat, to payment collection</div>
            </div>
            <div>HD, HIPPA Compliant Telehealth</div>
            <div>Scalable Analytics</div>
            <div>Intuitive Scheduling</div>
            <button type="button" className={"btn btn-secondary " + Style.solutionsButton}>Learn More</button>
          </div>
        </div>
      </div>
    </div>

    <div className={Style.backgroundImage2}>
      <div className={'row ' + Style.sectionNoContainer}>
        <div className='col-md-6 col-sm-12'>
          <div className='section2-text'>
            <div className='section2-header'>Telehealth Made Personal</div>
            <div className='blue-background'>
              <div>Care only a click away</div>
              <div>HD, HIPAA compliant telehealth built to support a seamless face-to-face connection</div>
            </div>
            <div>Intelligent Group Therapy Controls</div>
            <div>Integrated note taking</div>
            <button type="button" className={"btn btn-secondary " + Style.solutionsButton}>Learn More</button>
          </div>
        </div>
        <div className='col-md-6 col-sm-12'>
          <img className={Style.solutionsImage2} src='https://beam.health/wp-content/uploads/2021/11/image-1-1.png'></img>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Solutions;
