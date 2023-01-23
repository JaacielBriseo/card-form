import { useContext } from 'react';
import { Formik } from 'formik';
import { CardContext } from '../context';
import { useCardForm } from '../hooks';
import { FormInput } from '.';
export const CardForm = () => {
	const { dispatch, state } = useContext(CardContext);
	const { validations } = useCardForm();
	return (
		<Formik
			initialValues={state}
			validationSchema={validations}
			onSubmit={() => dispatch({ type: 'update', payload: { ...state, isCompleted: !state.isCompleted } })}>
			{({ values, handleChange, handleSubmit, handleBlur }) => {
				return (
					<form className='p-5 mt-14 space-y-3' onSubmit={handleSubmit}>
						<FormInput
							handleBlur={handleBlur}
							handleChange={handleChange}
							label='Cardholder Name'
							name='cardHolderName'
							placeholder='e.g. Jane Appleseed'
							value={values.cardHolderName}
						/>
						<FormInput
							handleBlur={handleBlur}
							handleChange={handleChange}
							label='Card Number'
							name='cardNumber'
							placeholder='e.g. 1234 5678 9123 0000'
							value={values.cardNumber}
						/>
						<div className='flex space-x-2'>
							<FormInput
								handleBlur={handleBlur}
								handleChange={handleChange}
								label='Month'
								name='month'
								placeholder='MM'
								value={values.month}
								className='w-[25%]'
							/>
							<FormInput
								handleBlur={handleBlur}
								handleChange={handleChange}
								label='Year'
								name='year'
								placeholder='YY'
								value={values.year}
								className='w-[25%]'
							/>

							<FormInput
								handleBlur={handleBlur}
								handleChange={handleChange}
								label='CVC'
								name='cvc'
								placeholder='e.g. 123'
								value={values.cvc}
								className='w-[45%]'
							/>
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
