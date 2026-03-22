import { useState } from "react";
import { motion } from "motion/react";

const certs = [
  {
    name: "Complete Full stack Web development",
    org: "udemy",
    category: "Web",
    link: "https://drive.google.com/file/d/11xj1waggEe1rfs3GZP5H5o7dv9IT53Iz/view?usp=sharing",
  },
  {
    name: "A Guide to Machine learning ",
    org: "Cipher School",
    category: "ML",
    link: "https://drive.google.com/file/d/1dMQAPd2PV6AUXUqTqQ5AKd7xn1jFqQhe/view?usp=sharing",
  },
  {
    name: "Privacy and Security in Online Social Media",
    org: "NPTEL",
    category: "Cyber Security",
    link: "https://drive.google.com/file/d/1xrjZESEzTIck4dIZoOy8cbfPau40XQoE/view?usp=sharing",
  },
];

const filters = ["All", "Web", "ML", "Cyber"];

const Certifications = () => {
  const [active, setActive] = useState("All");

  const filtered =
    active === "All"
      ? certs
      : certs.filter((c) => c.category === active);

  return (
    <section id="certs" className="c-space section-spacing">
      <h2 className="text-heading mb-6">Certifications</h2>

      {/* FILTER BUTTONS */}
      <div className="flex gap-3 mb-8">
        {filters.map((f) => (
          <button
            key={f}
            onClick={() => setActive(f)}
            className={`px-4 py-1 rounded-full text-sm transition ${
              active === f
                ? "bg-pink-500 text-white"
                : "bg-white/10 text-neutral-400 hover:bg-white/20"
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      {/* GRID */}
      <div className="grid md:grid-cols-2 gap-6">
        {filtered.map((cert, i) => (
          <motion.div
            key={i}
            className="group perspective"
          >
            <div className="relative w-full h-40 transition-transform duration-500 transform-style preserve-3d group-hover:rotate-y-180">

              {/* FRONT */}
              <div className="absolute w-full h-full p-5 rounded-2xl border border-white/10 bg-primary backface-hidden flex flex-col justify-center">

                <h3 className="text-white font-semibold">
                  {cert.name}
                </h3>
                <p className="text-neutral-400 text-sm">
                  {cert.org}
                </p>

                {/* glow */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition bg-pink-500/10 blur-xl" />
              </div>

              {/* BACK */}
              <div className="absolute w-full h-full p-5 rounded-2xl bg-pink-500/10 border border-pink-500/20 rotate-y-180 backface-hidden flex items-center justify-center">

                <a
                  href={cert.link}
                  target="_blank"
                  className="text-pink-300 hover:underline"
                >
                  View Certificate →
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Certifications;