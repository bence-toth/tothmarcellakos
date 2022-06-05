import MailIcon from "./mail.svg";
import FacebookIcon from "./facebook.svg";
import InstagramIcon from "./instagram.svg";
import LinkedInIcon from "./linkedin.svg";

import "./SocialNavigation.css";

const SocialNavigation = () => (
  <nav className="socialNavigation">
    <ul>
      <li>
        <a
          href="mailto:tothmarcellakos@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={MailIcon} alt="Send me an email" />
        </a>
      </li>
      <li>
        <a
          href="https://www.facebook.com/T%C3%B3th-Marcell-%C3%81kos-103071485764790"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={FacebookIcon} alt="Follow me on Facebook" />
        </a>
      </li>
      <li>
        <a
          href="https://instagram.com/tothmarcellakos"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={InstagramIcon} alt="Follow me on Instagram" />
        </a>
      </li>
      <li>
        <a
          href="https://www.linkedin.com/in/tothmarcellakos/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={LinkedInIcon} alt="Connect with me on LinkedIn" />
        </a>
      </li>
    </ul>
  </nav>
);

export default SocialNavigation;
