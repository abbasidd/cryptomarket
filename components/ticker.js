import React from 'react';
import { motion } from 'framer-motion';
import Ticker from 'framer-motion-ticker';

const cryptos = [
  { name: "Bitcoin", symbol: "BTC", price: "59,423.918", icon: "/bitcoin.png" },
  { name: "Ethereum", symbol: "ETH", price: "2,657.985", icon: "/ethereum.png" },
  { name: "Tether", symbol: "USDT", price: "1.00", icon: "/tether.png" },
  { name: "Cardano", symbol: "ADA", price: "0.336", icon: "/cardano.png" }
];

const Ticker_ = () => {
  const cryptoCount = cryptos.length;
  const cryptoWidth = 200; // Adjust based on your actual item width
  const fullWidth = cryptoCount * cryptoWidth;

  const tickerVariants = {
    animate: {
      x: [0, -fullWidth],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 20,
          ease: "linear"
        }
      }
    }
  };

//   <Ticker duration={20}>
//   {cryptos.map((crypto, index) => (
//     // <div
//     //   key={index}
//     //   style={{
//     //     backgroundColor: item,
//     //     margin: '5px',
//     //     height: '250px',
//     //     width: '200px',
//     //   }}
//     // />

//     <div className="overflow-hidden w-full">
//     {/* <div className="flex whitespace-nowrap"
//       variants={tickerVariants}
//       animate="animate"
//       style={{ width: fullWidth * 2 }}> */}

//       {/* {cryptos.concat(cryptos).map((crypto, index) => ( */}
//         <div key={index} className="flex items-center space-x-4 mr-8 min-w-[200px]">
//           <img src={crypto.icon} alt={crypto.name} width="24" height="24" />
//           <div>
//             <p className="font-bold">{crypto.name} ({crypto.symbol})</p>
//             <p>${crypto.price}</p>
//           </div>
//         {/* </div> */}
//       {/* ))} */}
//     </div>
//   </div>

//   ))}
// </Ticker>
  return (
    <Ticker duration={20}>
  {cryptos.map((crypto, index) => (
    // <div
    //   key={index}
    //   style={{
    //     backgroundColor: item,
    //     margin: '5px',
    //     height: '250px',
    //     width: '200px',
    //   }}
    // />

    <div className="overflow-hidden w-full">
    {/* <div className="flex whitespace-nowrap"
      variants={tickerVariants}
      animate="animate"
      style={{ width: fullWidth * 2 }}> */}

      {/* {cryptos.concat(cryptos).map((crypto, index) => ( */}
        <div key={index} className="flex items-center space-x-4 mr-8 min-w-[200px]">
          <img src={crypto.icon} alt={crypto.name} width="24" height="24" />
          <div>
            <p className="font-bold">{crypto.name} ({crypto.symbol})</p>
            <p>${crypto.price}</p>
          </div>
        {/* </div> */}
      {/* ))} */}
    </div>
  </div>

  ))}
</Ticker>
  );
};

export default Ticker_;
