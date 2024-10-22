"use client";
import BeautyBuzzyCards from "@/components/molecules/BeautyBuzzCards";
import BeautyCategories from "@/components/molecules/BeautyCategories";
import GettingStarted from "@/components/molecules/GettingStarted";
import RatingsCard from "@/components/molecules/RatingsCard";
import WhyYouWillLoveBeautyButler from "@/components/molecules/WhyYouWillLoveBeautyButler";
import BusinessHeroSection from "@/components/organisms/BusinessHeroSection";
import Footer from "@/components/organisms/Footer";
import FooterOne from "@/components/organisms/FooterOne";
import FrequentlyAskedQuestions from "@/components/organisms/FrequentlyAskedQuestions";
import Navbar from "@/components/organisms/Navbar";
import NavbarOne from "@/components/organisms/NavbarOne";
import Image from "next/image";

const faqs = [
  { question: 'What is Beauty Butler?', answer: 'Beauty Butler is your beauty bestie in an app! Think of us as your go-to for all things beauty and wellness, delivering top-tier treatments right to your doorstep — so you can chill while we handle the rest.' },
  { question: 'What services does Beauty Butler offer?', answer: 'From hair, makeup, and facials to massages, mani-pedis, and more — we’ve got all your self-care covered. Our professionals are certified and ready to provide top-quality services whenever you need them!' },
  { question: 'Is Beauty Butler available in my area?', answer: 'Right now, we are available in Lagos, Nigeria! But don’t worry, we’re expanding to new cities soon. Subscribe to our newsletter to stay tuned for updates on our expansion plans.' },
  { question: 'How do I use Beauty Butler?', answer: 'Just download our app, Create an account, scroll through our selection of top-tier beauty services, and book your fave service. Then, sit back and let the pampering come to you!' },
  { question: 'How do I pay for services on Beauty Butler?', answer: 'Once you’ve booked a service, the checkout page will show you a few simple payment options! You can pay using your in-app wallet, online via Paystack, or by card—whatever works best for you. Our payment structure is safe, simple and secure!' },
  { question: 'Is there a cancellation policy?', answer: 'Life happens, we feel you! If you need to cancel, just do it 24 hours in advance, and you’re all good. If you cancel within 24 hours, we’ll need to charge 80% of the service price. For no-shows, it’s the full price—so try not to miss out!' },
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
