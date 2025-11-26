"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import BlogCard from "./BlogCard";
import axios from "axios";
import { motion } from "framer-motion";
export default function SingleBlog({ slug, id }) {
  const [blog, setBlog] = useState(null);
  const [allBlog, setAllBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [loadingBlog, setLoadingBlog] = useState(true);
  const router = useRouter();

  const [error, setError] = useState("");
  const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
  const FILE_URL = process.env.NEXT_PUBLIC_FILE_URL;

  useEffect(() => {
    loadContactData();
    loadBlogData();
  }, []);

  const loadBlogData = async () => {
    try {
      setLoading(true);
      setError("");
      // console.log("Loading data from:", `${BASE_URL}/api/about`);

      const res = await axios.get(`${BASE_URL}/api/blog/${id}`);

      // console.log("Response data:", res.data.data);

      setBlog(res.data.data);
    } catch (error) {
      console.error("Load failed:", error);
      console.error("Error response:", error.response);

      if (error.response?.status === 404) {
        setBlog(null);
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

  const loadContactData = async () => {
    try {
      setLoadingBlog(true);
      setError("");
      // console.log("Loading data from:", `${BASE_URL}/api/about`);

      const res = await axios.get(`${BASE_URL}/api/blogs`);

      // console.log("Response data:", res.data);

      setAllBlog(res.data);
    } catch (error) {
      console.error("Load failed:", error);
      console.error("Error response:", error.response);

      if (error.response?.status === 404) {
        setAllBlog(null);
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
      setLoadingBlog(false);
    }
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-linear-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (!blog) {
    return (
      <div className="min-h-screen bg-linear-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">
            Blog Not Found
          </h1>
          <button
            onClick={() => router.push("/blog")}
            className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg transition duration-300"
          >
            Back to Blogs
          </button>
        </div>
      </div>
    );
  }

  return (
    <>
      {/* -------------------------------------------------------------- */}
      <div className=" rounded-xl lg:max-w-[90%] max-w-full mx-auto p-2 lg:p-8 space-y-8">
        {/* Blog content will here---------- */}
        <article className="bg-white px-4 sm:px-8 lg:px-14 pt-4 sm:pt-10 lg:pt-14 pb-12 sm:pb-16 lg:pb-20 rounded-xl sm:rounded-2xl w-full flex-col justify-center items-center">
          {/* Featured Image */}
          <motion.div
            className="w-full"
            initial={{ y: 50, scale: 1, opacity: 0 }}
            whileInView={{ y: 0, scale: 1, opacity: 1 }}
            transition={{
              duration: 0.8,
              ease: "easeOut",
            }}
            viewport={{ once: false }}
          >
            <div className="relative h-96 w-full">
              <Image
                src={`${FILE_URL}/${blog.image}`}
                alt={blog.title}
                fill
                className="object-cover rounded-lg"
                priority
              />
              <div className="absolute inset-0 bg-black/20 rounded-lg"></div>
            </div>
          </motion.div>

          {/* Blog Content */}
          <div className="p-4 md:p-12">
            {/* Title */}
            <motion.div
              className="w-full"
              initial={{ x: 100, scale: 1, opacity: 0 }}
              whileInView={{ x: 0, scale: 1, opacity: 1 }}
              transition={{
                duration: 0.8,
                ease: "easeOut",
              }}
              viewport={{ once: false }}
            >
              <h1 className="text-xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                {blog.title}
              </h1>
            </motion.div>

            {/* Meta Information */}
            <div className="flex items-center gap-4 mb-8 text-gray-600">
              <div className="flex items-center gap-2">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
                <span>{formatDate(blog.published_date)}</span>
              </div>
            </div>

            {/* Description */}
            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-gray-700 leading-relaxed mb-8 text-justify">
                {blog.content}
              </p>
            </div>
          </div>
        </article>
        {/* blog section */}
        <div className="bg-white px-4 sm:px-8 lg:px-14 pt-8 sm:pt-10 lg:pt-14 pb-12 sm:pb-16 lg:pb-20 rounded-xl sm:rounded-2xl w-full flex-col justify-center items-center">
          {/* blog section heading */}
          <div>
            <motion.div
              className="w-full"
              initial={{ x: 50, scale: 1, opacity: 0 }}
              whileInView={{ x: 0, scale: 1, opacity: 1 }}
              transition={{
                duration: 0.8,
                ease: "easeOut",
              }}
              viewport={{ once: false }}
            >
              <h2 className="text-center text-2xl sm:text-3xl lg:text-4xl mb-8 sm:mb-10 lg:mb-14 animo-gradient-header font-bold px-2">
                Our Latest Blogs
              </h2>
            </motion.div>
          </div>
          {/* blogs box */}
          <motion.div
            className="w-full"
            initial={{ y: 50, scale: 1, opacity: 0 }}
            whileInView={{ y: 0, scale: 1, opacity: 1 }}
            transition={{
              duration: 0.8,
              ease: "easeOut",
            }}
            viewport={{ once: false }}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5 lg:gap-x-5 lg:gap-y-10 justify-items-center items-center justify-center px-2 sm:px-6 lg:px-14">
              {allBlog
                ?.filter((b) => b.id !== blog.id)
                .slice(0, 4)
                .map((blog, index) => (
                  <BlogCard key={index} data={blog} />
                ))}
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
}
