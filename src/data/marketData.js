export const indices = [
  { symbol: 'SPX', name: 'S&P 500', region: 'United States', price: 5728.42, change: 18.26, changePercent: 0.32, status: 'Open', spark: [5680, 5694, 5688, 5702, 5710, 5704, 5718, 5722, 5716, 5728] },
  { symbol: 'IXIC', name: 'NASDAQ', region: 'United States', price: 18104.77, change: 86.41, changePercent: 0.48, status: 'Open', spark: [17890, 17940, 17910, 17980, 18020, 17995, 18055, 18080, 18070, 18105] },
  { symbol: 'DJI', name: 'Dow Jones', region: 'United States', price: 42208.16, change: -42.88, changePercent: -0.10, status: 'Open', spark: [42310, 42280, 42295, 42240, 42260, 42220, 42245, 42210, 42230, 42208] },
  { symbol: 'UKX', name: 'FTSE 100', region: 'United Kingdom', price: 8314.55, change: 24.10, changePercent: 0.29, status: 'Closed', spark: [8260, 8274, 8268, 8288, 8296, 8290, 8302, 8308, 8300, 8315] },
  { symbol: 'NKY', name: 'Nikkei 225', region: 'Japan', price: 38642.18, change: -118.64, changePercent: -0.31, status: 'Closed', spark: [38840, 38810, 38770, 38790, 38740, 38720, 38690, 38710, 38660, 38642] },
  { symbol: 'SENSEX', name: 'BSE Sensex', region: 'India', price: 81742.36, change: 312.84, changePercent: 0.38, status: 'Closed', spark: [81120, 81280, 81240, 81410, 81520, 81480, 81610, 81680, 81640, 81742] },
]

export const stocks = [
  { symbol: 'AAPL', name: 'Apple Inc.', sector: 'Technology', price: 228.47, change: 1.84, changePercent: 0.81, volume: 52400000, marketCap: 3480000000000, pe: 34.2, high: 232.1, low: 225.8, color: '#a3a3a3', spark: [221, 223, 222, 225, 226, 224, 227, 226, 228, 228.47] },
  { symbol: 'NVDA', name: 'NVIDIA Corp.', sector: 'Technology', price: 124.62, change: 3.41, changePercent: 2.81, volume: 312400000, marketCap: 3060000000000, pe: 58.4, high: 126.9, low: 120.4, color: '#76b900', spark: [116, 118, 117, 119, 121, 120, 122, 123, 122, 124.62] },
  { symbol: 'MSFT', name: 'Microsoft Corp.', sector: 'Technology', price: 428.15, change: 2.06, changePercent: 0.48, volume: 18600000, marketCap: 3180000000000, pe: 36.1, high: 431.2, low: 424.5, color: '#00a4ef', spark: [418, 420, 419, 422, 424, 423, 426, 425, 427, 428.15] },
  { symbol: 'AMZN', name: 'Amazon.com Inc.', sector: 'Consumer', price: 191.28, change: -1.12, changePercent: -0.58, volume: 41200000, marketCap: 2010000000000, pe: 42.8, high: 194.6, low: 189.7, color: '#ff9900', spark: [194, 193, 194.2, 192.8, 193.4, 192.1, 191.8, 192.4, 191.6, 191.28] },
  { symbol: 'TSLA', name: 'Tesla Inc.', sector: 'Automotive', price: 248.90, change: 6.74, changePercent: 2.78, volume: 98400000, marketCap: 796000000000, pe: 71.3, high: 252.4, low: 241.1, color: '#cc0000', spark: [236, 238, 237, 241, 243, 242, 245, 246, 244, 248.9] },
  { symbol: 'META', name: 'Meta Platforms', sector: 'Technology', price: 572.44, change: -3.28, changePercent: -0.57, volume: 14200000, marketCap: 1450000000000, pe: 26.9, high: 579.2, low: 568.4, color: '#0668e1', spark: [580, 578, 579, 576, 577, 574, 575, 573, 574, 572.44] },
  { symbol: 'GOOGL', name: 'Alphabet Inc.', sector: 'Technology', price: 168.32, change: 0.94, changePercent: 0.56, volume: 22100000, marketCap: 2080000000000, pe: 23.5, high: 170.1, low: 166.8, color: '#4285f4', spark: [164, 165, 164.6, 166, 166.8, 166.2, 167.4, 167.1, 167.8, 168.32] },
  { symbol: 'JPM', name: 'JPMorgan Chase', sector: 'Finance', price: 214.76, change: 1.22, changePercent: 0.57, volume: 9800000, marketCap: 618000000000, pe: 12.4, high: 216.3, low: 212.4, color: '#117aca', spark: [210, 211, 210.6, 212, 212.8, 212.2, 213.6, 213.4, 214.1, 214.76] },
  { symbol: 'V', name: 'Visa Inc.', sector: 'Finance', price: 312.08, change: 0.46, changePercent: 0.15, volume: 5400000, marketCap: 612000000000, pe: 30.1, high: 314.2, low: 309.8, color: '#1a1f71', spark: [309, 310, 309.4, 310.8, 311.2, 310.6, 311.6, 311.2, 311.8, 312.08] },
  { symbol: 'JNJ', name: 'Johnson & Johnson', sector: 'Healthcare', price: 164.22, change: -0.38, changePercent: -0.23, volume: 7200000, marketCap: 396000000000, pe: 15.8, high: 165.9, low: 163.4, color: '#d51900', spark: [165.4, 165.1, 165.6, 164.8, 165, 164.5, 164.7, 164.3, 164.5, 164.22] },
  { symbol: 'XOM', name: 'Exxon Mobil', sector: 'Energy', price: 118.54, change: 1.68, changePercent: 1.44, volume: 16800000, marketCap: 528000000000, pe: 13.6, high: 119.8, low: 116.2, color: '#e11d1d', spark: [114.8, 115.4, 115.1, 116.2, 116.8, 116.4, 117.6, 117.2, 118, 118.54] },
  { symbol: 'NFLX', name: 'Netflix Inc.', sector: 'Media', price: 712.35, change: 8.92, changePercent: 1.27, volume: 4100000, marketCap: 306000000000, pe: 44.2, high: 718.6, low: 701.2, color: '#e50914', spark: [688, 694, 691, 698, 702, 700, 706, 708, 705, 712.35] },
]

