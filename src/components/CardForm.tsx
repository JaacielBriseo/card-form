import { useFormik } from 'formik';

export const CardForm = () => {
	const formik = useFormik({
		initialValues: {
			cardHolderName: '',
			cardNumber: '',
			month: '',
			year: '',
			cvc: '',
		},
		onSubmit: console.log,
	});
	return (
		<div>
			<h1>Card form with basic Formik - useFormik</h1>

			<form onSubmit={formik.handleSubmit} className='flex flex-col'>
				<label htmlFor='cardHolderName'>Cardholder Name</label>
				<input type='text' name='cardHolderName' onChange={formik.handleChange} value={formik.values.cardHolderName} />

				<label htmlFor='cardNumber'>Card Number</label>
				<input type='text' name='cardNumber' onChange={formik.handleChange} value={formik.values.cardNumber} />
				<div className='flex flex-col'>
					<label htmlFor='month'>Month</label>
					<input type='text' name='month' onChange={formik.handleChange} value={formik.values.month} />

					<label htmlFor='year'>Year</label>
					<input type='text' name='year' onChange={formik.handleChange} value={formik.values.year} />

					<label htmlFor='cvc'>CVC</label>
					<input type='password' name='cvc' onChange={formik.handleChange} value={formik.values.cvc} />
				</div>
				<button className='rounded-lg bg-blue-500 text-lg p-1 w-1/2 mt-5' type='submit'>
					Submit
				</button>
			</form>
		</div>
	);
};
