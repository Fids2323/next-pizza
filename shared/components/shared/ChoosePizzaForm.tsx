'use client'
import React, { useState } from 'react';
import { cn } from '../../lib/utils';
import { PizzaImage } from './PizzaImage';
import { Title } from './Title';
import { Button } from '../ui';
import { GroupVariants } from './GroupVariants';
import { PizzaSize, pizzaSizes, PizzaType, pizzaTypes } from '../../constants/pizza';

interface Props {
	imageUrl: string;
	className?: string;
	name: string;
	ingredients: any[];
	items?: any[];
	onClickAdd?: VoidFunction;
}

export const ChoosePizzaForm: React.FC<Props> = ({
	imageUrl,
	className,
	name,
	ingredients,
	items,
	onClickAdd
}) => {
	const [size, setSize] = useState<PizzaSize>(20);
	const [type, setType] = useState<PizzaType>(1);


	const textDetails = '30 см, традиционное тесто 30';
	const totalPrice = 350;
	return (
		<div className={cn(className, 'flex flex-1')}>
			{/* Image */}
			<PizzaImage imageUrl={imageUrl} size={size} />
			<div className="w-[490px] bg-[#f8f7f7] p-7">
				<Title text={name} size='md' className='font-extrabold mb-1' />

				<p className='text-gray-400'>{textDetails}</p>
				<div className="flex flex-col gap-4 mt-5">
				{/* Sizes pizza */}
				<GroupVariants items={pizzaSizes} value={String(size)} onClick=	{(value) => setSize(Number(value) as PizzaSize)} />
				{/* Types pizzas */}
				<GroupVariants items={pizzaTypes} value={String(type)} onClick=	{(value) => setType(Number(value) as PizzaType)}/>
				</div>

				<Button className='h-[55px] px-10 text-base rounded-[18px] w-full mt-10'>
					Добавить в корзину за {totalPrice}
				</Button>
			</div>
		</div>
	);
};