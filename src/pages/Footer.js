import Style from './Styles/Footer.module.css'
import { Outlet, Link, useNavigate } from "react-router-dom";

function Footer() {
  let navigate = useNavigate();
  return (
    <>
      <div className={Style.container}>
        <div>
          <div>
            <img alt="" width="209" height="45" data-src="https://beam.health/wp-content/uploads/2020/09/logo-copy.png" class="alignnone size-medium wp-image-88 lazyloaded" src="https://beam.health/wp-content/uploads/2020/09/logo-copy.png"></img>
          </div>
          <div>
            <ul className={Style.unorderedList}>
                <Link to="/about"><li>About Us</li></Link>
                <Link to="solutions"><li>Solutions</li></Link>
                <Link to="patientengagement"><li>Patient Engagement</li></Link>
                <Link to="online-payments"><li>Online Payments</li></Link>
                <Link to="patient-intake"><li>Patient Intake</li></Link>
                <Link to="telehealth-landing-page"><li>Telehealth</li></Link>
                {/*<Link to=""><li>Contact Us</li></Link>*/}
            </ul>
          </div>
          <div>
            <ul className={Style.unorderedList2}>
              <li>Resources</li>
              {/*<Link to="/blogs"><li>Blog</li></Link>*/}
              <Link to="faq"><li>FAQ</li></Link>
              <Link to="ehr-integrations"><li>EHR Integrations</li></Link>
              <Link to="beam-vs-others"><li>Beam vs Others</li></Link>
              <Link to="state-telemedicine-policies"><li>State Telemedicine Policies</li></Link>
              <Link to="telemedicine-reibursement"><li>Telemedicine Reimbursement</li></Link>
              <Link to="case-studies"><li>Case Studies</li></Link>
            </ul>
          </div>
          <div>
            <ul className={Style.unorderedList2}>
              <li>Who We Help</li>
              <Link to="for-clinics"><li>For Clinics</li></Link>
              <Link to="affiliate-partnerships-reseller-program"><li>Affiliate Partnerships & Reseller Program</li></Link>
              <Link to="patients"><li>Patients</li></Link>
            </ul>
          </div>
          <div>
            <button type="button" className={"btn btn-secondary " + Style.red}><Link to="/demo"><li>Request a Demo</li></Link></button>
          </div>
        </div>
        <div className={Style.footer2}>
          <div className={Style.background}>
            <ul>
              <li><a target="_blank" rel="noopener" href="https://www.instagram.com/beam.health/"><i class="fa-brands fa-instagram"></i></a></li>
              <li><a target="_blank" rel="noopener" href="https://www.facebook.com/beamhealthgroup/"><i class="fa-brands fa-facebook-f"></i></a></li>
              <li><a target="_blank" rel="noopener" href="https://twitter.com/BeamHealth"><i class="fa-brands fa-twitter"></i></a></li>
            </ul>
          </div>
          <div className={Style.footerColor}>
            <p>Join Our Newsletter</p>
            <div className='flex'>
              <input type="text" id="fname" name="fname" placeholder='Enter Email'></input>
              <button><i class="fas fa-arrow-right"></i></button>
            </div>
          </div>
        </div>
        <div className={Style.rightsReserved}>
          <div>
            <p>All Rights Reserved. Beam Health, Inc</p>
            <div className='flex'>
              <p><a href="https://beam.health/privacy-policy/" target="_blank">Privacy Policy</a></p>
              <p className={Style.privacyPolicy}>|</p>
              <p><a href="https://beam.health/terms-and-conditions/" target="_blank">Terms and Conditions</a></p>
            </div>
          </div>
        </div>

      </div>
      <Outlet />
    </>
  );
}

export default Footer;
