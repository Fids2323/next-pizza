'use client'

import React from 'react';
import { Title } from './Title';
import {RangeSlider} from './RangeSlider'
import { Input } from '../ui';
import { CheckboxFilterGroup } from './CheckboxFilterGroup';
import { FilterCheckbox } from './FilterCheckbox';
import { useFilterIngredients } from '../../../hooks/useFilterIngredients';

interface Props {
className?: string;
}

export const Filters: React.FC<Props> = ({ className }) => {

	const { ingredients } = useFilterIngredients();
	
	const items = ingredients.map((ingredient) => (
		{
			value: String(ingredient.id),
			text: ingredient.name
		}
	))

  return (
    <div className={className}>
      <Title text='Фильтрация' size='sm' className='mb-5 font-bold'/>

      {/* Top checkboxes */}
      <div className="flex flex-col gap-4">
        <FilterCheckbox text='Можно собирать' value='1'/>
        <FilterCheckbox text='Новинки' value='2'/>
      </div>

      {/* Filter prices */}
      <div className="mt-5 border-y border-y-neutral-100 py-6 pb-7">
        <p className='font-bold mb-3'>Цена от и до:</p>
        <div className="flex items-center gap-3">
          <Input type='number' placeholder='0' min={0} max={1000} defaultValue={0}/>
          <Input type='number'  min={100} max={1000} />
        </div>
			</div>
			
      <RangeSlider min={0} max={5000} step={10} value={[0,5000]} />
			
			<div className="mt-5 border-y border-y-neutral-100 py-6 pb-7">
      <CheckboxFilterGroup 
				title='Ингредиенты'
				limit={6}
				defaultItems={items.slice(0, 6)}
				items={items} />
				</div>
    </div>
  );
};