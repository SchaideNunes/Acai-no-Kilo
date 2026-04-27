import SmoothScrollProvider from "@/components/SmoothScrollProvider";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ScrollCanvas from "@/components/ScrollCanvas";
import Numbers from "@/components/Numbers";
import Formats from "@/components/Formats";
import Products from "@/components/Products";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import BackgroundShapes from "@/components/BackgroundShapes";

export default function Home() {
  return (
    <SmoothScrollProvider>
      <Header />
      <main className="w-full relative bg-background">
        <BackgroundShapes />
        <Hero />
        <Numbers />
        <Formats />
        {/* Renderiza a animação de Canvas antes dos produtos para um grande diferencial na descida */}
        <ScrollCanvas />
        <Products />
        <Contact />
      </main>
      <Footer />
    </SmoothScrollProvider>
  );
}
