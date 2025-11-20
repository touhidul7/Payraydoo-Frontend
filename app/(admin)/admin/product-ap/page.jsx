"use client";

import React, { useState, useEffect } from "react";
import axios from "axios";
import Input from "../AdminComponents/form/Input";
import TextArea from "../AdminComponents/form/TextArea";
import ImageInput from "../AdminComponents/form/ImageInput";

export default function Page() {
  const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

  const [editId, setEditId] = useState(null);

  // ========================= STATES =========================
  const [Hero, setHero] = useState({
    title: "",
    smallImage: null,
    bigImage: null,
  });

  const [APSection, setAPSection] = useState({
    title: "",
    description: "",
  });

  const [InvoiceProcesses, setInvoiceProcesses] = useState([
    { title: "", description: "", image: null },
  ]);

  const [Capabilities, setCapabilities] = useState([
    { title: "", description: "", image: null },
  ]);

  const [InvoiceSection, setInvoiceSection] = useState({
    title: "",
    description: "",
    image1: null,
    image2: null,
    bigImage: null,
  });

  // ========================== LOADING DATA ==========================
  useEffect(() => {
    async function loadContent() {
      try {
        const res = await axios.get(`${BASE_URL}/productap`);
        const data = res.data;

        if (!data) return;

        setEditId(data._id);

        setHero({
          title: data.hero?.title || "",
          smallImage: null,
          bigImage: null,
        });

        setAPSection({
          title: data.apSection?.title || "",
          description: data.apSection?.description || "",
        });

        setInvoiceProcesses(data.invoiceProcesses || [{ title: "", description: "", image: null }]);
        setCapabilities(data.capabilities || [{ title: "", description: "", image: null }]);

        setInvoiceSection({
          title: data.invoiceSection?.title || "",
          description: data.invoiceSection?.description || "",
          image1: null,
          image2: null,
          bigImage: null,
        });

      } catch (error) {
        console.error("Load error:", error);
      }
    }

    loadContent();
  }, [BASE_URL]);

  // ========================= HANDLERS =========================

  const addItem = (setFunc, template) => {
    setFunc(prev => [...prev, template]);
  };

  const removeItem = (setFunc, index) => {
    setFunc(prev => prev.filter((_, i) => i !== index));
  };

  const updateListField = (list, setFunc, index, field, value) => {
    setFunc(prev =>
      prev.map((item, i) =>
        i === index ? { ...item, [field]: value } : item
      )
    );
  };

  // ========================= SUBMIT =========================
  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      hero: { title: Hero.title },
      apSection: APSection,
      invoiceProcesses: InvoiceProcesses,
      capabilities: Capabilities,
      invoiceSection: {
        title: InvoiceSection.title,
        description: InvoiceSection.description,
      }
    };

     console.log("Submitting payload:", payload);
    const formData = new FormData();
    formData.append("data", JSON.stringify(payload));

    // Hero images
    if (Hero.smallImage) formData.append("heroSmallImage", Hero.smallImage);
    if (Hero.bigImage) formData.append("heroBigImage", Hero.bigImage);

    // Invoice Processes images
    InvoiceProcesses.forEach((item, i) => {
      if (item.image) formData.append(`processImage_${i}`, item.image);
    });

    // Capabilities images
    Capabilities.forEach((item, i) => {
      if (item.image) formData.append(`capabilityImage_${i}`, item.image);
    });

    // Invoice Section images
    if (InvoiceSection.image1) formData.append("invoiceImage1", InvoiceSection.image1);
    if (InvoiceSection.image2) formData.append("invoiceImage2", InvoiceSection.image2);
    if (InvoiceSection.bigImage) formData.append("invoiceBigImage", InvoiceSection.bigImage);

    try {
      if (!editId) {
        await axios.post(`${BASE_URL}/productap`, formData);
      } else {
        await axios.put(`${BASE_URL}/productap/${editId}`, formData);
      }
      alert("Saved!");
    } catch (err) {
      console.error("Save failed:", err);
      alert("Error saving");
    }
  };

  const fieldTitle = "text-lg font-bold text-gray-900 mb-2";

  // ========================= UI =========================

  return (
    <div className="p-6 space-y-10">
      <h1 className="text-2xl font-bold text-gray-900">Product AP Manager</h1>

      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-6 gap-8">

          {/* --------------------- HERO SECTION --------------------- */}
          <div className="col-span-6">
            <h2 className={fieldTitle}>Hero Section</h2>
          </div>

          <div className="col-span-6">
            <Input
              label="Title"
              value={Hero.title}
              onChange={(e) => setHero({ ...Hero, title: e.target.value })}
            />
          </div>

          <div className="col-span-3">
            <ImageInput
              label="Small Image"
              onChange={(file) => setHero({ ...Hero, smallImage: file })}
            />
          </div>

          <div className="col-span-3">
            <ImageInput
              label="Big Image"
              onChange={(file) => setHero({ ...Hero, bigImage: file })}
            />
          </div>

          {/* --------------------- AP SECTION ---------------------- */}
          <div className="col-span-6 mt-10">
            <h2 className={fieldTitle}>AP Invoice Processing Section</h2>
          </div>

          <div className="col-span-6">
            <Input
              label="Section Title"
              value={APSection.title}
              onChange={(e) => setAPSection({ ...APSection, title: e.target.value })}
            />
          </div>

          <div className="col-span-6">
            <TextArea
              label="Description"
              rows="3"
              value={APSection.description}
              onChange={(e) => setAPSection({ ...APSection, description: e.target.value })}
            />
          </div>

          {/* --------------------- INVOICE PROCESSES ---------------------- */}
          <div className="col-span-6 mt-10">
            <h2 className={fieldTitle}>Invoice Processes</h2>
          </div>

          {InvoiceProcesses.map((item, index) => (
            <div key={index} className="col-span-6 grid grid-cols-6 gap-4">

              <div className="col-span-3">
                <Input
                  label={`Title #${index + 1}`}
                  value={item.title}
                  onChange={(e) =>
                    updateListField(InvoiceProcesses, setInvoiceProcesses, index, "title", e.target.value)
                  }
                />
              </div>

              <div className="col-span-3">
                <TextArea
                  label="Description"
                  rows="3"
                  value={item.description}
                  onChange={(e) =>
                    updateListField(InvoiceProcesses, setInvoiceProcesses, index, "description", e.target.value)
                  }
                />
              </div>

              <div className="col-span-3">
                <ImageInput
                  label="Image"
                  onChange={(file) =>
                    updateListField(InvoiceProcesses, setInvoiceProcesses, index, "image", file)
                  }
                />
              </div>

              <div className="col-span-6 flex justify-end">
                <button
                  type="button"
                  className="bg-red-600 text-white px-2 py-1 rounded"
                  onClick={() => removeItem(setInvoiceProcesses, index)}
                >
                  Remove
                </button>
              </div>

            </div>
          ))}

          <button
            type="button"
            className="col-span-6 bg-gray-700 text-white p-2 rounded"
            onClick={() =>
              addItem(setInvoiceProcesses, { title: "", description: "", image: null })
            }
          >
            + Add Process
          </button>

          {/* --------------------- CAPABILITIES ---------------------- */}
          <div className="col-span-6 mt-10">
            <h2 className={fieldTitle}>Capabilities</h2>
          </div>

          {Capabilities.map((item, index) => (
            <div key={index} className="col-span-6 grid grid-cols-6 gap-4">

              <div className="col-span-3">
                <Input
                  label={`Title #${index + 1}`}
                  value={item.title}
                  onChange={(e) =>
                    updateListField(Capabilities, setCapabilities, index, "title", e.target.value)
                  }
                />
              </div>

              <div className="col-span-3">
                <TextArea
                  label="Description"
                  rows="3"
                  value={item.description}
                  onChange={(e) =>
                    updateListField(Capabilities, setCapabilities, index, "description", e.target.value)
                  }
                />
              </div>

              <div className="col-span-3">
                <ImageInput
                  label="Image"
                  onChange={(file) =>
                    updateListField(Capabilities, setCapabilities, index, "image", file)
                  }
                />
              </div>

              <div className="col-span-6 flex justify-end">
                <button
                  type="button"
                  className="bg-red-600 text-white px-2 py-1 rounded"
                  onClick={() => removeItem(setCapabilities, index)}
                >
                  Remove
                </button>
              </div>

            </div>
          ))}

          <button
            type="button"
            className="col-span-6 bg-gray-700 text-white p-2 rounded"
            onClick={() =>
              addItem(setCapabilities, { title: "", description: "", image: null })
            }
          >
            + Add Capability
          </button>

          {/* --------------------- INVOICE SECTION ---------------------- */}
          <div className="col-span-6 mt-10">
            <h2 className={fieldTitle}>Invoice Section</h2>
          </div>

          <div className="col-span-6">
            <Input
              label="Title"
              value={InvoiceSection.title}
              onChange={(e) =>
                setInvoiceSection({ ...InvoiceSection, title: e.target.value })
              }
            />
          </div>

          <div className="col-span-6">
            <TextArea
              label="Description"
              rows="3"
              value={InvoiceSection.description}
              onChange={(e) =>
                setInvoiceSection({ ...InvoiceSection, description: e.target.value })
              }
            />
          </div>

          <div className="col-span-2">
            <ImageInput
              label="Image 1"
              onChange={(file) =>
                setInvoiceSection({ ...InvoiceSection, image1: file })
              }
            />
          </div>

          <div className="col-span-2">
            <ImageInput
              label="Image 2"
              onChange={(file) =>
                setInvoiceSection({ ...InvoiceSection, image2: file })
              }
            />
          </div>

          <div className="col-span-2">
            <ImageInput
              label="Big Image"
              onChange={(file) =>
                setInvoiceSection({ ...InvoiceSection, bigImage: file })
              }
            />
          </div>

          {/* --------------------- SUBMIT ---------------------- */}
          <div className="col-span-6 mt-10">
            <button
              type="submit"
              className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg"
            >
              Save Product AP Content
            </button>
          </div>

        </div>
      </form>
    </div>
  );
}
