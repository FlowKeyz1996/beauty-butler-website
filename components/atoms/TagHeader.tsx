import React from 'react';

interface TagHeaderProps {
  text: string;
  position?: 'left' | 'center' | 'right';
  mobilePosition?: 'left' | 'center' | 'right'; // New prop to control mobile position
  paddingX?: string; // For horizontal padding (px-5)
  paddingY?: string; // For vertical padding (py-1)
  maxWidth?: string; // Optional prop to control max width
}

const TagHeader: React.FC<TagHeaderProps> = ({
  text,
  position = 'center',
  mobilePosition = 'left', // Default mobile position is center
  paddingX = 'px-4 md:px-5', // Adjust padding for mobile (default is px-4 on mobile and px-5 on larger screens)
  paddingY = 'py-1 md:py-2', // Adjust padding for mobile (default is py-1 on mobile and py-2 on larger screens)
  maxWidth = 'max-w-[300px] md:max-w-[400px]', // Default max width, customizable
}) => {
  // Default alignment classes for desktop
  let alignmentClass = 'mx-auto';

  if (position === 'left') {
    alignmentClass = 'ml-0';
  } else if (position === 'right') {
    alignmentClass = 'mr-0 ml-auto';
  }

  // Alignment classes for mobile
  let mobileAlignmentClass = 'mx-auto';
  if (mobilePosition === 'left') {
    mobileAlignmentClass = 'ml-0';
  } else if (mobilePosition === 'right') {
    mobileAlignmentClass = 'mr-0 ml-auto';
  }

  return (
    <div
      className={`bg-[#FFE8FA] text-center border border-[#FFC8F2] rounded-full items-center flex justify-center ${paddingX} ${paddingY} w-full ${maxWidth} ${mobileAlignmentClass} md:${alignmentClass}`}
    >
      <p className="font-euclidlight font-semibold text-[#475467] truncate">{text}</p>
    </div>
  );
};

export default TagHeader;
