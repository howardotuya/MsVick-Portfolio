"use client";
import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/navbar";
import logoB from "../../public/Logo.png";
import menu from "../../public/menu.png";
import nav1 from "../../public/close-circle.png";
import nav2 from "../../public/personalcard.png";
import nav3 from "../../public/path-square.png";
import nav4 from "../../public/pen-tool.png";
import prone from "../../public/prone.png";
import prtwo from "../../public/prtwo.png";
import prthree from "../../public/prthree.png";
import prfour from "../../public/prfour.png";
import refme from "../../public/refme.png";
import inter from "../../public/inter.png";
import oneIDC from "../../public/oneIDC.png";
import ranka from "../../public/ranka.png";
import refmeS from "../../public/refmeS.png";
import interS from "../../public/interS.png";
import oneIDCs from "../../public/oneIDCS.png";
import rankaS from "../../public/rankaS.png";
import prmob1 from "../../public/prmob1.png";
import prmob2 from "../../public/prmob2.png";
import prmob3 from "../../public/prmob3.png";
import prmob4 from "../../public/prmob4.png";
import behance from "../../public/behance-fillg.png";
import instagram from "../../public/instagram-fillg.png";
import linkedin from "../../public/linkedin-fillg.png";
import twitter from "../../public/twitter-fillg.png";

