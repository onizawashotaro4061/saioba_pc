export interface PodcastUpdate {
  // 最終更新日時（ISO 8601形式）
  // 新しいエピソードを追加したら、この値を更新してください
  lastUpdate: string;
  // 最新エピソードのURL
  latestEpisode: {
    youtube: string;
    spotify: string;
    applePodcast: string;
    amazonMusic: string;
  };
}

export const podcastData: PodcastUpdate = {
  // 初回配信日: 2026/08/09
  lastUpdate: "2026-08-09T18:00:00+09:00",
  // 最新エピソードのURL（新しいエピソードを追加したら、これらのURLを更新してください）
  latestEpisode: {
    youtube: "https://youtu.be/_Wr7wO2mRH8?si=XSqGOhNaYASc6PIx",
    spotify: "https://open.spotify.com/episode/07J4WPBaNpkdI7R4BiJHNe?si=m47Z1lP5SOWY5kW2gptqZw",
    applePodcast: "https://podcasts.apple.com/jp/podcast/%E3%83%9D%E3%82%B1%E3%83%A2%E3%83%B3%E3%81%AE%E6%AC%A1%E3%81%AF%E4%BD%8D%E7%89%8C%E3%81%8C%E3%81%8F%E3%82%8B/id6805816464?i=1000786234832",
    amazonMusic: "https://music.amazon.co.jp/podcasts/095e2c54-95fa-4fa5-b8ee-66ef5958dd8c/episodes/2eb5a084-3ea5-494e-965e-9395548e1ec2/%E3%81%BB%E3%82%89%E3%81%B5%E3%81%8D%E3%81%95%E3%81%84%E3%81%8A%E3%81%86%E3%81%B0-%E3%83%9D%E3%82%B1%E3%83%A2%E3%83%B3%E3%81%AE%E6%AC%A1%E3%81%AF%E4%BD%8D%E7%89%8C%E3%81%8C%E3%81%8F%E3%82%8B%EF%BC%81",
  },
};
