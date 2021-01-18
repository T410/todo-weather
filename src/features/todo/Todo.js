import React, { useState, useRef } from "react";
import { deleteTodo } from "./todo-actions";
import styles from "./Todo.module.css";
import Button from "../../Components/Button/Button";
import Stars from "../../Components/Priority/Star";
import { parseDate, shortenString } from "../../utils/helper";

import { DeleteSVG, EditSVG } from "../../assets/assets";

const Todo = ({ data, setShouldShowAdd, setEditData }) => {
	const { title, description, priority, updatedAt, createdAt } = data;
	const [isExpanded, setIsExpanded] = useState(false);
	const detailsRef = useRef(null);

	const onClickItem = () => {
			!isExpanded
				? detailsRef.current.setAttribute("open", "")
				: detailsRef.current.removeAttribute("open");
			setIsExpanded(!isExpanded);
		},
		onclickEdit = () => {
			setShouldShowAdd(true);
			setEditData(data);
		},
		onclickDelete = () => {
			deleteTodo(data.id);
		};
	return (
		<div className={styles.todoItemOuter}>
			<div className={styles.todoItemInner} onClick={onClickItem}>
				<details
					className={styles.todoInfo}
					ref={detailsRef}
					onClick={(e) => {
						e.preventDefault();
					}}
				>
					<summary className={styles.todoTitle}>
						{`${title}`}
						<span className={styles.descriptionSummary}>
							{shortenString(description, 32)}
						</span>
					</summary>
					<p className={styles.todoDescription}>{description}</p>
					<p
						className={styles.todoDate}
						title={`Created At: ${parseDate(createdAt)}`}
					>
						{(createdAt !== updatedAt
							? "Updated At: "
							: "Created At: ") + parseDate(updatedAt)}
					</p>
				</details>
				<div className={styles.todoPriority}>
					{<Stars starCount={3} selectedID={priority - 1} />}
				</div>
			</div>
			<div className={styles.todoButtons}>
				<Button shape="circle" use="info" onClick={onclickEdit}>
					<EditSVG color="#000000" />
				</Button>
				<Button shape="circle" use="warning" onClick={onclickDelete}>
					<DeleteSVG color="#000000" />
				</Button>
			</div>
		</div>
	);
};

export default Todo;
