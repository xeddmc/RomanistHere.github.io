const content = {
	'card__title': 'Contact ID',
	'card__info': [
		{
			'card__label': 'name: ',
			'card__content': 'Roman Smunyov'
		},
		{
			'card__label': 'location: ',
			'card__content': 'Minsk, Belarus'
		},
		{
			'card__label': 'position: ',
			'card__content': 'JavaScript developer'
		}
	],
	'form__info': [
		{
			'isInput': true,
			'form__lbl': 'Position',
			'placeholder': 'Front-end developer',
			'form__mess': ' - unlikely:('
		},
		{
			'isInput': true,
			'form__lbl': 'Where',
			'placeholder': 'Norway, Oslo. Onsite',
			'form__mess': ' - маловероятно)'
		},
		{
			'isInput': true,
			'form__lbl': 'Salary',
			'placeholder': '5 000 - 7 000 USD',
			'form__mess': ' - meh, too low:('
		},
		{
			'isInput': false,
			'form__lbl': 'Project',
			'placeholder': 'Web app in sphere of healthcare. Team is 30 person big...',
		},
		{
			'isInput': false,
			'form__lbl': 'Stack',
			'placeholder': 'React + Redux, TypeScript...',
		},
		{
			'isInput': false,
			'form__lbl': 'Responsibilities',
			'placeholder': 'Writing some code...',
		},
		{
			'isInput': false,
			'form__lbl': 'Contacts',
			'placeholder': 'Contact me back via email: example@gmal.com or LinkedIn...',
		},
	],
	'form__mess': ' - Field is almost empty',
	'mehWords': {
		'Where': ['belarus', 'russia', 'ukraine', 'бела', 'россия', 'укра', 'minsk', 'минск'],
		'Position': ['back', 'бэк'],
		'Salary': ['1000', '2000', '1500', '2500'],
	},
	'formAction': 'https://formspree.io/xdowzzgv',
}

export default content
