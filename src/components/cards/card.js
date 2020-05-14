import React from 'react';

function Card(props) {

  return (
    <div className="card-container flex">
		<div className="card">
			<div className="card-header">
				<h2>
					{props.title}
				</h2>
			</div>
			<div className="card-body">
				<p>
					{props.copy}
				</p>
			</div>
			<div className="card-footer">
				<button>
					{props.button}
				</button>
			</div>
		</div>
    </div>
  );
}

export default Card;
