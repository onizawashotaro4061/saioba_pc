import { notFound } from "next/navigation";
import Link from "next/link";
import { newsData } from "@/data/newsData";

export async function generateStaticParams() {
  return newsData.map((news) => ({
    id: news.id.toString(),
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const news = newsData.find((n) => n.id === parseInt(id));

  if (!news) {
    return {
      title: "ニュースが見つかりません | 劇団さいおうば公式サイト",
    };
  }

  return {
    title: `${news.title} | 劇団さいおうば公式サイト`,
    description: news.content.substring(0, 100),
  };
}

export default async function NewsPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const news = newsData.find((n) => n.id === parseInt(id));

  if (!news) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 sm:px-6 py-6 sm:py-8">
      <div className="max-w-4xl mx-auto">
        <div className="mb-4 sm:mb-6">
          <p className="text-sm sm:text-base text-white mb-2 font-body-en">{news.date}</p>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8 text-white font-subheading-ja">{news.title}</h1>
        </div>

        <div className="bg-white p-6 sm:p-8 rounded-lg mb-6 sm:mb-8 shadow-lg">
          <div className="prose max-w-none">
            <p className="text-sm sm:text-base md:text-lg leading-relaxed whitespace-pre-line text-gray-700 font-body-ja">
              {news.content}
            </p>
          </div>
        </div>

        <div className="text-center">
          <Link
            href="/news"
            className="inline-block bg-primary text-white px-6 sm:px-8 py-2 sm:py-3 rounded-md hover:bg-opacity-80 transition text-sm sm:text-base md:text-lg font-body-en"
          >
            NEWS 一覧に戻る
          </Link>
        </div>
      </div>
    </div>
  );
}
