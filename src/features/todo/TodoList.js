import React from "react";
import { useSelector } from "react-redux";
import { selectTodos } from "./todo-slice.js";
import Todo from "./Todo";

const TodoList = (props) => {
	const data = useSelector(selectTodos);
	return (
		<>
			{data.length > 0 ? (
				data.map((d) => <Todo data={d} key={d.id} {...props} />)
			) : (
				<i>No todos to do</i>
			)}
		</>
	);
};

export default TodoList;
