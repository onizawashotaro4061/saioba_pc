import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "HISTORY | 劇団さいおうば公式サイト",
  description: "劇団さいおうばの公演履歴",
};

const stages = [
  {
    id: 1,
    date: "2023.8.5～2023.8.6",
    title: "第一回公演『超人の友人』",
    venue: "アートスタジオ(明治大学猿楽町第2校舎1F)",
    image: "/img/thumbnail_1.jpg",
  },
  {
    id: 2,
    date: "2023.8.31～2023.9.3",
    title: "第二回公演『アキスなヨシオ』",
    venue: "王子小劇場",
    image: "/img/thumbnail_2.jpg",
  },
  {
    id: 3,
    date: "2024.1.20～2024.1.21",
    title: "第三回公演『十二人の手紙』",
    venue: "アートスタジオ(明治大学猿楽町第2校舎1F)",
    image: "/img/thumbnail_3.jpg",
  },
  {
    id: 4,
    date: "2024.3.10",
    title: "第四回公演『アキスなヨシオ』",
    venue: "あかがねミュージアム",
    image: "/img/thumbnail_4.jpg",
  },
  {
    id: 5,
    date: "2024.6.13～2024.6.16",
    title: "第五回公演『カミノコノミカ』",
    venue: "本多劇場グループ シアター711",
    image: "/img/thumbnail_5.jpg",
  },
  {
    id: 6,
    date: "2024.8.13～2024.8.15",
    title: "第六回公演『変人、苦心、献身。』",
    venue: "北池袋新生館シアター",
    image: "/img/thumbnail_6.jpg",
  },
  {
    id: 7,
    date: "2024.11.16.～2024.11.24",
    title: "第七回公演『変人、苦心、献身。』",
    venue: "COOL JAPAN PARK OSAKA SSホール",
    image: "/img/thumbnail_7.jpg",
  },
  {
    id: 8,
    date: "2025.2.28.～2025.3.3.",
    title: "第八回公演『ごろさすセンセイ』",
    venue: "本多劇場グループ シアター711",
    image: "/img/thumbnail_8.jpg",
  },
  {
    id: 9,
    date: "2025.9.2.～2025.9.3.",
    title: "第九回公演『私はイスを撫でたくない』",
    venue: "北池袋新生館シアター",
    image: "/img/thumbnail_9.jpg",
  },
  {
    id: 10,
    date: "2025.9.19.～2025.9.21.",
    title: "第十回公演『はにわのにわはわにのにわ』",
    venue: "インディペンデントシアターOji",
    image: "/img/thumbnail_10.jpg",
  },
];

export default function History() {
  return (
    <div className="container mx-auto px-4 sm:px-6 py-6 sm:py-8">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-6 sm:mb-8 text-white font-heading-en">HISTORY</h1>
      <div className="h-4 sm:h-6"></div>
      <div className="space-y-4 sm:space-y-6 max-w-6xl mx-auto">
        {stages.map((stage) => (
          <Link
            key={stage.id}
            href={`/stage/${stage.id}`}
            className="block bg-white rounded-lg overflow-hidden hover:shadow-xl transition-shadow shadow-md"
          >
            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/3 h-48 md:h-auto">
                <Image
                  src={stage.image}
                  alt={stage.title}
                  width={400}
                  height={300}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="md:w-2/3 p-4 sm:p-6 flex flex-col justify-center">
                <p className="text-xs sm:text-sm md:text-base text-gray-600 mb-2 font-body-en">{stage.date}</p>
                <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold mb-2 sm:mb-3 text-gray-800 font-subheading-ja">{stage.title}</p>
                <p className="text-sm sm:text-base md:text-lg text-gray-700 mb-3 sm:mb-4 font-body-ja">＠{stage.venue}</p>
                <div className="inline-block bg-sky-500 text-white px-4 sm:px-6 py-2 rounded-md w-fit text-sm sm:text-base hover:bg-opacity-90 transition-colors font-body-en">
                  details
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
      <div className="h-4 sm:h-6"></div>
    </div>
  );
}
