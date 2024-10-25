import React, { useState, useEffect } from 'react';

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
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const scrollContainer = e.currentTarget;
    const scrollLeft = scrollContainer.scrollLeft;
    const cardWidth = scrollContainer.clientWidth;
    const totalScrollWidth = scrollContainer.scrollWidth - cardWidth;

    // Calculate the index based on the scroll position
    const newIndex = Math.round(scrollLeft / cardWidth);

    // If at the end of the scroll, activate the last indicator
    if (scrollLeft >= totalScrollWidth - 5) {
      setCurrentIndex(butlers.length - 1);
    } else {
      setCurrentIndex(newIndex);
    }
  };

  useEffect(() => {
    const updateIndex = () => {
      const scrollContainer = document.querySelector('.butlers-scroll-container');
      if (scrollContainer) {
        const scrollLeft = scrollContainer.scrollLeft;
        const cardWidth = scrollContainer.clientWidth;
        const totalScrollWidth = scrollContainer.scrollWidth - cardWidth;
        const newIndex = Math.round(scrollLeft / cardWidth);

        // Check if it's the last card
        if (scrollLeft >= totalScrollWidth - 5) {
          setCurrentIndex(butlers.length - 1);
        } else {
          setCurrentIndex(newIndex);
        }
      }
    };

    window.addEventListener('resize', updateIndex);
    return () => window.removeEventListener('resize', updateIndex);
  }, []);

  return (
    <section className="my-12 pb-24 sm:pb-0">
      <div className="flex flex-col items-center text-center mb-6">
        <img src="/meetbutlerheaderimg.svg" alt="Meet The Butlers" className="mb-4" />
        <h2 className="text-3xl sm:text-4xl font-apfelmittel text-[#101828] tracking-wide">Meet The Butlers at Beauty Butler</h2>
      </div>

      {/* Wrapper with horizontal scroll on mobile */}
      <div className="px-4">
        <div 
          className="butlers-scroll-container flex gap-4 overflow-x-auto sm:grid sm:grid-cols-2 md:grid-cols-3 md:gap-6 hide-scroll-bar"
          onScroll={handleScroll}
        >
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
              <h3 className="text-2xl font-apfelmittel text-[#101828]">{butler.name}</h3>
              <p className="text-md text-[#475467] font-euclidlight">{butler.position}</p>
            </div>
          ))}
        </div>

        {/* Scroll Indicator - only on mobile screens */}
        <div className="flex justify-center mt-6 sm:hidden">
          {butlers.map((_, index) => (
            <div
              key={index}
              className={`h-3 rounded-full mx-1 ${currentIndex === index ? 'bg-[#8878D8] w-12' : 'bg-gray-300 w-3'}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MeetTheButlers;
