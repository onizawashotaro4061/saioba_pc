"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { podcastData } from "@/data/podcastData";

const STORAGE_KEY = "podcast_last_seen";

export default function PodcastNotification() {
  const [hasNewEpisode, setHasNewEpisode] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    // クライアントサイドでのみ実行
    setIsMounted(true);

    // localStorageから最終閲覧日時を取得
    const lastSeen = localStorage.getItem(STORAGE_KEY);
    const lastUpdate = new Date(podcastData.lastUpdate).getTime();

    if (!lastSeen) {
      // 初回訪問時は通知表示
      setHasNewEpisode(true);
    } else {
      // 最終閲覧日時より新しい更新があるか確認（リセット機能）
      const lastSeenTime = new Date(lastSeen).getTime();
      setHasNewEpisode(lastUpdate > lastSeenTime);
    }
  }, []);

  const handleClick = () => {
    // アイコンクリック時に既読化（波動を消す）
    const currentTime = new Date().toISOString();
    localStorage.setItem(STORAGE_KEY, currentTime);
    setHasNewEpisode(false);
  };

  // SSR時とクライアントサイドの不一致を防ぐため、マウント前は何も表示しない
  if (!isMounted) {
    return null;
  }

  return (
    <Link
      href="/podcast"
      onClick={handleClick}
      className="fixed bottom-3 left-3 sm:bottom-5 sm:left-5 z-50 group"
      aria-label="ポッドキャスト"
    >
      <div className="relative">
        {/* 音波リングアニメーション（未読時のみ表示） */}
        <span
          className={`absolute inset-0 animate-ping transition-opacity duration-300 ${
            hasNewEpisode ? 'opacity-75' : 'opacity-0 pointer-events-none'
          }`}
        >
          <svg
            className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 text-blue-500"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <circle cx="12" cy="12" r="10" />
          </svg>
        </span>

        {/* メインアイコン（常に表示） */}
        <div className="relative bg-blue-500 rounded-full p-2 sm:p-2.5 md:p-3 shadow-lg hover:bg-blue-600 transition-all duration-300 hover:scale-110">
          <svg
            className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* マイクアイコン */}
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"
            />
          </svg>

          {/* 青ドット（未読時のみ表示） */}
          <span
            className={`absolute -top-1 -right-1 w-3 h-3 sm:w-3.5 sm:h-3.5 bg-blue-600 border-2 border-white rounded-full transition-opacity duration-300 ${
              hasNewEpisode ? 'opacity-100' : 'opacity-0'
            }`}
          ></span>
        </div>
      </div>
    </Link>
  );
}
