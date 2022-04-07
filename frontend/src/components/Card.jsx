import './Card.scss'
import React, {useState} from 'react'
import Modal from './Modal'

const Card = ({data, modal = false}) => {
	const [modalVisible, setModalVisible] = useState(false)

	const handleClick = () => {
		setModalVisible(true)
	}

	return (
		<>
			<div className="card" onClick={handleClick}>
				<div className="imgContainer">
					<img src={data.urlImg} alt="" />
				</div>
				<h1>{data.name}</h1>
				{
					data.price &&
					<h2>{data.price}€</h2>
				}
				
			</div>

			{
				modalVisible && modal &&
				<Modal>
					<h1>{data.name}</h1>
					<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora officia corporis accusamus quidem obcaecati voluptates sapiente rerum quasi provident pariatur mollitia labore voluptas facilis, itaque quisquam ad? Dolorum, eaque accusantium.</p>
					<button onClick={() => {setModalVisible(false)}}>Annuler</button>
				</Modal>
			}

		</>
	)
}





export default Card
