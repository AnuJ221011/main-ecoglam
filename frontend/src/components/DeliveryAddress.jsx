import React, { useState } from "react";

const DeliveryAddress = ({ onSave }) => {
  const [form, setForm] = useState({
    name: "",
    addressLine1: "",
    addressLine2: "",
    city: "",
    state: "",
    postalCode: "",
    phone: "",
  });

  const [errors, setErrors] = useState({});
  const [saved, setSaved] = useState(false);

  const validate = () => {
    const errs = {};
    if (!form.name.trim()) errs.name = "Name is required";
    if (!form.addressLine1.trim()) errs.addressLine1 = "Address Line 1 is required";
    if (!form.city.trim()) errs.city = "City is required";
    if (!form.state.trim()) errs.state = "State is required";
    if (!form.postalCode.trim()) errs.postalCode = "Postal code is required";
    else if (!/^\d{5,6}$/.test(form.postalCode)) errs.postalCode = "Invalid postal code";
    if (!form.phone.trim()) errs.phone = "Phone number is required";
    else if (!/^\d{10}$/.test(form.phone)) errs.phone = "Phone number must be 10 digits";
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: null });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;
    setSaved(true);
    if (onSave) onSave(form);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md max-w-md mx-auto">
      {!saved ? (
        <>
          <h2 className="text-xl font-semibold mb-4">Delivery Address</h2>
          <form onSubmit={handleSubmit} noValidate>
            <div className="mb-4">
              <label className="block mb-1 font-medium">Full Name</label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                className={`w-full px-3 py-2 border rounded ${errors.name ? "border-red-500" : "border-gray-300"}`}
              />
              {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
            </div>

            <div className="mb-4">
              <label className="block mb-1 font-medium">Address Line 1</label>
              <input
                type="text"
                name="addressLine1"
                value={form.addressLine1}
                onChange={handleChange}
                className={`w-full px-3 py-2 border rounded ${errors.addressLine1 ? "border-red-500" : "border-gray-300"}`}
              />
              {errors.addressLine1 && <p className="text-red-500 text-sm mt-1">{errors.addressLine1}</p>}
            </div>

            <div className="mb-4">
              <label className="block mb-1 font-medium">Address Line 2 (Optional)</label>
              <input
                type="text"
                name="addressLine2"
                value={form.addressLine2}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded"
              />
            </div>

            <div className="mb-4 grid grid-cols-2 gap-4">
              <div>
                <label className="block mb-1 font-medium">City</label>
                <input
                  type="text"
                  name="city"
                  value={form.city}
                  onChange={handleChange}
                  className={`w-full px-3 py-2 border rounded ${errors.city ? "border-red-500" : "border-gray-300"}`}
                />
                {errors.city && <p className="text-red-500 text-sm mt-1">{errors.city}</p>}
              </div>

              <div>
                <label className="block mb-1 font-medium">State</label>
                <input
                  type="text"
                  name="state"
                  value={form.state}
                  onChange={handleChange}
                  className={`w-full px-3 py-2 border rounded ${errors.state ? "border-red-500" : "border-gray-300"}`}
                />
                {errors.state && <p className="text-red-500 text-sm mt-1">{errors.state}</p>}
              </div>
            </div>

            <div className="mb-4 grid grid-cols-2 gap-4">
              <div>
                <label className="block mb-1 font-medium">Postal Code</label>
                <input
                  type="text"
                  name="postalCode"
                  value={form.postalCode}
                  onChange={handleChange}
                  className={`w-full px-3 py-2 border rounded ${errors.postalCode ? "border-red-500" : "border-gray-300"}`}
                />
                {errors.postalCode && <p className="text-red-500 text-sm mt-1">{errors.postalCode}</p>}
              </div>

              <div>
                <label className="block mb-1 font-medium">Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  className={`w-full px-3 py-2 border rounded ${errors.phone ? "border-red-500" : "border-gray-300"}`}
                />
                {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded hover:bg-blue-700 transition-colors"
            >
              Save Address
            </button>
          </form>
        </>
      ) : (
        <div>
          <h3 className="text-lg font-semibold mb-3 text-green-700">Address Saved</h3>
          <p><strong>Name:</strong> {form.name}</p>
          <p><strong>Address:</strong> {form.addressLine1}{form.addressLine2 && `, ${form.addressLine2}`}</p>
          <p><strong>City:</strong> {form.city}</p>
          <p><strong>State:</strong> {form.state}</p>
          <p><strong>Postal Code:</strong> {form.postalCode}</p>
          <p><strong>Phone:</strong> {form.phone}</p>
          <button
            onClick={() => setSaved(false)}
            className="mt-4 px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
          >
            Edit Address
          </button>
        </div>
      )}
    </div>
  );
};

export default DeliveryAddress;
