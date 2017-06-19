import React from 'react';

// const ChoosePage = ({
// 	onPageSelect
// }) => {
// 	return (
// 		<div>
// 			ShowingPage: <select onChange={onPageSelect}>
// 				<option>Intro</option>
// 				<option>Submit</option>
// 				<option>OnEntry</option>
// 			</select> 
// 		</div>
// 		);
// };

const ChoosePage = ({
	onPageSelect,
	page,
	pages
}) => {
	const options = pages.map( (page) => (<option key={page}>{page}</option>) );
	return (
		<div>
			Showing Page: <select onChange={onPageSelect} value={page}>
				{options}
			</select>
		</div>
	)
}

export default ChoosePage;