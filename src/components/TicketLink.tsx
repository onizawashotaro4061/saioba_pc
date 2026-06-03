'use client'; // クライアントコンポーネントとして定義

import Link from "next/link";

export default function TicketLink() {
  const handleClick = () => {
    if (typeof window !== "undefined" && (window as any).gtag) {
      (window as any).gtag("event", "ticket_click", {
        event_category: "conversion",
        event_label: "CoRich予約リンク",
      });
    }
  };

  return (
    <div className="text-center">
      <Link
        href="https://ticket.corich.jp/apply/456782/"
        target="_blank"
        rel="noopener noreferrer"
        onClick={handleClick}
        className="inline-block bg-sky-500 text-white px-6 sm:px-8 py-2 sm:py-3 rounded-md hover:bg-opacity-80 transition text-sm sm:text-base md:text-lg font-body-en"
      >
        ご予約はこちらから
      </Link>
    </div>
  );
}