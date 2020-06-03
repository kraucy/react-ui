import React from 'react';
import Button from '../buttons/button';

function Card(
	{
		button, copy, title
	}
) {

  return (
    <div className="card-container flex">
		<div className="card">
			<div className="card-header">
				<h2>
					{title}
				</h2>
			</div>
			<div className="card-body">
				<p>
					{copy}
				</p>
			</div>
			<div className="card-footer">
				<Button 
					btnClick={
						() => {
							alert('Button clicked!')
						}
					}
					className={
						button.class
					}
					title={
						button.title
					}
				/>
			</div>
		</div>
    </div>
  );
}

export default Card;
