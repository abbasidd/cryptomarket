import MoreButton from './moreButton'
import TrendingCardRow from './trendingCardRow'
import Image from 'next/image'
import FearAndGreedSVG from '@/assets/svg/fearAndGreed'

const styles = {
  trendingCard: `w-full p-5 py-3 pb-0 bg-[#323546] rounded-xl text-white mr-3`,
  trendingCardWrapper: `flex items-center justify-between`,
  svgContainer: `flex justify-center items-center `, // This ensures flexbox centering
}
const normalizeAngle = (value) => {
  const maxValue = 100;
  const minAngle = 0;
  const maxAngle = 180;
  const normalizedAngle =
    (value * (maxAngle - minAngle)) / maxValue + minAngle;
  return normalizedAngle;
};
var FNGData = null;

  try {
    const response = await fetch('https://crypto-fear-greed-index2.p.rapidapi.com/index?limit=10&timestamp=1518048000', {
      method: 'GET',
      headers: {
        'x-rapidapi-host': 'crypto-fear-greed-index2.p.rapidapi.com',
        'x-rapidapi-key': 'e2436cd94amsh99dc81d4c5431ccp1c6c94jsn4e09e360a2b6'
      }
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

     FNGData = await response.json();
  } catch (error) {
    console.error("Failed to fetch Fear and Greed Index data:", error);
  }

const normalizedAngle = normalizeAngle(FNGData.value);
const FearAndGreed = ({ icon, title, trendingData }) => {
  return (
    <div className={styles.trendingCard} >
      <div className={styles.trendingCardWrapper}>
        <div className='flex items-center'>
          {icon && <Image src={icon} width={27} height={27} alt='' />}
          &nbsp;&nbsp;
          <p className='font-bold'>{title}</p>
        </div>
        <MoreButton />
      </div>
      <div className={styles.svgContainer}>
      <div className="relative">
      <div style={{ transform: `rotate(${normalizedAngle}deg)`,
      transformOrigin: "93.5px 8px" }} 
      className='h-5 w-5 rounded-full bg-gray-700 border-white border-2 absolute top-[81px] left-[-5px]' />
      <div className="flex flex-col items-center justify-center text-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/4">
        <p className="text-xl font-bold">{FNGData.value}</p>
        <p className="font-light">{FNGData.value_classification}</p>
      </div>
      <FearAndGreedSVG />
      </div>
      </div>
    </div>
  )
}

export default FearAndGreed
