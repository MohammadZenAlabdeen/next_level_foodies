import slugify from "slugify";
import xss from "xss";
import mongoose from "mongoose";
import connectMongoDB from "./mongodb";
import Meal from "../models/Meal";
import { pinata } from "@/utils/config";
export async function getMeal(slug) {
  try {
    await connectMongoDB();
  } finally {
    const meal = await Meal.findOne({ slug: slug });
    return meal;
  }
}

export async function getAllMeals() {
  try {
    await connectMongoDB();
  } finally {
    const meals = await Meal.find();
    return meals;
  }
}

export async function createMeal(meal) {
  await connectMongoDB();
  meal.slug = slugify(meal.title, { lower: true });
  meal.instructions = xss(meal.instructions);
  const image = meal.image;
  const { cid } = await pinata.upload.public.file(image);
  const url = await pinata.gateways.public.convert(cid);
  meal.image = url;
  const newMeal = new Meal({
    title: meal.title,
    summary: meal.summary,
    instructions: meal.instructions,
    creator: meal.creator,
    creator_email: meal.creator_email,
    image: meal.image,
    slug: meal.slug,
  });
  await newMeal.save();
}
