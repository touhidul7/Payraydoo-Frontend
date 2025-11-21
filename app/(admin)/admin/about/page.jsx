// app/admin/about/page.jsx
"use client";

import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import Input from "../AdminComponents/form/Input";
import FieldSection from "../AdminComponents/form/FieldSection";

export default function AboutPageManager() {
  const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

  const [editId, setEditId] = useState(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");

  // States
  const [hero, setHero] = useState({
    title: "",
    stylishTitle: "",
    image: null,
  });

  const [leadership, setLeadership] = useState([
    { image: null, name: "", role: "", linkedin: "" },
  ]);

  const [investors, setInvestors] = useState([
    { image: null, name: "", role: "", linkedin: "" },
  ]);

  const [story, setStory] = useState({
    title: "",
    description: "",
  });

  const [founder, setFounder] = useState({
    youtube: "",
  });

  // Load data on component mount
  useEffect(() => {
    loadAboutPage();
  }, []);

  const loadAboutPage = async () => {
    try {
      setLoading(true);
      setError("");
      const res = await axios.get(`${BASE_URL}/api/about`);
      const data = res.data;
      console.log("Loaded About page data:", data);

      if (!data || Object.keys(data).length === 0) {
        resetForm();
        return;
      }

      setEditId(data.id || data._id);

      // Set main form data
      setHero({
        title: data.hero?.title || "",
        stylishTitle: data.hero?.stylishTitle || "",
        image: data.hero?.image || null,
      });

      setLeadership(data.leadership || [{ image: null, name: "", role: "", linkedin: "" }]);
      setInvestors(data.investors || [{ image: null, name: "", role: "", linkedin: "" }]);

      setStory({
        title: data.story?.title || "",
        description: data.story?.description || "",
      });

      setFounder({
        youtube: data.founder?.youtube || "",
      });

    } catch (error) {
      console.error("Load failed:", error);
      if (error.response?.status === 404) {
        resetForm();
      } else {
        setError("Failed to load about page data");
      }
    } finally {
      setLoading(false);
    }
  };

  const resetForm = () => {
    setEditId(null);
    setHero({ title: "", stylishTitle: "", image: null });
    setLeadership([{ image: null, name: "", role: "", linkedin: "" }]);
    setInvestors([{ image: null, name: "", role: "", linkedin: "" }]);
    setStory({ title: "", description: "" });
    setFounder({ youtube: "" });
  };

  // Form field handlers
  const updateHero = (field, value) => {
    setHero(prev => ({ ...prev, [field]: value }));
  };

  const updateStory = (field, value) => {
    setStory(prev => ({ ...prev, [field]: value }));
  };

  const updateFounder = (field, value) => {
    setFounder(prev => ({ ...prev, [field]: value }));
  };

  // Array management
  const addItem = (setter, template) => {
    setter(prev => [...prev, template]);
  };

  const removeItem = (setter, index) => {
    if (setter.length > 1) {
      setter(prev => prev.filter((_, i) => i !== index));
    }
  };

  const updateListField = (list, setter, index, field, value) => {
    setter(prev =>
      prev.map((item, i) =>
        i === index ? { ...item, [field]: value } : item
      )
    );
  };

  // Validation
  const validateForm = () => {
    if (!hero.title.trim()) {
      setError("Hero title is required");
      return false;
    }

    if (!hero.stylishTitle.trim()) {
      setError("Hero stylish title is required");
      return false;
    }

    setError("");
    return true;
  };

  // Form submission
 // In your handleSubmit function, replace with this:

const handleSubmit = async (e) => {
  e.preventDefault();

  if (!validateForm()) return;

  setSaving(true);
  setError("");

  try {
    const formData = new FormData();

    // -------------------------
    // BASIC FIELDS - Send as individual fields, not JSON
    // -------------------------
    formData.append("hero[title]", hero.title.trim());
    formData.append("hero[stylishTitle]", hero.stylishTitle.trim());

    formData.append("story[title]", story.title.trim());
    formData.append("story[description]", story.description.trim());

    formData.append("founder[youtube]", founder.youtube.trim());

    // -------------------------
    // LEADERSHIP - Send as array fields
    // -------------------------
    const filteredLeadership = leadership.filter(item => 
      item.name.trim() !== "" || item.role.trim() !== "" || item.linkedin.trim() !== "" || item.image
    );
    
    filteredLeadership.forEach((item, i) => {
      formData.append(`leadership[${i}][name]`, item.name.trim());
      formData.append(`leadership[${i}][role]`, item.role.trim());
      formData.append(`leadership[${i}][linkedin]`, item.linkedin.trim());
      
      // ONLY append new images
      if (item.image && typeof item.image !== "string") {
        formData.append(`leadershipImage_${i}`, item.image);
      }
    });

    // -------------------------
    // INVESTORS - Send as array fields
    // -------------------------
    const filteredInvestors = investors.filter(item => 
      item.name.trim() !== "" || item.role.trim() !== "" || item.linkedin.trim() !== "" || item.image
    );
    
    filteredInvestors.forEach((item, i) => {
      formData.append(`investors[${i}][name]`, item.name.trim());
      formData.append(`investors[${i}][role]`, item.role.trim());
      formData.append(`investors[${i}][linkedin]`, item.linkedin.trim());
      
      // ONLY append new images
      if (item.image && typeof item.image !== "string") {
        formData.append(`investorImage_${i}`, item.image);
      }
    });

    // -------------------------
    // HERO IMAGE - ONLY NEW IMAGES
    // -------------------------
    if (hero.image && typeof hero.image !== "string") {
      formData.append("heroImage", hero.image);
    }

    // DEBUG - Check what's being sent
    console.log("---- ABOUT PAGE FORM DATA ----");
    for (let p of formData.entries()) {
      console.log(p[0], p[1]);
    }

    // -------------------------
    // SEND REQUEST
    // -------------------------
    let response;

    if (editId) {
      formData.append("_method", "PUT");
      response = await axios.post(
        `${BASE_URL}/api/about/${editId}`,
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );
    } else {
      response = await axios.post(`${BASE_URL}/api/about`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
    }

    alert("About page updated successfully!");
    await loadAboutPage();
  } catch (err) {
    console.error("Save error:", err);
    const errorMessage =
      err.response?.data?.message || 
      err.response?.data?.errors || 
      err.message || 
      "Failed to save about page data";
    setError(errorMessage);
    alert(`Error: ${errorMessage}`);
  } finally {
    setSaving(false);
  }
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

  const FieldTitle = ({ children }) => (
    <h3 className="text-lg font-medium text-gray-700 mb-3">{children}</h3>
  );

  // Loading State
  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading about page...</p>
        </div>
      </div>
    );
  }

  // Main Render
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">About Page Manager</h1>
          <p className="text-gray-600 mt-2">
            Manage your about page content, leadership team, and investors
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

        <form onSubmit={handleSubmit}>
          <div className="space-y-6">

            {/* HERO SECTION */}
            <FieldSection title="Hero Section">
              <div className="grid grid-cols-1 gap-4">
                <Input
                  label="Title"
                  value={hero.title}
                  onChange={(e) => updateHero("title", e.target.value)}
                  placeholder="Enter hero title"
                  required
                />
                <Input
                  label="Stylish Title"
                  value={hero.stylishTitle}
                  onChange={(e) => updateHero("stylishTitle", e.target.value)}
                  placeholder="Enter stylish title"
                  required
                />
              </div>
              <div className="mt-4">
                <ImageInput
                  label="Hero Image"
                  onChange={(file) => updateHero("image", file)}
                  currentImage={hero.image}
                />
              </div>
            </FieldSection>

            {/* LEADERSHIP TEAM SECTION */}
            <FieldSection title="Leadership Team">
              <FieldTitle>Leadership Members</FieldTitle>
              <div className="space-y-6">
                {leadership.map((item, index) => (
                  <div key={index} className="p-4 bg-gray-50 rounded-lg">
                    <div className="grid grid-cols-1 lg:grid-cols-6 gap-4">
                      <div className="lg:col-span-2">
                        <ImageInput
                          label="Profile Image"
                          onChange={(file) => updateListField(leadership, setLeadership, index, "image", file)}
                          currentImage={item.image}
                        />
                      </div>
                      <div className="lg:col-span-2">
                        <Input
                          label="Name"
                          value={item.name}
                          onChange={(e) => updateListField(leadership, setLeadership, index, "name", e.target.value)}
                          placeholder="Enter full name"
                        />
                      </div>
                      <div className="lg:col-span-1">
                        <Input
                          label="Role"
                          value={item.role}
                          onChange={(e) => updateListField(leadership, setLeadership, index, "role", e.target.value)}
                          placeholder="Enter role"
                        />
                      </div>
                      <div className="lg:col-span-1">
                        <Input
                          label="LinkedIn URL"
                          value={item.linkedin}
                          onChange={(e) => updateListField(leadership, setLeadership, index, "linkedin", e.target.value)}
                          placeholder="https://linkedin.com/in/username"
                        />
                      </div>
                      <div className="lg:col-span-6 flex justify-end">
                        <button
                          type="button"
                          onClick={() => removeItem(setLeadership, index)}
                          disabled={leadership.length === 1}
                          className={`
                            px-4 py-2 rounded-md transition-colors
                            ${leadership.length === 1
                              ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                              : "bg-red-100 text-red-700 hover:bg-red-200"
                            }
                          `}
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <button
                type="button"
                onClick={() => addItem(setLeadership, { image: null, name: "", role: "", linkedin: "" })}
                className="mt-4 flex items-center space-x-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-md hover:bg-blue-200 transition-colors"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
                <span>Add Leadership Member</span>
              </button>
            </FieldSection>

            {/* INVESTORS SECTION */}
            <FieldSection title="Investor Panel">
              <FieldTitle>Investors</FieldTitle>
              <div className="space-y-6">
                {investors.map((item, index) => (
                  <div key={index} className="p-4 bg-gray-50 rounded-lg">
                    <div className="grid grid-cols-1 lg:grid-cols-6 gap-4">
                      <div className="lg:col-span-2">
                        <ImageInput
                          label="Profile Image"
                          onChange={(file) => updateListField(investors, setInvestors, index, "image", file)}
                          currentImage={item.image}
                        />
                      </div>
                      <div className="lg:col-span-2">
                        <Input
                          label="Name"
                          value={item.name}
                          onChange={(e) => updateListField(investors, setInvestors, index, "name", e.target.value)}
                          placeholder="Enter full name"
                        />
                      </div>
                      <div className="lg:col-span-1">
                        <Input
                          label="Role"
                          value={item.role}
                          onChange={(e) => updateListField(investors, setInvestors, index, "role", e.target.value)}
                          placeholder="Enter role"
                        />
                      </div>
                      <div className="lg:col-span-1">
                        <Input
                          label="LinkedIn URL"
                          value={item.linkedin}
                          onChange={(e) => updateListField(investors, setInvestors, index, "linkedin", e.target.value)}
                          placeholder="https://linkedin.com/in/username"
                        />
                      </div>
                      <div className="lg:col-span-6 flex justify-end">
                        <button
                          type="button"
                          onClick={() => removeItem(setInvestors, index)}
                          disabled={investors.length === 1}
                          className={`
                            px-4 py-2 rounded-md transition-colors
                            ${investors.length === 1
                              ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                              : "bg-red-100 text-red-700 hover:bg-red-200"
                            }
                          `}
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <button
                type="button"
                onClick={() => addItem(setInvestors, { image: null, name: "", role: "", linkedin: "" })}
                className="mt-4 flex items-center space-x-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-md hover:bg-blue-200 transition-colors"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
                <span>Add Investor</span>
              </button>
            </FieldSection>

            {/* STORY SECTION */}
            <FieldSection title="Story Section">
              <div className="grid grid-cols-1 gap-4">
                <Input
                  label="Story Title"
                  value={story.title}
                  onChange={(e) => updateStory("title", e.target.value)}
                  placeholder="Enter story title"
                />
                <TextArea
                  label="Story Description"
                  value={story.description}
                  onChange={(e) => updateStory("description", e.target.value)}
                  placeholder="Enter story description"
                  rows={6}
                />
              </div>
            </FieldSection>

            {/* FOUNDER MESSAGE SECTION */}
            <FieldSection title="Message From Founder">
              <Input
                label="YouTube Video URL"
                value={founder.youtube}
                onChange={(e) => updateFounder("youtube", e.target.value)}
                placeholder="Enter YouTube video URL"
              />
            </FieldSection>

            {/* SUBMIT BUTTON */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-medium text-gray-900">
                    Save Changes
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {editId
                      ? "Update your about page"
                      : "Create new about page"}
                  </p>
                </div>
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
                    `💾 ${editId ? "Update" : "Create"} About Page`
                  )}
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}