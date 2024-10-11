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
    imageSrc: '/butlerimgzero.svg',// Ensure these paths are correct in your public folder
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
      <div>
      <h2 className="text-3xl font-bold text-center mb-6 font-apfelregular">Meet The Butlers at Beauty Butler</h2>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4 ">
        {butlers.map((butler) => (
          <div
            key={butler.id}
            className="bg-white p-6 flex flex-col items-center text-center "
          >
            <img
              src={butler.imageSrc}
              alt={butler.name}
              className=" object-cover mb-4"
            />
            <h3 className="text-2xl font-semibold font-apfelregular">{butler.name}</h3>
            <p className="text-md text-[#475467] font-euclidlight">{butler.position}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MeetTheButlers;
