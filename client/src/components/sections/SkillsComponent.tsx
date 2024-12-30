import { skillsImages } from "../../assets/images";

export const SkillsComponent = () => {
  return (
    <section className="skills" id="skills">
      <h2 className="heading">Mes <span>Compétences</span></h2>

      <p>
        Ci-dessous, vous trouverez la liste des compétences sur lesquelles je me concentre et continue de progresser. Ces technologies sont celles que j’utilise régulièrement dans mes projets et sur lesquelles je cherche à évoluer constamment.
      </p>
      <div className="skills-container">
        <div className="skills-box">
          <img src={skillsImages.JavaScript} alt="HTML image" />
          <h3>JavaScript</h3>
        </div>

        <div className="skills-box">
          <img src={skillsImages.TypeScript} alt="HTML image" />
          <h3>TypeScript</h3>
        </div>

        <div className="skills-box">
          <img src={skillsImages.React} alt="HTML image" />
          <h3>React.js</h3>
        </div>

        <div className="skills-box">
          <img src={skillsImages.React_native} alt="HTML image" />
          <h3>React Native</h3>
        </div>

        <div className="skills-box">
          <img src={skillsImages.Nodejs} alt="HTML image" />
          <h3>Node.js</h3>
        </div>

        <div className="skills-box">
          <img src={skillsImages.GitHub} alt="HTML image" />
          <h3>Git/GitHub</h3>
        </div>

        <div className="skills-box">
          <img src={skillsImages.MySQL} alt="HTML image" />
          <h3>MySQL</h3>
        </div>

        <div className="skills-box">
          <img src={skillsImages.MongoDB} alt="HTML image" />
          <h3>MongoDB</h3>
        </div>

      </div>
    </section>
  )
};
