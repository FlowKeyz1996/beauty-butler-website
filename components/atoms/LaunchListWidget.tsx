// components/LaunchListWidget.tsx
"use client";
import React, { useState } from 'react';

const LaunchListWidget: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  const loadWidgetScript = () => {
    if (!isLoaded) {
      const script = document.createElement('script');
      script.src = "https://getlaunchlist.com/js/widget.js";
      script.async = true;
      script.onload = () => {
        console.log('Launch List widget script loaded');
        setIsLoaded(true);
      };
      document.body.appendChild(script);
    }
  };

  return (
    <div className="flex justify-center items-center">
      {!isLoaded && (
        <button
          onClick={loadWidgetScript}
          className="bg-[#8878D8] text-white py-2 px-4 rounded"
        >
          Click to Join Waitlist Now
        </button>
      )}

      {/* Widget Code */}
      <div className="launchlist-widget" data-key-id="52IebT" data-height="180px"></div>
    </div>
  );
};

export default LaunchListWidget;
