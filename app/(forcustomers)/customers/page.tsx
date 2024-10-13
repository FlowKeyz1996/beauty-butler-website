"use client";
import BeautyBuzzyCards from "@/components/molecules/BeautyBuzzCards";
import BeautyCategories from "@/components/molecules/BeautyCategories";
import GettingStarted from "@/components/molecules/GettingStarted";
import WhyYouWillLoveBeautyButler from "@/components/molecules/WhyYouWillLoveBeautyButler";
import BusinessHeroSection from "@/components/organisms/BusinessHeroSection";
import Footer from "@/components/organisms/Footer";
import FooterOne from "@/components/organisms/FooterOne";
import FrequentlyAskedQuestions from "@/components/organisms/FrequentlyAskedQuestions";
import Navbar from "@/components/organisms/Navbar";
import NavbarOne from "@/components/organisms/NavbarOne";
import Image from "next/image";

export default function Home() {
  return (
    <div className="w-full overflow-x-hidden">
  <NavbarOne />
  <BusinessHeroSection />
  <WhyYouWillLoveBeautyButler />
  <BeautyCategories />
  <GettingStarted />
  <BeautyBuzzyCards />
  <FrequentlyAskedQuestions />
  <FooterOne/>
</div>

  );
}
