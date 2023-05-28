"use client";
import {useEffect} from "react"
import Image from 'next/image';
import logo from "../public/Logo.png";
import menu from "../public/menu.png";
import h1 from "../public/h1.jpg";
import h2 from "../public/h2.jpg";
import h3 from "../public/h3.jpg";
import nav1 from "../public/close-circle.png";
import nav2 from "../public/personalcard.png";
import nav3 from "../public/path-square.png";
import nav4 from "../public/pen-tool.png";
import nav5 from "../public/profile-2user.png";
import nav6 from "../public/sms-edit.png";

const popuphandler = () => {
  const popup = document.querySelector(".sidebar");

  if (popup.style.display == "none") {
    popup.style.display = "flex";
  } else {
    popup.style.display = "none";
  }
};

export default function Home() {

  useEffect(() => {
  
    var imageDiv = document.querySelector('.one');
    var image = document.querySelector('.oneI');

    imageDiv.addEventListener('mouseleave', function() {
      image.style.transition = 'transform 300ms ease-out';
      image.style.transform = 'scale(1)';
    });
    imageDiv.addEventListener('mouseenter', function() {
      image.style.transition = 'transform 300ms ease-out';
      image.style.transform = 'scale(1.4)';
    });

    var imageDivTwo = document.querySelector('.two');
    var imageTwo = document.querySelector('.twoI');

    imageDivTwo.addEventListener('mouseleave', function() {
      imageTwo.style.transition = 'object-position 300ms ease-out';
      imageTwo.style.objectPosition = 'top';
    });
    imageDivTwo.addEventListener('mouseenter', function() {
      imageTwo.style.transition = 'object-position 300ms ease-out';
      imageTwo.style.objectPosition = 'center';
    });

    var imageDivThree = document.querySelector('.three');
    var imageThree = document.querySelector('.threeI');

    imageDivThree.addEventListener('mouseleave', function() {
      imageThree.style.transition = 'transform 300ms ease-out, object-position 300ms ease-out, right 300ms ease-out';
      imageThree.style.transform = 'scale(1)';
      imageThree.style.objectPosition = '100%';
      imageThree.style.right = '0';
    });
    imageDivThree.addEventListener('mouseenter', function() {
      imageThree.style.transition = 'transform 300ms ease-out, right 300ms ease-out, object-position 300ms ease-out';
      imageThree.style.transform = 'scale(1.4)';
      imageThree.style.objectPosition = '100% 50%';
      imageThree.style.right = '+10%';
    });
  })

  return (
    <>
    <nav className="z-50 sidebar justify-end items-end overflow-hidden">
        <div id="sidebar-container" className="gap-16 overflow-scroll lg:overflow-hidden py-10 px-5 lg:p-10 flex flex-col">

          <div className="flex justify-end items-end">
            <Image className="h-16 w-auto" src={nav1} onClick={popuphandler} alt="Close Circle Icon" quality={100} priority  />
          </div>

          <div className=" flex justify-start items-start flex-col gap-16">
            <div className="flex items-center gap-4">
              <Image className="h-16 w-auto" src={nav2} alt="Personal Card Icon" quality={100} priority  />
              <p className="sidebar-text">About</p>
            </div>
            <div className="flex items-center gap-4">
              <Image className="h-16 w-auto" src={nav3} alt="Path Square Icon" quality={100} priority  />
              <p className="sidebar-text">Portfolio</p>
            </div>
            <div className="flex items-center gap-4">
              <Image className="h-16 w-auto" src={nav4} alt="Pen Tool Icon" quality={100} priority  />
              <p className="sidebar-text">Studio</p>
            </div>
            <div className="flex items-center gap-4">
              <Image className="h-16 w-auto" src={nav5} alt="Profile Icon" quality={100} priority  />
              <p className="sidebar-text">Community</p>
            </div>
            <div className="flex items-center gap-4">
              <Image className="h-16 w-auto" src={nav6} alt="SMS Icon" quality={100} priority  />
              <p className="sidebar-text">Contact</p>
            </div>
          </div>

        </div>
    </nav>

    <header className="w-full h-full">
      {/* Navbar for Desktop */}
      <nav className="flex lg:py-10 pb-5 pt-14 justify-between">
        <div><Image className="lg:h-16 h-8 w-auto" src={logo} alt="MsVick Logo" quality={100} priority /></div>
        <div><Image onClick={popuphandler} className="lg:h-16 h-8 w-auto" src={menu} alt="Hamburger Menu" quality={100} priority /></div>
      </nav>
    </header>

      <main className="w-full">
        <section className="pt-112 ">
          <div className="flex gap-4 flex-col justify-center items-center">
            <p className="headi">MsVick</p>
            <p className="headp text-center">Infusing human touch to digital experiences and creating meaningful connections between people </p>
          </div>
        </section>

        <section className="flex flex-col lg:flex-row gap-5 pt-112x">
          <div className="card one">
            <div className="cardH w-full h-full relative border">
              <Image className='object-cover oneI obj w-full h-full' src={h1} alt="Portfolio" quality={100} priority  />
              <div className="overlayImg"></div>
            </div>
            <p className="textImg">Portfolio</p>
          </div>
          <div className="card two">
            <div className="cardH w-full h-full relative border">
              <Image className='object-cover twoI object-top w-full h-full' src={h2} alt="Studio" quality={100} priority  />
              <div className="overlayImg"></div>
            </div>
            <p className="textImg">Studio</p>
          </div>
          <div className="card three">
            <div className="cardH w-full h-full relative border">
              <Image className='object-cover  threeI w-full relative h-full object-right' src={h3} alt="Community" quality={100} priority  />
              <div className="overlayImg"></div>
            </div>
            <p className="textImg">Community</p>
          </div>
        </section>

      </main>

    <footer>
      <p className="footp">(c) 2023 | Design by MsVick | Code by Howard Otuya</p>
    </footer>

    </>
  )
}
