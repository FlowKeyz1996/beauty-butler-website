import React from "react";
import Image from "next/image";

// Extend the Window interface to include MSStream and opera
declare global {
  interface Window {
    MSStream?: unknown;
    opera?: string; // Specify the type explicitly
  }
}

interface ImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  link?: string; // Optional for images without links
}

interface DownloadButtonProps {
  backgroundColor: string; // CSS class name for background color
  textColor: string; // CSS class name for text color
  text: string;
  images: ImageProps[];
}

const DownloadButton: React.FC<DownloadButtonProps> = ({
  backgroundColor,
  textColor,
  text,
  images,
}) => {
  const handleButtonClick = () => {
    if (typeof window === "undefined") return; // Ensure code runs only on the client-side

    const userAgent =
      navigator.userAgent || navigator.vendor || (window.opera as string) || "";

    if (/android/i.test(userAgent)) {
      // Redirect to Google Play Store
      window.location.href = "https://play.google.com/store/apps/details?id=com.beautybutler.provider";
    } else if (/iPad|iPhone|iPod|Macintosh/.test(userAgent) && !window.MSStream) {
      // Redirect to Apple App Store for iOS devices and MacBooks
      window.location.href = "https://apps.apple.com/app/beauty-butler-pro/id6608976623";
    } else if (/Windows NT|Win64/.test(userAgent)) {
      // Redirect Windows laptops to Apple App Store
      window.location.href = "https://apps.apple.com/app/beauty-butler-pro/id6608976623";
    } else {
      // Handle other platforms (optional)
      alert("Unsupported platform. Please visit the app store manually.");
    }
  };

  return (
    <div className="flex justify-center lg:justify-start mt-6">
      <button
        className={`flex items-center ${backgroundColor} ${textColor} text-sm lg:text-lg font-euclidmedium py-3 lg:py-4 px-8 lg:px-10 rounded-xl`}
        onClick={handleButtonClick}
      >
        <div className="flex items-center space-x-0">
          {images.map((image, index) => (
            <div key={index} className="flex items-center">
              {index === 1 && !image.link ? (
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={image.width}
                  height={image.height}
                  className="w-6 lg:w-10 h-auto"
                />
              ) : (
                <a
                  href={image.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center"
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={image.width}
                    height={image.height}
                    className="w-6 lg:w-10 h-auto"
                  />
                </a>
              )}
            </div>
          ))}
        </div>
        <span className="ml-2 lg:ml-4 text-xl font-euclidmedium">{text}</span>
      </button>
    </div>
  );
};

export default DownloadButton;
