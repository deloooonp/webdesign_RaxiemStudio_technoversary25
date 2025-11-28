import { Article } from "@/types";
import Image from "next/image";
import ReactMarkdown from "react-markdown";

export default function ArticleBody(article: Article) {
  return (
    <div className="w-full flex justify-center items-center py-[50px] px-4">
      <div className="w-full max-w-6xl flex flex-col justify-center items-center gap-[52px]">
        <Image
          src={article.image}
          alt={article.title}
          height={660}
          width={1152}
          quality={60}
          className="w-full h-auto lg:max-h-[660px] max-h-[330px] object-cover rounded-2xl"
        />
        <div className="flex flex-col items-start gap-[52px] w-full">
          <div className="w-full max-w-[956px] flex flex-col items-start gap-8">
            <h1 className="w-full text-display-h1 font-bold">
              {article.title}
            </h1>

            <div className="flex items-center gap-3 flex-wrap">
              <div className="flex items-center gap-1.5">
                <img src="/icons/article/calendar.svg" alt="Calendar" />
                <span className="text-caption text-alt">{article.date}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <img src="/icons/article/clock.svg" alt="Clock" />
                <span className="text-caption text-alt">
                  {article.readTime}
                </span>
              </div>
            </div>
          </div>

          <div className="w-full text-body whitespace-pre-line">
            <ReactMarkdown>{article.body}</ReactMarkdown>
          </div>
        </div>
      </div>
    </div>
  );
}
