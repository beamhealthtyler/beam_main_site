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
{/*              <Link to="/blogs"><li>Blog</li></Link>*/}
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
      {/*  <div className={Style.background}>
          <ul>
            <li><i class="fa-brands fa-instagram"></i></li>
            <li><i class="fa-brands fa-facebook-f"></i></li>
            <li><i class="fa-brands fa-twitter"></i></li>
          </ul>
        </div>*/}
      </div>
      <Outlet />
    </>
  );
}

export default Footer;
