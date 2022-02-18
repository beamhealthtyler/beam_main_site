import './Home.css';
import { Helmet } from "react-helmet";

function Home() {
  return (
    <div className="background-image">
      <div className='container'>

        <div className='row'>
          <div className='col'>
            <h1 className='header-text'>Telehealth Engineered For Reliability</h1>
          </div>
        </div>

        <div className='row'>
          <div className='col-md-6 col-sm-12'>
            <video className='video' autoplay loop muted src="https://beam.health/wp-content/uploads/2021/11/ezgif.com-gif-maker-1.mp4" playsinline></video>
          </div>
          <div className='col-md-6 col-sm-0'>
            <div className="beam-health-header-text">
              <div>Whether you are a new practice trying to acquire patients or a healthcare enterprise with thousands of clinicians, you need a fail-proof way to see patients remotely.</div>
              <div>You can use Beam’s telehealth functionality for free, right now! Try your own mock telehealth visit below.</div>
              <button type="button" class="btn btn-secondary">Try Beam Free</button>
            </div>
          </div>
        </div>

        <div className='row section2'>
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
              <button type="button" class="btn btn-secondary">Learn More</button>
            </div>
          </div>
          <div className='col-md-6 col-sm-12'>
            <img className='image section2-image' src='https://beam.health/wp-content/uploads/2021/11/Image-124-2.png'></img>
          </div>
        </div>
      </div>


        {/* Featured On Section*/}

        <div className='row section3-background'>
          <div className='col-md-6 col-sm-12'>
            <div className='mascot-text'>
              <div>How much more can you make with Beam?</div>
              <div>Find out in 2 minutes how much you lost due to your patient collections process</div>
              <button type="button" class="btn btn-secondary">See Your Savings</button>
            </div>
          </div>
          <div className='col-md-6 col-sm-12'>
            <img className='image' src='https://beam.health/wp-content/uploads/2021/11/mascot_03.png'></img>
          </div>
        </div>

        <div className='row'>
          <div className='col'>
            <div class='craft-and-measure'>Craft and Measure the Patient Experience</div>
          </div>
        </div>

        <div className='row'>
          <div className='col'>

          </div>
        </div>



    </div>
  );
}

export default Home;
