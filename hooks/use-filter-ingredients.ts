import { ingredients } from '../prisma/constants';
import { Ingredient } from "@prisma/client"
import { useEffect, useState } from "react";
import { Api } from "../services/api-client";
import {useSet} from 'react-use';

type IngredientItem = Pick<Ingredient, 'id' | "name">

interface ReturnProps {
	ingredients: IngredientItem[]
	loading: boolean
	selectedIngredients: Set<string>
	onAddId: (id: string) => void;
}

export const useFilterIngredients = (values: string[] = []): ReturnProps => {
	
	const [ingredients, setIngredients] = useState<IngredientItem[]>([])
	const [loading, setLoading] = useState(false)


  const [selectedIds, { toggle }] = useSet(new Set<string>(values));

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

		// const items = Api.ingredients.getAll().then((data) => {
		// 	setIngredients(data.map((ingredient) => (
		// 		{id: ingredient.id, name: ingredient.name}
		// 	)));
		// }).catch((error) => console.log(error))

	}, [])

	
	return { ingredients,loading, onAddId: toggle,selectedIngredients: selectedIds,};
}