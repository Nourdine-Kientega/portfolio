import ProfilImage from '../../assets/images/profil.jpg'

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
                <a href="#" title='Facebook'><i className='bx bxl-facebook' ></i></a>
                <a href="#" title='WhatsApp'><i className='bx bxl-whatsapp' ></i></a>
                {/* <a href="#"><i className='bx bxl-twitter' ></i></a> */}
                {/* <a href="#"><i className='bx bxl-instagram-alt' ></i></a> */}
                <a href="#" title='LinkedIn'><i className='bx bxl-linkedin' ></i></a>
            </div>
            <a href="https://nourdine-kientega.github.io/cv/" target="_blank" className="btn">View my CV</a>
        </div>
        <div className="home-img">
            <img src={ProfilImage} alt="" />
        </div>
    </section>
  )
};
