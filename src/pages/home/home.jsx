import React from 'react'
import light from "../../assets/light.png"
import back1 from "../../assets/back1.png"
import back2 from "../../assets/back2.png"
import back3 from "../../assets/back3.png"
import back4 from "../../assets/back4.png"
import back5 from "../../assets/back5.png"
import back6 from "../../assets/back6.png"
import back7 from "../../assets/back7.png"
import back8 from "../../assets/back8.png"
import back9 from "../../assets/back9.png"
import back10 from "../../assets/back10.png"
import back11 from "../../assets/back11.png"
import icon from "../../assets/icon.png"
import icon1 from "../../assets/Icon (1).png"
import icon2 from "../../assets/Icon (2).png"
import icon3 from "../../assets/Icon (3).png"
import icon4 from "../../assets/Icon (4).png"
import icon5 from "../../assets/Icon (5).png"
import logo1 from "../../assets/logo1.png"
import logo2 from "../../assets/logo2.png"
import logo3 from "../../assets/logo3.png"
import logo4 from "../../assets/logo4.png"
import logo5 from "../../assets/logo5.png"
import logo6 from "../../assets/logo6.png"
import logo7 from "../../assets/logo7.png"
import logo8 from "../../assets/logo8.png"
import stars from "../../assets/stars.png"
import avatar from "../../assets/Ellipse 15.png"
import buttons  from "../../assets/Button Arrow.png"