export default function Projects() {
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
            <Link className="mini-CTA" href="/contact">
              Got a Project?
            </Link>
          </div>
        </div>
      </nav>

      <header className="w-full bg-balck z-40 head-naav fixed top-0 left-0 right-0">
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
            <Link href="#" className="inactive-nb">
              MsVick{" "}
            </Link>
            <Link href="#">Projects</Link>
            <Link href="#" className="inactive-nb">
              Case Studies
            </Link>
          </div>
          <div className="hidden lg:block cursor-pointer">
            <Link href="/contact" className="bg-greeen py-4 px-6 block">
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
      </header>

      <main className="w-full pt-main2">
        <div className="w-full">
          <div className="bodyCon">
            <section className="flex flex-col md:items-center  text-center py-120p">
              <div className="flex gap-2 flex-col">
                <h2 className="pro-h2">Projects</h2>
                <p className="pro-p">
                  The ways of an Idan cannot be known - says Idan
                </p>
              </div>
            </section>

            <section>
              <div className="pb-120xx">
                <div className="flex flex-col lg:flex-row py-16 lg:py-10 items-center gap-16 lg:gap-20">
                  <div className="prm flex flex-col gap-4">
                    <h2 className="prH">FrontDesk</h2>
                    <p className="prp">
                      A Visitor Management System with event and participant
                      management features, quick check-ins and customizable
                      functionalities
                    </p>
                  </div>
                  <div className="minusR">
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

              <div className="py-120">
                <div className="flex py-10 items-center gap-120 flex-col lg:flex-row">
                  <div className="lg:-ml-16 lg:order-1 order-2">
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
                  <div className="prm flex flex-col gap-4 lg:order-2 order-1">
                    <h2 className="prH">Bleep</h2>
                    <p className="prp">
                      A personal security tracking mobile application, with
                      reporting & community features, emergency kit, and a
                      metric monitor web portal.
                    </p>
                  </div>
                </div>
              </div>

              <div className="py-120">
                <div className="flex flex-col lg:flex-row py-16 lg:py-10 items-center gap-16 lg:gap-20">
                  <div className="prm flex flex-col gap-4">
                    <h2 className="prH">Face of Testing</h2>
                    <p className="prp">
                      A highly customizable Software-as-a-Service (SaaS)
                      application that provides a wide range of online
                      assessment solutions to various organizations
                    </p>
                  </div>
                  <div className="minusR">
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

              <div className="py-120">
                <div className="flex py-10 items-center gap-120 flex-col lg:flex-row">
                  <div className="lg:-ml-16 lg:order-1 order-2">
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
                  <div className="prm flex flex-col gap-4 lg:order-2 order-1">
                    <h2 className="prH">OneID Mobile</h2>
                    <p className="prp">
                      A digital ID app that helps customers manage data and
                      seamlessly share with financial platforms.
                    </p>
                  </div>
                </div>
              </div>

              <div className="py-120">
                <div className="flex flex-col lg:flex-row py-16 lg:py-10 items-center gap-16 lg:gap-20">
                  <div className="prm flex flex-col gap-4">
                    <h2 className="prH">ReferenceMe</h2>
                    <p className="prp">
                      On ReferenceMe, employers are able to verify the character
                      and integrity of workers based on their employment history
                      and track record.
                    </p>
                  </div>
                  <div className="minusR">
                    <Image
                      className="w-full h-auto hidden md:block"
                      src={refme}
                      alt="ReferenceMe"
                      quality={100}
                      priority
                    />
                    <Image
                      className="w-full h-auto block md:hidden"
                      src={refmeS}
                      alt="ReferenceMe"
                      quality={100}
                      priority
                    />
                  </div>
                </div>
              </div>

              <div className="py-120">
                <div className="flex py-10 items-center gap-120 flex-col lg:flex-row">
                  <div className="lg:order-1 order-2 minusL">
                    <Image
                      className="w-full h-auto hidden md:block"
                      src={oneIDC}
                      alt="OneID console"
                      quality={100}
                      priority
                    />
                    <Image
                      className="w-full h-auto block md:hidden"
                      src={oneIDCs}
                      alt="OneID console"
                      quality={100}
                      priority
                    />
                  </div>
                  <div className="prm flex flex-col gap-4 lg:order-2 order-1">
                    <h2 className="prH">OneID Console</h2>
                    <p className="prp">
                      An API suite that helps financial platforms & businesses
                      verify necessary KYC details.
                    </p>
                  </div>
                </div>
              </div>

              <div className="py-120">
                <div className="flex flex-col lg:flex-row py-16 lg:py-10 items-center gap-16 lg:gap-20">
                  <div className="prm flex flex-col gap-4">
                    <h2 className="prH">Interviewer</h2>
                    <p className="prp">
                      A Software-as-a-service platform focused on promoting
                      seamless engagement between candidates and hiring teams of
                      organizations in various industries.
                    </p>
                  </div>
                  <div className="minusR">
                    <Image
                      className="w-full h-auto hidden md:block"
                      src={inter}
                      alt="interviewer Dashboard"
                      quality={100}
                      priority
                    />
                    <Image
                      className="w-full h-auto block md:hidden"
                      src={interS}
                      alt="interviewer Dashboard"
                      quality={100}
                      priority
                    />
                  </div>
                </div>
              </div>

              <div className="py-120ax">
                <div className="flex pt-10 pb-0 lg:py-10 items-center gap-120 flex-col lg:flex-row">
                  <div className="lg:order-1 order-2 minusL">
                    <Image
                      className="w-full h-auto hidden md:block"
                      src={ranka}
                      alt="Rankaque Dashboard"
                      quality={100}
                      priority
                    />
                    <Image
                      className="w-full h-auto block md:hidden"
                      src={rankaS}
                      alt="Rankaque Dashboard"
                      quality={100}
                      priority
                    />
                  </div>
                  <div className="prm flex flex-col gap-4 lg:order-2 order-1">
                    <h2 className="prH">Rankaque</h2>
                    <p className="prp">
                      A platform that allows Attendees to express questions
                      anonymously, while also helping the Facilitators get
                      through the most relevant questions faster.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section className="pro-goc flex flex-col gap-10 justify-center items-center">
              <div className="pro-go gap-6 flex flex-col justify-center items-center">
                <h2>Got A Project?</h2>
                <p>
                  Whether you&apos;re starting from scratch or looking to give a
                  fresh look to your existing product, let&apos;s connect and discuss
                  how we can design a product that meets your user&apos;s needs and
                  your business goals.
                </p>
              </div>
              <div className="flex justify-center items-center">
                <Link href="/contact" className="bg-greeen zBold block w-auto">
                  Let&apos;s Talk
                </Link>
              </div>
            </section>
          </div>
        </div>
      </main>

      <footer className="w-full">
        <div className="bodyCon">
          <div className="flex lg:text-left text-center fop flex-col py-6 gap-2">
            <div
              id=""
              className="flex flex-col lg:flex-row justify-between gap-2 lg:gap-0"
            >
              <div
                id=""
                className="flex justify-center lg:justify-start fop py-3 gap-2 lg:px-7"
              >
                <p className="">Designing for impact</p>
              </div>
              <div
                id="foot-1-2"
                className="flex justify-center lg:justify-start fop py-3 gap-2 lg:px-7"
              >
                <Link href="/about" className=" hover:underline">About</Link>
                <p className=" ">|</p>
                <Link href="/projects" className=" hover:underline ">Projects</Link>
                <p className=" ">|</p>
                <p className=" ">Case Studies</p>
                <p className=" ">|</p>
                <Link href="/contact" className=" hover:underline">Contact</Link>
              </div>
            </div>
            <div
              id=""
              className="flex flex-col lg:flex-row justify-between gap-2 lg:gap-0"
            >
              <div
                id=""
                className="flex justify-center lg:justify-start fop py-3 gap-2 lg:px-7"
              >
                <p className="">Victoria Alli-Johnson</p>
                <p className=" ">|</p>
                <p className=" ">UI/UX</p>
                <p className=" ">|</p>
                <p className=" ">Product Design</p>
              </div>
              <div
                id="foot-1-2"
                className="flex justify-center lg:justify-start fop py-3 gap-2 lg:px-7"
              >
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
            <div
              id=""
              className="flex flex-col lg:flex-row justify-between gap-2 lg:gap-0"
            >
              <div
                id=""
                className="flex flex-col lg:flex-row lg:flex-start justify-center lg:justify-start fosp py-3 gap-2 lg:px-7"
              >
                <p className="">(c)2023</p>
                <div className="hidden lg:flex">
                  <p>|</p>
                </div>
                <p className=" ">MsVick designed this</p>
                <div className="hidden lg:flex">
                  <p>|</p>
                </div>
                <p className=" ">Howard Otuya did the coding work</p>
              </div>
              <div
                id="foot-1-2"
                className="flex justify-center lg:justify-start fop py-3 gap-5 lg:px-7"
              >
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
      </footer>
    </>
  );
}
