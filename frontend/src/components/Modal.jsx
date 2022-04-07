import './Modal.scss'
import React from 'react'

const Modal = ({children}) => {
	return (
		<div className="modalBackground">
			<div className="modalContent">
				{children}
			</div>
		</div>
	)
}

export default Modal
