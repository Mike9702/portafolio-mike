// work slider data
export const workSlider = {
  slides: [
    {
      images: [
        {
          title: "title",
          path: "/fortunecookie.jpg",
          description:"Try your luck and discover your phrase",
          link: "https://fortune-cookies1-miguel-martinez.netlify.app/",
        },
        {
          title: "title",
          path: "/galaxyphrase.jpg",
          description:"Learn relevant phrases about the universe",
          link: "https://galaxy-phraces.netlify.app/",
        },
        {
          title: "title",
          path: "/buycart.jpg",
          description:"Add products to your shopping cart",
          link: "https://mike-cart.netlify.app/",
        },
        {
          title: "title",
          path: "/rickandmorty.jpg",
          description:"Browse through each resident's dimensions",
          link: "https://rick-and-morty-mike.netlify.app/",
        },
        
      ],
    },
    {
      images: [
        {
          title: "title",
          path: "/pokedex.jpg",
          description:"Get to know the details of each Pokémon",
          link: "https://pokedex-mike.netlify.app/",
        },
        {
          title: "title",
          path: "/weatherapp.jpg",
          description:"Know the weather in your city and elsewhere",
          link: "https://weather-app-mik.netlify.app/",
        },
        
      ],
    },
  ],
};

// import swiper react components
import { Swiper, SwiperSlide } from "swiper/react";

// import swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";

// icons
import { BsArrowRight } from "react-icons/bs";
// next image
import Image from "next/image";
import Link from "next/link";

const WorkSlider = () => {
  return (
    <Swiper
      spaceBetween={10}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className="h-[280px] sm:h-[480px] md:h-[580px] lg:h-[380px] lg:w-[580px]"
    >
      {workSlider.slides.map((slide, index) => {
        return (
          <SwiperSlide key={index}>
            <div className="grid grid-cols-2 grid-rows-2 gap-4 cursor-pointer  ">
              {slide.images.map((image, index) => {
                return (
                  <div
                    className="relative rounded-lg overflow-hidden flex items-center justify-center group shadow-md"
                    key={index}
                  >
                    <Link href={image.link} >
                    <div className="flex items-center  justify-center relative overflow-hidden group ">
                      {/* image */}
                      <Image className=" w-[150px] h-[80px] md:w-[150px] md:h-[80px] lg:w-[300px] lg:h-[150px] xl:w-[300px] xl:h-[150px]" src={image.path} width={500} height={300} alt="" />
                      {/* overlay gradient  */}
                      <div className="absolute inset-0 bgImagesLinks opacity-0 group-hover:opacity-80 transition-all duration-700"></div>
                      {/* title */}
                      <div className="absolute bottom-0 px-1 translate-y-full group-hover:-translate-y-5 group-hover:xl:-translate-y-10 transition-all duration-300 ">
                        <div className="flex items-center gap-x-2 text-[10px] md:text-[13px] tracking-[0.2em] ">
                          {/* title part 1 */}
                          <div className="delay-100">LIVE</div>
                          {/* title part 2 */}
                          <div className="translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-150">
                            PROJECT
                          </div>
                          {/* icon */}
                          <div className="text-xl translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-200">
                            <BsArrowRight />
                          </div>
                        </div>
                        <div className="text-white text-[9px] xl:text-[13px] ">{image.description}</div>
                      </div>
                    </div>
                    </Link>
                  </div>
                );
              })}
            </div>
            
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default WorkSlider;
