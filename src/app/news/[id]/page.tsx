import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
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

// テキスト内のリンクを自動検出してハイパーリンク化する関数
// マークダウン形式 [テキスト](URL) を使用
function renderContentWithLinks(content: string) {
  // [テキスト](URL)のパターンを検出する正規表現
  const linkPattern = /\[([^\]]+)\]\((https?:\/\/[^\s)]+)\)/g;
  const parts: (string | JSX.Element)[] = [];
  let lastIndex = 0;
  let match;

  while ((match = linkPattern.exec(content)) !== null) {
    // マッチ前のテキスト
    if (match.index > lastIndex) {
      parts.push(content.substring(lastIndex, match.index));
    }

    // リンク部分
    const linkText = match[1];
    const url = match[2];
    parts.push(
      <a
        key={`link-${match.index}`}
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 hover:text-blue-800 underline"
      >
        {linkText}
      </a>
    );

    lastIndex = linkPattern.lastIndex;
  }

  // 残りのテキスト
  if (lastIndex < content.length) {
    parts.push(content.substring(lastIndex));
  }

  // parts配列をReact要素として返す
  if (parts.length === 0) {
    return content;
  }

  // 各パートをReact.Fragmentでラップして返す
  return parts.map((part, index) => {
    if (typeof part === 'string') {
      return <span key={`text-${index}`}>{part}</span>;
    }
    return part;
  });
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
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8 text-white font-subheading-ja whitespace-pre-line">{news.title}</h1>
        </div>

        <div className="bg-white p-6 sm:p-8 rounded-lg mb-6 sm:mb-8 shadow-lg">
          {news.images && news.images.length > 0 && (
            <div className="mb-6">
              <Image
                src={news.images[0]}
                alt={news.title}
                width={800}
                height={450}
                className="w-full h-auto rounded-lg"
              />
            </div>
          )}
          <div className="prose max-w-none">
            <p className="text-sm sm:text-base md:text-lg leading-relaxed whitespace-pre-line text-gray-700 font-body-ja">
              {renderContentWithLinks(news.content)}
            </p>
          </div>
          {news.link && (
            <div className="mt-6 text-center">
              <a
                href={news.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-sky-500 text-white px-6 sm:px-8 py-2 sm:py-3 rounded-md hover:bg-opacity-80 transition text-sm sm:text-base md:text-lg font-body-ja"
              >
                {news.linkText || "詳細を見る"}
              </a>
            </div>
          )}
        </div>

        <div className="text-center">
          <Link
            href="/news"
            className="inline-block bg-sky-500 text-white px-6 sm:px-8 py-2 sm:py-3 rounded-md hover:bg-opacity-80 transition text-sm sm:text-base md:text-lg font-body-en"
          >一覧に戻る
          </Link>
        </div>
      </div>
    </div>
  );
}
