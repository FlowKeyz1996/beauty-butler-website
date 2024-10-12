import React from 'react';

interface TagHeaderProps {
  text: string;
  position?: 'left' | 'center' | 'right';
}

const TagHeader: React.FC<TagHeaderProps> = ({ text, position = 'center' }) => {
  let alignmentClass = 'mx-auto'; // Default is center

  if (position === 'left') {
    alignmentClass = 'ml-0';
  } else if (position === 'right') {
    alignmentClass = 'mr-0 ml-auto';
  }

  return (
    <div className={`bg-[#FFE8FA] text-center border border-[#FFC8F2] rounded-full items-center flex justify-center py-1 my-2 px-5 lg:max-w-[30%] ${alignmentClass}`}>
      <p className="font-euclidlight font-semibold text-[#475467]">{text}</p>
    </div>
  );
};

export default TagHeader;
