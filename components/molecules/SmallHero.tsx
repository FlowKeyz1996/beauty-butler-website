import React from "react";

interface SmallHeroProps {
  headerText: string;
  descriptionText: string;
}

const SmallHero: React.FC<SmallHeroProps> = ({ headerText, descriptionText }) => {
  return (
    <section className="bg-[#DADAFF] text-black flex items-center justify-center min-h-[50vh] md:min-h-[70vh] lg:min-h-[80vh]">
      <div className="text-center max-w-2xl">
        <h1 className="text-3xl md:text-5xl font-bold  text-center tracking-wider font-apfelregular">{headerText}</h1>
        <p className="text-lg md:text-2xl mt-4 font-euclidmedium">{descriptionText}</p>
      </div>
    </section>
  );
};

export default SmallHero;
