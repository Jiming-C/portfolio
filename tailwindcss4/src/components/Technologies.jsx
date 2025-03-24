import { RiReactjsLine } from "react-icons/ri";
import { FaJava, FaPython, FaJs, FaHtml5, FaCss3Alt } from "react-icons/fa";
import { motion } from "framer-motion";

const iconVariants = (duration) => ({
  initial: { y: -5 },
  animate: {
    y: [5, -5],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-12 overflow-visible">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -50 }}
        transition={{ duration: 1 }}
        className="my-12 text-center text-3xl"
      >
        Technologies
      </motion.h2>

      <div className="space-y-8">
        {/* Row 1 - Core Technologies */}
        <div className="relative overflow-visible">
          <motion.h3
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.6 }}
            className="text-xl mb-5 ml-3 font-medium text-neutral-400"
          >
            Core Technologies
          </motion.h3>
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 1 }}
            className="flex pb-1 gap-3 px-6 snap-x snap-mandatory overflow-visible"
          >
            {[2.5, 3, 3, 3, 3, 3, 3].map((duration, index) => (
              <motion.div
                key={index}
                variants={iconVariants(duration)}
                initial="initial"
                animate="animate"
                className="group relative rounded-xl border-2 border-neutral-800 p-4 flex-shrink-0 snap-center overflow-visible"
              >
                <RiReactjsLine className="text-5xl text-cyan-400 transition-transform duration-200 group-hover:scale-110" />
                <span className="absolute top-full left-1/2 -translate-x-1/2 bg-neutral-800 text-sm text-white px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 mt-2 z-50 whitespace-nowrap animate-tooltip-pulse">
                  React
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Row 2 - Programming Languages */}
        <div className="relative overflow-visible">
          <motion.h3
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.6 }}
            className="text-xl mb-5 ml-3 font-medium text-neutral-400"
          >
            Programming Languages
          </motion.h3>
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 1 }}
            className="flex pb-1 gap-3 px-6 snap-x snap-mandatory overflow-visible"
          >
            {[
              { icon: FaJava, name: "Java", color: "text-red-500" },
              { icon: FaPython, name: "Python", color: "text-yellow-500" },
              { icon: FaJs, name: "JavaScript", color: "text-yellow-400" },
              { icon: FaHtml5, name: "HTML5", color: "text-orange-500" },
              { icon: FaCss3Alt, name: "CSS3", color: "text-blue-500" },
            ].map((tech, index) => (
              <motion.div
                key={index}
                variants={iconVariants(2.5 + index * 0.2)}
                initial="initial"
                animate="animate"
                className="group relative rounded-xl border-2 border-neutral-800 p-4 flex-shrink-0 snap-center overflow-visible"
              >
                <tech.icon
                  className={`text-5xl ${tech.color} transition-transform duration-200 group-hover:scale-110`}
                />
                <span className="absolute top-full left-1/2 -translate-x-1/2 bg-neutral-800 text-sm text-white px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 mt-2 z-50 whitespace-nowrap animate-tooltip-pulse">
                  {tech.name}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Row 3 - Development Tools */}
        <div className="relative overflow-visible">
          <motion.h3
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.6 }}
            className="text-xl mb-5 ml-3 font-medium text-neutral-400"
          >
            Development Tools
          </motion.h3>
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 1 }}
            className="flex pb-1 gap-3 px-6 snap-x snap-mandatory overflow-visible"
          >
            {[3, 3, 3, 3, 3].map((duration, index) => (
              <motion.div
                key={index}
                variants={iconVariants(duration)}
                initial="initial"
                animate="animate"
                className="group relative rounded-xl border-2 border-neutral-800 p-4 flex-shrink-0 snap-center overflow-visible"
              >
                <FaJava className="text-5xl text-red-500 transition-transform duration-200 group-hover:scale-110" />
                <span className="absolute top-full left-1/2 -translate-x-1/2 bg-neutral-800 text-sm text-white px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 mt-2 z-50 whitespace-nowrap animate-tooltip-pulse">
                  Java
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Technologies;
