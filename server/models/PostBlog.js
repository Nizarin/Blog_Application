const mongoose = require("mongoose");

const postBlogSchema = new mongoose.Schema({
  Title: {
    type: String,
    required: true,
  },
  Content: {
    type: String,
    required: true,
  },
});

mongoose.model("PostBlog", postBlogSchema);
