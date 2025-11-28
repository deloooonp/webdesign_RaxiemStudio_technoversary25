import { Header, Footer } from "@/components";
import ContactInfo from "./sections/ContactInfo";
import ContactForm from "./sections/ContactForm";

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <section className="w-full py-12 px-4 mb-[100px]">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-[77px] items-center justify-center">
          <ContactInfo />
          <ContactForm />
        </div>
      </section>
      <Footer />
    </div>
  );
}
