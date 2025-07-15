'use strict';

document.addEventListener('DOMContentLoaded', () =>
{
	const a = document.getElementById('link-conversion');
  console.log(a)
	a.setAttribute('href', a.getAttribute('href')
		.replace('-', 'zamborsky@')
		.replace(
			'email', 'columbia'
		)
		.replaceAll('-', '.')
		.replace('teddy', 'edu')
		.replace('to', 'mailto:t.')
	);
});
