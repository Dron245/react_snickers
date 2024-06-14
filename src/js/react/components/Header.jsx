import React from "react";
import {Link} from "react-router-dom";
import { useCart } from "../hoocks/useCart.jsx";

export default function Header(props) {
	const { totalPrice} = useCart()
	return (
		<header className="header">
				<div className="header__container">
					<Link to={"/"}>
						<div className="header__left">
							<div className="header__img">
								<img src="img/logo.svg" alt="logo"/>
							</div>
							<div className="header__title-block">
								<h2 className="header__title">REACT SNEAKERS</h2>
								<div className="header__text">Магазин лучших кроссовок</div>
							</div>
						</div>
					</Link>
					<div className="header__actions actions-header">
						<div onClick={props.onview} className="actions-header__item actions-header__item_cart">
							<div className="actions-header__img">
								<img src="img/cart.svg" alt="cart"/>
							</div>
							<span className="actions-header__text"><strong>{totalPrice} руб.</strong></span>
						</div>
						<Link to="/favorites">
							<div className="actions-header__item">
								<div className="actions-header__img">
									<img src="img/favorite.svg" alt="favorite"/>
								</div>
								<span className="actions-header__text">Закладки</span>
							</div>
						</Link>
						<Link to="orders">
							<div className="actions-header__item">
								<div className="actions-header__img">
									<img src="img/user.svg" alt="user"/>
								</div>
								<span className="actions-header__text">Профиль</span>
							</div>
						</Link>
					</div>
				</div>
			</header>
	)
}