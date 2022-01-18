import React from "react";
import { CertificateData } from "../../utils/types";
import styles from "./styles.module.css";

interface CertificateCardInterface {
  certificate: CertificateData;
}

const CertificateCard: React.FC<CertificateCardInterface> = ({
  certificate,
}) => {
  return (
    <div
      onClick={() => window.open(certificate.certificateLink, "_blank")}
      className={styles.certificate_card}
    >
      <p>{certificate.courseName}</p>
      <div className={styles.certificate_card_frame}>
        <img src={certificate.imageLink} alt={certificate.courseName} />
      </div>
      <p>Finish: {certificate.finishDate}</p>
    </div>
  );
};

export default CertificateCard;
