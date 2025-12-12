import Image from "next/image";

export const metadata = {
  title: "MEMBER | 劇団さいおうば公式サイト",
  description: "劇団さいおうばのメンバー紹介",
};

const members = [
  {
    name: "石田由衣",
    nameReading: "いしだゆい",
    role: "舞台監督・制作・広報",
    birthdate: "2003/6/23",
    hometown: "愛知県",
    hobbies: "観劇・一人旅",
    image: "/img/member_1.jpg",
    twitter: "https://x.com/giu_ii24?s=21&t=O17hV8bLCZ_wE-MMGGyMKQ",
    instagram: "https://www.instagram.com/giu_ii24?igsh=aWMwd2V4Y2U0cm04&utm_source=qr",
    description: "明治大学在学中。寺腰・三浦・土田とは演劇サークル「活劇工房」にて出会う。主にスタッフとして活動。劇団以外の参加作品: 活劇工房2022年度新人公演『独裁者モロン』イヌカイ役・舞台美術(2022年)、即席麺企画公演『メシア』舞台監督(2023年)、劇団カナリ第4回公演『街と飛行船』広報(2024年)、活劇工房2024年度新歓公演『聴診器』娘役・制作(2024年)、明治大学シェイクスピアプロジェクト パーカッション（2022-23年）、楽器隊チーフ(2023-24年)、音楽監督・福井公演音楽監修（2024年）ほか",
  },
  {
    name: "土田一人",
    nameReading: "つちだかずと",
    role: "役者・演出助手・制作・広報",
    birthdate: "2003/6/13",
    hometown: "埼玉県川越市",
    hobbies: "野球観戦・旅行",
    image: "/img/member_2.jpg",
    twitter: "https://x.com/k_soga2022",
    description: "明治大学文学部在学中。母親の影響で歌舞伎や日本舞踊に触れる機会が多く、舞台芸術に興味を持つ。進学した明治大学で演劇サークル「活劇工房」に入部し、寺腰、三浦らと出会う。現在はサークル活動と並行して外部の団体で役者、スタッフの両面で活動中。ラーメンと阪神タイガースをこよなく愛する男。劇団以外の参加作品: 埼玉県立川越高等学校演劇部『いてふノ精蟲』(※精は旧字体)出演(2019年)、活劇工房2022年度新人公演『独裁者モロン』ソガ役(2022年)、活劇工房2023年度新歓公演『第七夜』松岡正盛(歌川緑堂)役(2023年)、演劇ユニットラナンキュラス本公演『改訂:夢、酔ひ華、香る』宮内譲役(2024年)、活劇工房2024年度新歓公演『聴診器』作・演出(2024年)、明治大学シェイクスピアプロジェクト 舞台監督部（2023年・2024年）",
  },
  {
    name: "寺腰玄",
    nameReading: "てらこしげん",
    role: "主宰・脚本・演出",
    birthdate: "2003/3/1",
    hometown: "京都府",
    hobbies: "ミニチュアコレクション・落語鑑賞",
    image: "/img/member_3.jpg",
    twitter: "https://twitter.com/katsuragi_gekit",
    instagram: "https://www.instagram.com/gen_terakoshi",
    description: "劇団さいおうば主宰。幼少期より演劇に興味を持ち、高校時代に脚本を担当した『とりでのむこう』('19)が第66回全国高等学校演劇大会に進出したことをきっかけに演劇の道へ進むことを決意。高校3年生の夏、戯曲ゼミにてMONO主宰の土田英生氏に学ぶ。大学入学以降も劇団活劇工房で脚本を執筆し続け、2023年には劇団さいおうばを旗揚げした。活劇工房時代に執筆した戯曲『独裁者モロン』('22)は第6回田畑実戯曲賞で最終候補に選出。東京学生演劇祭のため執筆した戯曲『アキスなヨシオ』('23)は佐藤佐吉賞2023優秀脚本賞を受賞。ほか、関西演劇祭2024にて上演された『変人、苦心、献身。』は脚本賞を受賞した。劇団以外の参加作品: 洛星高校演劇部『とりでのむこう』脚本・出演(2019年)、劇団活劇工房2022年度夏公演『甘い匂いが』脚本・演出(2022年)、劇団活劇工房2022年度新人公演『独裁者モロン』脚本・演出(2022年)、劇団活劇工房2023年度新歓公演『第七夜』脚本・演出(2023年)、劇団活劇工房2024年度新人公演『聴診器』制作(2024年)、劇団イン・ノート第10回本公演『海賊の時間2024』演出助手（2024年）",
  },
  {
    name: "三浦那由多",
    nameReading: "みうらなゆた",
    role: "主宰・役者・会計",
    birthdate: "2002/9/3",
    hometown: "東京都",
    hobbies: "ゲーム・漫画鑑賞",
    image: "/img/member_4.jpg",
    twitter: "https://x.com/nayuta985687545?s=21&t=KoSH_qJqfW9qy3GFVsiPJg",
    instagram: "https://www.instagram.com/3ura10_60?igsh=MTdsYmd6dzNtdXV5Ng==",
    description: "劇団さいおうば主宰。幼少期には落語を習うなど、演劇に関心を示す。高校進級の際、女子が多いと期待して演劇部に入部。同期に女子は0人だったものの、演劇の楽しさに気づき、大学入学後は同大学の演劇サークルである演劇研究部、活劇工房に入部し、明治大学シェイクスピアプロジェクトにも参加。活劇工房での活動中、寺腰と意気投合し劇団さいおうばを旗揚げする。劇団以外の参加作品: Ala'aum企画公演『ナイス・コントロール』二瀬コウイチ役、活劇工房2023年度新歓公演『第七夜』永島辰五郎役、明治大学シェイクスピアプロジェクト第20回公演『ハムレット』劇中王役、明治大学シェイクスピアプロジェクト『ロメオ・エンド・ジュリエット』カプレット役、劇団カナリ第5回公演『【intersection】；交錯点』畠山匠役（2024年）",
  },
];

