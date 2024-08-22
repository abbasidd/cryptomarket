import { useState, useEffect } from "react";
import Rate from "./cmc-table/rate";
import fire from "../assets/fire.png";
import btc from "../assets/btc.png";
import usdt from "../assets/usdt.png";
import gainers from "../assets/gainers.png";
import TrendingCard from "./trendingCard";
import ReactSwitch from "react-switch";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import FearAndGreed from "./fearAndGreed";

const styles = {
  trendingWrapper: `mx-auto max-w-screen-2xl`,
  h1: `text-3xl text-white`,
  flexCenter: `flex items-center`,
  fearGreedWrapper: `mt-6 p-6 bg-gray-800 rounded-lg flex flex-col items-center`,
  fearGreedHeader: `text-2xl font-bold mb-4 text-white`,
  fearGreedContent: `text-xl`,
  chartWrapper: `w-1/3`,
};

const Trending = () => {
  const [checked, setChecked] = useState(false);
  const [fearGreedData, setFearGreedData] = useState({ value: 45, value_classification: "Neutral" });

  useEffect(() => {
    // Fetch the Fear & Greed Index Data
    async function fetchFearGreedData() {
      // Example API call to get the Fear & Greed Index
      const res = await fetch("/api/fear-greed"); // Your API endpoint
      const data = await res.json();
      setFearGreedData(data.data[0]);
    }

    fetchFearGreedData();
  }, []);

  const trendingData = [
    {
      number: 1,
      symbol: "BTC",
      name: "Bitcoin",
      icon: btc,
      isIncrement: true,
      rate: "2.34%",
    },
    {
      number: 2,
      symbol: "USDT",
      name: "Tether",
      icon: usdt,
      isIncrement: false,
      rate: "9.32%",
    },
  ];

  return (
    <div className="text-white">
      <div className={styles.trendingWrapper}>
        <div className="flex justify-between">
          <h1 className={styles.h1}>Todays Cryptocurrency Prices by Market Cap</h1>

          <div className="flex">
            <p className="text-gray-400">Highlights &nbsp;</p>
            <ReactSwitch checked={checked} onChange={() => setChecked(!checked)} />
          </div>
        </div>
        <br />
        <div className="flex">
          <p>The global crypto market cap is $1.74T, a &nbsp; </p>
          <span>
            <Rate isIncrement={true} rate="0.53%" />
          </span>
          <p>
            &nbsp; decrease over the last day. <span className="underline">Read More</span>{" "}
          </p>
        </div>
        <br />

        <div className={styles.flexCenter}>
          <TrendingCard title="Trending" icon={fire} trendingData={trendingData} />
          <TrendingCard title="Biggest Gainers" icon={gainers} trendingData={trendingData} />
          <FearAndGreed title="Biggest Gainers" icon={gainers} trendingData={trendingData} />
          {/* <FearAndGreed> */}
        </div>

      </div>
    </div>
  );
};

export default Trending;
