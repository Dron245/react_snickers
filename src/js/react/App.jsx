import React, { useEffect, useState } from "react";
import Header from "./components/Header.jsx";
import Home from "./pages/Home.jsx";
import Driwer from "./components/Driwer.jsx";
import Favorites from "./pages/Favorites.jsx";
import axios from "axios";
import {Route, Routes} from "react-router-dom";
import  AppContext  from "./context.js"


const App = () => {
	
	const [cartItems, setCartItems] = useState([])  //Добавление товара в корзину
	const [cartView, setCartView] = useState(false) //Появление/скрытие корзины
	const [items, setItems] = useState([]) //Каталог
	const [searchValue, setSearchValue] = useState('') //Работа с поиском
	const [favorites, setFavorites] = useState([]) //фавориты список
	const [isLoading, setisLoading] = useState(false) //загрузка страницы

	useEffect(() => {
		async function fethData() {
			setisLoading(true)
			//Выводим список выбранных товаров в корзине
			const cartResp = await axios.get('https://6659f9acde346625136ea097.mockapi.io/Cart');
			// Выводим избранные кроссовки на соответсвующей странице
			const favoriteResp = await axios.get('https://666020395425580055b251b6.mockapi.io/favorites');
			//Выводим спиоск товаров
			const itemsResp = await axios.get('https://6659f9acde346625136ea097.mockapi.io/Items');
			
			setisLoading(false)

			setCartItems(cartResp.data);
			setFavorites(favoriteResp.data);
			setItems(itemsResp.data);
		}

		fethData()
	}, [])
	
	const onAddToCart = (obj) => {
		if (cartItems.find(cartobj => Number(cartobj.id) === Number(obj.id))) {
			axios.delete(`https://6659f9acde346625136ea097.mockapi.io/Cart/${obj.id}`)
			setCartItems(prew => prew.filter(item => Number(item.id) !== Number(obj.id)))
		} else {
			//Добавляем в бэкенд и в фронт список выбранных товаров
			axios.post('https://6659f9acde346625136ea097.mockapi.io/Cart', obj)
			// .then(res =>{setCartItems(prev => [...prev, res.data])})
			setCartItems(prew => [...prew, obj])
		}
	}

	const onRemoveItem = (id) => {
		//удаляю из корзины товары
		axios.delete(`https://6659f9acde346625136ea097.mockapi.io/Cart/${id}`)
		setCartItems(prew => prew.filter(item => item.id !== id))
	}

	const onChangeSearchInput = (e) => {
		setSearchValue(e.target.value)
	}
	

	const onAddToFavorite = async (obj) => {
		try {
			if (favorites.find(favobj => Number(favobj.id) === Number(obj.id))) {
				axios.delete(`https://666020395425580055b251b6.mockapi.io/favorites/${obj.id}`)
				setFavorites(prew => prew.filter(item => Number(item.id) !== Number(obj.id)))
			} else {
				//отправляю в бэкенд избранные кроссовки
				const {data} = await axios.post('https://666020395425580055b251b6.mockapi.io/favorites', obj)
				setFavorites(prew => [...prew, data])
			}
		} catch (error) {
			alert('Не удалось добавить в фавориты')
		}
	}

	const isItemAdded = (id) => {
		return cartItems.some(obj => Number(obj.id) === Number(id))
		}

	return (
		<AppContext.Provider value={{cartItems, favorites, items, isItemAdded, onAddToFavorite, setCartView, setCartItems}}>
		<>
			{cartView && <Driwer itemsCart={cartItems} onClose={()=>setCartView(false)} onRemove={onRemoveItem}/>}
			<Header onview={()=>setCartView(true)} />
			<Routes>
				<Route 
					path="/"
					element={
						<Home
							items={items}
							searchValue={searchValue}
							setSearchValue={setSearchValue}
							onAddToFavorite={onAddToFavorite}
							onChangeSearchInput={onChangeSearchInput}
							onAddToCart={onAddToCart}
							cartItems={cartItems}
							isLoading = {isLoading}
							/>
					}/>

				<Route
					path="/favorites"
					element= {<Favorites
						onAddToFavorite={onAddToFavorite}
						/>}
				/>
			</Routes>
		</>
		</AppContext.Provider>
	)
};

export default App