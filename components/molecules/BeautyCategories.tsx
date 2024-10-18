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
    <div className="container mx-auto px-4">
      <header className="text-center mb-10">
        <h1 className="text-4xl sm:text-5xl leading-10 tracking-normal font-apfelmittel text-[#101828]">
          Beauty Treatments At Your Doorstep
        </h1>
      </header>

      {/* Category Buttons */}
      <div className="flex justify-center space-x-4 sm:space-x-9 mb-8 font-euclidmedium text-2xl text-[#101828]">
        {['lashes', 'makeup', 'hair', 'nails', 'spa'].map((category) => (
          <button
            key={category}
            className={`px-3 py-1 sm:px-4 sm:py-2 rounded-xl transition-colors duration-300 ${
              activeCategory === category
                ? 'bg-[#DADAFF]'
                : 'bg-transparent text-[#98A2b3]'
            }`}
            onClick={() => {
              setSelectedCategory(imagesData[category]);
              setActiveCategory(category);
            }}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </button>
        ))}
      </div>

      {/* Main Image and Additional Images */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
        {/* Main Image (Always Visible) */}
        <div className="lg:col-span-2">
          <img
            src={selectedCategory.mainImage}
            alt="Main category"
            className="w-full h-auto lg:h-[90%] object-cover rounded-2xl"
          />
        </div>

        {/* Three Images on the Right (Hidden on Mobile) */}
        <div className="hidden lg:grid lg:col-span-2 grid-cols-2 grid-rows-2 gap-4">
          {/* Top Image */}
          <div className="col-span-2">
            <img
              src={selectedCategory.topImage}
              alt="Top image"
              className="w-full h-auto rounded-lg"
            />
          </div>
          {/* Bottom Left Image */}
          <div>
            <img
              src={selectedCategory.bottomLeftImage}
              alt="Bottom left image"
              className="w-full h-auto rounded-lg"
            />
          </div>
          {/* Bottom Right Image */}
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
