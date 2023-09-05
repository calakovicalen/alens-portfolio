import { useTranslation } from "react-i18next";

const WORKS = [
  {
    company: "Xare",
    position: "Front End developer",
    description:
      "I worked on fixing their mobile application design bugs through CSS and some of functionalities through JavaScript. I also worked on implementing and building from scratch new application screens, with help of Figma I was making their application design pixel perfect and I used JavaScript to mostly manipulate DOM and fetch some data from JSON files to create dynamic content.",
    opis: "Radio sam na popravljanju dizajna i funkcijonalnosti njihove aplikacija uz pomoć CSS-a i Javascript. Takođe sam radio na implementiranju novog dizajna i novih ekrana uz pomoć Figme. Koristio sam Javascript kako bi manipulisao DOM-om i fetchao podatke is JSON fajlova kako bi napravio dinamički sadržaj.",
    period: "February 2022 - December 2022",
  },
  {
    company: "ReadinessIT",
    position: "Front End developer",
    description:
      "I worked on building web applications from scratch using their low code platform and with help of CSS and Javascript.",
    opis: "Pravio sam web aplikacije od početka koristeći njihovu low code platformu uz pomoć CSS-a i Javascript.",
    period: "January 2023 - Jul 2023",
  },
];

function WorkExperience() {
  const [, i18n] = useTranslation("global");

  return (
    <section className="work-experience">
      <div className="work-list">
        {WORKS.map(({ company, position, description, opis, period }) => {
          return (
            <div key={company} className="work-list__container">
              <h4 className="work-list__container--company">{company}</h4>
              <p className="work-list__container--period">{period}</p>
              <p className="work-list__container--position">{position}</p>
              <p className="work-list__container--description">
                {i18n.language === "srb" ? opis : description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default WorkExperience;
