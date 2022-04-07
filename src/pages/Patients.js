import Style from './Styles/Patients.module.css'

const Patients = () => {
  return (
    <>
      <div className={Style.section}>
        <div className='container'>
          <div className="row">
            <div className="col-md-6">
              <img className='image1' src="https://beam.health/wp-content/uploads/2021/12/image-4.png"></img>
            </div>
            <div className={"col-md-6 " + Style.patientstextcontainer}>
              <h1 className={Style.title}>Beam puts patients at the center of everything we do.</h1>
              <p>Companies that have either a network of affiliated providers or patients interested in virtual care make great partners with Beam.</p>
              <p>Patients who are looking to connect with a healthcare provider that is currently using Beam should refer their medical practice to access their unique Beam customer support team. All other patients can call (212) 547-9860 or complete the form below to find a clinic.</p>
              <p>Fill out the form below to be contacted by one of our Business Development Representatives</p>
              <div className={'inputFormContainer ' + Style.patientInputContainer}>
                <div className='row'>
                  <div className='col-md-6 col-sm-12'>
                    <div>
                      <div className='flex'>
                        <p>First Name</p><p className='astrisk'>*</p>
                      </div>
                      <input type='text' placeholder='John' className='inputformsmall'></input>
                    </div>
                  </div>
                  <div className='col-md-6 col-sm-12'>
                    <div>
                      <div className='flex'>
                        <p>Last Name</p><p className='astrisk'>*</p>
                      </div>
                      <input type='text' placeholder='Doe' className='inputformsmall'></input>
                    </div>
                  </div>
                </div>
                <div className='row'>
                  <div className='col-md-6 col-sm-12'>
                    <div>
                      <div className='flex'>
                        <p>Phone</p>
                      </div>
                      <input type='text' placeholder='E.g. +1 3004005000' className='inputformsmall'></input>
                    </div>
                  </div>
                  <div className='col-md-6 col-sm-12'>
                    <div>
                      <div className='flex'>
                        <p>Email</p><p className='astrisk'>*</p>
                      </div>
                      <input type='text' placeholder='E.g. john@doe.com' className='inputformsmall'></input>
                    </div>
                  </div>
                </div>
                <div className='row'>
                  <div className='col-md-6 col-sm-12'>
                    <div>
                      <div className='flex'>
                        <p>Chief Complaint</p>
                      </div>
                      <input type='text' placeholder='John Doe' className='inputformsmall'></input>
                    </div>
                  </div>
                  <div className='col-md-6 col-sm-12'>
                    <div>
                      <div className='flex'>
                        <p>State you are located in</p>
                      </div>
                      <input type='text' placeholder='E.g. California' className='inputformsmall'></input>
                    </div>
                  </div>
                </div>
                <div className='row'>
                  <div className='col'>
                    <div>
                      <div className='flex'>
                        <p>Type of provider</p>
                      </div>
                      <input type='text' placeholder='John Doe' className='inputformsmall'></input>
                    </div>
                  </div>
                </div>
                  <button type="button" className={"btn btn-secondary red submitformbutton"}>Submit</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={Style.section2}>
        <h1 className={Style.title2}>Get ready for a “WOW” experience.</h1>
        <p className={Style.subtitle}>Built to upgrade medical practices and empower patients. Clinics of all sizes and specialties from solo practices to health systems-use Beam Health to connect with patients virtually and supplement their offices with a thriving telehealth line of business.</p>
      </div>

      <div className='row'>
        <div className='col'>
          <iframe src="https://meetings.hubspot.com/drew160/beam-health-demo?embed=true&amp;parentHubspotUtk=653dcb903fc615dc2dcbbcb3f3f109ec&amp;parentPageUrl=https://beam.health/request-a-free-demo/&amp;ab=undefined&amp;abStatus=undefined&amp;contentId=undefined" width="100%" style={{minWidth: "312px", minHeight: '516px', height: "756px", border: "none"}}></iframe>
        </div>
      </div>
    </>
  )
};

export default Patients;
