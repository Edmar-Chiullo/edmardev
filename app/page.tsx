import HomeContent from "@/app/components/Home";
import About from "@/app/components/About";
import Services from "@/app/components/Services";
import Contact from "@/app/components/Contact";
import Footer from "@/app/components/Footer";
import Portfólio from "./components/Project";

export default async function Home() {
  return (
    <main className="w-full bg-gray-50 text-gray-900">
      <HomeContent />
      <About />
      <Services />
      <Portfólio />
      <Contact />
      <Footer />
    </main>
  );
}
