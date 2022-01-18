import React from "react";
import CertificateCard from "../../components/certificate_card";
import { certificates } from "../../constants/certificates";

const Resume = () => {
  return (
    <div className="page">
      <h2>Resume</h2>
      <div>
        <h3>Certificates</h3>
        <div className="flex_row wrapped centered">
          {certificates.map((certificate) => (
            <CertificateCard certificate={certificate} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Resume;
