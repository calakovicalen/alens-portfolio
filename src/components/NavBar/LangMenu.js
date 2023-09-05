import { useTranslation } from "react-i18next";

function LangMenu() {
  const [, i18n] = useTranslation("global");

  function handleChangeLanguage(lang) {
    i18n.changeLanguage(lang);
  }

  return (
    <div className="lang-menu">
      <button onClick={() => handleChangeLanguage("srb")}>SRB</button>
      <button onClick={() => handleChangeLanguage("en")}>ENG</button>
    </div>
  );
}

export default LangMenu;
