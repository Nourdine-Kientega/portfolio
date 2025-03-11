import { SkillsImages } from "../../assets";
import { SkillItem } from "../items/SkillItem";

export const SkillsSection = () => {

  const skills = Object.entries(SkillsImages).map(([key, src]) => {
    const skillName = key.replace("_", " "); // Format name
    const roundedImages = ["JavaScript"];
    return {
      src,
      alt: `${skillName} logo`,
      label: skillName,
      imgClassName: roundedImages.includes(key) ? "rounded" : "",
    };
  });


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

      {/* Skills items */}
      <div className="skills-container">
        {skills.map((skill, index) => (
          <SkillItem key={index} {...skill} />
        ))}
      </div>

    </section>
  );
};
