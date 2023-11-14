// work slider data
export const workSlider = {
  slides: [
    {
      images: [
        {
          title: "title",
          path: "/fortunecookie.jpg",
          description:"Try your luck and discover your phrase",
          icon: "",
        },
        {
          title: "title",
          path: "/galaxyphrase.jpg",
          description:"Learn relevant phrases about the universe",
          icon: "",
        },
        {
          title: "title",
          path: "/buycart.jpg",
          description:"Add products to your shopping cart",
          icon: "",
        },
        {
          title: "title",
          path: "/rickandmorty.jpg",
          description:"Browse through each resident's dimensions",
          icon: "",
        },
        
      ],
    },
    {
      images: [
        {
          title: "title",
          path: "/pokedex.jpg",
          description:"Get to know the details of each Pokémon",
          icon: "",
        },
        {
          title: "title",
          path: "/weatherapp.jpg",
          description:"Know the weather in your city and elsewhere",
          icon: "",
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
                    <div className="flex items-center justify-center relative overflow-hidden group ">
                      {/* image */}
                      <Image className=" w-[150px] h-[80px] md:w-[150px] md:h-[80px] lg:w-[300px] lg:h-[150px] xl:w-[300px] xl:h-[150px]" src={image.path} width={500} height={300} alt="" />
                      {/* overlay gradient  */}
                      <div className="absolute inset-0 bg-gradient-to-l from-transparent via-[#e838cc] to-[#4a22bd] opacity-0 group-hover:opacity-80 transition-all duration-700"></div>
                      {/* title */}
                      <div className="absolute bottom-0 translate-y-full group-hover:-translate-y-10 group-hover:xl:-translate-y-10 transition-all duration-300 ">
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
                        <div className="text-primary/80 text-[9px] xl:text-[13px] ">{image.description}</div>
                      </div>
                    </div>
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
