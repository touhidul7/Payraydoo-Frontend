// app/admin/product-ar/page.jsx
"use client";

import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import Input from "../AdminComponents/form/Input";
import FieldSection from "../AdminComponents/form/FieldSection";
import TextArea from "../AdminComponents/form/TextArea";

export default function ProductArManager() {
  const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

  const [editId, setEditId] = useState(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");

  // States
  const [hero, setHero] = useState({
    title: "",
    image1: null,
    image2: null,
    bigImage: null,
  });

  const [feature1, setFeature1] = useState({
    title: "",
    description: "",
  });

  const [apImage, setApImage] = useState(null);

  const [feature2, setFeature2] = useState({
    title: "",
    description: "",
  });

  const [otherFeatures, setOtherFeatures] = useState([
    { title: "", description: "" },
  ]);

  const [darkFeatures, setDarkFeatures] = useState({
    f1: { title: "", description: "" },
    f2: { title: "", description: "" },
    f3: { title: "", description: "" },
    image1: null,
    image2: null,
    f4: { title: "", description: "" },
    f5: { title: "", description: "" },
    positionImage: null,
  });

  const [howItWorks, setHowItWorks] = useState({
    title: "",
    description: "",
    image: null,
  });

  const [capabilities, setCapabilities] = useState({
    c1: { title: "", description: "" },
    c2: { title: "", description: "" },
    c3: { title: "", description: "" },
  });

  const [invoiceSection, setInvoiceSection] = useState({
    title: "",
    subtitle: "",
    image1: null,
    image2: null,
    bigImage: null,
  });

  // Load data on component mount
  useEffect(() => {
    loadProductAr();
  }, []);

  const loadProductAr = async () => {
    try {
      setLoading(true);
      setError("");
      const res = await axios.get(`${BASE_URL}/api/productar`);
      const data = res.data;
      console.log("Loaded Product AR data:", data);

      if (!data || Object.keys(data).length === 0) {
        resetForm();
        return;
      }

      setEditId(data.id || data._id);

      // Set main form data
      setHero({
        title: data.hero?.title || "",
        image1: data.hero?.image1 || null,
        image2: data.hero?.image2 || null,
        bigImage: data.hero?.bigImage || null,
      });

      setFeature1({
        title: data.feature1?.title || "",
        description: data.feature1?.description || "",
      });

      setApImage(data.feature1?.apImage || null);

      setFeature2({
        title: data.feature2?.title || "",
        description: data.feature2?.description || "",
      });

      setOtherFeatures(data.other_features || [{ title: "", description: "" }]);

      setDarkFeatures({
        f1: data.dark_section?.f1 || { title: "", description: "" },
        f2: data.dark_section?.f2 || { title: "", description: "" },
        f3: data.dark_section?.f3 || { title: "", description: "" },
        image1: data.dark_section?.image1 || null,
        image2: data.dark_section?.image2 || null,
        f4: data.dark_section?.f4 || { title: "", description: "" },
        f5: data.dark_section?.f5 || { title: "", description: "" },
        positionImage: data.dark_section?.positionImage || null,
      });

      setHowItWorks({
        title: data.how_it_works?.title || "",
        description: data.how_it_works?.description || "",
        image: data.how_it_works?.image || null,
      });

      setCapabilities({
        c1: data.capabilities?.c1 || { title: "", description: "" },
        c2: data.capabilities?.c2 || { title: "", description: "" },
        c3: data.capabilities?.c3 || { title: "", description: "" },
      });

      setInvoiceSection({
        title: data.invoice_section?.title || "",
        subtitle: data.invoice_section?.subtitle || "",
        image1: data.invoice_section?.image1 || null,
        image2: data.invoice_section?.image2 || null,
        bigImage: data.invoice_section?.bigImage || null,
      });

    } catch (error) {
      console.error("Load failed:", error);
      if (error.response?.status === 404) {
        resetForm();
      } else {
        setError("Failed to load Product AR data");
      }
    } finally {
      setLoading(false);
    }
  };

  const resetForm = () => {
    setEditId(null);
    setHero({ title: "", image1: null, image2: null, bigImage: null });
    setFeature1({ title: "", description: "" });
    setApImage(null);
    setFeature2({ title: "", description: "" });
    setOtherFeatures([{ title: "", description: "" }]);
    setDarkFeatures({
      f1: { title: "", description: "" },
      f2: { title: "", description: "" },
      f3: { title: "", description: "" },
      image1: null,
      image2: null,
      f4: { title: "", description: "" },
      f5: { title: "", description: "" },
      positionImage: null,
    });
    setHowItWorks({ title: "", description: "", image: null });
    setCapabilities({
      c1: { title: "", description: "" },
      c2: { title: "", description: "" },
      c3: { title: "", description: "" },
    });
    setInvoiceSection({ title: "", subtitle: "", image1: null, image2: null, bigImage: null });
  };

  // Form field handlers
  const updateHero = (field, value) => {
    setHero(prev => ({ ...prev, [field]: value }));
  };

  const updateFeature1 = (field, value) => {
    setFeature1(prev => ({ ...prev, [field]: value }));
  };

  const updateFeature2 = (field, value) => {
    setFeature2(prev => ({ ...prev, [field]: value }));
  };

  const updateHowItWorks = (field, value) => {
    setHowItWorks(prev => ({ ...prev, [field]: value }));
  };

  const updateInvoiceSection = (field, value) => {
    setInvoiceSection(prev => ({ ...prev, [field]: value }));
  };

  const updateDarkFeature = (feature, field, value) => {
    setDarkFeatures(prev => ({
      ...prev,
      [feature]: { ...prev[feature], [field]: value }
    }));
  };

  const updateCapability = (capability, field, value) => {
    setCapabilities(prev => ({
      ...prev,
      [capability]: { ...prev[capability], [field]: value }
    }));
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

    if (!feature1.title.trim()) {
      setError("Feature 1 title is required");
      return false;
    }

    setError("");
    return true;
  };

  // Form submission
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

      formData.append("feature1[title]", feature1.title.trim());
      formData.append("feature1[description]", feature1.description.trim());

      formData.append("feature2[title]", feature2.title.trim());
      formData.append("feature2[description]", feature2.description.trim());

      formData.append("how_it_works[title]", howItWorks.title.trim());
      formData.append("how_it_works[description]", howItWorks.description.trim());

      formData.append("invoice_section[title]", invoiceSection.title.trim());
      formData.append("invoice_section[subtitle]", invoiceSection.subtitle.trim());

      // -------------------------
      // DARK SECTION FIELDS
      // -------------------------
      formData.append("dark_section[f1][title]", darkFeatures.f1.title.trim());
      formData.append("dark_section[f1][description]", darkFeatures.f1.description.trim());
      formData.append("dark_section[f2][title]", darkFeatures.f2.title.trim());
      formData.append("dark_section[f2][description]", darkFeatures.f2.description.trim());
      formData.append("dark_section[f3][title]", darkFeatures.f3.title.trim());
      formData.append("dark_section[f3][description]", darkFeatures.f3.description.trim());
      formData.append("dark_section[f4][title]", darkFeatures.f4.title.trim());
      formData.append("dark_section[f4][description]", darkFeatures.f4.description.trim());
      formData.append("dark_section[f5][title]", darkFeatures.f5.title.trim());
      formData.append("dark_section[f5][description]", darkFeatures.f5.description.trim());

      // -------------------------
      // CAPABILITIES FIELDS
      // -------------------------
      formData.append("capabilities[c1][title]", capabilities.c1.title.trim());
      formData.append("capabilities[c1][description]", capabilities.c1.description.trim());
      formData.append("capabilities[c2][title]", capabilities.c2.title.trim());
      formData.append("capabilities[c2][description]", capabilities.c2.description.trim());
      formData.append("capabilities[c3][title]", capabilities.c3.title.trim());
      formData.append("capabilities[c3][description]", capabilities.c3.description.trim());

      // -------------------------
      // OTHER FEATURES
      // -------------------------
      const filteredOtherFeatures = otherFeatures.filter(item => 
        item.title.trim() !== "" || item.description.trim() !== ""
      );
      
      filteredOtherFeatures.forEach((item, i) => {
        formData.append(`other_features[${i}][title]`, item.title.trim());
        formData.append(`other_features[${i}][description]`, item.description.trim());
      });

      // -------------------------
      // HERO IMAGES - ONLY NEW IMAGES
      // -------------------------
      if (hero.image1 && typeof hero.image1 !== "string") {
        formData.append("heroImage1", hero.image1);
      }
      if (hero.image2 && typeof hero.image2 !== "string") {
        formData.append("heroImage2", hero.image2);
      }
      if (hero.bigImage && typeof hero.bigImage !== "string") {
        formData.append("heroBigImage", hero.bigImage);
      }

      // -------------------------
      // AP IMAGE - ONLY NEW IMAGE
      // -------------------------
      if (apImage && typeof apImage !== "string") {
        formData.append("apImage", apImage);
      }

      // -------------------------
      // DARK SECTION IMAGES - ONLY NEW IMAGES
      // -------------------------
      if (darkFeatures.image1 && typeof darkFeatures.image1 !== "string") {
        formData.append("darkImage1", darkFeatures.image1);
      }
      if (darkFeatures.image2 && typeof darkFeatures.image2 !== "string") {
        formData.append("darkImage2", darkFeatures.image2);
      }
      if (darkFeatures.positionImage && typeof darkFeatures.positionImage !== "string") {
        formData.append("positionImage", darkFeatures.positionImage);
      }

      // -------------------------
      // HOW IT WORKS IMAGE - ONLY NEW IMAGE
      // -------------------------
      if (howItWorks.image && typeof howItWorks.image !== "string") {
        formData.append("howImage", howItWorks.image);
      }

      // -------------------------
      // INVOICE SECTION IMAGES - ONLY NEW IMAGES
      // -------------------------
      if (invoiceSection.image1 && typeof invoiceSection.image1 !== "string") {
        formData.append("invoiceImage1", invoiceSection.image1);
      }
      if (invoiceSection.image2 && typeof invoiceSection.image2 !== "string") {
        formData.append("invoiceImage2", invoiceSection.image2);
      }
      if (invoiceSection.bigImage && typeof invoiceSection.bigImage !== "string") {
        formData.append("invoiceBigImage", invoiceSection.bigImage);
      }

      // DEBUG
      console.log("---- PRODUCT AR FORM DATA ----");
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
          `${BASE_URL}/api/productar/${editId}`,
          formData,
          {
            headers: { "Content-Type": "multipart/form-data" },
          }
        );
      } else {
        response = await axios.post(`${BASE_URL}/api/productar`, formData, {
          headers: { "Content-Type": "multipart/form-data" },
        });
      }

      alert("Product AR page updated successfully!");
      await loadProductAr();
    } catch (err) {
      console.error(err);
      const errorMessage =
        err.response?.data?.message || err.message || "Failed to save Product AR data";
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



  const FieldTitle = ({ children }) => (
    <h3 className="text-lg font-medium text-gray-700 mb-3">{children}</h3>
  );

  // Loading State
  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading Product AR page...</p>
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
          <h1 className="text-3xl font-bold text-gray-900">Product AR Manager</h1>
          <p className="text-gray-600 mt-2">
            Manage your Product AR page content and sections
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
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
                <ImageInput
                  label="Image 1"
                  onChange={(file) => updateHero("image1", file)}
                  currentImage={hero.image1}
                />
                <ImageInput
                  label="Image 2"
                  onChange={(file) => updateHero("image2", file)}
                  currentImage={hero.image2}
                />
                <ImageInput
                  label="Big Image"
                  onChange={(file) => updateHero("bigImage", file)}
                  currentImage={hero.bigImage}
                />
              </div>
            </FieldSection>

            {/* FEATURE 1 SECTION */}
            <FieldSection title="Product Feature #1">
              <div className="grid grid-cols-1 gap-4">
                <Input
                  label="Title"
                  value={feature1.title}
                  onChange={(e) => updateFeature1("title", e.target.value)}
                  placeholder="Enter feature title"
                  required
                />
                <TextArea
                  label="Description"
                  value={feature1.description}
                  onChange={(e) => updateFeature1("description", e.target.value)}
                  placeholder="Enter feature description"
                  rows={4}
                />
              </div>
              <div className="mt-4">
                <ImageInput
                  label="AP Image"
                  onChange={(file) => setApImage(file)}
                  currentImage={apImage}
                />
              </div>
            </FieldSection>

            {/* FEATURE 2 SECTION */}
            <FieldSection title="Product Feature #2">
              <div className="grid grid-cols-1 gap-4">
                <Input
                  label="Title"
                  value={feature2.title}
                  onChange={(e) => updateFeature2("title", e.target.value)}
                  placeholder="Enter feature title"
                />
                <TextArea
                  label="Description"
                  value={feature2.description}
                  onChange={(e) => updateFeature2("description", e.target.value)}
                  placeholder="Enter feature description"
                  rows={4}
                />
              </div>
            </FieldSection>

            {/* OTHER FEATURES SECTION */}
            <FieldSection title="Other Features">
              <FieldTitle>Additional Features</FieldTitle>
              <div className="space-y-6">
                {otherFeatures.map((item, index) => (
                  <div key={index} className="p-4 bg-gray-50 rounded-lg">
                    <div className="grid grid-cols-1 lg:grid-cols-6 gap-4">
                      <div className="lg:col-span-3">
                        <Input
                          label={`Feature Title ${index + 1}`}
                          value={item.title}
                          onChange={(e) => updateListField(otherFeatures, setOtherFeatures, index, "title", e.target.value)}
                          placeholder="Enter feature title"
                          required={index === 0}
                        />
                      </div>
                      <div className="lg:col-span-3">
                        <TextArea
                          label="Description"
                          value={item.description}
                          onChange={(e) => updateListField(otherFeatures, setOtherFeatures, index, "description", e.target.value)}
                          placeholder="Enter feature description"
                          rows={3}
                        />
                      </div>
                      <div className="lg:col-span-6 flex justify-end">
                        <button
                          type="button"
                          onClick={() => removeItem(setOtherFeatures, index)}
                          disabled={otherFeatures.length === 1}
                          className={`
                            px-4 py-2 rounded-md transition-colors
                            ${otherFeatures.length === 1
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
                onClick={() => addItem(setOtherFeatures, { title: "", description: "" })}
                className="mt-4 flex items-center space-x-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-md hover:bg-blue-200 transition-colors"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
                <span>Add Feature</span>
              </button>
            </FieldSection>

            {/* DARK SECTION */}
            <FieldSection title="Dark Section Features">
              <FieldTitle>Dark Theme Features</FieldTitle>
              
              {/* F1 & F2 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <Input
                    label="Feature 1 Title"
                    value={darkFeatures.f1.title}
                    onChange={(e) => updateDarkFeature("f1", "title", e.target.value)}
                    placeholder="Enter feature 1 title"
                  />
                  <TextArea
                    label="Feature 1 Description"
                    value={darkFeatures.f1.description}
                    onChange={(e) => updateDarkFeature("f1", "description", e.target.value)}
                    placeholder="Enter feature 1 description"
                    rows={3}
                  />
                </div>
                <div className="space-y-4">
                  <Input
                    label="Feature 2 Title"
                    value={darkFeatures.f2.title}
                    onChange={(e) => updateDarkFeature("f2", "title", e.target.value)}
                    placeholder="Enter feature 2 title"
                  />
                  <TextArea
                    label="Feature 2 Description"
                    value={darkFeatures.f2.description}
                    onChange={(e) => updateDarkFeature("f2", "description", e.target.value)}
                    placeholder="Enter feature 2 description"
                    rows={3}
                  />
                </div>
              </div>

              {/* F3 */}
              <div className="mt-6">
                <Input
                  label="Feature 3 Title"
                  value={darkFeatures.f3.title}
                  onChange={(e) => updateDarkFeature("f3", "title", e.target.value)}
                  placeholder="Enter feature 3 title"
                />
                <TextArea
                  label="Feature 3 Description"
                  value={darkFeatures.f3.description}
                  onChange={(e) => updateDarkFeature("f3", "description", e.target.value)}
                  placeholder="Enter feature 3 description"
                  rows={3}
                  className="mt-2"
                />
              </div>

              {/* Dark Section Images */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                <ImageInput
                  label="Dark Image 1"
                  onChange={(file) => setDarkFeatures({ ...darkFeatures, image1: file })}
                  currentImage={darkFeatures.image1}
                />
                <ImageInput
                  label="Dark Image 2"
                  onChange={(file) => setDarkFeatures({ ...darkFeatures, image2: file })}
                  currentImage={darkFeatures.image2}
                />
              </div>

              {/* F4 & F5 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                <div className="space-y-4">
                  <Input
                    label="Feature 4 Title"
                    value={darkFeatures.f4.title}
                    onChange={(e) => updateDarkFeature("f4", "title", e.target.value)}
                    placeholder="Enter feature 4 title"
                  />
                  <TextArea
                    label="Feature 4 Description"
                    value={darkFeatures.f4.description}
                    onChange={(e) => updateDarkFeature("f4", "description", e.target.value)}
                    placeholder="Enter feature 4 description"
                    rows={3}
                  />
                </div>
                <div className="space-y-4">
                  <Input
                    label="Feature 5 Title"
                    value={darkFeatures.f5.title}
                    onChange={(e) => updateDarkFeature("f5", "title", e.target.value)}
                    placeholder="Enter feature 5 title"
                  />
                  <TextArea
                    label="Feature 5 Description"
                    value={darkFeatures.f5.description}
                    onChange={(e) => updateDarkFeature("f5", "description", e.target.value)}
                    placeholder="Enter feature 5 description"
                    rows={3}
                  />
                </div>
              </div>

              {/* Position Image */}
              <div className="mt-6">
                <ImageInput
                  label="Position Image"
                  onChange={(file) => setDarkFeatures({ ...darkFeatures, positionImage: file })}
                  currentImage={darkFeatures.positionImage}
                />
              </div>
            </FieldSection>

            {/* HOW IT WORKS SECTION */}
            <FieldSection title="How Payraydoo Works">
              <div className="grid grid-cols-1 gap-4">
                <Input
                  label="Title"
                  value={howItWorks.title}
                  onChange={(e) => updateHowItWorks("title", e.target.value)}
                  placeholder="Enter how it works title"
                />
                <TextArea
                  label="Description"
                  value={howItWorks.description}
                  onChange={(e) => updateHowItWorks("description", e.target.value)}
                  placeholder="Enter how it works description"
                  rows={4}
                />
              </div>
              <div className="mt-4">
                <ImageInput
                  label="How It Works Image"
                  onChange={(file) => updateHowItWorks("image", file)}
                  currentImage={howItWorks.image}
                />
              </div>
            </FieldSection>

            {/* CORE CAPABILITIES SECTION */}
            <FieldSection title="Core Capabilities">
              <FieldTitle>System Capabilities</FieldTitle>
              
              {/* Capability 1 */}
              <div className="space-y-4 mb-6">
                <Input
                  label="Capability 1 Title"
                  value={capabilities.c1.title}
                  onChange={(e) => updateCapability("c1", "title", e.target.value)}
                  placeholder="Enter capability 1 title"
                />
                <TextArea
                  label="Capability 1 Description"
                  value={capabilities.c1.description}
                  onChange={(e) => updateCapability("c1", "description", e.target.value)}
                  placeholder="Enter capability 1 description"
                  rows={3}
                />
              </div>

              {/* Capability 2 */}
              <div className="space-y-4 mb-6">
                <Input
                  label="Capability 2 Title"
                  value={capabilities.c2.title}
                  onChange={(e) => updateCapability("c2", "title", e.target.value)}
                  placeholder="Enter capability 2 title"
                />
                <TextArea
                  label="Capability 2 Description"
                  value={capabilities.c2.description}
                  onChange={(e) => updateCapability("c2", "description", e.target.value)}
                  placeholder="Enter capability 2 description"
                  rows={3}
                />
              </div>

              {/* Capability 3 */}
              <div className="space-y-4">
                <Input
                  label="Capability 3 Title"
                  value={capabilities.c3.title}
                  onChange={(e) => updateCapability("c3", "title", e.target.value)}
                  placeholder="Enter capability 3 title"
                />
                <TextArea
                  label="Capability 3 Description"
                  value={capabilities.c3.description}
                  onChange={(e) => updateCapability("c3", "description", e.target.value)}
                  placeholder="Enter capability 3 description"
                  rows={3}
                />
              </div>
            </FieldSection>

            {/* INVOICE SECTION */}
            <FieldSection title="Invoice Section">
              <div className="grid grid-cols-1 gap-4">
                <Input
                  label="Title"
                  value={invoiceSection.title}
                  onChange={(e) => updateInvoiceSection("title", e.target.value)}
                  placeholder="Enter invoice section title"
                />
                <Input
                  label="Subtitle"
                  value={invoiceSection.subtitle}
                  onChange={(e) => updateInvoiceSection("subtitle", e.target.value)}
                  placeholder="Enter invoice section subtitle"
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
                      ? "Update your Product AR page"
                      : "Create new Product AR page"}
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
                    `💾 ${editId ? "Update" : "Create"} Product AR Page`
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