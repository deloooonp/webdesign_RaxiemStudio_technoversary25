import { allArticles } from "@/constants/";
import ArticleCard from "../components/ArticleCard";

export default function PopularArticles() {
  return (
    <section className="w-full py-12 px-4">
      <div className="max-w-[1061px] mx-auto">
        <h2 className="text-display-h2 font-semibold text-bodyblack mb-[51.78px]">
          Artikel Terpopular
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {allArticles
            .filter((article) => article.popular)
            .map((article) => (
              <ArticleCard key={article.id} {...article} variant="popular" />
            ))}
        </div>
      </div>
    </section>
  );
}
