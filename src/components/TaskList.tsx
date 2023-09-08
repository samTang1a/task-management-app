import Task from "../Task"

interface TaskListProps {
	tasks: Array<Task>;
	// addTask: (task: Task) => void;
	onDelete: (id: number) => void;
}

export default function TaskList(prop: TaskListProps) {

	return (
		<>
			{prop.tasks.length <= 0 ? "No Tasks yet." :
				<table>
					<tr>
						<th>Title</th>
						<th>Due Date</th>
						<th>Category</th>
						<th></th>
					</tr>
					{prop.tasks.map(task =>
						<tr key={task.id}>
							{/* <td>{task.id}</td> */}
							<td>{task.title}</td>
							<td>{task.dueDate.toString()}</td>
							<td>{task.category}</td>
							<td><button onClick={()=> {prop.onDelete(task.id)}}> Remove </button></td>
						</tr>
					)}
				</table>
			}
		</>
	)

}