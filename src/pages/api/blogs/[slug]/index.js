import Blog from "@/Models/Blog";
import dbConnect from "@/lib/dbConnect";

async function handler(req, res) {
  await dbConnect();

  const { slug } = req.query; // Extract slug from query if available
if (req.method === "PUT") {
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
