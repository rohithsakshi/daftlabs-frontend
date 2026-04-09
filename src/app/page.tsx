import Preloader from "@/components/Preloader";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Delivery from "@/components/Delivery";
import Products from "@/components/Products";
import Contact from "@/components/Contact";
import Chatbot from "@/components/Chatbot";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#f5f5f7] text-[#1d1d1f]">
      <Preloader />
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Delivery />
      <Products />
      <Contact />
      <Footer />
      <Chatbot />
    </main>
  );
}
