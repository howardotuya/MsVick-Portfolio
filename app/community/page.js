"use client";
import { useEffect } from "react";
import Image from "next/image";
import community1 from "../../public/community1.png";
import community2 from "../../public/community2.png";
import community3 from "../../public/community3.png";
import Navbar from "@/components/navbar";
import Link from "next/link";

export default function Community() {
  return (
    <>
      <Navbar />

      <main className="w-full pt-main">
        <div className="w-full">
          <div className="bodyCon">
            <section className="pt-16 lg:pt-28">
              <div className="flex uppercase flex-col justify-center items-center h-full">
                <p className="bg-text">Community</p>
                <p className="otbgt">Community</p>
              </div>
            </section>

            <section className="lg:pt-28 pt-14">
              <div className="lg:pt-28 lg:pb-0 py-4 flex lg:flex-row flex-col items-center gap-10 lg:gap-20 ">
                <div className="lg:max-w-md flex flex-col gap-10 lg:order-1 order-2">
                  <div className="flex flex-col gap-4">
                    <h2 className="h2">RoadTrip Community</h2>
                    <p>
                      A community of creatives from Nigeria and Africa,
                      supporting one another in building a successful career in
                      the Design & Tech space.
                    </p>
                  </div>
                  <div className="flex">
                    <Link href="#" className="community-cta block w-auto">
                      Learn More
                    </Link>
                  </div>
                </div>
                <div className="lg:order-2 order-1">
                  <Image
                    className="community1"
                    src={community1}
                    alt="Roadtrip Community Image"
                    quality={100}
                    priority
                  />
                </div>
              </div>
            </section>

            <section className="pt-28">
              <div className="lg:pt-28 lg:pb-0 py-4 flex lg:flex-row flex-col items-center gap-10 lg:gap-20 ">
                <div className="">
                  <Image
                    className="community1"
                    src={community2}
                    alt="Roadtrip Community Image"
                    quality={100}
                    priority
                  />
                </div>
                <div className="lg:max-w-md flex flex-col gap-10">
                  <div className="flex flex-col gap-4">
                    <h2 className="h2">RoadTrip Tech Hub</h2>
                    <p>
                      Dedicated to developing a talent pipeline of trained and
                      competent professionals in the Tech ecosystem in Nigeria
                      and Africa.
                    </p>
                  </div>
                  <div className="flex">
                    <Link href="#" className="community-cta block w-auto">
                      Learn More
                    </Link>
                  </div>
                </div>
              </div>
            </section>

            <section className="pt-28">
              <div className="lg:pt-28 lg:pb-0 py-4 flex lg:flex-row flex-col items-center gap-10 lg:gap-20 ">
                <div className="lg:max-w-md flex flex-col gap-10 lg:order-1 order-2">
                  <div className="flex flex-col gap-4">
                    <h2 className="h2">MsVick Mentorship Program</h2>
                    <p>
                      An extraordinary one-on-one mentoring experience that
                      focuses on empowering individuals to set and achieve their
                      goals, develop effective systems, and surpass their growth
                      targets.
                    </p>
                  </div>
                  <div className="flex">
                    <Link href="#" className="community-cta block w-auto">
                      Learn More
                    </Link>
                  </div>
                </div>
                <div className="lg:order-2 order-1">
                  <Image
                    className="community1"
                    src={community3}
                    alt="Roadtrip Community Image"
                    quality={100}
                    priority
                  />
                </div>
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
