"use client";
import React, { useState, useEffect } from "react";
import axios from 'axios';
import Loader from "@/components/Loader";

const BlogPost = ({ params }) => {
  let { slug } = params;
  const [blog, setBlog] = useState(null);
  
  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const res = await axios.get(`/api/blogs/${slug}`);
        console.log(res);
        setBlog(res.data.blog);
      } catch (err) {
        console.error(err);
      }
    };
    fetchBlog();
  }, [slug]);

  if (!blog) return <Loader />;

  return (
    <div className="blog-article">
      <h1 className="blog-title">{blog.title}</h1>
      <div className="blog-meta">
        <span className="blog-date">{new Date(blog.createdAt).toLocaleDateString()}</span>
        <span className="blog-tags">
          {blog.tags.map(tag => (
            <span key={tag} className="blog-tag">{tag}</span>
          ))}
        </span>
      </div>
      <div className="blog-content" dangerouslySetInnerHTML={{ __html: blog.content }} />
    </div>
  );
};

export default BlogPost;
