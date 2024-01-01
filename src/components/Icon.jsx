import React from "react";
import * as ReactIcons from "react-icons/fa6"; // Import all relevant icons

const Icon = ({ icon, ...props }) => {
	// Map between icon names and their corresponding components

	// If the requested icon is available in the map, render it
	const ChosenIcon =
		ReactIcons[
			`Fa${String(icon).at(0).toUpperCase()}${String(icon)
				.slice(1, String(icon).length)
				.toLocaleLowerCase()}`
		] || null;

	return ChosenIcon ? <ChosenIcon {...props} /> : null;
};

export default Icon;
