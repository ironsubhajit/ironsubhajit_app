const mongoose = require("mongoose");

const ProjectSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  date_modified: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  live_link: {
    type: String,
  },
  repo_link: { type: String },
  thumbnali_link: { type: String },
});

module.exports = mongoose.model("projects", ProjectSchema);
