import React, { memo } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectData, selectUnits } from "./weather-slice.js";
import { changeTemperatureUnits } from "./weather-actions.js";
import { temperatureTypes } from "../../utils/enums";
import { isTemperatureNormal } from "../../utils/helper";
import styles from "./Weather.module.css";
import clsx from "clsx";

const WeatherContainer = memo(() => {
	const { degree, icon, city } = useSelector(selectData);
	const units = useSelector(selectUnits);
	const dispatch = useDispatch();
	const onClickType = () => {
		changeTemperatureUnits(
			units === temperatureTypes.metric.name
				? temperatureTypes.imperial.name
				: temperatureTypes.metric.name,
			dispatch
		);
	};

	return (
		<div className={styles.container}>
			<div>
				<p
					className={clsx(styles.typeChange, styles.clickable)}
					onClick={onClickType}
				>
					{units === temperatureTypes.metric.name
						? temperatureTypes.imperial.short
						: temperatureTypes.metric.short}
				</p>
			</div>
			<div>
				<h1 className={styles.city}>{city ?? "Locating"}</h1>
			</div>
			<div>
				{degree && (
					<h1
						className={clsx(
							styles.temp,
							isTemperatureNormal(degree, units)
								? styles.weatherGreen
								: styles.weatherRed
						)}
					>
						{degree}°{temperatureTypes[units]?.short}
						<span className={styles.tooltip}>
							{icon ? (
								<div>
									<img
										src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
									/>
								</div>
							) : null}
						</span>
					</h1>
				)}
			</div>
		</div>
	);
});

export default WeatherContainer;
