import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { sortTodo } from "./todo-actions";

const SortSelect = () => {
	const [selected, setSelected] = useState("new_updated_first");
	const dispatch = useDispatch();
	const onSelectChange = (e) => {
		setSelected(e.target.value);
		sortTodo(e.target.value, dispatch);
	};
	return (
		<select value={selected} onChange={onSelectChange}>
			<option value="new_updated_first">New Updated First</option>
			<option value="old_updated_first">Old Updated First</option>
			<option value="new_created_first">New Created First</option>
			<option value="old_created_first">Old Created First</option>
			<option value="priority_ascending">Priority Ascending</option>
			<option value="priority_descending">Priority Descending</option>
		</select>
	);
};

export default SortSelect;
