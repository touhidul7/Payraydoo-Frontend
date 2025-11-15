"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import Input from "../AdminComponents/form/Input";
import TextArea from "../AdminComponents/form/TextArea";
import ImageInput from "../AdminComponents/form/ImageInput";

export default function Page() {
  const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

  const [form, setForm] = useState({
    hero: { title: "", subtitle: "", intro: "" },
    counter: { errors: "", cycles: "", cost: "" },
    images: { bigImage: null, smallImage: null },
    featuresMain: { title: "", subtitle: "", shortdescription: "" },
  });

  const [ARFeatures, setARFeatures] = useState([{ title: "", image: null }]);
  const [APFeatures, setAPFeatures] = useState([{ title: "", image: null }]);
  const [WorkflowFeatures, setWorkflowFeatures] = useState([
    { title: "", shortdes: "" },
  ]);
  const [ErpLogos, setErpLogos] = useState([{ name: "", logo: null }]);
  const [Banks, setBanks] = useState([{ name: "", logo: null }]);
  const [Testimonials, setTestimonials] = useState([
    { name: "", jobtitle: "", image: null, review: "" },
  ]);

  const [editId, setEditId] = useState(null);

  useEffect(() => {
    async function loadHomePage() {
      try {
        const res = await axios.get(`${BASE_URL}/homecontent`);
        const data = res.data; // adjust as returned data
        if (!data) return;

        setEditId(data._id);
        setForm({
          hero: data.hero,
          counter: data.counter,
          images: { bigImage: null, smallImage: null }, // can't pre-fill file
          featuresMain: data.featuresMain,
        });
        setARFeatures(data.accountsReceivable);
        setAPFeatures(data.accountsPayable);
        setWorkflowFeatures(data.smartWorkflows);
        setErpLogos(data.erpLogos);
        setBanks(data.bankMethods);
        setTestimonials(data.testimonials);
      } catch (err) {
        console.error("Failed to load homepage:", err);
      }
    }
    loadHomePage();
  }, [BASE_URL]);

  const handleForm = (section, field, value) => {
    setForm((prev) => ({
      ...prev,
      [section]: { ...prev[section], [field]: value },
    }));
  };

  const updateListField = (list, setter, index, field, value) => {
    setter((prevList) => {
      return prevList.map((item, i) =>
        i === index ? { ...item, [field]: value } : item
      );
    });
  };

  const addItem = (setter, template) => {
    setter((prev) => [...prev, template]);
  };

const removeItem = (setter, index) => {
  setter((prevList) => prevList.filter((_, i) => i !== index));
};


  const handleSubmit = async (e) => {
    e.preventDefault();

    const finalPayload = {
      ...form,
      accountsReceivable: ARFeatures,
      accountsPayable: APFeatures,
      smartWorkflows: WorkflowFeatures,
      erpLogos: ErpLogos,
      bankMethods: Banks,
      testimonials: Testimonials,
    };

    console.log("🔥 FINAL PAYLOAD (READY FOR API)", finalPayload);

    try {
      const formData = new FormData();
      formData.append("data", JSON.stringify(finalPayload));
      if (form.images.bigImage)
        formData.append("bigImage", form.images.bigImage);
      if (form.images.smallImage)
        formData.append("smallImage", form.images.smallImage);

      if (!editId) {
        await axios.post(`${BASE_URL}/homecontent`, formData, {
          headers: { "Content-Type": "multipart/form-data" },
        });
      } else {
        await axios.put(`${BASE_URL}/homecontent/${editId}`, formData, {
          headers: { "Content-Type": "multipart/form-data" },
        });
      }
      alert("Successfully saved!");
    } catch (error) {
      console.error("API Error:", error);
      alert("Save failed!");
    }
  };

  const fieldTitle = "text-lg font-bold text-gray-900 mb-2";

  return (
    <div className="p-6 space-y-10">
      <h1 className="text-2xl font-bold text-gray-900">Homepage Manager</h1>

      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-6 gap-8">
          {/* Hero Section */}
          <div className="col-span-6">
            <h2 className={fieldTitle}>Hero Section</h2>
          </div>
          <div className="col-span-3">
            <Input
              label="Title"
              value={form.hero.title}
              onChange={(e) => handleForm("hero", "title", e.target.value)}
            />
          </div>
          <div className="col-span-3">
            <Input
              label="Subtitle"
              value={form.hero.subtitle}
              onChange={(e) => handleForm("hero", "subtitle", e.target.value)}
            />
          </div>
          <div className="col-span-6">
            <TextArea
              label="Intro"
              rows="3"
              value={form.hero.intro}
              onChange={(e) => handleForm("hero", "intro", e.target.value)}
            />
          </div>

          {/* Counter Section */}
          <div className="col-span-6">
            <h2 className={fieldTitle}>Counter Section</h2>
          </div>
          <div className="col-span-2">
            <Input
              label="Errors (%)"
              value={form.counter.errors}
              onChange={(e) => handleForm("counter", "errors", e.target.value)}
            />
          </div>
          <div className="col-span-2">
            <Input
              label="Faster Cycle Times (X)"
              value={form.counter.cycles}
              onChange={(e) => handleForm("counter", "cycles", e.target.value)}
            />
          </div>
          <div className="col-span-2">
            <Input
              label="Lower Cost (%)"
              value={form.counter.cost}
              onChange={(e) => handleForm("counter", "cost", e.target.value)}
            />
          </div>

          {/* Image Section */}
          <div className="col-span-6">
            <h2 className={fieldTitle}>Image Section</h2>
          </div>
          <div className="col-span-3">
            <ImageInput
              label="Big Image"
              value={form.images.bigImage}
              onChange={(file) => handleForm("images", "bigImage", file)}
            />
          </div>
          <div className="col-span-3">
            <ImageInput
              label="Small Image"
              value={form.images.smallImage}
              onChange={(file) => handleForm("images", "smallImage", file)}
            />
          </div>

          {/* Features Main */}
          <div className="col-span-6">
            <h2 className={fieldTitle}>Features Section</h2>
          </div>
          <div className="col-span-3">
            <Input
              label="Title"
              value={form.featuresMain.title}
              onChange={(e) =>
                handleForm("featuresMain", "title", e.target.value)
              }
            />
          </div>
          <div className="col-span-3">
            <Input
              label="Subtitle"
              value={form.featuresMain.subtitle}
              onChange={(e) =>
                handleForm("featuresMain", "subtitle", e.target.value)
              }
            />
          </div>
          <div className="col-span-6">
            <TextArea
              label="Short Description"
              rows="3"
              value={form.featuresMain.shortdescription}
              onChange={(e) =>
                handleForm("featuresMain", "shortdescription", e.target.value)
              }
            />
          </div>

          {/* Accounts Receivable */}
          <div className="col-span-6">
            <h2 className={fieldTitle}>Accounts Receivable</h2>
          </div>
          {ARFeatures.map((item, index) => (
            <div key={index} className="col-span-6 grid grid-cols-6 gap-4">
              <div className="col-span-3">
                <Input
                  label={`Title #${index + 1}`}
                  value={item.title}
                  onChange={(e) =>
                    updateListField(
                      ARFeatures,
                      setARFeatures,
                      index,
                      "title",
                      e.target.value
                    )
                  }
                />
              </div>
              <div className="col-span-2">
                <ImageInput
                  label="Image"
                  value={item.image}
                  onChange={(file) =>
                    updateListField(
                      ARFeatures,
                      setARFeatures,
                      index,
                      "image",
                      file
                    )
                  }
                />
              </div>
              <div className="col-span-1 flex items-end">
                <button
                  type="button"
                  className="bg-red-600 text-white px-2 py-1 rounded"
                  onClick={() => removeItem(setARFeatures, index)}
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
          <button
            type="button"
            className="col-span-6 bg-gray-700 text-white p-2 rounded"
            onClick={() => addItem(setARFeatures, { title: "", image: null })}
          >
            + Add Feature
          </button>

          {/* Accounts Payable */}
          <div className="col-span-6 mt-6">
            <h2 className={fieldTitle}>Accounts Payable</h2>
          </div>
          {APFeatures.map((item, index) => (
            <div key={index} className="col-span-6 grid grid-cols-6 gap-4">
              <div className="col-span-3">
                <Input
                  label={`Title #${index + 1}`}
                  value={item.title}
                  onChange={(e) =>
                    updateListField(
                      APFeatures,
                      setAPFeatures,
                      index,
                      "title",
                      e.target.value
                    )
                  }
                />
              </div>
              <div className="col-span-2">
                <ImageInput
                  label="Image"
                  value={item.image}
                  onChange={(file) =>
                    updateListField(
                      APFeatures,
                      setAPFeatures,
                      index,
                      "image",
                      file
                    )
                  }
                />
              </div>
              <div className="col-span-1 flex items-end">
                <button
                  type="button"
                  className="bg-red-600 text-white px-2 py-1 rounded"
                  onClick={() => removeItem(setARFeatures, index)}
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
          <button
            type="button"
            className="col-span-6 bg-gray-700 text-white p-2 rounded"
            onClick={() => addItem(setAPFeatures, { title: "", image: null })}
          >
            + Add Feature
          </button>

          {/* … continue similar for WorkflowFeatures, ErpLogos, Banks, Testimonials … */}

          {/* Submit */}
          <div className="col-span-6 mt-8">
            <button
              type="submit"
              className="bg-green-600 text-white px-3 py-2 hover:bg-green-700 rounded-lg w-full"
            >
              Save Homepage Content
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
