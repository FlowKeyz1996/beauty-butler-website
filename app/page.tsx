"use client";
import BeautyCategories from "@/components/molecules/BeautyCategories";
import Marquee from "@/components/molecules/Marquee";
import BenefitSection from "@/components/organisms/BenefitSection";
import CategoriesSection from "@/components/organisms/CategoriesSection";
import FeaturesSection from "@/components/organisms/FeaturesSection";
import Footer from "@/components/organisms/Footer";
import FrequentlyAskedQuestions from "@/components/organisms/FrequentlyAskedQuestions";
import HeroSection from "@/components/organisms/HeroSection";
import HowItWorks from "@/components/organisms/HowItWorks";
import MarketplaceCard from "@/components/organisms/MarketPlace";
import Navbar from "@/components/organisms/Navbar";
import Image from "next/image";

const faqs = [
  { question: 'How can Beauty Butler help my salon or spa?', answer: 'Beauty Butler is your beauty bestie in an app...' },
  { question: 'What services does Beauty Butler offer?', answer: 'From hair, makeup, and facials...' },
  { question: 'What services does Beauty Butler offer?', answer: 'From hair, makeup, and facials...' },
  { question: 'What services does Beauty Butler offer?', answer: 'From hair, makeup, and facials...' },
  { question: 'What services does Beauty Butler offer?', answer: 'From hair, makeup, and facials...' },
  { question: 'What services does Beauty Butler offer?', answer: 'From hair, makeup, and facials...' },
  // Add more FAQs as needed
];

export default function Home() {
  return (
    <div className="w-full overflow-x-hidden">
      <Navbar/>
      <HeroSection/>
      <BenefitSection/>
      <FeaturesSection/>
      <CategoriesSection/>
      <HowItWorks/>
      <MarketplaceCard
        imageUrl="/marketplaceimg.svg"
        title="Acquiring new clients has never been so simple!"
        description="Attract a flood of new customers with Beauty Butler. 
        Your business will be effortlessly discoverable by your ideal clientele with our marketplace app and our clever algorithm.
     "
        buttonText="Book a Demo"
      />
       <FrequentlyAskedQuestions faqs={faqs} />
     
      <Footer/>
  
    </div>
  );
}
