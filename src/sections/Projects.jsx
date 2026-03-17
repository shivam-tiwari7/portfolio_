import { useState } from "react";
import Project from "../components/Project";
import { motion, useMotionValue, useSpring } from "motion/react";

const myProjects = [
  {
    id: 1,
    title: "Quick Blog",
    description: "A clean, modern blogging platform built with React and Vite.",
    subDescription: [
      "Features user authentication, markdown support, and responsive design.",
      "Focuses on fast performance and intuitive user experience."
    ],
    image: "assets/projects/quickblog.png",
    tags: [
      { id: 1, name: "React", path: "assets/logos/react.svg" },
      { id: 2, name: "Vite", path: "assets/logos/vitejs.svg" },
      { id: 3, name: "Tailwind", path: "assets/logos/tailwindcss.svg" },
    ],
    href: "https://quick-blog-zeta-orpin.vercel.app",
  },
  {
    id: 2,
    title: "Sahityashala",
    description: "An online literature portal connecting readers and writers.",
    subDescription: [
      "Built with WordPress and custom plugins for content management.",
      "Includes interactive features for submissions and user engagement."
    ],
    image: "assets/projects/satis.png",
    tags: [
      { id: 1, name: "WordPress", path: "assets/logos/wordpress.svg" },
      { id: 2, name: "HTML5", path: "assets/logos/html5.svg" },
      { id: 3, name: "CSS3", path: "assets/logos/css3.svg" },
    ],
    href: "https://www.sahityashala.in",
  },
];

const Projects = () => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { damping: 10, stiffness: 50 });
  const springY = useSpring(y, { damping: 10, stiffness: 50 });

  const handleMouseMove = (e) => {
    x.set(e.clientX + 20);
    y.set(e.clientY + 20);
  };

  const [preview, setPreview] = useState(null);

  return (
    <section
    id="work"
      onMouseMove={handleMouseMove}
      className="relative c-space section-spacing"
    >
      <h2 className="text-heading">My Selected Projects</h2>
      <div className="bg-gradient-to-r from-transparent via-neutral-700 to-transparent mt-12 h-[1px] w-full" />

      {myProjects.map((project) => (
        <Project key={project.id} {...project} setPreview={setPreview} />
      ))}

      {preview && (
        <motion.img
          className="fixed top-0 left-0 z-50 object-cover h-56 rounded-lg shadow-lg pointer-events-none w-80"
          src={preview}
          style={{ x: springX, y: springY }}
        />
      )}
    </section>
  );
};

export default Projects;