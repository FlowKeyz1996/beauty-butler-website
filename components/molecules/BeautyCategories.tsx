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
    mainImage: '/makeup.svg',
    topImage: '/beautycategory-make-up.svg',
    bottomLeftImage: '/makeup-cat-one.svg',
    bottomRightImage: '/makeup-cat-two.svg',
  },
  hair: {
    mainImage: '/haircategory.svg',
    topImage: '/haircategoryone.svg',
    bottomLeftImage: '/hair-cat-one.svg',
    bottomRightImage: '/hair-cat-two.svg',
  },
  nails: {
    mainImage: '/nailscategory.svg',
    topImage: '/nail-category-top-img.svg',
    bottomLeftImage: '/nails-cat-one.svg',
    bottomRightImage: '/nails-cat-two.svg',
  },
  spa: {
    mainImage: '/spacategory.svg',
    topImage: '/spacategoryone.svg',
    bottomLeftImage: '/massage-cat-one.svg',
    bottomRightImage: '/massage-cat-two.svg',
  },
};

const BeautyCategories: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<ImageSet>(imagesData.lashes);
  const [activeCategory, setActiveCategory] = useState<string>('lashes');

  return (
    <div className="container mx-auto px-4">
      <header className="text-center mb-10">
        <h1 className="text-2xl sm:text-5xl  sm:leading-10 tracking-normal font-apfelmittel text-[#101828]">
          Beauty Treatments At Your Doorstep
        </h1>
      </header>

      {/* Category Buttons */}
      <div className="flex justify-center space-x-2 sm:space-x-9 mb-4 sm:mb-8 font-euclidmedium text-base sm:text-2xl text-[#101828]">
        {['lashes', 'makeup', 'hair', 'nails', 'spa'].map((category) => (
          <button
            key={category}
            className={`px-1 py-1 sm:px-4 sm:py-2 rounded-xl transition-colors duration-300 ${
              activeCategory === category
                ? 'bg-[#DADAFF]'
                : 'bg-[#F2F4f7] text-[#98A2b3]'
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
              className="w-full object-contain rounded-lg"
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
