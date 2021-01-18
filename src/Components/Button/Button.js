import React from "react";
import styles from "./Button.module.css";
import PropTypes from "prop-types";
import clsx from "clsx";
const Button = ({
	onClick,
	disabled,
	children,
	shape = "circle",
	use = "neutral",
	className,
}) => {
	const classNames = clsx(
		styles.button,
		styles[shape],
		styles[use],
		className,
		disabled ? styles.disabled : styles.enabled
	);
	return (
		<button
			data-testid="button"
			className={classNames}
			onClick={!disabled ? onClick : () => {}}
			disabled={disabled}
		>
			{children || "Button"}
		</button>
	);
};

Button.propTypes = {
	onClick: PropTypes.func.isRequired,
	disabled: PropTypes.bool,
	children: PropTypes.node.isRequired,
	shape: PropTypes.oneOf(["rounded", "circle"]),
	use: PropTypes.oneOf(["warning", "neutral", "success", "info"]),
};

export default Button;
