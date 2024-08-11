import { Container, Title, TopBar, Filters, ProductsGroupList } from "@/components/shared";


export default function Home() {
  return (
		<>
			<Container className="mt-10">
				<Title text="Все пиццы" size="lg" className="font-extrabold" />
			</Container>
			<TopBar />
			<Container className="pb-14 mt-10">
				<div className="flex gap-[80px]">
					{/* Filters */}
					<div className="w-[250px]">
						<Filters/>
					</div>


					{/* List groceries */}
					<div className="flex-1">
						<div className="flex flex-col gap-16">
							<ProductsGroupList title="Пиццы"
							items={
								[
									{
										id: 1,
										name: "Чизбургер-пицца",
										imageUrl: "https://media.dodostatic.net/image/r:233x233/11EE7D614CBE0530B7234B6D7A6E5F8E.avif",
										price:550,
										items: [{ price: 550 }]
									},
									{
										id: 2,
										name: "Чизбургер-пицца",
										imageUrl: "https://media.dodostatic.net/image/r:233x233/11EE7D614CBE0530B7234B6D7A6E5F8E.avif",
										price:550,
										items: [{ price: 550 }]
									},
									{
										id: 3,
										name: "Чизбургер-пицца",
										imageUrl: "https://media.dodostatic.net/image/r:233x233/11EE7D614CBE0530B7234B6D7A6E5F8E.avif",
										price:550,
										items: [{ price: 550 }]
									},
									{
										id: 4,
										name: "Чизбургер-пицца",
										imageUrl: "https://media.dodostatic.net/image/r:233x233/11EE7D614CBE0530B7234B6D7A6E5F8E.avif",
										price:550,
										items: [{ price: 550 }]
									},
									{
										id: 5,
										name: "Чизбургер-пицца",
										imageUrl: "https://media.dodostatic.net/image/r:233x233/11EE7D614CBE0530B7234B6D7A6E5F8E.avif",
										price:550,
										items: [{ price: 550 }]
									},
									{
										id: 6,
										name: "Чизбургер-пицца",
										imageUrl: "https://media.dodostatic.net/image/r:233x233/11EE7D614CBE0530B7234B6D7A6E5F8E.avif",
										price:550,
										items: [{ price: 550 }]
									},
									{
										id: 7,
										name: "Чизбургер-пицца",
										imageUrl: "https://media.dodostatic.net/image/r:233x233/11EE7D614CBE0530B7234B6D7A6E5F8E.avif",
										price:550,
										items: [{ price: 550 }]
									},
									{
										id: 8,
										name: "Чизбургер-пицца",
										imageUrl: "https://media.dodostatic.net/image/r:233x233/11EE7D614CBE0530B7234B6D7A6E5F8E.avif",
										price:550,
										items: [{ price: 550 }]
									},
									{
										id: 9,
										name: "Чизбургер-пицца",
										imageUrl: "https://media.dodostatic.net/image/r:233x233/11EE7D614CBE0530B7234B6D7A6E5F8E.avif",
										price:550,
										items: [{ price: 550 }]
									},
								]
							}
							categoryId={1}
							/>

<ProductsGroupList title="Комбо"
							items={
								[
									{
										id: 1,
										name: "Чизбургер-пицца",
										imageUrl: "https://media.dodostatic.net/image/r:233x233/11EE7D614CBE0530B7234B6D7A6E5F8E.avif",
										price:550,
										items: [{ price: 550 }]
									},
									{
										id: 2,
										name: "Чизбургер-пицца",
										imageUrl: "https://media.dodostatic.net/image/r:233x233/11EE7D614CBE0530B7234B6D7A6E5F8E.avif",
										price:550,
										items: [{ price: 550 }]
									},
									{
										id: 3,
										name: "Чизбургер-пицца",
										imageUrl: "https://media.dodostatic.net/image/r:233x233/11EE7D614CBE0530B7234B6D7A6E5F8E.avif",
										price:550,
										items: [{ price: 550 }]
									},
									{
										id: 4,
										name: "Чизбургер-пицца",
										imageUrl: "https://media.dodostatic.net/image/r:233x233/11EE7D614CBE0530B7234B6D7A6E5F8E.avif",
										price:550,
										items: [{ price: 550 }]
									},
									{
										id: 5,
										name: "Чизбургер-пицца",
										imageUrl: "https://media.dodostatic.net/image/r:233x233/11EE7D614CBE0530B7234B6D7A6E5F8E.avif",
										price:550,
										items: [{ price: 550 }]
									},
									{
										id: 6,
										name: "Чизбургер-пицца",
										imageUrl: "https://media.dodostatic.net/image/r:233x233/11EE7D614CBE0530B7234B6D7A6E5F8E.avif",
										price:550,
										items: [{ price: 550 }]
									},
									{
										id: 7,
										name: "Чизбургер-пицца",
										imageUrl: "https://media.dodostatic.net/image/r:233x233/11EE7D614CBE0530B7234B6D7A6E5F8E.avif",
										price:550,
										items: [{ price: 550 }]
									},
									{
										id: 8,
										name: "Чизбургер-пицца",
										imageUrl: "https://media.dodostatic.net/image/r:233x233/11EE7D614CBE0530B7234B6D7A6E5F8E.avif",
										price:550,
										items: [{ price: 550 }]
									},
									{
										id: 9,
										name: "Чизбургер-пицца",
										imageUrl: "https://media.dodostatic.net/image/r:233x233/11EE7D614CBE0530B7234B6D7A6E5F8E.avif",
										price:550,
										items: [{ price: 550 }]
									},
								]
							}
							categoryId={2}
							/>
						</div>
					</div>
				</div>
			</Container>
		</>
  );
}
