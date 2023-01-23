import { useContext } from 'react';
import { CardContext } from './context';
import { CardForm, Header, Completed } from './components';

const App = () => {
	const { state } = useContext(CardContext);
	const { isCompleted } = state;
	return (
		<>
			<Header />
			{!isCompleted ? <CardForm /> : <Completed />}
		</>
	);
};

export default App;
