import React from 'react';
import Card from './cards/card';
import Footer from './footer/footer';
import Header from './header/header';
import cards from '../data/cards';


function App() {

	const listItems = cards.map((card, index) => 
		<Card 
			button={card.button}
			copy={`${card.copy} ${index + 1}`}
			key={index}
			title={`${card.title} ${index + 1}`}
		/>
	);

  return (
    <div className="App">
		<Header
			className="App-header"
		/>
		<div className="body">
			<div className="row">
				{listItems}
			</div>
		</div>
		<Footer
			className="App-footer"
		/>
    </div>
  );
}

export default App;
