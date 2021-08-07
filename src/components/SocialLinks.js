import * as React from "react";

import FacebookIcon from "../images/svg-icons/icon-fb.svg";
import InstagramIcon from "../images/svg-icons/icon-instagram.svg";

const SocialLinks = (props) => {
  const { wrapperClasses = "", itemClasses = "" } = props;
  return (
    <ul className={wrapperClasses}>
      <li>
        <a
          href="https://www.facebook.com/DelGrossosPark/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="visually-hidden">Facebook Page</span>
          <FacebookIcon className={`text-4xl ${itemClasses}`} />
        </a>
      </li>
      <li>
        <a
          href="https://www.instagram.com/delgrossospark/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="visually-hidden">Instagram Page</span>
          <InstagramIcon className={`text-4xl ${itemClasses}`} />
        </a>
      </li>
    </ul>
  );
};

export default SocialLinks;
