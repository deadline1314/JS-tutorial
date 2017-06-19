import React from 'react';

const Entry2 = ({
	onInputChange,
	onSubmit,
	first,
	second,
	validations
}) => {
	return (
		<div>
			All Inputs must be uppercase!
			<div>
				Name: <input value={first} onChange={(e) => onInputChange('first', e.target.value)}/>
				{validations.missing.first && 'First is a required field'}
				{validations.invalid.first && 'First must be all lowercase'}
			</div>
			<div>
				PassWord: <input value={second} onChange={(e) => onInputChange('second', e.target.value)}/>
				{validations.missing.second && 'Second is a required field'}
				{validations.invalid.second && 'Second must be all lowercase'}
			</div>
			<button onClick={onSubmit}>Submit</button>
		</div>
	);
};

export default Entry2;