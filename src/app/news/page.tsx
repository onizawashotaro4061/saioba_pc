import Link from "next/link";
import { newsData } from "@/data/newsData";

export const metadata = {
  title: "NEWS | 劇団さいおうば公式サイト",
  description: "劇団さいおうばのニュース一覧",
};

export default function News() {
  // 日付の新しい順に並び替え
  const sortedNews = [...newsData].sort((a, b) => {
    const dateA = new Date(a.date.replace(/\//g, "-"));
    const dateB = new Date(b.date.replace(/\//g, "-"));
    return dateB.getTime() - dateA.getTime();
  });

  return (
    <div className="container mx-auto px-4 sm:px-6 py-6 sm:py-8">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-6 sm:mb-8 text-white font-heading-en">NEWS</h1>
      <div className="h-4 sm:h-6"></div>
      <hr className="mb-6 sm:mb-8 border-white" />
      <div className="max-w-4xl mx-auto space-y-4 sm:space-y-6 md:space-y-8">
        {sortedNews.map((item) => (
          <div key={item.id} className="bg-white p-4 sm:p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <p className="text-xs sm:text-sm md:text-base text-gray-600 mb-2 font-body-en">{item.date}</p>
            <Link
              href={`/news/${item.id}`}
              className="text-sm sm:text-base md:text-lg lg:text-xl text-black hover:text-primary whitespace-pre-line block transition-colors font-body-ja"
            >
              {item.title}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
