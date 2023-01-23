import { useReducer } from 'react';
import { CardContext, cardReducer } from '.';
interface Props {
	children: JSX.Element | JSX.Element[];
}

export const CardProvider = ({ children }: Props) => {
	const INITIAL_STATE = {
		cardHolderName: '',
		cardNumber: '',
		month: '',
		year: '',
		cvc: '',
		isCompleted: false,
	};
	const [state, dispatch] = useReducer(cardReducer, INITIAL_STATE);
	return <CardContext.Provider value={{ state, dispatch }}>{children}</CardContext.Provider>;
};
