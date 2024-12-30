import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css";

import { projectsData } from "../../data/projectsData.ts";

const SwiperComponent = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        loop={false}
        slidesPerView={1}
        spaceBetween={0}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        pagination={{ el: ".swiper-pagination", clickable: true }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
          clickable: true,
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="flex w-screen items-center justify-center"
      >
        {projectsData.map(({ name, description, color, href, img, index }) => (
          <SwiperSlide key={index}>
            <div className="lg:m-32 my-32 mx-10 flex items-center justify-around lg:flex-nowrap flex-wrap gap-10">
              <div className="flex w-[40em] flex-col gap-y-14">
                <div className="flex flex-col gap-2">
                  <h2 className="font-RobotoSlabBold text-8xl">{name}</h2>
                  <p className="font-RobotoSlabRegular text-2xl">
                    {description}
                  </p>
                </div>
                <a
                  href={href}
                  style={{ backgroundColor: color }}
                  className="flex h-20 w-80 items-center justify-center gap-4 rounded-lg text-white text-lg hover:opacity-70"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    width={32}
                    height={32}
                    strokeWidth={1.75}
                  >
                    <path d="M12.802 2.165l5.575 2.389c.48 .206 .863 .589 1.07 1.07l2.388 5.574c.22 .512 .22 1.092 0 1.604l-2.389 5.575c-.206 .48 -.589 .863 -1.07 1.07l-5.574 2.388c-.512 .22 -1.092 .22 -1.604 0l-5.575 -2.389a2.036 2.036 0 0 1 -1.07 -1.07l-2.388 -5.574a2.036 2.036 0 0 1 0 -1.604l2.389 -5.575c.206 -.48 .589 -.863 1.07 -1.07l5.574 -2.388a2.036 2.036 0 0 1 1.604 0z"></path>
                    <path d="M12 9h.01"></path>
                    <path d="M11 12h1v4h1"></path>
                  </svg>
                  <span>More Information</span>
                </a>
              </div>
              <div className="flex w-[50em] flex-col">
                <img
                  className="h-[300px] w-[500px] rounded-lg object-cover"
                  src={img}
                  alt={description}
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
        <div className="slider-controler">
          <div className="swiper-button-prev slider-arrow">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              width="44"
              height="44"
              strokeWidth="2.5"
            >
              <path d="M13 15l-3 -3l3 -3"></path>
              <path d="M21 12a9 9 0 1 0 -18 0a9 9 0 0 0 18 0z"></path>
            </svg>
          </div>
          <div className="swiper-button-next slider-arrow">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              width="44"
              height="44"
              strokeWidth="2.5"
            >
              <path d="M11 9l3 3l-3 3"></path>
              <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0z"></path>
            </svg>
          </div>
          <div className="swiper-pagination"></div>
        </div>
      </Swiper>
    </div>
  );
};

export default SwiperComponent;
