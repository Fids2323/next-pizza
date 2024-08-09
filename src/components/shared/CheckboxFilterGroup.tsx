'use client'

import React, { useState } from 'react';
import { FilterCheckbox, FilterCheckboxProps } from './FilterCheckbox';
import { Input } from '../ui';

type Item = FilterCheckboxProps;

interface Props {
    title:string;
    items:Item[];
    defaultItems:Item[];
    limit?:number;
    searchInputPlaceholder?:string;
    onChange?: (values:string[]) => void;
    defaultValue?: string[];
    className?: string;
}

export const CheckboxFilterGroup: React.FC<Props> = ({
  title,
  items,
  defaultItems,
  limit =5,
  searchInputPlaceholder = "Поиск...",
  onChange,
  defaultValue,
  className}) => {

  const [showAll, setShowAll] = useState(false)
  const [searchValue, setSearchValue] = useState("");
    
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
            onCheckedChange={(id)=> console.log(id)}
            checked= {false}
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