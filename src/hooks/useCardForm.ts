import * as Yup from 'yup';
import { cardHolderNameRegex, cardNumberRegex, cvcRegex, monthRegex, yearRegex } from '../regex';

export const useCardForm = () => {
	const validations = Yup.object().shape({
		cardHolderName: Yup.string()
			.min(6, 'Enter a valid name (More than 6 characters)')
			.max(20, 'No more than 20 characters')
			.matches(cardHolderNameRegex, 'Invalid card holder name')
			.required('Card holder name is required'),
		cardNumber: Yup.string().matches(cardNumberRegex, 'Invalid card number').required('Card number is required'),
		month: Yup.string().matches(monthRegex, 'Invalid month').required('Expiration month is required'),
		year: Yup.string().matches(yearRegex, 'Invalid year').required('Expiration year is required'),
		cvc: Yup.string().matches(cvcRegex, 'Invalid CVC code').required('CVC code is required'),
	});
	return {
		validations,
	};
};
