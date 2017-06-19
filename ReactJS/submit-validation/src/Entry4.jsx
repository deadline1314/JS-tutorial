import React from 'react';

const Entry4 = ({
	onInputChange,
	onSubmit,
	first,
	second,
	validations
}) => {
	return (
		<div>
			OnBlur will show descriptive message!
			<div>
				Name: <input value={first} onChange={(e) => onInputChange('first', e.target.value)}/>
				{validations.missing.first && 'First is a required field'}
				{validations.invalid.first && 'First must be all number'}
			</div>
			<div>
				PassWord: <input value={second} onChange={(e) => onInputChange('second', e.target.value)}/>
				{validations.missing.second && 'Second is a required field'}
				{validations.invalid.second && 'Second must be in email format'}
			</div>
			<button onClick={onSubmit}>Submit</button>
		</div>
	);
};

export default Entry4;