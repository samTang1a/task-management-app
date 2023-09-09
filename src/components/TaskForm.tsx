
import { useForm, SubmitHandler } from "react-hook-form"
import { z } from "zod";
import categories from '../categories';
import Task from '../Task'

const TaskFormSchema = z.object({
	title: z.string().min(3).max(50),
	dueDate: z.date(),
	category: z.string()
}).strict().required();

interface TaskFormProps {
	handleAddTask: (data: Task) => void
}

export default function TaskForm(prop: TaskFormProps) {
	const { register, handleSubmit, reset, formState: { errors } } = useForm<Task>()
	const onSubmit: SubmitHandler<Task> = data => {
		TaskFormSchema.parse(data)
		prop.handleAddTask(data)
		reset()
	}

	return (
		<>
			<form onSubmit={handleSubmit(onSubmit)}>
				<label>Title</label>
				<input type="text" className="form-control" {...register('title',
					{
						required: { value: true, message: 'Title should be at least 3 characters.' },
						minLength: { value: 3, message: 'Title should be at least 3 characters.' },
						maxLength: { value: 50, message: 'This input exceed 50.' }
					})} />
				<p style={{ color: "red" }}>{errors.title?.message}</p>

				<label>Due Date</label>
				<input type="date" className="form-control" {...register('dueDate', { valueAsDate: true, required: true })} />
				<p style={{ color: "red" }}>{errors.dueDate?.type ? 'Invalid date' : null}</p>

				<label>Category</label>
				<select defaultValue='default' className="form-control" {...register('category')}>
					<option key={'default'} disabled value='default'></option>
					{categories.map((category, index) => <option key={index} value={category}>{category}</option>)}
				</select>
				<p style={{ color: "red" }}>{errors.category?.type ? 'Category is required.': null}</p>
				<input type="submit" className="btn btn-primary" />
			</form>
		</>
	)
}
