import { notFound } from 'next/navigation';
import { prisma } from '../../../../prisma/prisma-client';
import { Container, GroupVariants, PizzaImage, Title } from '../../../../shared/components/shared';


export default async function ProductPage ({ params : {id} } : { params : {id : string} }) {
	const product = await prisma.product.findFirst({where:{id: Number(id)}})
	  if(!product)
	  	return notFound();

	return (
		<Container className='flex flex-col my-10'>
			<div className="flex flex-1">
				<PizzaImage size={40} imageUrl={product.imageUrl}/>
				<div className="w-[490px] bg-[#f8f7f7] p-7">
					<Title text={product.name} size="md" className="font-extrabold mb-1"/>
					<p className='text-gray-400'>Lorem  Lorem Lorem</p>
					<GroupVariants items = {[
						{
							name: 'Маленькая',
							value: '1',
							disabled: false
						},
						{
							name: 'Средняя',
							value: '2',
							disabled: false
						},
						{
							name: 'Большая',
							value: '3',
							disabled: true
						},
					]}
					/>
				</div>
			</div>
		</Container>
	);
};