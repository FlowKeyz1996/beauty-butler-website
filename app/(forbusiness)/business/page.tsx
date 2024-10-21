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
  { question: 'How can Beauty Butler help my salon or spa?', answer: 'We’re your new secret weapon! Our salon management software helps you boss it up—schedule clients, process payments, and automate marketing like a pro. Focus on doing what you love while we handle the rest! Join 100s of beauty professionals managing their businesses 8x more efficiently.' },
  { question: 'How do I sign up to partner with Beauty Butler?', answer: 'It’s a breeze! Just download the app, create an account, and hop over to your profile page. From there, you can add your services, add your picture portfolio, list your amazing team of butlers, and set your business details, like business tags (lashes, spa, hair, etc.) and opening hours. Welcome to the Beauty Butler family—get ready for more bookings and effortless management!' },
  { question: 'How will Beauty Butler help increase my client base?', answer: 'By showcasing your services to a larger audience on our app, we make it super easy for new clients to discover and book with you. Plus, our marketing tools do the heavy lifting, keeping your clients coming back for more!' },
  { question: 'Does Beauty Butler provide marketing support?', answer: 'Absolutely! We offer a range of marketing tools to help your business stand out and attract new clients. With beautifully designed email and text campaigns, you can boost bookings and increase revenue while keeping your brand consistent. Plus, our targeted campaigns automatically ensure you reach the right customers to encourage repeat visits. We’re here to support you!' },
  { question: 'Can I integrate my existing booking system with Beauty Butler?', answer: 'You can’t automatically connect your current booking system to your Beauty Butler profile, but no worries! We’re here to help you create a new calendar and booking system, and we’ll guide you through every step to make it super easy!' },
  { question: 'Can I import data from another software?', answer: 'Yes, you can! Our team is here to help you make the switch. Just send us an email at hello@mybeautybutler.com, and we’ll have someone assist you in migrating all your data to your Beauty Butler account.' },
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