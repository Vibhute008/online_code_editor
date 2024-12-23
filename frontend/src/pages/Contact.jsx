import React, { useState } from 'react';
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa';
import Navbar from '../components/Navbar';
import { toast } from 'react-toastify';
import GoToTop from '../components/GoToTop';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can integrate your backend or API for handling contact form submissions
    console.log('Form submitted:', formData);
    toast.info('Sorry ! The form is currently unavailable. Please try again later.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (<>
    <Navbar/>
    <section className="contact-section bg-[#141414] text-white py-16 px-6 mt-[4rem]">
      <div className="max-w-[1200px] mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6 text-[#FF4343]">Contact Us</h2>
        <p className="text-lg mb-10 max-w-3xl mx-auto text-gray-300">
          Have questions or feedback? We'd love to hear from you! Reach out to us using the form below or through our
          contact details.
        </p>

        <div className="contact-details grid grid-cols-1 justify-center md:grid-cols-3 gap-6 mb-10">
          <div className="contact-card flex flex-col items-center bg-[#202020] p-6 rounded-lg shadow-lg text-center">
            <FaEnvelope className="text-4xl text-[#FF4343] mb-4" />
            <h3 className="text-2xl font-semibold mb-2">Email Us</h3>
            <p className="text-gray-400">support@codeeditor.com</p>
          </div>
          <div className="contact-card flex flex-col items-center bg-[#202020] p-6 rounded-lg shadow-lg text-center">
            <FaPhoneAlt className="text-4xl text-[#FF4343] mb-4" />
            <h3 className="text-2xl font-semibold mb-2">Call Us</h3>
            <p className="text-gray-400">+1 234 567 890</p>
          </div>
          <div className="contact-card flex flex-col items-center bg-[#202020] p-6 rounded-lg shadow-lg text-center">
            <FaMapMarkerAlt className="text-4xl text-[#FF4343] mb-4" />
            <h3 className="text-2xl font-semibold mb-2">Visit Us</h3>
            <p className="text-gray-400">123 Code Street, Dev City, 45678</p>
          </div>
        </div>

        <form className="contact-form max-w-3xl mx-auto text-left" onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-300 mb-2">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 rounded-lg bg-[#202020] text-white border border-gray-600"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-300 mb-2">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 rounded-lg bg-[#202020] text-white border border-gray-600"
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="message" className="block text-gray-300 mb-2">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-3 rounded-lg bg-[#202020] text-white border border-gray-600"
              rows="5"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full py-3 rounded-lg bg-[#FF4343] text-white font-semibold hover:bg-[#ff5c5c] transition duration-200"
          >
            Send Message
          </button>
        </form>
      </div>
      <GoToTop/>
    </section>
    </>
  );
};

export default Contact;
