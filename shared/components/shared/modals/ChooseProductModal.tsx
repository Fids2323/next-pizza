'use client'
import { cn } from '../../../lib/utils';
import { Dialog, DialogContent } from '../../ui/dialog';
import { ChooseProductForm } from '../ChooseProductForm';
import { ProductWithRelation } from '../../../../@types/prisma';
import { ChoosePizzaForm } from '../ChoosePizzaForm';
import { useCartStore } from '../../../store';
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation';


interface Props {
    className?: string;
    product: ProductWithRelation;
}

export const ChooseProductModal: React.FC<Props> = ({ className, product }) => {
	const router = useRouter();
	const firstItem = product.items[0]
	const isPizzaForm = Boolean(firstItem.pizzaType);
	const [addCartItem, loading] = useCartStore((state) => [state.addCartItem, state.loading]);

	// const onAddProduct = () => {
	// 	addCartItem({
	// 		productItemId: firstItem.id
	// 	})
	// };
	
	// const onAddPizza = async(productItemId: number, ingredients: number[]) => {
	// 	try {
	// 		await addCartItem({
	// 			productItemId,
	// 			ingredients
	// 		})
	// 		toast.success('Пицца добавлена в корзину')
	// 		router.back()
	// 	} catch (error) {
	// 		console.error(error);
	// 		toast.error('Не удалось добавить пиццу в корзину')
	// 	}
	// };

	const onSubmit = async(productItemId?: number, ingredients?: number[]) => {
		try {
			const itemId = productItemId ?? firstItem.id
			await addCartItem({
				productItemId: itemId,
				ingredients
			});
			toast.success(product.name +' добавлен в корзину')
			router.back()
		} catch (error) {
			console.error(error);
			toast.error('Не удалось добавить товар в корзину')
		}
	}

  return (
		<Dialog open={Boolean(product)} onOpenChange={() => router.back()}>
        <DialogContent className={cn(className, 'p-0 w-[1060px] max-w-[1060px] min-h-[500px] bg-white overflow-hidden')}>
				{
					isPizzaForm ? (
						<ChoosePizzaForm 
							imageUrl={product.imageUrl} 
							ingredients={product.ingredients} 
							name={product.name}
							items={product.items}
							onSubmit={onSubmit}
							loading={loading}
						/>
					) : (
						<ChooseProductForm 
							imageUrl={product.imageUrl} 
							name={product.name} 
							price={firstItem.price}
							onSubmit={onSubmit}
							loading={loading}
						/>
					)
				}
        </DialogContent>
    </Dialog>
  );
};