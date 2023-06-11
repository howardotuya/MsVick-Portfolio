"use client";
import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/navbar";
import logoB from "../../public/LogoB.png";
import menu from "../../public/menuD.png";
import nav1 from "../../public/close-circle.png";
import nav2 from "../../public/personalcard.png";
import nav3 from "../../public/path-square.png";
import nav4 from "../../public/pen-tool.png";
import mockup from "../../public/mockup.png";
import prone from "../../public/prone.png";
import prtwo from "../../public/prtwo.png";
import prthree from "../../public/prthree.png";
import prfour from "../../public/prfour.png";
import prmob1 from "../../public/prmob1.png";
import prmob2 from "../../public/prmob2.png";
import prmob3 from "../../public/prmob3.png";
import prmob4 from "../../public/prmob4.png";
import cl1 from "../../public/cl1.png";
import cl2 from "../../public/cl2.png";
import cl3 from "../../public/cl3.png";
import cl4 from "../../public/cl4.png";
import behance from "../../public/behance-fillg.png";
import instagram from "../../public/instagram-fillg.png";
import linkedin from "../../public/linkedin-fillg.png";
import twitter from "../../public/twitter-fillg.png";

export default function Home() {
  useEffect(() => {
    document.getElementById("sidebar").style.display = "none";
  });

  const popuphandler = () => {
    const popup = document.getElementById("sidebar");
    if (popup.style.display == "none") {
      popup.style.display = "flex";
    } else {
      popup.style.display = "none";
    }
  };

  return (
    <>
      <nav
        id="sidebar"
        className="z-50 text-white hidden sidebar justify-end items-end overflow-hidden"
      >
        <div
          id="sidebar-container"
          className="gap-16 overflow-scroll lg:overflow-hidden py-10 px-5 lg:p-10 flex flex-col"
        >
          <div className="flex justify-end items-end">
            <Image
              className="h-16 w-auto"
              src={nav1}
              onClick={popuphandler}
              alt="Close Circle Icon"
              quality={100}
              priority
            />
          </div>

          <div className=" flex justify-start items-start flex-col gap-16">
            <Link
              href="/"
              onClick={popuphandler}
              className="flex items-center gap-4"
            >
              <Image
                className="h-16 w-auto"
                src={nav2}
                alt="Personal Card Icon"
                quality={100}
                priority
              />
              <p className="sidebar-text">MsVick</p>
            </Link>
            <Link
              href="/"
              onClick={popuphandler}
              className="flex items-center gap-4"
            >
              <Image
                className="h-16 w-auto"
                src={nav4}
                alt="Path Square Icon"
                quality={100}
                priority
              />
              <p className="sidebar-text">Projects</p>
            </Link>
            <Link
              href="/"
              onClick={popuphandler}
              className="flex items-center gap-4"
            >
              <Image
                className="h-16 w-auto"
                src={nav3}
                alt="Personal Card Icon"
                quality={100}
                priority
              />
              <p className="sidebar-text">Case Studies</p>
            </Link>
          </div>

          <div className="w-full">
            <Link className="mini-CTA" href="">
              Got a Project?
            </Link>
          </div>
        </div>
      </nav>

      <header className="w-full z-40 bodyW head-naav bg-white fixed top-0 left-0 right-0">
        <nav className="flex justify-between naav items-center px-5 md:px-16 lg:px-28 pt-16 pb-10 lg:py-10">
          <Link className="block" href="/">
            <Image
              className="lg:h-16 h-8 w-auto"
              src={logoB}
              alt="MsVick Logo"
              quality={100}
              priority
            />
          </Link>
          <div className="hidden lg:flex gap-10">
            <Link href="#">MsVick </Link>
            <Link href="#">Projects</Link>
            <Link href="#">Case Studies</Link>
          </div>
          <div className="hidden lg:block cursor-pointer">
            <Link href="#" className="CTA block">
              Got a project?
            </Link>
          </div>
          <div className="block lg:hidden">
            <Image
              className="lg:h-16 h-10 w-auto"
              onClick={popuphandler}
              src={menu}
              alt="MsVick Logo"
              quality={100}
              priority
            />
          </div>
        </nav>
        <div className="overflow-hidden play">
          <hr />
        </div>
      </header>

      <main className="w-full pt-main2">
        <div class="bg-white w-full">
          <div class="bodyCon">
            <section className="bodyW flex px-5 lg:px-28 bodyW flex-col justify-center items-center text-center pt-20 lg:pt-36">
              <div className="w-full text-left md:text-center flex flex-col gap-4 lg:gap-2">
                <h2 className="portfolio-h2 w-full lg:whitespace-nowrap">
                  Designing for impact
                </h2>
                <p className="portfolio-p max-w-5xl">
                  Creating adaptive and intuitive digital solutions for
                  early-stage startups who are building SaaS, Healthcare and
                  Lifestyle products
                </p>
              </div>
              <div className="pt-100">
                <Image
                  className="mockup"
                  src={mockup}
                  alt="Mockup"
                  quality={100}
                  priority
                />
              </div>
            </section>
          </div>
        </div>

        <section class="py-120r">
          <div className="flex uppercase flex-col justify-center items-center h-full">
            <p className="bg-text">Featured Projects</p>
            <p className="otbgtn">Featured Projects</p>
          </div>

          <div class="w-full">
            <div class="bodyCon overflow-x-hidden">
              <div class="py-120">
                <div class="flex flex-col lg:flex-row py-16 lg:py-10 items-center gap-16 lg:gap-20">
                  <div class="prm flex flex-col gap-4">
                    <h2 class="prH">FrontDesk</h2>
                    <p class="prp">
                      A Visitor Management System with event and participant
                      management features, quick check-ins and customizable
                      functionalities
                    </p>
                  </div>
                  <div class="minusR">
                    <Image
                      className="w-full h-auto hidden md:block"
                      src={prone}
                      alt="Front Desk"
                      quality={100}
                      priority
                    />
                    <Image
                      className="w-full h-auto block md:hidden"
                      src={prmob2}
                      alt="Front Desk"
                      quality={100}
                      priority
                    />
                  </div>
                </div>
              </div>

              <div class="py-120">
                <div class="flex py-10 items-center gap-120 flex-col lg:flex-row">
                  <div class="lg:-ml-16 lg:order-1 order-2">
                    <Image
                      className="w-full h-auto hidden md:block"
                      src={prtwo}
                      alt="Bleep"
                      quality={100}
                      priority
                    />
                    <Image
                      className="w-full h-auto block md:hidden"
                      src={prmob3}
                      alt="Bleep"
                      quality={100}
                      priority
                    />
                  </div>
                  <div class="prm flex flex-col gap-4 lg:order-2 order-1">
                    <h2 class="prH">Bleep</h2>
                    <p class="prp">
                      A personal security tracking mobile application, with
                      reporting & community features, emergency kit, and a
                      metric monitor web portal.
                    </p>
                  </div>
                </div>
              </div>

              <div class="py-120">
                <div class="flex flex-col lg:flex-row py-16 lg:py-10 items-center gap-16 lg:gap-20">
                  <div class="prm flex flex-col gap-4">
                    <h2 class="prH">Face of Testing</h2>
                    <p class="prp">
                      A highly customizable Software-as-a-Service (SaaS)
                      application that provides a wide range of online
                      assessment solutions to various organizations
                    </p>
                  </div>
                  <div class="minusR">
                    <Image
                      className="w-full h-auto hidden md:block"
                      src={prthree}
                      alt="Face of Testing"
                      quality={100}
                      priority
                    />
                    <Image
                      className="w-full h-auto block md:hidden"
                      src={prmob1}
                      alt="Face of Testing"
                      quality={100}
                      priority
                    />
                  </div>
                </div>
              </div>

              <div class="py-120">
                <div class="flex py-10 items-center gap-120 flex-col lg:flex-row">
                  <div class="lg:-ml-16 lg:order-1 order-2">
                    <Image
                      className="w-full h-auto hidden md:block"
                      src={prfour}
                      alt="OneID Mobile"
                      quality={100}
                      priority
                    />
                    <Image
                      className="w-full h-auto block md:hidden"
                      src={prmob4}
                      alt="OneID Mobile"
                      quality={100}
                      priority
                    />
                  </div>
                  <div class="prm flex flex-col gap-4 lg:order-2 order-1">
                    <h2 class="prH">OneID Mobile</h2>
                    <p class="prp">
                      A digital ID app that helps customers manage data and
                      seamlessly share with financial platforms.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="bg-white w-full">
          <div class="bodyCon">
            <div class="py-120w">
              <div class="py-125 flex flex-col gap-16 lg:gap-20">
                <div className="flex uppercase flex-col justify-center items-center h-full">
                  <p className="bg-textw">
                    Kind words from past employers and clients
                  </p>
                  <p className="otbgtw text-center">
                    Kind words from past employers and clients
                  </p>
                </div>

                <div class="flex flex-col gap-10">
                  <div class="t-cont">
                    <div class="lg:pr-48">
                      <div class="tc flex flex-col p-5 lg:p-10 gap-10">
                        <div className="tc-bt">
                          <p>
                            Let me begin by saying that I enjoyed working with
                            Victoria, a fantastic UI/UX developer who exceeded
                            my expectations. Victoria's work is outstanding, and
                            her attention to detail is unparalleled.
                          </p>
                          <p>
                            Throughout the process, she thoroughly understood
                            our company's brand and goals. She took the time to
                            listen to our wants and needs and worked hard to
                            deliver designs that perfectly matched our vision.
                          </p>
                          <p>
                            Her ability to think creatively and outside the box
                            truly distinguishes her. She approached every
                            problem in a novel and creative manner, and her
                            solutions were always well thought out and visually
                            appealing.
                          </p>
                          <p>
                            Victoria is an excellent communicator and
                            collaborator, in addition to her technical
                            abilities. She is always open to suggestions and
                            eager to make changes to ensure that the finished
                            product meets our needs and expectations.
                          </p>
                          <p>
                            Overall, I strongly recommend Victoria to anyone
                            looking for a passionate, dedicated, and talented
                            professional. Her work is exceptional, and I hope to
                            work with her again.
                          </p>
                        </div>
                        <div class="tc-subcont flex flex-col gap-2">
                          <h2 class="tc-subcont-h2">David Ikazoboh</h2>
                          <p class="tc-subcont-p">
                            PM, Amazon; CEO, Joda Solutions; Product Owner,
                            Rankaque
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="t-cont">
                    <div class="lg:pl-48">
                      <div class="tc flex flex-col p-5 lg:p-10 gap-10">
                        <div className="tc-bt">
                          <p>
                            Victoria is a very talented and experienced designer
                            with a keen eye for detail.
                          </p>
                          <p>
                            I enjoy(ed) working with her in every step of the
                            way.
                          </p>
                          <p>
                            She's highly professional and attentive to feedback.
                          </p>
                        </div>
                        <div class="tc-subcont flex flex-col gap-2">
                          <h2 class="tc-subcont-h2">OlaLekan Salami</h2>
                          <p class="tc-subcont-p">
                            Co-Founder & CEO, OneID Tech
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="t-cont">
                    <div class="lg:pr-48">
                      <div class="tc flex flex-col p-5 lg:p-10 gap-10">
                        <div className="tc-bt">
                          <p>
                            Victoria is an awesome UX designer who brings a wide
                            range of ideas and expertise to projects. She has
                            taken our UX designs way above our ideas at The
                            Winchester Company and Green&Nile.
                          </p>
                          <p>
                            We trust her exclusively to deliver world class
                            projects professionally and on time.
                          </p>
                          <p>
                            Her portfolio shows her dedication to learning new
                            skills and staying on top of best design practices
                            and she is definitely an asset to us.
                          </p>
                        </div>
                        <div class="tc-subcont flex flex-col gap-2">
                          <h2 class="tc-subcont-h2">Funbi Kuforiji</h2>
                          <p class="tc-subcont-p">Product Owner, Green&Nile</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="flex justify-center items-center lg:gap-12 gap-6 pt-16 lg:pt-20">
                <div>
                  <Image
                    className="w-auto w-cl"
                    src={cl1}
                    alt="One ID"
                    quality={100}
                    priority
                  />
                </div>
                <div>
                  <Image
                    className="w-auto w-cl"
                    src={cl2}
                    alt="JD solutions"
                    quality={100}
                    priority
                  />
                </div>
                <div>
                  <Image
                    className="w-auto w-cl"
                    src={cl3}
                    alt="Dragnet"
                    quality={100}
                    priority
                  />
                </div>
                <div>
                  <Image
                    className="w-auto w-cl"
                    src={cl4}
                    alt="Green&Mile"
                    quality={100}
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <div class="w-full">
        <div class="bodyCon">
          <div class="flex lg:text-left text-center fop flex-col py-6 gap-2">
            <div id="" class="flex flex-col lg:flex-row justify-between gap-2 lg:gap-0">
              <div id="" className="flex justify-center lg:justify-start fop py-3 gap-2 lg:px-7">
                <p className="">Designing for impact</p>
              </div>
              <div id="foot-1-2" className="flex justify-center lg:justify-start fop py-3 gap-2 lg:px-7">
                <p className="">About</p>
                <p className=" ">|</p>
                <p className=" ">Projects</p>
                <p className=" ">|</p>
                <p className=" ">Case Studies</p>
                <p className=" ">|</p>
                <p className=" ">Contact</p>
              </div>
            </div>
            <div id="" class="flex flex-col lg:flex-row justify-between gap-2 lg:gap-0">
              <div id="" className="flex justify-center lg:justify-start fop py-3 gap-2 lg:px-7">
                <p className="">Victoria Alli-Johnson</p>
                <p className=" ">|</p>
                <p className=" ">UI/UX</p>
                <p className=" ">|</p>
                <p className=" ">Product Design</p>
              </div>
              <div id="foot-1-2" className="flex justify-center lg:justify-start fop py-3 gap-2 lg:px-7">
                <p className="">SaaS</p>
                <p className=" ">|</p>
                <p className=" ">B2B</p>
                <p className=" ">|</p>
                <p className=" ">B2C</p>
                <p className=" ">|</p>
                <p className=" ">Healthcare</p>
                <p className=" ">|</p>
                <p className="">ConsumerTech</p>
              </div>
            </div>
            <div id="" class="flex flex-col lg:flex-row justify-between gap-2 lg:gap-0">
              <div id="" className="flex flex-col lg:flex-row lg:flex-start justify-center lg:justify-start fosp py-3 gap-2 lg:px-7">
                <p className="">(c)2023</p>
                <div className="hidden lg:flex"><p>|</p></div>
                <p className=" ">MsVick designed this</p>
                <div className="hidden lg:flex"><p>|</p></div>
                <p className=" ">Howard Otuya did the coding work</p>
              </div>
              <div id="foot-1-2" className="flex justify-center lg:justify-start fop py-3 gap-5 lg:px-7">
                <Image
                  className="w-5 h-5"
                  src={behance}
                  alt="behance"
                  quality={100}
                  priority
                />
                <Image
                  className="w-5 h-5"
                  src={linkedin}
                  alt="linkedin"
                  quality={100}
                  priority
                />
                <Image
                  className="w-5 h-5"
                  src={twitter}
                  alt="twitter"
                  quality={100}
                  priority
                />
                <Image
                  className="w-5 h-5"
                  src={instagram}
                  alt="instagram"
                  quality={100}
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
