import React, { useState } from "react";

export default function Driwer({onClose, onRemove, itemsCart = []}) {

	return (
		<div className="overlay">
				<div className="driwer">
					<div className="driwer__top">
						<h3 className="driwer__title">Корзина</h3>
						<div onClick={onClose} className="driwer__close">
							<img src="@img/close.svg" alt=""/>
						</div>
					</div>
					{itemsCart.length > 0 ? 
					<>
						<ul className="driwer__list">
							{itemsCart.map((obj) => 
									<li key={obj.id} className="driwer__item">
										<div className="driwer__img">
											<img src={obj.imageUrl} alt=""/>
										</div>
										<div className="driwer__content">
											<h3 className="card__text">{obj.title}</h3>
											<span className="actions-header__text"><strong>{obj.cost}</strong></span>
										</div>
										<button onClick={() => onRemove(obj.id)} className="driwer__close">
											<img src="@img/close.svg" alt=""/>
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
									<span className="bottom__number">21 498 руб.</span>
								</div>
								<div className="bottom__cost">
									<span className="bottom__total">Налог 5%:</span>
									<div></div>
									<span className="bottom__number">1 498 руб.</span>
								</div>
							</div>
							<button className="bottom__button">
								<span>Оформить заказ</span>
								<img src="@img/arrow-order.svg" alt=""/>
							</button>
						</div>
					</> :
						<div>
							<h2>Корзина пустая</h2>
							<button onClick={onClose}>Вернуться назад</button>
						</div>
					}
				</div>
			</div>
	)
}
