import { useContext } from 'react';
import { ErrorMessage } from 'formik';
import { CardContext } from '../context';

interface FormInputProps {
	name: string;
	placeholder: string;
	label: string;
	handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
	value: string;
	handleBlur: {
		(e: React.FocusEvent<any, Element>): void;
		<T = any>(fieldOrEvent: T): T extends string ? (e: any) => void : void;
	};
	className?: string;
}

export const FormInput: React.FC<FormInputProps> = ({
	className,
	label,
	handleBlur,
	value,
	handleChange,
	name,
	placeholder,
}) => {
	const { dispatch, state } = useContext(CardContext);
	return (
		<div className={`flex flex-col ${className}`}>
			<label>{label}</label>
			<input
				onBlur={handleBlur}
				value={value}
				onChange={event => {
					handleChange(event);
					dispatch({ type: 'update', payload: { ...state, [name]: event.target.value.toUpperCase() } });
				}}
				name={name}
				placeholder={placeholder}
			/>
			<ErrorMessage name={name} component={'span'} />
		</div>
	);
};