export const initialHoldings = [
  { symbol: 'AAPL', qty: 24, avgCost: 198.4 },
  { symbol: 'MSFT', qty: 12, avgCost: 378.2 },
  { symbol: 'NVDA', qty: 18, avgCost: 96.15 },
  { symbol: 'JPM', qty: 15, avgCost: 186.5 },
  { symbol: 'AMZN', qty: 10, avgCost: 168.9 },
]

export const performanceSeries = [
  { month: 'Oct', value: 84200 },
  { month: 'Nov', value: 86840 },
  { month: 'Dec', value: 85110 },
  { month: 'Jan', value: 89460 },
  { month: 'Feb', value: 91280 },
  { month: 'Mar', value: 88740 },
  { month: 'Apr', value: 93620 },
  { month: 'May', value: 97410 },
  { month: 'Jun', value: 96180 },
  { month: 'Jul', value: 100860 },
  { month: 'Aug', value: 104220 },
  { month: 'Sep', value: 108940 },
]

export const newsArticles = [
  {
    id: 1,
    category: 'Markets',
    date: 'Sep 23, 2026',
    title: 'Global equities extend rally as inflation cools and rate-cut bets rise',
    excerpt: 'Benchmarks across the US, Europe, and Asia advanced after cooler-than-expected inflation prints revived hopes of an earlier policy pivot.',
    body: 'Investors rotated back into growth names as Treasury yields eased and the dollar softened. Strategists noted that breadth improved beyond megacap technology, with industrials and financials participating in the advance. Still, traders remain cautious ahead of next week’s central-bank commentary and a dense slate of earnings from chipmakers and retailers.',
    accent: 'from-mint/30 to-cyan-500/10',
  },
  {
    id: 2,
    category: 'Technology',
    date: 'Sep 22, 2026',
    title: 'Semiconductor demand stays firm as AI infrastructure spend accelerates',
    excerpt: 'Foundries and GPU suppliers reported another quarter of sold-out capacity, keeping the AI hardware trade in focus for institutional desks.',
    body: 'Data-center operators continued to lock in multi-year supply agreements, supporting elevated valuations across the semiconductor complex. Analysts highlighted that memory pricing has also firmed, a sign that the cycle is broadening. Volatility around export rules remains a near-term risk, but order books look durable into the next fiscal year.',
    accent: 'from-sky-400/25 to-indigo-500/10',
  },
  {
    id: 3,
    category: 'Energy',
    date: 'Sep 21, 2026',
    title: 'Crude prices climb on tighter inventories and OPEC+ discipline',
    excerpt: 'Oil futures gained after weekly inventory data showed a larger-than-expected draw, while producers kept output guidance unchanged.',
    body: 'Energy majors outperformed as traders priced a firmer supply-demand balance into year-end. Refining margins improved on the US Gulf Coast, and natural-gas prices ticked higher with cooler forecasts. Portfolio managers said the move is constructive for dividend growers in the sector, though geopolitical headlines could keep swings elevated.',
    accent: 'from-amber-400/25 to-orange-600/10',
  },
  {
    id: 4,
    category: 'Policy',
    date: 'Sep 20, 2026',
    title: 'Central banks signal patience as labor markets gradually rebalance',
    excerpt: 'Officials emphasized data dependence, leaving the door open to further easing if growth cools without a sharp rise in unemployment.',
    body: 'Minutes from the latest policy meeting showed a split between members who want to wait for clearer inflation progress and those concerned about lagging effects of prior tightening. Bond markets priced a slower path of cuts, while equity volatility stayed contained. Currency desks watched for any shift in guidance around balance-sheet runoff.',
    accent: 'from-violet-400/25 to-fuchsia-500/10',
  },
  {
    id: 5,
    category: 'Earnings',
    date: 'Sep 19, 2026',
    title: 'Consumer platforms beat on ads while retail guidance stays mixed',
    excerpt: 'Digital ad budgets surprised to the upside, but brick-and-mortar chains struck a cautious tone on holiday inventory and freight costs.',
    body: 'Large platforms pointed to better conversion and healthier brand spend, lifting estimates for the fourth quarter. Discretionary retailers were more guarded, citing selective shoppers and promotional intensity. Analysts expect a wider gap between digitally native winners and stores still digesting excess inventory from last season.',
    accent: 'from-rose-400/20 to-pink-500/10',
  },
  {
    id: 6,
    category: 'Currencies',
    date: 'Sep 18, 2026',
    title: 'Dollar slips as traders reassess the growth gap with Europe and Asia',
    excerpt: 'A softer greenback supported emerging-market assets and gold, while exporters in Japan and Germany caught a modest bid.',
    body: 'Cross-asset desks described the move as an orderly unwind of crowded dollar-long positioning rather than a regime change. Real yields eased, helping duration-sensitive growth stocks. Positioning data still shows a relatively firm dollar bias, so further declines may need confirmation from incoming activity data.',
    accent: 'from-emerald-400/20 to-teal-500/10',
  },
]

export const whyChoose = [
  {
    title: 'Secure trading',
    text: 'Bank-grade encryption, biometric login, and isolated settlement rails keep every order and holding protected.',
  },
  {
    title: 'Real-time market insights',
    text: 'Live indices, streaming quotes, and curated news so you can act while the tape is still moving.',
  },
  {
    title: 'Easy-to-use platform',
    text: 'A clean workspace for watchlists, orders, and portfolios — built for first trades and active desks alike.',
  },
  {
    title: 'Advanced analytics',
    text: 'Performance charts, cost-basis tracking, and sector breakdowns that turn raw prices into decisions.',
  },
]

export const sectors = ['All', 'Technology', 'Finance', 'Consumer', 'Automotive', 'Healthcare', 'Energy', 'Media']

export const getStock = (symbol) => stocks.find((s) => s.symbol === symbol)
