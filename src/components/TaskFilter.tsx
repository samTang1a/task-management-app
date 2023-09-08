import { ChangeEvent } from "react";
import categories from "../categories";

interface TaskFilterProps {
	onSelectCategory: (category: string)  => void
}

export default function TaskFilter(prop: TaskFilterProps) {
  const handleCategoryChange = (event: ChangeEvent<HTMLSelectElement>) => {
    prop.onSelectCategory(event.target.value);
  };
	return (
		<>
			<select onChange={handleCategoryChange}>
				{categories.map(category => <option value={category}>{category}</option>)}
			</select>
		</>
	)


}