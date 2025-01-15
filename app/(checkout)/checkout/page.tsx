'use client'

import { zodResolver } from '@hookform/resolvers/zod';
import { CheckoutItem, CheckoutItemDetails, CheckoutSidebar, Container, Title, WhiteBlock } from "../../../shared/components/shared";
import { useCart } from "../../../shared/hooks";
import { useForm, SubmitHandler, FormProvider } from "react-hook-form"
import { CheckoutAddressForm, CheckoutCart, CheckoutPersonalForm } from '../../../shared/components/shared/checkout';
import { checkoutFormSchema, CheckoutFormValues } from '../../../shared/constants';
import toast from 'react-hot-toast';


export default function CheckoutPage() { 
	const [submitting, setSubmitting] = React.useState(false);
	const {totalAmount,updateItemQuantity,items,removeCartItem} = useCart()

	const onClickCountButton = (id: number, quantity: number, type: 'plus' | 'minus') => { 
		const newQuantity = type === 'plus' ? quantity + 1 : quantity - 1;
		updateItemQuantity(id, newQuantity)
	}

	const form = useForm<CheckoutFormValues>({
		resolver: zodResolver(checkoutFormSchema),
		defaultValues: {
		  email: '',
		  firstName: '',
		  lastName: '',
		  phone: '',
		  address: '',
		  comment: '',
		},
	  });

	  const onSubmit = async (data: CheckoutFormValues) => {
		try {
		  setSubmitting(true);
	
		  //const url = await createOrder(data);
	
		  toast.error('Заказ успешно оформлен! 📝 Переход на оплату... ', {
			icon: '✅',
		  });
	
		//   if (url) {
		// 	location.href = url;
		//   }
		} catch (err) {
		  console.log(err);
		  setSubmitting(false);
		  toast.error('Не удалось создать заказ', {
			icon: '❌',
		  });
		}
	  };


	return (
    <Container className="mt-10">
			<Title text="Оформление заказа" className="font-extrabold mb-8 text-[36px]" />
			<FormProvider {...form}>
				<form onSubmit={form.handleSubmit(onSubmit)}>
					<div className="flex gap-10">
						{/* Left block */}
						<div className="flex flex-col gap-10 flex-1 mb-20">
							<CheckoutCart
								onClickCountButton={onClickCountButton}
								removeCartItem={removeCartItem}
								items={items}
							/>
							<CheckoutPersonalForm/>
							<CheckoutAddressForm/>
						</div>

						{/* Right block */}
						<div className="w-[450px]">
							<CheckoutSidebar totalAmount={totalAmount}/>
						</div>
					</div>
				</form>
			</FormProvider>
		</Container>
	)
}