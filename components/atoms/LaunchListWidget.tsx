// components/LaunchListWidget.tsx
"use client";
import React, { useEffect } from 'react';
import Script from 'next/script';

const LaunchListWidget: React.FC = () => {
  useEffect(() => {
    console.log('Launch List widget script loaded');
  }, []);

  return (
    <div>
      {/* Load Widget Script */}
      <Script 
        src="https://getlaunchlist.com/js/widget.js" 
        strategy="afterInteractive" 
        onLoad={() => {
          console.log('Launch List widget script loaded');
        }}
      />
      
      {/* Widget Code */}
      <div className="launchlist-widget" data-key-id="52IebT" data-height="180px"></div>
    </div>
  );
};

export default LaunchListWidget;
