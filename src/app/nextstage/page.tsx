export const metadata = {
  title: "NextStage | 劇団さいおうば公式サイト",
  description: "劇団さいおうばの次回公演情報",
};

export default function NextStage() {
  return (
    <div className="container mx-auto px-4 sm:px-6 py-6 sm:py-8">
      <div className="bg-white p-6 sm:p-8 md:p-12 rounded-lg max-w-4xl mx-auto text-center shadow-lg">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 sm:mb-8 text-gray-800 font-heading-en">Next Stage</h1>
        <div className="h-4 sm:h-6"></div>
        <p className="text-xl sm:text-2xl md:text-3xl text-gray-600 font-body-en">coming soon...</p>
      </div>
    </div>
  );
}
