import Image from "next/image";
import Link from "next/link";
import { stagesData } from "@/data/stagesData";

export const metadata = {
  title: "NextStage | 劇団さいおうば公式サイト",
  description: "劇団さいおうばの次回公演情報",
};

export default function NextStage() {
  // 最新の公演情報を取得（IDが最大のもの）
    const latestStage = stagesData.reduce((prev, current) =>
    (prev.id > current.id) ? prev : current
  );

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
          <div className="bg-white p-6 sm:p-8 rounded-lg mb-6 sm:mb-8 shadow-lg">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-4 sm:mb-6 text-gray-800 font-subheading-ja whitespace-pre-line">
              {latestStage.title}
            </h1>

            {/* サムネイル画像をタイトルの下に配置 */}
            {latestStage.thumbnailImages && latestStage.thumbnailImages.length > 0 && (
              <>
                <div className="h-4 sm:h-6"></div>
                <div className="flex justify-center mb-6 sm:mb-8">
                  <div className="max-w-2xl w-full">
                    {latestStage.thumbnailImages.map((img, index) => (
                      <Image
                        key={index}
                        src={img}
                        alt={`Thumbnail ${index + 1}`}
                        width={800}
                        height={450}
                        className="w-full h-auto rounded shadow-md"
                      />
                    ))}
                  </div>
                </div>
              </>
            )}

            <p className="text-lg sm:text-xl font-bold mb-4 text-left text-gray-700 font-body-ja">{latestStage.subtitle}</p>
            <div className="h-4 sm:h-6"></div>

            <div className="text-xl sm:text-2xl font-bold mb-4 text-gray-800 font-subheading-ja">あらすじ</div>
            <div className="h-2 sm:h-3"></div>
            <p className="text-sm sm:text-base md:text-lg mb-6 whitespace-pre-line leading-relaxed text-gray-700 font-body-ja">
              {latestStage.synopsis}
            </p>

            <div className="h-6 sm:h-8 md:h-10"></div>
            <div className="text-lg sm:text-xl font-bold mb-2 text-gray-800 font-subheading-ja">【作・演出】</div>
            <div className="text-sm sm:text-base md:text-lg mb-4 text-gray-700 font-body-ja">{latestStage.director}</div>

            <div className="h-2 sm:h-3"></div>
            <div className="text-lg sm:text-xl font-bold mb-2 text-gray-800 font-subheading-ja">【出演】</div>
            <div className="h-2 sm:h-3"></div>
            <div className="text-sm sm:text-base md:text-lg mb-4 text-gray-700 font-body-ja">
              {latestStage.cast.map((actor, index) => (
                <div key={index}>{actor}</div>
              ))}
            </div>

            <div className="h-2 sm:h-3"></div>
            <div className="text-lg sm:text-xl font-bold mb-2 text-gray-800 font-subheading-ja">【スタッフ】</div>
            {latestStage.staff.map((staff, index) => (
              <div key={index} className="mb-2 text-sm sm:text-base md:text-lg text-gray-700 font-body-ja">
                <span className="font-bold">{staff.role}: </span>
                <span>{staff.names}</span>
              </div>
            ))}

            <div className="h-2 sm:h-3"></div>
            <div className="text-lg sm:text-xl font-bold mb-2 text-gray-800 font-subheading-ja">【会場】</div>
            <div className="text-sm sm:text-base md:text-lg mb-4 text-gray-700 font-body-ja">{latestStage.venue}</div>

            <div className="h-2 sm:h-3"></div>
            <div className="text-lg sm:text-xl font-bold mb-2 text-gray-800 font-subheading-ja">【公演日程】</div>
            <div className="text-sm sm:text-base md:text-lg mb-3 text-gray-700 font-body-ja">
              {/*
                スケジュールはデータ側に持たせるか、ここで個別に書き換えるか
                どちらでも構いません。現在ステージ12用の情報は存在しないため
                旧来の静的コードが残っていますが、必要に応じて
                stagesData に `schedule` プロパティを追加し、こちらで
                {latestStage.schedule?.map(...)} のように動的表示するように
                変更してください。
              */}
              <div className="space-y-2">
                <div className="flex gap-8">
                  <span className="w-32">3月27日(金)</span>
                  <span>19:00</span>
                  <span>さいおうば・ターリーズ</span>
                </div>
                <div className="flex gap-8">
                  <span className="w-32">3月28日(土)</span>
                  <span>12:00</span>
                  <span>さいおうば・ターリーズ</span>
                </div>
                <div className="flex gap-8">
                  <span className="w-32">3月28日(土)</span>
                  <span>15:30</span>
                  <span>カナリ・さいおうば</span>
                </div>
                <div className="flex gap-8">
                  <span className="w-32">3月28日(土)</span>
                  <span>19:00</span>
                  <span>カナリ・ターリーズ</span>
                </div>
                <div className="flex gap-8">
                  <span className="w-32">3月29日(日)</span>
                  <span>12:30</span>
                  <span>カナリ・さいおうば</span>
                </div>
                <div className="flex gap-8">
                  <span className="w-32">3月29日(日)</span>
                  <span>16:00</span>
                  <span>カナリ・ターリーズ</span>
                </div>
              </div>
              <div className="h-3"></div>
              <p className="text-xs sm:text-sm text-gray-600">※1公演につき3団体中2団体が上演いたします。</p>
              <p className="text-xs sm:text-sm text-gray-600">※受付開始・開場は開演の30分前を予定しております。</p>
            </div>

            <div className="h-2 sm:h-3"></div>
            <div className="text-lg sm:text-xl font-bold mb-2 text-gray-800 font-subheading-ja">【料金】</div>
            <div className="text-sm sm:text-base md:text-lg mb-4 text-gray-700 font-body-ja">
              <p>ALL: ¥3000<br />見に行く割: #ターリーズ #劇団カナリ #劇団さいおうば のいずれかを含むポストをXに投稿、またはInstagramで各団体アカウントをメンションした投稿でチケット料金 ¥300 OFF！受付での証明は不要！</p>
            </div>

            <div className="h-2 sm:h-3"></div>
            <div className="text-sm sm:text-base md:text-lg mb-4 text-gray-700 font-body-ja">
              その他、2団体の詳細は<a href="https://x.com/tarizu0406/status/2025541162300502081?s=20" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">こちらから</a>
            </div>
            {/* フライヤー画像を料金の下に配置 */}
            {latestStage.flyerImages && latestStage.flyerImages.length > 0 && (
              <>
                <div className="h-4 sm:h-6"></div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                  {latestStage.flyerImages.map((img, index) => (
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

            {/* 予約リンク */}
            <div className="h-4 sm:h-6"></div>
            <div className="text-center">
              <Link
                href="https://ticket.corich.jp/apply/441041/333/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-sky-500 text-white px-6 sm:px-8 py-2 sm:py-3 rounded-md hover:bg-opacity-80 transition text-sm sm:text-base md:text-lg font-body-en"
              >
                ご予約はこちらから
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
