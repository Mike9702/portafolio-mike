

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
            <div className=" w-[auto] h-[auto] flex justify-center items-center rounded-xl  hover:animate-pulse transition-all duration-500">
              <img src="/logodevmike.svg" alt="" className="w-16 h-12  sm:w-28 xl:h-24" />
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
