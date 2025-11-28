import { Header, Footer } from "@/components";
import { allArticles } from "@/constants";
import { notFound } from "next/navigation";
import { Article } from "@/types";
import ArticleBody from "./sections/ArticleBody";
import RelatedArticles from "./sections/RelatedArticles";

export function generateStaticParams() {
  return allArticles.map((article) => ({
    slug: article.slug,
  }));
}

export default async function page({
  params,
}: {
  params: Promise<Pick<Article, "slug">>;
}) {
  const { slug } = await params;
  const article = allArticles.find((a) => a.slug === slug);

  if (!article) return notFound();

  return (
    <div className="min-h-screen">
      <Header />
      <div className="w-full">
        <ArticleBody {...article} />
        <RelatedArticles slug={slug} />
      </div>
      <Footer />
    </div>
  );
}
