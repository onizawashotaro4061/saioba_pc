import Link from "next/link";
import Image from "next/image";
import { podcastData } from "@/data/podcastData";

export const metadata = {
  title: "ほらふきさいおうば | 劇団さいおうば公式サイト",
  description: "劇団さいおうばの公式ポッドキャスト「ほらふきさいおうば」",
};

export default function Podcast() {
  const platforms = [
    {
      name: "YouTube",
      url: podcastData.latestEpisode.youtube,
      color: "bg-red-600 hover:bg-red-700",
    },
    {
      name: "Spotify",
      url: podcastData.latestEpisode.spotify,
      color: "bg-green-600 hover:bg-green-700",
    },
    {
      name: "Apple Podcast",
      url: podcastData.latestEpisode.applePodcast,
      color: "bg-purple-600 hover:bg-purple-700",
    },
    {
      name: "Amazon Music",
      url: podcastData.latestEpisode.amazonMusic,
      color: "bg-sky-600 hover:bg-sky-700",
    },
  ];

  return (
    <div className="container mx-auto px-4 sm:px-6 py-6 sm:py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-6 sm:mb-8 text-white font-heading-en">
          PODCAST
        </h1>

        <div className="bg-white p-6 sm:p-8 rounded-lg mb-6 sm:mb-8 shadow-lg">
          <div className="mb-6">
            <Image
              src="/img/news_19.webp"
              alt="ほらふきさいおうば"
              width={800}
              height={450}
              className="w-full h-auto rounded-lg"
            />
          </div>
          <div className="prose max-w-none mb-8">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 text-gray-800 font-subheading-ja">
              ほらふきさいおうば
            </h2>
            <p className="text-sm sm:text-base md:text-lg leading-relaxed text-gray-700 mb-4 font-body-ja">
              パーソナリティを務めるのは、劇団さいおうばの三浦那由多と金子レイチェル奈々。
              <br />
              二人が気になること、好きなもの、どうでもいいことまで、自由気ままに語り合います。
            </p>
            <p className="text-sm sm:text-base md:text-lg leading-relaxed text-gray-700 mb-6 font-body-ja font-semibold">
              毎月第2・第4木曜日 18:00更新
            </p>

            <div className="mb-8">
              <h3 className="text-lg sm:text-xl font-bold mb-4 text-gray-800 font-subheading-ja">
                最新回を聴く
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {platforms.map((platform) => (
                  <a
                    key={platform.name}
                    href={platform.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${platform.color} text-white px-6 py-4 rounded-lg text-center transition-all transform hover:scale-105 shadow-md text-base sm:text-lg font-body-ja font-semibold`}
                  >
                    {platform.name}
                  </a>
                ))}
              </div>
            </div>

            <div className="border-t pt-6 mt-6">
              <h3 className="text-lg sm:text-xl font-bold mb-3 text-gray-800 font-subheading-ja">
                パーソナリティ
              </h3>
              <p className="text-sm sm:text-base md:text-lg text-gray-700 mb-6 font-body-ja">
                三浦那由多 × 金子レイチェル奈々
              </p>

              <h3 className="text-lg sm:text-xl font-bold mb-3 text-gray-800 font-subheading-ja">
                スタッフ
              </h3>
              <div className="text-sm sm:text-base md:text-lg text-gray-700 space-y-1 font-body-ja">
                <p>構成・エピソードサムネイル：寺腰玄（劇団さいおうば）</p>
                <p>録音・編集・音楽：馬詰洋史（劇団さいおうば）</p>
                <p>番組ロゴ：田口太陽</p>
                <p>音響協力：佐藤諒一</p>
              </div>
            </div>

            <div className="border-t pt-6 mt-6">
              <h3 className="text-lg sm:text-xl font-bold mb-3 text-gray-800 font-subheading-ja">
                過去の放送回
              </h3>
              <p className="text-sm sm:text-base md:text-lg text-gray-700 mb-4 font-body-ja">
                過去の放送回はYouTubeの再生リストからご覧いただけます。
              </p>
              <a
                href="https://www.youtube.com/playlist?list=PLW6lpu5b7DhM"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg transition-all transform hover:scale-105 shadow-md text-base sm:text-lg font-body-ja font-semibold"
              >
                YouTube再生リストを見る
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
