import React, { useContext } from "react"
import Card from "../components/Card/Card.jsx";

export default function Home({searchValue,
	onChangeSearchInput,
	items,
	onAddToFavorite,
	setSearchValue,
	onAddToCart,
	isLoading}) {
		const renderItems = () => {
			const filteredItems = items.filter(item  => item.title.toLowerCase().includes(searchValue));
			return (isLoading ? [...Array(8)] : filteredItems)
				.map((item, index) => (
				<Card
				key={index}
				onFavorite={(obj) => {onAddToFavorite(obj)}}
				onAddCart = {(obj) => {onAddToCart(obj)}}
				{...item}
				loading= {isLoading}
				/>
				)
			)
		}

	return (
		<main>
			<section className="page">
				<div className="page__container">
					<div className="page__top">
						<h1 className="page__title">{searchValue ? `Поиск по: ${searchValue}` : "Все кроссовки"}</h1>
						<div className="page__search">
							<img src="img/search-input.svg" alt=""/>
							{searchValue && <img onClick={() => setSearchValue('')} className="page__input-close" src="img/close.svg" alt="Clear"/>}
							<input value={searchValue} onChange={onChangeSearchInput} id="input" className="page__input" placeholder="Поиск" type="text" />
						</div>
					</div>
					<div className="page__body">
						{renderItems()}
					</div>
				</div>
			</section>
		</main>
	)
}