import { useTranslation } from "react-i18next";
import myPic from "../../assets/myPic.PNG";

import Button from "../Button/Button";

function Header() {
  const [t] = useTranslation("global");

  return (
    <header className="header">
      <div className="header__image-container">
        <img src={myPic} alt="My sweet face" />
      </div>

      <div className="header__content">
        <h1>
          {t("header.h1")}
          <br /> {t("header.introduction")}
          <span>{t("header.name")}</span>.
        </h1>
        <p>{t("header.paragraph")}</p>
        <a href="#contact">
          <Button>{t("header.button")}</Button>
        </a>
      </div>
    </header>
  );
}

export default Header;
