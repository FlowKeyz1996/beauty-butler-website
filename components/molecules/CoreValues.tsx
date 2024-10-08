// components/CoreValues.tsx
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
    imageSrc: '/images/innovation.jpg',
  },
  {
    id: 3,
    title: 'Excellence drives our performance',
    description: 'We’re all about setting the bar high. Striving for excellence means putting in the effort, paying attention to the details, and always pushing to improve and deliver top-notch quality in everything we do.',
    imageSrc: '/images/customer-focus.jpg',
  },
  {
    id: 4,
    title: 'Empathy guides our interactions',
    description: 'Understanding and relating to each other’s feelings and perspectives is crucial. Empathy helps us build strong relationships, communicate effectively, and create a supportive work environment where everyone feels valued.',
    imageSrc: '/images/collaboration.jpg',
  },
  {
    id: 5,
    title: 'Creativity fuels our innovation',
    description: 'Thinking outside the box is what drives us forward. We encourage coming up with new ideas and innovative solutions to challenges. Embracing creativity keeps us adaptable and fuels our growth and success.',
    imageSrc: '/images/excellence.jpg',
  },
];

const CoreValues: React.FC = () => {
  return (
    <section className="py-12 bg-[#F7F7ff]">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-10">Core Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {coreValuesData.slice(0, 2).map((value) => (
            <div
              key={value.id}
              className=" h-94 bg-white shadow-md overflow-hidden rounded-2xl flex flex-col justify-center items-center text-center"
            >
              <img
                src={value.imageSrc}
                alt={value.title}
                className="w-24  object-cover my-4"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
          {coreValuesData.slice(2).map((value) => (
            <div
              key={value.id}
              className="w-full h-64 bg-white shadow-md overflow-hidden rounded-lg flex flex-col justify-center items-center text-center"
            >
              <img
                src={value.imageSrc}
                alt={value.title}
                className="w-24 h-24 object-cover mb-4 rounded-full"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreValues;
