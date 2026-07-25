import mongoose from "mongoose"

const mangaSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true
    },
    author: {
      type: String,
      default: "Unknown"
    },
    description: {
      type: String
    },
    coverImage: {
      type: String
    },
    status: {
      type: String,
      enum: ["Reading", "Completed", "Planned", "Dropped"],
      default: "Planned"
    },
    chaptersRead: {
      type: Number,
      default: 0
    },
    totalChapters: {
      type: Number,
      default: 0
    },
    anilistID: {
      type: Number
    }
  },
  {
    timestamps: true
  }
)

export default mongoose.model("Manga", mangaSchema)