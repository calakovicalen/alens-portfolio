import { useTranslation } from "react-i18next";

import SkillItem from "./SkillItem";

const SKILLS = [
  {
    skill: "HTML",
    experience: "3 Years Experience",
    iskustvo: "3 Godine Iskustva",
  },
  {
    skill: "CSS",
    experience: "3 Years Experience",
    iskustvo: "3 Godine Iskustva",
  },
  {
    skill: "Javascript",
    experience: "3 Years Experience",
    iskustvo: "3 Godine Iskustva",
  },
  {
    skill: "React",
    experience: "2 Years Experience",
    iskustvo: "2 Godine Iskustva",
  },
  {
    skill: "Sass",
    experience: "2 Years Experience",
    iskustvo: "2 Godine Iskustva",
  },
];

function SkillsList() {
  const [, i18n] = useTranslation("global");

  return (
    <ul className="skill-list">
      {SKILLS.map(skill => (
        <SkillItem
          skill={skill.skill}
          experience={
            i18n.language === "srb" ? skill.iskustvo : skill.experience
          }
          key={skill.skill}
        />
      ))}
    </ul>
  );
}

export default SkillsList;
