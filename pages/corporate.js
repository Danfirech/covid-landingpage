import styledComponents from "styled-components";
import TestOptionsCorporate from "../components/CorporatePage/TestOptionsCorporate";
import Navbar from "../components/Navbar";
import CallToActionCorporate from "../components/CorporatePage/CallToActionCorporate";

const corporate = () => {
  return (
    <>
      <Navbar />
      <CallToActionCorporate />
      <TestOptionsCorporate />
    </>
  );
};

export default corporate;
