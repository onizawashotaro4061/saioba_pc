export interface PodcastUpdate {
  // 最終更新日時（ISO 8601形式）
  // 新しいエピソードを追加したら、この値を更新してください
  lastUpdate: string;
}

export const podcastData: PodcastUpdate = {
  // 初回配信日: 2026/08/09
  lastUpdate: "2026-08-09T18:00:00+09:00",
};
