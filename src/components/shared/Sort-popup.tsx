import { cn } from '@/lib/utils';
import { ArrowUpDown } from 'lucide-react';
import React from 'react';

interface Props {
className?: string;
}

export const SortPopup: React.FC<Props> = ({ className }) => {
	return (
		<div className={cn('inline-flex h-[52px] items-center bg-gray-50 px-5 rounded-2xl cursor-pointer', className)}>
			<ArrowUpDown size={16} />
			<b>Сортировка:</b>
			<b className='text-primary'>рейтингу</b>
		</div>
	);
};