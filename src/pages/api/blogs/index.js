import Blog from "@/Models/Blog";
import dbConnect from "@/lib/dbConnect";

async function handler(req, res) {
  await dbConnect();

  const { slug } = req.query; // Extract slug from query if available

  if (req.method === "GET") {
    try {
      if (!slug) {
        // Fetch all blog posts
        console.log("Invoked Get request")
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
  } 
}

export default handler;
