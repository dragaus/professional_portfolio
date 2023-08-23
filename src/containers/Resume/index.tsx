import React, { useState } from "react";
import CertificateCard from "../../components/certificate_card";
import ExperienceCard from "../../components/experience_card";
import { certificates } from "../../constants/certificates";
import { experiences } from "../../constants/experience";

const Resume: React.FC = () => {
  const [showCertificates, setShowCertificates] = useState(true);

  return (
    <div className="page">
      <h2>Resume</h2>
      <h3>Skills</h3>
      <h3>Experience</h3>
      <div className="flex_column centered">
        {experiences.map((experience) => (
          <ExperienceCard experience={experience} />
        ))}
      </div>
      <h3 onClick={() => setShowCertificates(!showCertificates)}>
        Certificates
      </h3>
      <div>
        <div className="flex_row wrapped centered">
          {showCertificates &&
            certificates.map((certificate) => (
              <CertificateCard certificate={certificate} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Resume;
