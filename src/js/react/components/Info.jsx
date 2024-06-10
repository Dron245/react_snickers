import { useContext } from "react"
import React from 'react'
import AppContext from "../context"

export default function Info ({title, description, image}) {
	const {setCartView} = useContext(AppContext)

	return (
		<div className="cart-empty">
			<img src={image} alt=""/>
			<h2>{title}</h2><br />
			<p>{description}</p>
			<button onClick={() => setCartView(false)}>Вернуться назад</button>
		</div>
	)
}

