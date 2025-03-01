import React from "react";

const Pricing = () => {
  return (
    <div className="flex flex-col items-center justify-center py-10 px-5">
  <p className="text-center rounded-2xl bg-sky-100 m-auto mt-10 text-sky-500 font-bold text-[18px] py-2 px-[2px] w-50">
          Pricing plans 🤑
        </p>
        <h1 className="text-center text-[30px] lg:text-5xl py-3 font-bold">
          Choose a plan for a more <br /> advanced business
        </h1>

      <div className="flex items-center space-x-2 mt-4">
        <span className="text-gray-600">Annual pricing (save 20%)</span>
        <input type="checkbox" className="toggle-checkbox hidden" id="toggle" />
        <label
          htmlFor="toggle"
          className="w-10 h-5 bg-gray-300 rounded-full flex items-center p-1 cursor-pointer"
        >
          <div className="w-4 h-4 bg-white rounded-full shadow-md transform duration-300"></div>
        </label>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-20">
        <div className="bg-white  h-[500px]  border rounded-lg shadow-md p-6 w-80">
          <h3 className="text-xl font-semibold text-gray-900">Starter</h3>
          <p className="text-gray-600 text-sm mt-2">
            Lorem ipsum is simply dummy text of the printing industry.
          </p>
          <p className="text-3xl font-bold mt-4">$100<span className="text-lg">/mo</span></p>
          <ul className="mt-4 space-y-2 text-gray-700">
            <li>✅ Unlimited Upload</li>
            <li>✅ Advanced Statistics</li>
            <li>✅ Profile Badge</li>
            <li>✅ Access to the community</li>
            <li>🔗 History of Liked Photos</li>
            <li>🔗 Directory Listing</li>
            <li>🔗 Customize Your Profile</li>
          </ul>
          <button className="mt-6 w-full py-2 bg-gray-200 text-gray-900 rounded-full font-medium">
            Choose Plan
          </button>
        </div>

        <div className="bg-gray-900 pt-6 text-white mt-[-30px] h-[550px] rounded-lg shadow-lg p-6 w-80 relative">
          <span className="absolute top-3 right-3 bg-blue-500 text-xs px-6 py-2 rounded-full">
            Best Offer 🔥
          </span>
          <h3 className="text-xl font-semibold">Popular</h3>
          <p className="text-sm mt-2">
            Lorem ipsum is simply dummy text of the printing industry.
          </p>
          <p className="text-3xl font-bold mt-4">$1400<span className="text-lg">/mo</span></p>
          <ul className="mt-4 space-y-2">
            <li>✅ Unlimited Upload</li>
            <li>✅ Advanced Statistics</li>
            <li>✅ Profile Badge</li>
            <li>✅ Access to the community</li>
            <li>✅ History of Liked Photos</li>
            <li>✅ Directory Listing</li>
            <li>🔗 Customize Your Profile</li>
          </ul>
          <button className="mt-6 w-full py-2 bg-blue-500 text-white rounded-full font-medium">
            Choose Plan
          </button>
        </div>

        <div className="bg-white  h-[500px]  border rounded-lg shadow-md p-6 w-80">
          <h3 className="text-xl font-semibold text-gray-900">Enterprise</h3>
          <p className="text-gray-600 text-sm mt-2">
            Lorem ipsum is simply dummy text of the printing industry.
          </p>
          <p className="text-3xl font-bold mt-4">$2100<span className="text-lg">/mo</span></p>
          <ul className="mt-4 space-y-2 text-gray-700">
            <li>✅ Unlimited Upload</li>
            <li>✅ Advanced Statistics</li>
            <li>✅ Profile Badge</li>
            <li>✅ Access to the community</li>
            <li>✅ History of Liked Photos</li>
            <li>✅ Directory Listing</li>
            <li>✅ Customize Your Profile</li>
          </ul>
          <button className="mt-6 w-full py-2 bg-gray-200 text-gray-900 rounded-full font-medium">
            Choose Plan
          </button>
        </div>
      </div>
      <section className='w-[85%] m-auto flex flex-col gap-[60px] mb-[-100px] py-[70px]'>
      <aside className='flex flex-col text-center items-center gap-[20px]'>
        <p className='text-[40px] sm:text-[52px] text-[#1d1e25] font-semibold'>Frequently asked questions</p>
        <p className='text-[18px] text-[#7e8492]'>Everything you need to know about the product and billing.</p>
      </aside>
      <aside>
        <div className='flex flex-col gap-[20px] py-[10px] border-b-2 border-solid border-gray-400'>
          <div className='flex justify-between items-center '>
            <p className='text-[18px] sm:text-[24px] font-semibold text-[#1d1e25]'>Is there a free trial available?</p>
            <p className='text-[30px] leading-0'>-</p>
          </div>
          <p className='text-[18px] text-[#738492] sm:w-[500px] mb-[10px]'>Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.</p>
        </div>
        <div className='flex flex-col gap-[20px] py-[25px] border-b-2 border-solid border-gray-400'>
          <div className='flex justify-between items-center '>
            <p className='text-[18px] sm:text-[24px] font-semibold text-[#1d1e25]'>How Can I Add More Emails To My Account?</p>
            <p className='text-[30px] leading-0'>+</p>
          </div>
        </div>
        <div className='flex flex-col gap-[20px] py-[25px] border-b-2 border-solid border-gray-400'>
          <div className='flex justify-between items-center '>
            <p className='text-[18px] sm:text-[24px] font-semibold text-[#1d1e25]'>Can I Change Plans Or Cancel My Subscription At Any Time</p>
            <p className='text-[30px] leading-0'>+</p>
          </div>
        </div>
        <div className='flex flex-col gap-[20px] py-[25px] border-b-2 border-solid border-gray-400'>
          <div className='flex justify-between items-center '>
            <p className='text-[18px] sm:text-[24px] font-semibold text-[#1d1e25]'>How Secure Is My Date With Sans CRM</p>
            <p className='text-[30px] leading-0'>+</p>
          </div>
        </div>
        <div className='flex flex-col gap-[20px] py-[25px] border-b-2 border-solid border-gray-400'>
          <div className='flex justify-between items-center '>
            <p className='text-[18px] sm:text-[24px] font-semibold text-[#1d1e25]'>Is there a free trial available?</p>
            <p className='text-[30px] leading-0'>+</p>
          </div>
        </div>
      </aside>
    </section>

    </div>
  );
};

export default Pricing;
