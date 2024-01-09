import { cn } from "../../utilities/utils";
import { faGithub, faLinkedin, faXTwitter, faInstagram, faMedium } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Socials = ({ ClassName }: { ClassName?: string }) => {
  const style="hover:scale-105"
  return (
    <div className={cn("flex gap-4", ClassName)}>
      <a href="https://github.com/Adjanour" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon className="hover:scale-105" fontSize={32} icon={faGithub} />
      </a>
      <a href="https://www.linkedin.com/in/kirk-katamanso/" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon className={style} fontSize={32} icon={faLinkedin} />
      </a>
      <a href="your-twitter-link" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon className={style} fontSize={32} icon={faXTwitter} />
      </a>
      <a href="your-instagram-link" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon className={style} fontSize={32} icon={faInstagram} />
      </a>
      <a href="https://medium.com/@katamansokirk" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon className={style} fontSize={32} icon={faMedium} />
      </a>
    </div>
  );
};
