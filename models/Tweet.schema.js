const mongoose = require("mongoose");

const schema = new mongoose.Schema(
  {
    type: String,
    categories: [String],
    roles: [String],

    email: [String],
    urls: [String],
    
    created_by: String,
    created_on: Number,
    
    need_manual_verification: Boolean,
    
    tweet_id: String,
    tweet_url: String,
    author_id: String,
    text: String,
    likes: Number,
    retweets: Number,
    author_followers: Number,
  },
  { timestamps: true }
);

module.exports = mongoose.models.Tweet || mongoose.model("Tweet", schema);