export default function HomePage (){
  return (
    <div>
          <header className="w-[90%] flex flex-col lg:flex-row items-center m-auto justify-between gap-20 lg:gap-10 mt-[100px]">
    <aside className="lg:w-[700px] m-0">
      <h1 className="text-[#1D1E25] text-[35px] lg:text-[70px] font-bold">
        Digitally forward creative
      </h1>
      <div className="lg:w-[471px] h-[56px] flex items-center gap-10 m-0 mt-[50px]">
        <form action="">
          <input
            type="email"
            name=""
            id=""
            placeholder="Enter your email"
            className="border-b-2 outline-none py-[10px] px-[10px] w-[150px] lg:w-[280px]"
          />
          <button
            id="but-1"
            className="text-[#fff] bg-[#1D1E25] font-bold w-[175px] h-[56px] rounded-[100px]"
          >
            Try for free
          </button>
        </form>
      </div>
    </aside>
    <aside className="relative">
      <img src={back1} alt="" className="m-0 z-2" />
      <img
        src={back2}
        alt=""
        className="absolute z-2 m-0 top-[-85px] left-[40px] lg:top-[-50px] lg:left-[300px] w-[200px] lg:w-[300px]"
      />
      <img
        src={light}
        alt=""
        className="absolute lg:absolute z-2 m-0 top-[250px] lg:top-[390px]"
      />
    </aside>
  </header>
  <main>
    <section className="w-full bg-[#1D1E25] pb-[50px] mt-[100px] pt-[50px]">
      <aside className="w-[90%] m-auto">
        <div className="lg:w-[816px] m-0">
          <h2 className="text-[#FFFFFF] text-[26px] lg:text-[56px] font-bold">
            Coca help our client solve complex customer problems with date that
            does more.
          </h2>
          <p className="text-[#7E8492] text-[18px] py-[20px]">
            Our platform offers the modern enterprise full control of how date
            can be access and used with industry leading software solutions for
            identity, activation, and date collaboration
          </p>
        </div>
      </aside>
      <section className="w-[90%] m-auto flex flex-col lg:flex-row items-center mt-[50px] gap-20 lg:gap-[200px]">
        <aside className="m-0 lg:w-[453px]">
          <img src={icon1} alt="" className="m-0" />
          <h2 className="text-[32px] text-[#fff] lg:w-[390px] font-bold py-[10px] ">
            Build your date fundamental
          </h2>
          <p className="text-[#7E8492] text-[16px] py-[10px]">
            Build access to date, develop valuable business insights and drive
            revenue while maintaining full control over access and use of date
            at all times.
          </p>
          <img src={icon2} alt="" className="m-0 mt-[100px]" />
          <h2 className="text-[32px] text-[#fff] lg:w-[200px] font-bold py-[10px] ">
            Activate your date
          </h2>
          <p className="text-[#7E8492] text-[16px] py-[10px]">
            Accurately address your specific audiences at scale across any
            channel, platform, publisher or network and safely translate date
            between identity space to improve results.
          </p>
        </aside>
        <aside className="m-0 lg:w-[453px]">
          <img src={icon3} alt="" className="m-0" />
          <h2 className="text-[32px] text-[#fff] lg:w-[340px] font-bold py-[10px] ">
            Measure more effective
          </h2>
          <p className="text-[#7E8492] text-[16px] py-[10px]">
            Effectively measure people-based campaigns with the freedom to
            choose from best-of breed partners to optimize and drive media
            innovation.
          </p>
          <img src={icon4} alt="" className="m-0 mt-[100px]" />
          <h2 className="text-[32px] text-[#fff] lg:w-[300px] font-bold py-[10px] ">
            Strengthen consumer privacy
          </h2>
          <p className="text-[#7E8492] text-[16px] py-[10px]">
            Protect your customer date with leading privacy-preserving
            technologies and advanced techniques to minimize date movement while
            still enabling insight generation.
          </p>
        </aside>
      </section>
    </section>
    <section className="w-[90%] m-auto flex flex-col lg:flex-row items-center justify-between gap-20 mt-[100px]">
      <aside className="lg:w-[585px] relative">
        <img src={back3} alt="" className="m-0" />
        <img
          src={back4}
          alt=""
          className="absolute m-0 top-[50%] left-[49%] lg:top-[50%] lg:left-[45%] w-[150px] lg:w-[290px]"
        />
      </aside>
      <aside className="lg:w-[557px]">
        <h2 className="text-[#1D1E25] text-[25px] lg:text-[56px] font-bold">
          Passion to increase company revenue up to 85%
        </h2>
        <p className="text-[#7E8492] text-[18px] lg:w-[360px] py-[20px]">
          Automate your sales, marketing and service in one platform. Avoid date
          leaks and enable consistent messaging
        </p>
        <div className="text-[#1D1E25] text-[18px] lg:w-[393px] m-0">
          <p className="flex items-center gap-[10px] py-[10px]">
            <img src={icon5} alt="" className="m-0" />
            Close more deals with single - page contact managment
          </p>
          <p className="flex items-center gap-[10px] py-[10px]">
          <img src={icon5} alt="" className="m-0" />
            Enjoy one-click calling, call scripts and voicemail automation
          </p>
          <p className="flex items-center gap-[10px] py-[10px]">
          <img src={icon5} alt="" className="m-0" />
            Take stages and milestones of your deals to keep the sales process
            an track
          </p>
        </div>
      </aside>
    </section>
    <section className="w-[90%] m-auto grid grid-cols-2 lg:grid-cols-4 mt-[100px] gap-10">
      <aside className="lg:w-[176px]">
        <h2 className="text-[62px] text-[#1D1E25] font-bold">17k</h2>
        <p className="text-[18px] text-[#7E8492]">
          happy customers on worldwide
        </p>
      </aside>
      <aside className="lg:w-[176px]">
        <h2 className="text-[62px] text-[#1D1E25] font-bold">15+</h2>
        <p className="text-[18px] text-[#7E8492]">Hours of work experience</p>
      </aside>
      <aside className="lg:w-[176px]">
        <h2 className="text-[62px] text-[#1D1E25] font-bold">50+</h2>
        <p className="text-[18px] text-[#7E8492]">
          Creativity &amp; passionate members
        </p>
      </aside>
      <aside className="lg:w-[176px]">
        <h2 className="text-[62px] text-[#1D1E25] font-bold">100+ </h2>
        <p className="text-[18px] text-[#7E8492]">
          Integrations lorem ipsum integrations
        </p>
      </aside>
    </section>
    <section className="w-[90%] m-auto mt-[100px]">
      <aside className="">
        <img src={back5} alt="" className="m-0" />
      </aside>
    </section>
    <section className="w-[90%] m-auto flex flex-col lg:flex-row items-start justify-between gap-[40px] lg:gap-20 mt-[50px] ">
      <aside className="lg:w-[700px]">
        <h2 className=" text-[24px] lg:text-[52px] text-[#1D1E25] font-bold">
          Lift your business to new heights with our digital marketing services
        </h2>
      </aside>
      <aside className="lg:w-[450px]">
        <p className="text-[18px] text-[#7E8492] pb-[60px]">
          To build software that gives customer facing teams in small and
          medium-sized businesses the ability to create rewarding and
          long-lasting relationships with customers
        </p>
      </aside>
    </section>
    <section className="w-[90%] mt-[100px] m-auto flex flex-col lg:flex-row items-center justify-between gap-0">
      <aside className="lg:w-[323px] m-0 ">
        <h2 className="text-[52px] text-[#1D1E25] font-bold">890+</h2>
        <p className="text-[#7E8492] text-[18px]">
          some big companies that we work with, and trust us very much
        </p>
      </aside>
      <aside className="lg:w-[730px] flex-row flex lg:flex-col">
        <div className="flex flex-col items-center gap-10 lg:flex-row lg:mb-7">
          <img src={logo1} alt="" className="m-0" />
          <img src={logo2} alt="" className="m-0" />
          <img src={logo3} alt="" className="m-0" />
          <img
            src={logo4}
            alt=""
            className="m-0 lg:w-[300px]"
          />
        </div>
        <div className="flex flex-col items-center gap-10 lg:flex-row ">
          <img
            src={logo5}
            alt=""
            className="m-0 lg:w-[160px]"
          />
          <img src={logo6} alt="" className="m-0" />
          <img src={logo7} alt="" className="m-0" />
          <img src={logo8} alt="" className="m-0" />
        </div>
      </aside>
    </section>
    <section className="w-[90%] m-auto mt-[100px]">
      <aside className="lg:w-[601px]  m-0">
        <h2 className="text-[#1D1E25] text-[56px] font-bold">
          Advertise, analyze, and optimize! We do it all for you
        </h2>
        <p className="text-[#7E8492] text-[18px lg:w-[442px] py-[20px]">
          Build more meaningful and lasting relationships - better understand
          their needs, identify new opportunities to help address any problems
          faster
        </p>
      </aside>
      <aside className="grid grid-rows-2 lg:grid-cols-2 mt-[50px] gap-[20px] lg:gap-10">
        <aside className="w-auto lg:w-[566px] flex gap-10 m-0 items-center">
          <img
            src={back6}
            alt=""
            className="m-0 w-[160px] lg:w-[240px]"
          />
          <div className='ml-[0px]'>
            <h2 className="text-[#1D1E25] text-[16px] lg:text-[32px] font-bold">
              Lead happiness for customers
            </h2>
            <p className="text-[#7E8492] text-[14px] lg:text-[18px]">
              Build more meaningful and lasting relationships - better
              understand their needs, identify new opportunities to help address
              any problems faster
            </p>
          </div>
        </aside>
        <aside className="w-auto lg:w-[500px] flex gap-0 m-0 items-center">
          <img
            src={back7}
            alt=""
            className="m-0 w-[160px] lg:w-[240px]"
          />
          <div className='ml-[40px]'>
            <h2 className="text-[#1D1E25] py-[20px] text-[16px] lg:text-[25px] font-bold">
              Mutually support each other
            </h2>
            <p className="text-[#7E8492] text-[14px] lg:text-[16px]">
              Build more meaningful and lasting relationships - better
              understand their needs, identify new opportunities to help address
              any problems faster
            </p>
          </div>
        </aside>
        <aside className="w-auto lg:w-[500px] flex gap-0 m-0 items-center">
          <img
            src={back8}
            alt=""
            className="m-0 w-[160px] lg:w-[240px]"
          />
          <div className='ml-[20px]'>
            <h2 className="text-[#1D1E25] text-[16px] lg:text-[32px] font-bold">
              Have fun growing together
            </h2>
            <p className="text-[#7E8492] text-[14px] lg:text-[18px]">
              Build more meaningful and lasting relationships - better
              understand their needs, identify new opportunities to help address
              any problems faster
            </p>
          </div>
        </aside>
        <aside className="w-auto lg:w-[500px] flex gap-0 m-0 items-center">
          <img
            src={back9}
            alt=""
            className="m-0 w-[160px] lg:w-[240px]"
          />
          <div className='ml-[40px]'>
            <h2 className="text-[#1D1E25] text-[16px] lg:text-[32px] font-bold">
              Make Your Business Grow
            </h2>
            <p className="text-[#7E8492] text-[14px] lg:text-[18px]">
              Build more meaningful and lasting relationships - better
              understand their needs, identify new opportunities to help address
              any problems faster
            </p>
          </div>
        </aside>
      </aside>
    </section>
    <aside className="lg:w-[671px] m-auto text-center mt-[100px]">
      <h2 className="text-[#1D1E25] text-[56px] font-bold">
        Trending news from Coca
      </h2>
      <p className="text-[#7E8492] text-[18px] py-[20px]">
        we have some new Service to pamper you
      </p>
    </aside>
    
    <section className="w-[90%] m-auto flex flex-col lg:flex-row items-center justify-between gap-0 lg:gap-10 mt-[100px]">
      <h2 className="text-[#1D1E25] text-[30px] lg:text-[56px] font-bold lg:w-[530px]">
        What our customer are saying
      </h2>
      <p className="text-[#7E8492] text-[14px] lg:text-[18px] py-[20px] lg:w-[380px]">
        We are trusted numerous companies from different business to meet their
        needs
      </p>
    </section>
    <section className="w-[90%] m-auto mt-[100px]">
      <aside className=" lg:w-[898px]">
        <img src={stars} alt="" className="m-0 py-[10px]" />
        <h2 className="text-[#1D1E25] text-[25px] lg:text-[47px]">
          “With Agency the results are very satisfying. wrapped with Hight
          quality and innovative design that makes a surge on my website”
        </h2>
      </aside>
      <aside className="lg:w-[90%] mt-[20px]  flex items-center lg:justify-between">
        <div className="flex gap-[15px] items-center m-0">
          <img src={avatar} alt="" className="m-0" />
          <div className="m-0">
            <p className="">Renee Wells</p>
            <p className="py-[5px]">Product Designer, Quotient</p>
          </div>
        </div>
        <img src={buttons} alt="" className="m-0" />
      </aside>
    </section>
  </main>
    </div>
  )
}
