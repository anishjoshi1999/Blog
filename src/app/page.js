"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
 
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">


      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-700 to-indigo-700 text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-5xl font-bold">Welcome to My Blog</h2>
          <p className="mt-6 text-lg ">Sharing my thoughts on programming, technology, and life.</p>
        </div>
      </section>

      {/* Featured Post */}
      <section className="container mx-auto px-6 py-12">
        <h2 className="text-3xl font-semibold text-gray-800 mb-8">Featured Post</h2>
        <div className="bg-white shadow-lg rounded-lg overflow-hidden flex flex-col md:flex-row">
          <Image
            src="https://picsum.photos/600/400"
            alt="Featured Post"
            width={600}
            height={400}
            className="object-cover w-full md:w-1/2"
          />
          <div className="p-8 flex flex-col justify-center">
            <h3 className="text-2xl font-semibold text-gray-800">My Journey into Full Stack Development</h3>
            {/* Tags */}
            <div className="mt-4 flex space-x-3">
              <span className="bg-blue-100 text-blue-600 text-sm px-3 py-1 rounded-full">Code</span>
              <span className="bg-green-100 text-green-600 text-sm px-3 py-1 rounded-full">Technology</span>
              <span className="bg-yellow-100 text-yellow-600 text-sm px-3 py-1 rounded-full">Lifestyle</span>
            </div>
            <p className="mt-6 text-gray-600">
              A deep dive into how I transitioned from a beginner to a full-stack developer, covering my favorite tools and technologies.
            </p>
            <a href="#" className="mt-4 inline-block text-blue-600 hover:text-blue-500 underline font-medium">Read More</a>
          </div>
        </div>
      </section>

      {/* Recent Posts */}
      <section className="container mx-auto px-6 py-12">
        <h2 className="text-3xl font-semibold text-gray-800 mb-8">Recent Posts</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Post Card */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300">
            <Image
              src="https://picsum.photos/500/300"
              alt="Post Image"
              width={500}
              height={300}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800">Exploring the Power of Tailwind CSS</h3>
              <div className="mt-3 flex space-x-2">
                <span className="bg-blue-100 text-blue-600 text-sm px-2 py-1 rounded-full">Code</span>
                <span className="bg-green-100 text-green-600 text-sm px-2 py-1 rounded-full">Technology</span>
                <span className="bg-yellow-100 text-yellow-600 text-sm px-2 py-1 rounded-full">Lifestyle</span>
              </div>
              <p className="mt-4 text-gray-600">
                Discover how Tailwind CSS can help you build modern, responsive UIs with ease.
              </p>
              <a href="#" className="mt-4 inline-block text-blue-600 hover:underline font-medium">Read More</a>
            </div>
          </div>

          {/* Add more post cards similarly */}
        </div>
      </section>

    
    </div>
  );
}
