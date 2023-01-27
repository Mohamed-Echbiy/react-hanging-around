import { useState, useEffect } from "react";
import { AiFillStar } from "react-icons/ai";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { AnimatePresence, motion } from "framer-motion";
//

const containerVariant = {
  whileInview: {
    x: 0,
    opacity: 1,
    transition: {
      type: "linear",
      duration: 0.3,
      delayChildren: 1,
    },
  },
  initial: {
    opacity: 0,
    x: "25%",
  },
};
const titleVariant = {
  whileInview: {
    opacity: 1,
    transition: {
      type: "linear",
      duration: 0.3,
    },
  },
  initial: { opacity: 0 },
};
const ratingVariant = {
  whileInview: {
    opacity: 1,
    transition: {
      type: "easeInOut",
    },
  },
  initial: { opacity: 0 },
};
//

function AnimeLanding() {
  const [data, setData] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    const fetchNow = async () => {
      const req = await fetch(
        "https://api.consumet.org/meta/anilist/popular?perPage=5"
      );
      const res = await req.json();
      const data = await res.results;
      setData(data);
      setIsLoading(true);
    };
    fetchNow();
  }, []);
  console.log(data, isLoading);
  return (
    <div className="anime_landing_page h-screen w-screen">
      {isLoading && (
        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          onSlideChange={() => console.log("changing")}
        >
          {data.map((e) => (
            <SwiperSlide key={e.malId}>
              <motion.div
                className="relative w-screen aspect-video lg:h-screen overflow-hidden flex items-center justify-start"
                variants={containerVariant}
                whileInView="whileInview"
                initial="initial"
              >
                <img
                  src={e.cover}
                  alt=""
                  className="absolute top-0 left-0 w-full h-full -z-20 saturate-[1.2]"
                />
                <div className="overLay absolute top-0 left-0 h-screen w-screen -z-10 bg-black opacity-50"></div>
                <motion.div
                  className="content-container absolute top-20 right-3 text-xs sm:text-base md:text-2xl lg:text-4xl font-bold bg-black w-[100px] h-fit  rounded"
                  variants={titleVariant}
                  whileInView="whileInview"
                  initial="initial"
                >
                  <img
                    src={e.image}
                    alt=""
                    className=" w-full rounded-md drop-shadow-md block"
                  />
                </motion.div>
                <motion.p
                  className="flex justify-center gap-1 absolute top-3 right-3 p-3 font-bold text-xs md:text-lg text-yellow-500 items-center bg-black rounded-md"
                  variants={ratingVariant}
                >
                  <span>{e.rating / 10}</span>
                  <AiFillStar />
                </motion.p>
                <motion.div className=" px-1 md:px-3 lg:px-6 text-white w-full min-w-[300px] h-full bg-gradient-to-r from-black to-transparent flex justify-center  flex-col">
                  <span>{e.title.native}</span>
                  <span className="text-xs text-gray-400 mb-4">
                    {e.title.english}
                  </span>
                  <span>Release date: {e.releaseDate}</span>
                  <span className="text-xs text-gray-400 mb-4">
                    status: {e.status}
                  </span>
                  <div>
                    Genres: [
                    {e.genres.map((e) => (
                      <span>{e}. </span>
                    ))}
                    ]
                  </div>
                  <span className="text-xs mb-4 text-gray-400">
                    episodes: {e.totalEpisodes}
                  </span>
                </motion.div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </div>
  );
}

export default AnimeLanding;
