"use client";
import React, { useEffect, useState } from "react";
import TeamImage from "../../../public/images/6824518ab7d703e91d6f2f32_May 14 2025 Screenshot from Resize Images.png";
import Image from "next/image";
import CardProfile from "../../../public/images/674491fc4bd881ec6b17f89a_Arjun.png";
import videoHolder from "../../../public/images/video-holder.png";
import { Linkedin } from "lucide-react";
import axios from "axios";
import Link from "next/link";
import Loader from "../../Components/Loader";

export default function page() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [data, setData] = useState(null);
  const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
  const FILE_URL = process.env.NEXT_PUBLIC_FILE_URL;

  useEffect(() => {
    loadContactData();
  }, []);

  const loadContactData = async () => {
    try {
      setLoading(true);
      setError("");
      // console.log("Loading data from:", `${BASE_URL}/api/about`);

      const res = await axios.get(`${BASE_URL}/api/about`);

      // console.log("Response data:", res.data);

      setData(res.data);
    } catch (error) {
      console.error("Load failed:", error);
      console.error("Error response:", error.response);

      if (error.response?.status === 404) {
        setData(null);
        setError("No contact page found - create a new one");
      } else if (error.response?.status === 500) {
        setError(
          "Server error: " +
            (error.response.data?.message || "Internal server error")
        );
      } else if (error.request) {
        setError("Network error: Could not reach the server");
      } else {
        setError("Failed to load: " + error.message);
      }
    } finally {
      setLoading(false);
    }
  };
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className="p-4 home-page pt-16 pb-20">
          <div className="max-w-7xl mx-auto flex flex-col items-center justify-center gap-5 font-mont">
            <h2 className="text-3xl md:text-7xl font-bold text-center">
              {data?.hero?.title?.split(" ")?.map((word, index) =>
                index === 1 ? (
                  <React.Fragment key={index}>
                    {word} <br />
                  </React.Fragment>
                ) : (
                  <span key={index}>{word} </span>
                )
              )}

              <span className="font-brush font-medium">
                {data?.hero?.stylishTitle}
              </span>
            </h2>

            {/* <h2 className="text-3xl md:text-7xl font-bold text-center  md:ml-42">
          <spanan className="font-brush font-medium">
            {data?.hero?.stylishTitle}
          </spanan>
        </h2> */}
          </div>
          {/* team image */}
          <div className="md:max-w-[90%] mx-auto">
            <Image
              src={`${FILE_URL}/${data?.hero?.image}`}
              alt="Our Team"
              width={1350}
              height={800}
              className="rounded-2xl mx-auto mt-16 w-full h-auto"
            />
          </div>

          {/* team cards */}
          <div className="finance-stack-body rounded-2xl pt-10 pb-10 md:px-20 mx-auto md:max-w-[90%] font-mont mt-6">
            {/* TEAM HEADING */}
            <div className="flex flex-col justify-center items-center">
              <h3 className="gradient-text text-3xl font-medium">Meet The</h3>
              <h2 className="md:text-6xl text-2xl font-semibold mt-2">
                Leadership Team
              </h2>
            </div>

            {/* team cards */}
            <div className="grid md:grid-cols-3 mt-12 md:gap-4 ">
              {/* card 1 */}
              {data &&
                data?.leadership?.map((item, i) => (
                  <div
                    key={i}
                    className="custom-gray-card flex justify-between items-center gap-1 bg-gray-700 px-2 py-1 rounded-xl m-4"
                  >
                    <Image
                      src={`${FILE_URL}/${item?.image}`}
                      alt="Arjun"
                      width={75}
                      height={75}
                      className="rounded-2xl"
                    />
                    <div className="flex flex-col items-start ">
                      <h3 className="text-2xl font-semibold">{item?.name}</h3>
                      <p className="font-normal">{item?.role}</p>
                    </div>
                    <Link target="_blank" href={item?.linkedin}>
                      <Linkedin className="mt-8" />
                    </Link>
                  </div>
                ))}
            </div>

            {/* Investor section */}

            <div className="mt-20 mb-20">
              {/* investor HEADING */}
              <div className="flex flex-col justify-center items-center">
                <h3 className="gradient-text text-3xl font-medium">Meet The</h3>
                <h2 className="md:text-6xl text-3xl font-semibold mt-2">
                  Investor Panel
                </h2>
              </div>

              {/* investor cards */}
              <div className="grid md:grid-cols-3 mt-12 md:gap-4 ">
                {/* card 1 */}
                <div className="custom-gray-card flex justify-between items-center gap-1 bg-gray-700 px-2 py-1 rounded-xl m-4">
                  <Image
                    src={CardProfile}
                    alt="Arjun"
                    width={75}
                    height={75}
                    className="rounded-2xl"
                  />
                  <div className="flex flex-col items-start ">
                    <h3 className="text-2xl font-semibold">Arjun Suresh</h3>
                    <p className="font-normal">CEO & Founder</p>
                  </div>

                  <Linkedin className="mt-8" />
                </div>
                {/* card 2 */}
                <div className="custom-gray-card flex justify-between items-center gap-1 bg-gray-700 px-2 py-1 rounded-xl m-4">
                  <Image
                    src={CardProfile}
                    alt="Arjun"
                    width={75}
                    height={75}
                    className="rounded-2xl"
                  />
                  <div className="flex flex-col items-start ">
                    <h3 className="text-2xl font-semibold">Arjun Suresh</h3>
                    <p className="font-normal">CEO & Founder</p>
                  </div>

                  <Linkedin className="mt-8" />
                </div>
                {/* card 3 */}
                <div className="custom-gray-card flex justify-between items-center gap-1 bg-gray-700 px-2 py-1 rounded-xl m-4">
                  <Image
                    src={CardProfile}
                    alt="Arjun"
                    width={75}
                    height={75}
                    className="rounded-2xl"
                  />
                  <div className="flex flex-col items-start ">
                    <h3 className="text-2xl font-semibold">Arjun Suresh</h3>
                    <p className="font-normal">CEO & Founder</p>
                  </div>

                  <Linkedin className="mt-8" />
                </div>
              </div>
            </div>
          </div>

          {/* About */}

          <div className="rounded-2xl bg-white md:pb-52 py-16 md:px-22 px-4 mx-auto md:max-w-[90%] font-mont mt-6">
            <div>
              <h2 className="md:text-6xl text-3xl text-center text-gray-800 font-semibold mb-6 mt-8 ">
                How It All Started!
              </h2>
              <p className="text-center text-md md:text-lg md:font-medium text-slate-900 mb-3 mt-3 ">
                Payraydoo was born from a simple observation: finance teams were
                spending more time Chasing invoices and reconciling payments
                than driving strategy. We saw CFOs and finance heads struggling
                with scattered processes across accounts payable and receivable
                long payment cycles, delayed collections, compliance
                bottlenecks, and poor cash visibility.
              </p>
              <p className="text-center text-md md:text-lg md:font-medium text-slate-900 mt-3 ">
                Payraydoo was born from a simple observation: finance teams were
                spending more time Chasing invoices and reconciling payments
                than driving strategy. We saw CFOs and finance heads struggling
                with scattered processes across accounts payable and receivable
                long payment cycles, delayed collections, compliance
                bottlenecks, and poor cash visibility.
              </p>
            </div>

            <div className="flex flex-col justify-center items-center gap-5 mt-32">
              <h2 className="gradient-header md:text-4xl text-2xl font-semibold ">
                Message From
              </h2>
              <h2 className="md:text-7xl text-4xl font-semibold text-gray-900">
                The Founder
              </h2>
              <div className="custom-youtube-card md:p-20 p-4 rounded-3xl mt-10">
                {data && data?.founder?.youtube ? (
                  <iframe
                    width="800"
                    height="450"
                    src={data && data?.founder?.youtube}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  ></iframe>
                ) : (
                  <Image
                    height={450}
                    width={800}
                    src={videoHolder}
                    alt="video-placeholder"
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
