export const cardNumberRegex =
	/^(?:4[0-9]{12}(?:[0-9]{3})?|[25][1-7][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/;
export const cardHolderNameRegex = /^[a-zA-ZñÑ ]+$/;
export const cvcRegex = /^[0-9]{3,4}$/;
export const monthRegex = /^(0[1-9]|1[0-2])$/;
export const yearRegex = /^[0-9]{2}$/;
