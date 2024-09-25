'use client'

import React, { useState } from 'react';
import { FilterCheckbox, FilterCheckboxProps } from './FilterCheckbox';
import { Input, Skeleton } from '../ui';

type Item = FilterCheckboxProps;

interface Props {
    title:string;
    items:Item[];
    defaultItems:Item[];
		limit?: number;
		loading?:boolean;
    searchInputPlaceholder?:string;
    onClickCheckbox?: (id:string) => void;
    defaultValue?: string[];
		className?: string;
		selectedIds?: Set<string>
		name?: string;
}

export const CheckboxFilterGroup: React.FC<Props> = ({
  title,
  items,
  defaultItems,
  limit =5,
	searchInputPlaceholder = "Поиск...",
	loading,
  onClickCheckbox,
	defaultValue,
	selectedIds,
	name,
  className}) => {

  const [showAll, setShowAll] = useState(false)
  const [searchValue, setSearchValue] = useState("");
    
	if (loading) {
		return (
			<div className={className}>
				<p className='text-lg font-bold mb-3'>{title}</p>
				{
					...Array(limit).fill(0).map((_, index) => ( 
						<Skeleton key={index} className='h-6 mb-4 rounded-[8px]'/>
					))
				}
				<Skeleton className='h-6 w-28 rounded-[8px]'/>
			</div>
		)
	}

  const list = showAll ? items.filter((item) => item.text.toLowerCase().includes(searchValue.toLowerCase())) : defaultItems.slice(0,limit);
  
  const handleChangeSearchInput = ( e:React.ChangeEvent<HTMLInputElement> ) => {
    setSearchValue(e.target.value)
  }
  

  return (
    <div className={className}>
      <p className='text-lg font-bold mb-3'>{title}</p>

    {/* Input search checkbox */}
    {
      showAll && (
        <div className="mb-5">
          <Input onChange={handleChangeSearchInput} placeholder={searchInputPlaceholder} className='bg-gray-50 border-none'/>  
        </div>  
      )
    }

      {/* List checkbox */}
      <div className="flex flex-col gap-4 pr-2 max-h-96 overflow-auto scrollbar">
        {list.map((item,index)=>(
          <FilterCheckbox 
            key={index}
            text = {item.text}
            value ={item.value}
            endAdornment={item.endAdornment}
            onCheckedChange={()=> onClickCheckbox?.(item.value)}
						checked={selectedIds?.has(item.value)}
						name={name}
          />
        ))}
      </div>

        {items.length > limit && (
          <div className={showAll ? 'border-t border-t-neutral-100 mt-4' : ''}>
            <button onClick={() => setShowAll( !showAll )} className='text-primary mt-3'>
              {showAll ? 'Скрыть' : '+ Показать все'}
            </button>
          </div>
        )}

    </div>
  );
};