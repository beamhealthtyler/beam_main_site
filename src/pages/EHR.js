import Style from './Styles/EHR.module.css';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const EHR = () => {

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

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
              <div className={'inputFormContainer ' + Style.EHRformMobile}>
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

      <div className={Style.container}>
        <Carousel
        responsive={responsive} infinite={true}>
          <img src='https://beam.health/wp-content/uploads/2020/10/Image-29.jpg'></img>
          <img src='https://beam.health/wp-content/uploads/2020/10/Image-41.jpg'></img>
          <img src='https://beam.health/wp-content/uploads/2020/10/Image-44.jpg'></img>
          <img src='https://beam.health/wp-content/uploads/2020/10/Image-45.jpg'></img>
          <img src='https://beam.health/wp-content/uploads/2020/10/Image-46.jpg'></img>
        </Carousel>
      </div>

      <div className={Style.section}>
        <h1 className={Style.title + ' center'}>We Play Nice With Your EHR</h1>
        <p className={Style.subtitle}>A fully integrated suite of digital health features that will save your healthcare providers time.</p>
      </div>


      <div className={Style.container}>
        <Carousel responsive={responsive} infinite={true}>
          <img src='https://beam.health/wp-content/uploads/2020/10/Image-52.jpg'></img>
          <img src='https://beam.health/wp-content/uploads/2020/10/Image-51.jpg'></img>
          <img src='https://beam.health/wp-content/uploads/2020/10/Image-50.jpg'></img>
          <img src='https://beam.health/wp-content/uploads/2020/10/Image-49.jpg'></img>
          <img src='https://beam.health/wp-content/uploads/2020/10/Image-48.jpg'></img>
          <img src='https://beam.health/wp-content/uploads/2020/10/Image-47.jpg'></img>
        </Carousel>
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

export default EHR;
