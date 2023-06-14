"use client";
import { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import studio from "../../public/studioImg.png";
import Navbar from "@/components/navbar";
import brand from "../../public/brand.png";
import des from "../../public/des.png";
import pro from "../../public/pro.png";
import dev from "../../public/dev.png";

export default function Studio() {
  return (
    <>
      <Navbar />

      <main className="w-full pt-main">
        <div className="w-full">
          <div className="bodyCon">
            <section className="pt-112a flex flex-col gap-16 lg:gap-20">
              <div className="flex uppercase flex-col justify-center items-center h-full">
                <p className="bg-text">Studio</p>
                <p className="otbgt">Studio</p>
              </div>

              <div>
                <p className="t20 w1010 my-0 mx-auto">
                  MsVick Studio is known to offer exceptional services with
                  resilience, excellence, and elegance. We provide a range of
                  top-notch solutions within the Tech ecosystem, including
                  brand, design, product, development consultation services at
                  various rates that are flexible for your product budget.
                </p>
              </div>
            </section>

            <section className="lg:pt-24 pt-20">
              <div className="lg:pt-28 lg:pb-0 pt-5 pb-16 flex lg:flex-row flex-col items-center gap-10 lg:gap-20 ">
                <div className="lg:max-w-md flex flex-col gap-10 lg:order-1 order-2">
                  <div className="flex flex-col gap-4">
                    <h2 className="h2">Our CLients</h2>
                    <p>
                      We work with clients from various industries, including
                      early-stage startups who are building SaaS, Healthcare and
                      Lifestyle products.
                    </p>
                  </div>
                </div>
                <div className="lg:order-2 order-1">
                  <Image
                    className="community1"
                    src={studio}
                    alt="Completed Projects"
                    quality={100}
                    priority
                  />
                </div>
              </div>
            </section>

            <section className="pt203 flex flex-col gap-10 lg:gap-20">
              <div className="flex uppercase flex-col justify-center items-center h-full">
                <p className="bg-text6">Looking to Outsource?</p>
                <p className="otbgt text-center">Looking to Outsource?</p>
              </div>

              <div className="flex sdcont flex-row lg:gap-5 flex-wrap lg:flex-nowrap">
                <div className="w-1/2 pr-2 pb-2 lg:p-0 lg:w-full h-full">
                  <div className="flex flex-col gap-3 lg:gap-4 lg:w-full sdcard">
                    <Image
                      className="w-8 h-8 lg:w-10 lg:h-10"
                      src={brand}
                      alt="brand icon"
                      quality={100}
                      priority
                    />
                    <p className="sdp">Brand</p>
                  </div>
                </div>
                <div className="w-1/2 pl-2 pb-2 lg:p-0 lg:w-full h-full">
                  <div className="flex flex-col gap-3 lg:gap-4 lg:w-full sdcard">
                    <Image
                      className="w-8 h-8 lg:w-10 lg:h-10"
                      src={des}
                      alt="Design icon"
                      quality={100}
                      priority
                    />
                    <p className="sdp">Design</p>
                  </div>
                </div>
                <div className="w-1/2 pr-2 pt-2 lg:p-0 lg:w-full h-full">
                  <div className="flex flex-col gap-3 lg:gap-4 lg:w-full sdcard">
                    <Image
                      className="w-8 h-8 lg:w-10 lg:h-10"
                      src={pro}
                      alt="Product icon"
                      quality={100}
                      priority
                    />
                    <p className="sdp">Product</p>
                  </div>
                </div>
                <div className="w-1/2 pl-2 pt-2 lg:p-0 lg:w-full h-full">
                  <div className="flex flex-col gap-3 lg:gap-4 lg:w-full sdcard">
                    <Image
                      className="w-8 h-8 lg:w-10 lg:h-10"
                      src={dev}
                      alt="Development icon"
                      quality={100}
                      priority
                    />
                    <p className="sdp">Development</p>
                  </div>
                </div>
              </div>

              <div class="flex justify-center items-center">
                <Link href="#" className="community-cta block w-auto">
                  Let's Talk
                </Link>
              </div>
            </section>
          </div>
        </div>
      </main>

      <footer className="lg:pt-28">
        <div className="pt-28 lg:pt-0">
          <p className="footp">
            (c) 2023 | Design by MsVick | Code by Howard Otuya
          </p>
        </div>
      </footer>
    </>
  );
}
