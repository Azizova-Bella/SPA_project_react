import React from "react";
import circle from "../../assets/Linked Path.png";
import back12 from "../../assets/back12.png";
import back13 from "../../assets/back13.png";
import back14 from "../../assets/back14.png";
import back15 from "../../assets/Rectangle 4.png";
import back16 from "../../assets/Rectangle 5.png";
import back17 from "../../assets/Rectangle 6.png";
import media from "../../assets/social.png"

function About() {
  return (
    <div>
      <section className="w-[90%] sm:w-[85%] m-auto flex flex-col gap-[70px] py-[80px]">
        <aside>
          <p className="sm:w-[900px] font-semibold text-[40px] sm:text-[70px] color-[#1D1E25]">
            Everything you need to get the attention of your audience
          </p>
        </aside>
        <aside>
          <div className="flex flex-col sm:flex-row justify-between items-end sm:items-center">
            <div className="flex items-start gap-[20px] sm:gap-[30px]">
              <hr className="w-[50px] sm:w-[100px] mt-[20px]" />
              <p className="text-[24px] sm:text-[30px]  w-[300px] sm:w-[650px] leading-[35px] color-[#1D1E25]">
                Our digital agency helps clients develop, implement and maintain
                successful digital marketing strategies across all channels.
                Also work with you to build your website and create online
                businesses that grow.
              </p>
            </div>
            <img src={circle} alt="" className="w-[100px] sm:w-[180px]" />
          </div>
        </aside>
      </section>

      <section className="lg:pl-20 my-[10%] flex justify-center gap-10 items-start relative px-10 lg:px-0">
        <img src={back12} alt="" className=" hidden lg:block" />
        <div>
          <img
            src={back13}
            alt=""
            className=" top-20 right-[700px] hidden lg:block"
          />
          <img src="../../assets/Group 3258.png" alt="" />
          <h2 className="font-semibold lg:text-[30px] text-[27px] py-4">
            What we believe in
          </h2>
          <p className="text-[#7E8492] text-[17px]">
            Over the years at Sans, we’ve put a lot of thought into what it is
            that makes us who we are. The qualities that unite us, that make us
            such an effective team, and...
          </p>
          <button className="bg-[#1D1E25] text-white font-semibold mt-10 p-3 border rounded-3xl lg:px-10 px-5">
            See Details &rarr;
          </button>
        </div>
        <img src={back14} alt="" className="hidden  lg:block" />
      </section>

      <section className="w-[90%] sm:w-[85%] m-auto relative flex flex-col gap-[80px] pb-[70px] pt-[150px]">
        <aside className="flex flex-col relative z-[30] gap-[30px]">
          <p className=" text-[40px] sm:text-[52px] sm:w-[700px] leading-[45px] sm:leading-[65px] font-semibold text-[#1d1e25]">
            Meet our team of creators, designers, and world-class problem
            solvers
          </p>
          <p className="text-[18px] sm:w-[497px] text-[#7e8492]">
            To become the company that customers want, it takes a group of
            passionate people. Get to know the people who lead
          </p>
        </aside>
        <div className="flex justify-center gap-[30px] relative">
          <div className="pt-20 lg:w-[33%] w-96">
            <img src={back17} alt="" />
            <h2 className="text-[20px] font-semibold flex justify-between pt-4">
              Arlyne Stefano <img src={media} alt="" />
            </h2>
            <p className="text-[#7E8492] text-[15px] pt-2">Founder & CEO</p>
          </div>
          <img
            src="./img/Group 3260.png"
            alt=""
            className="absolute top-[200px] right-[740px] hidden lg:block"
          />
          <div className="pt-20 w-[33%] hidden lg:block">
            <img src={back15} alt="" />
            <h2 className="text-[20px] font-semibold flex justify-between pt-4">
              Katy Cristy <img src={media} alt="" />
            </h2>
            <p className="text-[#7E8492] text-[15px] pt-2">
              Chief Technology Officer
            </p>
          </div>
          <div className="pt-20 w-[33%] hidden lg:block">
            <img src={back16} alt="" />
            <h2 className="text-[20px] font-semibold flex justify-between pt-4">
              Roger Dzawin <img src={media} alt="" />
            </h2>
            <p className="text-[#7E8492] text-[15px] pt-2">
              Chief Technology Officer
            </p>
          </div>
        </div>
      </section>

      <section className="flex flex-col sm:flex-row w-[90%] sm:w-[85%] m-auto mb-[120px] justify-between gap-[20px] sm:gap-[50px]">
        <p className="font-semibold sm:hidden block text-[40px]">
          Join our team
        </p>
        <p className="text-[52px] hidden sm:block font-semibold leading-[65px] text-[#1d1e25]">
          Join our team, The one with the master touch
        </p>
        <div className="flex flex-col gap-[20px]">
          <p className="text-[18px] leading-[30px] text-[#7e8492] sm:w-[600px]">
            We believe it takes great people to make a great product. That’s why
            we hire not only the perfect professional fits, but people who
            embody our company values.
          </p>
          <p className="text-[16px] font-semibold">See Open Position - </p>
        </div>
      </section>
    </div>
  );
}

export default About;
