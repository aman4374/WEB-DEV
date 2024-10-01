import Image from "next/image";

export default function Home() {
  return (
     <>
    <div className="flex justify-center text-white flex-col gap-4 items-center h-[44vh]">
    <div className="font-bold text-4xl flex gap-2  items-center">Buy Me a Chai <span className="rounded-md"><img className="invertImg" src="/tea.gif" width={44} alt=" Tea Gif" /></span></div>
    <p>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus, asperiores!
    </p>
    <div>
    <button type="button" className="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Start Now!</button>
    <button type="button" className="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Read More</button>
    </div>
   </div>
   <div className="bg-white h-1 opacity-10">
   </div>
   
   <div className="text-white mx-auto container py-32">
    <h2 className="text-3xl font-bold text-center mb-14">Your Fans can buy u a chai</h2>
    <div className="flex gap-5 justify-around">
      <div className="item space-y-3 flex flex-col items-center justify-center ">
      <img className=' bg-slate-400 rounded-full p-2 text-black w-20 h-20' src="/man.gif"  alt="Man" />
      <p className="font-bold">Fund Youself</p>
      <p>You fans are available to fund</p>

     </div>
     <div className="item space-y-3 flex flex-col items-center justify-center">
      <img className=' bg-slate-400 rounded-full p-2 text-black w-20 h-20'  src="/coin.gif"  alt="Man" />
      <p className="font-bold">Fund Youself</p>
      <p>You fans are available to fund</p>

     </div>
     <div className="item space-y-3 flex flex-col items-center justify-center ">
      <img className=' bg-slate-400 rounded-full p-2 text-black w-20 h-20'  src="/group.gif"  alt="Man" />
      <p className="font-bold">Your Fans want to fund</p>
      <p>You fans are available to fund</p>
     </div>
    </div>
   </div>


   <div className="bg-white h-1 opacity-10">
   </div>
   
   <div className="text-white mx-auto container py-32 flex flex-col items-center justify-center">
    <h2 className="text-3xl font-bold text-center mb-14">Learn More About us</h2>
    <iframe width="560" height="315" src="https://www.youtube.com/embed/t14j6XVGCSo?si=Hww9hj6wdZ7oO2wD" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
   </div>
   </>
  );
}
