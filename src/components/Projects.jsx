import React from "react";
import { fetchRepo } from "../api";
import Repsitoriy from "./Repsitoriy";

function Projects() {
	const [repos, setRepos] = React.useState([]);
	React.useEffect(() => {
		fetchRepo()
			.then(async (r) => {
				if (r.ok || r.status === 200) {
					setRepos(await r.json());
				}
			})
			.catch((err) => console.log(err));
	}, []);
	return (
		<div className='w-full h-screen py-5'>
			<div className='flex justify-center items-center'>
				<h1 className='text-3xl uppercase font-semibold title-style'>
					Projets
				</h1>
			</div>
			<div className='grid grid-cols-4 gap-5 px-24 py-5'>
				{repos.map((r) => (
					<Repsitoriy repositorie={r} />
				))}
			</div>
		</div>
	);
}

export default Projects;
