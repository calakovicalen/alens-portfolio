import { useState } from "react";
import { useTranslation } from "react-i18next";

import Button from "../Button/Button";

function ProjectItem({ name, img, website, code, technologies, description }) {
  const [isShow, setIsShow] = useState(false);
  const [t] = useTranslation("global");

  return (
    <li>
      <div className="project-item">
        <div
          className="project-item__image-container"
          onMouseEnter={() => setIsShow(true)}
          onMouseLeave={() => setIsShow(false)}
        >
          <img src={img} alt={`${name} project`} />
          {isShow && <div className="overlay">{description}</div>}
        </div>

        <div className="project-item__text-container">
          <h5>{name}</h5>

          <ul>
            {technologies.map(technology => (
              <li key={technology}>{technology}</li>
            ))}
          </ul>
        </div>

        <div className="project-item__button-container">
          <a href={website} target="_blank" rel="noreferrer">
            <Button>{t("projectItem.viewProject")}</Button>
          </a>
          <a href={code} target="_blank" rel="noreferrer">
            <Button>{t("projectItem.viewCode")}</Button>
          </a>
        </div>
      </div>
    </li>
  );
}

export default ProjectItem;
