import logo from './logo.svg';
import './App.css';

function fetchTodos() {
	return [
		{ 
			id: 1,
			title: "吃饭",
			completed: false,
    },
		{ 
			id: 2,
			title: "刷牙",
			completed: false,
		},
		{ 
			id: 3,
			title: "喝水",
			completed: false,
		},
		{ 
			id: 4,
			title: "洗澡",
			completed: false,
		},
	];
}

function App() {
	const todos = fetchTodos();

	return (
	  <>
			<ul>
				{todos.map((todo) => (
						<li>
							<input type="checkbox" defaultChecked={todo.completed} />
							<label>{todo.title}</label>
						</li>
					))}
			</ul>
		</>
		);
	}

export default App;
