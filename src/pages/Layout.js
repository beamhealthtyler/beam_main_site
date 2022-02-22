import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/solutions">Solutions</Link>
          </li>
          <li>
            <Link to="/mentalhealth">Mental Health</Link>
          </li>
          <li>
            <Link to="/patientengagement">Patient Engagement</Link>
          </li>
          <li>
            <Link to="/telehealth-landing-page">Telehealth</Link>
          </li>
          <li>
            <Link to="/online-payments">Online Payments</Link>
          </li>
          <li>
            <Link to="/patient-intake">Patient Intake</Link>
          </li>
          <li>
            <Link to="/enterprise-page">Enterprise Page</Link>
          </li>
          <li>
            <Link to="/for-clinics">For Clinics</Link>
          </li>
          <li>
            <Link to="/affiliate-partnerships-reseller-program">Affiliate Partnerships</Link>
          </li>
          <li>
            <Link to="/patients">Patients</Link>
          </li>
          <li>
            <Link to="/blogs">Blogs</Link>
          </li>
          <li>
            <Link to="/ehr-integrations">EHR Integrations</Link>
          </li>
          <li>
            <Link to="/case-studies">Case Studies</Link>
          </li>
          <li>
            <Link to="/state-telemedicine-policies">State Telemedicine Policies</Link>
          </li>
          <li>
            <Link to="/telemedicine-reibursement">Telemedicine Reibursement</Link>
          </li>
          <li>
            <Link to="/faq">FAQ</Link>
          </li>
          <li>
            <Link to="/beam-vs-others">Beam Vs Others</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;
