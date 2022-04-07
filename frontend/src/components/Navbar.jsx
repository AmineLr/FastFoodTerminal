import './Navbar.scss'
import React from 'react'

const Navbar = () => {
	return (
		<div id="navbar">
			<div className="navbarWrapper">

				<div className="basket">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
						<path d="M486 199a52 52 0 00-41-21h-37c-3-93-70-167-152-167S107 85 103 178H67c-15 0-30 7-41 20a74 74 0 00-13 63l43 191c7 29 29 49 55 49h290c26 0 48-20 55-49l43-191c5-22 0-46-13-63zM256 52c60 0 108 56 112 126H144c4-70 52-126 112-126zm203 200l-43 191c-2 10-9 17-15 17H111c-6 0-13-7-15-17L53 252c-3-10-4-34 14-34h378c19 1 16 24 14 34z"/>
						<path d="M155 259c-12 0-21 9-21 21v127a20 20 0 1041 0V280c0-12-9-21-20-21zM254 259c-12 0-21 9-21 21v127a20 20 0 1041 0V280c0-12-9-21-20-21zM352 259c-11 0-20 9-20 21v127a20 20 0 1041 0V280c0-12-9-21-21-21z"/>
					</svg>
				</div>
				<div className="promocode">
					<button>CODE PROMO</button>
				</div>
				<div className="price"><span>0.00</span> €</div>

			</div>
		</div>
	)
}

export default Navbar
