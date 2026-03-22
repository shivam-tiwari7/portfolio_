import { motion } from "motion/react";

const education = [
  {
    title: "B.Tech — CSE",
    school: "Lovely Professional University",
    year: "2023 – Present",
    score: "CGPA: 8.37",
  },
  {
    title: "Class XII",
    school: "Surya Public School",
    year: "2022 – 2023",
    score: "86",
  },
  {
    title: "Class X",
    school: "Seth M.R. Jaipuria school",
    year: "2019 – 2020",
    score: "92%",
  },
];

const Education = () => {
  return (
    <section id="education" className="c-space section-spacing">
      <h2 className="text-heading mb-10">Education</h2>

      <div className="relative border-l border-white/10 pl-6 space-y-10">
        {education.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.2 }}
            className="relative"
          >
            {/* DOT */}
            <div className="absolute -left-[34px] top-1 w-4 h-4 bg-pink-500 rounded-full shadow-[0_0_15px_rgba(236,72,153,0.8)]" />

            <div className="p-5 rounded-2xl border border-white/10 bg-primary">
              <h3 className="text-white font-semibold">
                {item.title}
              </h3>
              <p className="text-neutral-400 text-sm">
                {item.school}
              </p>

              <div className="flex justify-between text-sm text-neutral-500 mt-2">
                <span>{item.year}</span>
                <span>{item.score}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Education;