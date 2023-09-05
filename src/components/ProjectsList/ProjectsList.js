import { useTranslation } from "react-i18next";

import ProjectItem from "./ProjectItem";

import natoursPic from "../../assets/projects-img/natours-pic.png";
import designoPic from "../../assets/projects-img/designo-pic.png";
import nexterPic from "../../assets/projects-img/nexter-pic.png";
import witwPic from "../../assets/projects-img/where-in-the-world-pic.png";
import wildPic from "../../assets/projects-img/wildoasis-pic.png";
import pizzaPic from "../../assets/projects-img/fastreactpizza-pic.png";
import worldPic from "../../assets/projects-img/worldwise-pic.png";

const PROJECTS = [
  {
    name: "Natours",
    img: natoursPic,
    website: "https://alens-natours.surge.sh/",
    code: "https://github.com/calakovicalen/Natours",
    technologies: ["html", "css", "sass"],
    description: "Landing page built only with CSS (Sass).",
    opis: "Landing stranica napravljena uz pomoć CSS-a (Sass).",
  },
  {
    name: "Designo",
    img: designoPic,
    website: "https://designo.surge.sh/",
    code: "https://github.com/calakovicalen/designo",
    technologies: ["html", "css", "javascript", "react"],
    description: "Single page application built with React.",
    opis: "Single page applikacija napravljena uz pomoć React-a.",
  },
  {
    name: "Nexter",
    img: nexterPic,
    website: "https://alens-nexter.surge.sh/",
    code: "https://github.com/calakovicalen/Nexter",
    technologies: ["html", "css", "sass"],
    description: "Landing page built only with CSS (Sass).",
    opis: "Landing stranica napravljena uz pomoć CSS-a (Sass).",
  },
  {
    name: "Where in the World",
    img: witwPic,
    website: "https://rest-countries-api.surge.sh/",
    code: "https://github.com/calakovicalen/REST-County-API",
    technologies: ["html", "css", "javascript", "react"],
    description:
      "Single page application built with React which fetches data from API.",
    opis: "Single page applikacija napravljena uz pomoć React-a koja fetcha podatke iz API.",
  },
  {
    name: "The Wild Oasis",
    img: wildPic,
    website: "https://alens-wild-oasis.netlify.app/",
    code: "https://github.com/calakovicalen/wild-oasis",
    technologies: ["html", "styled-components", "react"],
    description: `Fullstack web application built with React and Supabase. To fully explore site please read README file.`,
    opis: "Fullstack web aplikacija napravljena uz pomoć React-a i Supabase. Da bi ste u potpunosti istražili stranicu pročitajte README fajl.",
  },
  {
    name: "Fast React Pizza",
    img: pizzaPic,
    website: "https://alens-fast-react-pizza.netlify.app/",
    code: "https://github.com/calakovicalen/fast-react-pizza",
    technologies: ["html", "tailwind", "react"],
    description: `Web application built using React and Tailwind.`,
    opis: "Web aplikacija napravljena uz pomoć React-a i Tailwind-a.",
  },
  {
    name: "The Wild oasis",
    img: worldPic,
    website: "https://alens-worldwise.netlify.app/",
    code: "https://github.com/calakovicalen/worldwise",
    technologies: ["html", "css", "react"],
    description: `Web application built with React and GeoLocation API. Please read README file to fully explore site.`,
    opis: "Web aplikacija napravljena uz pomoć React-a i GeoLocation API-a. Molim vas pročitajte README fajl kako bi ste mogli da istražite sajt u potpunosti.",
  },
];

function ProjectsList() {
  const [, i18n] = useTranslation("global");
  return (
    <section className="projects-list">
      <h2>Projects</h2>
      <ul>
        {PROJECTS.map(project => (
          <ProjectItem
            key={project.name}
            name={project.name}
            img={project.img}
            website={project.website}
            code={project.code}
            technologies={project.technologies}
            description={
              i18n.language === "srb" ? project.opis : project.description
            }
          />
        ))}
      </ul>
    </section>
  );
}

export default ProjectsList;
