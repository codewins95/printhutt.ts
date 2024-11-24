import mongoose from "mongoose";

const categorySchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    image: String,
    parentCategory: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
      default: null,
    },
    level: { type: Number, default: 0 }, // 0 for main category, 1+ for subcategories
  },
  { timestamps: true }
);


export default mongoose.models.Category || mongoose.model("Category", categorySchema);