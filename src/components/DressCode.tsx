import { motion } from "framer-motion";
import mehendiImg from "../assets/Mehendi.png";
import weddingImg from "../assets/wedding.png";
import receptionImg from "../assets/reception.png";

const events = [
  {
    date: "23",
    month: "FEB",
    time: "Evening",
    eventName: "Mehendi",
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
    date: "27",
    month: "FEB",
    time: "Evening",
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
            className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px"
            style={{ background: "hsl(var(--gold) / 0.4)" }}
          />

          {events.map((event, i) => (
            <motion.div
              key={i}
              className="relative flex items-center mb-2 last:mb-0"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
            >
              {/* Left side content */}
              <div className="w-5/12 text-right pr-6">
                {event.side === "left" ? (
                  <div>
                    <h3 className="text-xl md:text-2xl font-basic text-[#f5e6d3]">
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

              {/* Center date bubble */}
              {/* Center Date Box */}
              <div className="relative z-10 flex-shrink-0 w-2/12 flex justify-center">
                <div className="flex flex-col items-center">
                  {/* Vertical Line (Top) */}
                  {i !== 0 && <div className="w-px h-10 bg-[#d6b98c]" />}

                  {/* Date Card */}
                  <div
                    className="w-28 md:w-32 h-32 md:h-36 rounded-2xl 
      flex flex-col items-center justify-center 
      bg-[#f6f1ea] border border-[#e4c89a] 
      shadow-sm"
                  >
                    {/* Date */}
                    <span className="font-serif text-4xl md:text-5xl text-[#6b2c2c] leading-none">
                      {event.date}
                      <sup className="text-sm align-super">th</sup>
                    </span>

                    {/* Month */}
                    <span className="uppercase tracking-[0.2em] text-sm text-[#3d2b1f] mt-2">
                      {event.month}
                    </span>

                    {/* Time */}
                    <span className="italic text-sm text-[#6b4b32] mt-1">
                      {event.time}
                    </span>
                  </div>

                  {/* Vertical Line (Bottom) */}
                  {i !== events.length - 1 && (
                    <div className="w-px h-10 bg-[#d6b98c]" />
                  )}
                </div>
              </div>

              {/* Right side content */}
              <div className="w-5/12 text-left pl-6">
                {event.side === "right" ? (
                  <div>
                    <h3 className="text-xl md:text-2xl font-basic text-[#f5e6d3]">
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

        <motion.p
          className="mt-6 font-body text-sm italic text-muted-foreground text-[#f5e6d3]"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
        >
          Please avoid wearing red — that's reserved for the bride
        </motion.p>
      </motion.div>
    </section>
  );
};

export default DressCode;
