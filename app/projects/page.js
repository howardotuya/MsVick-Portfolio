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
            <Link href="/contact" className="CTA block">
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
        <div className="w-full">
          <div className="bodyCon">

            <section>
              <div>
                
              </div>
            </section>

          </div>
        </div>

      </main>

      <footer className="w-full">
        <div className="bodyCon">
          <div className="flex lg:text-left text-center fop flex-col py-6 gap-2">
            <div id="" className="flex flex-col lg:flex-row justify-between gap-2 lg:gap-0">
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
            <div id="" className="flex flex-col lg:flex-row justify-between gap-2 lg:gap-0">
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
            <div id="" className="flex flex-col lg:flex-row justify-between gap-2 lg:gap-0">
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
      </footer>
    </>
  );
}
