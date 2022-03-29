import './Styles/About.css';
import Scroll from './Component/scrollSlider'
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import React from "react";

class Home extends React.Component {

  state = {
    sas: false,
    ranga: false,
    andrew: false,
  }

  setsas = (e) => {
    if(e.target === e.currentTarget) {
        this.setState({sas: false})
    }
  }
  setranga = (e) => {
    if(e.target === e.currentTarget) {
        this.setState({ranga: false})
    }
  }
  setandrew = (e) => {
    if(e.target === e.currentTarget) {
        this.setState({andrew: false})
    }
  }

  render() {

      return (
        <div className="background-image-about">

          <div className='container about-container'>
            <div className="row section1">
              <div className="col-md-6">
                <h1 className='title'>The Future of Healthcare, Now</h1>
              </div>
              <div className="col-md-6">
                <img className='image1' src="https://beam.health/wp-content/uploads/2021/12/group-video-enterprise-landing-page.png"></img>
              </div>
            </div>
          </div>

          <div className="row section1-about">
            <div className="col-md-6">
              <img className='image1' src="https://beam.health/wp-content/uploads/2021/12/Group-1172.png"></img>
            </div>
            <div className="col-md-6">
              <div className='section2-text-about'>
                <h2 className="section2-title">The Potential of Virtual Care</h2>
                <p>Despite digital healthcare offerings growing faster than the rest of the economy, only about 15 percent of healthcare happens virtually today</p>
                <p>A convoluted payer framework, a byzantine healthcare system, and a lack of companies that marry clinical expertise with technology are constraining the impact of telehealth. There is enormous room for growth and improvement in virtual care</p>
                <p>Beam removes the barriers to telemedicine and helps more doctors scale their clinics, expand patient access to care, improve health outcomes, and reshape healthcare for the benefit of all- providers, patients, employers, and enterprises</p>
              </div>
            </div>
          </div>

          {/*Modal*/}

          {
            this.state.sas &&
            <div className='overlay' onClick={(e) => this.setsas(e)}>
              <div className='modal-container'>
                <div className='close' onClick={(e) => this.setsas(e)}></div>
                <div >
                  <img className='modal-image' src='https://beam.health/wp-content/uploads/2020/10/Sas-1-340x390.jpg'></img>
                </div>
                <div className="modal-text-container">
                  <p>Sas Ponnapalli</p>
                  <p>CEO, Co-Founder</p>
                  <p>Healthcare obsessed serial entrepreneur.</p>
                  <p>Virtual healthcare isn’t a fad for Sas- it’s his passion. Sas proposed a telemedicine mobile app as his capstone project way back during his final year at the University of Illinois. From there, Sas went on to become the founding CTO of PlushCare, a vertically integrated telemedicine practice that treats millions of patients in all 50 states. After learning the fundamentals of scaling a singular clinic, Sas decided to co-create Beam and bring virtual care to the masses.</p>
                </div>
              </div>
            </div>
          }
          {
            this.state.ranga &&
            <div className='overlay' onClick={(e) => this.setranga(e)}>
              <div className='modal-container'>
                <div className='close' onClick={(e) => this.setranga(e)}></div>
                <div >
                  <img className='modal-image' src='https://beam.health/wp-content/uploads/2020/11/Ranga.jpg'></img>
                </div>
                <div className="modal-text-container">
                  <p>Ranga Jayawardena</p>
                  <p>COO, Co-Founder</p>
                  <p>Cross-industry growth expertise.</p>
                  <p>Ranga has a foundation of business experience across several fields. His previous lives include roles as an award-winning National Sales Trainer at Bristol Myers Squibb, Enterprise Procurement Officer for healthcare data, and Ultra-High Net Worth Private Banker at J.P. Morgan. Ranga brings the spirit of a hustler to Beam.</p>
                </div>
              </div>
            </div>
          }
          {
            this.state.andrew &&
            <div className='overlay' onClick={(e) => this.setandrew(e)}>
              <div className='modal-container'>
                <div className='close' onClick={(e) => this.setandrew(e)}></div>
                <div >
                  <img className='modal-image' src='https://beam.health/wp-content/uploads/2020/10/Drew-1.jpg'></img>
                </div>
                <div className="modal-text-container">
                  <p>Andrew Jayakody</p>
                  <p>VP of Customer Success</p>
                  <p>Health System insider turned entrepreneur.</p>
                  <p>Drew spent a decade climbing the ladder of healthcare management at the Mount Sinai Health System in New York City. After managing practices in one of the nation’s top health systems (including during the COVID-19 pandemic), Drew brings experience from within the walls of a hospital system to Beam. He leads Beam’s account management team and is dedicated to helping our customers create thriving businesses.</p>
                </div>
              </div>
            </div>
          }

          <div className='container'>
            <div className="row section2">
              <h2 class='Executive'>Executive Team</h2>
                <div className="col-md-4  pointer" onClick={ () => this.setState({sas: true})}>
                  <div className='backgroundBlock'>
                    <div className='padding'>
                      <img className='beam-about-image sas'
                      src="https://beam.health/wp-content/uploads/2020/10/Sas-1-340x390.jpg"
                      onmouseover="this.src='http://icons.iconarchive.com/icons/fasticon/angry-birds/128/red-bird-icon.png'"
                      ></img>
                    </div>
                  </div>
                  <div className='section2-subtext-container'>
                    <p>Sas Ponnapalli</p>
                    <p>CEO, Co-Founder</p>
                    <p>Read More</p>
                  </div>
                </div>
                <div className="col-md-4 pointer" onClick={ () => this.setState({ranga: true})}>
                <div className='backgroundBlock'>
                  <div className='padding'>
                  <img className='beam-about-image ran' src="https://beam.health/wp-content/uploads/2020/11/Ranga-340x390.jpg"></img>
                </div>
                </div>
                  <div className='section2-subtext-container'>
                    <p>Ranga Jayawardena</p>
                    <p>COO, Co-Founder</p>
                    <p className='pointer'>Read More</p>
                  </div>
                </div>
                <div className="col-md-4 pointer" onClick={ () => this.setState({andrew: true})}>
                <div className='backgroundBlock'>
                  <div className='padding'>
                  <img className='beam-about-image andrew' src="https://beam.health/wp-content/uploads/2020/10/Drew-1-340x390.jpg"></img>
                  </div>
                </div>
                  <div className='section2-subtext-container'>
                    <p>Andrew Jayakody</p>
                    <p>VP of Customer Success</p>
                    <p className='pointer'>Read More</p>
                  </div>
                </div>
              </div>
          </div>

          <div className='about-featured'>Featured On</div>
          <Scroll/>

          <div className="row section3">
            <h1>Upgrade your practice</h1>
            <div className='button-container'>
                <Link to="/demo"><button type="button" className="btn btn-secondary">Learn More</button></Link>
                <Link to="/demo"><button type="button" className="btn btn-secondary">Book a demo</button></Link>
            </div>
          </div>
        </div>
      );
  }
}

export default Home;
