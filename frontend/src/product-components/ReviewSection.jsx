import { useState } from "react";
import { FaStar } from "react-icons/fa";

const ReviewSection = ({ product }) => {
  const [reviews, setReviews] = useState([
    {
      name: "Anjali",
      rating: 5,
      comment: "Absolutely love it! My skin feels amazing.",
    },
    {
      name: "Rahul",
      rating: 4,
      comment: "Good product but a bit expensive.",
    },
  ]);

  const [formData, setFormData] = useState({
    name: "",
    rating: 0,
    comment: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.comment || formData.rating === 0) return;

    setReviews([formData, ...reviews]);
    setFormData({ name: "", rating: 0, comment: "" });
  };

  return (
    <div className="mt-12 px-4">
      <h2 className="text-2xl font-semibold mb-4">Customer Reviews</h2>

      <div className="space-y-4">
        {reviews.map((rev, idx) => (
          <div key={idx} className="border rounded-lg p-4 shadow-sm">
            <div className="flex items-center space-x-2">
              <strong>{rev.name}</strong>
              <div className="flex text-yellow-500">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} className={i < rev.rating ? "text-yellow-500" : "text-gray-300"} />
                ))}
              </div>
            </div>
            <p className="text-gray-600 mt-2">{rev.comment}</p>
          </div>
        ))}
      </div>

      <form onSubmit={handleSubmit} className="mt-8 space-y-4 border-t pt-6">
        <h3 className="text-xl font-semibold">Write a Review</h3>
        <input
          type="text"
          name="name"
          placeholder="Your name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className="w-full p-2 border rounded-md"
        />
        <textarea
          name="comment"
          placeholder="Your review"
          value={formData.comment}
          onChange={(e) => setFormData({ ...formData, comment: e.target.value })}
          className="w-full p-2 border rounded-md"
          rows={3}
        />
        <div className="flex items-center space-x-2">
          {[...Array(5)].map((_, i) => (
            <FaStar
              key={i}
              className={`cursor-pointer ${
                i < formData.rating ? "text-yellow-500" : "text-gray-300"
              }`}
              onClick={() => setFormData({ ...formData, rating: i + 1 })}
            />
          ))}
        </div>
        <button
          type="submit"
          className="bg-pink-600 text-white px-4 py-2 rounded-lg hover:bg-pink-700"
        >
          Submit Review
        </button>
      </form>
    </div>
  );
};

export default ReviewSection;
