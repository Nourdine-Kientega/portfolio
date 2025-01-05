import ProfilImage from '../../assets/images/profil.jpg';
import cv from '../../assets/pdf/cv.pdf';

export const HomeComponent = () => {
  return (
    <section className="home" id="home">
        <div className="home-content">
            <h3>Salut, moi c'est</h3>
            <h1>Nourdine Kientega</h1>
            <h3>et je suis <span className="multiple-text"></span></h3>
            <p>
              Je suis un développeur full stack junior en auto-formation, je travaille principalement en frontend et backend, 
              et je m'efforce de toujours améliorer mes compétences pour offrir des solutions complètes et bien structurées.
              En tant que développeur frontend, je maîtrise des technologies comme HTML, CSS, JavaScript, et React, me permettant de 
              créer des interfaces utilisateurs modernes et réactives. Côté backend, je travaille avec des outils comme Node.js et des
               bases de données telles que PostgreSQL et MongoDB.
            </p>
            <div className="social-media">
                <a href="https://www.facebook.com/profile.php?id=100084107022127" rel="noopener noreferrer" target='_blank' title='Facebook'><i className='bx bxl-facebook' ></i></a>
                <a href="https://wa.me/+22674070440" rel="noopener noreferrer" target='_blank' title='WhatsApp'><i className='bx bxl-whatsapp' ></i></a>
                <a href="https://www.linkedin.com/in/nourdine-kientega-6660a8270" rel="noopener noreferrer" target='_blank' title='LinkedIn'><i className='bx bxl-linkedin' ></i></a>
            </div>
            <div className='cv'>
              <a href={cv} download='CV Kientega Nourdine.pdf' className="btn">Télécharger mon CV</a>
              <a href="https://nourdine-kientega.github.io/cv/" target="_blank" className="btn">Voir mon CV en ligne</a>
            </div>
        </div>
        <div className="home-img">
            <img src={ProfilImage} alt="Image de présentation" />
        </div>
    </section>
  )
};
