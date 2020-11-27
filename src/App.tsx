import React, { useState } from 'react'
import { TodoList } from './TodoList'

const initialTodos: Array<Todo> = [
	{
		text: 'walk the dog',
		complete: true,
	},
	{
		text: 'write app',
		complete: false,
	},
]

const App: React.FC = () => {
	const [todos, setTodos] = useState(initialTodos)

	const toggleTodo: ToggleTodo = (selectedTodo) => {
		const newTodos = todos.map((todo) => {
			if (todo === selectedTodo) {
				return { ...todo, complete: !todo.complete }
			}
			return todo
		})

		setTodos(newTodos)
	}

	return (
		<>
			<TodoList todos={todos} toggleTodo={toggleTodo} />
		</>
	)
}

export default App
