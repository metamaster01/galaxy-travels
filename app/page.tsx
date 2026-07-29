// import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/HeroSection";
import {  FeaturedTrips } from "@/components/FeaturedPackage";
import { WhyUs } from "@/components/WhyUs";
import { OfferBanner } from "@/components/OfferBanner";
import { Testimonials } from "@/components/Testimonials";
import { Contact } from "@/components/Contact";
import {  PopularTrips } from "@/components/PopularDestination";
// import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main>
      
      <Hero />
      <FeaturedTrips />
      <WhyUs />
      <PopularTrips />
      <OfferBanner />
      <Testimonials />
      <Contact />
      
      {/* Next sections (Destinations, Offers, Reviews, Contact) go here */}
    </main>
  );
}