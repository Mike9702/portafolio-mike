

// next link
import Link from "next/link";

// comopnents
import Socials from "../components/Socials";

const Header = () => {
  return (
    <header className="absolute z-30 w-full flex items-center px-16 xl:px-0 lg:h-[90px]">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row lg:gap-x-9 lg:justify-between items-center gap-y-3 py-5 bottom-2  lg:px-8">
          {/* logo */}
          <Link href={"/"}>
            <div className=" w-[auto] h-[auto] flex justify-center items-center rounded-xl shadow-sm hover:shadow-accent hover:bg-white/5 backdrop-blur-md transition-all duration-500">
              <h1 className="font-semibold text-2xl lg:text-4xl font-sora px-2">
                {" "}
                <span className="text-accent animate-pulse">{'<'}</span> Mike M{" "}
                <span className="text-accent animate-pulse">{'/>'}</span>
              </h1>
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
