module.exports = {
  delay: 20,
  qbittorrentUrl: "http://qbittorrent.downloads.svc.cluster.local:8080",
  torznab: [
    "http://prowlarr.downloads.svc.cluster.local:9696/1/api?apikey={{ .API_KEY }}",  // fl
    "http://prowlarr.downloads.svc.cluster.local:9696/2/api?apikey={{ .API_KEY }}",  // avz
    "http://prowlarr.downloads.svc.cluster.local:9696/8/api?apikey={{ .API_KEY }}",  // ptp
    "http://prowlarr.downloads.svc.cluster.local:9696/11/api?apikey={{ .API_KEY }}", // btn
    "http://prowlarr.downloads.svc.cluster.local:9696/20/api?apikey={{ .API_KEY }}", // tl
    "http://prowlarr.downloads.svc.cluster.local:9696/21/api?apikey={{ .API_KEY }}", // blu
    "http://prowlarr.downloads.svc.cluster.local:9696/26/api?apikey={{ .API_KEY }}", // mtv
    "http://prowlarr.downloads.svc.cluster.local:9696/40/api?apikey={{ .API_KEY }}", // uhdb
    "http://prowlarr.downloads.svc.cluster.local:9696/42/api?apikey={{ .API_KEY }}", // phd
    "http://prowlarr.downloads.svc.cluster.local:9696/45/api?apikey={{ .API_KEY }}", // bhd
    "http://prowlarr.downloads.svc.cluster.local:9696/47/api?apikey={{ .API_KEY }}", // ar
    "http://prowlarr.downloads.svc.cluster.local:9696/48/api?apikey={{ .API_KEY }}", // ant
    "http://prowlarr.downloads.svc.cluster.local:9696/49/api?apikey={{ .API_KEY }}", // athr
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
