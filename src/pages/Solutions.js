import Style from './Styles/Solutions.module.css'
import React from "react";

class Solutions extends React.Component {

  state = {
    care: true,
    intelligent: false,
    integrated: false,
    direct: true,
    built: false,
    connected: false,
    digital: true,
    financial: false,
    know: false,
    always: true,
    journey: false,
  }

  render() {
    return (
      <div className={Style.backgroundImage}>
        <div className='container'>
          <div className={'row flip ' + Style.section}>
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
        {
          this.state.care &&
          <div className='col-md-6 col-sm-12'>
            <div className='section2-text'>
            <div className='section2-header'>Telehealth Made Personal</div>
            <div className='blue-background'>
              <div>Care only a click away</div>
              <div>HD, HIPAA compliant telehealth built to support a seamless face-to-face connection</div>
            </div>
            <div className='pointer' onClick={() => this.setState({care: false, intelligent: true, integrated: false})}>Intelligent Group Therapy Controls</div>
            <div className='pointer' onClick={() => this.setState({care: false, intelligent: false, integrated: true})}>Integrated note taking</div>
              <button type="button" className={"btn btn-secondary " + Style.solutionsButton}>Learn More</button>
            </div>
          </div>
        }
        {
          this.state.intelligent &&
          <div className='col-md-6 col-sm-12'>
            <div className='section2-text'>
            <div className='section2-header'>Telehealth Made Personal</div>
            <div className='pointer' onClick={() => this.setState({care: true, intelligent: false, integrated: false})}>Care only a click away</div>
            <div className='blue-background'>
              <div>Intelligent Group Therapy Controls</div>
              <div>Direct the flow of group therapy sessions. Use individual audio and video controls to make sure each patient has the chance to participate.</div>
            </div>
            <div className='pointer' onClick={() => this.setState({care: false, intelligent: false, integrated: true})}>Integrated note taking</div>
              <button type="button" className={"btn btn-secondary " + Style.solutionsButton}>Learn More</button>
            </div>
          </div>
        }
        {
          this.state.integrated &&
          <div className='col-md-6 col-sm-12'>
            <div className='section2-text'>
            <div className='section2-header'>Telehealth Made Personal</div>
            <div className='pointer' onClick={() => this.setState({care: true, intelligent: false, integrated: false})}>Care only a click away</div>
            <div className='pointer' onClick={() => this.setState({care: false, intelligent: true, integrated: false})}>Intelligent Group Therapy Controls</div>
            <div className='blue-background'>
              <div>Integrated note taking</div>
              <div>When you are able to take accurate notes, you are much more likely to provide an accurate diagnosis. With Beam, you can capture live notes and instantly update your records including EHR integrations.</div>
            </div>
              <button type="button" className={"btn btn-secondary " + Style.solutionsButton}>Learn More</button>
            </div>
          </div>
        }

        </div>
      </div>

    <div>
      {
        this.state.direct &&  <div className={Style.backgroundImage2}>
          <div className={'row flip ' + Style.sectionNoContainer}>
            <div className='col-md-6 col-sm-12'>
              <div className='section2-text'>
                <div className='section2-header'>Telehealth Made Personal</div>
                <div className='blue-background'>
                  <div>Direct control over your practice</div>
                  <div>Delegate purposefully- Use Beam to share management roles and control levels of employee access on our platform for comprehensive security and streamlined operations.</div>
                </div>
                <div className='pointer' onClick={() => this.setState({direct: false, built: true, connected: false})}>Beam built your way</div>
                <div className='pointer' onClick={() => this.setState({direct: false, built: false, connected: true})}>Stay connected from anywhere</div>
                <button type="button" className={"btn btn-secondary " + Style.solutionsButton}>Learn More</button>
              </div>
            </div>
            <div className='col-md-6 col-sm-12'>
              <img className={Style.solutionsImage2} src='https://beam.health/wp-content/uploads/2021/11/image-4.png'></img>
            </div>
          </div>
        </div>
      }
      {
        this.state.built &&  <div className={Style.backgroundImage2}>
          <div className={'row flip ' + Style.sectionNoContainer}>
            <div className='col-md-6 col-sm-12'>
              <div className='section2-text'>
                <div className='section2-header'>Telehealth Made Personal</div>
                <div className='pointer' onClick={() => this.setState({direct: true, built: false, connected: false})}>Direct control over your practice</div>
                <div className='blue-background'>
                  <div>Beam built your way</div>
                  <div>Customize your Beam platform by integrating calenders, EHRs, and more!</div>
                </div>
                <div className='pointer' onClick={() => this.setState({direct: false, built: false, connected: true})}>Stay connected from anywhere</div>
                <button type="button" className={"btn btn-secondary " + Style.solutionsButton}>Learn More</button>
              </div>
            </div>
            <div className='col-md-6 col-sm-12'>
              <img className={Style.solutionsImage2} src='https://beam.health/wp-content/uploads/2021/11/image-4.png'></img>
            </div>
          </div>
        </div>
      }
      {
        this.state.connected &&  <div className={Style.backgroundImage2}>
          <div className={'row flip ' + Style.sectionNoContainer}>
            <div className='col-md-6 col-sm-12'>
              <div className='section2-text'>
                <div className='section2-header'>Telehealth Made Personal</div>
                <div className='pointer' onClick={() => this.setState({direct: true, built: false, connected: false})}>Direct control over your practice</div>
                <div className='pointer' onClick={() => this.setState({direct: false, built: true, connected: false})}>Beam built your way</div>
                <div className='blue-background'>
                  <div>Stay connected from anywhere</div>
                  <div>Use the chat feature to speak with patients anytime, anywhere</div>
                </div>
                <button type="button" className={"btn btn-secondary " + Style.solutionsButton}>Learn More</button>
              </div>
            </div>
            <div className='col-md-6 col-sm-12'>
              <img className={Style.solutionsImage2} src='https://beam.health/wp-content/uploads/2021/11/image-4.png'></img>
            </div>
          </div>
        </div>
      }
    </div>

    <div>
    {this.state.digital &&
      <div className='container'>
        <div className={'row ' + Style.section}>
          <div className='col-md-6 col-sm-12'>
            <img className={Style.solutionsImage3} src='https://beam.health/wp-content/uploads/2021/11/Image-131.png'></img>
          </div>
          <div className='col-md-6 col-sm-12'>
            <div className='section2-text'>
              <div className='section2-header'>Features Providers and Patients Love</div>
              <div className='blue-background'>
                <div>Digital charging and invoicing</div>
                <div>Charge a credit card on-file for immediate payment collection or send them an invoice that can be paid in a set amount of time.</div>
              </div>
              <div className='pointer' onClick={() => this.setState({digital: false, financial: true, know: false})}>Financial Flexibility</div>
              <div className='pointer' onClick={() => this.setState({digital: false, financial: false, know: true})}>Know your numbers</div>
              <button type="button" className={"btn btn-secondary " + Style.solutionsButton}>Learn More</button>
            </div>
          </div>
        </div>
      </div>
    }
    {this.state.financial &&
      <div className='container'>
        <div className={'row ' + Style.section}>
          <div className='col-md-6 col-sm-12'>
            <img className={Style.solutionsImage3} src='https://beam.health/wp-content/uploads/2021/11/Image-131.png'></img>
          </div>
          <div className='col-md-6 col-sm-12'>
            <div className='section2-text'>
              <div className='section2-header'>Features Providers and Patients Love</div>
              <div className='pointer' onClick={() => this.setState({digital: true, financial: false, know: false})}>Digital charging and invoicing</div>
              <div className='blue-background'>
                <div>Financial Flexibility</div>
                <div>Beam allows provider to set up recurring payments to make patient bills more manageable</div>
              </div>
              <div className='pointer' onClick={() => this.setState({digital: false, financial: false, know: true})}>Know your numbers</div>
              <button type="button" className={"btn btn-secondary " + Style.solutionsButton}>Learn More</button>
            </div>
          </div>
        </div>
      </div>
    }
    {this.state.know &&
      <div className='container'>
        <div className={'row ' + Style.section}>
          <div className='col-md-6 col-sm-12'>
            <img className={Style.solutionsImage3} src='https://beam.health/wp-content/uploads/2021/11/Image-131.png'></img>
          </div>
          <div className='col-md-6 col-sm-12'>
            <div className='section2-text'>
              <div className='section2-header'>Features Providers and Patients Love</div>
              <div className='pointer' onClick={() => this.setState({digital: true, financial: false, know: false})}>Digital charging and invoicing</div>
              <div className='pointer' onClick={() => this.setState({digital: false, financial: true, know: false})}>Financial Flexibility</div>
              <div className='blue-background'>
                <div>Know your numbers</div>
                <div>Grow your practice with digital insights from Beam. Unlock new KPIs, such as Retention Rates and New Patient Transaction Values</div>
              </div>
              <button type="button" className={"btn btn-secondary " + Style.solutionsButton}>Learn More</button>
            </div>
          </div>
        </div>
      </div>
    }
    </div>

    <div>
      {
        this.state.always &&
        <div className={Style.backgroundImage2}>
          <div className={'row flip ' + Style.sectionNoContainer}>
            <div className='col-md-6 col-sm-12'>
              <div className='section2-text'>
                <div className='section2-header'>Telehealth Made Personal</div>
                <div className='blue-background'>
                  <div>Always have up-to-date patient info</div>
                  <div>Delegate purposefully- Use Beam to share management roles and control levels of employee access on our platform for comprehensive security and streamlined operations.</div>
                </div>
                <div className='pointer' onClick={() => this.setState({always: false, journey: true})}>Be there for the patient journey</div>
                <button type="button" className={"btn btn-secondary " + Style.solutionsButton}>Learn More</button>
              </div>
            </div>
            <div className='col-md-6 col-sm-12'>
              <img className={Style.solutionsImage2} src='https://beam.health/wp-content/uploads/2021/11/image-1-1.png'></img>
            </div>
          </div>
        </div>
      }
      {
        this.state.journey &&
        <div className={Style.backgroundImage2}>
          <div className={'row flip ' + Style.sectionNoContainer}>
            <div className='col-md-6 col-sm-12'>
              <div className='section2-text'>
                <div className='section2-header'>Telehealth Made Personal</div>
                <div className='pointer' onClick={() => this.setState({always: true, journey: false})}>Always have up-to-date patient info</div>
                <div className='blue-background'>
                  <div>Be there for the patient journey</div>
                  <div>Patients appreciate open and convienient access to their provider. Give them what they desire right from your homepage with:</div>
                  <ul>
                    <li>Live Chat</li>
                    <li>Appointment Requests</li>
                    <li>Telehealth</li>
                    <li>Much More</li>
                  </ul>
                </div>
                <button type="button" className={"btn btn-secondary " + Style.solutionsButton}>Learn More</button>
              </div>
            </div>
            <div className='col-md-6 col-sm-12'>
              <img className={Style.solutionsImage2} src='https://beam.health/wp-content/uploads/2021/11/image-1-1.png'></img>
            </div>
          </div>
        </div>
      }
    </div>
  </div>
    );
  }
}

export default Solutions;
