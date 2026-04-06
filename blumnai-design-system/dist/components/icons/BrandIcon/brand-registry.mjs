"use client";
import { lazy as t } from "react";
const d = {}, c = {}, i = {
  "brands-a": () => import("./icons/brands-a.mjs"),
  "brands-bc": () => import("./icons/brands-bc.mjs"),
  "brands-de": () => import("./icons/brands-de.mjs"),
  "brands-fg": () => import("./icons/brands-fg.mjs"),
  "brands-hm": () => import("./icons/brands-hm.mjs"),
  "brands-np": () => import("./icons/brands-np.mjs"),
  "brands-rs": () => import("./icons/brands-rs.mjs"),
  "brands-tz": () => import("./icons/brands-tz.mjs")
}, b = {
  adobe: ["brands-a", "BrandAdobeIcon"],
  "affinity designer": ["brands-a", "BrandAffinityDesignerIcon"],
  "after effects": ["brands-a", "BrandAfterEffectsIcon"],
  airbnb: ["brands-a", "BrandAirbnbIcon"],
  algorand: ["brands-a", "BrandAlgorandIcon"],
  aliexpress: ["brands-a", "BrandAliExpressIcon"],
  android: ["brands-a", "BrandAndroidIcon"],
  angular: ["brands-a", "BrandAngularIcon"],
  apple: ["brands-a", "BrandAppleIcon"],
  "apple music": ["brands-a", "BrandAppleMusicIcon"],
  arc: ["brands-a", "BrandArcIcon"],
  "arc browser": ["brands-a", "BrandArcBrowserIcon"],
  asana: ["brands-a", "BrandAsanaIcon"],
  binance: ["brands-bc", "BrandBinanceIcon"],
  bing: ["brands-bc", "BrandBingIcon"],
  bitcoin: ["brands-bc", "BrandBitcoinIcon"],
  blender: ["brands-bc", "BrandBlenderIcon"],
  bluesky: ["brands-bc", "BrandBlueskyIcon"],
  bnb: ["brands-bc", "BrandBNBIcon"],
  bootstrap: ["brands-bc", "BrandBootstrapIcon"],
  canva: ["brands-bc", "BrandCanvaIcon"],
  "cash app": ["brands-bc", "BrandCashAppIcon"],
  chatgpt: ["brands-bc", "BrandChatGPTIcon"],
  chrome: ["brands-bc", "BrandChromeIcon"],
  chromium: ["brands-bc", "BrandChromiumIcon"],
  claude: ["brands-bc", "BrandClaudeIcon"],
  clerk: ["brands-bc", "BrandClerkIcon"],
  cody: ["brands-bc", "BrandCodyIcon"],
  coinbase: ["brands-bc", "BrandCoinbaseIcon"],
  copilot: ["brands-bc", "BrandCopilotIcon"],
  "custom ai": ["brands-bc", "BrandCustomAIIcon"],
  deepseek: ["brands-de", "BrandDeepseekIcon"],
  digitalocean: ["brands-de", "BrandDigitalOceanIcon"],
  discord: ["brands-de", "BrandDiscordIcon"],
  docker: ["brands-de", "BrandDockerIcon"],
  doge: ["brands-de", "BrandDogeIcon"],
  dotenv: ["brands-de", "BrandDotenvIcon"],
  dropbox: ["brands-de", "BrandDropboxIcon"],
  dub: ["brands-de", "BrandDubIcon"],
  edge: ["brands-de", "BrandEdgeIcon"],
  elysiajs: ["brands-de", "BrandElysiaJSIcon"],
  ethereum: ["brands-de", "BrandEthereumIcon"],
  facebook: ["brands-fg", "BrandFacebookIcon"],
  figma: ["brands-fg", "BrandFigmaIcon"],
  firefox: ["brands-fg", "BrandFirefoxIcon"],
  framer: ["brands-fg", "BrandFramerIcon"],
  gimp: ["brands-fg", "BrandGimpIcon"],
  github: ["brands-fg", "BrandGitHubIcon"],
  gitlab: ["brands-fg", "BrandGitLabIcon"],
  gnail: ["brands-fg", "BrandGnailIcon"],
  google: ["brands-fg", "BrandGoogleIcon"],
  "google drive": ["brands-fg", "BrandGoogleDriveIcon"],
  hashnode: ["brands-hm", "BrandHashnodeIcon"],
  illustrator: ["brands-hm", "BrandIllustratorIcon"],
  instatus: ["brands-hm", "BrandInstatusIcon"],
  json: ["brands-hm", "BrandJSONIcon"],
  layers: ["brands-hm", "BrandLayersIcon"],
  "leap wallet": ["brands-hm", "BrandLeapWalletIcon"],
  "lemon squeezy": ["brands-hm", "BrandLemonSqueezyIcon"],
  lightroom: ["brands-hm", "BrandLightroomIcon"],
  linear: ["brands-hm", "BrandLinearIcon"],
  link: ["brands-hm", "BrandLink__398336695Icon"],
  "link _4146131087": ["brands-hm", "BrandLink__4146131087Icon"],
  litecoin: ["brands-hm", "BrandLitecoinIcon"],
  mastercard: ["brands-hm", "BrandMastercardIcon"],
  mastodon: ["brands-hm", "BrandMastodonIcon"],
  matic: ["brands-hm", "BrandMaticIcon"],
  messenger: ["brands-hm", "BrandMessengerIcon"],
  meta: ["brands-hm", "BrandMetaIcon"],
  metamask: ["brands-hm", "BrandMetamaskIcon"],
  monero: ["brands-hm", "BrandMoneroIcon"],
  nextjs: ["brands-np", "BrandNextJsIcon"],
  notion: ["brands-np", "BrandNotionIcon"],
  obsidian: ["brands-np", "BrandObsidianIcon"],
  onedrive: ["brands-np", "BrandOneDriveIcon"],
  opensea: ["brands-np", "BrandOpenSeaIcon"],
  opera: ["brands-np", "BrandOperaIcon"],
  password: ["brands-np", "BrandPasswordIcon"],
  patreon: ["brands-np", "BrandPatreonIcon"],
  paypal: ["brands-np", "BrandPayPalIcon"],
  perplexity: ["brands-np", "BrandPerplexityIcon"],
  photoshop: ["brands-np", "BrandPhotoshopIcon"],
  pinterest: ["brands-np", "BrandPinterestIcon"],
  pitch: ["brands-np", "BrandPitchIcon"],
  polar: ["brands-np", "BrandPolarIcon"],
  "product hunt": ["brands-np", "BrandProductHuntIcon"],
  raycast: ["brands-rs", "BrandRaycastIcon"],
  react: ["brands-rs", "BrandReactIcon"],
  reddit: ["brands-rs", "BrandRedditIcon"],
  ruby: ["brands-rs", "BrandRubyIcon"],
  safari: ["brands-rs", "BrandSafariIcon"],
  shopify: ["brands-rs", "BrandShopifyIcon"],
  sketch: ["brands-rs", "BrandSketchIcon"],
  skype: ["brands-rs", "BrandSkypeIcon"],
  solana: ["brands-rs", "BrandSolanaIcon"],
  "sort ui": ["brands-rs", "BrandSortUIIcon"],
  spotify: ["brands-rs", "BrandSpotifyIcon"],
  steam: ["brands-rs", "BrandSteamIcon"],
  supabase: ["brands-rs", "BrandSupabaseIcon"],
  swift: ["brands-rs", "BrandSwiftIcon"],
  "tailwind css": ["brands-tz", "BrandTailwindCSSIcon"],
  telegram: ["brands-tz", "BrandTelegramIcon"],
  tether: ["brands-tz", "BrandTetherIcon"],
  threads: ["brands-tz", "BrandThreadsIcon"],
  todoist: ["brands-tz", "BrandTodoistIcon"],
  ton: ["brands-tz", "BrandTonIcon"],
  tron: ["brands-tz", "BrandTronIcon"],
  trust: ["brands-tz", "BrandTrustIcon"],
  twitch: ["brands-tz", "BrandTwitchIcon"],
  "unreal engine": ["brands-tz", "BrandUnrealEngineIcon"],
  v0: ["brands-tz", "BrandV0Icon"],
  vercel: ["brands-tz", "BrandVercelIcon"],
  visa: ["brands-tz", "BrandVisaIcon"],
  vue: ["brands-tz", "BrandVueIcon"],
  webflow: ["brands-tz", "BrandWebflowIcon"],
  whop: ["brands-tz", "BrandWhopIcon"],
  windows: ["brands-tz", "BrandWindowsIcon"],
  wordpress: ["brands-tz", "BrandWordPressIcon"],
  xrp: ["brands-tz", "BrandXRPIcon"],
  youtube: ["brands-tz", "BrandYoutubeIcon"]
};
function B(n) {
  if (d[n]) return Promise.resolve(d[n]);
  if (!c[n]) {
    const r = i[n];
    if (!r) return Promise.reject(new Error(`Unknown chunk: ${n}`));
    c[n] = r().then((a) => (d[n] = a, d[n]));
  }
  return c[n];
}
const e = {};
function p(n) {
  const r = b[n];
  if (!r) return null;
  const [a, s] = r, o = d[a];
  return o && o[s] || null;
}
function l(n) {
  const r = b[n];
  if (!r) return null;
  if (!e[n]) {
    const [a, s] = r;
    e[n] = t(
      () => B(a).then((o) => ({
        default: o[s]
      }))
    );
  }
  return e[n];
}
function m(n) {
  return n in b;
}
export {
  l as getBrandLazy,
  p as getBrandSync,
  m as hasBrand
};
