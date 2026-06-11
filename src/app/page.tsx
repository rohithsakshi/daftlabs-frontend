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
    <main className="relative min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)]">
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
