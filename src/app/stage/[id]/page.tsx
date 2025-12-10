import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { stagesData } from "@/data/stagesData";

export async function generateStaticParams() {
  return stagesData.map((stage) => ({
    id: stage.id.toString(),
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const stage = stagesData.find((s) => s.id === parseInt(id));

  if (!stage) {
    return {
      title: "公演が見つかりません | 劇団さいおうば公式サイト",
    };
  }

  return {
    title: `${stage.title} | 劇団さいおうば公式サイト`,
    description: stage.synopsis.substring(0, 100),
  };
}

export default async function StagePage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const stage = stagesData.find((s) => s.id === parseInt(id));

  if (!stage) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 sm:px-6 py-6 sm:py-8">
      <div className="max-w-4xl mx-auto">
        <Image
          src={stage.titleImage}
          alt={stage.title}
          width={1200}
          height={800}
          className="w-full h-auto mb-6 sm:mb-8 rounded-lg shadow-lg"
        />
        <div className="bg-white p-6 sm:p-8 rounded-lg mb-6 sm:mb-8 shadow-lg">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-4 sm:mb-6 text-gray-800 font-subheading-ja">
            {stage.title}
          </h1>
          <p className="text-lg sm:text-xl font-bold mb-4 text-center text-gray-700 font-body-ja">{stage.subtitle}</p>
          <div className="h-4 sm:h-6"></div>

          <div className="flex items-center gap-4 mb-4">
            <div className="text-xl sm:text-2xl font-bold text-gray-800 font-subheading-ja">あらすじ</div>
            {stage.youtubeUrl && (
              <a
                href={stage.youtubeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block"
              >
                <Image
                  src="/img/icon_maru_Youtube.png"
                  alt="YouTube"
                  width={40}
                  height={40}
                  className="hover:opacity-80 transition"
                />
              </a>
            )}
          </div>
          <div className="h-2 sm:h-3"></div>
          <p className="text-sm sm:text-base md:text-lg mb-6 whitespace-pre-line leading-relaxed text-gray-700 font-body-ja">
            {stage.synopsis}
          </p>

          <div className="h-4 sm:h-6"></div>
          <div className="text-xl sm:text-2xl font-bold mb-4 text-gray-800 font-subheading-ja">作品紹介</div>
          <div className="h-2 sm:h-3"></div>
          <p className="text-sm sm:text-base md:text-lg mb-6 leading-relaxed text-gray-700 font-body-ja">{stage.introduction}</p>

          <div className="h-6 sm:h-8 md:h-10"></div>
          <div className="text-lg sm:text-xl font-bold mb-2 text-gray-800 font-subheading-ja">【作・演出】</div>
          <div className="text-sm sm:text-base md:text-lg mb-4 text-gray-700 font-body-ja">{stage.director}</div>

          <div className="h-2 sm:h-3"></div>
          <div className="text-lg sm:text-xl font-bold mb-2 text-gray-800 font-subheading-ja">【出演】</div>
          <div className="h-2 sm:h-3"></div>
          <div className="text-sm sm:text-base md:text-lg mb-4 text-gray-700 font-body-ja">
            {stage.cast.map((actor, index) => (
              <div key={index}>{actor}</div>
            ))}
          </div>

          <div className="h-2 sm:h-3"></div>
          <div className="text-lg sm:text-xl font-bold mb-2 text-gray-800 font-subheading-ja">【スタッフ】</div>
          {stage.staff.map((staff, index) => (
            <div key={index} className="mb-2 text-sm sm:text-base md:text-lg text-gray-700 font-body-ja">
              <span className="font-bold">{staff.role}: </span>
              <span>{staff.names}</span>
            </div>
          ))}

          <div className="h-2 sm:h-3"></div>
          <div className="text-lg sm:text-xl font-bold mb-2 text-gray-800 font-subheading-ja">【会場】</div>
          <div className="text-sm sm:text-base md:text-lg mb-4 text-gray-700 font-body-ja">{stage.venue}</div>

          {stage.flyerImages && stage.flyerImages.length > 0 && (
            <>
              <div className="h-4 sm:h-6"></div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                {stage.flyerImages.map((img, index) => (
                  <Image
                    key={index}
                    src={img}
                    alt={`Flyer ${index + 1}`}
                    width={600}
                    height={800}
                    className="w-full h-auto rounded shadow-md"
                  />
                ))}
              </div>
            </>
          )}
        </div>

        <div className="text-center">
          <Link
            href="/history"
            className="inline-block bg-sky-500 text-white px-6 sm:px-8 py-2 sm:py-3 rounded-md hover:bg-opacity-80 transition text-sm sm:text-base md:text-lg font-body-en"
          >
            HISTORY に戻る
          </Link>
        </div>
      </div>
    </div>
  );
}
