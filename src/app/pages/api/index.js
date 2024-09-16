import Blog from "@/app/Models/Blog";
import dbConnect from "@/app/lib/dbConnect";

async function handler(req, res) {
  await dbConnect();

  const { slug } = req.query; // Extract slug from query if available

  if (req.method === "GET") {
    try {
      if (!slug) {
        // Fetch all blog posts
        const blogs = await Blog.find({});
        res.status(200).json({ success: true, blogs });
      } else {
        // Fetch a single blog post by slug
        const blog = await Blog.findOne({ slug });
        if (!blog) {
          return res
            .status(404)
            .json({ success: false, message: "Blog post not found" });
        }
        res.status(200).json({ success: true, blog });
      }
    } catch (err) {
      console.error("Error:", err);
      res.status(500).json({ success: false, message: "Server error" });
    }
  } else if (req.method === "POST") {
    try {
      const { title, content, tags } = req.body;

      if (!title || !content || !tags) {
        return res
          .status(400)
          .json({ success: false, message: "All fields are required" });
      }

      const newBlog = new Blog({
        title,
        content,
        tags,
      });

      await newBlog.save();
      res
        .status(201)
        .json({
          success: true,
          message: "Blog created successfully",
          blog: newBlog,
        });
    } catch (err) {
      console.error("Error:", err);
      res.status(500).json({ success: false, message: "Server error" });
    }
  } else if (req.method === "PUT") {
    try {
      const { title, content, tags } = req.body;

      const updatedBlog = await Blog.findOneAndUpdate(
        { slug },
        { title, content, tags },
        { new: true, runValidators: true }
      );

      if (!updatedBlog) {
        return res
          .status(404)
          .json({ success: false, message: "Blog post not found" });
      }

      res
        .status(200)
        .json({
          success: true,
          message: "Blog post updated",
          blog: updatedBlog,
        });
    } catch (err) {
      console.error("Error:", err);
      res.status(500).json({ success: false, message: "Server error" });
    }
  } else if (req.method === "DELETE") {
    try {
      const deletedBlog = await Blog.findOneAndDelete({ slug });

      if (!deletedBlog) {
        return res
          .status(404)
          .json({ success: false, message: "Blog post not found" });
      }

      res.status(200).json({ success: true, message: "Blog post deleted" });
    } catch (err) {
      console.error("Error:", err);
      res.status(500).json({ success: false, message: "Server error" });
    }
  } else {
    res.status(405).json({ success: false, message: "Method Not Allowed" });
  }
}

export default handler;
