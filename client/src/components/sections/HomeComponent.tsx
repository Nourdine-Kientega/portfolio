import ProfilImage from '../../assets/images/profil.jpg'

export const HomeComponent = () => {
  return (
    <section className="home" id="home">
        <div className="home-content">
            <h3>Hello, It's Me</h3>
            <h1>Nourdine Kientega</h1>
            <h3>And I'm a <span className="multiple-text"></span></h3>
            <p>Kientega Nourdine dolor sit amet consectetur adipisicing elit. Distinctio voluptas fuga magnam aspernatur, deleniti ex incidunt ipsa perspiciatis hic reiciendis repellat, suscipit architecto itaque reprehenderit quo sequi similique quas dolores!</p>
            <div className="social-media">
                <a href="#"><i className='bx bxl-facebook' ></i></a>
                <a href="#"><i className='bx bxl-twitter' ></i></a>
                <a href="#"><i className='bx bxl-instagram-alt' ></i></a>
                <a href="#"><i className='bx bxl-linkedin' ></i></a>
            </div>
            <a href="https://kientega-nourdine.github.io/CV/" target="_blank" className="btn">View CV</a>
        </div>
        <div className="home-img">
            <img src={ProfilImage} alt="" />
        </div>
    </section>
  )
};
