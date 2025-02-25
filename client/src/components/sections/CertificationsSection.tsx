import { CertificationsImages } from "../../assets";

export const CertificationsSection = () => {
  return (
    <section className="certifications" id="certifications">
      <h2 className="heading">
        Mes <span>Certifications</span>
      </h2>

      <div className="certifications-container">
        <div className="certifications-box">
          <img
            src={CertificationsImages.sololearn_HTML}
            alt="Sololearn HTML certificate"
          />
        </div>

        <div className="certifications-box">
          <img
            src={CertificationsImages.sololearn_JavaScript}
            alt="Sololearn JavaScript certificate"
          />
        </div>

        <div className="certifications-box">
          <img
            src={CertificationsImages.sololearn_WEB_DEV}
            alt="Sololearn Web Developpment certificate"
          />
        </div>

        <div className="certifications-box">
          <img
            src={CertificationsImages.sololearn_SQL}
            alt="Sololearn SQL certificate"
          />
        </div>
      </div>
    </section>
  );
};
