import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Envelope from "./components/Envelope";
import Countdown from "./components/Countdown";
import { Heart } from "lucide-react";

import Confetti from "react-confetti";

import "./App.css";
import bgImage from "./assets/download17.jpeg";
import bgRotateImage from "./assets/rotateBG.jpeg";

function useWindowSize() {
  const [size, setSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return size;
}

const App: React.FC = () => {
  const [opened, setOpened] = useState<boolean>(false);
  const weddingDate = new Date("2026-02-25T11:00:00");
  const [showConfetti, setShowConfetti] = useState(false);
  const { width, height } = useWindowSize();


  return (
    <>
      <AnimatePresence mode="wait">
        {!opened && (
          <Envelope
            onOpen={() => {
              setOpened(true);
              setShowConfetti(true);

              setTimeout(() => {
                setShowConfetti(false);
              }, 5000);
            }}
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {opened && (
          <>
            {showConfetti && (
              <Confetti
                width={width}
                height={height}
                numberOfPieces={400}
                recycle={false}
                gravity={0.3}
                colors={["#6b2c2c", "#e9d9c2", "#c6a96d", "#ffffff"]}
              />
            )}

            <motion.div
              key="content"
              initial={{ opacity: 0, scale: 0.8, y: 50 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{
                duration: 1.2,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="min-h-screen w-full relative flex flex-col items-center justify-center px-4 text-center"
            >
              {/* Desktop Background */}
              <div
                className="hidden md:block absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${bgImage})` }}
              />

              {/* Mobile Background */}
              <div
                className="block md:hidden absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${bgRotateImage})` }}
              />

              {/* Overlay for better text readability */}
              <div className="absolute inset-0  md:bg-transparent" />

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="text-center md:max-w-3xl relative z-10"
              >
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.8 }}
                  className="text-center relative z-10 text-[#6b2c2c]"
                >
                  {/* Top small heading */}
                  <p className="uppercase tracking-[0.4em] text-sm mb-6 font-basic">
                    The Wedding Of
                  </p>

                  <div className="space-x-10">
                    <h1 className="font-script leading-tight text-center text-[48px] sm:text-[48px] md:text-[80px] lg:text-[120px]">
                      <span className="block md:inline">Bijaya </span>

                      <span className="block md:inline font-basic text-[20px] sm:text-[28px] md:text-[50px] my-2 md:my-0">
                        &
                      </span>

                      <span className="block md:inline"> Prasim</span>
                    </h1>

                    <p className="text-lg md:text-xl max-w-2xl mx-auto font-basic mb-14">
                      With profound joy and gratitude, we invite you to our
                      wedding ceremony
                    </p>
                  </div>

                  {/* Date Section */}
                  <div className="text-[#7b2e2e] mt-6 md:mt-12 font-basic">
                    {/* 📱 Mobile Version */}
                    <p className="block sm:hidden text-lg tracking-[0.2em]">
                      25.FEB.2026
                    </p>

                    {/* 💻 Desktop Version */}
                    <div className="hidden sm:block space-y-8">
                      {/* Month */}
                      <p className="uppercase tracking-[0.3em] text-xs sm:text-sm">
                        February
                      </p>

                      {/* Middle Row */}
                      <div className="flex items-center justify-center gap-12">
                        {/* Left Side */}
                        <div className="flex flex-col items-center space-y-4">
                          <div className="w-32 h-px bg-[#7b2e2e]" />
                          <p className="uppercase tracking-[0.3em] text-sm py-2">
                            Wednesday
                          </p>
                          <div className="w-32 h-px bg-[#7b2e2e]" />
                        </div>

                        {/* Day */}
                        <p className="text-6xl md:text-7xl font-serif leading-none">
                          25
                        </p>

                        {/* Right Side */}
                        <div className="flex flex-col items-center space-y-4">
                          <div className="w-32 h-px bg-[#7b2e2e]" />
                          <p className="uppercase tracking-[0.3em] text-sm py-2">
                            At 11 A.M.
                          </p>
                          <div className="w-32 h-px bg-[#7b2e2e]" />
                        </div>
                      </div>

                      {/* Year */}
                      <p className="mt-6 text-xl">2026</p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Welcome Section */}
            <motion.section
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="w-full bg-[#6b2c2c] text-center relative h-72 md:h-96 flex items-center justify-center"
            >
              <div className="max-w-3xl mx-auto text-[#f5e6d3]">
                {/* Welcome Title */}
                <h2 className="text-[48px] sm:text-[70px] md:text-[110px] font-script italic mb-1">
                  Welcome
                </h2>

                {/* Description */}
                <p className="uppercase tracking-[0.25em] text-sm md:text-base font-basic">
                  We are delighted to welcome you to our wedding website. Here
                  you will find all the essential details for our special day.
                </p>
              </div>
            </motion.section>

            {/* Countdown Section */}
            <motion.section
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="w-full bg-[#f9f3ec] py-20 md:py-28 px-6 text-center flex justify-center"
            >
              <div className="max-w-5xl mx-auto">
                {/* Section Heading */}
                <h2 className="font-script text-[48px] sm:text-[70px] md:text-[90px] text-[#6b2c2c] mb-6">
                  Counting Down
                </h2>

                {/* Countdown Component */}
                <Countdown targetDate={weddingDate} />

                <p className="pt-6 font-basic text-xl text-[#6b2c2c]">
                  Until the big day
                </p>
              </div>
            </motion.section>

            {/* Calendar Section */}
            <motion.section
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="w-full bg-[#6b2c2c] py-20 md:py-28 px-6 text-center flex justify-center"
            >
              <div className="max-w-5xl mx-auto text-[#f5e6d3]">
                {/* Top Heading */}
                <h2 className="font-script text-[48px] sm:text-[70px] md:text-[90px] mb-6">
                  Save the Date
                </h2>

                <div className="flex flex-col md:flex-row items-center justify-center gap-12 mt-12">
                  {/* Right Calendar */}
                  <div className="text-center">
                    <p className="uppercase tracking-[0.3em] text-lg mb-4 font-basic font-semibold">
                      February 2026
                    </p>

                    {/* Week Days */}
                    <div className="grid grid-cols-7 gap-4 text-xs uppercase font-bold tracking-[0.2em] font-basic mb-4">
                      <span>Sun</span>
                      <span>Mon</span>
                      <span>Tue</span>
                      <span>Wed</span>
                      <span>Thu</span>
                      <span>Fri</span>
                      <span>Sat</span>
                    </div>

                    {/* Calendar Grid */}
                    <div className="grid grid-cols-7 gap-4 text-sm md:text-base font-basic">
                      {/* Empty days before Feb 1, 2026 starts on Sunday */}
                      {/* Feb 2026 actually starts on Sunday, so no empty slots needed */}

                      {Array.from({ length: 28 }, (_, i) => {
                        const day = i + 1;
                        const isWedding = day === 25;

                        return (
                          <div
                            key={day}
                            className="relative flex items-center justify-center w-8 h-8 md:w-12 md:h-12"
                          >
                            {isWedding ? (
                              <>
                                {/* Day Number */}
                                <span className="relative z-10 font-medium">
                                  {day}
                                </span>

                                {/* Pulsing Outline Heart */}
                                <motion.div
                                  className="absolute"
                                  animate={{
                                    scale: [1, 1.15, 1],
                                    opacity: [0.8, 1, 0.8],
                                  }}
                                  transition={{
                                    duration: 1.8,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                  }}
                                >
                                  <Heart
                                    className="w-12 h-12 md:w-20 md:h-20 text-[#e9d9c2]"
                                    strokeWidth={1}
                                    fill="transparent"
                                  />
                                </motion.div>
                              </>
                            ) : (
                              <span>{day}</span>
                            )}
                          </div>
                        );

                      })}
                    </div>
                  </div>
                </div>
              </div>
            </motion.section>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default App;
