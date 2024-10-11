"use client";
import BeautyButlerOffer from '@/components/molecules/BeautyButlerOffer';
import SmallHero from '@/components/molecules/SmallHero';
import Footer from '@/components/organisms/Footer';
import MainFeaturesCards from '@/components/organisms/MainFeaturesCards';
import NavbarOne from '@/components/organisms/NavbarOne';
import React from 'react'

function page() {
  return (
    <div className="w-full overflow-x-hidden">
        <NavbarOne/>
        <SmallHero headerText="Manage and Run Your Salon With One Seamless System" 
        descriptionText="Think bigger. Build your dream business with an easy-to-use platform purpose-built for you — and a support team that responds in minutes, not days."/>
        <MainFeaturesCards/>
        <BeautyButlerOffer/>
        <Footer/>
    </div>
  )
}

export default page