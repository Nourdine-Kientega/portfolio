import AboutImage from '../../assets/images/profil.jpg'

export const AboutComponent = () => {
  return (
    <section className="about" id="about">
        <div className="about-img">
            <img src={AboutImage} alt="" />
        </div>

        <div className="about-content">
            <h2 className="heading">About <span>Me</span></h2>
            <h3>Full stack Developer</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, 
                nulla! Error, tempore vitae officia cum consequatur quae saepe iste blanditiis perferendis 
                veniam nemo neque cupiditate fugit ab, ad exercitationem possimus! Iure praesentium aliquam quasi 
                fugiat dolorum quod, corporis rem, cumque non iste animi odit totam quibusdam at et similique id.</p>
            {/* <a href="#" className="btn">Read more</a> */}
        </div>
    </section>
  )
};
