import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import Footer from "@/components/footer";
import Statistics from "@/components/statistics";
import ShortenBox from "@/components/shortenBox";

export default function Home() {
  return (
    <div>
      <section className="min-h-screen bg-white">
        <Navbar />
        <Hero />
      </section>
      <section className="relative flex flex-col items-center justify-center bg-gray">
        <ShortenBox />
        <Statistics />
      </section>
      <section className="min-h-[75vh]">
        <Footer />
      </section>
    </div>
  );
}
