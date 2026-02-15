import { useState, useEffect } from "react";
import { motion } from "framer-motion";


interface EnvelopeProps {
  onOpen: () => void;
}

const Envelope: React.FC<EnvelopeProps> = ({ onOpen }) => {
  const [isOpening, setIsOpening] = useState(false);

  useEffect(() => {
    if (isOpening) {
      const timer = setTimeout(() => {
        onOpen();
      }, 2400);
      return () => clearTimeout(timer);
    }
  }, [isOpening, onOpen]);

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-rose-50 via-pink-50 to-amber-50"
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <div
        className="relative cursor-pointer"
        style={{ perspective: "1400px" }}
        onClick={() => !isOpening && setIsOpening(true)}
      >
        {/* Bigger Envelope */}
        <motion.div
          className="relative w-[380px] h-[250px] md:w-[520px] md:h-[330px]"
          animate={isOpening ? { scale: 0.95, y: 25 } : {}}
          transition={{ duration: 0.6 }}
        >
          {/* Back Base */}
          <div
            className="absolute inset-0 rounded shadow-2xl"
            style={{
              background:
                "linear-gradient(145deg, #8a3a3a, #6b2c2c 40%, #4a1e22)",
              border: "1px solid rgba(255,255,255,0.08)",
              boxShadow:
                "0 25px 60px rgba(0,0,0,0.4), inset 0 0 20px rgba(255,255,255,0.05)",
            }}
          />

          {/* Top Flap */}
          <motion.div
            className="absolute top-0 left-0 w-full origin-top"
            style={{
              height: "50%",
              transformStyle: "preserve-3d",
              zIndex: isOpening ? 5 : 40,
            }}
            animate={isOpening ? { rotateX: -180 } : { rotateX: 0 }}
            transition={{
              duration: 1,
              ease: [0.43, 0.13, 0.23, 0.96],
            }}
          >
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(180deg, #8a3a3a, #6b2c2c 60%, #4a1e22)",
                clipPath: "polygon(0 0, 100% 0, 50% 100%)",
                backfaceVisibility: "hidden",
              }}
            />
            <div
              className="absolute inset-0"
              style={{
                background: "linear-gradient(180deg, #7a3232, #5a2424)",
                clipPath: "polygon(0 0, 100% 0, 50% 100%)",
                transform: "rotateX(180deg)",
                backfaceVisibility: "hidden",
              }}
            />
          </motion.div>

          {/* Bottom Flap */}
          <div
            className="absolute bottom-0 left-0 w-full"
            style={{
              height: "55%",
              background:
                "linear-gradient(0deg, #4a1e22, #6b2c2c 70%, #8a3a3a)",
              clipPath: "polygon(0 100%, 100% 100%, 50% 0)",
              zIndex: 5,
            }}
          />

          {/* Letter */}
          <motion.div
            className="absolute left-1/2 -translate-x-1/2 w-[88%] rounded-xl bg-white shadow-xl border border-rose-200 flex items-center justify-center"
            style={{
              height: "78%",
              bottom: "10%",
              zIndex: isOpening ? 50 : 10,
            }}
            animate={
              isOpening
                ? { y: -200, scale: 1.05, filter: "blur(0px)" }
                : { y: 0, scale: 1, filter: "blur(3px)" }
            }
            transition={{
              duration: 1,
              delay: 0.4,
            }}
          >
            {/* Text Animation */}
            <motion.div
              className="text-center px-6"
              initial={{ opacity: 0, y: 20 }}
              animate={isOpening ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 1.1, duration: 0.8 }}
            >
              <p className="text-3xl md:text-4xl font-basic text-rose-900 mb-4">
                You're Invited
              </p>
              <p className="text-3xl tracking-widest text-rose-900 font-script">
                B & P
              </p>
            </motion.div>
          </motion.div>

          {/* Seal */}
          <motion.div
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 
              w-20 h-20 rounded-full bg-[#E9C76E] shadow-lg 
              flex items-center justify-center"
            style={{ zIndex: 40 }}
            animate={isOpening ? { scale: 0 } : { scale: 1 }}
            transition={{ duration: 0.4 }}
          >
            <span className="text-[#6b2c2c] text-xl tracking-wider font-script font-bold">
              BP
            </span>
          </motion.div>
        </motion.div>

        {/* Click Text */}
        {!isOpening && (
          <motion.p
            className="text-center mt-10 text-md uppercase tracking-[0.4em] text-[#6b2c2c]"
            animate={{ opacity: [0.3, 1, 0.3] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            Click to Open
          </motion.p>
        )}
      </div>
    </motion.div>
  );
};

export default Envelope;
