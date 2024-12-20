import { useEffect, useState } from "react";
import { Api } from "../services/api-client";
import { Ingredient } from "@prisma/client";

type IngredientItem = Pick<Ingredient, 'id' | "name">

export const useIngredients = () => {
    const [ingredients, setIngredients] = useState<IngredientItem[]>([])
	const [loading, setLoading] = useState(false)

    useEffect(() => {
		async function fetchIngredients() {
			try {
				setLoading(true)
				const ingredients = await Api.ingredients.getAll();
				setIngredients(ingredients)
		} catch (error) {
		console.log(error);
			}
		finally {
			setLoading(false)
			}
		}

		fetchIngredients();
    }, [])

    return { ingredients,
        loading};
}