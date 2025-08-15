import { useRef } from "react";
import Card from "../components/Card";
import CopyEmail from "../components/CopyEmail";
import { Frameworks } from "../components/Frameworks";


const About = () => {
  const grid2Container = useRef();
  return (
    <section className="c-space section-spacing" id="about">
      <h2 className="text-heading">About Me</h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-6 md:auto-rows-[18rem] mt-12">
        {/* Grid 1 */}
        <div className="flex items-end grid-black-color grid-1">
          <img
            src="src/assets/profile.png"
            className="absolute object-cover w-32 scale-300 right-0.5 bottom-0.5 top-1  md:scale-600 
            md:top-36 md:right-1/4

            
               "
          />
          {/* absolute scale-[1.75] -right-[5rem] -top-[1rem] md:scale-[3] md:left-50 md:inset-y-10 lg:scale-[2.5] // scale-[1.2] md:-top-1   md: */}
          <div className="z-10 hidden md:block">
            <p className="headtext">Hi, I'm Abhishek Kumar Prasad</p>
            <p className="subtext ">
              I turn designs into websites that not only look good but also
              perform well. From layouts to interactive features, I enjoy
              building sites that feel effortless to use.
            </p>
          </div>
          <div className="z-10 block md:hidden">
            <p className="text-xl md:block">Hi, I'm Abhishek Kumar Prasad</p>
            <p className="subtext  ">
              I turn designs into websites that not only look good but also
              perform well. From layouts to interactive features, I enjoy
              building sites that feel effortless to use.
            </p>
          </div>

          <div className="absolute inset-x-0 pointer-events-none -bottom-4 h-1/2 sm:h-1/3 bg-gradient-to-t from-indigo" />
        </div>
        {/* Grid 2 */}
        <div className="grid-default-color grid-2">
          <div
            ref={grid2Container}
            className="flex items-center justify-center w-full h-full"
          >
            <p className="flex items-end text-3xl text-gray-500">
              // Not a bug, it’s a feature
            </p>
            <Card
              style={{ rotate: "75deg", top: "30%", left: "20%" }}
              text="REACT"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "-30deg", top: "60%", left: "45%" }}
              text="JAVASCRIPT"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "90deg", bottom: "30%", left: "70%" }}
              text="LIQUID"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "-45deg", top: "55%", left: "0%" }}
              text="SHOPIFY"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "20deg", top: "10%", left: "38%" }}
              text="NODE Js"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "30deg", top: "70%", left: "70%" }}
              text="PYTHON"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "30deg", top: "70%", left: "70%" }}
              text="TAILWIND CSS"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "30deg", top: "70%", left: "70%" }}
              text="HYDROGEN"
              containerRef={grid2Container}
            />
          </div>
        </div>

        {/* Grid 3 */}
        <div className="grid-special-color grid-3">
          <div className="flex flex-col items-center justify-center gap-4 size-full">
            <p className="text-center headtext">
              Do you want to start a project together?
            </p>
            <CopyEmail />
          </div>
        </div>
        {/* Grid 4 */}
        {/* <div className="absolute  inset-y-0 md:inset-y-9 w-full h-full start-[50%] md:scale-125 left-1/3">
            {" "}
            <Frameworks />
          </div> */}
        <div className="grid-default-color grid-5 relative flex flex-col  md:flex-row p-4">
          <div className="w-full md:w-1/2 z-10">
            <p className="headText text-xl text-center md:text-left ">How I Build</p>
            <p className="subtext text-justify">
              I love mixing tech and design, just like mixing coffee with the
              right amount of sugar to make it perfect. In the past two months,
              I’ve built 4+ live websites using Liquid and Hydrogen. each one
              teaching me something new and making me better at what I do.
            </p>
          </div>
          <div className="w-full hidden md:w-1/2 md:scale-125 md:block">
            <Frameworks />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
