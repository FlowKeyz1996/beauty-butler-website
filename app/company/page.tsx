"use client";
import ChiefButler from '@/components/molecules/ChiefButler';
import CoreValues from '@/components/molecules/CoreValues'
import MeetTheButlers from '@/components/molecules/MeetTheButlers';
import SmallHero from '@/components/molecules/SmallHero'
import Footer from '@/components/organisms/Footer';
import NavbarOne from '@/components/organisms/NavbarOne'
import React from 'react'

function page() {
  return (
    <div>
        <NavbarOne/>
        <SmallHero headerText="Crafting Your Glow" 
        descriptionText="From on-demand bookings to personalized beauty services, 
        we’re dedicated to making your beauty routine effortless and enjoyable."/>
        <ChiefButler/>
        <CoreValues/>
        <MeetTheButlers/>
        <Footer/>
        
    </div>
  )
}

export default page