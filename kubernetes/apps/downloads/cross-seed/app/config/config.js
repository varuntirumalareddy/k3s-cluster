module.exports = {
  delay: 20,
  qbittorrentUrl: "http://qbittorrent.downloads.svc.cluster.local",
  torznab: [
    "http://prowlarr.downloads.svc.cluster.local/1/api?apikey={{ .PROWLARR__API_KEY }}",  // fl
    "http://prowlarr.downloads.svc.cluster.local/2/api?apikey={{ .PROWLARR__API_KEY }}",  // avz
    "http://prowlarr.downloads.svc.cluster.local/8/api?apikey={{ .PROWLARR__API_KEY }}",  // ptp
    "http://prowlarr.downloads.svc.cluster.local/11/api?apikey={{ .PROWLARR__API_KEY }}", // btn
    "http://prowlarr.downloads.svc.cluster.local/20/api?apikey={{ .PROWLARR__API_KEY }}", // tl
    "http://prowlarr.downloads.svc.cluster.local/21/api?apikey={{ .PROWLARR__API_KEY }}", // blu
    "http://prowlarr.downloads.svc.cluster.local/26/api?apikey={{ .PROWLARR__API_KEY }}", // mtv
    "http://prowlarr.downloads.svc.cluster.local/40/api?apikey={{ .PROWLARR__API_KEY }}", // uhdb
    "http://prowlarr.downloads.svc.cluster.local/42/api?apikey={{ .PROWLARR__API_KEY }}", // phd
    "http://prowlarr.downloads.svc.cluster.local/45/api?apikey={{ .PROWLARR__API_KEY }}", // bhd
    "http://prowlarr.downloads.svc.cluster.local/47/api?apikey={{ .PROWLARR__API_KEY }}", // ar
    "http://prowlarr.downloads.svc.cluster.local/48/api?apikey={{ .PROWLARR__API_KEY }}", // ant
    "http://prowlarr.downloads.svc.cluster.local/49/api?apikey={{ .PROWLARR__API_KEY }}", // athr
  ],
  action: "inject",
  includeEpisodes: true,
  includeNonVideos: true,
  duplicateCategories: true,
  matchMode: "safe",
  skipRecheck: true,
  linkType: "hardlink",
  linkDir: "/media/Downloads/qbittorrent/complete/cross-seed",
  dataDirs: [
    "/media/Downloads/qbittorrent/complete/prowlarr",
    "/media/Downloads/qbittorrent/complete/radarr",
    "/media/Downloads/qbittorrent/complete/sonarr",
  ],
  maxDataDepth: 1,
  outputDir: "/config/xseeds",
  torrentDir: "/config/qBittorrent/BT_backup",
};
