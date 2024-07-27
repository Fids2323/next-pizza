import { cn } from '@/lib/utils';
import React from 'react';

interface Props {
className?: string;
}

const categories:string[] = ['Пиццы', 'Комбо', "Закуски", "Коктейли", "Кофе", "Напитки", "Десерты"];

const activeIndex = 0;

export const Categories: React.FC<Props> = ({ className }) => {
	return (
		<div className={cn('inline-flex bg-gray-50 gap-1 p-1 rounded-2xl', className)}>
			{categories.map((category, index) => (
				<a  key={index} className={cn('flex items-center font-bold h-11 rounded-2xl px-5 text-lg', activeIndex === index && "bg-white text-primary ")}>
					<button>{category}</button>
				</a>
			))}
		</div>
	);
};