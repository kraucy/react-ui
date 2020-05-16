import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import useWindowDimensions from '../../hooks/width'
import { BrowserRouter as Router, Link } from 'react-router-dom';

const links = ['/', 'about', 'contact'];

function Header() {

	const [showLinks, setShowLinks] = useState(false)

	const ShowLinks = () => {
		
		const { width } = useWindowDimensions();
		if (width > 720) {
			return (
				links.map(
					(link, index) => 
						<li key={index}>
							<Link to={`${link}`}>		
								{link}
							</Link>
						</li>
					)
				)
			}
		return <FontAwesomeIcon
					icon={faBars}
					onClick={
						() => setShowLinks(
							!showLinks
						)} 
				/>
	}

	return (
		<header className="header">
			<div className="logo">
				Keith Raucy
			</div>
			<div className="links">
				<Router>
					<ShowLinks />
				</Router>
			</div>
		</header>
	);
}

export default Header;
