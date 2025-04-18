import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

const Products = () => {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = async (data) => {
    console.log("Form Data:", data); // 👉 You get the form data here as an object

    try {
      // Sending form data to backend
      const response = await axios.post("http://your-backend-api.com/products", data);
      console.log("Response from backend:", response.data);

      // Reset form after successful submission
      reset();
    } catch (error) {
      console.error("Error sending data:", error);
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 shadow-lg rounded-md bg-white">
      <h2 className="text-2xl font-bold mb-6 text-center">Create Product</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label className="block mb-1 font-medium">Product Name</label>
          <input
            type="text"
            {...register("name", { required: true })}
            className="w-full border p-2 rounded"
            placeholder="Enter product name"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Description</label>
          <textarea
            {...register("description", { required: true })}
            className="w-full border p-2 rounded"
            placeholder="Enter description"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Price</label>
          <input
            type="number"
            step="0.01"
            {...register("price", { required: true })}
            className="w-full border p-2 rounded"
            placeholder="Enter price"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Category</label>
          <input
            type="text"
            {...register("category", { required: true })}
            className="w-full border p-2 rounded"
            placeholder="Enter category"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition"
        >
          Create Product
        </button>
      </form>
    </div>
  );
};

export default Products;
