"use client"
import { useState, useEffect } from "react";
import axios from "axios";

const BlogManager = () => {
  const [blogs, setBlogs] = useState([]); // Stores all blogs
  const [currentBlog, setCurrentBlog] = useState(null); // Stores blog data to edit
  const [formData, setFormData] = useState({
    title: "",
    content: "",
    tags: "",
  });

  const [isEditing, setIsEditing] = useState(false); // Whether the form is in editing mode
  const [error, setError] = useState(null); // Error handling

  // Fetch blogs on component load
  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    try {
      const res = await axios.get("/api/blogs");
      setBlogs(res.data.blogs);
    } catch (err) {
      console.error(err);
    }
  };

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission (either add or edit)
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { title, content, tags } = formData;

    if (!title || !content || !tags) {
      setError("All fields are required");
      return;
    }

    const tagArray = tags.split(",").map(tag => tag.trim()); // Convert string tags to array

    try {
      if (isEditing) {
        // Edit existing blog
        await axios.put(`/api/blogs/${currentBlog.slug}`, {
          title,
          content,
          tags: tagArray,
        });
        setIsEditing(false);
        setCurrentBlog(null);
      } else {
        // Add new blog
        await axios.post("/api/blogs", {
          title,
          content,
          tags: tagArray,
        });
      }

      setFormData({ title: "", content: "", tags: "" });
      fetchBlogs();
    } catch (err) {
      setError("Failed to save blog post");
      console.error(err);
    }
  };

  // Handle blog delete
  const handleDelete = async (slug) => {
    try {
      await axios.delete(`/api/blogs/${slug}`);
      fetchBlogs();
    } catch (err) {
      console.error(err);
    }
  };

  // Handle edit click
  const handleEdit = (blog) => {
    setIsEditing(true);
    setCurrentBlog(blog);
    setFormData({
      title: blog.title,
      content: blog.content,
      tags: blog.tags.join(", "), // Convert array of tags to comma-separated string
    });
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Blog Manager</h1>

      {/* Form for adding or editing blogs */}
      <form onSubmit={handleSubmit} className="mb-8">
        <div className="mb-4">
          <label className="block text-sm font-medium">Title</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium">Content</label>
          <textarea
            name="content"
            value={formData.content}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded h-32"
          ></textarea>
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium">Tags (comma-separated)</label>
          <input
            type="text"
            name="tags"
            value={formData.tags}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded"
          />
        </div>
        {error && <p className="text-red-600 mb-4">{error}</p>}
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          {isEditing ? "Update Post" : "Add Post"}
        </button>
      </form>

      {/* Display list of blogs */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogs.map((blog) => (
          <div key={blog._id} className="border p-4 rounded shadow">
            <h2 className="text-xl font-bold">{blog.title}</h2>
            <p>{blog.content.substring(0, 100)}...</p>
            <p className="text-sm text-gray-500 mt-2">Tags: {blog.tags.join(", ")}</p>
            <div className="flex justify-between mt-4">
              <button
                onClick={() => handleEdit(blog)}
                className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600"
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(blog.slug)}
                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogManager;
