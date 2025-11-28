import { Article } from "@/types";
import Image from "next/image";
import Link from "next/link";

type ArticleCardProps = Article & {
  variant?: "popular" | "default";
};

export default function ArticleCard({
  variant = "default",
  ...article
}: ArticleCardProps) {
  const showMeta = variant === "popular";
  const { title, excerpt, image, date, readTime } = article;
  return (
    <Link
      href={`/article/${article.slug}`}
      className={`flex flex-col gap-[38px] p-[15px] rounded-2xl bg-background transition-all border border-section-alt hover:shadow-xl hover:border-[1.75px] hover:border-green-secondary`}
    >
      <div className="w-full h-[200px] rounded-lg overflow-hidden">
        <Image
          src={image}
          width={307}
          height={200}
          alt={title}
          quality={60}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="flex flex-col gap-6">
        <h3 className="text-display-h3 font-semibold text-bodyblack">
          {title}
        </h3>
        <p className="text-body text-bodyblack line-clamp-3">{excerpt}</p>
        {showMeta && <DateReadtime date={date} readTime={readTime} />}
      </div>
    </Link>
  );
}

function DateReadtime({ date, readTime }: Pick<Article, "date" | "readTime">) {
  return (
    <div className="flex items-center gap-3 text-caption text-alt">
      <div className="flex items-center gap-1.5">
        <img src="/icons/article/calendar.svg" alt="Calendar" />
        <span>{date}</span>
      </div>
      <div className="flex items-center gap-1.5">
        <img src="/icons/article/clock.svg" alt="Clock" />
        <span>{readTime}</span>
      </div>
    </div>
  );
}
