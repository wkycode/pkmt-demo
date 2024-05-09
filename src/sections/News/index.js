import axios from "axios"
import { useEffect, useState } from "react"
import NewsSwiper from "./NewsSwiper"
import { Box, Typography } from "@mui/material"

const news = [
  {
    url: "https://www.coindesk.com/business/2024/05/09/ledn-first-quarter-loans-top-690m-as-lending-market-snaps-back/?utm_medium=referral&utm_source=rss&utm_campaign=headlines",
    title:
      "Ledn First-Quarter Loans Top Record $690M as Lending Market Snaps Back",
    description:
      "Crypto lender Ledn processed more than $690 million in loans during the first quarter, its most successful quarter since the firm's inception in 2018.",
    thumbnail:
      "https://www.coindesk.com/resizer/exQN_wVFi9fMIW6BxdvFLYHMgbc=/800x600/cloudfront-us-east-1.images.arcpublishing.com/coindesk/KBAZ3SD7D5GXBDZKOBPOGJ3TYA.jpg",
    createdAt: "Thu, 09 May 2024 13:00:00 +0000",
  },
  {
    url: "https://www.coindesk.com/markets/2024/05/09/first-mover-americas-crypto-market-slides-as-rebound-seen-delayed/?utm_medium=referral&utm_source=rss&utm_campaign=headlines",
    title: "First Mover Americas: Crypto Market Slides as Rebound Seen Delayed",
    description:
      "The latest price moves in bitcoin (BTC) and crypto markets in context for May 9, 2024. First Mover is CoinDesk’s daily newsletter that contextualizes the latest actions in the crypto markets.",
    thumbnail:
      "https://www.coindesk.com/resizer/yzfYh7DH0S5_kNlI4BC9KB3F8PQ=/800x600/cloudfront-us-east-1.images.arcpublishing.com/coindesk/B435A7ZW4JCQLHFEM4ERL4KU5M.JPG",
    createdAt: "Thu, 09 May 2024 12:15:34 +0000",
  },
  {
    url: "https://www.coindesk.com/business/2024/05/09/binance-fired-investigator-who-uncovered-market-manipulation-at-client-dwf-labs-wsj/?utm_medium=referral&utm_source=rss&utm_campaign=headlines",
    title:
      "Binance Fired Investigator Who Uncovered Market Manipulation at Client DWF Labs: WSJ",
    description:
      'A Binance team found that "VIP" clients – those trading more than $100 million per month – were engaging in pump-and-dump schemes and wash trading, the Wall Street Journal said.',
    thumbnail:
      "https://www.coindesk.com/resizer/pkwEop5zEPhpxqF1bpnNTeTaJiU=/800x600/cloudfront-us-east-1.images.arcpublishing.com/coindesk/EIW5CWDH7ZCXTHVND2CBAF5CVU.jpg",
    createdAt: "Thu, 09 May 2024 10:51:31 +0000",
  },
  {
    url: "https://www.coindesk.com/markets/2024/05/09/robinhood-delivers-big-earnings-beat-driven-by-booming-crypto-trading-analysts/?utm_medium=referral&utm_source=rss&utm_campaign=headlines",
    title:
      "Robinhood Delivers Big Earnings Beat Driven by Booming Crypto Trading: Analysts",
    description:
      "The positive momentum seen in the first quarter has continued, with the platform taking in a record $5 billion in deposits in April, the analysts said.",
    thumbnail:
      "https://www.coindesk.com/resizer/nu3PE9lgpb9vujZHBi20-GxRrag=/800x600/cloudfront-us-east-1.images.arcpublishing.com/coindesk/VDHXA3YH6REPPPUYQ4BMUBAR6I.jpg",
    createdAt: "Thu, 09 May 2024 10:15:00 +0000",
  },
  {
    url: "https://www.coindesk.com/markets/2024/05/09/meme-coin-demand-is-stronger-than-ever-crypto-data-tracker-says/?utm_medium=referral&utm_source=rss&utm_campaign=headlines",
    title: "Meme Coin Demand Is Stronger Than Ever, Crypto Analyst Says",
    description: "",
    thumbnail:
      "https://www.coindesk.com/resizer/Bi_i8uu514Nj6SLc0eBZedhO1tA=/800x600/cloudfront-us-east-1.images.arcpublishing.com/coindesk/6TGCS623NFCSTA2TUCJSZNQNUQ.jpg",
    createdAt: "Thu, 09 May 2024 10:04:40 +0000",
  },
  {
    url: "https://www.coindesk.com/tech/2024/05/09/protocol-village/?utm_medium=referral&utm_source=rss&utm_campaign=headlines",
    title:
      "Protocol Village: Gnosis Inks Strategic Partnership with Zeal, Invests $2M ",
    description:
      "The latest in blockchain tech upgrades, funding announcements and deals. For the period of May 9-15.",
    thumbnail:
      "https://www.coindesk.com/resizer/K2QJCakRCo3ZnZ2S1iCmcf6_t2s=/800x600/cloudfront-us-east-1.images.arcpublishing.com/coindesk/UK44TNET4ZFIFAX2JQSWJQJSTU.jpeg",
    createdAt: "Thu, 09 May 2024 10:00:00 +0000",
  },
  {
    url: "https://www.coindesk.com/markets/2024/05/09/vanecks-marketvector-starts-index-to-track-the-largest-meme-coins/?utm_medium=referral&utm_source=rss&utm_campaign=headlines",
    title: "VanEck's MarketVector Starts Index to Track the Largest Meme Coins",
    description:
      "The index contains a variety of dog-themed coins and other popular meme tokens.",
    thumbnail:
      "https://www.coindesk.com/resizer/3usnhw0Igtffk6PK7-5SZ6tVK6I=/800x600/cloudfront-us-east-1.images.arcpublishing.com/coindesk/73X6DACWJZC4HMKXKLYS2RTWPA.jpg",
    createdAt: "Thu, 09 May 2024 07:31:48 +0000",
  },
  {
    url: "https://www.coindesk.com/markets/2024/05/09/crypto-monthly-trading-volume-drops-for-first-time-in-seven-months-to-658t/?utm_medium=referral&utm_source=rss&utm_campaign=headlines",
    title:
      "Crypto Monthly Trading Volume Drops for First Time in Seven Months to $6.58T",
    description:
      "Bitcoin, the leading cryptocurrency by market value, fell by nearly 15% in April, ending a seven-month winning streak.",
    thumbnail:
      "https://www.coindesk.com/resizer/ipdBz041JYA2t3qYjuIR2MahcZM=/800x600/cloudfront-us-east-1.images.arcpublishing.com/coindesk/BKOGBXYXNZEODPSDCOWMNI2RSE.png",
    createdAt: "Thu, 09 May 2024 07:01:54 +0000",
  },
  {
    url: "https://www.coindesk.com/markets/2024/05/09/boden-memecoin-surges-after-trump-quips-about-it/?utm_medium=referral&utm_source=rss&utm_campaign=headlines",
    title: "'Boden' Memecoin Surges After Trump Quips About It ",
    description: "tk",
    thumbnail:
      "https://www.coindesk.com/resizer/XOC7RcMUpOFxhxm3kutzB_-LuXE=/800x600/cloudfront-us-east-1.images.arcpublishing.com/coindesk/6TXSFP4SO5ENXBH4WUWTFWPJ2U.jpg",
    createdAt: "Thu, 09 May 2024 02:05:46 +0000",
  },
  {
    url: "https://www.coindesk.com/policy/2024/05/09/crypto-wallet-provider-exodus-nyse-american-stock-listing-postponed-for-sec-review/?utm_medium=referral&utm_source=rss&utm_campaign=headlines",
    title:
      "Crypto Wallet Provider Exodus’ NYSE American Stock Listing Postponed for SEC Review ",
    description:
      "Crypto wallet company Exodus Movement will not be listing on NYSE American, the New York Stock Exchange’s sibling market, on Thursday as planned, the company announced late Wednesday.",
    thumbnail:
      "https://www.coindesk.com/resizer/ZBtb_BgHlm0qnNMXmIcQzn8G7e0=/800x600/cloudfront-us-east-1.images.arcpublishing.com/coindesk/JAHJF2ZUJRFMPDENRLQSDH34MY.jpg",
    createdAt: "Thu, 09 May 2024 01:15:02 +0000",
  },
  {
    url: "https://www.coindesk.com/consensus-magazine/2024/05/08/kgothatso-ngako-how-i-brought-the-machankura-bitcoin-app-to-africa/?utm_medium=referral&utm_source=rss&utm_campaign=headlines",
    title:
      "Kgothatso Ngako: How I Brought the Machankura Bitcoin App to Africa",
    description:
      "Ngako is speaker at this year's Consensus festival, in Austin, Texas, May 29-31.",
    thumbnail:
      "https://www.coindesk.com/resizer/zgv4h93ChuZQqRJSxKPxh_zkdBM=/800x600/cloudfront-us-east-1.images.arcpublishing.com/coindesk/LUNSC5C5DZCP3GGQIDZCMTLRJE.jpg",
    createdAt: "Wed, 08 May 2024 21:25:59 +0000",
  },
  {
    url: "https://www.coindesk.com/markets/2024/05/08/crypto-markets-under-pressure-as-2b-worth-of-altcoin-token-unlocks-and-11b-bitcoin-distribution-loom/?utm_medium=referral&utm_source=rss&utm_campaign=headlines",
    title:
      "Crypto Markets Under Pressure as $2B Worth of Altcoin Token Unlocks and $11B Bitcoin Distribution Loom",
    description:
      "Investors should brace for waves of fear, uncertainty and doubt – or FUD – over the next few months, a K33 Research analyst said.",
    thumbnail:
      "https://www.coindesk.com/resizer/jM7N86G03xbVeYSGgB_hq60hdOk=/800x600/cloudfront-us-east-1.images.arcpublishing.com/coindesk/ALCEW7JTRZG2TPTAR34Y4I2X4E.jpg",
    createdAt: "Wed, 08 May 2024 21:16:02 +0000",
  },
  {
    url: "https://www.coindesk.com/consensus-magazine/2024/05/08/the-fccs-net-neutrality-ruling-is-good-news-for-web3-startups/?utm_medium=referral&utm_source=rss&utm_campaign=headlines",
    title: "The FCC’s Net Neutrality Ruling Is Good News for Web3 Startups",
    description:
      "The principle of an open internet underpinned the growth of the early Web and is just as necessary now. If only the SEC could back innovation in a similar way, says Sarah Aberg, General Counsel at Nova Labs, the company behind Helium Mobile.",
    thumbnail:
      "https://www.coindesk.com/resizer/exZUqHkbTkobd1ycFxt3pj_XLtQ=/800x600/cloudfront-us-east-1.images.arcpublishing.com/coindesk/PE5IFYJODNDILGB4OHTDJ56FGQ.jpg",
    createdAt: "Wed, 08 May 2024 20:46:03 +0000",
  },
  {
    url: "https://www.coindesk.com/business/2024/05/08/robinhoods-q1-crypto-trading-volume-surged-224-as-sec-action-looms/?utm_medium=referral&utm_source=rss&utm_campaign=headlines",
    title:
      "Robinhood's Q1 Crypto Trading Volume Surged 224% as SEC Action Looms",
    description:
      "The popular trading platform also beat first quarter revenue and earnings estimates.",
    thumbnail:
      "https://www.coindesk.com/resizer/nu3PE9lgpb9vujZHBi20-GxRrag=/800x600/cloudfront-us-east-1.images.arcpublishing.com/coindesk/VDHXA3YH6REPPPUYQ4BMUBAR6I.jpg",
    createdAt: "Wed, 08 May 2024 20:37:30 +0000",
  },
  {
    url: "https://www.coindesk.com/policy/2024/05/08/house-poised-to-vote-on-erasing-sec-crypto-policy-while-president-biden-vows-veto/?utm_medium=referral&utm_source=rss&utm_campaign=headlines",
    title:
      "House Votes to Erase SEC Crypto Policy While President Biden Vows Veto",
    description:
      "The U.S. House of Representatives is poised to vote on a resolution Wednesday to reject the Securities and Exchange Commission (SEC) cryptocurrency accounting guidance that the industry said has deterred banks from handling crypto customers, but President Joe Biden is already promising he'll veto the effort if it hits his desk.",
    thumbnail:
      "https://www.coindesk.com/resizer/N0pfGafatl38GZd4iEYylsl-L4g=/800x600/cloudfront-us-east-1.images.arcpublishing.com/coindesk/DELYC3T6TBBGBKMQ4QLPUHZ6BI.jpg",
    createdAt: "Wed, 08 May 2024 20:17:37 +0000",
  },
  {
    url: "https://www.coindesk.com/consensus-magazine/2024/05/08/crypto-is-an-election-issue-this-year-is-that-a-good-thing/?utm_medium=referral&utm_source=rss&utm_campaign=headlines",
    title: "Crypto Is an Election Issue This Year. Is That a Good Thing?",
    description:
      "A new DCG-funded survey found one-in-five voters think crypto is a key issue in U.S. elections this November.",
    thumbnail:
      "https://www.coindesk.com/resizer/LPAxuvVZKXzVO3x8UZPxBgXS2uA=/800x600/cloudfront-us-east-1.images.arcpublishing.com/coindesk/JLAMAJHLBNGBBIIX6RCQUQJRXE.jpg",
    createdAt: "Wed, 08 May 2024 19:17:45 +0000",
  },
  {
    url: "https://www.coindesk.com/tech/2024/05/08/the-protocol-from-node-sales-to-address-poisoning-the-moneys-in-crypto/?utm_medium=referral&utm_source=rss&utm_campaign=headlines",
    title:
      "The Protocol: From 'Node Sales' to 'Address Poisoning,' the Money's in Crypto",
    description:
      "In this week's issue of The Protocol newsletter, we dive into the crypto industry's fundraising method du jour – it's all about the decentralization! PLUS: Polyhedra says its ZK prover is 2x faster than anyone else's.",
    thumbnail:
      "https://www.coindesk.com/resizer/qqaJRREwJeFYFnpgdmcqDCX_1uA=/800x600/cloudfront-us-east-1.images.arcpublishing.com/coindesk/IK4RYS2HZNBSDD64WTGKKOIDWY.jpg",
    createdAt: "Wed, 08 May 2024 17:50:00 +0000",
  },
  {
    url: "https://www.coindesk.com/consensus-magazine/2024/05/08/restaking-is-hot-in-ethereum-and-entering-solana-should-we-worry/?utm_medium=referral&utm_source=rss&utm_campaign=headlines",
    title: "Restaking Is Hot in Ethereum and Entering Solana. Should We Worry?",
    description:
      "The Lehman Brothers-driven global financial crisis of 2008 showed the danger of spreading money around too much.",
    thumbnail:
      "https://www.coindesk.com/resizer/WZiszfwSIA37mmGdSmVpf0vGpcY=/800x600/cloudfront-us-east-1.images.arcpublishing.com/coindesk/L4DSEDYOIVCTRNLHYMLE4CDKPU.jpg",
    createdAt: "Wed, 08 May 2024 16:11:13 +0000",
  },
  {
    url: "https://www.coindesk.com/markets/2024/05/08/stablecoin-surge-tethers-headroom-for-growth/?utm_medium=referral&utm_source=rss&utm_campaign=headlines",
    title: "Stablecoin Surge: Tether's Headroom for Growth",
    description:
      "The stablecoin already enjoys a dominant position in stablecoins and its integration with the TON (Telegram) network could boost it further, says Sylvia To, head of partnerships and token research at Bullish.",
    thumbnail:
      "https://www.coindesk.com/resizer/r0ZycVbF55l8KG9a_xyIOt9y4xE=/800x600/cloudfront-us-east-1.images.arcpublishing.com/coindesk/YQDH6YMZ3REDTMIAI4CL7MGVH4.jpg",
    createdAt: "Wed, 08 May 2024 16:00:00 +0000",
  },
  {
    url: "https://www.coindesk.com/markets/2024/05/08/what-technical-analysis-tells-us-about-the-bitcoin-market/?utm_medium=referral&utm_source=rss&utm_campaign=headlines",
    title: "What Technical Analysis Tells Us About the Bitcoin Market",
    description:
      "The recent downturn in BTC may have some way to travel, according to Katie Stockton, Managing Partner of Fairlead Strategies.",
    thumbnail:
      "https://www.coindesk.com/resizer/yPNqiI8hiH0t8etvr-ActFPlnFo=/800x600/cloudfront-us-east-1.images.arcpublishing.com/coindesk/24JADS33CFA6TOIJGFYQJZO73A.jpg",
    createdAt: "Wed, 08 May 2024 16:00:00 +0000",
  },
  {
    url: "https://www.coindesk.com/tech/2024/05/08/thiel-backed-cryptography-startup-lagrange-raises-13m/?utm_medium=referral&utm_source=rss&utm_campaign=headlines",
    title: "Thiel-Backed Cryptography Startup Lagrange Raises $13M",
    description:
      'Lagrange, which specializes in zero-knowledge cryptography, is the latest startup to ride EigenLayer\'s "restaking" wave.',
    thumbnail:
      "https://www.coindesk.com/resizer/DR9LXakm9Zbzk2bSTUc2UHVEvp8=/800x600/cloudfront-us-east-1.images.arcpublishing.com/coindesk/OHTJQSL6YFBSRBMDI7TAPDCJO4.jpg",
    createdAt: "Wed, 08 May 2024 13:00:00 +0000",
  },
  {
    url: "https://www.coindesk.com/tech/2024/05/08/its-not-a-token-offering-its-a-node-sale-sophon-blockchain-raises-60m/?utm_medium=referral&utm_source=rss&utm_campaign=headlines",
    title:
      "It's Not a Token Offering, It's a 'Node Sale': Sophon Blockchain Raises $60M",
    description:
      "The blockchain project's founders aren't even publicly named, but they've enjoyed remarkable success in fundraising, partly thanks to this increasingly popular fundraising method, where the longer you wait, the higher price you pay.",
    thumbnail:
      "https://www.coindesk.com/resizer/DSeZzyXM8Mp8HrpmU7kMEP8aZgg=/800x600/cloudfront-us-east-1.images.arcpublishing.com/coindesk/Y4QOXRPXZBFGTKLNKNBODI7BFU.jpg",
    createdAt: "Wed, 08 May 2024 13:00:00 +0000",
  },
  {
    url: "https://www.coindesk.com/tech/2024/05/08/injective-underperforming-in-crypto-markets-now-plans-layer-3-chain-on-arbitrum/?utm_medium=referral&utm_source=rss&utm_campaign=headlines",
    title:
      "Injective, Underperforming in Crypto Markets, Now Plans Layer-3 Chain on Arbitrum",
    description:
      'Injective’s "inEVM," which connects the Ethereum, Cosmos, and Solana networks, will rely on Arbitrum\'s Orbit toolkit.',
    thumbnail:
      "https://www.coindesk.com/resizer/YnW7MQON-ph0sESbldvZNwcXK9c=/800x600/cloudfront-us-east-1.images.arcpublishing.com/coindesk/SIEDKE7SQVB5BIP4KA4XLDO4PQ.png",
    createdAt: "Wed, 08 May 2024 13:00:00 +0000",
  },
  {
    url: "https://www.coindesk.com/business/2024/05/08/crypto-principal-trader-arbelos-markets-raises-28m-led-by-dragonfly-capital/?utm_medium=referral&utm_source=rss&utm_campaign=headlines",
    title:
      "Crypto Principal Trader Arbelos Markets Raises $28M Led by Dragonfly Capital",
    description:
      "Before starting Arbelos Markets last year, Tang served as chief investment officer at quantitative digital asset investment firm LedgerPrime while Lim was head of trading strategy at Galaxy and head of derivatives at now-defunct crypto lender Genesis.",
    thumbnail:
      "https://www.coindesk.com/resizer/vYOJNCQhSHlSYz5bg2LJONwlgKQ=/800x600/cloudfront-us-east-1.images.arcpublishing.com/coindesk/HO7DT53L4ZA5NPYN7ARAUZK6CQ.jpg",
    createdAt: "Wed, 08 May 2024 12:25:18 +0000",
  },
  {
    url: "https://www.coindesk.com/markets/2024/05/08/first-mover-americas-bitcoin-hovers-above-62k/?utm_medium=referral&utm_source=rss&utm_campaign=headlines",
    title: "First Mover Americas: Bitcoin Hovers Above $62K",
    description:
      "The latest price moves in bitcoin (BTC) and crypto markets in context for May 8, 2024. First Mover is CoinDesk’s daily newsletter that contextualizes the latest actions in the crypto markets.",
    thumbnail:
      "https://www.coindesk.com/resizer/6pjeY6uaZ50y3Ymay6P6liksktU=/800x600/cloudfront-us-east-1.images.arcpublishing.com/coindesk/U4RC43QJVZFPNJWFAYSM4WLTBY.JPG",
    createdAt: "Wed, 08 May 2024 12:01:00 +0000",
  },
  {
    url: "https://www.coindesk.com/policy/2024/05/08/uk-minister-says-government-only-has-time-to-implement-stablecoin-staking-legislation/?utm_medium=referral&utm_source=rss&utm_campaign=headlines",
    title:
      "UK Minister Says Government Only Has Time to Implement Stablecoin, Staking Legislation",
    description:
      "Economic Secretary Bim Afolami said that the government could put through stablecoin and staking legislation in the coming weeks but will outline was is coming later.",
    thumbnail:
      "https://www.coindesk.com/resizer/-OMgOfrQ3ExZLmb2NhnoEw18B8Y=/800x600/cloudfront-us-east-1.images.arcpublishing.com/coindesk/7T3XSYGWLVFILCUPYFAEE3WXVM.png",
    createdAt: "Wed, 08 May 2024 11:41:37 +0000",
  },
  {
    url: "https://www.coindesk.com/markets/2024/05/08/key-bitcoin-indicator-points-to-period-of-calm-in-crypto-market/?utm_medium=referral&utm_source=rss&utm_campaign=headlines",
    title: "Key Bitcoin Indicator Points to Period of Calm in Crypto Market",
    description:
      "BTC's volatility risk premium (VRP) has collapsed in a sign of a market trending towards stability, where future uncertainties are less of a concern.",
    thumbnail:
      "https://www.coindesk.com/resizer/4znkHKjuFwljEQF2rOZLwnUXDfQ=/800x600/cloudfront-us-east-1.images.arcpublishing.com/coindesk/PM6WENBCP5FINAFJXOKEWNOKRQ.jpg",
    createdAt: "Wed, 08 May 2024 11:08:23 +0000",
  },
  {
    url: "https://www.coindesk.com/business/2024/05/08/japanese-crypto-exchange-coincheck-sees-nasdaq-listing-completion-in-second-third-quarters/?utm_medium=referral&utm_source=rss&utm_campaign=headlines",
    title:
      "Japanese Crypto Exchange Coincheck Sees Nasdaq Listing Completion in Second, Third Quarters",
    description:
      "Coincheck said the timing is subject to approval by Thunder Bridger IV's stockholders, the SEC and Nasdaq.",
    thumbnail:
      "https://www.coindesk.com/resizer/CvevJns6Ha2L1L6Wj5PpgZgO8Po=/800x600/cloudfront-us-east-1.images.arcpublishing.com/coindesk/P6LY3AMCMJD5LI6PHJNYXMSOS4.jpg",
    createdAt: "Wed, 08 May 2024 10:09:17 +0000",
  },
  {
    url: "https://www.coindesk.com/policy/2024/05/08/us-financial-industry-to-explore-sharing-ledger-technology-for-multiasset-transactions/?utm_medium=referral&utm_source=rss&utm_campaign=headlines",
    title:
      "U.S. Financial Industry to Explore Sharing Ledger Technology for Multiasset Transactions",
    description:
      "Major stakeholders in the U.S. financial sector, including Citi, JPMorgan, Mastercard, Swift and Deloitte, are teaming up to explore sharing ledger technology by simulating multiasset transactions in dollars.",
    thumbnail:
      "https://www.coindesk.com/resizer/nxy5wKo7Hwp-iBQE2zYH_wC8UCk=/800x600/cloudfront-us-east-1.images.arcpublishing.com/coindesk/GW4Q74SXVRF5PET75YU224HDGI.jpg",
    createdAt: "Wed, 08 May 2024 09:00:36 +0000",
  },
  {
    url: "https://www.coindesk.com/policy/2024/05/08/the-crypto-lawsuit-state-of-play/?utm_medium=referral&utm_source=rss&utm_campaign=headlines",
    title: "The Crypto Lawsuit State of Play",
    description:
      "Last month, Ethereum incubator ConsenSys sued the U.S. Securities and Exchange Commission (SEC) for an injunction asking a federal court to block the regulator from investigating its MetaMask offering or from declaring Ether (ETH) a security. It's the latest company to follow a growing trend of preemptive litigation against the SEC.",
    thumbnail:
      "https://www.coindesk.com/resizer/3WmOLHuT6H6Iim7riB0ES_W6388=/800x600/cloudfront-us-east-1.images.arcpublishing.com/coindesk/I2VNO5EAEREQXMUCFPSJ22VDYM.jpg",
    createdAt: "Wed, 08 May 2024 08:30:00 +0000",
  },
  {
    url: "https://www.coindesk.com/business/2024/05/08/crypto-exchange-bitpanda-expands-austrian-presence-with-raiffeisen-bank-partnership/?utm_medium=referral&utm_source=rss&utm_campaign=headlines",
    title:
      "Crypto Exchange Bitpanda Expands Austrian Presence With Raiffeisen Bank Partnership",
    description:
      "Bitpanda’s crypto offering in partnership with Raiffeisen Bank has been extended beyond Vienna to 55 bank branches across Austria",
    thumbnail:
      "https://www.coindesk.com/resizer/QKvvyaIIyeysZEuuFs911LW_OdY=/800x600/cloudfront-us-east-1.images.arcpublishing.com/coindesk/E4245MBQHFHILLJPQCTACVU4EQ.jpg",
    createdAt: "Wed, 08 May 2024 08:00:00 +0000",
  },
  {
    url: "https://www.coindesk.com/markets/2024/05/08/lyra-finance-now-lets-liquid-restaking-token-holders-earn-extra-yields-from-automated-trade-strategies/?utm_medium=referral&utm_source=rss&utm_campaign=headlines",
    title:
      "Lyra Finance Now Lets Liquid Restaking Token Holders Earn Extra Yields From Automated Trade Strategies",
    description:
      "LRT holders can tokenize any yield-bearing strategy to generate an annualized percentage yield of 10% to 50%.",
    thumbnail:
      "https://www.coindesk.com/resizer/3kHODy_zxOISQ2s3Jp4RM68XOHc=/800x600/cloudfront-us-east-1.images.arcpublishing.com/coindesk/GFNWZ5USVFFOVDBJZQZWJCEYHU.jpg",
    createdAt: "Wed, 08 May 2024 07:59:53 +0000",
  },
  {
    url: "https://www.coindesk.com/policy/2024/05/08/indonesia-regulator-forms-crypto-committee-to-monitor-industrys-operation-compliance/?utm_medium=referral&utm_source=rss&utm_campaign=headlines",
    title:
      "Indonesia Regulator Forms Crypto Committee to Monitor Industry's Operation, Compliance",
    description:
      "The committee was established by the Commodity Futures Trading Supervisory Agency, known as Bappebti, because crypto is considered a commodity in Indonesia.",
    thumbnail:
      "https://www.coindesk.com/resizer/AFrAA0RQFUR0vrLyu55_6kZTdyE=/800x600/cloudfront-us-east-1.images.arcpublishing.com/coindesk/DX3K7DSBRVFSPGLJ5CNYW76JWM.jpg",
    createdAt: "Wed, 08 May 2024 07:50:59 +0000",
  },
  {
    url: "https://www.coindesk.com/policy/2024/05/08/nearly-all-ftx-creditors-will-get-118-of-their-funds-back-in-cash-estate-says-in-new-plan/?utm_medium=referral&utm_source=rss&utm_campaign=headlines",
    title:
      "Nearly All FTX Creditors Will Get 118% of Their Funds Back in Cash, Estate Says in New Plan",
    description:
      "Bankrupt cryptocurrency exchange FTX has proposed a new reorganization plan that would see a whopping 98% of its creditors get back 118% of their claims – in cash – within 60 days of court approval, according to new documents filed Tuesday evening.",
    thumbnail:
      "https://www.coindesk.com/resizer/DVPG1L0sNk4uRae9A2w2IvErTqU=/800x600/cloudfront-us-east-1.images.arcpublishing.com/coindesk/HKYEYTIXCFE5ZNVMJKTKPKL7NU.jpg",
    createdAt: "Wed, 08 May 2024 02:49:46 +0000",
  },
  {
    url: "https://www.coindesk.com/business/2024/05/08/crypto-trading-firm-wintermute-to-provide-liquidity-for-hong-kong-bitcoin-ether-etfs/?utm_medium=referral&utm_source=rss&utm_campaign=headlines",
    title:
      "Crypto Trading Firm Wintermute to Provide Liquidity for Hong Kong Bitcoin and Ether ETFs",
    description:
      "Looking to strengthen its market share in the Asia region, Wintermute will become a liquidity provider to the recently launched Hong Kong-listed spot bitcoin and ether exchange-traded funds.",
    thumbnail:
      "https://www.coindesk.com/resizer/VjhVHO46mFGA5C3NuX9_SN3qQaE=/800x600/cloudfront-us-east-1.images.arcpublishing.com/coindesk/B2SSXL3VFZGQJJBDGL3NQELU5I.jpg",
    createdAt: "Wed, 08 May 2024 01:00:00 +0000",
  },
  {
    url: "https://www.coindesk.com/consensus-magazine/2024/05/07/blackrock-ondo-superstate-the-biggest-movers-in-the-rwa-sector-in-q1/?utm_medium=referral&utm_source=rss&utm_campaign=headlines",
    title:
      "BlackRock, Ondo, Superstate: The Biggest Movers in the RWA Sector in Q1",
    description:
      "Catching up on the biggest news from the real-world asset space.",
    thumbnail:
      "https://www.coindesk.com/resizer/RIBHlXCjHnXiANaESxmozxBqyyY=/800x600/cloudfront-us-east-1.images.arcpublishing.com/coindesk/Z66IXIAM5FECRMVFSA3THKUUGE.jpg",
    createdAt: "Tue, 07 May 2024 20:55:02 +0000",
  },
  {
    url: "https://www.coindesk.com/consensus-magazine/2024/05/07/momas-madeleine-pierpont-nfts-are-already-a-part-of-art-history/?utm_medium=referral&utm_source=rss&utm_campaign=headlines",
    title: "MoMA’s Madeleine Pierpont: NFTs Are Already Part of Art History",
    description: "",
    thumbnail:
      "https://www.coindesk.com/resizer/mrijpQzN1s0vqun7cTeihR0U-KM=/800x600/cloudfront-us-east-1.images.arcpublishing.com/coindesk/VH53D3RQKJAZDDTDIFNQWYWJDI.png",
    createdAt: "Tue, 07 May 2024 18:34:55 +0000",
  },
  {
    url: "https://www.coindesk.com/policy/2024/05/07/former-nfl-star-rob-gronkowski-to-pay-19m-to-settle-crypto-investor-suit/?utm_medium=referral&utm_source=rss&utm_campaign=headlines",
    title:
      "Former NFL Star Rob Gronkowski to Pay $1.9M to Settle Crypto Investor Suit",
    description:
      'The NBA\'s Victor Oladipo and racecar driver Landon Cassill also struck deals, and a group of Voyager investors said this was the "first tranche" of settlements with promoters of the former cryptocurrency lender.',
    thumbnail:
      "https://www.coindesk.com/resizer/ZbA0YpkBAZ8J6o0UsLbL_oKuGbY=/800x600/cloudfront-us-east-1.images.arcpublishing.com/coindesk/ORX2UQRI4VBK3CCO4O4I43C7EM.jpg",
    createdAt: "Tue, 07 May 2024 17:59:16 +0000",
  },
  {
    url: "https://www.coindesk.com/policy/2024/05/07/crypto-mixers-targeted-in-us-house-democrats-effort-to-clamp-down-on-money-laundering/?utm_medium=referral&utm_source=rss&utm_campaign=headlines",
    title:
      "Crypto Mixers Targeted in U.S. House Democrats' Effort to 'Clamp Down' on Money Laundering",
    description:
      "Several Democrats on the House Financial Services Committee have a bill coming this week to target money laundering through cryptocurrency mixing services, said Rep. Sean Casten (D-Ill.), one of its backers.",
    thumbnail:
      "https://www.coindesk.com/resizer/HrAlyvy9OFVoonIPrnX3vOol92s=/800x600/cloudfront-us-east-1.images.arcpublishing.com/coindesk/POJQRDWVZJAN7ABKS5EUSUYSCU.jpg",
    createdAt: "Tue, 07 May 2024 17:23:04 +0000",
  },
  {
    url: "https://www.coindesk.com/consensus-magazine/2024/05/07/what-visas-organic-stablecoin-report-misses/?utm_medium=referral&utm_source=rss&utm_campaign=headlines",
    title: "What Visa’s ‘Organic’ Stablecoin Report Misses",
    description: "",
    thumbnail:
      "https://www.coindesk.com/resizer/EuB5hADXdaIOHN5XkjQcC4sa974=/800x600/cloudfront-us-east-1.images.arcpublishing.com/coindesk/LXZGOUL3NJFWZJLK35VP4MBGE4.jpg",
    createdAt: "Tue, 07 May 2024 17:14:35 +0000",
  },
  {
    url: "https://www.coindesk.com/consensus-magazine/2024/05/07/the-us-governments-hypocritical-case-against-tornado-cash/?utm_medium=referral&utm_source=rss&utm_campaign=headlines",
    title: "The U.S. Government’s Hypocritical Case Against Tornado Cash",
    description:
      "You would think the government would be against an online privacy service facilitating money laundering. But it actually created one of the best, says attorney Alexandra Damsker.",
    thumbnail:
      "https://www.coindesk.com/resizer/T-s_pfmMxON84vikM1J8GKyMNAc=/800x600/cloudfront-us-east-1.images.arcpublishing.com/coindesk/IPUBMPFWINCMRGE7YZSLHVAXFM.jpg",
    createdAt: "Tue, 07 May 2024 17:06:51 +0000",
  },
  {
    url: "https://www.coindesk.com/policy/2024/05/07/us-doj-identifies-and-charges-lockbit-ransomware-gang-leader-with-fraud-extortion/?utm_medium=referral&utm_source=rss&utm_campaign=headlines",
    title:
      "U.S. DOJ Identifies and Charges LockBit Ransomware Gang Leader with Fraud, Extortion",
    description:
      "U.S. authorities have identified Russian national Dmitry Khoroshev as the mastermind behind the notorious LockBit ransomware gang, and are offering a $10 million reward for information that leads to his arrest.",
    thumbnail:
      "https://www.coindesk.com/resizer/m_0CR9v99NlziyfW7pFTTP1HFqo=/800x600/cloudfront-us-east-1.images.arcpublishing.com/coindesk/DDPKYH5P7JFJRMW7NIKJ5SMIXU.png",
    createdAt: "Tue, 07 May 2024 17:00:50 +0000",
  },
  {
    url: "https://www.coindesk.com/policy/2024/05/07/robert-f-kennedy-jr-a-pro-crypto-presidential-candidiate-to-appear-at-consensus-2024/?utm_medium=referral&utm_source=rss&utm_campaign=headlines",
    title:
      "Robert F. Kennedy Jr., a Pro-Crypto Presidential Candidiate, to Appear at Consensus 2024",
    description:
      '"As an environmental lawyer, scion of a Democratic political dynasty, and now maverick presidential candidate, Kennedy will explain his support for cryptocurrency and self-custody," according to a statement.',
    thumbnail:
      "https://www.coindesk.com/resizer/rP5ytBVOC1GHcHunmz5v7Q5zkR8=/800x600/cloudfront-us-east-1.images.arcpublishing.com/coindesk/643WEUBXZBFGFPSBIAWZ53T664.jpg",
    createdAt: "Tue, 07 May 2024 16:49:27 +0000",
  },
  {
    url: "https://www.coindesk.com/markets/2024/05/07/ethenas-ena-jumps-8-as-bybit-endorses-usde-token-as-collateral-for-derivatives-trading/?utm_medium=referral&utm_source=rss&utm_campaign=headlines",
    title:
      "Ethena's ENA Jumps 8% as Bybit Endorses USDe Token as Collateral for Derivatives Trading",
    description:
      "Ethena's USDe tokenized yield strategy has attracted over $2 billion in deposits and some scrutiny of the token's risks.",
    thumbnail:
      "https://www.coindesk.com/resizer/hhWN0v0YZ2MGIt8ovnzAPu0tpAI=/800x600/cloudfront-us-east-1.images.arcpublishing.com/coindesk/ZCD62UMHINGSFOGXOHHV7F7TWM",
    createdAt: "Tue, 07 May 2024 16:37:33 +0000",
  },
  {
    url: "https://www.coindesk.com/markets/2024/05/07/solana-and-cosmos-lead-coindesk-20-higher-coindesk-indices-market-update/?utm_medium=referral&utm_source=rss&utm_campaign=headlines",
    title:
      "Solana and Cosmos Lead CoinDesk 20 Higher: CoinDesk Indices Market Update",
    description: "",
    thumbnail:
      "https://www.coindesk.com/resizer/6E_gKFSiBwSHpKaLZ5KpSGpMEBs=/800x600/cloudfront-us-east-1.images.arcpublishing.com/coindesk/SH6SUDGQPVEJRHXB5DPOUGPWJY.jpg",
    createdAt: "Tue, 07 May 2024 16:21:05 +0000",
  },
  {
    url: "https://www.coindesk.com/business/2024/05/07/bitcoin-layer-2-builder-botanix-labs-raises-85m-from-polychain-capital-others/?utm_medium=referral&utm_source=rss&utm_campaign=headlines",
    title:
      "Bitcoin Layer-2 Builder Botanix Labs Raises $8.5M From Polychain Capital, Others",
    description:
      "The New York-based firm built Spiderchain to be compatible with Ethereum Virtual Machine (EVM) layers.",
    thumbnail:
      "https://www.coindesk.com/resizer/8qZsHsZUJW_0H9uSQ2ouL7nVvlk=/800x600/cloudfront-us-east-1.images.arcpublishing.com/coindesk/PDZ33YY2H5BTFNZ3HHAFJ4NN5I.jpg",
    createdAt: "Tue, 07 May 2024 16:00:49 +0000",
  },
  {
    url: "https://www.coindesk.com/business/2024/05/07/suilend-to-run-monthslong-points-program-with-a-twist/?utm_medium=referral&utm_source=rss&utm_campaign=headlines",
    title: "Suilend to Run Monthslong Points Program With a Twist",
    description:
      "The protocol's's pseudonymous founder Rooter previously has been critical of \"predatory\" points programs.",
    thumbnail:
      "https://www.coindesk.com/resizer/SG6-yx_YYh2sfZXY9hh__-UcuzU=/800x600/cloudfront-us-east-1.images.arcpublishing.com/coindesk/4SKXPUHWLFBSHJOLZ4TKGEFR7I.jpg",
    createdAt: "Tue, 07 May 2024 16:00:00 +0000",
  },
  {
    url: "https://www.coindesk.com/business/2024/05/07/bitcoin-could-benefit-from-us-fiscal-dominance-and-a-trump-win-standard-chartered-says/?utm_medium=referral&utm_source=rss&utm_campaign=headlines",
    title:
      "Bitcoin Could Benefit From a Trump Win and U.S. Fiscal Dominance: Standard Chartered ",
    description:
      "A Trump election win could be positive for crypto as his administration would likely push for a more supportive regulatory environment, the report said.",
    thumbnail:
      "https://www.coindesk.com/resizer/69P9Y8ht54cFj1T_lBBJi3qXapc=/800x600/cloudfront-us-east-1.images.arcpublishing.com/coindesk/ERAWWRAW25EY5J3TGBNHLJLINI.jpg",
    createdAt: "Tue, 07 May 2024 15:06:47 +0000",
  },
  {
    url: "https://www.coindesk.com/markets/2024/05/07/first-mover-americas-bitcoin-settles-into-63k-64k-range/?utm_medium=referral&utm_source=rss&utm_campaign=headlines",
    title: "First Mover Americas: Bitcoin Settles Into $63K-$64K Range",
    description:
      "The latest price moves in bitcoin (BTC) and crypto markets in context for May 7, 2024. First Mover is CoinDesk’s daily newsletter that contextualizes the latest actions in the crypto markets.",
    thumbnail:
      "https://www.coindesk.com/resizer/mKNW7sT_COzbqFu-7d85ThbNLJ8=/800x600/cloudfront-us-east-1.images.arcpublishing.com/coindesk/XNKEWGCPDRG55IZ7XVCQ3LKOPY.JPG",
    createdAt: "Tue, 07 May 2024 12:01:19 +0000",
  },
  {
    url: "https://www.coindesk.com/policy/2024/05/07/poll-most-people-cringe-about-crypto-but-enough-care-to-warrant-politicians-attention/?utm_medium=referral&utm_source=rss&utm_campaign=headlines",
    title:
      "Poll: Most People Cringe About Crypto, But Enough Care to Warrant Politicians' Attention",
    description:
      "As U.S. politicians continue to wrestle with how to approach crypto issues, about 21% of voters in vital swing states consider cryptocurrency policies as a topic important enough to sway their support, according to a Harris Poll survey commissioned by the industry, though it leaves some uncertainty about what the voters may end up clamoring for.",
    thumbnail:
      "https://www.coindesk.com/resizer/XI8ut08ShsD2agUCIGHJtFi8tzs=/800x600/cloudfront-us-east-1.images.arcpublishing.com/coindesk/2O3BUO6SGBEN7MT5N4A2GTWGOM.jpg",
    createdAt: "Tue, 07 May 2024 12:00:00 +0000",
  },
]

