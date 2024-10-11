import React from "react";

interface SmallHeroProps {
  headerText: string;
  descriptionText: string;
}

const SmallHero: React.FC<SmallHeroProps> = ({ headerText, descriptionText }) => {
  return (
    <section className="bg-[#EDECFF] text-black flex flex-col items-center justify-center min-h-[40vh] md:min-h-[40vh] lg:min-h-[70vh]">
      <div className="text-center max-w-2xl">
        <h1 className="text-5xl  font-bold  text-center  font-apfelregular leading-[4rem] tracking-wider">{headerText}</h1>
        
      </div>
      <p className=" md:text-2xl mt-4 max-w-4xl text-center font-euclidlight text-[#475467]">{descriptionText}</p>
    </section>
  );
};

export default SmallHero;
