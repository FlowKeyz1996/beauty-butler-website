import React from 'react';

interface TagHeaderProps {
  text: string;
  position?: 'left' | 'center' | 'right';
  paddingX?: string; // For horizontal padding (px-5)
  paddingY?: string; // For vertical padding (py-1)
  maxWidth?: string; // Optional prop to control max width
}

const TagHeader: React.FC<TagHeaderProps> = ({
  text,
  position = 'center',
  paddingX = 'px-4', // Default padding, customizable
  paddingY = 'py-1',
  maxWidth = 'max-w-[300px]', // Default max width, customizable
}) => {
  let alignmentClass = 'mx-auto'; // Default is center

  if (position === 'left') {
    alignmentClass = 'ml-0';
  } else if (position === 'right') {
    alignmentClass = 'mr-0 ml-auto';
  }

  return (
    <div className={`bg-[#FFE8FA] text-center border border-[#FFC8F2] rounded-full items-center flex justify-center ${paddingX} ${paddingY} w-full ${maxWidth} ${alignmentClass}`}>
      <p className="font-euclidlight font-semibold text-[#475467] truncate">{text}</p>
    </div>
  );
};

export default TagHeader;
