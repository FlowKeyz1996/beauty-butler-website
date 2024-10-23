import React from 'react';

interface CoreValue {
  id: number;
  title: string;
  description: string;
  imageSrc: string;
}

const coreValuesData: CoreValue[] = [
  {
    id: 1,
    title: 'Transparency illuminates our journey',
    description: 'We believe in keeping it real with each other. Open and honest communication is key—sharing what’s going on, how decisions are made, and the processes we follow helps build trust and accountability across our team.',
    imageSrc: '/corevalueiconone.svg', // Replace with your image path
  },
  {
    id: 2,
    title: 'Ownership propels us forward',
    description: 'Owning your role means taking charge of your tasks and outcomes. We appreciate team members who are proactive, hold themselves accountable, and are dedicated to getting results, even when things get tough.',
    imageSrc: '/self organization.svg',
  },
  {
    id: 3,
    title: 'Excellence drives our performance',
    description: 'We’re all about setting the bar high. Striving for excellence means putting in the effort, paying attention to the details, and always pushing to improve and deliver top-notch quality in everything we do.',
    imageSrc: '/corevaluethree.svg',
  },
  {
    id: 4,
    title: 'Empathy guides our interactions',
    description: 'Understanding and relating to each other’s feelings and perspectives is crucial. Empathy helps us build strong relationships, communicate effectively, and create a supportive work environment where everyone feels valued.',
    imageSrc: '/corevaluefour.svg',
  },
  {
    id: 5,
    title: 'Creativity fuels our innovation',
    description: 'Thinking outside the box is what drives us forward. We encourage coming up with new ideas and innovative solutions to challenges. Embracing creativity keeps us adaptable and fuels our growth and success.',
    imageSrc: '/corevaluefive.svg',
  },
];

const CoreValues: React.FC = () => {
  return (
    <section className="py-12 bg-[#F7F7ff]">
      <div className="container mx-auto px-4">
        <h2 className=" text-3xl sm:text-5xl text-center mb-10 font-apfelmittel">Core Values</h2>

        {/* For large screens, display in grid */}
        <div className="hidden md:grid md:grid-cols-2 gap-8">
          {coreValuesData.slice(0, 2).map((value) => (
            <div
              key={value.id}
              className=" h-[200px] sm:h-auto bg-white overflow-hidden rounded-2xl flex flex-col justify-center items-center text-center"
            >
              <img
                src={value.imageSrc}
                alt={value.title}
                className="w-24 h-24 object-contain my-4"
              />
              <div className="p-4">
                <h3 className="text-2xl mb-2 text-[#101828] font-apfelmittel">{value.title}</h3>
                <p className="text-[#475467] font-euclidlight">{value.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="hidden md:grid md:grid-cols-3 gap-8 mt-8">
          {coreValuesData.slice(2).map((value) => (
            <div
              key={value.id}
              className="h-auto bg-white overflow-hidden rounded-3xl flex flex-col justify-center items-center text-center"
            >
              <img
                src={value.imageSrc}
                alt={value.title}
                className="w-24 h-24 object-contain mb-4"
              />
              <div className="p-4">
                <h3 className="text-xl  mb-2 font-apfelmittel">{value.title}</h3>
                <p className="text-[#475467] font-euclidlight">{value.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* For mobile view, display in flex row with horizontal scroll */}
        <div className="md:hidden flex overflow-x-scroll space-x-4 pb-4">
          {coreValuesData.map((value) => (
            <div
              key={value.id}
              className="min-w-[300px] bg-white overflow-hidden rounded-2xl flex flex-col justify-center items-center text-center"
            >
              <img
                src={value.imageSrc}
                alt={value.title}
                className="w-24 h-24 object-contain my-4"
              />
              <div className="p-4">
                <h3 className="text-2xl font-semibold mb-2 font-apfelregular">{value.title}</h3>
                <p className="text-[#475467] font-euclidlight">{value.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreValues;
