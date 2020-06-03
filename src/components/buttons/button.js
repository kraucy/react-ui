import React from 'react';

function Button({
		btnClick,
		className,
		title 
	}) {
	return(
		<button 
			className={
				className
			}
			onClick={
				btnClick
			}
		>
			{
				title
			}
		</button>
	)
}

export default Button;