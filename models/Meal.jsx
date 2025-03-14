import mongoose from "mongoose";

const MealSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  summary: {
    type: String,
    required: true,
  },
  instructions: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  creator: {
    type: String,
    required: true,
  },
  creator_email: {
    type: String,
    required: true,
  },
  slug:{
    type:String,
    required:true,
  }
});
const Meal = mongoose.models.Meal || mongoose.model("Meal", MealSchema);

export default Meal;
