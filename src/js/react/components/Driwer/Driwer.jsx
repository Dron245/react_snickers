import React, { useState } from "react";
import Info from "../info.jsx";
import axios from "axios";
import { useCart } from "../../hoocks/useCart.jsx";
import "./Driwer.module.scss"

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export default function Driwer({onClose, onRemove, itemsCart = [], opened}) {
	const [orderId, setOrderId] = useState(null);
	const [isOrderComplite, setisOrderComplite] = useState(false);
	const [isLoading, setisLoading] = useState(false);
	const {cartItems, setCartItems, totalPrice} = useCart()
	const onClickOrder = async () => {
		try {
			setisLoading(true)
			const{data} = await axios.post("https://666020395425580055b251b6.mockapi.io/Orders", {items:cartItems});
			setOrderId(data.id)
			setisOrderComplite(true);
			setCartItems([]);
			for (let i = 0; i < cartItems.length; i++) {
				console.log(1);
				const element = cartItems[i];
				await axios.delete("https://6659f9acde346625136ea097.mockapi.io/Cart/" + element.id);
				await delay(100)
			}
			
		} catch (error) {
			alert('Ошибка при создании заказа :(')
			console.log(error);
		}
		setisLoading(false)
	}

	return (
		<>
		<div className={`overlay ${opened ? "driwer-open" : ""}`} onClick={onClose}></div>
		<div className="driwer">
				<div className="driwer__top">
					<h3 className="driwer__title">Корзина</h3>
					<div onClick={onClose} className="driwer__close">
						<img src="img/close.svg" alt=""/>
					</div>
				</div>
				{itemsCart.length > 0 ? 
				<>
					{/* {console.log(itemsCart)} */}
					<ul className="driwer__list">
						{itemsCart.map((obj) => 
								<li key={obj.title} className="driwer__item">
									<div className="driwer__img">
										<img src={obj.imageUrl} alt=""/>
										{/* {console.log(obj.cid)} */}
										{/* {console.log(typeof(obj.cid))} */}
									</div>
									<div className="driwer__content">
										<h3 className="card__text">{obj.title}</h3>
										<span className="actions-header__text"><strong>{obj.cost}</strong></span>
									</div>
									<button onClick={() => onRemove(obj.id)} className="driwer__close">
										<img src="img/close.svg" alt=""/>
									</button>
								</li>
							)
							
						}
						
					</ul>
					<div className="driwer__bottom bottom">
						<div className="bottom__body">
							<div className="bottom__cost">
								<span className="bottom__total">Итого</span>
								<div></div>
								<span className="bottom__number">{totalPrice} руб.</span>
							</div>
							<div className="bottom__cost">
								<span className="bottom__total">Налог 5%:</span>
								<div></div>
								<span className="bottom__number">{totalPrice * 0.05} руб.</span>
							</div>
						</div>
						<button disabled={isLoading} onClick={onClickOrder} className="bottom__button">
							<span>Оформить заказ</span>
							<img src="img/arrow-order.svg" alt=""/>
						</button>
					</div>
				</> :
					<Info 
						title= {isOrderComplite ? "Заказ оформлен" : "Корзина пустая"}
						description={ isOrderComplite ? `Ваш заказ #${orderId} скоро будет передан курьерской доставке` : "Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ."}
						image = {isOrderComplite ? "img/order-complite.jpg" : "img/cart-empty.png"}/>
				}
			</div>
		</>
	)
}
