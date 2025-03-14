import fs from "node:fs";
import sql from "better-sqlite3";
import slugify from "slugify";
import xss from "xss";
import { join } from "node:path";
const db = sql("meals.db");
export function getMeal(id) {
  return db.prepare("SELECT * FROM meals WHERE slug = ?").get(id);
}
export async function getAllMeals() {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return db.prepare("SELECT * FROM meals").all();
}
export async function createMeal(meal) {
  meal.slug = slugify(meal.title, { lower: true });
  meal.instructions = xss(meal.instructions);
const image=meal.image;
const { cid } = await pinata.upload.public.file(image)
const url = await pinata.gateways.public.convert(cid);

  meal.image =url;
  db.prepare(`
    INSERT INTO meals
    (title,summary,instructions,creator,creator_email,image,slug)
    VALUES(
    @title,
    @summary,
    @instructions,
    @creator,
    @creator_email,
    @image,
    @slug

 
    )
    `).run(meal);
}
