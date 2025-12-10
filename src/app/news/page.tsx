import Link from "next/link";

export const metadata = {
  title: "NEWS | 劇団さいおうば公式サイト",
  description: "劇団さいおうばのニュース一覧",
};

const newsItems = [
  { id: 11, date: "2025/05/18", title: "【お知らせ】\n「さいおうばのワークショップ」開催決定" },
  { id: 9, date: "2025/1/23", title: "【ご報告】\n2024年度明治大学創立者記念課外活動褒賞金採択のご報告" },
  { id: 10, date: "2025/01/21", title: "【メディア掲載情報】\n明治大学文学部ニュースにて劇団員が紹介されました" },
  { id: 8, date: "2024/09/20", title: "【お知らせ】第十回公演開催のお知らせ" },
  { id: 7, date: "2024/08/15", title: "【ご報告】第九回公演終了のご報告" },
];

export default function News() {
  return (
    <div className="container mx-auto px-4 sm:px-6 py-6 sm:py-8">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-6 sm:mb-8 text-white font-heading-en">NEWS</h1>
      <div className="h-4 sm:h-6"></div>
      <hr className="mb-6 sm:mb-8 border-white" />
      <div className="max-w-4xl mx-auto space-y-4 sm:space-y-6 md:space-y-8">
        {newsItems.map((item) => (
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
