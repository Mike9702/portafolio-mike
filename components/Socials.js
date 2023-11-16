// Links
import Link from "next/link";

// icons
import { RiGithubLine, RiLinkedinLine } from "react-icons/ri";

const Socials = () => {
  return (
    <div className="flex items-center gap-x-3 lg:text-2xl">
      <Link href={"https://www.linkedin.com/in/miguel-martinez-38013229b/"} className="hover:text-accent transition-all duration-300">
        <RiLinkedinLine  />
      </Link>
      <Link href={"https://github.com/Mike9702"} className="hover:text-accent transition-all duration-300">
        <RiGithubLine />
      </Link>
    </div>
  );
};

export default Socials;
