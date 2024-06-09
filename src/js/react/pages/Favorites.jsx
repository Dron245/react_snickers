import React, { useContext } from "react"
import Card from "../components/Card/Card.jsx";
import  AppContext  from "../context.js";
export default function Favorites({ onAddToFavorite}) {
	const {favorites} = useContext(AppContext)
	return (
		<main>
			<section className="page">
				<div className="page__container">
					<div className="page__top">
						<h1 className="page__title">Мои закладки</h1>
					</div>
					<div className="page__body">
						{favorites.map((item, index) =>
						<Card
							key={index}
							onFavorite={onAddToFavorite}
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