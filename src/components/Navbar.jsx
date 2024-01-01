import React, { useEffect, useRef, useState } from "react";

function Navbar() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
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
				className='bg-white w-full fixed z-[100]'
				ref={refNav}>
				<div className='flex justify-between items-center p-3'>
					<div className='flex items-center gap-2'>
						<div className='w-10 h-10 rounded-full bg-yellow-500'></div>
						<div>
							<a href='#/'>
								<h1 className='text-xl font-bold'>ALAPHIA Francis</h1>
							</a>
						</div>
						<div className='text-sm'>
							<p>Développeur FullStack Js</p>
						</div>
					</div>
					{/* Burger menu icon */}
					<div className='block md:hidden rounded-full text-yellow-700'>
						<button
							onClick={() => setIsMenuOpen(!isMenuOpen)}
							className='text-black hover:text-gray-700 focus:outline-none'>
							<svg
								className='w-6 h-6'
								fill='none'
								viewBox='0 0 24 24'
								stroke='currentColor'>
								<path
									strokeLinecap='round'
									strokeLinejoin='round'
									strokeWidth='2'
									d='M4 6h16M4 12h16M4 18h16'
								/>
							</svg>
						</button>
					</div>
					{/* Responsive navigation */}
					<div
						className={`md:flex items-center justify-center gap-3 ${
							isMenuOpen
								? "flex flex-col-reverse justify-start items-start absolute top-12 duration-500 bg-white w-full p-3 left-0"
								: "hidden"
						}`}>
						<a
							className='border border-yellow-500 p-2 rounded-xl hover:bg-yellow-500 duration-200'
							href='#/'>
							Télécharger le CV
						</a>
						<span className='border h-5 w-0 hidden md:block bg-black border-gray-950'></span>
						<a href='#/'>Projets</a>
						<span className='border h-5 w-0 bg-black hidden md:block border-gray-950'></span>
						<a href='#/'>Contact</a>
					</div>
				</div>
			</nav>
		</header>
	);
}

export default Navbar;
