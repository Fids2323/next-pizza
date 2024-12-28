import { Ingredient, ProductItem } from "@prisma/client";
import { PizzaSize, PizzaType } from "../constants/pizza";

/**
 * 
 * @param type - тип теста
 * @param size - размер пиццы
 * @param items -список вариаций
 * @param ingredients -список ингридиентов
 * @param selectedIngredient -выбранные ингридиенты
 * @returns number общая стоимость
 */
export const calcTotalPizzaPrice = (
    type:PizzaType, 
    size:PizzaSize,
    items:ProductItem[],
    ingredients:Ingredient[],
    selectedIngredient:Set<number>
) => {
    const pizzaPrice = items.find((item) => item.pizzaType === type && item.size === size)?.price || 0;
    const ingredientsPrice = ingredients
        .filter((ingredient) => selectedIngredient.has(ingredient.id))
        .reduce((acc, ingredient) => acc + ingredient.price, 0);
    return pizzaPrice + ingredientsPrice;
}