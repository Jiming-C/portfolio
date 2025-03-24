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

// Define arrays for each row using the same format as row 2
const coreTechnologies = [
  { icon: RiReactjsLine, name: "React", color: "text-cyan-400", duration: 2.5 },
  { icon: RiReactjsLine, name: "React", color: "text-cyan-400", duration: 2.7 },
  { icon: RiReactjsLine, name: "React", color: "text-cyan-400", duration: 2.9 },
  { icon: RiReactjsLine, name: "React", color: "text-cyan-400", duration: 3 },
  { icon: RiReactjsLine, name: "React", color: "text-cyan-400", duration: 3 },
  { icon: RiReactjsLine, name: "React", color: "text-cyan-400", duration: 3 },
  { icon: RiReactjsLine, name: "React", color: "text-cyan-400", duration: 3 },
];

const programmingLanguages = [
  { icon: FaJava, name: "Java", color: "text-red-500", duration: 2.5 },
  { icon: FaPython, name: "Python", color: "text-yellow-500", duration: 2.7 },
  { icon: FaJs, name: "JavaScript", color: "text-yellow-400", duration: 2.9 },
  { icon: FaHtml5, name: "HTML5", color: "text-orange-500", duration: 3 },
  { icon: FaCss3Alt, name: "CSS3", color: "text-blue-500", duration: 3 },
];

const developmentTools = [
  { icon: FaJava, name: "Java", color: "text-red-500", duration: 3 },
  { icon: FaJava, name: "Java", color: "text-red-500", duration: 3 },
  { icon: FaJava, name: "Java", color: "text-red-500", duration: 3 },
  { icon: FaJava, name: "Java", color: "text-red-500", duration: 3 },
  { icon: FaJava, name: "Java", color: "text-red-500", duration: 3 },
];

// Helper function to render a row
const renderRow = (title, techs) => (
  <div className="relative overflow-visible">
    <motion.h3
      whileInView={{ opacity: 1, x: 0 }}
      initial={{ opacity: 0, x: -50 }}
      transition={{ duration: 0.6 }}
      className="text-xl mb-5 ml-3 font-medium text-neutral-400"
    >
      {title}
    </motion.h3>
    <motion.div
      whileInView={{ opacity: 1, x: 0 }}
      initial={{ opacity: 0, x: -100 }}
      transition={{ duration: 1 }}
      className="flex pb-1 gap-3 px-6 snap-x snap-mandatory overflow-visible"
    >
      {techs.map((tech, index) => (
        <motion.div
          key={index}
          variants={iconVariants(tech.duration)}
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
);

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
        {renderRow("Core Technologies", coreTechnologies)}
        {renderRow("Programming Languages", programmingLanguages)}
        {renderRow("Development Tools", developmentTools)}
      </div>
    </div>
  );
};

export default Technologies;
