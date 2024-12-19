'use client'
import React from 'react';
import { Title } from './Title';
import {RangeSlider} from './RangeSlider'
import { Input } from '../ui';
import { CheckboxFilterGroup } from './CheckboxFilterGroup';
import { useFilters,useQueryFilters,useIngredients} from '../../hooks';
interface Props {
className?: string;
}

export const Filters: React.FC<Props> = ({ className }) => {
	const {ingredients,loading} = useIngredients()
	const filters = useFilters()
	useQueryFilters(filters)

	const items = ingredients.map((ingredient) => (
		{
			value: String(ingredient.id),
			text: ingredient.name
		}
	))

	const updatePrice = (prices: number[]) => {
		filters.setPrices('priceFrom',prices[0]);
		filters.setPrices('priceTo',prices[1])
	}
  return (
    <div className={className}>
      <Title text='Фильтрация' size='sm' className='mb-5 font-bold'/>

      {/* Top checkboxes */}
	  <CheckboxFilterGroup 
				title='Тип теста'
				name='pizzaTypes'	
				loading={loading}
				onClickCheckbox={filters.setPizzaTypes}
				selected={filters.pizzaTypes}
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
				onClickCheckbox={filters.setSizes}
				selected={filters.sizes}
				className='mb-5'
				items={[
					{text: '20 см',value:"20"},
					{text: '30 см',value:"30"},
					{text: '40 см',value:"40"},
				]}	
			/>

      {/* Filter prices */}
      <div className="mt-5 border-y border-y-neutral-100 py-6 pb-7">
        <p className='font-bold mb-3'>Цена от и до:</p>
        <div className="flex items-center gap-3 mb-5">
					<Input type='number' placeholder='0' min={0} max={1000} value={String(filters.prices.priceFrom)}
					onChange={(e)=> filters.setPrices('priceFrom',Number(e.target.value))}/>
					<Input type='number' min={100} max={1000} value={String(filters.prices.priceTo)}
					onChange={(e)=> filters.setPrices('priceTo',Number(e.target.value))}/>
        </div>
				<RangeSlider min={0} max={1000} step={10} 
					value={[filters.prices.priceFrom || 0, filters.prices.priceTo || 1000]} 
					onValueChange={updatePrice}/>
			</div>

      <CheckboxFilterGroup 
				title='Ингридиенты'
				name='ingredients'
				limit={6}
				defaultItems={items.slice(0, 6)}
				items={items}
				loading={loading}
				onClickCheckbox={filters.setSelectedIngredients}
				selected={filters.selectedIngredients}
			/>
    </div>
  );
};