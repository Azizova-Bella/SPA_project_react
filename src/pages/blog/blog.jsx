import React from "react";
import back18 from "../../assets/Image (4).png"
import back17 from "../../assets/Image (3).png"
import back19 from "../../assets/Image (7).png"
import back20 from "../../assets/Rectangle 34.png"
import back21 from "../../assets/Rectangle 35.png"
import back22 from "../../assets/Rectangle 36.png"
import back23 from "../../assets/Rectangle 37 (1).png"
import back24 from "../../assets/Image (10).png"
import back25 from "../../assets/Image (11).png"
import back26 from "../../assets/Image (8).png"
import group from "../../assets/Group 3258.png"
import left from "../../assets/Frame 1171275052.png"
import right from "../../assets/Frame 1171275053.png"

function Blog() {
  return (
    <div>
      <header>
        <div className="w-full lg:w-[45%] px-10 lg:ml-32 lg:px-0">
          <h1 className="lg:text-[50px] text-[40px] font-bold">
            Activity & Updates
          </h1>
          <p className="flex items-start lg:text-[25px] font-semibold pt-20">
            <img
              src="../../assets/Line 69.png"
              alt=""
              className="mr-12 lg:pt-5 pt-3 lg:w-[80px] w-10"
            />
            Our biggest challenge is making sure we're always designing and
            building products that will help you run your business better.
          </p>
        </div>
      </header>
      <section>
        <div className="flex ml-5 lg:flex-row text-[16px] gap-16 mt-20 lg:ml-32">
          <p className="text-black font-bold text-[16px] border-b-2 pb-1 border-black">
            View all
          </p>
          <p className="text-gray-500">Design</p>
          <p className="text-gray-500">Articles</p>
          <p className="hidden lg:block text-gray-500">Product</p>
          <p className="hidden lg:block text-gray-500">Software Development</p>
          <p className="hidden lg:block text-gray-500">Customer Success</p>
        </div>
        <div className="my-10 mt-16 lg:ml-36 mx-10 lg:mx-0">
          <div className="flex flex-col lg:flex-row justify-center items-center gap-8 mt-10 relative">
            <div className="lg:w-[110%]">
              <img src={back17} alt="" />
              <div className="p-2">
                <p className="text-sm text-[#7E8492] flex justify-between pb-5">
                  Published in Insight Jan 30, 2021
                  <span>by: Albert Sans</span>
                </p>
                <h3 className="text-3xl font-semibold mt-2 py-2">
                  Practice making User Flow
                </h3>
                <p className="text-gray-500">
                  In this article, we'll cover how to <br /> create user flows
                </p>
              </div>
            </div>

            <img
              src={group}
              alt=""
              className="hidden lg:block absolute top-[200px] left-[400px]"
            />
            <div className="lg:w-[110%] hidden lg:block">
              <img src={back18} alt="" />
              <div className="p-2">
                <p className="text-sm text-[#7E8492] flex justify-between pb-5">
                  Published in Insight Jan 30, 2021
                  <span>by: Albert Sans</span>
                </p>
                <h3 className="text-3xl font-semibold mt-2">
                  Overview of the Design Principles
                </h3>
                <p className="text-gray-500">
                  What are Design Principles?… To understand design principles,
                  we first discuss the principles.{" "}
                </p>
              </div>
            </div>
            <div className="w-[60%] mt-8">
              <img src={back19} alt="" className="hidden lg:block" />
              <div className="p-2">
                <p className="hidden lg:block text-sm text-[#7E8492] justify-between pb-5">
                  Published in Insight Jan 30, 2021
                </p>
                <h3 className="hidden lg:block text-3xl font-semibold mt-2">
                  Using Grid in website design
                </h3>
                <p className="hidden lg:block text-gray-500">
                  Andi: "What's the grid like?" Toni: “Like below…”
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-[#1D1E25] w-full lg:px-36 py-20 px-10">
        <div className="flex flex-col lg:flex-row gap-10">
          <div className="lg:w-[50%] m-auto">
            <img src={back20} alt="" className="w-full" />
            <h2 className="text-white text-[30px]">
              How we perform long-running tasks using AWS services
            </h2>
            <p className="text-[#7E8492] text-[18px] mt-3">
              Webflow is web design tool as well as a hosting platform and CMS
              all in one. While you are probably familiar with all of these,
              they are usually entirely separate tools.
            </p>
          </div>
          <div className="lg:w-[50%]">
            <img src={back21} alt="" className="w-full" />
            <h2 className="text-white text-[35px] underline">
              How to ask when doing User Research
            </h2>
            <p className="text-[#7E8492] text-[18px] mt-3">
              Bro, the story is that you want to make an application for buying
              and selling goods on the market. During user research, what do you
              think you will ask people?
            </p>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row gap-10 mt-36">
          <div className="lg:w-[50%]">
            <img src={back22} alt="" className="w-full" />
            <h2 className="text-white text-[37px]">
              Layout Exploration — Simple exercise but big effect
            </h2>
            <p className="text-[#7E8492] text-[18px] mt-3">
              Make alternatives or other options for the design we are making.
              For example, we are creating a website design. Then there is the
              testimonial section.
            </p>
          </div>
          <div className="lg:w-[50%] m-auto lg:mt-[-250px]">
            <img src={back23} alt="" className="w-full" />
            <h2 className="text-white text-[37px]">
              Webflow Break the Coding Barrier
            </h2>
            <p className="text-[#7E8492] text-[18px] mt-3">
              Webflow is web design tool as well as a hosting platform and CMS
              all in one. While you are probably familiar with all of these,
              they are usually entirely separate tools.
            </p>
          </div>
        </div>
      </section>
      <section>
        <div className="flex flex-col lg:flex-row lg:justify-between lg:ml-[10%] mx-20 mt-20 pb-20">
          <div>
            <p className="text-[40px] font-bold mb-3">Articles</p>
            <p className="text-gray-500 text-[18px]">
              Complex tech decoded by engineers, business <br /> trends analyzed
              by experts.
            </p>
          </div>
          <div className="hidden lg:flex lg:flex-row lg:items-center lg:gap-5">
            <img src={left} alt="" />
            <img src={right} alt="" />
          </div>
        </div>
        <div className="py-10 px-20">
          <div className="container mx-3 flex flex-col md:flex-row gap-8">
            <div className="bg-white overflow-hidden w-full md:w-1/3">
              <img
                src={back24}
                alt="UX Designer Portfolio"
                className="w-full object-cover"
              />
              <div className="p-6">
                <h2 className="text-lg font-semibold mb-4">
                  List of UX Designer Portfolio / Case Studies where you can
                  make money
                </h2>
                <p className="text-gray-600 mb-6">
                  Here are some portfolios / Case Studies from UX Designers that
                  you can use as a reference for creating a portfolio. Two
                  interesting things from their portfolio are:
                </p>
                <a href="blog_details.html">
                  <button className="text-black px-4 py-2 rounded-3xl border-2 border-gray-200 hover:bg-blue-700 hover:text-white">
                    Read More
                  </button>
                </a>
              </div>
            </div>
            <div className="  overflow-hidden w-full md:w-1/3 hidden lg:block ">
              <img
                src={back25}
                alt="Designing Career"
                className="w-full object-cover"
              />
              <div className="p-6">
                <h2 className="text-lg font-semibold mb-4">
                  Skyrocketing in The Designing Career, Why Not?
                </h2>
                <p className="text-gray-600 mb-6">
                  Ever thought of jumping into the world of design as a career?
                  If not, you may want to look at what the word ‘design’
                  actually means.
                </p>
                <a href="blog_details.html">
                  <button className="text-black px-4 py-2 rounded-3xl border-2 border-gray-200 hover:bg-blue-700 hover:text-white">
                    Read More
                  </button>
                </a>
              </div>
            </div>
            <div className=" overflow-hidden w-full md:w-1/3 hidden lg:block">
              <img
                src={back26}
                alt="UI Design Elements"
                className="w-full object-cover"
              />
              <div className="p-6">
                <h2 className="text-lg font-semibold mb-4">
                  Elements that may be missed when designing the UI
                </h2>
                <p className="text-gray-600 mb-6">
                  This is an article that talks about the little elements that
                  are often overlooked when designing UI.
                </p>
                <a href="blog_details.html">
                  <button className="text-black px-4 py-2 rounded-3xl border-2 border-gray-200 hover:bg-blue-700 hover:text-white">
                    Read More
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Blog;
