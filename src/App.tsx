import { ChangeEvent, useState } from "react";
import "./App.css";
import { Input } from "./components/Input/Input";
import { Todo } from "./components/Todo/Todo";
import { ValueType, AnotherType } from "./Utils";
// import { Count } from './components/Counter/count';
// import { Input } from './components/TodoForm/TodoForm';

function App() {
	// type MyType = string[]
	// const [todos, setTodo]= useState<MyType>([])
	// const AddTask = (text: any) => {
	//   const newTodo = [...todos,text]
	//   setTodo(newTodo)
	// }

	const [inputValue, setInputValue] = useState("");
	const GiveInputvalue = (data: string) => {
		setInputValue(data);
	};

	const [valueStore, setValueStore] = useState<ValueType[]>([]);
	const submit = (e: any) => {
		e.preventDefault();
		setValueStore([
			...valueStore,
			{
				text: inputValue,
				complete: false,
				id: Math.floor(Math.random() * 1000),
			},
		]);
		setInputValue("");
	};

	return (
		<div className="App">
			<h1>Hello world!</h1>
			<Input giveValue={GiveInputvalue} inputValue={inputValue} />
			<button onClick={submit}>+</button>
			<p>Current typing... {inputValue}</p>
			<Todo storedValue={valueStore} />
			{/* <div>
				{valueStore.map((item) => (
					<li key={item.id}>
						{item.text}:{item.complete}
					</li>
				))}
			</div> */}

			{/* <Count />
      
      <Input onSubmit={AddTask}/>
      <div>
        {todos.map((text) => (<li key={text}>{text}</li>))}
      </div> */}
		</div>
	);
}

export default App;
