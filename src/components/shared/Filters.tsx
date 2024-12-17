'use client'

import React, { useState } from 'react';
import { Title } from './Title';
import {RangeSlider} from './RangeSlider'
import { Input } from '../ui';
import { CheckboxFilterGroup } from './CheckboxFilterGroup';
import { FilterCheckbox } from './FilterCheckbox';
import { useFilterIngredients } from '../../../hooks/use-filter-ingredients';
import { useSet } from 'react-use';
import  qs  from 'qs';
import { useRouter, useSearchParams } from 'next/navigation';


interface Props {
className?: string;
}

interface PriceProps {
	priceFrom?: number;
	priceTo?: number;
	}

interface QueryFilters extends PriceProps{
	pizzaTypes: string;
	sizes: string;
	ingredients: string;
}

export const Filters: React.FC<Props> = ({ className }) => {
	const searchParams = useSearchParams() as unknown as Map<keyof QueryFilters, string>;

	const { ingredients, loading, onAddId, selectedIngredients} = useFilterIngredients(searchParams.get('ingredients')?.split(','));
	const [sizes, {toggle: toggleSizes}] = useSet(new Set<string>(searchParams.has('sizes') ? searchParams.get('sizes')?.split(',') : []))
	const [pizzaTypes, {toggle: togglePizzaTypes}] = useSet(new Set<string>(searchParams.has('pizzaTypes') ? searchParams.get('pizzaTypes')?.split(',') : []))
	const [prices, setPrice] = useState<PriceProps>({
		priceFrom: Number(searchParams.get('priceFrom')) || undefined,
		priceTo: Number(searchParams.get('priceTo')) || undefined,
	})

	const router = useRouter()

	React.useEffect(()=> {
		const filters = {
			...prices,
			pizzaTypes: Array.from(pizzaTypes),
			sizes: Array.from(sizes),
			ingredients: Array.from(selectedIngredients),
		}

		const query = qs.stringify(filters, {
			arrayFormat:"comma",
		})
		router.push(`?${query}`,
			{scroll: false}
		)
	},[prices,ingredients, sizes, selectedIngredients,pizzaTypes, router])


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
	  <CheckboxFilterGroup 
				title='Тип теста'
				name='pizzaTypes'	
				loading={loading}
				onClickCheckbox={togglePizzaTypes}
				selected={pizzaTypes}
				className='mb-5'
				items={[
					{text: 'Тонкое',value:"1"},
					{text: 'Традиционное',value:"2"},
				]}	
			/>
	  <CheckboxFilterGroup 
				title='Размеры'
				name='sizes'	
				loading={loading}
				onClickCheckbox={toggleSizes}
				selected={sizes}
				className='mb-5'
				items={[
					{text: '20 см',value:"20"},
					{text: '30 см',value:"30"},
					{text: '40 см',value:"40"},
				]}	
			/>
      {/* <div className="flex flex-col gap-4">
        <FilterCheckbox name="constructor" text='Можно собирать' value='1'/>
        <FilterCheckbox name="new" text='Новинки' value='2'/>
      </div> */}

      {/* Filter prices */}
      <div className="mt-5 border-y border-y-neutral-100 py-6 pb-7">
        <p className='font-bold mb-3'>Цена от и до:</p>
        <div className="flex items-center gap-3 mb-5">
					<Input type='number' placeholder='0' min={0} max={1000} value={String(prices.priceFrom)}
					onChange={(e)=> updatePrice('priceFrom',Number(e.target.value))}/>
					<Input type='number' min={100} max={1000} value={String(prices.priceTo)}
					onChange={(e)=> updatePrice('priceTo',Number(e.target.value))}/>
        </div>
				<RangeSlider min={0} max={1000} step={10} value={[prices.priceFrom || 0, prices.priceTo || 1000]} onValueChange={([priceFrom,priceTo])=> setPrice({priceFrom,priceTo})}/>
			</div>

      <CheckboxFilterGroup 
				title='Ингридиенты'
				name='ingredients'
				limit={6}
				defaultItems={items.slice(0, 6)}
				items={items}
				loading={loading}
				onClickCheckbox={onAddId}
				selected={selectedIngredients}
			/>
    </div>
  );
};