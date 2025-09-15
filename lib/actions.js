'use server';

import { redirect } from "next/navigation";
import { saveMeal } from "./meals";
import { revalidatePath } from "next/cache";

export const shareMeal = async (prevState, formData) => {
     const meal = {
      title: formData.get('title'),
      summary: formData.get('instructions'),
      creator: formData.get('name'),
      creator_email: formData.get('email'),
      image: formData.get('image')
     }

     const isInvalid = (text) => {
      return (!text || text?.trim().length === 0);
     }

     if(isInvalid(meal.title) ||
      isInvalid(meal.summary) || 
      isInvalid(meal.creator) || 
      isInvalid(meal.creator_email) || 
      !meal?.creator_email.includes('@') ||
      !meal.image || meal.image.size === 0) {
         return {message: 'Invalid Input'};
      }
     
     await saveMeal(meal);
     revalidatePath('/meals', 'layout');
     redirect('/meals');
  };
