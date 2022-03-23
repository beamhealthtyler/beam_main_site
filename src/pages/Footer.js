import Style from './Styles/Footer.module.css'
import { useNavigate } from "react-router-dom";

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
                <li onClick={() => navigate("/about")}>About Us</li>
                <li>Solutions</li>
                <li>Patient Engagement</li>
                <li>Online Payments</li>
                <li>Patient Intake</li>
                <li>Telehealth</li>
                <li>Contact Us</li>
            </ul>
          </div>
          <div>
            <ul className={Style.unorderedList2}>
              <li>Resources</li>
              <li>Blog</li>
              <li>FAQ</li>
              <li>EHR Integrations</li>
              <li>Beam vs Others</li>
              <li>State Telemedicine Policies</li>
              <li>Telemedicine Reimbursement</li>
              <li>Case Studies</li>
              <li>Newsroom</li>
            </ul>
          </div>
          <div>
            <ul className={Style.unorderedList2}>
              <li>Who We Help</li>
              <li>For Clinics</li>
              <li>Affiliate Partnerships & Reseller Program</li>
              <li>Patients</li>
            </ul>
          </div>
          <div>
            <button type="button" className={"btn btn-secondary " + Style.red}>Request a Demo</button>
          </div>
        </div>
        <div className={Style.background}>
          <ul>
            <li><i class="fa-brands fa-instagram"></i></li>
            <li><i class="fa-brands fa-facebook-f"></i></li>
            <li><i class="fa-brands fa-twitter"></i></li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Footer;
