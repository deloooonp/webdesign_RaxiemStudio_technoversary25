import { Header, Footer, CTASection } from "@/components";
import { Hero, HowItWorks, ImpactSection, Articles } from "@/app/sections";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />

      <Hero />

      <HowItWorks />

      <ImpactSection />

      <Articles />

      <CTASection
        label="Setiap botol plastik yang kamu daur ulang, bumi semakin bernafas."
        text="Gabung sekarang dan jadi bagian dari gerakan Trash to Tech Movement."
        cta="Gabung Sekarang"
      />

      <Footer />
    </div>
  );
}
