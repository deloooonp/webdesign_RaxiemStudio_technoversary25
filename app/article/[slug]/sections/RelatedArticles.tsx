import { allArticles } from "@/constants";
import { Article } from "@/types";
import ArticleCard from "../../components/ArticleCard";
import BackToArticles from "../../components/BackToArticles";

export default function RelatedArticles({ slug }: Pick<Article, "slug">) {
  return (
    <div className="w-full flex justify-center items-center py-[50px] px-4 mb-25">
      <div className="w-full max-w-[1154px] flex flex-col justify-center items-center gap-[52px]">
        <div className="w-full max-w-[1060px] flex items-center gap-2.5">
          <h2 className="text-display-h2 font-semibold">Artikel Terkait</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {allArticles
            .filter((a) => a.slug !== slug)
            .slice(0, 3)
            .map((article) => (
              <ArticleCard key={article.id} {...article} />
            ))}
        </div>
        <BackToArticles />
      </div>
    </div>
  );
}
