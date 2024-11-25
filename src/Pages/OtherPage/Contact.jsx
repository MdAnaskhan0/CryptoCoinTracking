import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Zod schema for validation
const contactSchema = z.object({
  name: z
    .string()
    .min(3, "Name must be at least 3 characters long")
    .max(30, "Name must not exceed 30 characters"),
  email: z
    .string()
    .email("Please enter a valid email address"),
  message: z
    .string()
    .min(10, "Message must be at least 10 characters long")
    .max(500, "Message must not exceed 500 characters"),
});

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = (data) => {
    console.log("Form Data: ", data);
    toast.success("Form submitted successfully!");
    // You can handle form submission logic here, e.g., send data to server or API
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center py-12">
      <div className="max-w-2xl w-full p-6 bg-white rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-center text-black mb-6">
          Contact Us
        </h1>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 w-[80%] mx-auto">
          {/* Name Input */}
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Name
            </label>
            <input
              {...register("name")}
              id="name"
              type="text"
              className="mt-2 p-3 w-full border border-gray-300 rounded-md shadow-sm focus:ring-1 bg-gray-50 focus:ring-indigo-500"
            />
            {errors.name && (
              <p className="mt-2 text-sm text-red-600">{errors.name.message}</p>
            )}
          </div>

          {/* Email Input */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              {...register("email")}
              id="email"
              type="email"
              className="mt-2 p-3 w-full border border-gray-300 rounded-md shadow-sm focus:ring-1 bg-gray-50 focus:ring-indigo-500"
            />
            {errors.email && (
              <p className="mt-2 text-sm text-red-600">{errors.email.message}</p>
            )}
          </div>

          {/* Message Input */}
          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700"
            >
              Message
            </label>
            <textarea
              {...register("message")}
              id="message"
              rows="4"
              className="mt-2 p-3 w-full border border-gray-300 rounded-md shadow-sm focus:ring-1 bg-gray-50 focus:ring-indigo-500"
            ></textarea>
            {errors.message && (
              <p className="mt-2 text-sm text-red-600">{errors.message.message}</p>
            )}
          </div>

          {/* Submit Button */}
          <div className="flex justify-center">
            <button
              type="submit"
              className="px-6 py-3 bg-indigo-700 text-white font-semibold text-lg rounded-md shadow-lg hover:bg-indigo-800 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              Submit
            </button>
          </div>
        </form>
      </div>

      {/* ToastContainer for notifications */}
      <ToastContainer position="top-center" autoClose={5000} />
    </div>
  );
};

export default Contact;
