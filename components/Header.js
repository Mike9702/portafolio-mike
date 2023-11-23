

// next link
import Link from "next/link";

// comopnents
import Socials from "../components/Socials";

const Header = () => {
  return (
    <header className="absolute z-30 w-full flex items-center px-16 xl:px-0 lg:h-[90px]">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row lg:gap-x-9 lg:justify-between items-center gap-y-3 py-5 bottom-2  lg:px-2">
          {/* logo */}
          <Link href={"/"}>
            <div className="flex justify-center items-center rounded-xl  hover:animate-pulse transition-all duration-500">
              <h1 className="sm:text-2xl">Mike Martinez <span className="text-accent sm:text-3xl">.</span></h1>
            </div>
          </Link>
          {/* socials */}
          <Socials />
        </div>
      </div>
    </header>
  );
};

export default Header;
