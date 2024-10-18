import React from 'react';

interface TagHeaderProps {
  text: string;
  position?: 'left' | 'center' | 'right';
  paddingX?: string; // For horizontal padding (px-5)
  paddingY?: string; // For vertical padding (py-1)
}

const TagHeader: React.FC<TagHeaderProps> = ({
  text,
  position = 'center',
  paddingX = 'px-5',
  paddingY = 'py-1',
}) => {
  let alignmentClass = 'mx-auto'; // Default is center

  if (position === 'left') {
    alignmentClass = 'ml-0';
  } else if (position === 'right') {
    alignmentClass = 'mr-0 ml-auto';
  }

  return (
    <div className={`bg-[#FFE8FA] text-center border border-[#FFC8F2] rounded-full items-center flex justify-center  ${paddingX} ${paddingY} lg:max-w-[35%] ${alignmentClass}`}>
      <p className="font-euclidlight font-semibold text-[#475467]">{text}</p>
    </div>
  );
};

export default TagHeader;
