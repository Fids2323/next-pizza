import React from 'react';
import { CartItemProps } from './cart-item-details/CartItemDetailsTypes';
import * as CartItem from './cart-item-details'
import { cn } from '../../lib/utils';
import { CountButton } from './CountButton';
import { Trash2Icon } from 'lucide-react';

interface Props extends CartItemProps{
	onClickCountButton?: (type: 'plus' | 'minus') => void;
	onClickRemove?: () => void;
	className?: string;
}

export const CartDrawerItem: React.FC<Props> = ({
	id,
	imageUrl,
	name,
	price,
	quantity,
	details,
	onClickCountButton,
	onClickRemove,
	className }) => {
	return (
		<div className={cn('flex bg-white p-5 gap-6', className)}>
			<CartItem.Image src={imageUrl} />
			
			<div className="flex-1">
				<CartItem.Info details={details} name={name} />
				<hr className='my-3' />
				<div className="flex items-center justify-between">
					<CountButton onClick={onClickCountButton} value={quantity} />
					<div className="flex items-center gap-3">
						<CartItem.Price value={price} />
						<Trash2Icon
							onClick={onClickRemove}
							className='text-gray-400 cursor-pointer hover:text-gray-600' size={16} />
					</div>
				</div>
			</div>
		</div>
	);
};