export default function Member() {
  return (
    <div className="container mx-auto px-4 sm:px-6 py-6 sm:py-8">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-6 sm:mb-8 text-white font-heading-en">MEMBER</h1>
      <div className="h-4 sm:h-6"></div>

      {members.map((member, index) => (
        <div key={index} className="bg-white p-4 sm:p-6 md:p-8 rounded-lg max-w-6xl mx-auto mb-6 sm:mb-8 shadow-lg">
          <div className="h-2 sm:h-4"></div>
          <div className="flex flex-col md:flex-row gap-4 sm:gap-6 md:gap-8">
            <div className="md:w-1/3 flex justify-center md:justify-start">
              <Image
                src={member.image}
                alt={member.name}
                width={300}
                height={400}
                className="w-full max-w-sm md:max-w-none h-auto rounded shadow-md"
              />
            </div>
            <div className="md:w-2/3">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2 sm:mb-3 text-gray-800 font-subheading-ja">
                {member.name}({member.nameReading})
              </h2>
              <div className="flex gap-3 sm:gap-4 mb-3 sm:mb-4">
                {member.twitter && (
                  <a href={member.twitter} target="_blank" rel="noopener noreferrer" className="hover:opacity-70 transition-opacity">
                    <Image src="/img/icon_X.png" alt="X" width={40} height={40} className="w-6 h-6 sm:w-8 sm:h-8" />
                  </a>
                )}
                {member.instagram && (
                  <a href={member.instagram} target="_blank" rel="noopener noreferrer" className="hover:opacity-70 transition-opacity">
                    <Image src="/img/icon_ig.png" alt="Instagram" width={40} height={40} className="w-6 h-6 sm:w-8 sm:h-8" />
                  </a>
                )}
              </div>
              <p className="text-base sm:text-lg md:text-xl mb-3 sm:mb-4 text-primary font-semibold font-body-ja">{member.role}</p>
              <div className="h-2 sm:h-4"></div>
              <p className="text-sm sm:text-base md:text-lg mb-2 text-gray-700 font-body-ja">
                <span className="font-bold">生年月日: </span>{member.birthdate}
              </p>
              <p className="text-sm sm:text-base md:text-lg mb-2 text-gray-700 font-body-ja">
                <span className="font-bold">出身地: </span>{member.hometown}
              </p>
              <p className="text-sm sm:text-base md:text-lg mb-2 text-gray-700 font-body-ja">
                <span className="font-bold">趣味: </span>{member.hobbies}
              </p>
            </div>
          </div>
          {member.description && (
            <>
              <div className="h-6 sm:h-8 md:h-10"></div>
              <div className="border-t border-gray-300 pt-4 sm:pt-6">
                <p className="text-xs sm:text-sm md:text-base leading-relaxed text-gray-700 font-body-ja">{member.description}</p>
              </div>
            </>
          )}
        </div>
      ))}
    </div>
  );
}
