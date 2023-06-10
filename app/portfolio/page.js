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

      <header className="w-full z-50 bodyW head-naav bg-white fixed top-0 left-0 right-0">
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
              <div className="w-full text-left lg:text-center flex flex-col gap-4 lg:gap-2">
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

        <section class="lg:pt-28 pt-20">
          <div className="flex uppercase pt-2 flex-col justify-center items-center h-full">
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
                      className="w-full h-auto hidden lg:block"
                      src={prone}
                      alt="Front Desk"
                      quality={100}
                      priority
                    />
                    <Image
                      className="w-full h-auto block lg:hidden"
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
                      className="w-full h-auto hidden lg:block"
                      src={prtwo}
                      alt="Bleep"
                      quality={100}
                      priority
                    />
                    <Image
                      className="w-full h-auto block lg:hidden"
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
                    A highly customizable Software-as-a-Service (SaaS) application that provides a wide range of online assessment solutions to various organizations
                    </p>
                  </div>
                  <div class="minusR">
                    <Image
                      className="w-full h-auto hidden lg:block"
                      src={prthree}
                      alt="Face of Testing"
                      quality={100} 
                      priority
                    />
                    <Image
                      className="w-full h-auto block lg:hidden"
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
                      className="w-full h-auto hidden lg:block"
                      src={prfour}
                      alt="OneID Mobile"
                      quality={100}
                      priority
                    />
                    <Image
                      className="w-full h-auto block lg:hidden"
                      src={prmob4}
                      alt="OneID Mobile"
                      quality={100}
                      priority
                    />
                  </div>
                  <div class="prm flex flex-col gap-4 lg:order-2 order-1">
                    <h2 class="prH">OneID Mobile</h2>
                    <p class="prp">
                    A digital ID app that helps customers manage data and seamlessly share with financial platforms.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
