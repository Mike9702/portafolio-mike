// icons
import {
  HiHome,
  HiUser,
  HiViewColumns,
  HiRectangleGroup,
  HiChatBubbleBottomCenterText,
  HiEnvelope,
} from "react-icons/hi2";

// nav data
export const navData = [
  { name: "home", path: "/", icon: <HiHome /> },
  { name: "about", path: "/about", icon: <HiUser /> },

  { name: "work", path: "/work", icon: <HiViewColumns /> },
  {
    name: "contact",
    path: "/contact",
    icon: <HiEnvelope />,
  },
];

//next link
import Link from "next/link";

//next Router
import { useRouter } from "next/router";

const Nav = () => {
  const router = useRouter();
  const pathname = router.pathname;
  return (
    <nav className="flex flex-col items-center xl:justify-center gap-y-4 fixed h-max bottom-0 xl:bottom-[25%] mt-auto xl:right-[2%] z-50 top-0 w-full xl:w-16 xl:max-w-md  ">
      {/* inner */}
      <div className="flex w-full xl:flex-col items-center justify-between xl:justify-center gap-y-10 px-4 md:px-40 xl:px-0 h-[50px] xl:h-max py-8 bg-white/10 backdrop-blur-sm text-3xl xl:text-xl xl:rounded-full   ">
        {navData.map((link, index) => {
          return (
            <Link
              className={`${
                link.path === pathname && "text-accent"
              }  relative flex items-center group  transition-all duration-300  hover:rounded-lg `}
              href={link.path}
              key={index}
            >
              {/* tooltip */}
              <div className="absolute pr-14 right-0 hidden xl:group-hover:flex">
                <div
                  className={` ${
                    link.path === pathname && "text-accent border-accent"
                  } border  shadow-sm  relative flex  items-center p-[6px] rounded-[3px]  `}
                >
                  <div className="text-[12px] leading-none font-semibold capitalize">
                    {link.name}
                  </div>
                </div>
                {/* triangle */}
                <div
                  className={`border-solid ${
                    link.path === pathname && "border-l-red-600"
                  }  border-l-8 border-y-transparent border-y-[13px] border-r-0 absolute right-[49px]`}
                ></div>
              </div>

              {/* icons */}
              <div className="hover:text-accent transition-all duration-300 flex flex-col justify-center items-center text-base xl:text-2xl">
                {link.icon}{" "}
                <span className="text-[10px] xl:hidden capitalize">
                  {link.name}
                </span>
              </div>
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default Nav;
