"use client";
import SmallHero from '@/components/molecules/SmallHero'
import NavbarOne from '@/components/organisms/NavbarOne'
import React from 'react'

function page() {
  return (
    <div>
      <NavbarOne/>
        <SmallHero headerText="privacy" descriptionText='privacy description'/>
    </div>
  )
}

export default page