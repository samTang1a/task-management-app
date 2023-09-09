import { useState } from 'react'
import { SubmitHandler } from "react-hook-form"

import TaskForm from "./TaskForm"
import TaskList from "./TaskList"
import Task from '../Task'

export default function App() {

	const [tasks, setTasks] = useState<Task[]>([])

	const handleAddTask: SubmitHandler<Task> = (newTask: Task) => {
		const id = tasks.length + 1 + new Date().getTime() + newTask.dueDate.getTime();
		newTask.id = id;
		setTasks([...tasks, newTask])
	}

	const handleDeleteTask = (id: number) => {
		const updatedTasks = tasks.filter((task) => task.id !== id);
		setTasks(updatedTasks)
	}


	return (
		<>
			<div className='container'>
				<TaskForm handleAddTask={handleAddTask}></TaskForm>
				<TaskList tasks={tasks} onDelete={handleDeleteTask}></TaskList>
			</div>
		</>
	)

}