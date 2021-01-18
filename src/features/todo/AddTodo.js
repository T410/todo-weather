import React, { useState, useEffect } from "react";
import { createTodo, updateTodo } from "./todo-actions";
import Stars from "../../Components/Priority/Star";
import Button from "../../Components/Button/Button";
import styles from "./Todo.module.css";

const AddTodo = ({ setShouldShowAdd, editData }) => {
	const [selectedID, setSelectedID] = useState(editData?.priority - 1);
	const [shouldDisableButton, setShouldDisableButton] = useState(true);
	const [data, setData] = useState({
		id: 0,
		title: "",
		description: "",
		priority: 0,
	});
	const { title, description, priority } = data;

	useEffect(() => {
		if (editData !== null) {
			setSelectedID(editData.priority - 1);
			setData({
				id: editData.id,
				title: editData.title,
				description: editData.description,
				priority: editData.priority,
			});
		}
	}, [editData]);

	useEffect(() => {
		if (editData !== null) {
			setShouldDisableButton(
				title === editData.title &&
					description === editData.description &&
					priority === editData.priority
			);
		}
	}, [editData, title, description, priority]);

	const resetStates = () => {
		setData({
			...data,
			title: "",
			description: "",
			priority: 0,
		});
		setSelectedID(-1);
		setShouldShowAdd(false);
	};

	const onDescriptionChange = (e) => {
		setData({ ...data, description: e.target.value });
	};

	const onTitleChange = (e) => {
		setShouldDisableButton(!e.target.value);
		setData({ ...data, title: e.target.value });
	};

	const onClickAdd = () => {
		if (editData !== null) {
			updateTodo(data);
		} else {
			createTodo({ title, description, priority });
		}
		resetStates();
	};

	return (
		<div className={styles.card}>
			<div className={styles.inputOuter}>
				<input
					className={styles.inputElement}
					type="text"
					placeholder="Title"
					onChange={onTitleChange}
					maxLength={64}
					value={title}
				></input>
			</div>
			<div className={styles.inputOuter}>
				<textarea
					className={styles.inputElement}
					type="text"
					rows={5}
					onChange={onDescriptionChange}
					placeholder="Description"
					value={description}
				></textarea>
			</div>
			<div className={styles.inputOuter}>
				<label>Priority: </label>
				<Stars
					starCount={3}
					onStarClick={(id) => {
						setData({ ...data, priority: id + 1 });
					}}
					setSelectedID={setSelectedID}
					selectedID={selectedID}
				/>
			</div>
			<div className={styles.inputOuter}>
				<Button
					onClick={resetStates}
					shape="rounded"
					use="warning"
					className={styles.todoButton}
				>
					Cancel
				</Button>
				<Button
					onClick={onClickAdd}
					disabled={shouldDisableButton}
					shape="rounded"
					use="success"
					className={styles.todoButton}
				>
					{editData !== null ? "Update" : "Add"}
				</Button>
			</div>
		</div>
	);
};

export default AddTodo;
