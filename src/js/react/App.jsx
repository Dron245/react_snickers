import React from "react";

const App = () => {
	return (
		<>
			<header className="header">
				<div className="header__container">
					<div className="header__left">
						<div className="header__img">
							<img src="img/logo.svg" alt="logo"/>
						</div>
						<div className="header__title-block">
							<h2 className="header__title">REACT SNEAKERS</h2>
							<div className="header__text">Магазин лучших кроссовок</div>
						</div>
					</div>
					<div className="header__actions actions-header">
						<div className="actions-header__item">
							<div className="actions-header__img">
								<img src="@img/cart.svg" alt="cart"/>
							</div>
							<span className="actions-header__text"><strong>1205 руб.</strong></span>
						</div>
						<div className="actions-header__item">
							<div className="actions-header__img">
								<img src="@img/favorite.svg" alt="favorite"/>
							</div>
							<span className="actions-header__text">Закладки</span>
						</div>
						<div className="actions-header__item">
							<div className="actions-header__img">
								<img src="@img/user.svg" alt="user"/>
							</div>
							<span className="actions-header__text">Профиль</span>
						</div>
					</div>
				</div>
			</header>
			<main>
				<section className="page">
					<div className="page__container">
						<h1 className="page__title">Все кроссовки</h1>
						<div className="page__body">
							<article className="page__item card">
								<img src="@img/01.jpg" alt=""/>
								<h3 className="card__text">Мужские Кроссовки Nike Blazer Mid Suede</h3>
								<div className="card__block">
									<div className="card__left">
										<span className="card__cost">цена</span>
										<span className="card__cost-number">12 999 руб.</span>
									</div>
									<button className="card__button">
										<img src="@img/add.svg" alt=""/>
									</button>
								</div>
							</article>
						</div>
					</div>
				</section>
			</main>
		</>
	)
	
};

export default App