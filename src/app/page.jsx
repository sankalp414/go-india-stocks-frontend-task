import {
  Discussion,
  MarketStories,
  Sidebar,
  TabList,
} from '@/containers';

export default function Home() {
  return (
    <main className='h-full '>
      
      <div className='relative inset-0 flex h-full'>
        <Sidebar />
        <TabList className='block md:hidden' />
        <Discussion className='hidden  md:block ' />
        <MarketStories className='hidden md:block' />
        
      </div>
    </main>
  );
}
