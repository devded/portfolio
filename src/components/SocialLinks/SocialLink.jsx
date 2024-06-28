import config from "../../config.json";
import { FiLinkedin, FiMail, FiFileText, FiGithub } from "react-icons/fi";

const SocialLink = () => {
  const socialLinks = [
    {
      name: "cv",
      link: config.cv,
      logo: <FiFileText />,
    },
    {
      name: "email",
      link: config.email,
      logo: <FiMail />,
    },
    {
      name: "linkedin",
      link: config.linkedin,
      logo: <FiLinkedin />,
    },
    {
      name: "github",
      link: config.github,
      logo: <FiGithub />,
    },
  ];

  return (
    <div className="flex gap-2 py-3">
      {socialLinks.map((link, i) => {
        return (
          <a key={i} href={link.link}>
            <div
              className="hover:text-primaryColor text-3xl w-8 h-8"
              title={link.name}
            >
              {link.logo}
            </div>
          </a>
        );
      })}
    </div>
  );
};

export default SocialLink;
