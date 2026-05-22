import Header from "@/components/Header";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export default function PricingPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <div className="pt-20">
        <Pricing />
        <FAQ />
      </div>
      <Footer />
    </main>
  );
}
