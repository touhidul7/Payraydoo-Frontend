"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import Input from "../AdminComponents/form/Input";
import TextArea from "../AdminComponents/form/TextArea";
import ImageInput from "../AdminComponents/form/ImageInput";

export default function BlogPage() {
  const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

  const [editId, setEditId] = useState(null);

  const [form, setForm] = useState({
    title: "",
    slug: "",
    shortDescription: "",
    content: "",
    publishedDate: "",
    image: null,
  });

  const [blogs, setBlogs] = useState([]);

  // ------------------ AUTO SLUG FROM TITLE ---------------------
  const createSlug = (text) => {
    return text
      .toLowerCase()
      .trim()
      .replace(/[^a-z0-9\s-]/g, "") // remove special characters
      .replace(/\s+/g, "-"); // replace spaces with -
  };

  // ------------------ LOAD BLOGS ------------------
  const loadBlogs = async () => {
    try {
      const res = await axios.get(`${BASE_URL}/blogs`);
      setBlogs(res.data || []);
    } catch (error) {
      console.error("Failed to load blogs:", error);
    }
  };

  useEffect(() => {
    loadBlogs();
  }, []);

  // ------------------ HANDLE SUBMIT ------------------
  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      title: form.title,
      slug: form.slug,
      shortDescription: form.shortDescription,
      content: form.content,
      publishedDate: form.publishedDate,
    };

    console.log("Submitting blog:", payload);

    const formData = new FormData();
    formData.append("data", JSON.stringify(payload));
    if (form.image) formData.append("image", form.image);

    try {
      if (!editId) {
        // Create Blog
        await axios.post(`${BASE_URL}/blogs`, formData, {
          headers: { "Content-Type": "multipart/form-data" },
        });
        alert("Blog Created!");
      } else {
        // Update Blog
        await axios.put(`${BASE_URL}/blogs/${editId}`, formData, {
          headers: { "Content-Type": "multipart/form-data" },
        });
        alert("Blog Updated!");
        setEditId(null);
      }

      setForm({
        title: "",
        slug: "",
        shortDescription: "",
        content: "",
        publishedDate: "",
        image: null,
      });

      loadBlogs();
    } catch (err) {
      console.error("Submit failed:", err);
      alert("Error saving blog");
    }
  };

  // ------------------ DELETE BLOG ------------------
  const deleteBlog = async (id) => {
    if (!confirm("Are you sure you want to delete this blog?")) return;
    try {
      await axios.delete(`${BASE_URL}/blogs/${id}`);
      loadBlogs();
    } catch (error) {
      console.error("Delete failed:", error);
      alert("Failed to delete blog");
    }
  };

  // ------------------ EDIT BLOG ------------------
  const editBlog = (blog) => {
    setEditId(blog._id);

    setForm({
      title: blog.title,
      slug: blog.slug,
      shortDescription: blog.shortDescription,
      content: blog.content,
      publishedDate: blog.publishedDate,
      image: null, // cannot pre-fill file input
    });
  };

  const fieldTitle = "text-lg font-bold text-gray-900 mb-2";

  return (
    <div className="p-6 space-y-10">
      <h1 className="text-2xl font-bold text-gray-900">Blog Manager</h1>

      {/* ========================= BLOG FORM ========================= */}
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-6 gap-8">

          {/* FEATURED IMAGE */}
          <div className="col-span-6">
            <h2 className={fieldTitle}>Featured Image</h2>
          </div>

          <div className="col-span-6">
            <ImageInput
              label="Upload Featured Image"
              onChange={(file) => setForm({ ...form, image: file })}
            />
          </div>

          {/* TITLE */}
          <div className="col-span-6">
            <Input
              label="Blog Title"
              value={form.title}
              onChange={(e) => {
                const title = e.target.value;
                setForm({
                  ...form,
                  title,
                  slug: createSlug(title),
                });
              }}
            />
          </div>

          {/* SLUG */}
          <div className="col-span-6">
            <Input label="Slug (auto-generated)" value={form.slug} disabled />
          </div>

          {/* SHORT DESCRIPTION */}
          <div className="col-span-6">
            <TextArea
              label="Short Description"
              rows="3"
              value={form.shortDescription}
              onChange={(e) =>
                setForm({ ...form, shortDescription: e.target.value })
              }
            />
          </div>

          {/* FULL CONTENT */}
          <div className="col-span-6">
            <TextArea
              label="Content (Description)"
              rows="8"
              value={form.content}
              onChange={(e) =>
                setForm({ ...form, content: e.target.value })
              }
            />
          </div>

          {/* DATE */}
          <div className="col-span-3">
            <Input
              label="Published Date"
              type="date"
              value={form.publishedDate}
              onChange={(e) =>
                setForm({ ...form, publishedDate: e.target.value })
              }
            />
          </div>

          {/* SUBMIT */}
          <div className="col-span-6 mt-6">
            <button
              type="submit"
              className="bg-green-600 hover:bg-green-700 text-white w-full py-3 rounded-lg"
            >
              {editId ? "Update Blog" : "Create Blog"}
            </button>
          </div>

        </div>
      </form>

      {/* ======================== BLOG TABLE ======================== */}
      <div className="mt-10">
        <h2 className={fieldTitle}>All Blogs</h2>

        <table className="w-full border border-gray-300 text-left">
          <thead>
            <tr className="bg-gray-100 border-b">
              <th className="p-3 border-r">Image</th>
              <th className="p-3 border-r">Title</th>
              <th className="p-3 border-r">Slug</th>
              <th className="p-3 border-r">Date</th>
              <th className="p-3 border-r">Actions</th>
            </tr>
          </thead>
          <tbody>
            {blogs.map((blog) => (
              <tr key={blog._id} className="border-b">
                <td className="p-3 border-r">
                  <img
                    src={blog.image}
                    alt="blog"
                    className="w-20 h-14 object-cover rounded"
                  />
                </td>
                <td className="p-3 border-r">{blog.title}</td>
                <td className="p-3 border-r">{blog.slug}</td>
                <td className="p-3 border-r">{blog.publishedDate}</td>
                <td className="p-3 flex gap-3">
                  <button
                    className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded"
                    onClick={() => editBlog(blog)}
                  >
                    Edit
                  </button>

                  <button
                    className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded"
                    onClick={() => deleteBlog(blog._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}

            {blogs.length === 0 && (
              <tr>
                <td colSpan="5" className="p-4 text-center text-gray-500">
                  No blogs found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

    </div>
  );
}
