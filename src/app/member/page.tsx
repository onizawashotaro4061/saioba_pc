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
    description: "明治大学卒業。寺腰・三浦・土田とは演劇サークル「活劇工房」にて出会う。主にスタッフとして活動。劇団以外の参加作品: 活劇工房2022年度新人公演『独裁者モロン』イヌカイ役・舞台美術(2022年)、即席麺企画公演『メシア』舞台監督(2023年)、劇団カナリ第4回公演『街と飛行船』広報(2024年)、活劇工房2024年度新歓公演『聴診器』娘役・制作(2024年)、明治大学シェイクスピアプロジェクト パーカッション（2022-23年）、楽器隊チーフ(2023-24年)、音楽監督・福井公演音楽監修（2024年）ほか",
  },
  {
    name: "金子レイチェル奈々",
    nameReading: "かねこれいちぇるなな",
    role: "役者・照明・演出助手",
    birthdate: "2003/12/2",
    hometown: "神奈川県",
    hobbies: "ゲーム・ポケモン・旅行・動物を見ること",
    image: "/img/member_6.JPG",
    twitter: "https://x.com/chel_ray_na?s=21&t=dOkXqmpEQYxxwnZagVZrmw",
    instagram: "https://www.instagram.com/che_llie_1202?igsh=NHV6c2lkeXh2MWZp&utm_source=qr",
    description: "明治大学国際日本学部を卒業。同大学の演劇サークル「活劇工房」にて、寺腰・三浦らと出会う。大学より演劇を始め、役者および照明として活動。劇団さいおうばには旗揚げ公演『超人の友人』より参加し、以降も役者・スタッフの両面から作品づくりに関わる。大学三年時にはアメリカで半年間のインターンシップを経験。英語でのコミュニケーションに熟達する。家系を辿ると、とある著名なカウボーイに行き着くという。劇団以外の参加作品: 活劇工房2024年度新歓公演『聴診器』石川剛雄役・長男(幼少期)役・照明(2024年)活劇工房7月企画公演『いてふの精虫』照明(2025年)名前のない役者達Aチーム寺腰『酒とラモダとハジキと漫画』ナガシノ役(2025年)名前のない役者達Bチーム芝原『スモール・イマジナリーフェスティバル』シズカ役・スニージー役・コロス②役(2025年)活劇工房2025年度卒業公演『掘るべき穴と投げた玉』クマサカ役・照明(2026年)テアトルオードブル：un『花を運ぶ人』ベアトリス役（2026年）",
  },
  {
    name: "小林アスマ",
    nameReading: "こばやしあすま",
    role: "役者・音響・作曲・演出助手",
    birthdate: "2003/6/12",
    hometown: "東京都",
    hobbies: "博物館巡り・ドライブ・化石採集",
    image: "/img/member_7.jpg",
    twitter: "https://x.com/asuma_koba84act",
    instagram: "https://www.instagram.com/asuma_kobayashi?igsh=MWh4Zmo2YjZvZDBsMw==",
    description: "明治大学文学部を卒業。古生物学者になるという幼少期からの夢を諸事情で諦め、別の夢を追うべく演劇サークルである劇団活劇工房で役者を始める。劇団さいおうば 関西演劇祭2024出場作品『変人、苦心、献身。』にてマックス・ブロート役を演じ、史上最年少でベストアクター賞を受賞。幼少期にピアノを習った経験を活かし、いくつかの公演で劇中曲の作曲も行った。また、舞台活動と並行し、声優としても活動するべく、模索を続けている。劇団以外の参加作品: 劇団maKuaKi第3回 夢幻舞台継燈公演『オグレス・エクス・マキナ・スパイラル・スパイラル』中原義文役(2023年)築地小劇場開場100周年記念リーディング公演『海戦』第5の水兵役(2024年)幾何学おばけ企画公演『メア』少年役(2024年)シアターキューブリック ver.38『サンタクロース・ドットコム!』ロゼ、ビッグボス役(2025年)",
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
    description: "明治大学文学部卒業。母親の影響で歌舞伎や日本舞踊に触れる機会が多く、舞台芸術に興味を持つ。進学した明治大学で演劇サークル「活劇工房」に入部し、寺腰、三浦らと出会う。現在はサークル活動と並行して外部の団体で役者、スタッフの両面で活動中。ラーメンと阪神タイガースをこよなく愛する男。劇団以外の参加作品: 埼玉県立川越高等学校演劇部『いてふノ精蟲』(※精は旧字体)出演(2019年)、活劇工房2022年度新人公演『独裁者モロン』ソガ役(2022年)、活劇工房2023年度新歓公演『第七夜』松岡正盛(歌川緑堂)役(2023年)、演劇ユニットラナンキュラス本公演『改訂:夢、酔ひ華、香る』宮内譲役(2024年)、活劇工房2024年度新歓公演『聴診器』作・演出(2024年)、明治大学シェイクスピアプロジェクト 舞台監督部（2023年・2024年）",
  },
  {
    name: "寺腰玄",
    nameReading: "てらこしげん",
    role: "主宰・脚本・演出",
    birthdate: "2003/3/1",
    hometown: "京都府",
    hobbies: "ミニチュアコレクション・落語鑑賞",
    image: "/img/member_3_1.jpg",
    twitter: "https://twitter.com/katsuragi_gekit",
    instagram: "https://www.instagram.com/gen_terakoshi",
    homepage: "https://www.fabnet.co.jp/members/terakoshi",
    description: "劇団さいおうば主宰。幼少期より演劇に興味を持ち、高校時代に脚本を担当した『とりでのむこう』('19)が第66回全国高等学校演劇大会に進出したことをきっかけに演劇の道へ進むことを決意。高校3年生の夏、戯曲ゼミにてMONO主宰の土田英生氏に学ぶ。大学入学以降も劇団活劇工房で脚本を執筆し続け、2023年には劇団さいおうばを旗揚げした。活劇工房時代に執筆した戯曲『独裁者モロン』('22)は第6回田畑実戯曲賞で最終候補に選出。東京学生演劇祭のため執筆した戯曲『アキスなヨシオ』('23)は佐藤佐吉賞2023優秀脚本賞を受賞。ほか、関西演劇祭2024にて上演された『変人、苦心、献身。』は脚本賞を受賞した。劇団以外の参加作品: 演劇：洛星高校演劇部『とりでのむこう』脚本・出演(2019年)、劇団イン・ノート第10回本公演『海賊の時間2024』演出助手（2024年）、劇団イン・ノート第11回本公演『月の爆撃機』演出助手（2025年）　映像：映画『フクイラプトル』共同脚本（2026年）、『世にも奇妙な物語`26 夏の特別編』「おじさんになりたい」脚本（2026年）",
  },
  {
    name: "馬詰洋史",
    nameReading: "まづめひろふみ",
    role: "音響・舞台監督・会計・脚本",
    birthdate: "2003/2/11",
    hometown: "京都府",
    hobbies: "音楽鑑賞・読書",
    image: "/img/member_5.jpg",
    twitter: "https://x.com/amami_masaharu",
    instagram: "https://www.instagram.com/hirofumi1773?igsh=MXFwNmVpYTFsZWFicw==",
    description: "中学時代に友人に誘われ演劇部に入り、そこで劇団さいおうば主宰の寺腰玄に出会う。神戸大学演劇研究会はちの巣座に入り、大学時代は関西にて活動。劇団さいおうばには、関西演劇祭2024『変人、苦心、献身。』で初参加。大学院進学と共に上京し、寺腰と再度演劇を始める。専門はスラヴ文学。劇団以外の参加作品: 洛星高校演劇部『とりでのむこう』堺役(2019年)、はちの巣座空きコマ公演短編集『Pot Luck』舞台監督及びうち一つ「後藤を待ちながら」(脚本:寺腰玄)演出(2022年)、劇団アンゴラ・ステーキ第2回公演『北極星より愛を込めて』改め『愛のポラリス』ダン役(2023年)、演劇集団エスキス第1回公演『対』舞台監督及びうち一つ「上告」脚本・野口役(2023年)、劇団,白薔薇第2回公演『カルテット』舞台監督(2023年)、演劇集団エスキス第2回企画『The Return of　 』「社交場」脚本・出演(2023年)、劇団アンゴラ・ステーキ第5回公演『ザ・クリープショウ』音響(2024年)、餓鬼の断食vol.4.5『スイッチ』『対岸は、火事。』音響(2025年)、『STUDY｜-●▶︎■-』舞台監督（2026年）",
  },
  {
    name: "三浦那由多",
    nameReading: "みうらなゆた",
    role: "主宰・役者",
    birthdate: "2002/9/3",
    hometown: "東京都",
    hobbies: "ゲーム・漫画鑑賞",
    image: "/img/member_4.jpg",
    twitter: "https://x.com/nayuta985687545?s=21&t=KoSH_qJqfW9qy3GFVsiPJg",
    instagram: "https://www.instagram.com/3ura10_60?igsh=MTdsYmd6dzNtdXV5Ng==",
    description: "劇団さいおうば主宰。幼少期には落語を習うなど、演劇に関心を示す。高校進級の際、女子が多いと期待して演劇部に入部。同期に女子は0人だったものの、演劇の楽しさに気づき、大学入学後は同大学の演劇サークルである演劇研究部、活劇工房に入部し、明治大学シェイクスピアプロジェクトにも参加。活劇工房での活動中、寺腰と意気投合し劇団さいおうばを旗揚げする。劇団以外の参加作品: Ala'aum企画公演『ナイス・コントロール』二瀬コウイチ役、活劇工房2023年度新歓公演『第七夜』永島辰五郎役、明治大学シェイクスピアプロジェクト第20回公演『ハムレット』劇中王役、明治大学シェイクスピアプロジェクト『ロメオ・エンド・ジュリエット』カプレット役、劇団カナリ第5回公演『【intersection】；交錯点』畠山匠役（2024年）、：Aqua mode planning：■The 50th plan 創設20周年記念公演「AMP THE PAVILION:005」『神様と友達』中島たけし役（2026年）",
  },
  {
    name: "本山裕也",
    nameReading: "もとやまゆうや",
    role: "役者",
    birthdate: "2002/4/14",
    hometown: "東京都",
    hobbies: "観劇・読書・ゲーム・散歩",
    image: "/img/member_8.png",
    twitter: "https://x.com/motoyama_yuya?s=21",
    instagram: "",
    description: "明治大学在学時、友達に連れて行かれた先輩の芝居を観て興味を持ち、演劇を始める。以降、学内サークルや外部団体にて活動中。出演した遅咲会第２２回公演『舞台浸水』（'25）が、カンゲキ大賞2025最終選考ノミネート。劇団以外の参加作品:劇団イン・ノートみんな卒業するしアースタでお祭り騒ぎでもしましょう公演『願わくは、花の下（もと）にて2022』獺祭チーム　カメ役（2022年）Ala'aum企画『ナイス・コントロール』主宰・演出・若咲マサト役（2023年）：Aqua mode planning：■The 46th plan　AMP THE PAVILION:004.5『サリーの実験室』【ユウレイクラゲ】だいすけ役（2023年）亀山組企画『だって4月生まれだもん』短編一本、脚本。配役、多数。(2024年)アジアン・モンスターズ旗揚げ公演『ホワイト・シャウト・ヒップホップ』赤魂役（2024年）実験劇場2月企画公演『試演』出演・構成（2025年）実験劇場八月企画『サカシマ』日野太一役（2025年）桜彩朗読劇2nd『落花法則』ナツメ役（2025年）遅咲会第２２回公演『舞台浸水』（2025年）こみちの旅企画『Under The Mushroom Shade』ロン・ハート役（2026年）劇団薄明第２回公演『赤鬼』とんび役（2026年）アジアン・モンスターズ『ホワイト・シャウト・ヒップホップ』白蟻役（2026年）",
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
                    <Image src="/img/icon_X.PNG" alt="X" width={40} height={40} className="w-6 h-6 sm:w-8 sm:h-8" />
                  </a>
                )}
                {member.instagram && (
                  <a href={member.instagram} target="_blank" rel="noopener noreferrer" className="hover:opacity-70 transition-opacity">
                    <Image src="/img/icon_ig.PNG" alt="Instagram" width={40} height={40} className="w-6 h-6 sm:w-8 sm:h-8" />
                  </a>
                )}
                {member.homepage && (
                  <a href={member.homepage} target="_blank" rel="noopener noreferrer" className="hover:opacity-70 transition-opacity">
                    <Image src="/img/icon_hp.PNG" alt="homepage" width={40} height={40} className="w-6 h-6 sm:w-8 sm:h-8" />
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
          {member.description && (() => {
            const parts = member.description.split('劇団以外の参加作品:');
            const biography = parts[0]?.trim();
            const works = parts[1]?.trim();

            return (
              <>
                <div className="h-6 sm:h-8 md:h-10"></div>
                <div className="border-t-2 border-gray-300 pt-6 sm:pt-8 space-y-6">
                  {biography && (
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-gray-800 font-subheading-ja">
                        経歴
                      </h3>
                      <div className="bg-gray-50 p-4 sm:p-5 rounded-lg">
                        <p className="text-xs sm:text-sm md:text-base leading-relaxed text-gray-700 font-body-ja">{biography}</p>
                      </div>
                    </div>
                  )}

                  {works && (
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-gray-800 font-subheading-ja">
                        劇団以外の参加作品
                      </h3>
                      <div className="bg-gray-50 p-4 sm:p-5 rounded-lg">
                        <p className="text-xs sm:text-sm md:text-base leading-relaxed text-gray-700 font-body-ja">{works}</p>
                      </div>
                    </div>
                  )}
                </div>
              </>
            );
          })()}
        </div>
      ))}
    </div>
  );
}
