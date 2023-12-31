import React, { useEffect, useRef } from "react";

function Navbar() {
	const refNav = useRef();
	useEffect(() => {
		window.addEventListener("scroll", (e) => {
			if (window.pageYOffset > 200) {
			}
		});
	});
	return (
		<header>
			<nav
				className='bg-white w-full fixed '
				ref={refNav}>
				<div className='flex justify-between items-center p-3'>
					<div className='flex items-center gap-2'>
						<div className='w-10 h-10 rounded-full bg-yellow-500'></div>
						<div>
							<a href='#/'>
								<h1 className='text-xl font-bold '>ALAPHIA Francis</h1>
							</a>
						</div>
						<div className='text-sm '>
							<p>Développeur FullStack Js</p>
						</div>
					</div>
					<div className='flex items-center gap-3'>
						<a
							className='border border-yellow-500 p-2 rounded-xl hover:bg-yellow-500 duration-200 '
							href='#/'>
							Télécharger le CV
						</a>
						<span className='border h-5 w-0 bg-black border-gray-950'></span>
						<a href='#/'>Projets</a>
						<span className='border h-5 w-0 bg-black border-gray-950'></span>
						<a href='#/'>Contact</a>
					</div>
				</div>
			</nav>
		</header>
	);
}

export default Navbar;
