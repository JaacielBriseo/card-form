import { FormikErrors, useFormik } from 'formik';
import { cardHolderNameRegex, cardNumberRegex, cvcRegex, monthRegex, yearRegex } from '../regex';

interface FormValues {
	cardHolderName: string;
	cardNumber: string;
	month: string;
	year: string;
	cvc: string;
}

export const CardForm = () => {
	const validate = ({ cardHolderName, cardNumber, cvc, month, year }: FormValues) => {
		const errors: FormikErrors<FormValues> = {};
		if (!cardHolderName) {
			errors.cardHolderName = 'Required';
		} else if (!cardHolderNameRegex.test(cardHolderName)) {
			errors.cardHolderName = 'Invalid name';
		}
		if (!cardNumber) {
			errors.cardNumber = 'Required';
		} else if (!cardNumberRegex.test(cardNumber)) {
			errors.cardNumber = 'Invalid card number';
		}
		if (!cvc) {
			errors.cvc = 'Required';
		} else if (!cvcRegex.test(cvc)) {
			errors.cvc = 'Invalid CVC';
		}
		if (!month) {
			errors.month = 'Required';
		} else if (!monthRegex.test(month)) {
			errors.month = 'Invalid month';
		}
		if (!year) {
			errors.year = 'Required';
		} else if (!yearRegex.test(year)) {
			errors.year = 'Invalid year';
		}
		return errors;
	};

	const { errors, handleSubmit, touched, handleChange, values, handleBlur } = useFormik({
		initialValues: {
			cardHolderName: '',
			cardNumber: '',
			month: '',
			year: '',
			cvc: '',
		},
		onSubmit: console.log,
		validate,
	});
	return (
		<div>
			<h1>Card form with basic Formik - useFormik</h1>

			<form onSubmit={handleSubmit} className='flex flex-col'>
				<label htmlFor='cardHolderName'>Cardholder Name</label>
				<input
					type='text'
					name='cardHolderName'
					onChange={handleChange}
					value={values.cardHolderName}
					onBlur={handleBlur}
				/>
				{touched.cardHolderName && errors.cardHolderName && <span>{errors.cardHolderName}</span>}
				<label htmlFor='cardNumber'>Card Number</label>
				<input type='text' name='cardNumber' onChange={handleChange} value={values.cardNumber} onBlur={handleBlur} />
				{touched.cardNumber && errors.cardNumber && <span>{errors.cardNumber}</span>}
				<div className='flex flex-col'>
					<label htmlFor='month'>Month</label>
					<input type='text' name='month' onChange={handleChange} value={values.month} onBlur={handleBlur} />
					{touched.month && errors.month && <span>{errors.month}</span>}
					<label htmlFor='year'>Year</label>
					<input type='text' name='year' onChange={handleChange} value={values.year} onBlur={handleBlur} />
					{touched.year && errors.year && <span>{errors.year}</span>}
					<label htmlFor='cvc'>CVC</label>
					<input type='password' name='cvc' onChange={handleChange} value={values.cvc} onBlur={handleBlur} />
					{touched.cvc && errors.cvc && <span>{errors.cvc}</span>}
				</div>
				<button className='rounded-lg bg-blue-500 text-lg p-1 w-1/2 mt-5' type='submit'>
					Submit
				</button>
			</form>
		</div>
	);
};
