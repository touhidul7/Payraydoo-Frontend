"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import Input from "../AdminComponents/form/Input";
import ImageInput from "../AdminComponents/form/ImageInput";

export default function ContactPage() {
  const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

  const [editId, setEditId] = useState(null);

  // ------------------ STATES ------------------
  const [Title, setTitle] = useState("");

  const [Offers, setOffers] = useState([
    { text: "" },
  ]);

  const [Logos, setLogos] = useState([
    { image: null, title: "" },
  ]);

  const [Submission, setSubmission] = useState({
    web3key: "",
  });

  // ------------------ LOAD DATA ------------------
  useEffect(() => {
    async function loadData() {
      try {
        const res = await axios.get(`${BASE_URL}/contact`);
        const data = res.data;

        if (!data) return;

        setEditId(data._id);

        setTitle(data.title || "");

        setOffers(data.offers || [{ text: "" }]);

        setLogos(
          data.logos?.map((l) => ({
            image: null, // cannot prefill
            title: l.title,
          })) || [{ image: null, title: "" }]
        );

        setSubmission({
          web3key: data.submission?.web3key || "",
        });

      } catch (error) {
        console.error("Load failed:", error);
      }
    }

    loadData();
  }, [BASE_URL]);

  // ------------------ HELPERS ------------------
  const addItem = (setter, template) => setter((prev) => [...prev, template]);

  const removeItem = (setter, index) =>
    setter((prev) => prev.filter((_, i) => i !== index));

  const updateListField = (list, setter, index, field, value) =>
    setter((prev) =>
      prev.map((item, i) =>
        i === index ? { ...item, [field]: value } : item
      )
    );

  // ------------------ SUBMIT ------------------
  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      title: Title,
      offers: Offers,
      logos: Logos.map((l) => ({ title: l.title })),
      submission: Submission,
    };

    console.log("Submitting contact page:", payload);

    const formData = new FormData();
    formData.append("data", JSON.stringify(payload));

    Logos.forEach((item, index) => {
      if (item.image) formData.append(`logoImage_${index}`, item.image);
    });

    try {
      if (!editId) {
        await axios.post(`${BASE_URL}/contact`, formData);
      } else {
        await axios.put(`${BASE_URL}/contact/${editId}`, formData);
      }

      alert("Contact Page Saved!");
    } catch (err) {
      console.error("Save failed:", err);
      alert("Error saving contact page");
    }
  };

  const fieldTitle = "text-lg font-bold text-gray-900 mb-2";

  // ------------------ UI ------------------
  return (
    <div className="p-6 space-y-12">
      <h1 className="text-2xl font-bold">Contact Page Manager</h1>

      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-6 gap-8">

          {/* TITLE */}
          <div className="col-span-6">
            <h2 className={fieldTitle}>Page Title</h2>
          </div>

          <div className="col-span-6">
            <Input
              label="Title"
              value={Title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>

          {/* OFFERS */}
          <div className="col-span-6 mt-10">
            <h2 className={fieldTitle}>Offers</h2>
          </div>

          {Offers.map((item, index) => (
            <div key={index} className="col-span-6 grid grid-cols-6 gap-4">
              <div className="col-span-5">
                <Input
                  label={`Offer #${index + 1}`}
                  value={item.text}
                  onChange={(e) =>
                    updateListField(Offers, setOffers, index, "text", e.target.value)
                  }
                />
              </div>

              <div className="col-span-1 flex items-end">
                <button
                  type="button"
                  className="bg-red-600 text-white px-2 py-1 rounded"
                  onClick={() => removeItem(setOffers, index)}
                >
                  Remove
                </button>
              </div>
            </div>
          ))}

          <button
            type="button"
            onClick={() => addItem(setOffers, { text: "" })}
            className="col-span-6 bg-gray-700 text-white py-2 rounded"
          >
            + Add Offer
          </button>

          {/* LOGO SECTION */}
          <div className="col-span-6 mt-10">
            <h2 className={fieldTitle}>Logo Section</h2>
          </div>

          {Logos.map((item, index) => (
            <div key={index} className="col-span-6 grid grid-cols-6 gap-4">
              <div className="col-span-2">
                <ImageInput
                  label="Image"
                  onChange={(file) =>
                    updateListField(Logos, setLogos, index, "image", file)
                  }
                />
              </div>

              <div className="col-span-3">
                <Input
                  label="Title"
                  value={item.title}
                  onChange={(e) =>
                    updateListField(Logos, setLogos, index, "title", e.target.value)
                  }
                />
              </div>

              <div className="col-span-1 flex items-end">
                <button
                  type="button"
                  className="bg-red-600 text-white px-2 py-1 rounded"
                  onClick={() => removeItem(setLogos, index)}
                >
                  Remove
                </button>
              </div>
            </div>
          ))}

          <button
            type="button"
            onClick={() =>
              addItem(setLogos, { image: null, title: "" })
            }
            className="col-span-6 bg-gray-700 text-white py-2 rounded"
          >
            + Add Logo
          </button>

          {/* FORM SUBMISSION SETTINGS */}
          <div className="col-span-6 mt-10">
            <h2 className={fieldTitle}>Form Submission Settings</h2>
          </div>

          <div className="col-span-6">
            <Input
              label="Web3Forms API Key"
              placeholder="Enter Web3 API key"
              value={Submission.web3key}
              onChange={(e) =>
                setSubmission({ ...Submission, web3key: e.target.value })
              }
            />
          </div>

          {/* SUBMIT */}
          <div className="col-span-6 mt-10">
            <button
              type="submit"
              className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg"
            >
              Save Contact Page
            </button>
          </div>

        </div>
      </form>
    </div>
  );
}
