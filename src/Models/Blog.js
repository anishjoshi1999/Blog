const mongoose = require("mongoose");
const slugify = require("slugify"); // To generate the slug from the title

const blogSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },
    slug: {
      type: String,
      unique: true,
      lowercase: true,
    },
    content: {
      type: String,
      required: true,
    },
    tags: {
      type: [String], // Array of tags
      required: true,
    },
  },
  { timestamps: true }
);

// Pre-save middleware to auto-generate slug from title
blogSchema.pre("save", function (next) {
  if (this.isModified("title")) {
    this.slug = slugify(this.title, { lower: true, strict: true });
  }
  next();
});

const Blog = mongoose.models.Blog || mongoose.model("Blog", blogSchema);

module.exports = Blog;
