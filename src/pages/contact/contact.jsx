import React from "react";
import map from "../../assets/Map.png"
import pin from "../../assets/Pin.png"
import logo1 from "../../assets/logo1.png"
import logo2 from "../../assets/logo2.png"
import logo3 from "../../assets/logo3.png"
import logo4 from "../../assets/logo4.png"
import logo5 from "../../assets/logo5.png"
import logo6 from "../../assets/logo6.png"
import logo7 from "../../assets/logo7.png"
import logo8 from "../../assets/logo8.png"
import compony from "../../assets/Image (2).png"


function Contact() {
  return (
    <div>
      <div className="ml-5 text-2xl font-bold text-center lg:text-start lg:mt-32 lg:text-5xl lg:ml-20">
        <h1>
          Contact our team to
          <br />
          find out more
        </h1>
      </div>
      <div className="flex-row items-center gap-20 m-10 mt-16 lg:flex">
        <div>
          <div className="relative z-0">
            <img src={map} alt="" />
            <img
                src={pin}
                alt=""
                className="hidden lg:block lg:absolute left-[82%] top-[70%]"
              />
            <div className="hidden lg:block lg:absolute top-58 bg-white p-3 rounded-lg left-[73%]">
              <h1 className="font-bold">Yogja, INA</h1>
              <p className="mt-2 text-[#7E8492]">
                100 Smith Street <br /> Collingwood VIC 3066 AU
              </p>
            </div>
          </div>
        </div>
        <div className="mt-10 ml-20">
          <div>
            <h1 className="text-xl">Support</h1>
            <p className="text-[#7E8492]">
              Our friendly team is
              <br /> here to help.
            </p>
            <p className="mt-5 font-bold">support@sans.com</p>
          </div>
          <div className="mt-24">
            <h1 className="text-xl">Sales</h1>
            <p className="text-[#7E8492]">
              Questions or queries?
              <br /> Get in touch!
            </p>
            <p className="mt-5 font-bold">sales@sans.com</p>
          </div>
          <div className="mt-24">
            <h1 className="text-xl">Phone</h1>
            <p className="text-[#7E8492]">
              Mon-Fri from 8am to
              <br /> 5pm.
            </p>
            <p className="mt-5 font-bold">+1 (435) 345-7655</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col  items-center justify-between w-[90%] m-auto lg:flex lg:flex-row mt-52">
        <div>
          <h1 className="text-5xl font-bold">890+</h1>
          <p className="text-[#7E8492] text-xl">
            Some big companies that we work
            <br /> with, and trust us very much
          </p>
        </div>
        <div>
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
        </div>
      </div>
      <div className="flex w-[90%] mt-32">
        <div className=" lg:relative bg-white lg:w-[608px] h-[784px] top-[50%] left-[10%] rounded-lg">
          <div className="p-10">
            <h1 className="text-2xl lg:text-5xl ">Let’s level up your brand</h1>
            <p className="text-[#7E8492] mt-5">
              You can reach us anytime{" "}
              <span className="text-[#1463FF]">
                hellosansbrothers@gmail.com
              </span>
            </p>
          </div>
          <div className="flex flex-col lg:flex lg:flex-row">
            <div>
              <label htmlFor="inp1">First name</label>
              <br />
              <input
                type="text"
                id="inp1"
                placeholder="First name"
                className="p-2 border-[1px] border-[gray] mx-[20px] rounded-lg"
              />
            </div>
            <div>
              <label htmlFor="inp2">Last name</label>
              <br />
              <input
                type="text"
                id="inp2"
                placeholder="Last name"
                className="p-2 border-[1px] border-[gray] rounded-lg"
              />
            </div>
          </div>
          <div className="mt-2 ml-5 lg:p-5 lg:ml-0">
            <label htmlFor="mail">Email</label>
            <br />
            <input
              type="text"
              id="mail"
              placeholder="you@company.com"
              className="w-[200px] border-[1px] border-[gray]  p-2 rounded-lg lg:border-[1px] lg:p-2 lg:rounded-lg  lg:w-[500px]"
            />
          </div>
          <div className="p-5">
            <p>Phone number</p>
            <div className="flex">
              <select
                name=""
                id="us"
                className="p-3 border-[1px] border-[gray] rounded-l-lg "
              >
                <option value="">US</option>
              </select>
              <p className="w-[200px] border-[1px] border-[gray] p-2 rounded-r-lg lg:w-[430px]">
                +1 (555) 000-0000
              </p>
            </div>
          </div>
          <div className="p-5">
            <p>Message</p>
            <textarea
              name=""
              id="mes"
              placeholder="Leave us a message..."
              className="w-[300px] border-[1px] border-[gray] p-2 rounded-lg lg:w-[500px]"
              defaultValue={""}
            />
            <br />
          </div>
          <div className="p-10">
            <button className="p-2 bg-[#1D1E25] text-white rounded-full">
              Get Started
            </button>
          </div>
        </div>
        <div className="hidden lg:block">
          <img src={compony} className="h-[900px]" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Contact;
