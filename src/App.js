import React from "react";
import Navbar from "./components/Navbar";
import Heroes from "./components/Heroes";
import Projects from "./components/Projects";
import { AOSInit } from "./lib/AOSinit";
function App() {
	return (
		<div className=' h-full bg-gray-200 text-gray-700'>
			<Navbar />
			<Heroes />
			<Projects />
			<AOSInit />
		</div>
	);
}

export default App;
