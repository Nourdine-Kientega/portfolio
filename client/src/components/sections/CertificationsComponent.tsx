import { certificationsImages } from "../../assets/images";

const CertificationsComponent = () => {
  return (
    <section className="certifications" id="certifications">
         <h2 className="heading">Mes <span>Certifications</span></h2>

        <div className="certifications-container">
          <div className="certifications-box">
            <img src={certificationsImages.sololearn_HTML} alt="Sololearn HTML certificate" />
          </div>

          <div className="certifications-box">
            <img src={certificationsImages.sololearn_JavaScript} alt="Sololearn JavaScript certificate" />
          </div>

          <div className="certifications-box">
            <img src={certificationsImages.sololearn_WEB_DEV} alt="Sololearn Web Developpment certificate" />
          </div>

          <div className="certifications-box">
            <img src={certificationsImages.sololearn_SQL} alt="Sololearn SQL certificate" />
          </div>

        </div>
    </section>
  )
}

export default CertificationsComponent;