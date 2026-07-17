import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/HeroSection";
import { FeaturedPackages } from "@/components/FeaturedPackage";
import { WhyUs } from "@/components/WhyUs";
import { OfferBanner } from "@/components/OfferBanner";
import { Testimonials } from "@/components/Testimonials";
import { Contact } from "@/components/Contact";
import { PopularDestinations } from "@/components/PopularDestination";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <FeaturedPackages />
      <WhyUs />
      <PopularDestinations />
      <OfferBanner />
      <Testimonials />
      <Contact />
      <Footer />
      {/* Next sections (Destinations, Offers, Reviews, Contact) go here */}
    </main>
  );
}