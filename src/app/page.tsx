import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import Reviews from "@/components/Reviews";
import Process from "@/components/Process";
import FAQ from "@/components/FAQ";
import QuoteForm from "@/components/QuoteForm";
import Marquee from "@/components/Marquee";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />

      <QuoteForm />
      <Reviews />
      <Projects />
      <Services />
      <Process />
      <FAQ />
      <Marquee />
      <Footer />
    </>
  );
}
