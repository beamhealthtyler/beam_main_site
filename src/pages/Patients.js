import Style from './Styles/Affiliate.module.css'

const Patients = () => {
  return (
    <>
      <div className={Style.section}>
        <div className='container'>
          <div className="row">
            <div className="col-md-6">
              <img className='image1' src="https://beam.health/wp-content/uploads/2021/12/image-4.png"></img>
            </div>
            <div className="col-md-6">
              <h1 className='title'>Beam puts patients at the center of everything we do.</h1>
              <p>Companies that have either a network of affiliated providers or patients interested in virtual care make great partners with Beam.</p>
              <p>Patients who are looking to connect with a healthcare provider that is currently using Beam should refer their medical practice to access their unique Beam customer support team. All other patients can call (212) 547-9860 or complete the form below to find a clinic.</p>
              <p>Fill out the form below to be contacted by one of our Business Development Representatives</p>
            </div>
          </div>
        </div>
      </div>

      <div className={Style.section}>
        <h1 className={Style.title}>Get ready for a “WOW” experience.</h1>
        <p className={Style.subtitle}>Built to upgrade medical practices and empower patients. Clinics of all sizes and specialties from solo practices to health systems-use Beam Health to connect with patients virtually and supplement their offices with a thriving telehealth line of business.</p>
      </div>
    </>
  )
};

export default Patients;
