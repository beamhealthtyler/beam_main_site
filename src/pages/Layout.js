import { Outlet, Link, useNavigate } from "react-router-dom";
import { Navbar, Container, NavDropdown, Nav} from 'react-bootstrap';

const Layout = () => {
  let navigate = useNavigate();
  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand onClick={() => navigate("/home")}>Beam Health</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">


             <Nav.Link onClick={() => navigate("/about")}>About Us</Nav.Link>

              <Nav.Link onClick={() => navigate("/demo")}>Book a Demo</Nav.Link>
              <NavDropdown title="Solutions" id="basic-nav-dropdown">
                <NavDropdown.Item onClick={() => navigate("/solutions")}>Solutions</NavDropdown.Item>
                <NavDropdown.Item onClick={() => navigate("/mentalhealth")}>Mental Health</NavDropdown.Item>
                <NavDropdown.Item onClick={() => navigate("/patientengagement")}>Patient Engagement</NavDropdown.Item>
                <NavDropdown.Item onClick={() => navigate("/telehealth-landing-page")}>Telehealth</NavDropdown.Item>
                <NavDropdown.Item onClick={() => navigate("/online-payments")}>Online Payments</NavDropdown.Item>
                <NavDropdown.Item onClick={() => navigate("/patient-intake")}>Patient Intake</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Who We Help" id="basic-nav-dropdown">
                <NavDropdown.Item onClick={() => navigate("/enterprise-page")}>Enterprise Page</NavDropdown.Item>
                <NavDropdown.Item onClick={() => navigate("/for-clinics")}>For Clinics</NavDropdown.Item>
                <NavDropdown.Item onClick={() => navigate("/affiliate-partnerships-reseller-program")}>Affiliate Partnerships</NavDropdown.Item>
                <NavDropdown.Item onClick={() => navigate("/patients")}>Patients</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Resources" id="basic-nav-dropdown">
                <NavDropdown.Item onClick={() => navigate("/blogs")}>Blogs</NavDropdown.Item>
                <NavDropdown.Item onClick={() => navigate("/ehr-integrations")}>EHR Integrations</NavDropdown.Item>
                <NavDropdown.Item onClick={() => navigate("/case-studies")}>Case Studies</NavDropdown.Item>
                <NavDropdown.Item onClick={() => navigate("/state-telemedicine-policies")}>State Telemedicine Policies</NavDropdown.Item>
                <NavDropdown.Item onClick={() => navigate("/telemedicine-reibursement")}>Telemedicine Reibursement</NavDropdown.Item>
                <NavDropdown.Item onClick={() => navigate("/faq")}>FAQ</NavDropdown.Item>
                <NavDropdown.Item onClick={() => navigate("/beam-vs-others")}>Beam Vs Others</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
          <div className='callus'>Call us at (929) 226-0624</div>
          <div>Book a Demo</div>
        </Container>
      </Navbar>
      <Outlet />
    </>
  )
};

export default Layout;
