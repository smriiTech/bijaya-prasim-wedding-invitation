import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface CountdownProps {
    targetDate: Date;
}

const Countdown = ({ targetDate }: CountdownProps) => {
    const calculateTimeLeft = () => {
        const now = new Date().getTime();
        const diff = targetDate.getTime() - now;

        if (diff <= 0) {
        return null;
        }

        return {
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / (1000 * 60)) % 60),
        seconds: Math.floor((diff / 1000) % 60),
        };
    };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  if (!timeLeft) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-center text-2xl md:text-4xl font-script text-[#6b2c2c]"
      >
        The Day Has Arrived 💍
      </motion.div>
    );
  }

  const blocks = [
    { value: timeLeft.days, label: "Days" },
    { value: timeLeft.hours, label: "Hours" },
    { value: timeLeft.minutes, label: "Minutes" },
    { value: timeLeft.seconds, label: "Seconds" },
  ];

  return (
    <div
      className="
      flex 
      flex-wrap 
      justify-center 
      gap-6 
      md:gap-10
      mt-10
    "
    >
      {blocks.map((block, i) => (
        <motion.div
          key={block.label}
          className="flex flex-col items-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1, duration: 0.5 }}
        >
          {/* Number Box */}
          <div
            className="
            w-20 h-20 
            sm:w-24 sm:h-24 
            md:w-28 md:h-28
            rounded-xl
            bg-white/80
            backdrop-blur-sm
            flex items-center justify-center
            shadow-lg
            border border-[#d8c2a8]/40
          "
          >
            <AnimatePresence mode="popLayout">
              <motion.span
                key={block.value}
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -10, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="text-2xl sm:text-3xl md:text-4xl font-serif text-[#6b2c2c]"
              >
                {String(block.value).padStart(2, "0")}
              </motion.span>
            </AnimatePresence>
          </div>

          {/* Label */}
          <span
            className="
            mt-3 
            text-xs 
            sm:text-sm
            uppercase 
            tracking-[0.3em] 
            text-[#7b2e2e]
          "
          >
            {block.label}
          </span>
        </motion.div>
      ))}
    </div>
  );
};

export default Countdown;
