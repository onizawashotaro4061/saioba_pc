export const metadata = {
  title: "NextStage | 劇団さいおうば公式サイト",
  description: "劇団さいおうばの次回公演情報",
};

export default function NextStage() {
  return (
    <div>
      {/* ヘッダー */}
      <div className="container mx-auto px-4 sm:px-6 py-6 sm:py-8">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-6 sm:mb-8 text-white font-heading-en">NEXTSTAGE</h1>
        <div className="h-4 sm:h-6"></div>
        <hr className="mb-6 sm:mb-8 bg-white" />
      </div>

      {/* コンテンツエリア */}
      <div className="container mx-auto px-4 sm:px-6 pb-6 sm:pb-8">
        <div className="max-w-4xl mx-auto">
          <div className="p-6 sm:p-8 mb-6 sm:mb-8">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-4 sm:mb-6 text-white font-subheading-ja">
              COMING SOON...
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}
