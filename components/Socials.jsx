import Link from "next/link";

import { FaGithub, FaLinkedinIn, FaYoutube, FaSteam } from "react-icons/fa";
import { SiTableau } from "react-icons/si";

const socials = [
  { icon: <FaGithub />, path: "https://github.com/Naaz13boi" },
  { icon: <FaLinkedinIn />, path: "https://www.linkedin.com/in/nawazishkhalander/" },
  { icon: <SiTableau />, path:"https://public.tableau.com/app/profile/nawazish.khalander.shaik.mohammed/vizzes"},
  { icon: <FaMedium />, path: "https://medium.com/@snkhalan" },
];

const Social = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => (
        <Link key={index} href={item.path} passHref legacyBehavior>
          <a target="_blank" rel="noopener noreferrer" className={iconStyles}>
            {item.icon}
          </a>
        </Link>
      ))}
    </div>
  );
};
export default Social;
