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
    <div className={`bg-[#FFE8FA] text-center border border-[#FFE8F] rounded-full items-center flex justify-center py-2 max-w-[90%] sm:max-w-[80%] lg:max-w-[20%] ${alignmentClass}`}>
      <p className="font-euclidlight font-semibold text-[#475467]">{text}</p>
    </div>
  );
};

export default TagHeader;
