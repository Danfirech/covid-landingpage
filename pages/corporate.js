import styledComponents from "styled-components";
import TestOptionsCorporate from "../components/CorporatePage/TestOptionsCorporate";
import Navbar from "../components/Navbar";
import CallToActionCorporate from "../components/CorporatePage/CallToActionCorporate";
import AboutCorporate from "../components/CorporatePage/AboutCorporate";

const corporate = () => {
  return (
    <>
      <Navbar />
      <CallToActionCorporate />
      <TestOptionsCorporate />
      <AboutCorporate />
    </>
  );
};

export default corporate;
