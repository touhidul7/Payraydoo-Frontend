"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import Input from "../AdminComponents/form/Input";
import TextArea from "../AdminComponents/form/TextArea";
import ImageInput from "../AdminComponents/form/ImageInput";

export default function AboutPage() {
  const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

  const [editId, setEditId] = useState(null);

  // ------------------ STATES ------------------
  const [Hero, setHero] = useState({
    title: "",
    stylishTitle: "",
    image: null,
  });

  const [Leadership, setLeadership] = useState([
    { image: null, name: "", role: "", linkedin: "" },
  ]);

  const [Investors, setInvestors] = useState([
    { image: null, name: "", role: "", linkedin: "" },
  ]);

  const [Story, setStory] = useState({
    title: "",
    description: "",
  });

  const [Founder, setFounder] = useState({
    youtube: "",
  });

  // ------------------ LOAD DATA ------------------
  useEffect(() => {
    async function loadData() {
      try {
        const res = await axios.get(`${BASE_URL}/about`);
        const data = res.data;

        if (!data) return;

        setEditId(data._id);

        setHero({
          title: data.hero?.title || "",
          stylishTitle: data.hero?.stylishTitle || "",
          image: null,
        });

        setLeadership(data.leadership || [
          { image: null, name: "", role: "", linkedin: "" },
        ]);

        setInvestors(data.investors || [
          { image: null, name: "", role: "", linkedin: "" },
        ]);

        setStory({
          title: data.story?.title || "",
          description: data.story?.description || "",
        });

        setFounder({
          youtube: data.founder?.youtube || "",
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
      hero: {
        title: Hero.title,
        stylishTitle: Hero.stylishTitle,
      },
      leadership: Leadership.map((l) => ({
        name: l.name,
        role: l.role,
        linkedin: l.linkedin,
      })),
      investors: Investors.map((i) => ({
        name: i.name,
        role: i.role,
        linkedin: i.linkedin,
      })),
      story: Story,
      founder: Founder,
    };

    console.log("Submitting about page:", payload);
    const formData = new FormData();
    formData.append("data", JSON.stringify(payload));

    // Hero image
    if (Hero.image) formData.append("heroImage", Hero.image);

    // Leadership images
    Leadership.forEach((item, index) => {
      if (item.image) formData.append(`leadershipImage_${index}`, item.image);
    });

    // Investor images
    Investors.forEach((item, index) => {
      if (item.image) formData.append(`investorImage_${index}`, item.image);
    });

    try {
      if (!editId) {
        await axios.post(`${BASE_URL}/about`, formData);
      } else {
        await axios.put(`${BASE_URL}/about/${editId}`, formData);
      }

      alert("Saved Successfully!");
    } catch (err) {
      console.error("Save failed:", err);
      alert("Error saving");
    }
  };

  const fieldTitle = "text-lg font-bold text-gray-900 mb-2";

  // ------------------ UI ------------------
  return (
    <div className="p-6 space-y-12">
      <h1 className="text-2xl font-bold">About Page Manager</h1>

      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-6 gap-8">

          {/* HERO SECTION */}
          <div className="col-span-6">
            <h2 className={fieldTitle}>Hero Section</h2>
          </div>

          <Input
            label="Title"
            value={Hero.title}
            onChange={(e) =>
              setHero({ ...Hero, title: e.target.value })
            }
            className="col-span-6"
          />

          <Input
            label="Stylish Title"
            value={Hero.stylishTitle}
            onChange={(e) =>
              setHero({ ...Hero, stylishTitle: e.target.value })
            }
            className="col-span-6"
          />

          <div className="col-span-6">
            <ImageInput
              label="Hero Image"
              onChange={(file) =>
                setHero({ ...Hero, image: file })
              }
            />
          </div>

          {/* LEADERSHIP TEAM */}
          <div className="col-span-6 mt-10">
            <h2 className={fieldTitle}>Leadership Team</h2>
          </div>

          {Leadership.map((item, index) => (
            <div key={index} className="col-span-6 grid grid-cols-6 gap-4">

              <div className="col-span-2">
                <ImageInput
                  label="Image"
                  onChange={(file) =>
                    updateListField(Leadership, setLeadership, index, "image", file)
                  }
                />
              </div>

              <div className="col-span-2">
                <Input
                  label="Name"
                  value={item.name}
                  onChange={(e) =>
                    updateListField(Leadership, setLeadership, index, "name", e.target.value)
                  }
                />
              </div>

              <div className="col-span-1">
                <Input
                  label="Role"
                  value={item.role}
                  onChange={(e) =>
                    updateListField(Leadership, setLeadership, index, "role", e.target.value)
                  }
                />
              </div>

              <div className="col-span-1">
                <Input
                  label="LinkedIn URL"
                  value={item.linkedin}
                  onChange={(e) =>
                    updateListField(Leadership, setLeadership, index, "linkedin", e.target.value)
                  }
                />
              </div>

              <div className="col-span-6 flex justify-end">
                <button
                  type="button"
                  onClick={() => removeItem(setLeadership, index)}
                  className="bg-red-600 text-white px-2 py-1 rounded"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}

          <button
            type="button"
            onClick={() =>
              addItem(setLeadership, {
                image: null,
                name: "",
                role: "",
                linkedin: "",
              })
            }
            className="col-span-6 bg-gray-700 text-white py-2 rounded"
          >
            + Add Leadership Member
          </button>

          {/* INVESTORS PANEL */}
          <div className="col-span-6 mt-10">
            <h2 className={fieldTitle}>Investor Panel</h2>
          </div>

          {Investors.map((item, index) => (
            <div key={index} className="col-span-6 grid grid-cols-6 gap-4">

              <div className="col-span-2">
                <ImageInput
                  label="Image"
                  onChange={(file) =>
                    updateListField(Investors, setInvestors, index, "image", file)
                  }
                />
              </div>

              <div className="col-span-2">
                <Input
                  label="Name"
                  value={item.name}
                  onChange={(e) =>
                    updateListField(Investors, setInvestors, index, "name", e.target.value)
                  }
                />
              </div>

              <div className="col-span-1">
                <Input
                  label="Role"
                  value={item.role}
                  onChange={(e) =>
                    updateListField(Investors, setInvestors, index, "role", e.target.value)
                  }
                />
              </div>

              <div className="col-span-1">
                <Input
                  label="LinkedIn URL"
                  value={item.linkedin}
                  onChange={(e) =>
                    updateListField(Investors, setInvestors, index, "linkedin", e.target.value)
                  }
                />
              </div>

              <div className="col-span-6 flex justify-end">
                <button
                  type="button"
                  onClick={() => removeItem(setInvestors, index)}
                  className="bg-red-600 text-white px-2 py-1 rounded"
                >
                  Remove
                </button>
              </div>

            </div>
          ))}

          <button
            type="button"
            onClick={() =>
              addItem(setInvestors, {
                image: null,
                name: "",
                role: "",
                linkedin: "",
              })
            }
            className="col-span-6 bg-gray-700 text-white py-2 rounded"
          >
            + Add Investor
          </button>

          {/* STORY SECTION */}
          <div className="col-span-6 mt-10">
            <h2 className={fieldTitle}>Story Section</h2>
          </div>

          <div className="col-span-6">
            <Input
              label="Title"
              value={Story.title}
              onChange={(e) =>
                setStory({ ...Story, title: e.target.value })
              }
            />
          </div>

          <div className="col-span-6">
            <TextArea
              label="Description"
              rows="5"
              value={Story.description}
              onChange={(e) =>
                setStory({ ...Story, description: e.target.value })
              }
            />
          </div>

          {/* FOUNDER MESSAGE */}
          <div className="col-span-6 mt-10">
            <h2 className={fieldTitle}>Message From Founder</h2>
          </div>

          <div className="col-span-6">
            <Input
              label="YouTube URL"
              value={Founder.youtube}
              onChange={(e) =>
                setFounder({ ...Founder, youtube: e.target.value })
              }
            />
          </div>

          {/* SUBMIT */}
          <div className="col-span-6 mt-10">
            <button
              type="submit"
              className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg"
            >
              Save About Page
            </button>
          </div>

        </div>
      </form>
    </div>
  );
}
