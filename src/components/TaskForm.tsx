
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
}).strict().required();

type TaskFormData = {
	id: number;
	title: string;
	dueDate: Date;
	category: string;
}

// TaskFormSchema.parse({})
interface TaskFormProps {
	onSubmit: (data: TaskFormData) => void
	// onSubmit: (TaskFormData: SubmitHandler<TaskFormData>) => void

}

export default function TaskForm(prop: TaskFormProps) {
	const { register, handleSubmit, reset, formState: { errors }} = useForm<TaskFormData>()

	// const handleFormSubmit: SubmitHandler<TaskFormData> = (data: TaskFormData) => {
	// 	onSubmit(data)
	// 	reset()
	// };
	const onSubmit: SubmitHandler<TaskFormData> = data => {
		console.log(TaskFormSchema.parse(data))
		TaskFormSchema.parse(data)
		reset()
	}

	return (
		<>
			<form onSubmit={handleSubmit(onSubmit)}>
				<label>Title</label>
				<input {...register('title', { required: true, maxLength: 50})}/>
				<p>{errors.title?.message}</p>

				<label>Due Date</label>
				<input {...register('dueDate', { required: true})}/>
				<p>{errors.dueDate?.message}</p>

				<label>Category</label>
				<select {...register('category')}>
					{categories.map(category => <option value={category}>{category}</option>)}
				</select>
				<p>{errors.category?.message}</p>

				<input type="submit" />
			</form>
		</>
	)
}
