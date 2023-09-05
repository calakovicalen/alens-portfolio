import { useState } from "react";

import IconGithub from "../../assets/IconGithub";
import IconLinkedin from "../../assets/IconLinkedin";
import IconGlobe from "../../assets/IconGlobe";
import LangMenu from "./LangMenu";

function NavBar() {
  const [isShow, setIsShow] = useState(false);

  return (
    <nav className="nav">
      <p>alencalakovic</p>
      <ul>
        <li>
          <a
            rel="noreferrer"
            target="_blank"
            href="https://github.com/calakovicalen"
          >
            <IconGithub />
          </a>
        </li>
        <li>
          <a
            rel="noreferrer"
            target="_blank"
            href="https://www.linkedin.com/in/alen-calakovic/"
          >
            <IconLinkedin />
          </a>
        </li>
        <li className="nav__lang" onClick={() => setIsShow(!isShow)}>
          <IconGlobe />
          {isShow && <LangMenu />}
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
