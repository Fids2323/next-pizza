'use client'
import React, { useEffect, useState } from 'react';
import { cn } from '../../lib/utils';
import { PizzaImage } from './PizzaImage';
import { Title } from './Title';
import { Button } from '../ui';
import { GroupVariants } from './GroupVariants';
import { mapPizzaType, PizzaSize, pizzaSizes, PizzaType, pizzaTypes } from '../../constants/pizza';
import { Ingredient, ProductItem } from '@prisma/client';
import { IngredientItem } from './IngredientItem';
import { useSet } from 'react-use';
import { calcTotalPizzaPrice, getAvailablePizzaSizes } from '../../lib';
import { usePizzaOptions } from '../../hooks';
import { getPizzaDetails } from './../../lib/get-pizza-details';


interface Props {
	imageUrl: string;
	className?: string;
	name: string;
	ingredients: Ingredient[];
	items: ProductItem[];
	onClickAddCart?: VoidFunction;
}

export const ChoosePizzaForm: React.FC<Props> = ({
	imageUrl,
	className,
	name,
	ingredients,
	items,
	onClickAddCart
}) => {
	const {
        size,
        type,
        setSize,
        setType,
        selectedIngredient,
        addIngredient,
        availablePizzasSizes
    } = usePizzaOptions(items);

	const {totalPrice, textDetails } = getPizzaDetails(type, size, items,ingredients, selectedIngredient)

	const handleCLickAdd = () => {
		onClickAddCart?.();
	}

	return (
		<div className={cn(className, 'flex flex-1')}>
			{/* Image */}
			<PizzaImage imageUrl={imageUrl} size={size} />
			<div className="w-[490px] bg-[#f8f7f7] p-7">
				<Title text={name} size='md' className='font-extrabold mb-1' />

				<p className='text-gray-400'>{textDetails}</p>
				<div className="flex flex-col gap-4 mt-5">
				{/* Sizes pizza */}
				<GroupVariants items={availablePizzasSizes} value={String(size)} onClick={(value) => setSize(Number(value) as PizzaSize)} />
				{/* Types pizzas */}
				<GroupVariants items={pizzaTypes} value={String(type)} onClick=	{(value) => setType(Number(value) as PizzaType)}/>
				</div>
				{/* Ingredients */}
				<div className="bg-gray-50 p-5 rounded-md h-[420px] overflow-auto mt-5 scrollbar">
					<div className="grid grid-cols-3 gap-3">
					{ingredients.map((ingredient) => (
						<IngredientItem
							key= {ingredient.id}
							name={ingredient.name}
							price ={ingredient.price}
							imageUrl = {ingredient.imageUrl}
							onClick = {() => addIngredient(ingredient.id)}
							active ={selectedIngredient.has(ingredient.id)}
						/>
					))}
					</div>
				</div>
				<Button 
					className='h-[55px] px-10 text-base rounded-[18px] w-full mt-10'
					onClick={handleCLickAdd}>
					Добавить в корзину за {totalPrice}
				</Button>
			</div>
		</div>
	);
};