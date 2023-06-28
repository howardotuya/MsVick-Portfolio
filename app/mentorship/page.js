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
      document.querySelector(".expandcont011").style.display = "none";
      document.querySelector(".expandcont0111").style.display = "none";
      document.querySelector(".expandcont01111").style.display = "none";
      document.querySelector(".expand-icon111").style.transform =
        "rotate(0deg)";
      document.querySelector(".expand-icon1").style.transform = "rotate(0deg)";
      document.querySelector(".expand-icon11").style.transform = "rotate(0deg)";
    } else {
      setTimeout(() => {
        document.querySelector(".expandcont01").style.display = "none";
      }, 300);
      document.querySelector(".expand-icon").style.transform = "rotate(0deg)";
    }
  };

  const expand011 = () => {
    document.querySelector(".expand-icon1").style.transition =
      "transform 300ms ease-out";
    if (document.querySelector(".expandcont011").style.display == "none") {
      setTimeout(() => {
        document.querySelector(".expandcont011").style.display = "block";
      }, 300);
      document.querySelector(".expandcont01").style.display = "none";
      document.querySelector(".expand-icon").style.transform = "rotate(0deg)";
      document.querySelector(".expand-icon11").style.transform = "rotate(0deg)";
      document.querySelector(".expand-icon111").style.transform =
        "rotate(0deg)";
      document.querySelector(".expandcont0111").style.display = "none";
      document.querySelector(".expandcont01111").style.display = "none";
      document.querySelector(".expand-icon1").style.transform = "rotate(90deg)";
    } else {
      setTimeout(() => {
        document.querySelector(".expandcont011").style.display = "none";
      }, 300);
      document.querySelector(".expand-icon1").style.transform = "rotate(0deg)";
    }
  };

  const expand0111 = () => {
    document.querySelector(".expand-icon11").style.transition =
      "transform 300ms ease-out";
    if (document.querySelector(".expandcont0111").style.display == "none") {
      setTimeout(() => {
        document.querySelector(".expandcont0111").style.display = "flex";
      }, 300);
      document.querySelector(".expandcont01").style.display = "none";
      document.querySelector(".expandcont011").style.display = "none";
      document.querySelector(".expandcont01111").style.display = "none";

      document.querySelector(".expand-icon").style.transform = "rotate(0deg)";
      document.querySelector(".expand-icon1").style.transform = "rotate(0deg)";
      document.querySelector(".expand-icon111").style.transform =
        "rotate(0deg)";

      document.querySelector(".expand-icon11").style.transform =
        "rotate(90deg)";
    } else {
      setTimeout(() => {
        document.querySelector(".expandcont0111").style.display = "none";
      }, 300);
      document.querySelector(".expand-icon11").style.transform = "rotate(0deg)";
    }
  };

  const expand01111 = () => {
    document.querySelector(".expand-icon111").style.transition =
      "transform 300ms ease-out";
    if (document.querySelector(".expandcont01111").style.display == "none") {
      setTimeout(() => {
        document.querySelector(".expandcont01111").style.display = "flex";
      }, 300);
      document.querySelector(".expand-icon111").style.transform =
        "rotate(90deg)";
      document.querySelector(".expandcont01").style.display = "none";
      document.querySelector(".expandcont011").style.display = "none";
      document.querySelector(".expandcont0111").style.display = "none";
      document.querySelector(".expand-icon").style.transform = "rotate(0deg)";
      document.querySelector(".expand-icon1").style.transform = "rotate(0deg)";
      document.querySelector(".expand-icon11").style.transform = "rotate(0deg)";
    } else {
      setTimeout(() => {
        document.querySelector(".expandcont01111").style.display = "none";
      }, 300);
      document.querySelector(".expand-icon111").style.transform =
        "rotate(0deg)";
    }
  };

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

          <section class="flex flex-col gap-4 lg:gap-10 pt-20 pb-5 lg:pb-20">
            <div>
              <h2 class="fmicrac text-2xl leading-[140%] lg:text-5xl lg:leading-[110%]">
                FAQS
              </h2>
            </div>

            <div class="p-4 lg:p-6 flex flex-col gap-6 lg:gap-10 border border-[#fff9f3]">
              <div class="exp-cont flex flex-col gap-2 lg:gap-4">
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
                <p class="lg:p-6 p-4 hidden expandcont01">
                  If you joined the waitlist, an email will be sent to you along
                  with an application link. Right before the next cycle begins,
                  you will receive an email letting you know that you have been
                  selected, along with some information on getting started.
                </p>
              </div>
              <div class="exp-cont flex flex-col gap-2 lg:gap-4">
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
                <p class="lg:p-6 p-4 hidden expandcont011">
                  A cycle runs for <span class="blod">6 months.</span>
                </p>
              </div>
              <div class="exp-cont flex flex-col gap-2 lg:gap-4">
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
                  <span className="exp-text11">
                    Is this a free or paid mentorship program?
                  </span>
                </div>
                <span class="lg:p-6 p-4 hidden flex-col gap-6 expandcont0111">
                  <p>
                    The mentorship program offers three (3) packages, as
                    follows;
                  </p>
                  <div class="flex flex-col lg:flex-row gap-6">
                    <div class="bodyW lg:w-1/3 w-full justify-center flex flex-col gap-12 p-6 lg:p-10">
                      <div class="flex flex-col gap-4">
                        <h2 class="fmicrac text-xl leading-[110%]">Basic</h2>
                        <ul class="pl-4 list-disc">
                          <li>One-time 1hr free career consultation</li>
                          <li>Learning Plan</li>
                          <li>1hr one-on-one check in, once a month</li>
                        </ul>
                      </div>
                      <div>
                        <p class="text-[32px]">FREE</p>
                        <button class="mentcta">For 6 months</button>
                      </div>
                    </div>
                    <div class="bodyW lg:w-1/3 w-full justify-center flex flex-col gap-12 p-6 lg:p-10">
                      <div class="flex flex-col gap-4">
                        <h2 class="fmicrac text-xl leading-[110%]">Standard</h2>
                        <ul class="pl-4 list-disc">
                          <li>Everything in BASIC</li>
                          <li>30mins one-on-one session a week</li>
                          <li>Mock interview</li>
                          <li>Portfolio building</li>
                        </ul>
                      </div>
                      <div>
                        <p class="text-[32px]">₦120,000</p>
                        <button class="mentcta">For 6 months</button>
                      </div>
                    </div>
                    <div class="bodyW lg:w-1/3 w-full justify-center flex flex-col gap-12 p-6 lg:p-10">
                      <div class="flex flex-col gap-4">
                        <h2 class="fmicrac text-xl leading-[110%]">Premium</h2>
                        <ul class="pl-4 list-disc">
                          <li>Everything in STANDARD</li>
                          <li>Collaborative mentorship</li>
                          <li>Career roadmapping</li>
                          <li>Project-based learning</li>
                        </ul>
                      </div>
                      <div>
                        <p class="text-[32px]">₦250,000</p>
                        <button class="mentcta">For 6 months</button>
                      </div>
                    </div>
                  </div>
                </span>
              </div>
              <div class="exp-cont flex flex-col gap-2 lg:gap-4">
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
                  <span className="exp-text111">
                    What should I expect from this mentorship program?
                  </span>
                </div>
                <span class="hidden p-6 gap-2 flex-col expandcont01111">
                  <ul class="list-disc pl-4 leading-[160%]">
                    <li>
                      Regardless of what package you choose, you will have
                      access to one-on-one mentorship experience
                    </li>
                    <li>
                      However, each package has different sessions and durations
                    </li>
                    <li>
                      The basic package gives you access to a 1 hour a month
                      one-on-one mentorship experience
                    </li>
                    <li>
                      The standard package gives you access to a 30 minutes a
                      week one-on-one mentorship experience, in addition to a
                      once a month check-in
                    </li>
                    <li>
                      The premium package comes with the collaborative
                      mentorship where you get to network with 2 or 4 other
                      mentees like you. This is in addition to the one-on-one
                      mentorship experience you will also receive
                    </li>
                  </ul>
                  <p class="uppercase">At the end of the cycle, you will,</p>
                  <ul class="list-disc pl-4 leading-[160%]">
                    <li>Receive a badge and certificate of completion</li>
                    <li>
                      Have a solid portfolio and qualities of a job-ready
                      professional
                    </li>
                    <li>Become a member of the RoadTrip Community</li>
                    <li>
                      Have first hand access to job opportunities and gig
                      recommendations
                    </li>
                  </ul>
                </span>
              </div>
            </div>

            <div class="flex pt-6 lg:pt-0 flex-col gap-6">
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

      <footer className="lg:pt-28 ">
        <div className="pt-20 lg:pt-0">
          <p className="footp">
            (c) 2023 | Design by MsVick | Code by Howard Otuya
          </p>
        </div>
      </footer>
    </>
  );
}
