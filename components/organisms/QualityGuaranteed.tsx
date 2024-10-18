// components/QualityGuaranteed.tsx
import Image from 'next/image';
import React from 'react';
import TagHeader from '../atoms/TagHeader';

const QualityGuaranteed: React.FC = () => {
  return (
    <div className="p-3">
      <div className="flex justify-center items-center min-h-screen">
        <div className="flex justify-between items-center max-w-6xl w-full">
          {/* Left Side */}
          <div className="flex-1 mr-8">
            <TagHeader text="Quality guaranteed" position='left' paddingX='px-5' paddingY='py-1'/>
            <h2 className="text-5xl font-apfelmittel mb-4 max-w-xl text-[#101828] leading-[3rem]">A full solution to manage and grow your business</h2>
            <p className="text-xl my-6 text-[#475467] font-euclidlight">
              We pride ourselves on delivering the highest quality services. Our team
              ensures every detail meets your expectations, providing you with peace of
              mind and guaranteed satisfaction.
            </p>
            <button className="bg-[#8877D8] text-white py-3 px-16 rounded-2xl font-euclidmedium text-2xl">
              Book A Demo
            </button>
          </div>

          {/* Right Side */}
          <div className="flex-1">
            <Image
              src="/qualityguaranteedimg.svg" // Replace with your image path
              alt="Quality Guaranteed"
              width={500}
              height={300}
              className="rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default QualityGuaranteed;
