"use client";
import Link from "next/link";

export default function About() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-r from-blue-100 to-blue-50">
      {/* About Section */}
      <section className="container mx-auto px-6 py-16">
        <div className="bg-white shadow-lg rounded-lg p-8 md:p-12">
          <h2 className="text-4xl font-extrabold text-gray-800 text-center mb-8">About Me</h2>

          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Hi, I'm <span className="font-semibold text-gray-900">Anish Joshi</span>, a passionate Computer Engineer from Dhangadhi, Nepal. Currently, I'm working as an Associate Software Engineer at Cedar Gate Technologies, where I focus on web scraping, Node.js, and automation tools like Puppeteer. With over a year of experience, I’ve built efficient, scalable solutions that drive impact.
          </p>

          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            My journey in teaching has also allowed me to share my knowledge with students, breaking down complex topics in Computer Science such as Operating Systems and Object-Oriented Programming. This experience has honed my communication skills and my ability to make technical subjects accessible to a wider audience.
          </p>

          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Continuous learning is a key part of my growth. I hold certifications in Social Distancing Violation Detection, HIPAA Compliance, and Intermediate SQL. These reflect my commitment to enhancing my skills and staying updated with the latest technologies.
          </p>

          {/* Contact Information */}
          <div className="mt-8">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Get in Touch</h3>
            <p className="text-lg text-gray-700 mb-2">
              Mobile: <span className="font-medium text-gray-900">9848430888</span>
            </p>
            <p className="text-lg text-gray-700 mb-2">
              Email:{" "}
              <a href="mailto:anishjoshi1999@gmail.com" className="text-blue-600 hover:underline">
                anishjoshi1999@gmail.com
              </a>
            </p>
            <p className="text-lg text-gray-700 mb-2">
              LinkedIn:{" "}
              <a href="https://www.linkedin.com/in/anishjoshi1999" className="text-blue-600 hover:underline">
                linkedin.com/in/anishjoshi1999
              </a>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
