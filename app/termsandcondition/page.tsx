"use client";
import React from 'react';
import SmallHero from '@/components/molecules/SmallHero';
import NavbarOne from '@/components/organisms/NavbarOne';
import TermsandConditions from '@/components/atoms/TermsandConditions';

function page() {
  return (
    <div>
      <NavbarOne/>
        <SmallHero headerText="terms and conditions" descriptionText="Here is our terms and conditions at beauty butler"/>
        <TermsandConditions/>
    </div>
  )
}

export default page