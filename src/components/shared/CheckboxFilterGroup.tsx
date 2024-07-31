import React from 'react';
import { FilterCheckbox, FilterCheckboxProps } from './FilterCheckbox';
import { Input } from '../ui';

type Item = FilterCheckboxProps;

interface Props {
    title:string;
    items:Item[];
    defaultItems?:Item[];
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
  return (
    <div className={className}>
      <p className='text-lg font-bold mb-3'>{title}</p>

      {/* Input search checkbox */}
      <div className="mb-5">
        <Input placeholder={searchInputPlaceholder} className='bg-gray-50 border-none'/>  
      </div>  

      {/* List checkbox */}
      <div className="flex flex-col gap-4 pr-2 max-h-96 overflow-auto scrollbar">
        {items.map((item,index)=>(
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
    </div>
  );
};