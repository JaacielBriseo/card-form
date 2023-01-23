import { FormValues } from '../interfaces';
import { Action } from '.';

export function cardReducer(state: FormValues, action: Action): FormValues {
	switch (action.type) {
		case 'update':
			return { ...state, ...action.payload };
		default:
			return state;
	}
}