const NewsSection = () => {
  const options = {
    method: "GET",
    url: "https://cryptocurrency-news2.p.rapidapi.com/v1/coindesk",
    headers: {
      "X-RapidAPI-Key": process.env.REACT_APP_API_KEY,
      "X-RapidAPI-Host": "cryptocurrency-news2.p.rapidapi.com",
    },
  }
  const [data, setData] = useState(news || [])

  useEffect(() => {
    const fetch = async () => {
      try {
        const response = await axios.request(options)
        console.log(response.data.data)
        if (
          response.data &&
          response.data.data &&
          response.data.data.length > 0
        ) {
          setData(response.data.data)
        }
      } catch (error) {
        console.error(error)
      }
    }
    fetch()
  }, [])

  return (
    <Box
      sx={(theme) => ({
        zIndex: 1,
        marginY: "1.5rem",
        position: "relative",
        [theme.breakpoints.up("md")]: { marginY: "2.5rem" },
      })}
    >
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Typography
          variant="h2"
          align="center"
          sx={(theme) => ({
            display: "inline-block",
            marginBottom: "1.5rem",
            color: "#ffffff",
            fontWeight: "700",
            fontSize: "1.1rem",
            borderBottom: "3px solid #ffffff",
            [theme.breakpoints.up("md")]: { fontSize: "1.75rem" },
          })}
        >
          Latest Crypto News
        </Typography>
      </Box>
      {data && <NewsSwiper data={data} />}
    </Box>
  )
}

export default NewsSection
