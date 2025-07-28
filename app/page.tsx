import HomeContent from "@/app/components/Home";
import About from "@/app/components/About";
import Services from "@/app/components/Services";
import Contact from "@/app/components/Contact";
import Footer from "@/app/components/Footer";
import Portfólio from "./components/Project";

export default async function Home(props: {
  searchParams?: Promise<{
      query?: string;
      page?: string;
  }>;
  }) {
  
  const searchParams = await props.searchParams;
  const query = searchParams?.query || '';
  
  console.log(query)
  return (
    <main className="w-full h-screen bg-gray-50 text-gray-900">
      <HomeContent />
      <About />
      <Portfólio />
      <Services />
      <Contact />
      <Footer />
    </main>
  );
}
