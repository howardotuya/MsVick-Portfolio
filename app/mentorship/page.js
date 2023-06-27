"use client";
import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/navbar";
import expand from "../../public/expand.png";

export default function Home() {
  useEffect(() => {
    document.querySelector(".expandcont01").style.display = "block";
    document.querySelector(".expand-icon").style.transform = "rotate(90deg)";
    document.querySelector(".expandcont011").style.display = "none";
    document.querySelector(".expandcont0111").style.display = "none";
    document.querySelector(".expandcont01111").style.display = "none";
  }, []);

  const expand01 = () => {
    document.querySelector(".expand-icon").style.transition =
      "transform 300ms ease-out";
    if (document.querySelector(".expandcont01").style.display == "none") {
      setTimeout(() => {
        document.querySelector(".expandcont01").style.display = "block";
      }, 300);
      document.querySelector(".expand-icon").style.transform = "rotate(90deg)";
    } else {
      setTimeout(() => {
        document.querySelector(".expandcont01").style.display = "none";
      }, 300);
      document.querySelector(".expand-icon").style.transform = "rotate(0deg)";
    }
  }

  const expand011 = () => {
    document.querySelector(".expand-icon1").style.transition =
      "transform 300ms ease-out";
    if (document.querySelector(".expandcont011").style.display == "none") {
      setTimeout(() => {
        document.querySelector(".expandcont011").style.display = "block";
      }, 300);
      document.querySelector(".expand-icon1").style.transform = "rotate(90deg)";
    } else {
      setTimeout(() => {
        document.querySelector(".expandcont011").style.display = "none";
      }, 300);
      document.querySelector(".expand-icon1").style.transform = "rotate(0deg)";
    }
  }

  const expand0111 = () => {
    document.querySelector(".expand-icon11").style.transition =
      "transform 300ms ease-out";
    if (document.querySelector(".expandcont0111").style.display == "none") {
      setTimeout(() => { 
        document.querySelector(".expandcont0111").style.display = "block";
      }, 300);
      document.querySelector(".expand-icon11").style.transform = "rotate(90deg)";
    } else {
      setTimeout(() => {
        document.querySelector(".expandcont0111").style.display = "none";
      }, 300);
      document.querySelector(".expand-icon11").style.transform = "rotate(0deg)";
    }
  }

  const expand01111 = () => {
    document.querySelector(".expand-icon111").style.transition =
      "transform 300ms ease-out";
    if (document.querySelector(".expandcont01111").style.display == "none") {
      setTimeout(() => { 
        document.querySelector(".expandcont01111").style.display = "block";
      }, 300);
      document.querySelector(".expand-icon111").style.transform = "rotate(90deg)";
    } else {
      setTimeout(() => {
        document.querySelector(".expandcont01111").style.display = "none";
      }, 300);
      document.querySelector(".expand-icon111").style.transform = "rotate(0deg)";
    }
  }

  return (
    <>
      <Navbar />
      <main className="w-full pt-main">
        <div className="bodyCon">
          <section className="lg:pt-20 pt-[52px] flex flex-col gap-9 lg:gap-6">
            <div className="flex uppercase flex-col justify-center items-center h-full">
              <p className="bg-text">MsVick Mentorship</p>
              <p className="otbgt24">MsVick Mentorship</p>
            </div>
            <div className="text-center">
              <p>
                Become thoroughly groomed and excel as highly sort after
                professionals in Design & Tech
              </p>
            </div>
          </section>

          <section>
            <div class="flex flex-col lg:flex-row gap-5 pt-20 lg:pb-28 lg:pt-24">
              <div class="flex flex-col gap-10 justify-center items-center text-center p-4 lg:px-[52px] lg:py-[66px] border border-[#fff9f3]">
                <div class=" flex flex-col gap-4">
                  <h2 className="fmicrac uppercase text-2xl lg:text-[32px] leading-[140%]">
                    One-on-one
                  </h2>
                  <p>
                    With personalized attention and career guidance, you can
                    overcome challenges, develop your skills, and achieve
                    success by leveraging on a one-on-one mentorship experience.
                  </p>
                </div>
                <div class=" inline-block w-full">
                  <button className="purple-cta w-full lg:w-auto">
                    Join waitlist
                  </button>
                </div>
              </div>
              <div class="flex flex-col gap-10 justify-center items-center text-center p-4 lg:px-[52px] lg:py-[66px] border border-[#fff9f3]">
                <div class=" flex flex-col gap-4">
                  <h2 className="fmicrac uppercase text-2xl lg:text-[32px] leading-[140%]">
                    Collaborative
                  </h2>
                  <p>
                    Connect with other talented professionals, share ideas, and
                    support one another, build relationships and expand your
                    network with collaborative mentorship experience.
                  </p>
                </div>
                <div class=" inline-block w-full">
                  <button className="purple-cta w-full lg:w-auto">
                    Join waitlist
                  </button>
                </div>
              </div>
            </div>
          </section>

          <section class="flex flex-col gap-10 pt-20">
            <div>
              <h2 class="fmicrac text-5xl leading-[110%]">FAQS</h2>
            </div>

            <div class="p-6 flex flex-col gap-10 border border-[#fff9f3]">
              <div class="exp-cont">
                <div
                  onClick={expand01}
                  className="flex cursor-pointer gap-4 items-center expand-button"
                >
                  <div class="flex-00 expand-icon ">
                    <Image
                      src={expand}
                      alt=""
                      className="h-6 w-6 lg:h-10 lg:w-10"
                      priority
                    />
                  </div>
                  <span className="exp-text ">
                    How do I know if I am selected for the next cycle?
                  </span>
                </div>
                <span class="p-6 hidden expandcont01">
                  If you joined the waitlist, an email will be sent to you along
                  with an application link. Right before the next cycle begins,
                  you will receive an email letting you know that you have been
                  selected, along with some information on getting started.
                </span>
              </div>
              <div class="exp-cont">
                <div
                  onClick={expand011}
                  className="flex cursor-pointer gap-4 items-center expand-button"
                >
                  <div class="flex-00 expand-icon1 ">
                    <Image
                      src={expand}
                      alt=""
                      className="h-6 w-6 lg:h-10 lg:w-10"
                      priority
                    />
                  </div>
                  <span className="exp-text1">How long is a cycle?</span>
                </div>
                <span class="p-6 hidden expandcont011">
                  If you joined the waitlist, an email will be sent to you along
                  with an application link. Right before the next cycle begins,
                  you will receive an email letting you know that you have been
                  selected, along with some information on getting started.
                </span>
              </div>
              <div class="exp-cont">
                <div
                  onClick={expand0111}
                  className="flex cursor-pointer gap-4 items-center expand-button"
                >
                  <div class="flex-00 expand-icon11 ">
                    <Image
                      src={expand}
                      alt=""
                      className="h-6 w-6 lg:h-10 lg:w-10"
                      priority
                    />
                  </div>
                  <span className="exp-text11">Is this a free or paid mentorship program?</span>
                </div>
                <span class="p-6 hidden expandcont0111">
                  If you joined the waitlist, an email will be sent to you along
                  with an application link. Right before the next cycle begins,
                  you will receive an email letting you know that you have been
                  selected, along with some information on getting started.
                </span>
              </div>
              <div class="exp-cont">
                <div
                  onClick={expand01111}
                  className="flex cursor-pointer gap-4 items-center expand-button"
                >
                  <div class="flex-00 expand-icon111 ">
                    <Image
                      src={expand}
                      alt=""
                      className="h-6 w-6 lg:h-10 lg:w-10"
                      priority
                    />
                  </div>
                  <span className="exp-text111">What should I expect from this mentorship program?</span>
                </div>
                <span class="p-6 hidden expandcont01111">
                  If you joined the waitlist, an email will be sent to you along
                  with an application link. Right before the next cycle begins,
                  you will receive an email letting you know that you have been
                  selected, along with some information on getting started.
                </span>
              </div>
            </div>

            <div class="flex flex-col gap-6">
              <p>
                Still got some clarifications to make about the program? Send
                MsVick a message.
              </p>

              <div class=" inline-block w-full">
                <button className="purple-cta w-full lg:w-auto">
                  Chat with MsVick
                </button>
              </div>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
