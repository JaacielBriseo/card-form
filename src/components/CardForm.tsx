import { ErrorMessage, Formik } from 'formik';
import { useContext } from 'react';
import { CardContext } from '../context';
import * as Yup from 'yup';
import { cardHolderNameRegex, cardNumberRegex, cvcRegex, monthRegex, yearRegex } from '../regex';
export const CardForm = () => {
	const { dispatch, state } = useContext(CardContext);

	return (
		<Formik
			initialValues={state}
			validationSchema={Yup.object().shape({
				cardHolderName: Yup.string()
					.min(6, 'Enter a valid name (More than 6 characters)')
					.matches(cardHolderNameRegex, 'Invalid card holder name')
					.required('Card holder name is required'),
				cardNumber: Yup.string().matches(cardNumberRegex, 'Invalid card number').required('Card number is required'),
				month: Yup.string().matches(monthRegex, 'Invalid month').required('Expiration month is required'),
				year: Yup.string().matches(yearRegex, 'Invalid year').required('Expiration year is required'),
				cvc: Yup.string().matches(cvcRegex, 'Invalid CVC code').required('CVC code is required'),
			})}
			onSubmit={values => {
				console.log(values);
			}}>
			{({ values, handleChange, handleSubmit }) => {
				return (
					<form className='p-5 mt-14 space-y-3' onSubmit={handleSubmit}>
						<div className='flex flex-col'>
							<label>Cardholder Name</label>
							<input
								value={values.cardHolderName}
								onChange={event => {
									handleChange(event);
									dispatch({ type: 'update', payload: { ...state, cardHolderName: event.target.value } });
								}}
								name='cardHolderName'
								placeholder='e.g. Jane Appleseed'
							/>
							<ErrorMessage name='cardHolderName' component={'span'} />
						</div>
						<div className='flex flex-col'>
							<label>Card number</label>
							<input
								value={values.cardNumber}
								onChange={event => {
									handleChange(event);
									dispatch({ type: 'update', payload: { ...state, cardNumber: event.target.value } });
								}}
								name='cardNumber'
								placeholder='e.g. 1234 5678 9123 0000'
							/>
							<ErrorMessage name='cardNumber' component={'span'} />
						</div>
						<div className='flex space-x-2'>
							<div className='flex flex-col w-[25%]'>
								<label>Month</label>
								<input
									value={values.month}
									onChange={event => {
										handleChange(event);
										dispatch({ type: 'update', payload: { ...state, month: event.target.value } });
									}}
									name='month'
									placeholder='MM'
								/>
								<ErrorMessage name='month' component={'span'} />
							</div>

							<div className='flex flex-col w-[25%]'>
								<label>Year</label>
								<input
									value={values.year}
									onChange={event => {
										handleChange(event);
										dispatch({ type: 'update', payload: { ...state, year: event.target.value } });
									}}
									name='year'
									placeholder='YY'
								/>
								<ErrorMessage name='year' component={'span'} />
							</div>
							<div className='flex flex-col w-[45%]'>
								<label>CVC</label>
								<input
									value={values.cvc}
									onChange={event => {
										handleChange(event);
										dispatch({ type: 'update', payload: { ...state, cvc: event.target.value } });
									}}
									name='cvc'
									placeholder='e.g. 123'
								/>
								<ErrorMessage name='cvc' component={'span'} />
							</div>
						</div>
						<button type='submit' className='btn'>
							Confirm
						</button>
					</form>
				);
			}}
		</Formik>
	);
};
