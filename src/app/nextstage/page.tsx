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
        <p className="text-xl sm:text-2xl md:text-3xl text-gray-600 font-body-en text-center">coming soon...</p>
      </div>
    </div>
  );
}
