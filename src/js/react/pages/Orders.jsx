import React, { useContext, useState, useEffect } from "react"
import axios from "axios";
import Card from "../components/Card/Card.jsx";
import  AppContext  from "../context.js";


export default function Orders() {
	const {onAddToCart, onAddToFavorite} = useContext(AppContext)
	const [orders, setOrders] = useState([]) //
	const [isLoading, setisLoading] = useState(false) //загрузка страницы

	useEffect(() => {
		(async () => {
			try {
				const {data} = await axios.get('https://666020395425580055b251b6.mockapi.io/Orders')
				setOrders(data.map(obj => obj.items).flat())
				setisLoading(false)
			} catch (error) {
				alert('Ошибка при запросе заказов')
			}
		})()
	}, [])
	
	return (
		<main>
			<section className="page">
				<div className="page__container">
					<div className="page__top">
						<h1 className="page__title">Мои заказы</h1>
					</div>
					<div className="page__body">
						{orders.map((item, index) =>
						<Card
							key={index}
							onFavorite={(obj) => {onAddToFavorite(obj)}}
							onAddCart = {(obj) => {onAddToCart(obj)}}
							{...item}
							loading= {isLoading}
						/>
						)}
					</div>
				</div>
			</section>
		</main>
	)
}