"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import Input from "../AdminComponents/form/Input";
import TextArea from "../AdminComponents/form/TextArea";
import ImageInput from "../AdminComponents/form/ImageInput";

export default function Page() {
  const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

  const [editId, setEditId] = useState(null);

  // ------------------ STATES ------------------
  const [Hero, setHero] = useState({
    title: "",
    image1: null,
    image2: null,
    bigImage: null,
  });

  const [Feature1, setFeature1] = useState({
    title: "",
    description: "",
  });

  const [APImage, setAPImage] = useState(null);

  const [Feature2, setFeature2] = useState({
    title: "",
    description: "",
  });

  const [OtherFeatures, setOtherFeatures] = useState([
    { title: "", description: "" },
  ]);

  const [DarkFeatures, setDarkFeatures] = useState({
    f1: { title: "", description: "" },
    f2: { title: "", description: "" },
    f3: { title: "", description: "" },
    image1: null,
    image2: null,
    f4: { title: "", description: "" },
    f5: { title: "", description: "" },
    positionImage: null,
  });

  const [HowItWorks, setHowItWorks] = useState({
    title: "",
    description: "",
    image: null,
  });

  const [Capabilities, setCapabilities] = useState({
    c1: { title: "", description: "" },
    c2: { title: "", description: "" },
    c3: { title: "", description: "" },
  });

  const [InvoiceSection, setInvoiceSection] = useState({
    title: "",
    subtitle: "",
    image1: null,
    image2: null,
    bigImage: null,
  });

  // ------------------ LOAD DATA ------------------
  useEffect(() => {
    async function loadData() {
      try {
        const res = await axios.get(`${BASE_URL}/productar`);
        const data = res.data;
        if (!data) return;

        setEditId(data._id);

        setHero({ title: data.hero?.title || "", image1: null, image2: null, bigImage: null });

        setFeature1(data.feature1 || { title: "", description: "" });

        setFeature2(data.feature2 || { title: "", description: "" });

        setOtherFeatures(data.otherFeatures || [{ title: "", description: "" }]);

        setDarkFeatures({
          f1: data.darkSection?.f1 || { title: "", description: "" },
          f2: data.darkSection?.f2 || { title: "", description: "" },
          f3: data.darkSection?.f3 || { title: "", description: "" },
          image1: null,
          image2: null,
          f4: data.darkSection?.f4 || { title: "", description: "" },
          f5: data.darkSection?.f5 || { title: "", description: "" },
          positionImage: null,
        });

        setHowItWorks({ title: data.howItWorks?.title || "", description: data.howItWorks?.description || "", image: null });

        setCapabilities({
          c1: data.capabilities?.c1 || { title: "", description: "" },
          c2: data.capabilities?.c2 || { title: "", description: "" },
          c3: data.capabilities?.c3 || { title: "", description: "" },
        });

        setInvoiceSection({
          title: data.invoiceSection?.title || "",
          subtitle: data.invoiceSection?.subtitle || "",
          image1: null,
          image2: null,
          bigImage: null,
        });

      } catch (error) {
        console.error("Load failed:", error);
      }
    }

    loadData();
  }, [BASE_URL]);

  // ------------------ HANDLERS ------------------
  const addItem = (setter, template) => setter((prev) => [...prev, template]);

  const removeItem = (setter, index) =>
    setter((prev) => prev.filter((_, i) => i !== index));

  const updateListField = (list, setter, index, field, value) => {
    setter((prev) =>
      prev.map((item, i) =>
        i === index ? { ...item, [field]: value } : item
      )
    );
  };

  // ------------------ SUBMIT ------------------
  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      hero: { title: Hero.title },
      feature1: Feature1,
      feature2: Feature2,
      otherFeatures: OtherFeatures,
      darkSection: {
        f1: DarkFeatures.f1,
        f2: DarkFeatures.f2,
        f3: DarkFeatures.f3,
        f4: DarkFeatures.f4,
        f5: DarkFeatures.f5,
      },
      howItWorks: {
        title: HowItWorks.title,
        description: HowItWorks.description,
      },
      capabilities: Capabilities,
      invoiceSection: {
        title: InvoiceSection.title,
        subtitle: InvoiceSection.subtitle,
      },
    };

    console.log("Submitting payload:", payload);

    const formData = new FormData();
    formData.append("data", JSON.stringify(payload));

    // HERO images
    if (Hero.image1) formData.append("heroImage1", Hero.image1);
    if (Hero.image2) formData.append("heroImage2", Hero.image2);
    if (Hero.bigImage) formData.append("heroBigImage", Hero.bigImage);

    // Feature AP image
    if (APImage) formData.append("apImage", APImage);

    // Dark section images
    if (DarkFeatures.image1)
      formData.append("darkImage1", DarkFeatures.image1);
    if (DarkFeatures.image2)
      formData.append("darkImage2", DarkFeatures.image2);
    if (DarkFeatures.positionImage)
      formData.append("positionImage", DarkFeatures.positionImage);

    // How it works
    if (HowItWorks.image) formData.append("howImage", HowItWorks.image);

    // Invoice section images
    if (InvoiceSection.image1)
      formData.append("invoiceImage1", InvoiceSection.image1);
    if (InvoiceSection.image2)
      formData.append("invoiceImage2", InvoiceSection.image2);
    if (InvoiceSection.bigImage)
      formData.append("invoiceBigImage", InvoiceSection.bigImage);

    try {
      if (!editId) {
        await axios.post(`${BASE_URL}/productar`, formData);
      } else {
        await axios.put(`${BASE_URL}/productar/${editId}`, formData);
      }
      alert("Saved!");
    } catch (err) {
      console.error("Submit failed:", err);
      alert("Error saving");
    }
  };

  const fieldTitle = "text-lg font-bold text-gray-900 mb-2";

  // ------------------ UI ------------------
  return (
    <div className="p-6 space-y-10">
      <h1 className="text-2xl font-bold text-gray-900">Product AR Manager</h1>

      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-6 gap-8">

          {/* HERO SECTION */}
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

          <div className="col-span-2">
            <ImageInput
              label="Image 1"
              onChange={(file) => setHero({ ...Hero, image1: file })}
            />
          </div>

          <div className="col-span-2">
            <ImageInput
              label="Image 2"
              onChange={(file) => setHero({ ...Hero, image2: file })}
            />
          </div>

          <div className="col-span-2">
            <ImageInput
              label="Big Image"
              onChange={(file) => setHero({ ...Hero, bigImage: file })}
            />
          </div>

          {/* FEATURE 1 */}
          <div className="col-span-6 mt-10">
            <h2 className={fieldTitle}>Product Feature #1</h2>
          </div>

          <div className="col-span-6">
            <Input
              label="Title"
              value={Feature1.title}
              onChange={(e) =>
                setFeature1({ ...Feature1, title: e.target.value })
              }
            />
          </div>

          <div className="col-span-6">
            <TextArea
              label="Description"
              rows="3"
              value={Feature1.description}
              onChange={(e) =>
                setFeature1({ ...Feature1, description: e.target.value })
              }
            />
          </div>

          <div className="col-span-3">
            <ImageInput
              label="AP Image"
              onChange={(file) => setAPImage(file)}
            />
          </div>

          {/* FEATURE 2 */}
          <div className="col-span-6 mt-10">
            <h2 className={fieldTitle}>Product Feature #2</h2>
          </div>

          <div className="col-span-6">
            <Input
              label="Title"
              value={Feature2.title}
              onChange={(e) =>
                setFeature2({ ...Feature2, title: e.target.value })
              }
            />
          </div>

          <div className="col-span-6">
            <TextArea
              label="Description"
              value={Feature2.description}
              rows="3"
              onChange={(e) =>
                setFeature2({ ...Feature2, description: e.target.value })
              }
            />
          </div>

          {/* OTHER FEATURES */}
          <div className="col-span-6 mt-10">
            <h2 className={fieldTitle}>Other Features</h2>
          </div>

          {OtherFeatures.map((item, index) => (
            <div key={index} className="col-span-6 grid grid-cols-6 gap-4">
              <div className="col-span-3">
                <Input
                  label={`Title #${index + 1}`}
                  value={item.title}
                  onChange={(e) =>
                    updateListField(OtherFeatures, setOtherFeatures, index, "title", e.target.value)
                  }
                />
              </div>

              <div className="col-span-3">
                <TextArea
                  label="Description"
                  rows="3"
                  value={item.description}
                  onChange={(e) =>
                    updateListField(OtherFeatures, setOtherFeatures, index, "description", e.target.value)
                  }
                />
              </div>

              <div className="col-span-6 flex justify-end">
                <button
                  className="bg-red-600 text-white px-2 py-1 rounded"
                  type="button"
                  onClick={() => removeItem(setOtherFeatures, index)}
                >
                  Remove
                </button>
              </div>
            </div>
          ))}

          <button
            type="button"
            className="col-span-6 bg-gray-700 text-white p-2 rounded"
            onClick={() => addItem(setOtherFeatures, { title: "", description: "" })}
          >
            + Add Feature
          </button>

          {/* DARK SECTION */}
          <div className="col-span-6 mt-10">
            <h2 className={fieldTitle}>Dark Section Features</h2>
          </div>

          {/* F1 */}
          <div className="col-span-3">
            <Input
              label="Feature 1 Title"
              value={DarkFeatures.f1.title}
              onChange={(e) =>
                setDarkFeatures({
                  ...DarkFeatures,
                  f1: { ...DarkFeatures.f1, title: e.target.value },
                })
              }
            />
          </div>

          <div className="col-span-3">
            <TextArea
              label="Feature 1 Description"
              rows="3"
              value={DarkFeatures.f1.description}
              onChange={(e) =>
                setDarkFeatures({
                  ...DarkFeatures,
                  f1: { ...DarkFeatures.f1, description: e.target.value },
                })
              }
            />
          </div>

          {/* F2 */}
          <div className="col-span-3">
            <Input
              label="Feature 2 Title"
              value={DarkFeatures.f2.title}
              onChange={(e) =>
                setDarkFeatures({
                  ...DarkFeatures,
                  f2: { ...DarkFeatures.f2, title: e.target.value },
                })
              }
            />
          </div>

          <div className="col-span-3">
            <TextArea
              label="Feature 2 Description"
              rows="3"
              value={DarkFeatures.f2.description}
              onChange={(e) =>
                setDarkFeatures({
                  ...DarkFeatures,
                  f2: { ...DarkFeatures.f2, description: e.target.value },
                })
              }
            />
          </div>

          {/* F3 */}
          <div className="col-span-3">
            <Input
              label="Feature 3 Title"
              value={DarkFeatures.f3.title}
              onChange={(e) =>
                setDarkFeatures({
                  ...DarkFeatures,
                  f3: { ...DarkFeatures.f3, title: e.target.value },
                })
              }
            />
          </div>

          <div className="col-span-3">
            <TextArea
              label="Feature 3 Description"
              rows="3"
              value={DarkFeatures.f3.description}
              onChange={(e) =>
                setDarkFeatures({
                  ...DarkFeatures,
                  f3: { ...DarkFeatures.f3, description: e.target.value },
                })
              }
            />
          </div>

          {/* Dark Section Images */}
          <div className="col-span-3">
            <ImageInput
              label="Dark Image 1"
              onChange={(file) =>
                setDarkFeatures({ ...DarkFeatures, image1: file })
              }
            />
          </div>

          <div className="col-span-3">
            <ImageInput
              label="Dark Image 2"
              onChange={(file) =>
                setDarkFeatures({ ...DarkFeatures, image2: file })
              }
            />
          </div>

          {/* F4 */}
          <div className="col-span-3">
            <Input
              label="Feature 4 Title"
              value={DarkFeatures.f4.title}
              onChange={(e) =>
                setDarkFeatures({
                  ...DarkFeatures,
                  f4: { ...DarkFeatures.f4, title: e.target.value },
                })
              }
            />
          </div>

          <div className="col-span-3">
            <TextArea
              label="Feature 4 Description"
              rows="3"
              value={DarkFeatures.f4.description}
              onChange={(e) =>
                setDarkFeatures({
                  ...DarkFeatures,
                  f4: { ...DarkFeatures.f4, description: e.target.value },
                })
              }
            />
          </div>

          {/* F5 */}
          <div className="col-span-3">
            <Input
              label="Feature 5 Title"
              value={DarkFeatures.f5.title}
              onChange={(e) =>
                setDarkFeatures({
                  ...DarkFeatures,
                  f5: { ...DarkFeatures.f5, title: e.target.value },
                })
              }
            />
          </div>

          <div className="col-span-3">
            <TextArea
              label="Feature 5 Description"
              rows="3"
              value={DarkFeatures.f5.description}
              onChange={(e) =>
                setDarkFeatures({
                  ...DarkFeatures,
                  f5: { ...DarkFeatures.f5, description: e.target.value },
                })
              }
            />
          </div>

          {/* Position Image */}
          <div className="col-span-6">
            <ImageInput
              label="Position Image"
              onChange={(file) =>
                setDarkFeatures({ ...DarkFeatures, positionImage: file })
              }
            />
          </div>

          {/* HOW PAYRAYDOO WORKS */}
          <div className="col-span-6 mt-10">
            <h2 className={fieldTitle}>How Payraydoo Works</h2>
          </div>

          <div className="col-span-6">
            <Input
              label="Title"
              value={HowItWorks.title}
              onChange={(e) =>
                setHowItWorks({ ...HowItWorks, title: e.target.value })
              }
            />
          </div>

          <div className="col-span-6">
            <TextArea
              label="Description"
              rows="3"
              value={HowItWorks.description}
              onChange={(e) =>
                setHowItWorks({ ...HowItWorks, description: e.target.value })
              }
            />
          </div>

          <div className="col-span-3">
            <ImageInput
              label="Image"
              onChange={(file) =>
                setHowItWorks({ ...HowItWorks, image: file })
              }
            />
          </div>

          {/* CORE CAPABILITIES */}
          <div className="col-span-6 mt-10">
            <h2 className={fieldTitle}>Core Capabilities</h2>
          </div>

          {["c1", "c2", "c3"].map((key, i) => (
            <div key={i} className="col-span-6 grid grid-cols-6 gap-4">
              <div className="col-span-3">
                <Input
                  label={`Capability ${i + 1} Title`}
                  value={Capabilities[key].title}
                  onChange={(e) =>
                    setCapabilities({
                      ...Capabilities,
                      [key]: {
                        ...Capabilities[key],
                        title: e.target.value,
                      },
                    })
                  }
                />
              </div>

              <div className="col-span-3">
                <TextArea
                  label="Description"
                  rows="3"
                  value={Capabilities[key].description}
                  onChange={(e) =>
                    setCapabilities({
                      ...Capabilities,
                      [key]: {
                        ...Capabilities[key],
                        description: e.target.value,
                      },
                    })
                  }
                />
              </div>
            </div>
          ))}

          {/* INVOICE SECTION */}
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
            <Input
              label="Subtitle"
              value={InvoiceSection.subtitle}
              onChange={(e) =>
                setInvoiceSection({ ...InvoiceSection, subtitle: e.target.value })
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

          {/* SUBMIT */}
          <div className="col-span-6 mt-10">
            <button
              type="submit"
              className="w-full bg-green-600 text-white hover:bg-green-700 py-3 rounded-lg"
            >
              Save Product AR Content
            </button>
          </div>

        </div>
      </form>
    </div>
  );
}
