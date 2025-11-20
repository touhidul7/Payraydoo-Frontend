"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import Input from "../AdminComponents/form/Input";
import TextArea from "../AdminComponents/form/TextArea";
import ImageInput from "../AdminComponents/form/ImageInput";

export default function ReviewsPage() {
  const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

  const [editId, setEditId] = useState(null);

  const [form, setForm] = useState({
    name: "",
    position: "",
    company: "",
    review: "",
    image: null,
  });

  const [reviews, setReviews] = useState([]);

  // ------------------ LOAD REVIEWS ------------------
  const loadReviews = async () => {
    try {
      const res = await axios.get(`${BASE_URL}/reviews`);
      setReviews(res.data || []);
    } catch (err) {
      console.error("Failed to load reviews:", err);
    }
  };

  useEffect(() => {
    loadReviews();
  }, []);

  // ------------------ SUBMIT ------------------
  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      name: form.name,
      position: form.position,
      company: form.company,
      review: form.review,
    };

    const formData = new FormData();
    formData.append("data", JSON.stringify(payload));

    if (form.image) formData.append("image", form.image);

    try {
      if (!editId) {
        await axios.post(`${BASE_URL}/reviews`, formData);
        alert("Review Created!");
      } else {
        await axios.put(`${BASE_URL}/reviews/${editId}`, formData);
        alert("Review Updated!");
        setEditId(null);
      }

      setForm({
        name: "",
        position: "",
        company: "",
        review: "",
        image: null,
      });

      loadReviews();
    } catch (err) {
      console.error("Failed:", err);
      alert("Failed to save review");
    }
  };

  // ------------------ DELETE ------------------
  const deleteReview = async (id) => {
    if (!confirm("Are you sure you want to delete this review?")) return;

    try {
      await axios.delete(`${BASE_URL}/reviews/${id}`);
      loadReviews();
    } catch (err) {
      console.error("Delete failed:", err);
      alert("Failed to delete review");
    }
  };

  // ------------------ EDIT ------------------
  const editReview = (review) => {
    setEditId(review._id);

    setForm({
      name: review.name,
      position: review.position,
      company: review.company,
      review: review.review,
      image: null, // cannot prefill file
    });
  };

  const fieldTitle = "text-lg font-bold text-gray-900 mb-2";

  return (
    <div className="p-6 space-y-10">
      <h1 className="text-2xl font-bold">Reviews Manager</h1>

      {/* ------------------ FORM ------------------ */}
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-6 gap-8">

          <div className="col-span-6">
            <h2 className={fieldTitle}>Add / Edit Review</h2>
          </div>

          <div className="col-span-3">
            <Input
              label="Name"
              value={form.name}
              onChange={(e) =>
                setForm({ ...form, name: e.target.value })
              }
            />
          </div>

          <div className="col-span-3">
            <Input
              label="Position"
              value={form.position}
              onChange={(e) =>
                setForm({ ...form, position: e.target.value })
              }
            />
          </div>

          <div className="col-span-6">
            <Input
              label="Company"
              value={form.company}
              onChange={(e) =>
                setForm({ ...form, company: e.target.value })
              }
            />
          </div>

          <div className="col-span-6">
            <TextArea
              label="Review"
              rows="4"
              value={form.review}
              onChange={(e) =>
                setForm({ ...form, review: e.target.value })
              }
            />
          </div>

          <div className="col-span-6">
            <ImageInput
              label="Image"
              onChange={(file) =>
                setForm({ ...form, image: file })
              }
            />
          </div>

          <div className="col-span-6 mt-6">
            <button
              type="submit"
              className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg"
            >
              {editId ? "Update Review" : "Create Review"}
            </button>
          </div>

        </div>
      </form>

      {/* ------------------ TABLE ------------------ */}
      <div className="mt-10">
        <h2 className={fieldTitle}>All Reviews</h2>

        <table className="w-full border border-gray-300 text-left">
          <thead>
            <tr className="bg-gray-100 border-b">
              <th className="p-3 border-r">Image</th>
              <th className="p-3 border-r">Name</th>
              <th className="p-3 border-r">Position</th>
              <th className="p-3 border-r">Company</th>
              <th className="p-3 border-r">Review</th>
              <th className="p-3 border-r">Actions</th>
            </tr>
          </thead>

          <tbody>
            {reviews.map((rev) => (
              <tr key={rev._id} className="border-b">
                <td className="p-3 border-r">
                  <img
                    src={rev.image}
                    className="w-20 h-20 rounded object-cover"
                  />
                </td>
                <td className="p-3 border-r">{rev.name}</td>
                <td className="p-3 border-r">{rev.position}</td>
                <td className="p-3 border-r">{rev.company}</td>
                <td className="p-3 border-r max-w-xs truncate">{rev.review}</td>

                <td className="p-3 flex gap-2">
                  <button
                    className="bg-blue-600 text-white px-3 py-1 rounded"
                    onClick={() => editReview(rev)}
                  >
                    Edit
                  </button>

                  <button
                    className="bg-red-600 text-white px-3 py-1 rounded"
                    onClick={() => deleteReview(rev._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}

            {reviews.length === 0 && (
              <tr>
                <td colSpan="6" className="p-4 text-center text-gray-500">
                  No reviews found.
                </td>
              </tr>
            )}
          </tbody>

        </table>
      </div>
    </div>
  );
}
