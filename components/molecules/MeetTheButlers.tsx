import React from 'react';

type Butler = {
  id: number;
  name: string;
  position: string;
  imageSrc: string;
};

const butlers: Butler[] = [
  {
    id: 1,
    name: 'John Doe',
    position: 'Chief Butler',
    imageSrc: '/',// Ensure these paths are correct in your public folder
  },
  {
    id: 2,
    name: 'Mutmainah Adisa',
    position: 'Design Lead',
    imageSrc: '/mainahimg.svg',
  },
  {
    id: 3,
    name: 'Boluwatife Oratokhai',
    position: 'Butler Assistant',
    imageSrc: '/meetbutlerone.svg',
  },
  {
    id: 4,
    name: 'Sanni Emmanuel',
    position: 'Marketing Specialist',
    imageSrc: '/images/jane_smith.jpg',
  },
  {
    id: 5,
    name: 'Alex Brown',
    position: 'Technology Lead',
    imageSrc: '/images/alex_brown.jpg',
  },
  {
    id: 6,
    name: 'Sarah Wilson',
    position: 'HR Manager',
    imageSrc: '/images/sarah_wilson.jpg',
  },
];

const MeetTheButlers: React.FC = () => {
  return (
    <section className="my-24">
      <h2 className="text-3xl font-bold text-center mb-6 font-apfelregular">Meet The Butlers at Beauty Butler</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4">
        {butlers.map((butler) => (
          <div
            key={butler.id}
            className="bg-white p-6 flex flex-col items-center text-center"
          >
            <img
              src={butler.imageSrc}
              alt={butler.name}
              className=" object-cover mb-4"
            />
            <h3 className="text-xl font-semibold">{butler.name}</h3>
            <p className="text-sm text-gray-500">{butler.position}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MeetTheButlers;
