import Link from "next/link";
import Image from "next/image";
import Slideshow from "@/components/Slideshow";
import { newsData } from "@/data/newsData";

export default function Home() {
  // IDが大きい順に3つ取得
  const latestNews = [...newsData]
    .sort((a, b) => b.id - a.id)
    .slice(0, 3);
  return (
    <>
      <div className="-mx-2 sm:-mx-4 lg:-mx-5">
        <Slideshow />
      </div>
      <div className="h-2 sm:h-4 md:h-6 lg:h-8"></div>

      {/* NextStage Section */}
      <div className="history_link">
        <div className="bg-white py-6 sm:py-8 px-4 sm:px-6 rounded-lg mx-2 sm:mx-4 md:mx-auto max-w-4xl">
          <div className="text-center">
            <p className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 text-gray-800 font-heading-en">NEXTSTAGE</p>
            <div className="h-4 sm:h-6"></div>
            <div className="max-w-2xl mx-auto">
              <Image
                src="/img/thum_konto_1.jpg"
                alt="劇団さいおうば第一回コント公演『白馬非馬』"
                width={800}
                height={450}
                className="w-full h-auto rounded-lg shadow-md mb-4 sm:mb-6"
              />
            </div>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 mb-3 sm:mb-4 font-body-ja">
              劇団さいおうば第一回コント公演<br />『白馬非馬』
            </h2>
            <div className="text-base sm:text-lg text-gray-700 font-body-ja">
              <p className="font-semibold text-center mb-3">＠下北沢スターダスト</p>
              {/* スマホ: 3段表示 */}
              <div className="grid grid-cols-2 gap-x-6 text-left w-fit mx-auto sm:hidden">
                <span>7月11日(土)</span>
                <span>18:00</span>
                <span>7月12日(日)</span>
                <span>13:00</span>
                <span></span>
                <span>16:00</span>
                <span></span>
                <span>19:00</span>
              </div>
              {/* PC: 1行表示 */}
              <div className="hidden sm:grid grid-cols-2 gap-x-6 text-left w-fit mx-auto">
                <span>7月11日(土)</span>
                <span>18:00</span>
                <span>7月12日(日)</span>
                <span>13:00/16:00/19:00</span>
              </div>
            </div>
            <div className="h-4 sm:h-6"></div>
            <Link
              href="/nextstage"
              className="block text-center bg-sky-500 text-white py-2 sm:py-3 px-4 sm:px-6 rounded-md hover:bg-opacity-80 transition no-underline text-sm sm:text-base md:text-lg max-w-xs mx-auto font-body-ja"
            >
              詳しくはこちら
            </Link>
          </div>
        </div>
      </div>

      {/* coming soon */}
      {/* <div className="history_link">
        <div className="bg-white py-6 sm:py-8 px-4 sm:px-6 rounded-lg mx-2 sm:mx-4 md:mx-auto max-w-4xl">
          <div className="text-center">
            <p className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 text-gray-800 font-heading-en">NEXTSTAGE</p>
            
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 mb-3 sm:mb-4 font-body-ja">
              COMING SOON...
            </h2>
            
            
            
          </div>
        </div>
      </div> */}

      <div className="h-4 sm:h-6 md:h-8"></div>

      {/* NEWS Section */}
      <div className="history_link">
        <div className="bg-white py-6 sm:py-8 px-4 sm:px-6 md:px-8 rounded-lg mx-2 sm:mx-4 md:mx-auto max-w-4xl">
          <div className="h-2 sm:h-4"></div>
          <div>
            <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-4 sm:mb-6 text-gray-800 font-heading-en">NEWS</div>
            <div className="h-2 sm:h-4"></div>
            <hr className="border-gray-300" />
            <div className="h-4 sm:h-6"></div>

            {/* IDが大きい順に3つ表示 */}
            {latestNews.map((news, index) => (
              <div key={news.id}>
                <p className="text-sm sm:text-base text-gray-600 mb-2 font-body-en">{news.date}</p>
                <div className="h-2"></div>
                <Link
                  href={`/news/${news.id}`}
                  className="text-base sm:text-lg md:text-xl text-black hover:text-primary no-underline block mb-4 sm:mb-6 font-body-ja"
                >
                  {news.title}
                </Link>
                {index < latestNews.length - 1 && <div className="h-3 sm:h-4"></div>}
              </div>
            ))}

            <div className="h-4 sm:h-6"></div>
            <Link
              href="/news"
              className="block text-center bg-sky-500 text-white py-2 sm:py-3 px-4 sm:px-6 rounded-md hover:bg-opacity-80 transition no-underline text-sm sm:text-base md:text-lg max-w-xs mx-auto font-body-ja"
            >
              詳しくはこちら
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

