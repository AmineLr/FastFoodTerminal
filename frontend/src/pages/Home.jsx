import './Home.scss'
import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import CategoriesDataService from '../services/categories'
import Card from '../components/Card'

const Home = () => {

	const [categories, setCategories] = useState()

	useEffect(() => {
		CategoriesDataService.getAll()
		.then(res => {
			// console.log(res.data)
			setCategories(res.data)
		})
		.catch(err => console.log(err))
	}, [])


	if(!categories){
		return null
	}

	return (
		<div className="homePage">

		

			<h1>Selectionner une catégorie : </h1>

			<div className="listeElement">
				{
					categories.map(categorie => (
						
						<Link key={categorie._id} to={"/meals/" + categorie._id}>
								{console.log(categorie.urlimg)}
							<Card  data={categorie} />
						</Link>
					))
				}
			</div>

		</div>
	)
}

export default Home
