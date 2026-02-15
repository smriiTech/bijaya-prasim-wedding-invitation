import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Envelope from "./components/Envelope";
import "./App.css";
import bgImage from "./assets/download17.jpeg";


const App: React.FC = () => {
  const [opened, setOpened] = useState<boolean>(false);

  return (
    <>
      <AnimatePresence mode="wait">
        {!opened && <Envelope onOpen={() => setOpened(true)} />}
      </AnimatePresence>

      <AnimatePresence>
        {opened && (
          <motion.div
            key="content"
            initial={{ opacity: 0, scale: 0.8, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{
              duration: 1.2,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="min-h-screen w-full relative flex flex-col items-center justify-center p-4"
            style={{
              backgroundImage: `url(${bgImage})`,
              backgroundSize: "100% auto",
              backgroundPosition: "center center",
              backgroundRepeat: "no-repeat",
              backgroundColor: "#faf8f5",
            }}
          >
            {/* Overlay for better text readability */}
            <div className="absolute inset-0 from-black/15 via-transparent to-black/25" />

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-center max-w-2xl relative z-10"
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
                  <h1 className="text-[70px] md:text-[100px] font-script whitespace-nowrap">
                    Bijaya <span className="font-basic text-[55px]">&</span>{" "}
                    Prasim
                  </h1>

                  <p className="text-lg md:text-xl max-w-2xl mx-auto font-basic">
                    With profound joy and gratitude, we invite you to our
                    wedding ceremony
                  </p>
                </div>

                <p className="uppercase tracking-[0.3em] text-sm pt-32 font-basic">
                  February
                </p>

                {/* Date Section */}
                <div className="text-[#7b2e2e] space-y-8 mt-12 md:mt-16">
                  {/* Month */}

                  {/* Middle Row */}
                  <div className="flex items-center justify-center gap-12 font-basic">
                    {/* Left Side */}
                    <div className="flex flex-col items-center space-y-4">
                      <div className="w-32 h-px bg-[#7b2e2e]" />
                      <p className="uppercase tracking-[0.3em] text-sm py-2">
                        Wednesday
                      </p>
                      <div className="w-32 h-px bg-[#7b2e2e]" />
                    </div>

                    {/* Day Number */}
                    <p className="text-6xl md:text-7xl font-serif leading-none">
                      25
                    </p>

                    {/* Right Side */}
                    <div className="flex flex-col items-center space-y-4 mb-1">
                      <div className="w-32 h-px bg-[#7b2e2e]" />
                      <p className="uppercase tracking-[0.3em] text-sm py-2">
                        At 11 A.M.
                      </p>
                      <div className="w-32 h-px bg-[#7b2e2e]" />
                    </div>
                  </div>

                  {/* Year */}
                  <p className="mt-6 text-xl font-basic">2026</p>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
        {/* Welcome Section */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="w-full bg-[#6b2c2c] text-center relative h-96 flex items-center justify-center"
        >
          <div className="max-w-3xl mx-auto text-[#f5e6d3]">
            {/* Welcome Title */}
            <h2 className="text-[70px] md:text-[110px] font-script italic mb-1">
              Welcome
            </h2>

            {/* Description */}
            <p className="uppercase tracking-[0.25em] text-sm md:text-base font-basic">
              We are delighted to welcome you to our wedding website. Here you
              will find all the essential details for our special day.
            </p>
          </div>

          {/* Bottom Cream Strip */}
          <div className="absolute bottom-0 left-0 w-full h-6 bg-[#e9d9c2]" />
        </motion.section>
      </AnimatePresence>
    </>
  );
};

export default App;
