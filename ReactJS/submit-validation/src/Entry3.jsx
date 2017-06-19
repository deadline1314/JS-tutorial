import React from 'react';

const Entry3 = ({
	onInputChange,
	onSubmit,
	first,
	second,
	validations
}) => {
	return (
		<div>
			All inputs' length must be 5!
			<div>
				Name: <input value={first} onChange={(e) => onInputChange('first', e.target.value)}/>
				{validations.missing.first && 'First is a required field'}
				{validations.notFive.first}
				{first.length !== 5 && 'First must be 5 characters'}
			</div>
			<div>
				PassWord: <input value={second} onChange={(e) => onInputChange('second', e.target.value)}/>
				{validations.missing.second && 'Second is a required field'}
				{validations.notFive.second}
				{second.length !== 5 && 'Second must be 5 characters'}
			</div>
			<button onClick={onSubmit}>Submit</button>
		</div>
	);
};

export default Entry3;