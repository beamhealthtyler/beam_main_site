import { Outlet, Link, useNavigate } from "react-router-dom";
import { Navbar, Container, NavDropdown, Nav} from 'react-bootstrap';

const Layout = () => {
  let navigate = useNavigate();
  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="/home">Beam Health</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">


             <Nav.Link onClick={() => navigate("/about")}>About Us</Nav.Link>

              <Nav.Link href="/demo">Book a Demo</Nav.Link>
              <NavDropdown title="Solutions" id="basic-nav-dropdown">
                <NavDropdown.Item href="/solutions">Solutions</NavDropdown.Item>
                <NavDropdown.Item href="/mentalhealth">Mental Health</NavDropdown.Item>
                <NavDropdown.Item href="/patientengagement">Patient Engagement</NavDropdown.Item>
                <NavDropdown.Item href="/telehealth-landing-page">Telehealth</NavDropdown.Item>
                <NavDropdown.Item href="/online-payments">Online Payments</NavDropdown.Item>
                <NavDropdown.Item href="/patient-intake">Patient Intake</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Who We Help" id="basic-nav-dropdown">
                <NavDropdown.Item href="/enterprise-page">Enterprise Page</NavDropdown.Item>
                <NavDropdown.Item href="/for-clinics">For Clinics</NavDropdown.Item>
                <NavDropdown.Item href="/affiliate-partnerships-reseller-program">Affiliate Partnerships</NavDropdown.Item>
                <NavDropdown.Item href="/patients">Patients</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Resources" id="basic-nav-dropdown">
                <NavDropdown.Item href="/blogs">Blogs</NavDropdown.Item>
                <NavDropdown.Item href="/ehr-integrations">EHR Integrations</NavDropdown.Item>
                <NavDropdown.Item href="/case-studies">Case Studies</NavDropdown.Item>
                <NavDropdown.Item href="/state-telemedicine-policies">State Telemedicine Policies</NavDropdown.Item>
                <NavDropdown.Item href="/telemedicine-reibursement">Telemedicine Reibursement</NavDropdown.Item>
                <NavDropdown.Item href="/faq">FAQ</NavDropdown.Item>
                <NavDropdown.Item href="/beam-vs-others">Beam Vs Others</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Outlet />
    </>
  )
};

export default Layout;
