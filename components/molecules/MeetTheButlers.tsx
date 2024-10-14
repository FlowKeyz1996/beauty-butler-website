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
    name: 'Chubby Eze',
    position: 'Operations Lead',
    imageSrc: '/butlerimgzero.svg',
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
    position: 'Marketing Lead',
    imageSrc: '/meetbutlerone.svg',
  },
  {
    id: 4,
    name: 'Sanni Emmanuel',
    position: 'Senior FrontEnd Engineer',
    imageSrc: '/butlerimgone.svg',
  },
  {
    id: 5,
    name: 'Samuel David',
    position: 'Senior Mobile Engineer',
    imageSrc: '/butlerimgtwo.svg',
  },
  {
    id: 6,
    name: 'Adedotun',
    position: 'Senior BackEnd Engineer',
    imageSrc: '/butlerimgthree.svg',
  },
];

const MeetTheButlers: React.FC = () => {
  return (
    <section className="my-24">
      <div className="flex flex-col items-center text-center mb-6">
        <img src="/meetbutlerheaderimg.svg" alt="Meet The Butlers" className="mb-4" />
        <h2 className="text-4xl font-bold font-apfelregular tracking-wide">Meet The Butlers at Beauty Butler</h2>
      </div>
      
      {/* Wrapper with horizontal scroll on mobile */}
      <div className="px-4">
        <div className="flex gap-4 overflow-x-auto sm:grid sm:grid-cols-2 md:grid-cols-3 md:gap-6">
          {butlers.map((butler) => (
            <div
              key={butler.id}
              className="min-w-[250px] bg-white p-6 flex flex-col items-center text-center flex-shrink-0 sm:flex-shrink md:flex-shrink-0"
            >
              <img
                src={butler.imageSrc}
                alt={butler.name}
                className="object-cover mb-4"
              />
              <h3 className="text-2xl font-semibold font-apfelregular">{butler.name}</h3>
              <p className="text-md text-[#475467] font-euclidlight">{butler.position}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MeetTheButlers;
