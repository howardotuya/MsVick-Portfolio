"use client";
import {useEffect} from "react"
import Image from 'next/image';
import Link from 'next/link';
import h1 from "../public/h1.jpg";
import h2 from "../public/h2.jpg";
import h3 from "../public/h3.jpg";
import Navbar from "@/components/navbar";

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
    <Navbar />
      <main className="w-full pt-main">
        <section className="pt-112 ">
          <div className="flex gap-4 flex-col justify-center items-center">
            <p className="headi">MsVick</p>
            <p className="headp text-center">Infusing human touch to digital experiences and creating meaningful connections between people </p>
          </div>
        </section>

        <section className="flex flex-col lg:flex-row gap-5 pt-112x">
          <Link href="portfolio" className="card one">
            <div className="cardH w-full h-full relative border">
              <Image className='object-cover oneI obj w-full h-full' src={h1} alt="Portfolio" quality={100} priority  />
              <div className="overlayImg"></div>
            </div>
            <p className="textImg">Portfolio</p>
          </Link>
          <Link href="" className="card two">
            <div className="cardH w-full h-full relative border">
              <Image className='object-cover twoI object-top w-full h-full' src={h2} alt="Studio" quality={100} priority  />
              <div className="overlayImg"></div>
            </div>
            <p className="textImg">Studio</p>
          </Link>
          <Link href="/community" className="card three">
            <div className="cardH w-full h-full relative border">
              <Image className='object-cover  threeI w-full relative h-full object-right' src={h3} alt="Community" quality={100} priority  />
              <div className="overlayImg"></div>
            </div>
            <p className="textImg">Community</p>
          </Link>
        </section>

      </main>

      
      <footer className="">
        <div className="pt-28 lg:pt-0">
          <p className="footp">
            (c) 2023 | Design by MsVick | Code by Howard Otuya
          </p>
        </div>
      </footer>
    </>
  )
}
