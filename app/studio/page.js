"use client";
import { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import studio from "../../public/stdcli.png";
import Navbar from "@/components/navbar";
import brand from "../../public/brand.png";
import des from "../../public/des.png";
import pro from "../../public/pro.png";
import dev from "../../public/dev.png";
import stdw10 from "../../public/stdw10.png";
import stdw11 from "../../public/stdw11.png";
import stdw12 from "../../public/stdw12.png";
import stdw13 from "../../public/stdw13.png";
import stdpd from "../../public/stdpd.png";
import stdwd from "../../public/stdwd.png";
import stdbd from "../../public/stdbd.png";

export default function Studio() {
  return (
    <>
      <Navbar />

      <main className="w-full pt-main">
        <div className="w-full">
          <div className="bodyCon">
            <section className="pt-[56px] lg:pt-20 flex flex-col gap-16 lg:gap-20">
              <div className="flex uppercase flex-col justify-center items-center h-full">
                <p className="bg-text6">MsVick Studio</p>
                <p className="hotbgt lg:text-[32px] xl:absolute text-[16px]">
                  MsVick Studio
                </p>
              </div>
            </section>

            <section className=" flex flex-col gap-10 lg:gap-20">
              <div className=" py-[80px] lg:pt-[120px] flex uppercase flex-col justify-center items-center h-full">
                <p className="stdh0 w1010 text-center">
                  Infusing human touch to digital experiences
                </p>
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
                      placeholder="empty"
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
                      placeholder="empty"
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
                      placeholder="empty"
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
                      placeholder="empty"
                    />
                    <p className="sdp">Development</p>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>

        <section class="maxstd py-20 md:pb-[112px]">
          <div class="stdbg-cont">
            <div class="max-w-[1440px] px-5 my-0 mx-auto md:px-[112px]">
              <div className="max-w-[598px] pb-5 pt-[148px] lg:pt-[196px] lg:pb-28 flex flex-col">
                <div class="flex flex-col gap-4">
                  <h2 className="fmicrac text-4xl">Why MsVick?</h2>
                  <p class="text-xl leading-7">
                    Through the power of empathy and relatability, we help
                    businesses connect better with their customers and
                    stakeholders.
                  </p>
                  <p class="text-xl leading-7">
                    Humanity, integrity and possibility mentality are at the
                    core of who we are, what we do and what we stand for - in
                    treating everyone with respect and empathy while being
                    transparent in dealings with people and our clients.
                  </p>
                </div>
                <div class="flex pt-10">
                  <Link href="/studio" className="community-cta block w-auto">
                    Let&apos;s Talk
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="w-full">
          <div className="bodyCon">
            <section className="">
              <div class="fmicrac text-base leading-[160%] lg:text-[32px]">
                <h2>Some works we've done recently</h2>
              </div>

              <div class="flex gap-5 md:gap-0 pt-10 flex-wrap">
                <div class="md:pr-[10px] md:pb-[15px] md:w-1/2 ">
                  <div>
                    <Image
                      className=""
                      src={stdw10}
                      alt="brand icon"
                      quality={100}
                      priority
                    />
                  </div>
                </div>
                <div class="md:pl-[10px] md:pb-[15px] md:w-1/2 ">
                  <div>
                    <Image
                      className=""
                      src={stdw11}
                      alt="brand icon"
                      quality={100}
                      priority
                    />
                  </div>
                </div>
                <div class="md:pr-[10px] md:pt-[15px] md:w-1/2 ">
                  <div>
                    <Image
                      className=""
                      src={stdw12}
                      alt="brand icon"
                      quality={100}
                      priority
                    />
                  </div>
                </div>
                <div class="md:pl-[10px] md:pt-[15px] md:w-1/2 ">
                  <div>
                    <Image
                      className=""
                      src={stdw13}
                      alt="brand icon"
                      quality={100}
                      priority
                    />
                  </div>
                </div>
              </div>
            </section>

            <section className="lg:pt-24 pt-20">
              <div className="lg:py-28 py-20 flex lg:flex-row flex-col items-center gap-10 xl:gap-20 ">
                <div className="lg:max-w-md flex flex-col gap-10">
                  <div className="flex flex-col gap-4">
                    <h2 className="fmicrac text-[32px]">Our CLients</h2>
                    <div class="flex flex-col gap-[25.6px]">
                      <p>
                        We work with clients from various industries, including
                        early-stage startups who are building SaaS, Healthcare
                        and Lifestyle products.
                      </p>
                      <p>
                        We provide a range of top-notch solutions within the
                        Tech ecosystem, including brand, design, product,
                        development consultation services
                      </p>
                    </div>
                  </div>
                </div>
                <div>
                  <Image
                    className="w-full h-full"
                    src={studio}
                    alt="Completed Projects"
                    quality={100}
                    priority
                  />
                </div>
              </div>
            </section>
          </div>
        </div>

        <div className="w-full">
          <div className="bodyConS">
            <section className="overflow-hidden">
              <div className="md:py-28 pt-20 pb-[72px] flex flex-col gap-6 lg:gap-10">
                <div>
                  <h2 className="uppercase fmicrac text-base lg:text-[32px]">
                    You are in Good Hands
                  </h2>
                </div>

                <div class="relative w-auto overflow-x-auto overflow-y-hidden md:overflow-auto md:h-auto">
                  <div class="flex whitespace-nowrap md:overflow-auto md:h-auto md:relative gap-5">
                    <div class="min-h-[180px] min-w-[175px] w-full h-full relative md:w-1/3 md:h-full border border-[#FFF9F3]">
                      <div class="w-full h-full">
                        <Image
                          className="w-full h-full"
                          src={stdpd}
                          alt="Completed Projects"
                          quality={100}
                          priority
                        />
                      </div>
                      <div class="py-3 xl:py-[30px] lg:gap-2 gap-1 flex flex-col items-center bottom-0 left-0 right-0 bg-[#FFF9F3CC] text-[#1B1B1B] absolute">
                        <span class="fmicrac text-[10px] lg:text-base">
                          Victoria Alli-Johnson
                        </span>
                        <span class="text-[8px] lg:text-sm">
                          UI/UX/Product Designer
                        </span>
                      </div>
                    </div>
                    <div class="min-h-[180px] min-w-[175px] w-full h-full relative md:w-1/3 md:h-full border border-[#FFF9F3]">
                      <div class="w-full h-full">
                        <Image
                          className="w-full h-full"
                          src={stdwd}
                          alt="Completed Projects"
                          quality={100}
                          priority
                        />
                      </div>
                      <div class="py-3 xl:py-[30px] lg:gap-2 gap-1 flex flex-col items-center bottom-0 left-0 right-0 bg-[#FFF9F3CC] text-[#1B1B1B] absolute">
                        <span class="fmicrac text-[10px] lg:text-base">
                          Howard Otuya
                        </span>
                        <span class="text-[8px] lg:text-sm">Web Developer</span>
                      </div>
                    </div>
                    <div class="min-h-[180px] min-w-[175px] w-full h-full relative md:w-1/3 md:h-full border border-[#FFF9F3]">
                      <div class="w-full h-full">
                        <Image
                          className="w-full h-full"
                          src={stdbd}
                          alt="Completed Projects"
                          quality={100}
                          priority
                        />
                      </div>
                      <div class="py-3 xl:py-[30px] lg:gap-2 gap-1 flex flex-col items-center bottom-0 left-0 right-0 bg-[#FFF9F3CC] text-[#1B1B1B] absolute">
                        <span class="fmicrac text-[10px] lg:text-base">
                          Ademola Ogunlalu
                        </span>
                        <span class="text-[8px] lg:text-sm">
                          Brand Designer
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>

        <div className="w-full">
          <div className="bodyCon">
            <section className="pt-16 pb-20 lg:pb-[100px] lg:pt-20 flex flex-col justify-center items-center gap-4 lg:gap-10">
              <div className="flex uppercase flex-col justify-center items-center h-full">
                <p className="bg-text6">Let&apos;s Talk</p>
                <p className="hotbgt text-[32px] xl:absolute ">
                  Let&apos;s Talk
                </p>
              </div>

              <div class="max-w-[804px] text-center">
                <p>
                  Currently building something and looking to outsource your
                  design, product or development needs? <span class="hidden lg:block">Let&apos;s Talk</span>
                </p>
              </div>

              <div class="flex pt-6 lg:pt-0 justify-center items-center">
                <Link href="/studio" className="community-cta block w-auto">
                  Chat with us today
                </Link>
              </div>
            </section>
          </div>
        </div>
      </main>
      
      <footer className="">
        <div className="pt-0 lg:pt-0">
          <p className="footp">
            (c) 2023 | Design by MsVick | Code by Howard Otuya
          </p>
        </div>
      </footer>
    </>
  );
}
