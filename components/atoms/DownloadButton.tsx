import React from "react";
import Image from "next/image";

interface DownloadButtonProps {
  backgroundColor: string;
  textColor: string;
  images: {
    src: string;
    alt: string;
    width: number;
    height: number;
    link: string;
  }[];
  text: string;
}

const DownloadButton: React.FC<DownloadButtonProps> = ({
  backgroundColor,
  textColor,
  images,
  text,
}) => {
  return (
    <div className="flex justify-center lg:justify-start mt-6">
      <button
        className={`flex items-center ${backgroundColor} ${textColor} text-sm lg:text-lg font-euclidmedium py-3 lg:py-4 px-8 lg:px-10 rounded-xl`}
      >
        {images.map((image, index) => (
          <a
            href={image.link}
            target="_blank"
            rel="noopener noreferrer"
            key={index}
            className={`flex items-center ${index > 0 ? "ml-4 lg:ml-6" : ""}`}
          >
            <Image
              src={image.src}
              alt={image.alt}
              width={image.width}
              height={image.height}
              className="w-6 lg:w-10 h-auto"
            />
          </a>
        ))}
        <span className="ml-2 lg:ml-4">{text}</span>
      </button>
    </div>
  );
};

export default DownloadButton;
