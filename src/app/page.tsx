import Link from "next/link";
import Slideshow from "@/components/Slideshow";

export default function Home() {
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
            <p className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 text-gray-800 font-heading-en">Next Stage</p>
            <div className="h-2 sm:h-4"></div>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-600 font-body-en">coming soon...</p>
          </div>
        </div>
      </div>

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

            {/* News Item 11 */}
            <p className="text-sm sm:text-base text-gray-600 mb-2 font-body-en">2025/05/18</p>
            <div className="h-2"></div>
            <Link
              href="/news/11"
              className="text-base sm:text-lg md:text-xl text-black hover:text-primary no-underline block mb-4 sm:mb-6 font-body-ja"
            >
              【お知らせ】
              <br />
              「さいおうばのワークショップ」開催決定
            </Link>
            <div className="h-3 sm:h-4"></div>

            {/* News Item 10 */}
            <p className="text-sm sm:text-base text-gray-600 mb-2 font-body-en">2025/1/23</p>
            <div className="h-2"></div>
            <Link
              href="/news/9"
              className="text-base sm:text-lg md:text-xl text-black hover:text-primary no-underline block mb-4 sm:mb-6 font-body-ja"
            >
              【ご報告】
              <br />
              2024年度明治大学創立者記念課外活動褒賞金採択のご報告
            </Link>
            <div className="h-3 sm:h-4"></div>

            {/* News Item 9 */}
            <p className="text-sm sm:text-base text-gray-600 mb-2 font-body-en">2025/01/21</p>
            <div className="h-2"></div>
            <Link
              href="/news/10"
              className="text-base sm:text-lg md:text-xl text-black hover:text-primary no-underline block mb-4 sm:mb-6 font-body-ja"
            >
              【メディア掲載情報】
              <br />
              明治大学文学部ニュースにて劇団員が紹介されました
            </Link>
            <div className="h-3 sm:h-4"></div>

            <div className="h-4 sm:h-6"></div>
            <Link
              href="/news"
              className="block text-center bg-primary text-white py-2 sm:py-3 px-4 sm:px-6 rounded-md hover:bg-opacity-80 transition no-underline text-sm sm:text-base md:text-lg max-w-xs mx-auto font-body-ja"
            >
              詳しくはこちら
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
