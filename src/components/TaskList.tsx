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
				<table className="table">
					<thead>
						<tr>
							<th scope="col">Title</th>
							<th scope="col">Due Date</th>
							<th scope="col">Category</th>
							<th scope="col"></th>
						</tr>
					</thead>
					<tbody>
						{prop.tasks.map(task =>
							<tr key={task.id}>
								<td>{task.title}</td>
								<td>{task.dueDate.toString()}</td>
								<td>{task.category}</td>
								<td><button className="btn btn-danger" onClick={() => { prop.onDelete(task.id) }}> Remove </button></td>
							</tr>
						)}
					</tbody>
				</table>
			}
		</>
	)

}