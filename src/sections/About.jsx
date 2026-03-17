import { useRef, useEffect, useState } from "react";
import Card from "../components/Card";
import { Globe } from "../components/globe";
import CopyEmailButton from "../components/CopyEmailButton";
import { Frameworks } from "../components/Frameworks";

const About = () => {
  const grid2Container = useRef();
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  // Mouse move effect for floating cards
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!grid2Container.current) return;
      const rect = grid2Container.current.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width - 0.5) * 20;
      const y = ((e.clientY - rect.top) / rect.height - 0.5) * 20;
      setMousePos({ x, y });
    };

    const container = grid2Container.current;
    container.addEventListener("mousemove", handleMouseMove);
    return () => container.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const floatingStyle = (style) => ({
    ...style,
    transform: `translate(${mousePos.x}px, ${mousePos.y}px) rotate(${style.rotate || 0}deg)`,
    transition: "transform 0.2s ease",
  });

  return (
    <section  className="c-space section-spacing" id="about">
      <h2 className="text-heading">About Me</h2>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-6 md:auto-rows-[18rem] mt-12">

        {/* Grid 1 - Intro */}
        <div className="flex items-end grid-default-color grid-1 relative">
          <img
            src="assets/coding-pov.png"
            className="absolute scale-[1.75] -right-[5rem] -top-[1rem] md:scale-[3] md:left-50 md:inset-y-10 lg:scale-[2.5]"
          />
          <div className="z-10">
            <p className="headtext">Hi, I'm Shivam Tiwari</p>
            <p className="subtext">
              Full Stack Developer & Machine Learning enthusiast creating intelligent, scalable applications.
            </p>
          </div>
          <div className="absolute inset-x-0 pointer-events-none -bottom-4 h-1/2 sm:h-1/3 bg-gradient-to-t from-indigo" />
        </div>

        {/* Grid 2 - Floating Cards */}
        <div className="grid-default-color grid-2 relative">
          <div
            ref={grid2Container}
            className="flex items-center justify-center w-full h-full relative"
          >
            <p className="absolute text-5xl text-gray-500 select-none top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4">
              THINK. BUILD. SCALE.
            </p>

            <Card style={floatingStyle({ rotate: 75, top: "30%", left: "20%" })} text="APIs" containerRef={grid2Container} />
            <Card style={floatingStyle({ rotate: -30, top: "60%", left: "45%" })} text="Databases" containerRef={grid2Container} />
            <Card style={floatingStyle({ rotate: 90, bottom: "30%", left: "70%" })} text="System Design" containerRef={grid2Container} />
            <Card style={floatingStyle({ rotate: -45, top: "55%", left: "0%" })} text="ML Models" containerRef={grid2Container} />
            <Card style={floatingStyle({ rotate: 20, top: "10%", left: "38%" })} text="Optimization" containerRef={grid2Container} />
            <Card style={floatingStyle({ rotate: 30, top: "70%", left: "70%" })} text="React" containerRef={grid2Container} />
            <Card style={floatingStyle({ rotate: -45, top: "70%", left: "25%" })} text="Node.js" containerRef={grid2Container} />
            <Card style={floatingStyle({ rotate: -45, top: "5%", left: "10%" })} text="Python" containerRef={grid2Container} />
          </div>
        </div>

        {/* Grid 3 - Location */}
        <div className="grid-black-color grid-3 relative">
          <div className="z-10 w-[60%]">
            <p className="headtext">Location</p>
            <p className="subtext">
              Based in India, open to remote opportunities worldwide.
            </p>
          </div>
          <figure className="absolute left-[30%] top-[10%]">
            <Globe />
          </figure>
        </div>

        {/* Grid 4 - CTA */}
        <div className="grid-special-color grid-4 flex items-center justify-center">
          <div className="flex flex-col items-center justify-center gap-4">
            <p className="text-center headtext">
              Got a project or idea? Let's collaborate!
            </p>
            <CopyEmailButton />
          </div>
        </div>

        {/* Grid 5 - Tech Stack */}
        <div className="grid-default-color grid-5 relative">
          <div className="z-10 w-[55%]">
            <p className="headtext">Tech Stack</p>
            <p className="subtext">
              Modern, scalable, and production-ready — from backend systems to ML-powered applications.
            </p>
          </div>
          <div className="absolute inset-y-0 md:inset-y-9 w-full h-full start-[50%] md:scale-125">
            <Frameworks />
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;