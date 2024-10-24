// components/QualityGuaranteed.tsx
import Image from 'next/image';
import React from 'react';
import TagHeader from '../atoms/TagHeader';
import Link from 'next/link';

const QualityGuaranteed: React.FC = () => {
  return (
    <div className="my-9">
      <div className="flex justify-center items-center ">
        <div className="flex flex-col md:flex-row justify-between items-center max-w-6xl w-full">
          {/* Left Side */}
          <div className="flex-1 md:mr-8 mb-8 md:mb-0 text-center md:text-left">
            <div className="">
            <TagHeader text="👌🏾 Quality guaranteed" position='left' paddingX='' paddingY='py-1'maxWidth=' sm:max-w-[240px] ' />
            </div>
            <h2 className="text-3xl md:text-5xl font-apfelmittel mb-4 max-w-xl mx-auto md:mx-0 text-[#101828] leading-[2.5rem] md:leading-[3rem]">
              A full solution to manage and grow your business
            </h2>
            <p className="text-md sm:text-xl md:text-xl my-6 text-[#475467] font-euclidlight max-w-xl mx-auto md:mx-0">
            Packed with all the tools you need to boost sales, manage your calendar and retain clients so you can focus on what you do best.
              mind and guaranteed satisfaction.
            </p>
            <Link href="https://airtable.com/appbyIQgO429LydxX/pagpJUqsZCrQzQcYg/form">
            <button className="bg-[#8877D8] text-white py-4 px-14 sm:px-10 md:px-16 rounded-xl font-euclidmedium text-lg md:text-2xl">
              Book A Demo
            </button>
            </Link>
          </div>

          {/* Right Side */}
          <div className="flex-1 flex justify-center md:justify-end">
            <Image
              src="/qualityguranteeimg.png" // Replace with your image path
              alt="Quality Guaranteed"
              width={700}
              height={650}
              className="rounded-lg mb-20 sm:mb-0"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default QualityGuaranteed;
