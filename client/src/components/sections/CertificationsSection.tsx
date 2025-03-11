import { CertificationsImages } from "../../assets";
import { CertificationItem } from "../items/CertificationItem";

export const CertificationsSection = () => {

  const certifications = Object.entries(CertificationsImages).map(([key, src]) => {
    const [platform, ...rest] = key.split("_"); // Split at the first `_`
    const certificateName = rest.join(" "); // Join remaining parts as the certificate name
    const platformFormatted = platform.charAt(0).toUpperCase() + platform.slice(1); // Capitalize platform name

    return {
      src,
      alt: `${platformFormatted} ${certificateName} Certificate`, // e.g., "Sololearn JavaScript Certificate"
    };
  });

  return (
    <section className="certifications" id="certifications">
      <h2 className="heading">
        Mes <span>Certifications</span>
      </h2>

      {/* Certifications item list */}
      <div className="certifications-container">
        {certifications.map((cert, index) => (
          <CertificationItem key={index} {...cert} />
        ))}
      </div>

    </section>
  );
};
