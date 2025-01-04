import React from 'react';
import { Button } from '../ui';
import { ArrowRight, ShoppingCart } from 'lucide-react';
import { CartDrawer } from './CartDrawer';

interface Props {
	className?: string;
}

export const CartButton: React.FC<Props> = ({ className }) => {
	return (
		<CartDrawer>
			<Button className="group relative">
				<b>520 ₽</b>
				<span className='mx-3 w-[1px] bg-white/30 h-full'></span>
				<div className="flex items-center gap-1 transition duration-300 group-hover:opacity-0">
					<ShoppingCart size={16} />
					<b>3</b>
				</div>
				<ArrowRight className='absolute opacity-0 w-5 right-5 -translate-x-2 transition duration-300 group-hover:opacity-100 group-hover:translate-x-0'/>
			</Button>
		</CartDrawer>
	);
};