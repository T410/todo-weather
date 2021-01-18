import React, { useState, useEffect } from "react";
import clsx from "clsx";
import AddTodo from "./AddTodo";
import SortSelect from "./SortSelect";
import TodoList from "./TodoList";
import Button from "../../Components/Button/Button";
import { EditSVG } from "../../assets/assets";
import styles from "./Todo.module.css";

const TodoContainer = () => {
	const [editData, setEditData] = useState(null);
	const [shouldShowAdd, setShouldShowAdd] = useState(null);
	const onClickAdd = () => {
		setShouldShowAdd(true);
	};

	useEffect(() => {
		!shouldShowAdd && setEditData(null);
	}, [shouldShowAdd]);

	return (
		<div className={styles.todoContainerOuter}>
			<div className={styles.todoContainerMiddle}>
				<h1>Todos</h1>
				<div className={styles.todoSort}>
					<label>Sort by: </label>
					<SortSelect />
				</div>
				<div className={styles.todoList}>
					<TodoList
						setEditData={setEditData}
						setShouldShowAdd={setShouldShowAdd}
					/>
				</div>
			</div>
			<div className={styles.todoAddButtonOuter}>
				<Button
					shape="rounded"
					use="success"
					onClick={onClickAdd}
					className={styles.todoButton}
				>
					<EditSVG />
					Add
				</Button>
			</div>
			<div
				className={clsx(
					styles.todoAdd,
					shouldShowAdd !== null &&
						(shouldShowAdd ? styles.showAdd : styles.hideAdd)
				)}
			>
				<AddTodo
					setShouldShowAdd={setShouldShowAdd}
					editData={editData}
					setEditData={setEditData}
				/>
			</div>
		</div>
	);
};

export default TodoContainer;
