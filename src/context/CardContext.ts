import { createContext } from 'react';
import { FormValues } from '../interfaces';
export type Action = { type: 'update'; payload: FormValues };
export interface CardContextProps {
	state: FormValues;
	dispatch: React.Dispatch<Action>;
}
export const CardContext = createContext({} as CardContextProps);
