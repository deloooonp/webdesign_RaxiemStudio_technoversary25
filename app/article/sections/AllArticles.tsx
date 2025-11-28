import { allArticles } from "@/constants";
import ArticleCard from "../components/ArticleCard";
import BackToArticles from "../components/BackToArticles";

export default function AllArticles() {
  return (
    <section className="w-full py-12 px-4">
      <div className="max-w-[1061px] mx-auto">
        <h2 className="text-display-h2 font-semibold text-bodyblack mb-[51.78px]">
          Jelajahi Artikel
        </h2>

        <div className="flex flex-col gap-[52px]">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {allArticles
              .filter((article) => !article.popular)
              .map((article) => (
                <ArticleCard key={article.id} {...article} />
              ))}
          </div>

          <BackToArticles />
        </div>
      </div>
    </section>
  );
}
