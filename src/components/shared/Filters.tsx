'use client'

import React, { useState } from 'react';
import { Title } from './Title';
import {RangeSlider} from './RangeSlider'
import { Input } from '../ui';
import { CheckboxFilterGroup } from './CheckboxFilterGroup';
import { FilterCheckbox } from './FilterCheckbox';
import { useFilterIngredients } from '../../../hooks/useFilterIngredients';

interface Props {
className?: string;
}

interface PriceProps {
	priceFrom: number;
	priceTo: number;
	}

export const Filters: React.FC<Props> = ({ className }) => {

	const { ingredients, loading, onAddId, selectedIds } = useFilterIngredients();
	const [prices, setPrice] = useState<PriceProps>({priceFrom: 0, priceTo: 1000})
	
	const items = ingredients.map((ingredient) => (
		{
			value: String(ingredient.id),
			text: ingredient.name
		}
	))

	const updatePrice = (name: keyof PriceProps, value: number) => { 
		setPrice({
			...prices,
			[name]: value
		})
	}

  return (
    <div className={className}>
      <Title text='Фильтрация' size='sm' className='mb-5 font-bold'/>

      {/* Top checkboxes */}
      <div className="flex flex-col gap-4">
        <FilterCheckbox name="constructor" text='Можно собирать' value='1'/>
        <FilterCheckbox name="new" text='Новинки' value='2'/>
      </div>

      {/* Filter prices */}
      <div className="mt-5 border-y border-y-neutral-100 py-6 pb-7">
        <p className='font-bold mb-3'>Цена от и до:</p>
        <div className="flex items-center gap-3 mb-5">
					<Input type='number' placeholder='0' min={0} max={1000} value={String(prices.priceFrom)}
					onChange={(e)=> updatePrice('priceFrom',Number(e.target.value))}/>
					<Input type='number' min={100} max={1000} value={String(prices.priceTo)}
					onChange={(e)=> updatePrice('priceTo',Number(e.target.value))}/>
        </div>
				<RangeSlider min={0} max={1000} step={10} value={[prices.priceFrom, prices.priceTo]} onValueChange={([priceFrom,priceTo])=> setPrice({priceFrom,priceTo})}/>
			</div>

      <CheckboxFilterGroup 
				title='Ингридиенты'
				name='ingredients'
				limit={6}
				defaultItems={items.slice(0, 6)}
				items={items}
				loading={loading}
				onClickCheckbox={onAddId}
				selectedIds={selectedIds}
			/>
    </div>
  );
};