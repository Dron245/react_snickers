import React from "react";
import styles from "./Card.module.scss";
import { useContext, useState } from "react";
import ContentLoader from "react-content-loader"
import AppContext from "../../context.js";

export default function Card(
	{onFavorite,
	// parendId,
	imageUrl, 
	id, 
	title, 
	cost, 
	onAddCart, 
	favorited = false, 
	loading = false}) {
	const {isItemAdded} = useContext(AppContext)
	const [isFavorite, setIsFavorite] = useState(favorited) //фавориты
	const obj = {id, parendId:id, title, cost, imageUrl}
	const addPlus = () => {
		onAddCart(obj)
	}
	const addFavorite= () => {
		onFavorite(obj)
		setIsFavorite(!isFavorite)
	}
	return (
		<>
		{
			loading ? <ContentLoader
			width={140}
			height={265}
			viewBox="0 0 150 265"
			backgroundColor="#e5e5e5"
			foregroundColor="#d3d3d3"
			>
			<rect x="9" y="18" rx="0" ry="0" width="96" height="67" /> 
			<rect x="13" y="100" rx="0" ry="0" width="92" height="11" /> 
			<rect x="13" y="122" rx="0" ry="0" width="64" height="10" /> 
			<rect x="13" y="147" rx="0" ry="0" width="63" height="12" /> 
			<rect x="87" y="124" rx="0" ry="0" width="18" height="26" />
			</ContentLoader> :
			<article className="page__item card">
				<button onClick={addFavorite} className="card__favorite">
					<img src={isFavorite ? "@img/favorite-like.svg" : "@img/favorite.svg"} alt=""/>
				</button>
				<img src={imageUrl} alt=""/>
				<h3 className="card__text">{title}</h3>
				<div className="card__block">
					<div className="card__left">
						<span className="card__cost">цена</span>
						<span className="card__cost-number">{cost} руб</span>
					</div>
					{onAddCart && <button className="card__button" >
						<img onClick={addPlus} src={isItemAdded(id) ? "@img/add-complite.svg" : "@img/add.svg"} alt=""/>
					</button>}
				</div>
			</article>
		}
		</>
	)
}