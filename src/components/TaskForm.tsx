
import { useState, ChangeEvent, FormEvent } from 'react'
import { useForm, SubmitHandler } from "react-hook-form"
import { z } from "zod";
import categories from '../categories';

const TaskFormSchema = z.object({
	id: z.number(),
	title: z.string().min(3).max(50),
	dueDate: z.date(),
	category: z.string()
	// category: zincludes()
}).strict();

type TaskFormData = {
	id: number;
	title: string;
	dueDate: Date;
	category: string;
}

// TaskFormSchema.parse({})
interface TaskFormProps {
	onSubmit: (TaskFormData: FormEvent<HTMLFormElement>) => void
}

export default function TaskForm(prop: TaskFormProps) {
	const { register, handleSubmit, reset, formState: { errors }} = useForm<TaskFormData>()

	// const handleFormSubmit: SubmitHandler<TaskFormData> = (data: TaskFormData) => {
	// 	onSubmit(data)
	// 	reset()
	// };
	const onSubmit: SubmitHandler<TaskFormData> = data => {
		z.number().safe(data.id);
		z.date().safeParse(data.dueDate);
		
	}

	return (
		<>
			<form onSubmit={handleSubmit(onSubmit)}>
				<div className="mb-3">
					<label htmlFor="input-title" className="form-label">Title</label>
					<input type="text" className="form-control" id="input-title" />
				</div>
				<div className="mb-3">
					<label htmlFor="input-due-date" className="form-label">Due Date</label>
					<input type="date" className="form-control" id="iput-due-date" />
				</div>
				<div className="mb-3">
					{/* <input type="checkbox" className="form-check-input" id="exampleCheck1" /> */}
					<label className="form-check-label" htmlFor="input-category">Check me out</label>
					<select className="form-select" aria-label="Default select example">
						{categories.map(categorie => <option value={categorie}>categorie</option>)}
					</select>
				</div>
				<button type="submit" className="btn btn-primary">Submit</button>
			</form>

		</>
	)

}
