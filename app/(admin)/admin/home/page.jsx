// app/admin/home/page.jsx
"use client";

import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import Input from "../AdminComponents/form/Input";
import FieldSection from "../AdminComponents/form/FieldSection";

export default function HomePageManager() {
  const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

  const [editId, setEditId] = useState(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");

  // States
  const [hero, setHero] = useState({ title: "", subtitle: "", intro: "" });
  const [counter, setCounter] = useState({ errors: "", cycles: "", cost: "" });
  const [images, setImages] = useState({ bigImage: null, smallImage: null });
  const [featuresMain, setFeaturesMain] = useState({
    title: "",
    subtitle: "",
    shortdescription: "",
  });

  // Array states
  const [arFeatures, setArFeatures] = useState([{ title: "", image: null }]);
  const [apFeatures, setApFeatures] = useState([{ title: "", image: null }]);
  const [workflowFeatures, setWorkflowFeatures] = useState([
    { title: "", shortdes: "" },
  ]);
  const [erpLogos, setErpLogos] = useState([{ name: "", logo: null }]);
  const [banks, setBanks] = useState([{ name: "", logo: null }]);
  const [testimonials, setTestimonials] = useState([
    { name: "", jobtitle: "", image: null, review: "" },
  ]);
  const [workflows, setWorkflows] = useState([{ title: "", shortdes: "" }]);
  const [capabilities, setCapabilities] = useState([
    { title: "", image: null },
  ]);
  const [integrations, setIntegrations] = useState([
    { title: "", image: null },
  ]);
  const [invoiceImages, setInvoiceImages] = useState({
    small: null,
    big: null,
  });

  // Load data on component mount
  useEffect(() => {
    loadHomePage();
  }, []);

  const loadHomePage = async () => {
    try {
      setLoading(true);
      setError("");
      const res = await axios.get(`${BASE_URL}/api/homecontent`);
      const data = res.data;
      console.log(data);

      if (!data || Object.keys(data).length === 0) {
        resetForm();
        return;
      }

      setEditId(data.id || data._id);

      // Set main form data
      setHero(data.hero || { title: "", subtitle: "", intro: "" });
      setCounter(data.counter || { errors: "", cycles: "", cost: "" });
      setImages({
        bigImage: data.images?.bigImage || null,
        smallImage: data.images?.smallImage || null,
      });
      setFeaturesMain(
        data.features_main || { title: "", subtitle: "", shortdescription: "" }
      );

      // Set array data
      setArFeatures(data.accounts_receivable || [{ title: "", image: null }]);
      setApFeatures(data.accounts_payable || [{ title: "", image: null }]);
      setWorkflowFeatures(
        data.smart_workflows || [{ title: "", shortdes: "" }]
      );
      setErpLogos(data.erp_logos || [{ name: "", logo: null }]);
      setBanks(data.bank_methods || [{ name: "", logo: null }]);
      setTestimonials(
        data.testimonials || [
          { name: "", jobtitle: "", image: null, review: "" },
        ]
      );
      setWorkflows(data.workflows || [{ title: "", shortdes: "" }]);
      setCapabilities(data.capabilities || [{ title: "", image: null }]);
      setIntegrations(data.integrations || [{ title: "", image: null }]);
      setInvoiceImages(data.invoice_images || { small: null, big: null });
    } catch (error) {
      console.error("Load failed:", error);
      if (error.response?.status === 404) {
        resetForm();
      } else {
        setError("Failed to load homepage data");
      }
    } finally {
      setLoading(false);
    }
  };

  const resetForm = () => {
    setEditId(null);
    setHero({ title: "", subtitle: "", intro: "" });
    setCounter({ errors: "", cycles: "", cost: "" });
    setImages({ bigImage: null, smallImage: null });
    setFeaturesMain({ title: "", subtitle: "", shortdescription: "" });
    setArFeatures([{ title: "", image: null }]);
    setApFeatures([{ title: "", image: null }]);
    setWorkflowFeatures([{ title: "", shortdes: "" }]);
    setErpLogos([{ name: "", logo: null }]);
    setBanks([{ name: "", logo: null }]);
    setTestimonials([{ name: "", jobtitle: "", image: null, review: "" }]);
    setWorkflows([{ title: "", shortdes: "" }]);
    setCapabilities([{ title: "", image: null }]);
    setIntegrations([{ title: "", image: null }]);
    setInvoiceImages({ small: null, big: null });
  };

  // Form field handlers
  const updateHero = (field, value) => {
    setHero((prev) => ({ ...prev, [field]: value }));
  };

  const updateCounter = (field, value) => {
    setCounter((prev) => ({ ...prev, [field]: value }));
  };

  const updateImages = (field, value) => {
    setImages((prev) => ({ ...prev, [field]: value }));
  };

  const updateFeaturesMain = (field, value) => {
    setFeaturesMain((prev) => ({ ...prev, [field]: value }));
  };

  const updateInvoiceImages = (field, value) => {
    setInvoiceImages((prev) => ({ ...prev, [field]: value }));
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

    const validArFeatures = arFeatures.filter(
      (item) => item.title.trim() !== ""
    );
    if (validArFeatures.length === 0) {
      setError("At least one Accounts Receivable feature is required");
      return false;
    }

    setError("");
    return true;
  };

  // Form submission - FOLLOWING CONTACT PAGE PATTERN
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
      formData.append("hero[subtitle]", hero.subtitle.trim());
      formData.append("hero[intro]", hero.intro.trim());

      formData.append("counter[errors]", counter.errors.trim());
      formData.append("counter[cycles]", counter.cycles.trim());
      formData.append("counter[cost]", counter.cost.trim());

      formData.append("features_main[title]", featuresMain.title.trim());
      formData.append("features_main[subtitle]", featuresMain.subtitle.trim());
      formData.append(
        "features_main[shortdescription]",
        featuresMain.shortdescription.trim()
      );

      // -------------------------
      // MAIN IMAGES
      // -------------------------
      if (images.bigImage && typeof images.bigImage !== "string") {
        formData.append("bigImage", images.bigImage);
      }
      if (images.smallImage && typeof images.smallImage !== "string") {
        formData.append("smallImage", images.smallImage);
      }

      // -------------------------
      // INVOICE IMAGES
      // -------------------------
      if (invoiceImages.small && typeof invoiceImages.small !== "string") {
        formData.append("invoiceSmallImage", invoiceImages.small);
      }
      if (invoiceImages.big && typeof invoiceImages.big !== "string") {
        formData.append("invoiceBigImage", invoiceImages.big);
      }

      // -------------------------
      // ACCOUNTS RECEIVABLE
      // -------------------------
      const filteredArFeatures = arFeatures.filter(
        (item) => item.title.trim() !== "" || item.image
      );
      filteredArFeatures.forEach((item, i) => {
        formData.append(`accounts_receivable[${i}][title]`, item.title.trim());
        if (item.image && typeof item.image !== "string") {
          formData.append(`accounts_receivable_${i}_image`, item.image);
        }
        if (typeof item.image === "string") {
          formData.append(
            `accounts_receivable[${i}][existingImage]`,
            item.image
          );
        }
      });

      // -------------------------
      // ACCOUNTS PAYABLE
      // -------------------------
      const filteredApFeatures = apFeatures.filter(
        (item) => item.title.trim() !== "" || item.image
      );
      filteredApFeatures.forEach((item, i) => {
        formData.append(`accounts_payable[${i}][title]`, item.title.trim());
        if (item.image && typeof item.image !== "string") {
          formData.append(`accounts_payable_${i}_image`, item.image);
        }
        if (typeof item.image === "string") {
          formData.append(`accounts_payable[${i}][existingImage]`, item.image);
        }
      });

      // -------------------------
      // SMART WORKFLOWS
      // -------------------------
      const filteredWorkflowFeatures = workflowFeatures.filter(
        (item) => item.title.trim() !== "" || item.shortdes.trim() !== ""
      );
      filteredWorkflowFeatures.forEach((item, i) => {
        formData.append(`smart_workflows[${i}][title]`, item.title.trim());
        formData.append(
          `smart_workflows[${i}][shortdes]`,
          item.shortdes.trim()
        );
      });

      // -------------------------
      // ERP LOGOS
      // -------------------------
      const filteredErpLogos = erpLogos.filter(
        (item) => item.name.trim() !== "" || item.logo
      );
      filteredErpLogos.forEach((item, i) => {
        formData.append(`erp_logos[${i}][name]`, item.name.trim());
        if (item.logo && typeof item.logo !== "string") {
          formData.append(`erp_logos_${i}_image`, item.logo);
        }
        if (typeof item.logo === "string") {
          formData.append(`erp_logos[${i}][existingImage]`, item.logo);
        }
      });

      // -------------------------
      // BANK METHODS
      // -------------------------
      const filteredBanks = banks.filter(
        (item) => item.name.trim() !== "" || item.logo
      );
      filteredBanks.forEach((item, i) => {
        formData.append(`bank_methods[${i}][name]`, item.name.trim());
        if (item.logo && typeof item.logo !== "string") {
          formData.append(`bank_methods_${i}_image`, item.logo);
        }
        if (typeof item.logo === "string") {
          formData.append(`bank_methods[${i}][existingImage]`, item.logo);
        }
      });

      // -------------------------
      // TESTIMONIALS
      // -------------------------
      const filteredTestimonials = testimonials.filter(
        (item) => item.name.trim() !== "" || item.review.trim() !== ""
      );
      filteredTestimonials.forEach((item, i) => {
        formData.append(`testimonials[${i}][name]`, item.name.trim());
        formData.append(`testimonials[${i}][jobtitle]`, item.jobtitle.trim());
        formData.append(`testimonials[${i}][review]`, item.review.trim());
        if (item.image && typeof item.image !== "string") {
          formData.append(`testimonials_${i}_image`, item.image);
        }
        if (typeof item.image === "string") {
          formData.append(`testimonials[${i}][existingImage]`, item.image);
        }
      });

      // -------------------------
      // WORKFLOWS
      // -------------------------
      const filteredWorkflows = workflows.filter(
        (item) => item.title.trim() !== "" || item.shortdes.trim() !== ""
      );
      filteredWorkflows.forEach((item, i) => {
        formData.append(`workflows[${i}][title]`, item.title.trim());
        formData.append(`workflows[${i}][shortdes]`, item.shortdes.trim());
      });

      // -------------------------
      // CAPABILITIES
      // -------------------------
      const filteredCapabilities = capabilities.filter(
        (item) => item.title.trim() !== "" || item.image
      );
      filteredCapabilities.forEach((item, i) => {
        formData.append(`capabilities[${i}][title]`, item.title.trim());
        if (item.image && typeof item.image !== "string") {
          formData.append(`capabilities_${i}_image`, item.image);
        }
        if (typeof item.image === "string") {
          formData.append(`capabilities[${i}][existingImage]`, item.image);
        }
      });

      // -------------------------
      // INTEGRATIONS
      // -------------------------
      const filteredIntegrations = integrations.filter(
        (item) => item.title.trim() !== "" || item.image
      );
      filteredIntegrations.forEach((item, i) => {
        formData.append(`integrations[${i}][title]`, item.title.trim());
        if (item.image && typeof item.image !== "string") {
          formData.append(`integrations_${i}_image`, item.image);
        }
        if (typeof item.image === "string") {
          formData.append(`integrations[${i}][existingImage]`, item.image);
        }
      });

      // DEBUG
      console.log("---- HOME PAGE FORM DATA ----");
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
          `${BASE_URL}/api/homecontent/${editId}`,
          formData,
          {
            headers: { "Content-Type": "multipart/form-data" },
          }
        );
      } else {
        response = await axios.post(`${BASE_URL}/api/homecontent`, formData, {
          headers: { "Content-Type": "multipart/form-data" },
        });
      }

      alert("Homepage updated successfully!");
      await loadHomePage();
    } catch (err) {
      console.error(err);
      const errorMessage =
        err.response?.data?.message ||
        err.message ||
        "Failed to save homepage data";
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

    // FIX: Handle both string paths and File objects properly
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
          <p className="mt-4 text-gray-600">Loading homepage...</p>
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
          <h1 className="text-3xl font-bold text-gray-900">Homepage Manager</h1>
          <p className="text-gray-600 mt-2">
            Manage your homepage content, features, and sections
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
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input
                  label="Hero Title"
                  value={hero.title}
                  onChange={(e) => updateHero("title", e.target.value)}
                  placeholder="Enter hero title"
                  required
                />
                <Input
                  label="Hero Subtitle"
                  value={hero.subtitle}
                  onChange={(e) => updateHero("subtitle", e.target.value)}
                  placeholder="Enter hero subtitle"
                />
              </div>
              <div className="mt-4">
                <Input
                  label="Hero Introduction"
                  value={hero.intro}
                  onChange={(e) => updateHero("intro", e.target.value)}
                  placeholder="Enter hero introduction"
                />
              </div>
            </FieldSection>

            {/* COUNTER SECTION */}
            <FieldSection title="Counter Statistics">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Input
                  label="Errors Reduced (%)"
                  value={counter.errors}
                  onChange={(e) => updateCounter("errors", e.target.value)}
                  placeholder="e.g., 95"
                />
                <Input
                  label="Faster Cycle Times (X)"
                  value={counter.cycles}
                  onChange={(e) => updateCounter("cycles", e.target.value)}
                  placeholder="e.g., 10"
                />
                <Input
                  label="Lower Cost (%)"
                  value={counter.cost}
                  onChange={(e) => updateCounter("cost", e.target.value)}
                  placeholder="e.g., 50"
                />
              </div>
            </FieldSection>

            {/* MAIN IMAGES SECTION */}
            <FieldSection title="Main Images">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <ImageInput
                  label="Big Image"
                  onChange={(file) => updateImages("bigImage", file)}
                  currentImage={images.bigImage}
                />
                <ImageInput
                  label="Small Image"
                  onChange={(file) => updateImages("smallImage", file)}
                  currentImage={images.smallImage}
                />
              </div>
            </FieldSection>

            {/* FEATURES MAIN SECTION */}
            <FieldSection title="Features Section">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input
                  label="Features Title"
                  value={featuresMain.title}
                  onChange={(e) => updateFeaturesMain("title", e.target.value)}
                  placeholder="Enter features title"
                />
                <Input
                  label="Features Subtitle"
                  value={featuresMain.subtitle}
                  onChange={(e) =>
                    updateFeaturesMain("subtitle", e.target.value)
                  }
                  placeholder="Enter features subtitle"
                />
              </div>
              <div className="mt-4">
                <Input
                  label="Features Description"
                  value={featuresMain.shortdescription}
                  onChange={(e) =>
                    updateFeaturesMain("shortdescription", e.target.value)
                  }
                  placeholder="Enter features description"
                />
              </div>
            </FieldSection>

            {/* ACCOUNTS RECEIVABLE SECTION */}
            <FieldSection title="Accounts Receivable Features">
              <FieldTitle>AR Features</FieldTitle>
              <div className="space-y-6">
                {arFeatures.map((item, index) => (
                  <div key={index} className="p-4 bg-gray-50 rounded-lg">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                      <div className="lg:col-span-2">
                        <Input
                          label={`Feature Title ${index + 1}`}
                          value={item.title}
                          onChange={(e) =>
                            updateListField(
                              arFeatures,
                              setArFeatures,
                              index,
                              "title",
                              e.target.value
                            )
                          }
                          placeholder="Enter feature title"
                          required={index === 0}
                        />
                      </div>
                      <div className="lg:col-span-1">
                        <ImageInput
                          label="Feature Image"
                          onChange={(file) =>
                            updateListField(
                              arFeatures,
                              setArFeatures,
                              index,
                              "image",
                              file
                            )
                          }
                          currentImage={item.image}
                        />
                      </div>
                      <div className="lg:col-span-3 flex justify-end">
                        <button
                          type="button"
                          onClick={() => removeItem(setArFeatures, index)}
                          disabled={arFeatures.length === 1}
                          className={`
                            px-4 py-2 rounded-md transition-colors
                            ${
                              arFeatures.length === 1
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
                  addItem(setArFeatures, { title: "", image: null })
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
                <span>Add AR Feature</span>
              </button>
            </FieldSection>

            {/* ACCOUNTS PAYABLE SECTION */}
            <FieldSection title="Accounts Payable Features">
              <FieldTitle>AP Features</FieldTitle>
              <div className="space-y-6">
                {apFeatures.map((item, index) => (
                  <div key={index} className="p-4 bg-gray-50 rounded-lg">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                      <div className="lg:col-span-2">
                        <Input
                          label={`Feature Title ${index + 1}`}
                          value={item.title}
                          onChange={(e) =>
                            updateListField(
                              apFeatures,
                              setApFeatures,
                              index,
                              "title",
                              e.target.value
                            )
                          }
                          placeholder="Enter feature title"
                        />
                      </div>
                      <div className="lg:col-span-1">
                        <ImageInput
                          label="Feature Image"
                          onChange={(file) =>
                            updateListField(
                              apFeatures,
                              setApFeatures,
                              index,
                              "image",
                              file
                            )
                          }
                          currentImage={item.image}
                        />
                      </div>
                      <div className="lg:col-span-3 flex justify-end">
                        <button
                          type="button"
                          onClick={() => removeItem(setApFeatures, index)}
                          disabled={apFeatures.length === 1}
                          className={`
                            px-4 py-2 rounded-md transition-colors
                            ${
                              apFeatures.length === 1
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
                  addItem(setApFeatures, { title: "", image: null })
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
                <span>Add AP Feature</span>
              </button>
            </FieldSection>

            {/* SMART WORKFLOWS SECTION */}
            <FieldSection title="Smart Workflows">
              <FieldTitle>Smart Workflow Features</FieldTitle>
              <div className="space-y-6">
                {workflowFeatures.map((item, index) => (
                  <div key={index} className="p-4 bg-gray-50 rounded-lg">
                    <div className="grid grid-cols-1 lg:grid-cols-6 gap-4">
                      <div className="lg:col-span-3">
                        <Input
                          label={`Workflow Title ${index + 1}`}
                          value={item.title}
                          onChange={(e) =>
                            updateListField(
                              workflowFeatures,
                              setWorkflowFeatures,
                              index,
                              "title",
                              e.target.value
                            )
                          }
                          placeholder="Enter workflow title"
                          required={index === 0}
                        />
                      </div>
                      <div className="lg:col-span-2">
                        <Input
                          label="Short Description"
                          value={item.shortdes}
                          onChange={(e) =>
                            updateListField(
                              workflowFeatures,
                              setWorkflowFeatures,
                              index,
                              "shortdes",
                              e.target.value
                            )
                          }
                          placeholder="Enter short description"
                        />
                      </div>
                      <div className="lg:col-span-1 flex items-end">
                        <button
                          type="button"
                          onClick={() => removeItem(setWorkflowFeatures, index)}
                          disabled={workflowFeatures.length === 1}
                          className={`
                w-full px-4 py-2 rounded-md transition-colors
                ${
                  workflowFeatures.length === 1
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
                  addItem(setWorkflowFeatures, { title: "", shortdes: "" })
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
                <span>Add Smart Workflow</span>
              </button>
            </FieldSection>

            {/* ERP LOGOS SECTION */}
            <FieldSection title="ERP Logos">
              <FieldTitle>ERP System Logos</FieldTitle>
              <div className="space-y-6">
                {erpLogos.map((item, index) => (
                  <div key={index} className="p-4 bg-gray-50 rounded-lg">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                      <div className="lg:col-span-2">
                        <Input
                          label={`ERP System Name ${index + 1}`}
                          value={item.name}
                          onChange={(e) =>
                            updateListField(
                              erpLogos,
                              setErpLogos,
                              index,
                              "name",
                              e.target.value
                            )
                          }
                          placeholder="Enter ERP system name"
                          required={index === 0}
                        />
                      </div>
                      <div className="lg:col-span-1">
                        <ImageInput
                          label="ERP Logo"
                          onChange={(file) =>
                            updateListField(
                              erpLogos,
                              setErpLogos,
                              index,
                              "logo",
                              file
                            )
                          }
                          currentImage={item.image}
                        />
                      </div>
                      <div className="lg:col-span-3 flex justify-end">
                        <button
                          type="button"
                          onClick={() => removeItem(setErpLogos, index)}
                          disabled={erpLogos.length === 1}
                          className={`
                px-4 py-2 rounded-md transition-colors
                ${
                  erpLogos.length === 1
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
                onClick={() => addItem(setErpLogos, { name: "", logo: null })}
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
                <span>Add ERP Logo</span>
              </button>
            </FieldSection>

            {/* BANK METHODS SECTION */}
            <FieldSection title="Bank Methods">
              <FieldTitle>Supported Banking Methods</FieldTitle>
              <div className="space-y-6">
                {banks.map((item, index) => (
                  <div key={index} className="p-4 bg-gray-50 rounded-lg">
                    
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                      <div className="lg:col-span-2">
                        <Input
                          label={`Bank Name ${index + 1}`}
                          value={item.name}
                          onChange={(e) =>
                            updateListField(
                              banks,
                              setBanks,
                              index,
                              "name",
                              e.target.value
                            )
                          }
                          placeholder="Enter bank name"
                          required={index === 0}
                        />
                      </div>
                      <div className="lg:col-span-1">
                        <ImageInput
                          label="Bank Logo"
                          onChange={(file) =>
                            updateListField(
                              banks,
                              setBanks,
                              index,
                              "logo",
                              file
                            )
                          }
                          currentImage={item.image}
                        />
                      </div>
                      <div className="lg:col-span-3 flex justify-end">
                        <button
                          type="button"
                          onClick={() => removeItem(setBanks, index)}
                          disabled={banks.length === 1}
                          className={`
                px-4 py-2 rounded-md transition-colors
                ${
                  banks.length === 1
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
                onClick={() => addItem(setBanks, { name: "", logo: null })}
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
                <span>Add Bank Method</span>
              </button>
            </FieldSection>

            {/* TESTIMONIALS SECTION */}
            <FieldSection title="Testimonials">
              <FieldTitle>Customer Testimonials</FieldTitle>
              <div className="space-y-6">
                {testimonials.map((item, index) => (
                  <div key={index} className="p-4 bg-gray-50 rounded-lg">
                    <div className="grid grid-cols-1 lg:grid-cols-6 gap-4">
                      <div className="lg:col-span-2">
                        <Input
                          label={`Customer Name ${index + 1}`}
                          value={item.name}
                          onChange={(e) =>
                            updateListField(
                              testimonials,
                              setTestimonials,
                              index,
                              "name",
                              e.target.value
                            )
                          }
                          placeholder="Enter customer name"
                          required={index === 0}
                        />
                      </div>
                      <div className="lg:col-span-2">
                        <Input
                          label="Job Title"
                          value={item.jobtitle}
                          onChange={(e) =>
                            updateListField(
                              testimonials,
                              setTestimonials,
                              index,
                              "jobtitle",
                              e.target.value
                            )
                          }
                          placeholder="Enter job title"
                        />
                      </div>
                      <div className="lg:col-span-2">
                        <ImageInput
                          label="Customer Photo"
                          onChange={(file) =>
                            updateListField(
                              testimonials,
                              setTestimonials,
                              index,
                              "image",
                              file
                            )
                          }
                          currentImage={item.image}
                        />
                      </div>
                      <div className="lg:col-span-6">
                        <Input
                          label="Testimonial Review"
                          value={item.review}
                          onChange={(e) =>
                            updateListField(
                              testimonials,
                              setTestimonials,
                              index,
                              "review",
                              e.target.value
                            )
                          }
                          placeholder="Enter customer review"
                        />
                      </div>
                      <div className="lg:col-span-6 flex justify-end">
                        <button
                          type="button"
                          onClick={() => removeItem(setTestimonials, index)}
                          disabled={testimonials.length === 1}
                          className={`
                px-4 py-2 rounded-md transition-colors
                ${
                  testimonials.length === 1
                    ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                    : "bg-red-100 text-red-700 hover:bg-red-200"
                }
              `}
                        >
                          Remove Testimonial
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <button
                type="button"
                onClick={() =>
                  addItem(setTestimonials, {
                    name: "",
                    jobtitle: "",
                    image: null,
                    review: "",
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
                <span>Add Testimonial</span>
              </button>
            </FieldSection>

            {/* CAPABILITIES SECTION INTEGRATIONS SECTION 
            <FieldSection title="Capabilities">
              <FieldTitle>System Capabilities</FieldTitle>
              <div className="space-y-6">
                {capabilities.map((item, index) => (
                  <div key={index} className="p-4 bg-gray-50 rounded-lg">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                      <div className="lg:col-span-2">
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
                      <div className="lg:col-span-3 flex justify-end">
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
                  addItem(setCapabilities, { title: "", image: null })
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

            
            <FieldSection title="Integrations">
              <FieldTitle>System Integrations</FieldTitle>
              <div className="space-y-6">
                {integrations.map((item, index) => (
                  <div key={index} className="p-4 bg-gray-50 rounded-lg">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                      <div className="lg:col-span-2">
                        <Input
                          label={`Integration Title ${index + 1}`}
                          value={item.title}
                          onChange={(e) =>
                            updateListField(
                              integrations,
                              setIntegrations,
                              index,
                              "title",
                              e.target.value
                            )
                          }
                          placeholder="Enter integration title"
                          required={index === 0}
                        />
                      </div>
                      <div className="lg:col-span-1">
                        <ImageInput
                          label="Integration Logo"
                          onChange={(file) =>
                            updateListField(
                              integrations,
                              setIntegrations,
                              index,
                              "image",
                              file
                            )
                          }
                          currentImage={item.image}
                        />
                      </div>
                      <div className="lg:col-span-3 flex justify-end">
                        <button
                          type="button"
                          onClick={() => removeItem(setIntegrations, index)}
                          disabled={integrations.length === 1}
                          className={`
                px-4 py-2 rounded-md transition-colors
                ${
                  integrations.length === 1
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
                  addItem(setIntegrations, { title: "", image: null })
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
                <span>Add Integration</span>
              </button>
            </FieldSection>*/}

            {/* INVOICE IMAGES SECTION */}
            <FieldSection title="Invoice Images">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <ImageInput
                  label="Invoice Small Image"
                  onChange={(file) => updateInvoiceImages("small", file)}
                  currentImage={invoiceImages.small}
                />
                <ImageInput
                  label="Invoice Big Image"
                  onChange={(file) => updateInvoiceImages("big", file)}
                  currentImage={invoiceImages.big}
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
                    {editId ? "Update your homepage" : "Create new homepage"}
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
                    `💾 ${editId ? "Update" : "Create"} Homepage`
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
