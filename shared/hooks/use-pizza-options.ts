import { useEffect, useState } from "react";
import { Variant } from "../components/shared/GroupVariants";
import { PizzaSize, PizzaType } from "../constants/pizza";
import { useSet } from "react-use";
import { getAvailablePizzaSizes } from "../lib";
import { ProductItem } from "@prisma/client";

interface ReturnProps {
    size: PizzaSize;
    type: PizzaType;
    selectedIngredient: Set<number>;
    availablePizzasSizes: Variant[];
    setSize: (size: PizzaSize) => void;
    setType: (type: PizzaType) => void;
    addIngredient: (id: number) => void;
}

export const usePizzaOptions = (items: ProductItem[]): ReturnProps => {
    const [selectedIngredient, {toggle: addIngredient}] = useSet(new Set<number>([]))
    const [size, setSize] = useState<PizzaSize>(20);
	const [type, setType] = useState<PizzaType>(1);

    // Disable unavailable variants
	const availablePizzasSizes = getAvailablePizzaSizes(items, type);

    useEffect(() => {
        const isAvailableSize = availablePizzasSizes?.find((item) => Number(item.value) === size && !item.disabled);
        const availableSize = availablePizzasSizes?.find((item) => !item.disabled);
        if(!isAvailableSize && availableSize)
            setSize(Number(availableSize.value) as PizzaSize)
    },[type])

    return {
        size,
        type,
        setSize,
        setType,
        selectedIngredient,
        addIngredient,
        availablePizzasSizes
    }
}
