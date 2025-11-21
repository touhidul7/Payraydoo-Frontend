// app/admin/contact/page.jsx
"use client";

import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import Input from "../AdminComponents/form/Input";
import FieldSection from "../AdminComponents/form/FieldSection";

export default function ContactPageManager() {
  const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

  const [editId, setEditId] = useState(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");

  // States
  const [title, setTitle] = useState("");
  const [offers, setOffers] = useState([{ text: "" }]);
  const [logos, setLogos] = useState([{ image: null, title: "" }]);
  const [submission, setSubmission] = useState({ web3key: "" });

  // Load data on component mount
  useEffect(() => {
    loadContactData();
  }, []);

  const loadContactData = async () => {
    try {
      setLoading(true);
      setError("");
      const res = await axios.get(`${BASE_URL}/api/contact`);
      const data = res.data;
      console.log(data);

      if (!data || Object.keys(data).length === 0) {
        resetForm();
        return;
      }

      setEditId(data.id || data._id);
      setTitle(data.title || "");

      setOffers(
        data.offers && data.offers.length > 0 ? data.offers : [{ text: "" }]
      );

      setLogos(
        data.logos && data.logos.length > 0
          ? data.logos.map((logo) => ({
              image: logo.image || null,
              title: logo.title || "",
            }))
          : [{ image: null, title: "" }]
      );

      setSubmission({
        web3key: data.submission?.web3key || "",
      });
    } catch (error) {
      console.error("Load failed:", error);
      if (error.response?.status === 404) {
        resetForm();
      } else {
        setError("Failed to load contact page data");
      }
    } finally {
      setLoading(false);
    }
  };

  const resetForm = () => {
    setEditId(null);
    setTitle("");
    setOffers([{ text: "" }]);
    setLogos([{ image: null, title: "" }]);
    setSubmission({ web3key: "" });
  };

  // Offer management
  const addOffer = () => {
    setOffers((prev) => [...prev, { text: "" }]);
  };

  const removeOffer = (index) => {
    if (offers.length > 1) {
      setOffers((prev) => prev.filter((_, i) => i !== index));
    }
  };

  const updateOffer = (index, value) => {
    setOffers((prev) =>
      prev.map((item, i) => (i === index ? { ...item, text: value } : item))
    );
  };

  // Logo management
  const addLogo = () => {
    setLogos((prev) => [...prev, { image: null, title: "" }]);
  };

  const removeLogo = (index) => {
    if (logos.length > 1) {
      setLogos((prev) => prev.filter((_, i) => i !== index));
    }
  };

  const updateLogoTitle = (index, value) => {
    setLogos((prev) =>
      prev.map((item, i) => (i === index ? { ...item, title: value } : item))
    );
  };

  const updateLogoImage = (index, file) => {
    setLogos((prev) =>
      prev.map((item, i) => (i === index ? { ...item, image: file } : item))
    );
  };

  // Validation
  const validateForm = () => {
    if (!title.trim()) {
      setError("Page title is required");
      return false;
    }

    const validOffers = offers.filter((offer) => offer.text.trim() !== "");
    if (validOffers.length === 0) {
      setError("At least one offer is required");
      return false;
    }

    const validLogos = logos.filter((logo) => logo.title.trim() !== "");
    if (validLogos.length === 0) {
      setError("At least one logo with title is required");
      return false;
    }

    setError("");
    return true;
  };

  // Form submission - SIMPLIFIED VERSION
  // Form submission - FIXED VERSION
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setSaving(true);
    setError("");

    try {
      const formData = new FormData();

      // -------------------------
      // BASIC FIELDS
      // -------------------------
      formData.append("title", title.trim());

      // -------------------------
      // OFFERS
      // -------------------------
      const filteredOffers = offers.filter((offer) => offer.text.trim() !== "");
      filteredOffers.forEach((offer, i) => {
        formData.append(`offers[${i}][text]`, offer.text.trim());
      });

      // -------------------------
      // LOGOS (FULL FIX)
      // -------------------------
      const filteredLogos = logos.filter(
        (logo) => logo.title.trim() !== "" || logo.image
      );

      filteredLogos.forEach((logo, i) => {
        // Logo title
        formData.append(`logos[${i}][title]`, logo.title.trim());

        // New image uploaded (File)
        if (logo.image && typeof logo.image !== "string") {
          formData.append(`logoImage_${i}`, logo.image);
        }

        // Old saved image (string filename)
        if (typeof logo.image === "string") {
          formData.append(`logos[${i}][existingImage]`, logo.image);
        }
      });

      // -------------------------
      // SUBMISSION SETTINGS
      // -------------------------
      formData.append("submission[web3key]", submission.web3key.trim());

      // DEBUG
      console.log("---- FORM DATA ----");
      for (let p of formData.entries()) {
        console.log(p[0], p[1]);
      }

      // -------------------------
      // SEND REQUEST (PUT FIX)
      // -------------------------
      let response;

      if (editId) {
        formData.append("_method", "PUT");

        response = await axios.post(
          `${BASE_URL}/api/contact/${editId}`,
          formData,
          {
            headers: { "Content-Type": "multipart/form-data" },
          }
        );
      } else {
        response = await axios.post(`${BASE_URL}/api/contact`, formData, {
          headers: { "Content-Type": "multipart/form-data" },
        });
      }

      alert("Contact page updated!");
      await loadContactData();
    } catch (err) {
      console.error(err);
      const errorMessage =
        err.response?.data?.message || err.message || "Failed to save data";

      setError(errorMessage);
      alert(errorMessage);
    } finally {
      setSaving(false);
    }
  };

  // Reusable Components
  /*   const Input = ({ 
    label, 
    value, 
    onChange, 
    placeholder, 
    type = "text",
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
        <input
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          disabled={disabled}
          className={`
            w-full px-3 py-2 border border-gray-300 rounded-md 
            focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent
            transition-all duration-200
            disabled:bg-gray-100 disabled:cursor-not-allowed
            ${disabled ? 'text-gray-500' : 'text-gray-900'}
          `}
        />
      </div>
    );
  }; */

  const ImageInput = ({
    label,
    onChange,
    currentImage = null,
    required = false,
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
              ${preview || currentImage ? "border-gray-300" : "border-gray-300"}
            `}
          >
            {preview || currentImage ? (
              <div className="flex flex-col items-center space-y-2">
                <div className="w-20 h-20 border rounded overflow-hidden">
                  <img
                    src={preview || `${BASE_URL}/storage/${currentImage}`}
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

          {(preview || currentImage) && (
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

  /*   const FieldSection = ({ title, children }) => (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
      <h2 className="text-xl font-semibold text-gray-800 mb-4 pb-2 border-b border-gray-200">
        {title}
      </h2>
      {children}
    </div>
  ); */

  const FieldTitle = ({ children }) => (
    <h3 className="text-lg font-medium text-gray-700 mb-3">{children}</h3>
  );

  // Loading State
  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading contact page...</p>
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
          <h1 className="text-3xl font-bold text-gray-900">
            Contact Page Manager
          </h1>
          <p className="text-gray-600 mt-2">
            Manage your contact page content, offers, and logos
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
            {/* PAGE TITLE SECTION */}
            <FieldSection title="Page Title">
              <Input
                label="Main Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Enter the main title for your contact page"
                required
              />
            </FieldSection>

            {/* OFFERS SECTION */}
            <FieldSection title="Offers Section">
              <FieldTitle>What We Offer</FieldTitle>
              <div className="space-y-4">
                {offers.map((offer, index) => (
                  <div
                    key={index}
                    className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg"
                  >
                    <div className="flex-1">
                      <Input
                        label={`Offer ${index + 1}`}
                        value={offer.text}
                        onChange={(e) => updateOffer(index, e.target.value)}
                        placeholder="Describe what you offer..."
                        required={index === 0}
                      />
                    </div>
                    <button
                      type="button"
                      onClick={() => removeOffer(index)}
                      disabled={offers.length === 1}
                      className={`
                        mt-6 px-4 py-2 rounded-md transition-colors
                        ${
                          offers.length === 1
                            ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                            : "bg-red-100 text-red-700 hover:bg-red-200"
                        }
                      `}
                    >
                      Remove
                    </button>
                  </div>
                ))}
              </div>

              <button
                type="button"
                onClick={addOffer}
                className="mt-4 flex items-center space-x-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-md hover:bg-blue-200 transition-colors"
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 4v16m8-8H4"
                  />
                </svg>
                <span>Add Another Offer</span>
              </button>
            </FieldSection>

            {/* LOGOS SECTION */}
            <FieldSection title="Logo Section">
              <FieldTitle>Partner Logos</FieldTitle>
              <div className="space-y-6">
                {logos.map((logo, index) => (
                  <div key={index} className="p-4 bg-gray-50 rounded-lg">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                      {/* Logo Image */}
                      <div className="lg:col-span-1">
                        <ImageInput
                          label="Logo Image"
                          onChange={(file) => updateLogoImage(index, file)}
                          currentImage={logo.image}
                        />
                      </div>

                      {/* Logo Title */}
                      <div className="lg:col-span-1">
                        <Input
                          label="Logo Title"
                          value={logo.title}
                          onChange={(e) =>
                            updateLogoTitle(index, e.target.value)
                          }
                          placeholder="Enter company or brand name"
                          required={index === 0}
                        />
                      </div>

                      {/* Remove Button */}
                      <div className="lg:col-span-1 flex items-end">
                        <button
                          type="button"
                          onClick={() => removeLogo(index)}
                          disabled={logos.length === 1}
                          className={`
                            w-full px-4 py-2 rounded-md transition-colors
                            ${
                              logos.length === 1
                                ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                                : "bg-red-100 text-red-700 hover:bg-red-200"
                            }
                          `}
                        >
                          Remove Logo
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <button
                type="button"
                onClick={addLogo}
                className="mt-4 flex items-center space-x-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-md hover:bg-blue-200 transition-colors"
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 4v16m8-8H4"
                  />
                </svg>
                <span>Add Another Logo</span>
              </button>
            </FieldSection>

            {/* FORM SUBMISSION SETTINGS */}
            <FieldSection title="Form Submission Settings">
              <FieldTitle>Web3Forms Configuration</FieldTitle>
              <div className="max-w-md">
                <Input
                  label="Web3Forms API Key"
                  value={submission.web3key}
                  onChange={(e) =>
                    setSubmission({ ...submission, web3key: e.target.value })
                  }
                  placeholder="Enter your Web3Forms API key"
                  type="password"
                />
                <p className="text-sm text-gray-500 mt-2">
                  This key is used to handle form submissions through Web3Forms
                  service.
                </p>
              </div>
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
                      ? "Update your contact page"
                      : "Create new contact page"}
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
                    `💾 ${editId ? "Update" : "Create"} Contact Page`
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
