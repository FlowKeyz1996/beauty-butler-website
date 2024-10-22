import React from "react";

interface SmallHeroProps {
  headerText: string;
  descriptionText: string;
}

const SmallHero: React.FC<SmallHeroProps> = ({ headerText, descriptionText }) => {
  return (
    <section className="bg-[#EDECFF] text-black flex flex-col items-center justify-center min-h-[40vh] sm:min-h-[55vh] md:min-h-[40vh] lg:min-h-[70vh] py-8 sm:py-12 md:py-16 lg:py-20">
      <div className="text-center max-w-2xl px-4 sm:px-6 mt-5 sm:mt-0">
        <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold text-center font-apfelregular  sm:leading-snug md:leading-[4rem] tracking-wide">
          {headerText}
        </h1>
      </div>
      <p className="text-sm sm:text-xl md:text-xl mt-4 max-w-4xl text-center font-euclidlight text-[#475467] px-4 sm:px-6">
        {descriptionText}
      </p>
    </section>
  );
};

export default SmallHero;
