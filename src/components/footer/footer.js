import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import useWindowDimensions from '../../hooks/width'

const links = ['link 1', 'link 2', 'link 3'];

function Footer() {

	const [showLinks, setShowLinks] = useState(false)

	const ShowLinks = () => {
		
		const { width } = useWindowDimensions();
		if (width > 720) {
			return (
				links.map(
					(link, index) => 
						<li key={index}>{link}</li>
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
		<footer className="footer">
			<div className="logo">
				Keith Raucy
			</div>
			<div className="links">
				<ShowLinks />
			</div>
		</footer>
	);
}

export default Footer;
