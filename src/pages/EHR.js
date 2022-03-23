import Style from './Styles/EHR.module.css'

const EHR = () => {
  return (
    <>
      <div className={Style.section}>
        <div className='container'>
          <div className="row">
            <div className="col-md-6">
              <img className='image1' src="https://beam.health/wp-content/uploads/2021/12/image-4.png"></img>
            </div>
            <div className={"col-md-6 " + Style.patientstextcontainer}>
              <h1 className={Style.title}>We Play Nice With Your EHR</h1>
              <p>A fully integrated suite of digital health features that will save your healthcare providers time.</p>
              <p>We learned early on the importance of playing nice with others. Although it’s not required, we offer custom integrations to all major EHRs. Beam can connect to your EHR for integrated scheduling, billing, appointment history and length of visit data so providers can spend less time in their EHRs.</p>
              <p>Fill out the form below to be contacted by one of our Integration Specialists</p>
            </div>
          </div>
        </div>
      </div>

      {/*<div className={Style.section}>
        <h1 className={Style.title}>We Play Nice With Your EHR</h1>
        <p className={Style.subtitle}>A fully integrated suite of digital health features that will save your healthcare providers time.</p>
      </div>*/}
    </>
  )
};

export default EHR;
