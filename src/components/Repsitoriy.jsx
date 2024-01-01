import React from "react";
import { FaCodeFork, FaEye } from "react-icons/fa6";
import Icon from "./Icon";

function Repsitoriy({ repositorie }) {
	return (
		<div className='border border-yellow-500 rounded p-5'>
			<div>
				<h1 className='text-lg font-bold'>{repositorie?.name}</h1>
				<p>{String(repositorie?.description ?? "").substring(0, 100) || ""}</p>
			</div>
			<div className='flex justify-between'>
				<div></div>
				<div className='flex items-center gap-2'>
					<div>
						<Icon
							icon={repositorie?.language}
							size={24}
						/>
					</div>
					<div className='flex items-center gap-1'>
						<FaCodeFork />
						{repositorie?.forks}
					</div>
					<div className='flex items-center gap-1'>
						<FaEye />
						{repositorie?.watchers}
					</div>
				</div>
			</div>
		</div>
	);
}

export default Repsitoriy;
