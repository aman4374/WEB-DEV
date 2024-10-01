import React from 'react'

const Username = ({params}) => {
  return (
    <>
    {params.username}

    <div className='cover w-full bg-red-50 relative' >
    <img className='object-cover w-full h-[350px]' src="/cover_page.gif" alt=""/>
    <div className='absolute -bottom-8 left-[50vw] translate-x-[-49%] border-white border-2 rounded-full '>
        <img className='rounded-full w-20 h-20' src="https://learn.swyftx.com/wp-content/uploads/2021/11/What-is-Dogecoin_-1-800x533.png" alt="" />
    </div>
    </div>
    <div className='info flex justify-center items-center my-9 flex-col gap-2'>
      <div className='font-bold text-lg'>
      @{params.username}
      </div>
        <div className='text-slate-400'>
          Created animated arts for Patreon..
        </div>
        <div className='text-slate-400'>
          989 members. 82 posts . $15,400/release
        </div>
        <div className="payment flex gap-3 w-[80%] mt-11">
          <div className="supporters w-1/2 bg-slate-900 text-white rounded-lg p-8">
            {/* Show the list of all the supporters of leaderboard */}
            <h2 className='text-2xl font-bold my-4'>Supporters</h2>
            <ul className='mx-4 text-lg'>
              <li className='my-1 flex gap-2 items-center'> <img className='w-6 h-6 my-1 rounded-full' src="/profile.gif" /><span>Shubham donated <span className='font-bold'>$30</span> with a message I Support you broo.Lots of ❤️ "</span></li>
              <li className='my-1 flex gap-2 items-center'> <img className='w-6 h-6 my-1 rounded-full' src="/profile.gif" /><span>Shubham donated <span className='font-bold'>$30</span> with a message I Support you broo.Lots of ❤️ "</span></li>
              <li className='my-1 flex gap-2 items-center'> <img className='w-6 h-6 my-1 rounded-full' src="/profile.gif" /><span>Shubham donated <span className='font-bold'>$30</span> with a message I Support you broo.Lots of ❤️ "</span></li>
              <li className='my-1 flex gap-2 items-center'> <img className='w-6 h-6 my-1 rounded-full' src="/profile.gif" /><span>Shubham donated <span className='font-bold'>$30</span> with a message I Support you broo.Lots of ❤️ "</span></li>
              <li className='my-1 flex gap-2 items-center'> <img className='w-6 h-6 my-1 rounded-full' src="/profile.gif" /><span>Shubham donated <span className='font-bold'>$30</span> with a message I Support you broo.Lots of ❤️ "</span></li>
              <li className='my-1 flex gap-2 items-center'> <img className='w-6 h-6 my-1 rounded-full' src="/profile.gif" /><span>Shubham donated <span className='font-bold'>$30</span> with a message I Support you broo.Lots of ❤️ "</span></li>
              
            </ul>
          </div>
          <div className="makepayment w-1/2 bg-slate-900 text-white rounded-lg p-8">
          <h2 className='text-2xl font-bold my-5'>Make a Payment</h2>
          <div className="flex flex-col gap-2">
            <div>
            <input type="text" className='w-full p-3 rounded-lg bg-slate-800' placeholder="Enter Name" />

            </div>
            <input type="text" className='w-full p-3 rounded-lg bg-slate-800' placeholder="Enter Message" />
            <input type="text" className='w-full p-3 rounded-lg bg-slate-800' placeholder="Enter Amount" />
            <button className='text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2'>Pay Now</button>
          </div>
            {/* or choose from this amount */}
            <div className='flex gap-2 mt-5'>
              <button className='bg-slate-800 p-3 rounded-lg'>Pay $10</button>
              <button className='bg-slate-800 p-3 rounded-lg'>Pay $20</button>
              <button className='bg-slate-800 p-3 rounded-lg'>Pay $30</button>
            </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Username
