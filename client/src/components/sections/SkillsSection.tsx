import { SkillsImages } from "../assets";

export const SkillsSection = () => {
  return (
    <section className="skills" id="skills">
      <h2 className="heading">
        Mes <span>Compétences</span>
      </h2>

      <p>
        Ci-dessous, vous trouverez la liste des compétences sur lesquelles je me
        concentre et continue de progresser. Ces technologies sont celles que
        j’utilise régulièrement dans mes projets et sur lesquelles je cherche à
        évoluer constamment.
      </p>
      <div className="skills-container">
        <div className="skills-box">
          <img
            className="js_rounded"
            src={SkillsImages.JavaScript}
            alt="JavaScript image"
          />
          <h3>JavaScript</h3>
        </div>

        <div className="skills-box">
          <img src={SkillsImages.TypeScript} alt="HTML image" />
          <h3>TypeScript</h3>
        </div>

        <div className="skills-box">
          <img src={SkillsImages.React} alt="HTML image" />
          <h3>React.js</h3>
        </div>

        <div className="skills-box">
          <img src={SkillsImages.React_native} alt="HTML image" />
          <h3>React Native</h3>
        </div>

        <div className="skills-box">
          <img src={SkillsImages.Nodejs} alt="HTML image" />
          <h3>Node.js</h3>
        </div>

        <div className="skills-box">
          <img src={SkillsImages.GitHub} alt="HTML image" />
          <h3>Git/GitHub</h3>
        </div>

        <div className="skills-box">
          <img src={SkillsImages.MySQL} alt="HTML image" />
          <h3>MySQL</h3>
        </div>

        <div className="skills-box">
          <img src={SkillsImages.MongoDB} alt="HTML image" />
          <h3>MongoDB</h3>
        </div>
      </div>
    </section>
  );
};
