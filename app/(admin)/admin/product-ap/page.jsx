// app/admin/product-ap/page.jsx
"use client";

import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import Input from "../AdminComponents/form/Input";
import FieldSection from "../AdminComponents/form/FieldSection";
import TextArea from "../AdminComponents/form/TextArea";

export default function ProductApManager() {
  const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

  const [editId, setEditId] = useState(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");

  // States
  const [hero, setHero] = useState({
    title: "",
    smallImage: null,
    bigImage: null,
  });

  const [apSection, setApSection] = useState({
    title: "",
    description: "",
  });

  const [invoiceProcesses, setInvoiceProcesses] = useState([
    { title: "", description: "", image: null },
  ]);

  const [capabilities, setCapabilities] = useState([
    { title: "", description: "", image: null },
  ]);

  const [invoiceSection, setInvoiceSection] = useState({
    title: "",
    description: "",
    image1: null,
    image2: null,
    bigImage: null,
  });

  // Load data on component mount
  useEffect(() => {
    loadProductAp();
  }, []);

  const loadProductAp = async () => {
    try {
      setLoading(true);
      setError("");
      const res = await axios.get(`${BASE_URL}/api/productap`);
      const data = res.data;
      console.log("Loaded Product AP data:", data);

      if (!data || Object.keys(data).length === 0) {
        resetForm();
        return;
      }

      setEditId(data.id || data._id);

      // Set main form data
      setHero({
        title: data.hero?.title || "",
        smallImage: data.hero?.smallImage || null,
        bigImage: data.hero?.bigImage || null,
      });

      setApSection({
        title: data.ap_section?.title || "",
        description: data.ap_section?.description || "",
      });

      setInvoiceProcesses(
        data.invoice_processes || [{ title: "", description: "", image: null }]
      );
      setCapabilities(
        data.capabilities || [{ title: "", description: "", image: null }]
      );

      setInvoiceSection({
        title: data.invoice_section?.title || "",
        description: data.invoice_section?.description || "",
        image1: data.invoice_section?.image1 || null,
        image2: data.invoice_section?.image2 || null,
        bigImage: data.invoice_section?.bigImage || null,
      });
    } catch (error) {
      console.error("Load failed:", error);
      if (error.response?.status === 404) {
        resetForm();
      } else {
        setError("Failed to load Product AP data");
      }
    } finally {
      setLoading(false);
    }
  };

  const resetForm = () => {
    setEditId(null);
    setHero({ title: "", smallImage: null, bigImage: null });
    setApSection({ title: "", description: "" });
    setInvoiceProcesses([{ title: "", description: "", image: null }]);
    setCapabilities([{ title: "", description: "", image: null }]);
    setInvoiceSection({
      title: "",
      description: "",
      image1: null,
      image2: null,
      bigImage: null,
    });
  };

  // Form field handlers
  const updateHero = (field, value) => {
    setHero((prev) => ({ ...prev, [field]: value }));
  };

  const updateApSection = (field, value) => {
    setApSection((prev) => ({ ...prev, [field]: value }));
  };

  const updateInvoiceSection = (field, value) => {
    setInvoiceSection((prev) => ({ ...prev, [field]: value }));
  };

  // Array management
  const addItem = (setter, template) => {
    setter((prev) => [...prev, template]);
  };

  const removeItem = (setter, index) => {
    if (setter.length > 1) {
      setter((prev) => prev.filter((_, i) => i !== index));
    }
  };

  const updateListField = (list, setter, index, field, value) => {
    setter((prev) =>
      prev.map((item, i) => (i === index ? { ...item, [field]: value } : item))
    );
  };

  // Validation
  const validateForm = () => {
    if (!hero.title.trim()) {
      setError("Hero title is required");
      return false;
    }

    if (!apSection.title.trim()) {
      setError("AP Section title is required");
      return false;
    }

    setError("");
    return true;
  };

  // Form submission
  // Form submission - UPDATED VERSION (remove existingImage fields)
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
      formData.append("hero[title]", hero.title.trim());

      formData.append("ap_section[title]", apSection.title.trim());
      formData.append("ap_section[description]", apSection.description.trim());

      formData.append("invoice_section[title]", invoiceSection.title.trim());
      formData.append(
        "invoice_section[description]",
        invoiceSection.description.trim()
      );

      // -------------------------
      // HERO IMAGES - ONLY NEW IMAGES
      // -------------------------
      if (hero.smallImage && typeof hero.smallImage !== "string") {
        formData.append("heroSmallImage", hero.smallImage);
      }
      if (hero.bigImage && typeof hero.bigImage !== "string") {
        formData.append("heroBigImage", hero.bigImage);
      }

      // -------------------------
      // INVOICE PROCESSES - ONLY NEW IMAGES
      // -------------------------
      const filteredInvoiceProcesses = invoiceProcesses.filter(
        (item) =>
          item.title.trim() !== "" ||
          item.description.trim() !== "" ||
          item.image
      );

      filteredInvoiceProcesses.forEach((item, i) => {
        formData.append(`invoice_processes[${i}][title]`, item.title.trim());
        formData.append(
          `invoice_processes[${i}][description]`,
          item.description.trim()
        );

        // ONLY append new images
        if (item.image && typeof item.image !== "string") {
          formData.append(`processImage_${i}`, item.image);
        }
      });

      // -------------------------
      // CAPABILITIES - ONLY NEW IMAGES
      // -------------------------
      const filteredCapabilities = capabilities.filter(
        (item) =>
          item.title.trim() !== "" ||
          item.description.trim() !== "" ||
          item.image
      );

      filteredCapabilities.forEach((item, i) => {
        formData.append(`capabilities[${i}][title]`, item.title.trim());
        formData.append(
          `capabilities[${i}][description]`,
          item.description.trim()
        );

        // ONLY append new images
        if (item.image && typeof item.image !== "string") {
          formData.append(`capabilityImage_${i}`, item.image);
        }
      });

      // -------------------------
      // INVOICE SECTION IMAGES - ONLY NEW IMAGES
      // -------------------------
      if (invoiceSection.image1 && typeof invoiceSection.image1 !== "string") {
        formData.append("invoiceImage1", invoiceSection.image1);
      }
      if (invoiceSection.image2 && typeof invoiceSection.image2 !== "string") {
        formData.append("invoiceImage2", invoiceSection.image2);
      }
      if (
        invoiceSection.bigImage &&
        typeof invoiceSection.bigImage !== "string"
      ) {
        formData.append("invoiceBigImage", invoiceSection.bigImage);
      }

      // DEBUG
      console.log("---- PRODUCT AP FORM DATA ----");
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
          `${BASE_URL}/api/productap/${editId}`,
          formData,
          {
            headers: { "Content-Type": "multipart/form-data" },
          }
        );
      } else {
        response = await axios.post(`${BASE_URL}/api/productap`, formData, {
          headers: { "Content-Type": "multipart/form-data" },
        });
      }

      alert("Product AP page updated successfully!");
      await loadProductAp();
    } catch (err) {
      console.error(err);
      const errorMessage =
        err.response?.data?.message ||
        err.message ||
        "Failed to save Product AP data";
      setError(errorMessage);
      alert(errorMessage);
    } finally {
      setSaving(false);
    }
  };

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

    const displayImage =
      preview ||
      (currentImage && typeof currentImage === "string"
        ? `${BASE_URL}/storage/${currentImage}`
        : null);

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

  const FieldTitle = ({ children }) => (
    <h3 className="text-lg font-medium text-gray-700 mb-3">{children}</h3>
  );

  // Loading State
  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading Product AP page...</p>
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
            Product AP Manager
          </h1>
          <p className="text-gray-600 mt-2">
            Manage your Product AP page content and sections
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
                  label="Hero Title"
                  value={hero.title}
                  onChange={(e) => updateHero("title", e.target.value)}
                  placeholder="Enter hero title"
                  required
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                <ImageInput
                  label="Small Image"
                  onChange={(file) => updateHero("smallImage", file)}
                  currentImage={hero.smallImage}
                />
                <ImageInput
                  label="Big Image"
                  onChange={(file) => updateHero("bigImage", file)}
                  currentImage={hero.bigImage}
                />
              </div>
            </FieldSection>

            {/* AP SECTION */}
            <FieldSection title="AP Invoice Processing Section">
              <div className="grid grid-cols-1 gap-4">
                <Input
                  label="Section Title"
                  value={apSection.title}
                  onChange={(e) => updateApSection("title", e.target.value)}
                  placeholder="Enter section title"
                  required
                />
                <TextArea
                  label="Description"
                  value={apSection.description}
                  onChange={(e) =>
                    updateApSection("description", e.target.value)
                  }
                  placeholder="Enter section description"
                  rows={4}
                />
              </div>
            </FieldSection>

            {/* INVOICE PROCESSES SECTION */}
            <FieldSection title="Invoice Processes">
              <FieldTitle>Invoice Process Steps</FieldTitle>
              <div className="space-y-6">
                {invoiceProcesses.map((item, index) => (
                  <div key={index} className="p-4 bg-gray-50 rounded-lg">
                    <div className="grid grid-cols-1 lg:grid-cols-6 gap-4">
                      <div className="lg:col-span-3">
                        <Input
                          label={`Process Title ${index + 1}`}
                          value={item.title}
                          onChange={(e) =>
                            updateListField(
                              invoiceProcesses,
                              setInvoiceProcesses,
                              index,
                              "title",
                              e.target.value
                            )
                          }
                          placeholder="Enter process title"
                          required={index === 0}
                        />
                      </div>
                      <div className="lg:col-span-2">
                        <TextArea
                          label="Description"
                          value={item.description}
                          onChange={(e) =>
                            updateListField(
                              invoiceProcesses,
                              setInvoiceProcesses,
                              index,
                              "description",
                              e.target.value
                            )
                          }
                          placeholder="Enter process description"
                          rows={3}
                        />
                      </div>
                      <div className="lg:col-span-1">
                        <ImageInput
                          label="Process Image"
                          onChange={(file) =>
                            updateListField(
                              invoiceProcesses,
                              setInvoiceProcesses,
                              index,
                              "image",
                              file
                            )
                          }
                          currentImage={item.image}
                        />
                      </div>
                      <div className="lg:col-span-6 flex justify-end">
                        <button
                          type="button"
                          onClick={() => removeItem(setInvoiceProcesses, index)}
                          disabled={invoiceProcesses.length === 1}
                          className={`
                            px-4 py-2 rounded-md transition-colors
                            ${
                              invoiceProcesses.length === 1
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
                onClick={() =>
                  addItem(setInvoiceProcesses, {
                    title: "",
                    description: "",
                    image: null,
                  })
                }
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
                <span>Add Invoice Process</span>
              </button>
            </FieldSection>

            {/* CAPABILITIES SECTION */}
            <FieldSection title="Capabilities">
              <FieldTitle>System Capabilities</FieldTitle>
              <div className="space-y-6">
                {capabilities.map((item, index) => (
                  <div key={index} className="p-4 bg-gray-50 rounded-lg">
                    <div className="grid grid-cols-1 lg:grid-cols-6 gap-4">
                      <div className="lg:col-span-3">
                        <Input
                          label={`Capability Title ${index + 1}`}
                          value={item.title}
                          onChange={(e) =>
                            updateListField(
                              capabilities,
                              setCapabilities,
                              index,
                              "title",
                              e.target.value
                            )
                          }
                          placeholder="Enter capability title"
                          required={index === 0}
                        />
                      </div>
                      <div className="lg:col-span-2">
                        <TextArea
                          label="Description"
                          value={item.description}
                          onChange={(e) =>
                            updateListField(
                              capabilities,
                              setCapabilities,
                              index,
                              "description",
                              e.target.value
                            )
                          }
                          placeholder="Enter capability description"
                          rows={3}
                        />
                      </div>
                      <div className="lg:col-span-1">
                        <ImageInput
                          label="Capability Image"
                          onChange={(file) =>
                            updateListField(
                              capabilities,
                              setCapabilities,
                              index,
                              "image",
                              file
                            )
                          }
                          currentImage={item.image}
                        />
                      </div>
                      <div className="lg:col-span-6 flex justify-end">
                        <button
                          type="button"
                          onClick={() => removeItem(setCapabilities, index)}
                          disabled={capabilities.length === 1}
                          className={`
                            px-4 py-2 rounded-md transition-colors
                            ${
                              capabilities.length === 1
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
                onClick={() =>
                  addItem(setCapabilities, {
                    title: "",
                    description: "",
                    image: null,
                  })
                }
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
                <span>Add Capability</span>
              </button>
            </FieldSection>

            {/* INVOICE SECTION */}
            <FieldSection title="Invoice Section">
              <div className="grid grid-cols-1 gap-4">
                <Input
                  label="Section Title"
                  value={invoiceSection.title}
                  onChange={(e) =>
                    updateInvoiceSection("title", e.target.value)
                  }
                  placeholder="Enter invoice section title"
                />
                <TextArea
                  label="Description"
                  value={invoiceSection.description}
                  onChange={(e) =>
                    updateInvoiceSection("description", e.target.value)
                  }
                  placeholder="Enter invoice section description"
                  rows={4}
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
                <ImageInput
                  label="Image 1"
                  onChange={(file) => updateInvoiceSection("image1", file)}
                  currentImage={invoiceSection.image1}
                />
                <ImageInput
                  label="Image 2"
                  onChange={(file) => updateInvoiceSection("image2", file)}
                  currentImage={invoiceSection.image2}
                />
                <ImageInput
                  label="Big Image"
                  onChange={(file) => updateInvoiceSection("bigImage", file)}
                  currentImage={invoiceSection.bigImage}
                />
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
                      ? "Update your Product AP page"
                      : "Create new Product AP page"}
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
                    `💾 ${editId ? "Update" : "Create"} Product AP Page`
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
