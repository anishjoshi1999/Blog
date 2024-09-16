"use client";
import React, { useState } from "react";
import Link from "next/link";

const blogPosts = [
  {
    id: 1,
    title: "Understanding React State",
    slug: "understanding-react-state",
    description: "A deep dive into managing state in React applications.",
    tags: ["React", "JavaScript", "Frontend"],
  },
  {
    id: 2,
    title: "Node.js for Beginners",
    slug: "nodejs-for-beginners",
    description:
      "An introductory guide to building server-side apps with Node.js.",
    tags: ["Node.js", "JavaScript", "Backend"],
  },
  {
    id: 3,
    title: "Mastering Tailwind CSS",
    slug: "mastering-tailwind-css",
    description:
      "Tips and tricks for designing beautiful UI with Tailwind CSS.",
    tags: ["Tailwind CSS", "CSS", "Design"],
  },
  // Add more blog posts here
];

function BlogPage() {
  const [searchQuery, setSearchQuery] = useState("");

  // Function to handle filtering of blog posts based on search query
  const filteredPosts = blogPosts.filter((post) => {
    const query = searchQuery.toLowerCase();
    return (
      post.title.toLowerCase().includes(query) ||
      post.description.toLowerCase().includes(query) ||
      post.tags.some((tag) => tag.toLowerCase().includes(query))
    );
  });

  return (
    <div className="min-h-screen bg-gray-100 py-10">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-gray-800 text-center mb-8">
          My Blog
        </h1>

        {/* Search Input */}
        <div className="mb-8 flex justify-center">
          <input
            type="text"
            placeholder="Search by title, description, or tags..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full max-w-xl p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
          />
        </div>

        {/* Blog Posts */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.length > 0 ? (
            filteredPosts.map((post) => (
              <div key={post.id} className="bg-white p-6 rounded-lg shadow-lg">
                <Link
                  href={`/blog/${post.slug}`}
                  className="text-2xl font-bold text-gray-800 mb-4"
                >
                  <h2>{post.title}</h2>
                </Link>

                <p className="text-gray-700 mb-4">{post.description}</p>
                <div className="flex space-x-2">
                  {post.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-sm font-medium"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-700 col-span-full">
              No blog posts found matching your search.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default BlogPage;
