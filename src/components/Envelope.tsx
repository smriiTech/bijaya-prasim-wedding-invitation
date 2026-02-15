// import { useState } from "react";
// import { motion } from "framer-motion";

// interface EnvelopeProps {
//   onOpen: () => void;
// }

// const Envelope: React.FC<EnvelopeProps> = ({ onOpen }) => {
//   const [isOpening, setIsOpening] = useState<boolean>(false);

//   const handleOpen = () => {
//     setIsOpening(true);
//     setTimeout(() => {
//       onOpen();
//     }, 2500);
//   };

//   return (
//     <motion.div
//       className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-rose-50 via-pink-50 to-amber-50"
//       exit={{ opacity: 0 }}
//       transition={{ duration: 1 }}
//     >
//       <motion.div
//         className="relative cursor-pointer"
//         onClick={!isOpening ? handleOpen : undefined}
//         whileHover={!isOpening ? { scale: 1.05, y: -10 } : {}}
//         whileTap={!isOpening ? { scale: 0.95 } : {}}
//         style={{ perspective: "1000px" }}
//       >
//         {/* Envelope Container */}
//         <motion.div
//           className="relative w-[340px] h-[220px] md:w-[420px] md:h-[270px]"
//           animate={isOpening ? { scale: 0.9, y: 20 } : {}}
//           transition={{ duration: 0.6, ease: "easeOut" }}
//         >
//           {/* Envelope Back */}
//           <div
//             className="absolute inset-0 rounded-sm shadow-2xl"
//             style={{
//               background: "linear-gradient(145deg, #f5e6d3, #e8d4bc)",
//               border: "2px solid #d4c4b0",
//             }}
//           />

//           {/* Top Flap (Opens) */}
//           <motion.div
//             className="absolute top-0 left-0 w-full origin-top"
//             style={{
//               height: "50%",
//               transformStyle: "preserve-3d",
//               zIndex: 20,
//             }}
//             animate={
//               isOpening
//                 ? { rotateX: -180, z: 50 }
//                 : { rotateX: 0, z: 0 }
//             }
//             transition={{
//               duration: 1.2,
//               ease: [0.43, 0.13, 0.23, 0.96],
//             }}
//           >
//             {/* Front side of flap */}
//             <div
//               className="absolute inset-0"
//               style={{
//                 background: "linear-gradient(180deg, #c4a57b, #b89968)",
//                 clipPath: "polygon(0 0, 100% 0, 50% 100%)",
//                 backfaceVisibility: "hidden",
//                 boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
//               }}
//             />
//             {/* Back side of flap */}
//             <div
//               className="absolute inset-0"
//               style={{
//                 background: "linear-gradient(180deg, #d4c4b0, #c4b4a0)",
//                 clipPath: "polygon(0 0, 100% 0, 50% 100%)",
//                 backfaceVisibility: "hidden",
//                 transform: "rotateX(180deg)",
//               }}
//             />
//           </motion.div>

//           {/* Bottom Flap */}
//           <div
//             className="absolute bottom-0 left-0 w-full"
//             style={{
//               height: "55%",
//               background: "linear-gradient(0deg, #e8d4bc, #f0dcc8)",
//               clipPath: "polygon(0 100%, 100% 100%, 50% 0)",
//               zIndex: 5,
//             }}
//           />

//           {/* Letter Inside */}
//           <motion.div
//             className="absolute left-1/2 -translate-x-1/2 w-[85%] rounded-t-lg flex flex-col items-center justify-center bg-gradient-to-b from-white to-rose-50 shadow-xl border border-rose-100"
//             style={{
//               height: "75%",
//               bottom: "12%",
//               zIndex: 15,
//             }}
//             initial={{ y: 0, opacity: 0.9 }}
//             animate={
//               isOpening
//                 ? { y: -200, opacity: 1, scale: 1.05 }
//                 : { y: 0, opacity: 0.9, scale: 1 }
//             }
//             transition={{
//               duration: 1,
//               delay: 0.6,
//               ease: [0.34, 1.56, 0.64, 1],
//             }}
//           >
//             <motion.div
//               className="text-center px-6"
//               initial={{ opacity: 0 }}
//               animate={isOpening ? { opacity: 1 } : { opacity: 0 }}
//               transition={{ delay: 1.2, duration: 0.8 }}
//             >
//               <p className="text-2xl md:text-3xl font-serif text-rose-900 mb-3">
//                 You're Invited
//               </p>
//               <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-rose-400 to-transparent mx-auto mb-3" />
//               <p className="text-sm md:text-base text-rose-700 font-light tracking-widest">
//                 B & P
//               </p>
//               <p className="text-xs text-rose-400 mt-2">❤</p>
//             </motion.div>
//           </motion.div>

//           {/* Decorative Seal */}
//           <motion.div
//             className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-gradient-to-br from-rose-400 to-rose-600 shadow-lg flex items-center justify-center"
//             style={{ zIndex: 25 }}
//             animate={
//               isOpening
//                 ? { scale: 0, opacity: 0 }
//                 : { scale: 1, opacity: 1 }
//             }
//             transition={{ duration: 0.4 }}
//           >
//             <span className="text-white text-xl">❤</span>
//           </motion.div>
//         </motion.div>

