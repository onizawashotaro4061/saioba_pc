import Image from "next/image";

export const metadata = {
  title: "NextStage | 劇団さいおうば公式サイト",
  description: "劇団さいおうばの次回公演情報",
};

export default function NextStage() {
  return (
    <div className="container mx-auto px-4 sm:px-6 py-6 sm:py-8">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-6 sm:mb-8 text-white font-heading-en">NEXTSTAGE</h1>
      <div className="h-4 sm:h-6"></div>
      <hr className="mb-6 sm:mb-8 bg-white" />
      <div className="max-w-4xl mx-auto space-y-4 sm:space-y-6 md:space-y-8">
        <div className="bg-white py-6 sm:py-8 px-4 sm:px-6 md:px-8 rounded-lg">
          <div className="text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-4 sm:mb-6 font-body-ja">
              劇団さいおうば 第十一回公演<br />『独裁者モロン』
            </h2>
            <div className="h-4 sm:h-6"></div>
            <div className="max-w-2xl mx-auto mb-6 sm:mb-8">
              <Image
                src="/img/thumbnail_11.png"
                alt="劇団さいおうば第十一回公演『独裁者モロン』"
                width={800}
                height={450}
                className="w-full h-auto rounded-lg shadow-md"
              />
            </div>
            <div className="h-4 sm:h-6"></div>
            <div className="border-t-2 border-gray-300 pt-4 sm:pt-6">
              <p className="text-lg sm:text-xl md:text-2xl text-gray-700 font-bold mb-2 font-body-ja">2026/1/4 12:00 本情報公開</p>
            </div>
            <div className="h-4 sm:h-6"></div>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 font-body-en">Coming Soon……</p>
          </div>
        </div>
      </div>
    </div>
  );
}
