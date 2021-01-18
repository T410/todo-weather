import React from "react";
import PropTypes from "prop-types";
import styles from "./Priority.module.css";
import { StarSVG } from "../../assets/assets";

const Stars = ({ starCount, onStarClick, setSelectedID, selectedID }) => {
	const countArr = new Array(starCount).fill("");

	const clickHandler = (id) => {
		if (onStarClick !== undefined) {
			const _id = selectedID === id ? -1 : id;
			setSelectedID(_id);
			onStarClick(_id);
		}
	};
	const starArray = countArr.map((_, index) => (
		<StarSVG
			key={index}
			color="#ffffff"
			onStarClick={() => {
				clickHandler(index);
			}}
			className={
				index <= selectedID ? styles.selected : styles.deselected
			}
		/>
	));

	const classNames = onStarClick && { className: styles.outer };
	return <div {...classNames}>{starArray}</div>;
};
export default Stars;
