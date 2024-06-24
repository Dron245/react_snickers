import React, { useContext, useState } from "react"
import Card from "../components/Card/Card.jsx";
import  AppContext  from "../context.js";
export default function Favorites({ onAddToFavorite, onAddToCart, isFavoriteAdded}) {
	const {favorites} = useContext(AppContext)
	// const [fav, setfav] =useState(true)
	// console.log(favorites);
	return (
		<main>
			<section className="page">
				<div className="page__container">
					<div className="page__top">
						<h1 className="page__title">Мои закладки</h1>
					</div>
					<div className="page__body f">
						
						{favorites.map((item, index) =>
						<Card
							key={index}
							onFavorite={onAddToFavorite}
							// onFavorite={(obj) => {onAddToFavorite(obj)}}
							onAddToCart = {(obj) => {onAddToCart(obj)}}
							// favorited = {(id) => isFavoriteAdded(id)}
							// test = {fav}
							favorited = {true}
							{...item}
						/>
						)}
					</div>
				</div>
			</section>
		</main>
	)
}