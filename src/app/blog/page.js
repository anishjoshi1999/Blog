"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import axios from 'axios';
import Loader from "@/components/Loader"; // Import the Loader component

function BlogPage() {
  const [blogPosts, setBlogPosts] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(true); // Add loading state

  useEffect(() => {
    const fetchBlogs = async () => {
      setLoading(true); // Start loading
      try {
        const res = await axios.get('/api/blogs');
        if (Array.isArray(res.data.blogs)) {
          setBlogPosts(res.data.blogs);
        } else {
          console.error('Invalid data structure:', res.data);
        }
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false); // Stop loading
      }
    };
    fetchBlogs();
  }, []);

  // Function to handle filtering of blog posts based on search query
  const filteredPosts = blogPosts.filter((post) => {
    const query = searchQuery.toLowerCase();

    const titleMatches = post.title && post.title.toLowerCase().includes(query);
    const descriptionMatches = post.description && post.description.toLowerCase().includes(query);
    const tagMatches = Array.isArray(post.tags) && post.tags.length > 0 && post.tags.some((tag) => tag.toLowerCase().includes(query));

    return titleMatches || descriptionMatches || tagMatches;
  });

  if (loading) return <Loader />; // Show loader while fetching

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
                  {Array.isArray(post.tags) && post.tags.map((tag, index) => (
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
