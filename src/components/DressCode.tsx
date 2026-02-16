import { motion } from "framer-motion";
import mehendiImg from "../assets/Mehendi.png";
import weddingImg from "../assets/wedding.png";
import receptionImg from "../assets/reception.png";

const events = [
  {
    date: "23",
    month: "FEB",
    time: "Evening",
    eventName: "Mehendi/Get-together ",
    dressCode: "Dress color - Yellow, Pink, & Orange",
    address: "Nadipur, Pokhara",
    image: mehendiImg,
    side: "right" as const,
  },
  {
    date: "25",
    month: "FEB",
    time: "Morning",
    eventName: "Wedding",
    address: "Nadipur, Pokhara",
    image: weddingImg,
    side: "left" as const,
  },
  {
    date: "26",
    month: "FEB",
    // time: "Evening",
    eventName: "Reception Party",
    address: "Nadipur, Pokhara",
    image: receptionImg,
    side: "right" as const,
  },
];

const DressCode = () => {
  return (
    <section
      className="wedding-section text-center py-16"
      style={{ background: "#6b2c2c" }}
    >
      <motion.div
        className="max-w-2xl mx-auto"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <p className="uppercase tracking-[0.3em] text-sm text-[#f5e6d3] mb-3">
          Events
        </p>
        <h2 className="font-script text-[48px] sm:text-[70px] md:text-[90px] text-[#f5e6d3]">
          Wedding Schedules
        </h2>
        <div className="gold-divider" />

        {/* Timeline */}
        <div className="relative mt-12">
          {/* Vertical line */}
          <div
            className="absolute left-1/2 -translate-x-1/2 top-16 bottom-16 w-[2px] bg-[#d6b98c]"
          />

          {events.map((event, i) => (
            <motion.div
              key={i}
              className="relative flex items-center mb-12 last:mb-0"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
            >
              {/* Left side content */}
              <div className="w-5/12 text-right pr-8 md:pr-12">
                {event.side === "left" ? (
                  <div>
                    <h3 className="text-xl md:text-2xl font-basic text-[#f5e6d3] font-bold">
                      {event.eventName}
                    </h3>
                    <p className="font-body text-sm text-muted-foreground mt-1 font-basic text-[#f5e6d3]">
                      {event.address}
                    </p>
                  </div>
                ) : (
                  <img
                    src={event.image}
                    alt={event.eventName}
                    className="w-32 h-32 md:w-60 md:h-60 object-contain"
                  />
                )}
              </div>

              {/* Center Date Box */}
              <div className="relative z-10 w-2/12 flex justify-center">

                {/* Date Card */}
                <div
                  className="w-24 md:w-32 h-28 md:h-36 rounded-2xl flex flex-col items-center justify-center 
      bg-[#f6f1ea] border border-[#e4c89a] 
      shadow-sm"
                >
                  {/* Date */}
                  <span className="font-serif text-3xl md:text-5xl text-[#6b2c2c] leading-none">
                    {event.date}
                    <sup className="text-sm align-super">th</sup>
                  </span>

                  {/* Month */}
                  <span className="uppercase tracking-[0.2em] text-sm text-[#3d2b1f] mt-2">
                    {event.month}
                  </span>

                  {/* Time */}
                  <span className="text-sm text-[#6b4b32] mt-1">
                    {event.time}
                  </span>
                </div>
              </div>

              {/* Right side content */}
              <div className="w-5/12 text-left pl-8 md:pl-12">
                {event.side === "right" ? (
                  <div>
                    <h3 className="text-xl md:text-2xl font-basic text-[#f5e6d3] font-bold">
                      {event.eventName}
                    </h3>
                    <p className="font-body text-md text-muted-foreground mt-1 font-basic text-[#f5e6d3] font-medium">
                      {event.dressCode}
                    </p>
                    <p className="font-body text-sm text-muted-foreground mt-1 font-basic text-[#f5e6d3]">
                      {event.address}
                    </p>
                  </div>
                ) : (
                  <img
                    src={event.image}
                    alt={event.eventName}
                    className="w-32 h-32 md:w-60 md:h-60 object-contain"
                  />
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Color palette */}
        <motion.div
          className="mt-12 flex justify-center gap-3"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        ></motion.div>
      </motion.div>
    </section>
  );
};

export default DressCode;
