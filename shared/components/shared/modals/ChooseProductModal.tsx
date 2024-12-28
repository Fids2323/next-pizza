'use client'
import React from 'react';
import { cn } from '../../../lib/utils';
import { Dialog, DialogContent } from '../../ui/dialog';
import { useRouter } from 'next/navigation';
import { ChooseProductForm } from '../ChooseProductForm';
import { ProductWithRelation } from '../../../../@types/prisma';
import { ChoosePizzaForm } from '../ChoosePizzaForm';


interface Props {
    className?: string;
    product: ProductWithRelation;
}

export const ChooseProductModal: React.FC<Props> = ({ className, product }) => {
	const router = useRouter();
	const isPizzaForm = Boolean(product.items[0].pizzaType);
  return (
		<Dialog open={Boolean(product)} onOpenChange={() => router.back()}>
		{/* <DialogTitle/> */}
        <DialogContent className={cn(className, 'p-0 w-[1060px] max-w-[1060px] min-h-[500px] bg-white overflow-hidden')}>
				{
					isPizzaForm ? (
						<ChoosePizzaForm 
							imageUrl={product.imageUrl} 
							ingredients={product.ingredients} 
							name={product.name}
							items={product.items}
						/>
					) : (
						<ChooseProductForm 
							imageUrl={product.imageUrl} 
							name={product.name} 
						/>
					)
				}
        </DialogContent>
    </Dialog>
  );
};