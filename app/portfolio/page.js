"use client"
import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import profile from "../../public/profile.png";
import Navbar from "@/components/navbar";
import logo from "../../public/Logo.png";
import menu from "../../public/menu.png";
import h1 from "../../public/h1.jpg";
import h2 from "../../public/h2.jpg";
import h3 from "../../public/h3.jpg";
import nav1 from "../../public/close-circle.png";
import nav2 from "../../public/personalcard.png";
import nav3 from "../../public/path-square.png";
import nav4 from "../../public/pen-tool.png";
import nav5 from "../../public/profile-2user.png";
import nav6 from "../../public/sms-edit.png";


export default function Home() {
  
    

  const popuphandler = () => {
    const popup = document.getElementById("sidebar");

    if (popup.style.display == "none") {
      popup.style.display = "flex";
    } else {
      popup.style.display = "none";
    }
  };

  if(typeof window !== 'undefined') {
  popuphandler();
  }

  return (
    <>
    
    <nav id="sidebar" className="z-50 hidden sidebar justify-end items-end overflow-hidden">
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
            <Link href="/about" onClick={popuphandler} className="flex items-center gap-4">
              <Image
                className="h-16 w-auto"
                src={nav2}
                alt="Personal Card Icon"
                quality={100}
                priority
              />
              <p className="sidebar-text">About</p>
            </Link>
            <Link href="/" onClick={popuphandler} className="flex items-center gap-4">
              <Image
                className="h-16 w-auto"
                src={nav3}
                alt="Path Square Icon"
                quality={100}
                priority
              />
              <p className="sidebar-text">Portfolio</p>
            </Link>
            <Link href="/" onClick={popuphandler} className="flex items-center gap-4">
              <Image
                className="h-16 w-auto"
                src={nav4}
                alt="Pen Tool Icon"
                quality={100}
                priority
              />
              <p className="sidebar-text">Studio</p>
            </Link>
            <Link href="/community" onClick={popuphandler} className="flex items-center gap-4">
              <Image
                className="h-16 w-auto"
                src={nav5}
                alt="Profile Icon"
                quality={100}
                priority
              />
              <p className="sidebar-text">Community</p>
            </Link>
            <Link href="/contact" onClick={popuphandler} className="flex items-center gap-4">
              <Image
                className="h-16 w-auto"
                src={nav6}
                alt="SMS Icon"
                quality={100}
                priority
              />
              <p className="sidebar-text">Contact</p>
            </Link>
          </div>
        </div>
      </nav>

      <header className="w-full h-full">
        {/* Navbar for Desktop */}
        <nav className="flex lg:py-10 pb-5 pt-14 justify-between">
          <Link href="/">
            <Image
              className="lg:h-16 h-8 w-auto"
              src={logo}
              alt="MsVick Logo"
              quality={100}
              priority
            />
          </Link>
          <div className=" cursor-pointer">
            <Image
              onClick={popuphandler}
              className="lg:h-16 h-8 w-auto"
              src={menu}
              alt="Hamburger Menu"
              quality={100}
              priority
            />
          </div>
        </nav>
      </header>

{/* 
      <main className="w-full">
        <section className="pt-112a">
          <div className="flex uppercase flex-col justify-center items-center h-full">
            <p className="bg-text">About</p>
            <p className="otbgt">About</p>
          </div>
        </section>

        <section>
          <div className="ab-cont pt-16 lg:pt-20 gap-10 flex flex-col justify-center items-center text-center">
            <p>MsVick is a leading brand that provides a range of top-notch solutions within the Tech ecosystem, including brand, design, product, development, community building and talent grooming consultation services.</p>
            <p>MsVick is known to offer exceptional services with resilience, excellence, and elegance, to clients in various industries, including early-stage startups building SaaS, Healthcare and Lifestyle products.</p>
            <p>Community lies at the heart of the MsVick brand. MsVick actively engages in community building initiatives to create a positive impact on the Tech ecosystem, promoting shared learning, diversity, sustainability, and social responsibility.</p>
          </div>

          <div className="pt-20 ab-cont text-center">
            <div className="greg gap-5 text-center flex flex-col lg:flex-row justify-center items-center">
              <p className="w-full lg:w-auto">Humanity</p>
              <p className="w-full lg:w-auto">integrity</p>
              <p className="w-full lg:w-auto">possibility mentality</p>
            </div>
            <p className="pt-10 lg:pt-6">MsVick upholds humanity, integrity and possibility mentality as its core values - in treating everyone with respect and empathy while being transparent in dealings with people and clients.</p>
          </div>
        </section>

        <section className="pt-200 w-full h-full">
          <div className="flex text-center uppercase flex-col justify-center items-center h-full">
            <p className="bg-text">Face of MsVick</p>
            <p className="otbgt">Face of MsVick</p>
          </div>
        </section>

        <section className="flex flex-col xl:items-stretch items-center justify-center lg:flex-row pt-8 lg:pt-20 gap-5">
          <div className="dax md:text-left text-center borderr p-6 gap-8 lg:p-10 lg:gap-10 flex flex-col">
            <p>I&apos;m <span>Victoria Alli-Johnson</span>, a <span>UI/UX/Product Designer</span> who believes in designing with a deep understanding of human psychology. I&aposm fascinated by how we connect, interpret, and respond to experiences, whether digital or physical.</p>
            <p>With a background primarily in early-stage startups and cross-functional teams, I specialize in crafting adaptive, flexible, intuitive, and useful user experiences for both businesses and customers.</p>
            <p>I bring additional skills in product management, enabling me to understand product roadmaps, PRDs, and FRS. Throughout my process, I prioritize clear communication and comprehensive documentation from start to finish</p>
          </div>

          <div className="dax cursor-pointer satgrn mx-600 overflow-hidden h-full relative borderr">
            <div className="overflow-hidden h-full relative border">
              <Image className=' sgi saturate-0 object-top w-full h-full' src={profile} alt="MsVick Profile" quality={100} priority  />
            </div>
            <span className="absolute sgb bgmilk bottom-0 left-0 w-full lg:w-auto text-center z-50">Connect with me on LinkedIn</span>
          </div>
        </section>
      </main>

      
      <footer className="lg:pt-28">
        <div className="pt-28 lg:pt-0">
          <p className="footp">
            (c) 2023 | Design by MsVick | Code by Howard Otuya
          </p>
        </div>
      </footer> */}
    </>
  );
}