"use client";
import BeautyBuzzyCards from "@/components/molecules/BeautyBuzzCards";
import BeautyCategories from "@/components/molecules/BeautyCategories";
import GettingStarted from "@/components/molecules/GettingStarted";
import RatingsCard from "@/components/molecules/RatingsCard";
import WhyYouWillLoveBeautyButler from "@/components/molecules/WhyYouWillLoveBeautyButler";
import BeautyButlerOffer from "@/components/organisms/BeautyButlerOffer";
import BusinessHeroSection from "@/components/organisms/BusinessHeroSection";
import Footer from "@/components/organisms/Footer";
import FooterOne from "@/components/organisms/FooterOne";
import FrequentlyAskedQuestions from "@/components/organisms/FrequentlyAskedQuestions";
import Navbar from "@/components/organisms/Navbar";
import NavbarOne from "@/components/organisms/NavbarOne";
import Image from "next/image";

const faqs = [
  { question: 'What is Beauty Butler?', answer: 'Beauty Butler is your beauty bestie in an app...' },
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
  <NavbarOne />
  <BusinessHeroSection />
  <WhyYouWillLoveBeautyButler />
  <BeautyCategories />
  <GettingStarted />
  {/* <BeautyBuzzyCards /> */}
  <RatingsCard/>
  {/* <FrequentlyAskedQuestions /> */}
  <FrequentlyAskedQuestions faqs={faqs} />
  <FooterOne/>
</div>

  );
}
