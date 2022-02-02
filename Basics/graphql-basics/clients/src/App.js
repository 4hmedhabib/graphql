import './App.css';
import { DisplayData } from './components';

function App() {
	return (
		<div className=" w-full flex flex-col justify-start items-center h-screen">
			<h1 className="mb-2">List of All Users</h1>
			<DisplayData />
		</div>
	);
}

export default App;
