'use server'

import { createMeal } from "@/lib/meals"
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
function isNotValidText(text){
    if(!text || text.trim() === ''){
        return true
    }else{
        return false
    }
    
}
export async function ShareMeal(prevState,formData) {
    const meal={
        title:formData.get('title'),
        summary:formData.get('summary'),
        instructions:formData.get('instructions'),
        creator:formData.get('name'),
        creator_email:formData.get('email'),
        image:formData.get('image')
    }
    if(
        isNotValidText(meal.title)||
        isNotValidText(meal.creator)||
        isNotValidText(meal.creator_email)||
        isNotValidText(meal.instructions)||
        isNotValidText(meal.summary)||
        !meal.creator_email.includes('@')
    ){
return {
    message:'Invalid input'
}
    }
    await createMeal(meal);
    revalidatePath('/meals','layout')
    redirect('/meals')
}