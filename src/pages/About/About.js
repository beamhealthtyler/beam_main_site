import '../Styles/About.css';
import { Helmet } from "react-helmet";

function Home() {
  return (
    <div className="background-image-about">

      <div className='container'>
        <div className="row section1">
          <div className="col-md-6">
            <h1 className='title'>The Future of Healthcare, Now</h1>
          </div>
          <div className="col-md-6">
            <img className='image1' src="https://beam.health/wp-content/uploads/2021/12/group-video-enterprise-landing-page.png"></img>
          </div>
        </div>
      </div>

      <div className="row section1">
        <div className="col-md-6">
          <img className='image1' src="https://beam.health/wp-content/uploads/2021/12/Group-1172.png"></img>
        </div>
        <div className="col-md-6">
          <div className='section2-text'>
            <h2 className="section2-title">The Potential of Virtual Care</h2>
            <p>Despite digital healthcare offerings growing faster than the rest of the economy, only about 15 percent of healthcare happens virtually today</p>
            <p>A convoluted payer framework, a byzantine healthcare system, and a lack of companies that marry clinical expertise with technology are constraining the impact of telehealth. There is enormous room for growth and improvement in virtual care</p>
            <p>Beam removes the barriers to telemedicine and helps more doctors scale their clinics, expand patient access to care, improve health outcomes, and reshape healthcare for the benefit of all- providers, patients, employers, and enterprises</p>
          </div>
        </div>
      </div>

      <div className='container'>
        <div className="row section2">
          <h2>Executive Team</h2>
            <div className="col-md-4">
              <img className='section2-image' src="https://beam.health/wp-content/uploads/2020/10/Sas-1-340x390.jpg"></img>
              <div className='section2-subtext-container'>
                <p>Sas Ponnapalli</p>
                <p>CEO, Co-Founder</p>
                <p>Read More</p>
              </div>
            </div>
            <div className="col-md-4">
              <img className='section2-image' src="https://beam.health/wp-content/uploads/2020/11/Ranga-340x390.jpg"></img>
              <div className='section2-subtext-container'>
                <p>Sas Ponnapalli</p>
                <p>CEO, Co-Founder</p>
                <p>Read More</p>
              </div>
            </div>
            <div className="col-md-4">
              <img className='section2-image' src="https://beam.health/wp-content/uploads/2020/10/Drew-1-340x390.jpg"></img>
              <div className='section2-subtext-container'>
                <p>Sas Ponnapalli</p>
                <p>CEO, Co-Founder</p>
                <p>Read More</p>
              </div>
            </div>
          </div>
      </div>


      <div className="row section3">
        <h1>Upgrade your practice</h1>
        <div className='button-container'>
            <button type="button" className="btn btn-secondary">Learn More</button>
            <button type="button" className="btn btn-secondary">Book a demo</button>
        </div>
      </div>
    </div>
  );
}

export default Home;
