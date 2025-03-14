import Link from "next/link";
import classes from "./page.module.css";
import MealsGrid from "@/components/meals/meal-grid";
import { getAllMeals } from "@/lib/meals";
import { Suspense } from "react";
export async function Meals() {
  const meals = await getAllMeals();
  return <MealsGrid meals={meals} />;
}
export const metadata = {
  title: "Explore Meals",
  description: "Here you can see all meals added by our cheffs and users",
};
export default async function Page() {
  return (
    <>
      <header className={classes.header}>
        <h1>
          Delicious meals created by{" "}
          <span className={classes.highlight}>you</span>
        </h1>
        <p>choose an easy recipe and cook it yourself</p>
        <p className={classes.cta}>
          <Link href={"/meals/share"}>Share Your Favorite Recipe</Link>
        </p>
      </header>
      <main className={classes.main}>
        <Suspense
          fallback={<p className={classes.loading}>Fetching meals...</p>}
        >
          <Meals />
        </Suspense>
      </main>
    </>
  );
}
