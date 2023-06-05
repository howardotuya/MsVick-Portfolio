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
import nav5 from "../../public/user.png";
import nav6 from "../../public/sms-edit.png";
import mockup from "../../public/mockup.png";

export default function Home() {
  useEffect(() => {
    document.getElementById("sidebar2").style.display = "none";
    document.body.classList.add('bodyW'); 
  })
  
  const popuphandler = () => {
    const popup = document.getElementById("sidebar2");
    if (popup.style.display == "none") {
      popup.style.display = "flex";
    } else {
      popup.style.display = "none";
    }
  };

  return (
    <>
      <nav
        id="sidebar2"
        className="z-50 text-white hidden sidebar justify-end items-end overflow-hidden"
      >
        <div
          id="sidebar-container2"
          className="gap-10 overflow-scroll lg:overflow-hidden py-10 px-5 lg:p-10 flex flex-col"
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

          <div className=" flex justify-start items-start flex-col gap-10">
            <Link
              href="/about"
              onClick={popuphandler}
              className="flex items-center gap-4"
            >
              <Image
                className="h-10 w-auto"
                src={nav5}
                alt="Personal Card Icon"
                quality={100}
                priority
              />
              <p className="sidebar-text2">About</p>
            </Link>
            <Link
              href="/"
              onClick={popuphandler}
              className="flex items-center gap-4"
            >
              <Image
                className="h-10 w-auto"
                src={nav3}
                alt="Path Square Icon"
                quality={100}
                priority
              />
              <p className="sidebar-text2">Portfolio</p>
            </Link>
            <Link
              href="/about"
              onClick={popuphandler}
              className="flex items-center gap-4"
            >
              <Image
                className="h-10 w-auto"
                src={nav2}
                alt="Personal Card Icon"
                quality={100}
                priority
              />
              <p className="sidebar-text2">About</p>
            </Link>
            <Link
              href="/contact"
              onClick={popuphandler}
              className="flex items-center gap-4"
            >
              <Image
                className="h-10 w-auto"
                src={nav6}
                alt="SMS Icon"
                quality={100}
                priority
              />
              <p className="sidebar-text2">Contact</p>
            </Link>
          </div>

          <div className="w-full pt-10">
            <Link className="mini-CTA" href="">Got a Project?</Link>
          </div>
        </div>
      </nav>

      <header className="w-full head-naav bg-white fixed top-0 left-0 right-0">
        <nav className="flex justify-between naav items-center px-5 md:px-16 lg:px-28 pt-16 pb-10 lg:py-10">
          <Link className="block" href="/">
            <Image
              className="lg:h-16 h-10 w-auto"
              src={logoB}
              alt="MsVick Logo"
              quality={100}
              priority
            />
          </Link>
          <div className="hidden lg:flex gap-10">
            <Link href="#">About </Link>
            <Link href="#">Projects</Link>
            <Link href="#">Case Studies</Link>
            <Link href="#">Contact</Link>
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
        <section className="flex px-5 lg:px-28 bodyW flex-col justify-center items-center text-center pt-20 lg:pt-36">
          <div className="max-w-5xl flex flex-col gap-4 lg:gap-2">
            <h2 className="portfolio-h2">Designing for impact</h2>
            <p className="phb">Creating adaptive and intuitive digital solutions for early-stage startups who are building SaaS, Healthcare and Lifestyle products</p>
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

      </main>

    </>
  );
}
