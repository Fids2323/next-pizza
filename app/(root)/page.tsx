import { Container, Title, TopBar, Filters , ProductsGroupList, Stories } from "../../shared/components/shared";
import { prisma } from "../../prisma/prisma-client";
import { Suspense } from "react";
import { findPizzas } from "../../shared/lib";
import { GetSearchParams } from "../../shared/lib/find-pizzas";


export default async function Home({ searchParams }: { searchParams: GetSearchParams }) {

	const categories = await findPizzas(searchParams);
  	return (
		<>
			<Container className="mt-10">
				<Title text="Все пиццы" size="lg" className="font-extrabold" />
			</Container>
			{/* Top bar Categories and Sort*/}
			<TopBar categories={categories.filter((category) => category.products.length > 0 )}/>
			<Stories/>
			<Container className="pb-14 mt-10">
				<div className="flex gap-[80px]">
					{/* Filters */}
					<div className="w-[250px]">
						<Suspense>
							<Filters/>
						</Suspense>
					</div>
					{/* List groceries */}
					<div className="flex-1">
						<div className="flex flex-col gap-16">
						{
							categories.map((category) => (
								category.products.length > 0 && (
									<ProductsGroupList 
										title={category.name}
										key={category.id}
										categoryId={category.id}
										items={category.products}
									/>
								)
							))
						}
						</div>
					</div>
				</div>
			</Container>
		</>
  );
}
