import { Header, Footer } from "@/components";
import { Hero, MissionVision, OurStory, Team } from "./sections";

export default function About() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <OurStory />
      <MissionVision />
      <Team />
      <Footer />
    </div>
  );
}
