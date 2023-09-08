import { useState, ChangeEvent, FormEvent } from 'react'

import TaskForm from "./TaskForm"
import TaskFilter from "./TaskFilter"
import TaskList from "./TaskList"
import Task from '../Task'

export default function App() {

	const [tasks, setTasks] = useState<Task[]>([])

	const handleAddTask = (newTask: Task) => {
		// let tmp = tasks.push(task)
		const id = tasks.length + 1;
    newTask.id = id;
		setTasks([...tasks, newTask])
	}

	const handleDeleteTask = (id: number) => {
    const updatedTasks = tasks.filter((task) => task.id !== id);
		setTasks(updatedTasks)
	}


	let onSumbit = (TaskFormData: FormEvent<HTMLFormElement>) => {

	}


	return (
		<>
			<TaskForm onSubmit={handleAddTask}> </TaskForm>
			<TaskList tasks={tasks} onDelete={handleDeleteTask}></TaskList>
		</>
	)


}