//         {/* Tap Text */}
//         {!isOpening && (
//           <motion.p
//             className="text-center mt-10 text-sm uppercase tracking-[0.4em] text-rose-400 font-light"
//             animate={{ opacity: [0.3, 1, 0.3] }}
//             transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
//           >
//             Click to Open
//           </motion.p>
//         )}

//         {/* Floating Hearts Animation */}
//         {isOpening && (
//           <>
//             {[...Array(6)].map((_, i) => (
//               <motion.div
//                 key={i}
//                 className="absolute text-2xl"
//                 initial={{
//                   x: 0,
//                   y: 0,
//                   opacity: 0,
//                   scale: 0,
//                 }}
//                 animate={{
//                   x: (Math.random() - 0.5) * 300,
//                   y: -200 - Math.random() * 100,
//                   opacity: [0, 1, 0],
//                   scale: [0, 1, 0.5],
//                 }}
//                 transition={{
//                   duration: 2,
//                   delay: 1 + i * 0.1,
//                   ease: "easeOut",
//                 }}
//                 style={{
//                   left: "50%",
//                   top: "50%",
//                 }}
//               >
//                 {i % 3 === 0 ? "❤" : i % 3 === 1 ? "💕" : "✨"}
//               </motion.div>
//             ))}
//           </>
//         )}
//       </motion.div>
//     </motion.div>
//   );
// };

// export default Envelope;

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface EnvelopeProps {
  onOpen: () => void;
}

const Envelope: React.FC<EnvelopeProps> = ({ onOpen }) => {
  const [isOpening, setIsOpening] = useState(false);

  useEffect(() => {
    if (isOpening) {
      const timer = setTimeout(() => {
        onOpen();
      }, 2200);
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
        style={{ perspective: "1200px" }}
        onClick={() => !isOpening && setIsOpening(true)}
      >
        {/* Envelope Wrapper */}
        <motion.div
          className="relative w-[340px] h-[220px] md:w-[420px] md:h-[270px]"
          animate={isOpening ? { scale: 0.92, y: 20 } : {}}
          transition={{ duration: 0.6 }}
        >
          {/* Back Base */}
          <div
            className="absolute inset-0 rounded shadow-2xl"
            style={{
              background: "linear-gradient(145deg, #f5e6d3, #e8d4bc)",
              border: "2px solid #d4c4b0",
            }}
          />

          {/* Top Flap */}
          <motion.div
            className="absolute top-0 left-0 w-full origin-top"
            style={{
              height: "50%",
              transformStyle: "preserve-3d",
              zIndex: isOpening ? 5 : 40, // 🔥 reverse layering
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
                background: "linear-gradient(180deg, #c4a57b, #b89968)",
                clipPath: "polygon(0 0, 100% 0, 50% 100%)",
                backfaceVisibility: "hidden",
              }}
            />
            <div
              className="absolute inset-0"
              style={{
                background: "linear-gradient(180deg, #d4c4b0, #c4b4a0)",
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
              background: "linear-gradient(0deg, #e8d4bc, #f0dcc8)",
              clipPath: "polygon(0 100%, 100% 100%, 50% 0)",
              zIndex: 5,
            }}
          />

          {/* Letter */}
          <motion.div
            className="absolute left-1/2 -translate-x-1/2 w-[85%] rounded-lg bg-white shadow-xl border border-rose-200 flex items-center justify-center"
            style={{
              height: "75%",
              bottom: "12%",
              zIndex: isOpening ? 50 : 10, // 🔥 dynamic layering
            }}
            animate={isOpening ? { y: -180, scale: 1.05 } : { y: 0, scale: 1 }}
            transition={{
              duration: 1,
              delay: 0.5,
            }}
          >
            <div className="text-center px-6">
              <p className="text-2xl md:text-3xl font-basic text-rose-900 mb-3">
                You're Invited
              </p>
              <p className="text-2xl tracking-widest text-rose-900 font-script">
                B & P
              </p>
            </div>
          </motion.div>

          {/* Seal */}
          <motion.div
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 
              w-12 h-12 rounded-full bg-[#652d32] shadow-lg 
              flex items-center justify-center"
            style={{ zIndex: 40 }}
            animate={isOpening ? { scale: 0 } : { scale: 1 }}
            transition={{ duration: 0.4 }}
          >
            <span className="text-[#eaddc4] text-sm font-semibold tracking-wider font-script">
              BJ
            </span>
          </motion.div>
        </motion.div>

        {/* Click Text */}
        {!isOpening && (
          <motion.p
            className="text-center mt-8 text-sm uppercase tracking-[0.4em] text-rose-400"
            animate={{ opacity: [0.3, 1, 0.3] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            Click to Open
          </motion.p>
        )}

        {/* Floating Hearts */}
        <AnimatePresence>
          {isOpening &&
            Array.from({ length: 6 }).map((_, i) => (
              <motion.div
                key={i}
                className="absolute text-xl"
                initial={{ opacity: 0, scale: 0, y: 0 }}
                animate={{
                  opacity: [0, 1, 0],
                  scale: [0, 1, 0.5],
                  y: -200,
                  x: (i - 3) * 40,
                }}
                transition={{
                  duration: 2,
                  delay: 0.8 + i * 0.1,
                }}
                style={{
                  left: "50%",
                  top: "50%",
                }}
              >
                ❤
              </motion.div>
            ))}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default Envelope;
