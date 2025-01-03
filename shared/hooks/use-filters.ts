/*Hook stores filter values*/
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import { useSet } from "react-use";

interface PriceProps {
	priceFrom?: number;
	priceTo?: number;
	}

interface QueryFilters extends PriceProps{
	pizzaTypes: string;
	sizes: string;
	ingredients: string;
}

export interface Filters {
    pizzaTypes: Set<string>;
    sizes: Set<string>;
    selectedIngredients: Set<string>;
    prices:PriceProps; 
}

interface ReturnProps extends Filters {
    setPrices: (name: keyof PriceProps, value: number) => void;
    setPizzaTypes: (value: string) => void;
    setSizes: (value: string) => void;
    setSelectedIngredients: (value: string) => void;
}

export const useFilters = ():ReturnProps => {
    const searchParams = useSearchParams() as unknown as Map<keyof QueryFilters, string>;
    const router = useRouter();

    /* Filters*/
    const [selectedIngredients, { toggle: toggleIngredients }] = useSet(new Set<string>(searchParams.get('ingredients')?.split(',')));
    const [sizes, {toggle: toggleSizes}] = useSet(new Set<string>(searchParams.has('sizes') ? searchParams.get('sizes')?.split(',') : []))
    const [pizzaTypes, {toggle: togglePizzaTypes}] = useSet(new Set<string>(searchParams.has('pizzaTypes') ? searchParams.get('pizzaTypes')?.split(',') : []))
    const [prices, setPrices] = useState<PriceProps>({
        priceFrom: Number(searchParams.get('priceFrom')) || undefined,
        priceTo: Number(searchParams.get('priceTo')) || undefined,
    })

    const updatePrice = (name: keyof PriceProps, value: number) => { 
        setPrices((prevPrice) => ({
            ...prevPrice,
            [name]: value
        }))
    }   
   
    return {
        sizes,
        pizzaTypes,
        prices,
        selectedIngredients,
        setPrices: updatePrice,
        setPizzaTypes: togglePizzaTypes,
        setSizes: toggleSizes,
        setSelectedIngredients: toggleIngredients,
    }
}