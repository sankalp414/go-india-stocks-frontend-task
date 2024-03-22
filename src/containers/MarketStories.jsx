import marketStories from '@/content/market-stories';

import Image from 'next/image';
//marketstories container
const MarketStories = ({ className }) => {
  return (
    <section className={`relative flex-grow w-3/12 p-5 ${className}`} key={marketStories.id}>
      <h1 className='hidden heading-primary md:block'>market stories</h1>

      <div className='flex flex-col h-[100vh] xs:h-[100vh]  md:h-[(100vh)] py-8 gap-5 overflow-scroll no-scrollbar '>
        {marketStories.map(({ img, text }) => (
          <div className=" rounded  shadow-lg" >
          <Image className="w-full h-{10%} overflow-hidden " src={img} alt="Sunset in the mountains" width={300} height={300}/>
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
            <p className="text-grey-700 text-base">
             {text}
            </p>
          </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MarketStories;
