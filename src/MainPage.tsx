// retrieve main card / update /delete 
import { useState } from 'react'
import { Database } from "../supabase";
import { supabase } from './supabaseClient'; 

function MainPage() {

interface Recipe {
  recipe_name: string;
  duration: number;
  img_link: string;
}

type GetUserRecipeCards = Database['public']['Functions']['get_user_recipe_cards']['Args'];

async function retrieveRecipeCardList(userId: number): Promise<Recipe[] | null> {
    const { data, error } = await supabase
        .rpc('get_user_recipe_cards', { input_user_id: userId } as GetUserRecipeCards)

    if (error) {
        console.error('Error retrieving recipes:', error);
        return null;
    }
    return data || null;
}

    return (
        <>
        mainpage
        <button onClick={() => retrieveRecipeCardList(2).then((recipes) => console.log(recipes))}> retrieve click</button>
        </>
    )
} 

export default MainPage;