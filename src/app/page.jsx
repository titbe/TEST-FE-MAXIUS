"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Header from "@/components/Header";
import Image from "next/image";
import Link from "next/link";
import { MdOutlineEmail } from "react-icons/md";

export default function Home() {
  const router = useRouter();
  const [activeSection, setActiveSection] = useState("firstPage");
  const [visibleSections, setVisibleSections] = useState({
    firstPage: false,
    secondPage: false,
    thirdPage: false,
    fourthPage: false,
    fifthPage: false,
  });

  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const id = entry.target.id;
          if (entry.isIntersecting) {
            setActiveSection(id);
            setVisibleSections((prev) => ({ ...prev, [id]: true }));
            router.push(`#${id}`, undefined, { shallow: true });
          } else {
            setVisibleSections((prev) => ({ ...prev, [id]: false }));
          }
        });
      },
      { threshold: 0.5 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => sections.forEach((section) => observer.unobserve(section));
  }, [router]);

  return (
    <div
      id="root"
      className="overflow-auto h-screen scroll-smooth snap-y snap-mandatory no-scrollbar"
    >
      <div className="fixed w-full z-20">
        <Header activeSection={activeSection} />
      </div>
      <section
        id="firstPage"
        className="h-screen w-full snap-start flex relative"
      >
        <Image
          src="/logo.png"
          alt="banner"
          quality={100}
          layout="fill"
          objectFit="cover"
          className="absolute inset-0 z-10"
        />
        <div className="z-10 mt-[120px] pl-32">
          {visibleSections.firstPage && (
            <>
              <div className="text-[95.5px] font-bold text-[rgb(26,42,89)] animate-slideDown">
                <br />
                MAX I & US
              </div>
              <p className="w-1/3 animate-slideLeftToRight">
                Maxius is the only self-developed semiconductor company...
              </p>
            </>
          )}
        </div>
      </section>
      
      {/* Second Section */}
      <section
        id="secondPage"
        className="h-screen snap-start flex items-center relative"
      >
        <Image
          src="/banner-02.png"
          alt="banner"
          quality={100}
          layout="fill"
          objectFit="cover"
          className="absolute inset-0 z-0"
        />
        {visibleSections.secondPage && (
          <div className="z-10 text-white flex justify-center items-center w-full animate-slideLeftToRight">
            <div className="w-3/4 px-24">
              <div className="space-y-6 text-justify text-[40px] font-bold leading-7">
                <p id="text-one">
                  1. <span className="note">Self-produced</span> semiconductors
                  2. Production
                </p>
                <p id="text-two">
                  {" "}
                  and Sales of <span className="note">H</span>igh-
                  <span className="note">P</span>erformance Servers with self-
                </p>
                <p id="text-three">
                  manufactured semiconductors 3. Construction{" "}
                </p>
                <p id="text-four">
                  of operative <span className="note">Blockchain IDC</span>{" "}
                  based on high-
                </p>
                <p id="text-five">
                  performance servers 4. Establish solution relating{" "}
                </p>
                <p id="text-six">
                  to Blockchain <span className="note">(IPFS)</span>
                </p>
              </div>
            </div>
          </div>
        )}
      </section>

      {/* Third Section */}
      <section
        id="thirdPage"
        className="h-screen snap-start flex justify-center items-center relative"
      >
        <Image
          src="/side-menu-open.png"
          alt="banner"
          quality={100}
          layout="fill"
          objectFit="cover"
          className="absolute inset-0 z-0"
        />
        {visibleSections.thirdPage && (
          <div className="z-10 text-white flex items-center justify-center w-full h-full">
            <div
              id="page-three"
              className="mx-36 w-full flex flex-row justify-center h-full"
            >
              <div
                id="item"
                className="flex-1 px-[15px] border-r-[1px] border-white hover:pr-[50px] hover:opacity-60 duration-300 group"
              >
                <p className="text-[30px] font-bold mb-9 mt-44 animate-slideDown">
                  Product
                </p>
                <p className="text-base opacity-0 transition-opacity duration-300 group-hover:opacity-100 ">
                  <span className="note">High-Performance Server</span> with an
                  extensive selection of serviceable capabilities
                  <br />
                  Building <span className="note">IDC</span>; incorporating the
                  latest <span className="note">Storage</span> technology
                  applicable to various I/O devices
                  <br />
                  Various <span className="note">Blockchain Solutions</span>,
                  including IPFS.
                  <br />
                  <br />
                  Maxius will continue to develop as a company in the global
                  market by supplying a variety of products and solutions.
                </p>
              </div>

              <div
                id="item"
                className="flex-1 px-[15px] border-r-[1px] border-white hover:pr-[50px] hover:opacity-60 duration-300 group"
              >
                <p className="text-[30px] font-bold mb-9 mt-44 animate-slideUp">
                  Technology
                </p>
                <p className="text-base opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  Based on more than 20 years of research know-how <br />
                  and technology, we are the only company in Korea <br />
                  that makes HPC servers{" "}
                  <span className="note">using self-developed system</span>
                  <br />
                  semiconductors and{" "}
                  <span className="note">provides solutions specialized</span>
                  <br />
                  in <span className="note">
                    the intelligent data center
                  </span>{" "}
                  in the IT industry.
                  <br />
                  <br />
                  With our services, Maxius strives to supply
                  <br />
                  differentiated products and solutions.
                </p>
              </div>

              <div
                id="item"
                className="flex-1 px-[15px] border-r-[1px] border-white hover:pr-[50px] hover:opacity-60 duration-300 group"
              >
                <p className="text-[30px] font-bold mb-9 mt-44 animate-slideDown">
                  Application
                </p>
                <p className="text-base opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  Maxius' miscellaneous products are used for{" "}
                  <span className="note">AI/genetic analysis, </span>
                  <br />
                  <span className="note">edge computing, IDC centers,</span> as
                  well as various solutions
                  <br />
                  used for vast <span className="note">
                    data analysis,{" "}
                  </span>{" "}
                  <span className="note">distributed</span>
                  <br />
                  <span className="note">
                    processing functions and IPFS IDC{" "}
                  </span>
                  , etc.
                  <br />
                  <br />
                  Maxius will supply serviceable products and solutions to
                  <br />
                  varying fields through R&D and communication.
                </p>
              </div>

              <div
                id="item"
                className="flex-1 px-[15px] hover:pr-[50px] hover:opacity-60 duration-300 group"
              >
                <p className="text-[30px] font-bold mb-9 mt-44 animate-slideUp text-[rgb(255,153,51)]">
                  Blockchain
                </p>
                <p className="text-base opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <span className="note">storage and service</span> utilized in
                  Metaverse <br />
                  <span className="note">
                    IPFS Storage and Application Services
                  </span>{" "}
                  in Web3.0 <br />
                  <br />
                  Maxius provides both H/W and S/W, which are optimized for
                  decentralized storage to match customer needs and create the
                  best added value.
                </p>
              </div>
            </div>
          </div>
        )}
      </section>

      {/* Fourth Section */}
      <section
        id="fourthPage"
        className="h-screen w-full snap-start flex relative overflow-hidden"
      >
        {visibleSections.fourthPage && (
          <div className="w-full flex flex-col items-center justify-center mt-20">
            <h2 className="text-8xl uppercase font-bold mb-10 animate-slideDown">Story</h2>
            <div className="flex justify-center px-20 overflow-y-auto animate-slideLeftToRight">
              <div className="item px-5 w-full">
                <p className="font-bold text-[39.5px]">History</p>
                <div className="h-2/3 py-10 mt-6 text-[13px] overflow-y-auto text-gray-600 border-r-2 border-black">
                  <div className="item-year">
                    <h2 className="en">2021</h2>
                    <p>
                      Rebrand the Company name to Maxius
                      <br />
                      1st Pan-Governmental Information Resource Integration HW3
                    </p>
                  </div>
                  <div className="item-year">
                    <h2 className="en">2020</h2>
                    <p>
                      2nd construction of AI-based adaptive security system{" "}
                      <br />
                      SPC Certification : TOP 5 Rank record in the world of
                      storage
                    </p>
                  </div>
                  <div className="item-year">
                    <h2 className="en">2019</h2>
                    <p>
                      Development of Genome Analysis System Semiconductor and
                      HPC Storage
                    </p>
                  </div>
                  <div className="item-year">
                    <h2 className="en">2018</h2>
                    <p>
                      Development of small supercomputers using high performance
                      system semiconductors
                      <br />
                      Certified by International TPC
                    </p>
                  </div>
                  <div className="item-year">
                    <h2 className="en">2017</h2>
                    <p>
                      Confirmation of excellent product for reducing standby
                      power (Korea Energy Agency)
                      <br />
                      Technology Innovation Award
                    </p>
                  </div>
                  <div className="item-year">
                    <h2 className="en">2016</h2>
                    <p>
                      Obtain Certificate of Conformity registered for
                      broadcasting and communication equipment (National Radio
                      Research Institute)
                      <br /> Sign MOU Agreement with KT ds
                    </p>
                  </div>
                  <div className="item-year">
                    <h2 className="en">2015</h2>
                    <p>
                      Awarded IT Convergence Entrepreneur
                      <br /> Awarded Korean Patent Technology Award (Sejong the
                      Great Award){" "}
                    </p>
                  </div>
                  <div className="item-year">
                    <h2 className="en">2010</h2>
                    <p>
                      Internationally develop the first PCI Interface Type
                      storage board SSD product
                    </p>
                  </div>
                  <div className="item-year">
                    <h2 className="en">1996</h2>
                    <p>Company established</p>
                  </div>
                </div>
              </div>

              <div className="item px-5 w-full">
                <p className="font-bold text-[39.5px]">Partners</p>
                <div className="h-2/3 py-10 mt-6 text-[13px] overflow-y-auto text-gray-600 border-r-2 border-black">
                  <div className="item-year ">
                    <h2 className="en">1000 corporate Partners</h2>
                    <p>
                      Cheongwadae, KHNP, Ministry of National Defense, <br />
                      Gunpo city, Korea Agro-Fisheries&Food Trade <br />
                      Coporation, JeollaNamdo, KMRB, JDC, <br />
                      Korea Housing Finance Corporation, <br />
                      Gyeonggi Provincial Police Agency, NCIS, KPIC, <br />
                      Supreme Court of Korea, IPET, LH, National Gugak <br />
                      Center,Korea Workers Compensation&Welfare <br />
                      Service{" "}
                      <span>
                        {" "}
                        More than 1,000 government- <br />
                        related companies, including them
                      </span>
                    </p>
                  </div>

                  <div className="item-year">
                    <h2 className="en">250 Additional corporate Partners</h2>
                    <p>
                      KAIST, Seoul National University, Dongguk <br />
                      University, Pusan National University, Incheon
                      <br />
                      National University, ETRI, Seoyeong University, <br />
                      Telecommuications Technology Association, <br />
                      Sunmoon University, Namseoul University,
                      <br />
                      Chungnam National University, Gachon University,
                      <br />
                      Myongji University{" "}
                      <span>
                        More than 250 companies <br />
                        related to education, including
                      </span>
                    </p>
                  </div>

                  <div className="item-year">
                    <h2 className="en">120 corporate Partners</h2>
                    <p>
                      Samsung Total, Samsung SDS, LS Electric, Hanwha <br />
                      Systems,{" "}
                      <span>
                        More than 120 manufacturing-related <br />
                        companies, including
                      </span>
                    </p>
                  </div>

                  <div className="item-year">
                    <h2 className="en">350 Additional corporate Partners</h2>
                    <p>
                      JoongAng Daily C&C, Dong-A Broadcasting System, <br />
                      KCTV, ETNEWS, The Digital Times{" "}
                      <span>
                        More than 350 <br />
                        companies related to broadcasting.
                      </span>
                    </p>
                  </div>

                  <div className="item-year ">
                    <h2 className="en">50 Additional corporate Partners</h2>
                    <p>
                      Hyundai Securities, Samsung Fire & Marine <br />
                      Insurance, MG Community Credit Cooperatives, <br />
                      KDB Bank, SGI Seoul Guarantee Insurance, Korea <br />
                      Eximbank, IBK Industrial Bank of Korea,
                      <br />
                      Mirae Asset Securities, Mirae Asset life Insurance,
                      <br />
                      Mirae Asset Daewoo, NH NongHyup Life Insurance, <br />
                      KB Securities, SK Telecom, SK Broadband,
                      <br />
                      SK Telink, KTds{" "}
                      <span>
                        More than 50 financial and <br />
                        telecommunications-related companies.
                      </span>
                    </p>
                  </div>
                </div>
              </div>

              <div className="item px-5 w-full">
                <p className="font-bold text-[39.5px]">Patents</p>
                <div className="h-2/3 py-10 mt-6 text-[13px] overflow-y-auto text-gray-600 border-r-2 border-black">
                  <div className="item-year">
                    <h2 className="en">
                      High-speed data I/O semiconductor Chip
                    </h2>
                    <p>
                      FPGA/CPLD/ASIC design and manufacturing technology,
                      possess TPU development capability
                    </p>
                  </div>

                  <div className="item-year">
                    <h2 className="en">
                      Intelligent Pattern Analysis Algorithm
                    </h2>
                    <p>
                      Hybrid Cache algorithm that follows data pattern analysis
                    </p>
                  </div>

                  <div className="item-year">
                    <h2 className="en">OS and SSD optimization</h2>
                    <p>
                      Device Driver optimization technology differing for each
                      OS, storage resource management technology
                    </p>
                  </div>
                </div>
              </div>

              <div className="item px-5 w-full">
                <p className="font-bold text-[39.5px]">Awards</p>
                <div className="h-2/3 py-10 mt-6 text-[13px] overflow-y-auto text-gray-600 border-r-2 border-black">
                  <div className="item-year">
                    <h2 className="en">
                      Awarded the Sejong Award at the KR Patent Awards
                    </h2>
                    <p>
                      Received the highest domestic patent award for outstanding
                      performance and energy-saving technology
                    </p>
                  </div>

                  <div className="item-year">
                    <h2 className="en">
                      Certified by Korea Excellent Product Designation
                    </h2>
                    <p>
                      Certification of the only excellent procurement registered
                      product in Korea in the server field that has been
                      recognized for its high-performance system quality
                    </p>
                  </div>

                  <div className="item-year">
                    <h2 className="en">Korean Green Technology Certificate</h2>
                    <p>
                      Possessing eco-friendly technology that ensures the
                      highest performance and maximum efficiency
                    </p>
                  </div>

                  <div className="item-year">
                    <h2 className="en">Korea TPC-C Certification</h2>
                    <p>
                      Certified for AI high-performance computing technology and
                      performance equipped with an in-memory DB by receiving the
                      first internationally recognized TPC-C
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </section>

      {/* Fifth Section */}
      <section
        id="fifthPage"
        className="h-screen snap-start flex items-center pl-32 relative"
      >
        <Image
          src="/banner-05.png"
          alt="banner"
          quality={100}
          layout="fill"
          objectFit="cover"
          className="absolute inset-0 z-0 scale-x-110"
        />
        {visibleSections.fifthPage && (
          <div className="z-10 text-white flex gap-10 flex-col">
            <div id="block-item">
              <h2
                className="text-[34px] font-bold mb-3 ml-[5px] animate-slideUp"
                id="fifth-name"
              >
                Company.
              </h2>
              <div id="email" className="animate-slideLeftToRight">
                <Link
                  href="mailto:support@maxius.io"
                  className="inline-flex items-center justify-between px-4 py-2 hover:bg-white group transition-colors duration-300 w-full"
                >
                  <span
                    className="text-sm group-hover:text-gray-700"
                    id="fifth-contact"
                  >
                    support@maxius.io
                  </span>
                  <MdOutlineEmail className="ml-2 opacity-0 group-hover:opacity-100 group-hover:text-black  " />
                </Link>
              </div>
            </div>
            <div id="block-item">
              <h2
                className="text-[34px] font-bold mb-3 ml-[5px] animate-slideUp"
                id="fifth-name"
              >
                Warranty.
              </h2>
              <div id="email" className="animate-slideLeftToRight">
                <Link
                  href="/"
                  className="inline-flex items-center justify-between px-4 py-2 hover:bg-white group transition-colors duration-300 w-full"
                >
                  <span
                    className="text-sm group-hover:text-gray-700"
                    id="fifth-contact"
                  >
                    Learn more &#62;
                  </span>
                </Link>
              </div>
            </div>
            <div id="block-item">
              <h2
                className="text-[34px] font-bold mb-3 ml-[5px] animate-slideUp"
                id="fifth-name"
              >
                Technical support.
              </h2>
              <div id="email" className="animate-slideLeftToRight">
                <Link
                  href="mailto:support@maxius.io"
                  className="inline-flex items-center justify-between px-4 py-2 hover:bg-white group transition-colors duration-300 w-full"
                >
                  <span
                    className="text-sm group-hover:text-gray-700"
                    id="fifth-contact"
                  >
                    support@maxius.io
                  </span>
                  <MdOutlineEmail className="ml-2 opacity-0 group-hover:opacity-100 group-hover:text-black  " />
                </Link>
              </div>
            </div>
          </div>
        )}
      </section>
    </div>
  );
}
