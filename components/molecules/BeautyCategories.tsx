import { useState } from 'react';

interface ImageSet {
  mainImage: string;
  topImage: string;
  bottomLeftImage: string;
  bottomRightImage: string;
}

const imagesData: Record<string, ImageSet> = {
  lashes: {
    mainImage: '/lashesone.svg',
    topImage: '/lashestwo.svg',
    bottomLeftImage: '/lashesone.svg',
    bottomRightImage: '/lashesone.svg',
  },
  makeup: {
    mainImage: '/images/makeup-main.jpg',
    topImage: '/images/makeup-top.jpg',
    bottomLeftImage: '/images/makeup-bottom-left.jpg',
    bottomRightImage: '/images/makeup-bottom-right.jpg',
  },
  hair: {
    mainImage: '/images/hair-main.jpg',
    topImage: '/images/hair-top.jpg',
    bottomLeftImage: '/images/hair-bottom-left.jpg',
    bottomRightImage: '/images/hair-bottom-right.jpg',
  },
  nails: {
    mainImage: '/images/nails-main.jpg',
    topImage: '/images/nails-top.jpg',
    bottomLeftImage: '/images/nails-bottom-left.jpg',
    bottomRightImage: '/images/nails-bottom-right.jpg',
  },
  spa: {
    mainImage: '/images/spa-main.jpg',
    topImage: '/images/spa-top.jpg',
    bottomLeftImage: '/images/spa-bottom-left.jpg',
    bottomRightImage: '/images/spa-bottom-right.jpg',
  },
};

const BeautyCategories: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<ImageSet>(imagesData.lashes);
  const [activeCategory, setActiveCategory] = useState<string>('lashes'); 

  return (
    <div className="container mx-auto p-5">
      <header className="text-center my-8 mb-10">
        <h1 className="text-5xl  leading-10 tracking-normal font-semibold font-apfelregular text-[#101828]">Beauty Treatments At Your Doorstep</h1>
      </header>

      <div className="flex justify-center space-x-4 mb-8 font-semibold font-euclidmedium">
        {['lashes', 'makeup', 'hair', 'nails', 'spa'].map((category) => (
          <button
          key={category}
          className={`px-4 py-2 rounded-xl transition-colors duration-300 ${
            activeCategory === category
              ? 'bg-[#DADAFF] text-black' // Active button background and text color
              : 'bg-transparent border border-black text-black' // Inactive button style
          }`}
            onClick={() => {
                setSelectedCategory(imagesData[category]);
                setActiveCategory(category); // Set active category
              }}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
        {/* Main Image on the Left */}
        <div className="lg:col-span-2">
          <img
            src={selectedCategory.mainImage}
            alt="Main category"
            className="w-full h-[100%] rounded-xl"
          />
        </div>

        {/* Three Images on the Right */}
        <div className="lg:col-span-2 grid grid-cols-2 grid-rows-2 gap-4">
          {/* Top image (Full width) */}
          <div className="col-span-2">
            <img
              src={selectedCategory.topImage}
              alt="Top image"
              className="w-full h-auto rounded-lg"
            />
          </div>
          {/* Bottom Left image */}
          <div>
            <img
              src={selectedCategory.bottomLeftImage}
              alt="Bottom left image"
              className="w-full h-auto rounded-lg"
            />
          </div>
          {/* Bottom Right image */}
          <div>
            <img
              src={selectedCategory.bottomRightImage}
              alt="Bottom right image"
              className="w-full h-auto rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BeautyCategories;
