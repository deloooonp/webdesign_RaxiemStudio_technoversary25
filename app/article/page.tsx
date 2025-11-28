import { Header, Footer } from "@/components";
import { Hero, PopularArticles, AllArticles } from "./sections";

export default function Article() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <PopularArticles />
      <AllArticles />
      <Footer />
    </div>
  );
}
