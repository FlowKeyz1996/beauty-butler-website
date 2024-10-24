"use client";
import React from 'react';
import SmallHero from '@/components/molecules/SmallHero';
import NavbarOne from '@/components/organisms/NavbarOne';
import TermsandConditions from '@/components/atoms/TermsandConditions';
import FooterOne from '@/components/organisms/FooterOne';

function page() {
  return (
    <div>
      <NavbarOne/>
        <SmallHero headerText="Terms and Conditions" descriptionText="Our terms and conditions at beauty butler"/>
        <TermsandConditions/>
        <FooterOne/>
    </div>
  )
}

export default page