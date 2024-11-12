"use client"
import React from 'react';
import Head from 'next/head';
import Script from 'next/script';
import SmallHero from '@/components/molecules/SmallHero';
import Navbar from '@/components/organisms/Navbar';
import NavbarOne from '@/components/organisms/NavbarOne';

function Page() {
  return (
    <div>
      <Head>
        <title>Launch List Widget</title>
      </Head>

      {/* Load Widget Script */}
      <Script 
        src="https://getlaunchlist.com/js/widget.js" 
        strategy="afterInteractive" 
        onLoad={() => {
          console.log('Launch List widget script loaded');
        }}
      />

      {/* Widget Code */}
     
     <NavbarOne/>
      <SmallHero headerText='Join Our Waitlist' descriptionText='Join Our Waitlist And Get Notified When We Launch'/>

      <div className="flex items-center justify-center">
  <div className="launchlist-widget w-full md:w-1/2" data-key-id="52IebT" data-height="180px"></div>
</div>

    </div>
  );
}

export default Page;
