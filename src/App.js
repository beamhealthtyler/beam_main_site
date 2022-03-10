import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home.js";
import About from "./pages/About.js";
import Solutions from "./pages/Solutions.js";
import Contact from "./pages/Contact";
import MentalHealth from "./pages/MentalHealth.js";
import PatientEngagement from "./pages/PatientEngagement.js";
import TelehealthLandingPage from "./pages/TelehealthLandingPage.js";
import OnlinePayments from "./pages/OnlinePayments.js";
import PatientIntake from "./pages/PatientIntake.js";
import EnterprisePage from "./pages/EnterprisePage.js";
import ForClinics from "./pages/ForClinics.js";
import AffiliatePartnershipsResellerProgram from "./pages/AffiliatePartnershipsResellerProgram.js";
import Blogs from "./pages/Blogs.js";
import EHR from "./pages/EHR.js";
import StateTelemedicinePolicies from "./pages/StateTelemedicinePolicies.js";
import BeamVsOthers from "./pages/BeamVsOthers.js";
import CaseStudies from "./pages/CaseStudies.js";
import Patients from "./pages/Patients.js";
import TelemedicineReibursement from "./pages/TelemedicineReibursement.js";
import FAQ from "./pages/FAQ.js";
import NoPage from "./pages/NoPage";

export default function App() {
  return (
        <BrowserRouter>
          <Routes>
             <Route path="/" element={<Layout />}>
               <Route index element={<Home />} />
               <Route path="home" element={<Home />} />
               <Route path="about" element={<About />} />
               <Route path="solutions" element={<Solutions />} />
               <Route path="mentalhealth" element={<MentalHealth />} />
               <Route path="patientengagement" element={<PatientEngagement />} />
               <Route path="telehealth-landing-page" element={<TelehealthLandingPage />} />
               <Route path="online-payments" element={<OnlinePayments />} />
               <Route path="patient-intake" element={<PatientIntake />} />
               <Route path="enterprise-page" element={<EnterprisePage />} />
               <Route path="for-clinics" element={<ForClinics />} />
               <Route path="affiliate-partnerships-reseller-program" element={<AffiliatePartnershipsResellerProgram />} />
               <Route path="patients" element={<Patients />} />
               <Route path="ehr-integrations" element={<EHR />} />
               <Route path="case-studies" element={<CaseStudies />} />
               <Route path="state-telemedicine-policies" element={<StateTelemedicinePolicies />} />
               <Route path="telemedicine-reibursement" element={<TelemedicineReibursement />} />
               <Route path="beam-vs-others" element={<BeamVsOthers />} />
               <Route path="blogs" element={<Blogs />} />
               <Route path="faq" element={<FAQ />} />
               <Route path="*" element={<NoPage />} />
             </Route>
           </Routes>
         </BrowserRouter>
  );
}
