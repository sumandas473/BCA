import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

const Form = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
  e.preventDefault();

  emailjs
    .send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      {
        name: formData.name,
        email: formData.email,
        message: formData.message,
      },
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    )
    .then((response) => {
      console.log('Email sent successfully:', response);
      alert('Message sent!');

      // ✅ Clear form
      setFormData({
        name: '',
        email: '',
        message: '',
      });
    })
    .catch((error) => {
      console.error('Error sending email:', error);
      alert('Failed to send message. Please try again.');
    });
};
  return (
    <div className="max-w-md mx-auto p-6 py-10 bg-[#ffffff] backdrop-blur-2xl  rounded-2xl shadow-lg">
      <h2 className="text-2xl font-semibold mb-6 text-center text-gray-800">Contact Us</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Your Name"
          required
          className="w-full px-4 py-2 border border-amber-950 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-amber-950"
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Your Email"
          required
          className="w-full px-4 py-2 border border-amber-950 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-amber-950"
        />
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Your Message"
          required
          rows="5"
          className="w-full px-4 py-2 border border-amber-950 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
        />
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-300 "
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Form;
