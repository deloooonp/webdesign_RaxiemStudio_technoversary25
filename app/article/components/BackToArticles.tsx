import Link from "next/link";

export default function BackToArticles() {
  return (
    <div className="flex justify-center mb-25">
      <Link
        href="/article"
        className="flex items-center gap-2.5 py-2.5 border-b-[1.75px] border-green-secondary text-body-medium bg-green-gradient bg-clip-text text-transparent"
      >
        Lihat Artikel Lainnya
      </Link>
    </div>
  );
}
