import Image from "next/image";

export const metadata = {
  title: "ABOUT | 劇団さいおうば公式サイト",
  description: "劇団さいおうばについて",
};

export default function About() {
  return (
    <div className="container mx-auto px-4 sm:px-6 py-6 sm:py-8">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-6 sm:mb-8 text-white font-heading-en">ABOUT</h1>
      <div className="h-4 sm:h-6"></div>
      <div className="flex justify-center mb-6 sm:mb-8">
        <Image
          src="/img/about.png"
          alt="劇団さいおうば"
          width={800}
          height={600}
          className="w-full max-w-3xl h-auto rounded-lg"
        />
      </div>
      <div className="h-6 sm:h-8 md:h-12"></div>
      <div className="bg-white p-4 sm:p-6 md:p-8 rounded-lg max-w-4xl mx-auto shadow-lg">
        <p className="text-xl sm:text-2xl md:text-3xl font-bold text-center mb-4 sm:mb-6 text-gray-800 leading-relaxed font-heading-ja">
          やさしい劇で、
          <br />
          むずかしい話をしたい。
        </p>
        <div className="h-4 sm:h-6"></div>
        <p className="text-sm sm:text-base md:text-lg leading-relaxed text-gray-700 font-body-ja">
          劇団さいおうばは2023年3月、明治大学を母体として発足した劇団です。現在の劇団員は4名。「やさしい劇で、むずかしい話をしたい。」をテーマに、喜劇的な枠組みの中での社会問題の提起に取り組んでいます。劇団名は故事成語の「人間万事塞翁が馬」から取りました。「人生は喜劇か悲劇一辺倒ではなく、ふとしたきっかけでどちらにもなりうる。」私達はそんな表裏一体のどちらに転ぶかわからないような劇を作りたいと考えています。劇団のロゴである《蹄鉄》は馬の蹄に付ける金具であり、上部が開いている形状から幸せを受け止めるアイテムと言われています。
        </p>
      </div>
    </div>
  );
}
