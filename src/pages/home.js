import React from "react";
import Card from '../components/cards/card';
import cards from '../data/cards';


function Home() {
	const listItems = cards.map((card, index) => 
		<Card 
			button={card.button}
			copy={`${card.copy} ${index + 1}`}
			key={index}
			title={`${card.title} ${index + 1}`}
		/>
	);
	return (
		<div className="row">
		{listItems}
	</div>
	);
  }

export default Home;