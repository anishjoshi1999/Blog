"use client"
import React from 'react';
import { notFound } from 'next/navigation'; // To handle 404 cases

// Dummy blog data
const blogPosts = [
  {
    slug: "understanding-react-state",
    title: "Understanding React State",
    content: `
      React state allows you to manage dynamic data in your React components. 
      It's an essential concept that helps in keeping track of changing information 
      within an app. In this article, we'll take a deep dive into how to manage 
      state effectively and make your applications more dynamic and interactive.
    `,
    tags: ["React", "JavaScript", "Frontend"],
  },
  {
    slug: "nodejs-for-beginners",
    title: "Node.js for Beginners",
    content: `
      Node.js is a powerful framework that allows JavaScript to be run server-side. 
      It's perfect for building fast, scalable web applications. This guide is designed 
      to get you started with Node.js and help you understand its core features.
    `,
    tags: ["Node.js", "JavaScript", "Backend"],
  },
  {
    slug: "mastering-tailwind-css",
    title: "Mastering Tailwind CSS",
    content: `
      Tailwind CSS is a utility-first CSS framework that lets you build modern, 
      responsive UIs without writing custom CSS. In this article, we'll explore some 
      advanced techniques to use Tailwind CSS to streamline your design process.
    `,
    tags: ["Tailwind CSS", "CSS", "Design"],
  },
];

export default function BlogPostPage({ params }) {
  const { slug } = params; // Get the slug from the route parameters
  const blogPost = blogPosts.find((post) => post.slug === slug);

  if (!blogPost) {
    notFound(); // Handle case if blog post is not found
  }

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-4xl font-bold text-gray-800 mb-6">{blogPost.title}</h1>
      <p className="text-gray-700 mb-4 whitespace-pre-line">{blogPost.content}</p>
      <div className="flex space-x-2">
        {blogPost.tags.map((tag, index) => (
          <span
            key={index}
            className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-sm font-medium"
          >
            #{tag}
          </span>
        ))}
      </div>
    </div>
  );
}
