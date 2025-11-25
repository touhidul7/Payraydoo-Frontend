"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Airtel from "../../../public/logo/vectorseek.com-Airtel-Uganda-Logo-Vector.png";
import CompactContactForm from "../../Components/CompactContactForm";
import axios from "axios";
import Loader from "../../Components/Loader";
export default function page() {
  const [loading, setLoading] = useState(true);
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

      const res = await axios.get(`${BASE_URL}/api/contact`);

      // console.log("API Response:", res);
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

  // console.log("Current data state:", data);
  return (
    <>
      {loading ? (
        <div>{<Loader/>}</div>
      ) : (
        <>
          <div className="contact-gradient-bg">
            {/* grid */}
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-center gap-5 md:gap-8 py-12 md:py-16 lg:py-22 px-4 md:px-6">
              <div className="w-full lg:w-[50%]">
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold leading-tight">
                  {data?.title}
                </h2>
                <div className="mt-6 md:mt-8 font-mont text-base md:text-lg font-medium space-y-2">
                  {/* offers */}
                  {data?.offers?.map((item, i) => (
                    <p key={i}>{i+1}. {item.text}</p>
                  ))}
                </div>
                <div className="flex justify-center md:justify-start items-center gap-3 md:gap-5 mt-8 md:mt-12 flex-wrap">
                  {data?.logos?.map((item, i) => (
                    <Image
                      key={i}
                      src={`${FILE_URL}/${item?.image}`}
                      alt={item?.title}
                      width={80}
                      height={44}
                      className="md:w-[90px] md:h-[50px] w-20 h-[30px]"
                    />
                  ))}
                </div>
              </div>
              {/* contact form */}
              <div className="py-3 md:p-5 rounded-3xl contact-form-bg w-full lg:w-[50%]">
                <h2 className="gradient-text ml-8 md:ml-12 text-2xl md:text-3xl lg:text-4xl font-semibold">
                  Schedule Your Demo
                </h2>
                <CompactContactForm apiKey={data?.submission?.web3key} />
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
