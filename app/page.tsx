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
        Give your clients easy access to your services, price list and calendar by creating a mini web page to take bookings. 
        Clients can book via your social media or website. "
        buttonText="Book a Demo"
      />
      <FrequentlyAskedQuestions/>
     
      <Footer/>
  
    </div>
  );
}
