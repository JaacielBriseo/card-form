import { useContext } from 'react';
import { CardContext } from '../context';

export const Header = () => {
	const { state } = useContext(CardContext);
	const { cardHolderName, cardNumber, cvc, month, year } = state;

	return (
		<header className='bg-Mobile bg-cover h-64 relative'>
			<div className='absolute right-0 bottom-12 w-9/12'>
				<img src='/images/bg-card-back.png' alt='back' className='relative' />
				<p className='absolute right-8 top-[4.2rem] text-LightGrayishViolet text-xs'>{cvc}</p>
			</div>
			<div className='absolute left-5 -bottom-10 w-9/12 shadow-2xl text-White tracking-widest'>
				<img src='/images/bg-card-front.png' alt='front' className='relative' />
				<img src='/images/card-logo.svg' alt='' className='absolute top-4 left-4 h-8' />
				<p className='absolute bottom-10 left-5 text-BodySize'>{cardNumber}</p>
				<p className='absolute bottom-3 text-[0.60rem] left-5 text-LightGrayishViolet'>{cardHolderName}</p>
				<p className='absolute bottom-3 text-[0.60rem] right-5 text-LightGrayishViolet'>
					{month}/{year}
				</p>
			</div>
		</header>
	);
};
