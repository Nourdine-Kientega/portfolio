export const ServicesSection = () => {
  return (
    <section className="services" id="services">
      <h2 className="heading">
        Mes <span>Services</span>
      </h2>

      <div className="services-container">
        <div className="services-box">
          <i className="bx bx-code"></i>
          <h3>Développement Frontend</h3>
          <p>
            Je propose des solutions en développement web, tant en frontend
            qu’en backend. Passionné par la création d’interfaces modernes et
            intuitives, je maîtrise des technologies comme HTML, CSS, JavaScript
            et React.js, ce qui me permet de concevoir des sites responsives et
            optimisés pour l’utilisateur.
          </p>
        </div>
        <div className="services-box">
          <i className="bx bx-code-alt"></i>
          <h3>Développement Backend</h3>
          <p>
            En backend, j’ai une bonne expérience avec Node.js, Express.js, et
            la gestion de bases de données comme MongoDB et PostgreSQL. Bien que
            je continue à approfondir mes compétences, je suis capable de
            développer des fonctionnalités solides et sécurisées pour répondre
            aux besoins des projets web.
          </p>
        </div>
        <div className="services-box">
          <i className="bx bx-bar-chart"></i>
          <h3>Design Graphique</h3>

          <p>
            Je m’intéresse également au design graphique, où j’utilise des
            outils de la suite Adobe, en particulier Photoshop, pour concevoir
            des designs visuels. Bien que je sois encore en apprentissage dans
            ce domaine, je suis motivé à répondre à des besoins créatifs simples
            tout en perfectionnant mes compétences.
          </p>
        </div>
      </div>
    </section>
  );
};
