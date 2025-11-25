// app/admin/blogs/page.jsx
"use client";

import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import Input from "../AdminComponents/form/Input";
import FieldSection from "../AdminComponents/form/FieldSection";

export default function BlogManager() {
  const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

  const [editId, setEditId] = useState(null);
  const [loading, setLoading] = useState(false);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");
  const [blogs, setBlogs] = useState([]);

  const [form, setForm] = useState({
    title: "",
    slug: "",
    shortDescription: "",
    content: "",
    publishedDate: "",
    image: null,
  });

  // ------------------ AUTO SLUG FROM TITLE ---------------------
  const createSlug = (text) => {
    return text
      .toLowerCase()
      .trim()
      .replace(/[^a-z0-9\s-]/g, "") // remove special characters
      .replace(/\s+/g, "-") // replace spaces with -
      .replace(/-+/g, "-"); // replace multiple dashes with single dash
  };

  // ------------------ FORMAT DATE FOR INPUT ---------------------
  const formatDateForInput = (dateString) => {
    if (!dateString) return "";
    
    // If it's already in YYYY-MM-DD format, return as is
    if (/^\d{4}-\d{2}-\d{2}$/.test(dateString)) {
      return dateString;
    }
    
    // If it's a full ISO string or other date format
    const date = new Date(dateString);
    if (isNaN(date.getTime())) return "";
    
    return date.toISOString().split('T')[0]; // Get YYYY-MM-DD part
  };

  // ------------------ LOAD BLOGS ------------------
  const loadBlogs = async () => {
    try {
      setLoading(true);
      const res = await axios.get(`${BASE_URL}/api/blogs`);
      setBlogs(res.data || []);
    } catch (error) {
      console.error("Failed to load blogs:", error);
      setError("Failed to load blogs");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadBlogs();
  }, []);

  // ------------------ HANDLE SUBMIT ------------------
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.title.trim()) {
      setError("Blog title is required");
      return;
    }

    if (!form.shortDescription.trim()) {
      setError("Short description is required");
      return;
    }

    if (!form.content.trim()) {
      setError("Content is required");
      return;
    }

    if (!form.publishedDate) {
      setError("Published date is required");
      return;
    }

    setSaving(true);
    setError("");

    try {
      const formData = new FormData();

      // Add basic fields
      formData.append("title", form.title.trim());
      formData.append("slug", form.slug.trim());
      formData.append("short_description", form.shortDescription.trim());
      formData.append("content", form.content.trim());
      formData.append("published_date", form.publishedDate);

      // Add image if selected
      if (form.image && typeof form.image !== "string") {
        formData.append("image", form.image);
      }

      // DEBUG
      console.log("---- BLOG FORM DATA ----");
      for (let p of formData.entries()) {
        console.log(p[0], p[1]);
      }

      let response;
      if (editId) {
        formData.append("_method", "PUT");
        response = await axios.post(
          `${BASE_URL}/api/blogs/${editId}`,
          formData,
          {
            headers: { "Content-Type": "multipart/form-data" },
          }
        );
      } else {
        response = await axios.post(`${BASE_URL}/api/blogs`, formData, {
          headers: { "Content-Type": "multipart/form-data" },
        });
      }

      alert(editId ? "Blog Updated!" : "Blog Created!");
      
      // Reset form
      setForm({
        title: "",
        slug: "",
        shortDescription: "",
        content: "",
        publishedDate: "",
        image: null,
      });
      setEditId(null);

      // Reload blogs
      await loadBlogs();
    } catch (err) {
      console.error("Submit failed:", err);
      const errorMessage = err.response?.data?.message || err.response?.data?.errors || err.message || "Error saving blog";
      setError(errorMessage);
      alert(errorMessage);
    } finally {
      setSaving(false);
    }
  };

  // ------------------ DELETE BLOG ------------------
  const deleteBlog = async (id) => {
    if (!confirm("Are you sure you want to delete this blog?")) return;
    try {
      await axios.delete(`${BASE_URL}/api/blogs/${id}`);
      await loadBlogs();
      alert("Blog deleted successfully!");
    } catch (error) {
      console.error("Delete failed:", error);
      alert("Failed to delete blog");
    }
  };

  // ------------------ EDIT BLOG ------------------
  const editBlog = (blog) => {
    setEditId(blog.id || blog._id);
    
    // Format the date properly for the input field
    const formattedDate = formatDateForInput(blog.published_date || blog.publishedDate);
    
    setForm({
      title: blog.title || "",
      slug: blog.slug || "",
      shortDescription: blog.short_description || blog.shortDescription || "",
      content: blog.content || "",
      publishedDate: formattedDate,
      image: blog.image || null,
    });

    console.log("Editing blog:", {
      originalDate: blog.published_date || blog.publishedDate,
      formattedDate: formattedDate
    });
  };

  // ------------------ CANCEL EDIT ------------------
  const cancelEdit = () => {
    setEditId(null);
    setForm({
      title: "",
      slug: "",
      shortDescription: "",
      content: "",
      publishedDate: "",
      image: null,
    });
  };

  const ImageInput = ({ 
    label, 
    onChange, 
    currentImage = null,
    required = false 
  }) => {
    const [preview, setPreview] = useState(null);
    const fileInputRef = useRef(null);

    const handleFileChange = (e) => {
      const file = e.target.files[0];
      if (file) {
        if (!file.type.startsWith("image/")) {
          alert("Please select an image file");
          return;
        }

        if (file.size > 5 * 1024 * 1024) {
          alert("Image size should be less than 5MB");
          return;
        }

        onChange(file);
        
        const reader = new FileReader();
        reader.onloadend = () => {
          setPreview(reader.result);
        };
        reader.readAsDataURL(file);
      }
    };

    const handleRemoveImage = () => {
      setPreview(null);
      onChange(null);
      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }
    };

    const handleContainerClick = () => {
      if (fileInputRef.current) {
        fileInputRef.current.click();
      }
    };

    const displayImage = preview || (currentImage && typeof currentImage === 'string' ? `${BASE_URL}/storage/${currentImage}` : null);

    return (
      <div className="flex flex-col space-y-3 w-full">
        {label && (
          <label className="text-sm font-medium text-gray-700">
            {label}
            {required && <span className="text-red-500 ml-1">*</span>}
          </label>
        )}

        <div className="space-y-3">
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            className="hidden"
          />

          <div
            onClick={handleContainerClick}
            className={`
              border-2 border-dashed rounded-lg p-4 text-center cursor-pointer
              transition-all duration-200 hover:border-blue-400 hover:bg-blue-50
              ${displayImage ? "border-gray-300" : "border-gray-300"}
            `}
          >
            {displayImage ? (
              <div className="flex flex-col items-center space-y-2">
                <div className="w-20 h-20 border rounded overflow-hidden">
                  <img
                    src={displayImage}
                    alt="Preview"
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-sm text-gray-600">Click to change image</p>
              </div>
            ) : (
              <div className="flex flex-col items-center space-y-2">
                <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <p className="text-sm text-gray-600">Click to upload image</p>
                <p className="text-xs text-gray-500">
                  PNG, JPG, JPEG up to 5MB
                </p>
              </div>
            )}
          </div>

          {displayImage && (
            <button
              type="button"
              onClick={handleRemoveImage}
              className="w-full bg-red-100 text-red-700 py-2 rounded-md hover:bg-red-200 transition-colors text-sm font-medium"
            >
              Remove Image
            </button>
          )}
        </div>
      </div>
    );
  };

  const TextArea = ({ 
    label, 
    value, 
    onChange, 
    placeholder, 
    rows = 3,
    required = false,
    disabled = false
  }) => {
    return (
      <div className="flex flex-col space-y-2 w-full">
        {label && (
          <label className="text-sm font-medium text-gray-700">
            {label}
            {required && <span className="text-red-500 ml-1">*</span>}
          </label>
        )}
        <textarea
          rows={rows}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          disabled={disabled}
          className={`
            w-full px-3 py-2 border border-gray-300 rounded-md 
            focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent
            transition-all duration-200 resize-vertical
            disabled:bg-gray-100 disabled:cursor-not-allowed
            ${disabled ? 'text-gray-500' : 'text-gray-900'}
          `}
        />
      </div>
    );
  };

  // Loading State
  if (loading && blogs.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading blogs...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Blog Manager</h1>
          <p className="text-gray-600 mt-2">
            Create and manage your blog posts
          </p>
        </div>

        {/* Error Message */}
        {error && (
          <div className="mb-6 bg-red-50 border border-red-200 rounded-lg p-4">
            <div className="flex items-center">
              <svg
                className="w-5 h-5 text-red-500 mr-2"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="text-red-700 font-medium">{error}</span>
            </div>
          </div>
        )}

        {/* ========================= BLOG FORM ========================= */}
        <FieldSection title={editId ? "Edit Blog Post" : "Create New Blog Post"}>
          {editId && (
            <div className="mb-4 p-3 bg-blue-50 border border-blue-200 rounded-md">
              <div className="flex items-center justify-between">
                <p className="text-blue-700 text-sm">
                  <strong>Editing mode:</strong> You are currently editing an existing blog post.
                </p>
                <button
                  onClick={cancelEdit}
                  className="bg-blue-100 hover:bg-blue-200 text-blue-700 px-3 py-1 rounded text-sm font-medium transition-colors"
                >
                  Cancel Edit
                </button>
              </div>
            </div>
          )}
          
          <form onSubmit={handleSubmit}>
            <div className="space-y-6">

              {/* FEATURED IMAGE */}
              <ImageInput
                label="Featured Image"
                onChange={(file) => setForm({ ...form, image: file })}
                currentImage={form.image}
              />

              {/* TITLE */}
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
                placeholder="Enter blog title"
                required
              />

              {/* SLUG */}
              <Input 
                label="Slug (auto-generated)" 
                value={form.slug} 
                disabled 
                placeholder="Slug will be generated automatically"
              />

              {/* SHORT DESCRIPTION */}
              <TextArea
                label="Short Description"
                value={form.shortDescription}
                onChange={(e) => setForm({ ...form, shortDescription: e.target.value })}
                placeholder="Enter a brief description for the blog"
                rows={3}
                required
              />

              {/* FULL CONTENT */}
              <TextArea
                label="Content"
                value={form.content}
                onChange={(e) => setForm({ ...form, content: e.target.value })}
                placeholder="Write your blog content here..."
                rows={8}
                required
              />

              {/* DATE */}
              <div>
                <Input
                  label="Published Date"
                  type="date"
                  value={form.publishedDate}
                  onChange={(e) => setForm({ ...form, publishedDate: e.target.value })}
                  required
                />
                {form.publishedDate && (
                  <p className="text-sm text-gray-500 mt-1">
                    Selected date: {form.publishedDate}
                  </p>
                )}
              </div>

              {/* SUBMIT BUTTON */}
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-medium text-gray-900">
                      {editId ? "Update Blog Post" : "Create Blog Post"}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {editId ? "Save your changes to the blog post" : "Publish a new blog post"}
                    </p>
                  </div>
                  <div className="flex gap-3">
                    {editId && (
                      <button
                        type="button"
                        onClick={cancelEdit}
                        className="px-6 py-3 rounded-lg font-medium bg-gray-500 hover:bg-gray-600 text-white transition-colors"
                      >
                        Cancel
                      </button>
                    )}
                    <button
                      type="submit"
                      disabled={saving}
                      className={`
                        px-8 py-3 rounded-lg font-medium transition-all duration-200
                        ${
                          saving
                            ? "bg-gray-400 cursor-not-allowed"
                            : "bg-green-600 hover:bg-green-700 shadow-sm hover:shadow-md"
                        }
                        text-white
                      `}
                    >
                      {saving ? (
                        <div className="flex items-center space-x-2">
                          <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                          <span>Saving...</span>
                        </div>
                      ) : (
                        `💾 ${editId ? "Update" : "Create"} Blog Post`
                      )}
                    </button>
                  </div>
                </div>
              </div>

            </div>
          </form>
        </FieldSection>

        {/* ======================== BLOG TABLE ======================== */}
        <FieldSection title="All Blog Posts">
          <div className="overflow-x-auto">
            <table className="w-full border border-gray-300 text-left bg-white rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-gray-100 border-b">
                  <th className="p-4 border-r font-semibold text-gray-700">Image</th>
                  <th className="p-4 border-r font-semibold text-gray-700">Title</th>
                  <th className="p-4 border-r font-semibold text-gray-700">Slug</th>
                  <th className="p-4 border-r font-semibold text-gray-700">Date</th>
                  <th className="p-4 font-semibold text-gray-700">Actions</th>
                </tr>
              </thead>
              <tbody>
                {blogs?.map((blog) => (
                  <tr key={blog.id || blog._id} className="border-b hover:bg-gray-50 transition-colors">
                    <td className="p-4 border-r">
                      {blog.image ? (
                        <img
                          src={`${BASE_URL}/storage/${blog.image}`}
                          alt={blog.title}
                          className="w-20 h-14 object-cover rounded border"
                        />
                      ) : (
                        <div className="w-20 h-14 bg-gray-200 rounded flex items-center justify-center text-gray-500 text-xs">
                          No Image
                        </div>
                      )}
                    </td>
                    <td className="p-4 border-r font-medium text-gray-900">{blog?.title}</td>
                    <td className="p-4 border-r text-gray-600">{blog?.slug}</td>
                    <td className="p-4 border-r text-gray-600">
                      {formatDateForInput(blog.published_date || blog.publishedDate) || 'No date'}
                    </td>
                    <td className="p-4">
                      <div className="flex gap-2">
                        <button
                          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition-colors text-sm font-medium"
                          onClick={() => editBlog(blog)}
                        >
                          Edit
                        </button>
                        <button
                          className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md transition-colors text-sm font-medium"
                          onClick={() => deleteBlog(blog?.id || blog?._id)}
                        >
                          Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}

                {blogs.length === 0 && (
                  <tr>
                    <td colSpan="5" className="p-8 text-center text-gray-500">
                      No blog posts found. Create your first blog post above.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </FieldSection>
      </div>
    </div>
  );
}