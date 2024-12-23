import React from 'react';
import { FaCode, FaUsers, FaRegClock } from 'react-icons/fa';
import Navbar from '../components/Navbar';
import GoToTop from '../components/GoToTop';

const About = () => {
  return (
    <>
    <Navbar/>
    <section className="about-section bg-[#1A1919] text-white py-16 px-6">
      <div className="max-w-[1200px] mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6 text-[#FF4343]">About Our Online Code Editor</h2>
        <p className="text-lg mb-6 max-w-3xl mx-auto text-gray-300">
          Our Online Code Editor is an intuitive, user-friendly platform designed to help developers code in real-time
          from anywhere. Whether you're building websites, creating scripts, or experimenting with code, this editor is
          equipped to provide an efficient and collaborative environment for all your coding needs.
        </p>
        
        <div className="features grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          <div className="feature-card bg-[#202020] p-6 rounded-lg shadow-lg text-center">
            <FaCode className="text-4xl text-[#FF4343] mb-4" />
            <h3 className="text-2xl font-semibold text-white mb-2">Write and Run Code Instantly</h3>
            <p className="text-gray-400">
              Write HTML, CSS, and JavaScript in real-time and see the results instantly, enabling you to streamline your
              development process.
            </p>
          </div>

          <div className="feature-card bg-[#202020] p-6 rounded-lg shadow-lg text-center">
            <FaUsers className="text-4xl text-[#FF4343] mb-4" />
            <h3 className="text-2xl font-semibold text-white mb-2">Collaborative Coding Coming Soon</h3>
            <p className="text-gray-400">
              In the upcoming version, you’ll be able to collaborate with multiple developers on the same project in real-time.
              Code together and enhance your team’s productivity.
            </p>
          </div>

          <div className="feature-card bg-[#202020] p-6 rounded-lg shadow-lg text-center">
            <FaRegClock className="text-4xl text-[#FF4343] mb-4" />
            <h3 className="text-2xl font-semibold text-white mb-2">Always Evolving</h3>
            <p className="text-gray-400">
              We're constantly improving the editor! In the near future, expect support for multiple programming languages to
              help you work on even more projects and tech stacks.
            </p>
          </div>
        </div>

        <h3 className="text-2xl font-semibold mb-4 text-[#FF4343]">What's Coming Next?</h3>
        <p className="text-lg text-gray-300 mb-6 max-w-3xl mx-auto">
          Our upcoming release will bring a host of exciting features! The most anticipated one is real-time collaboration,
          where multiple users will be able to code on the same project simultaneously. Whether you're pairing up with
          another developer or working on a team project, this feature will elevate your development experience. We’re also
          adding support for multiple programming languages, so you’ll be able to code in your language of choice seamlessly.
        </p>
        <p className="text-xl font-semibold text-gray-400">
          Stay tuned for our next update — big things are on the way!
        </p>
      </div>
      <GoToTop/>
    </section>
    </>
  );
};

export default About;
