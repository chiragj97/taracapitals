const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const storySchema = new Schema(
  {
    title: { type: String },
    description: { type: String },
    user: { type: String },
  },
  {
    timestamps: true,
  }
);

const Story = mongoose.model('Story', storySchema);
module.exports = Story;
