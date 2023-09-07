import Task from "../Task"

interface TaskListProps {
	tasks: Array<Task>;
}

export default function TaskList(prop: TaskListProps) {

	const addTask = (task: Task) => {

	}

	const deleteTask = (id: number) => {

	}

	return (
		<>
			No Tasks yet.

			<table>
				<tr>
					<th>Title</th>
					<th>Due Date</th>
					<th>Category</th>
					<th>Delete</th>
				</tr>
				{prop.tasks.map(task => 
				<tr>
					<td>{task.id}</td>
					<td>{task.title}</td>
					<td>{task.dueDate.toString()}</td>
					<td>{task.category}</td>
					<td><button> Remove </button></td>
				</tr>
				)}
			</table>
		</>
	)

}