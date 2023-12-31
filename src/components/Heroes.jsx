import React from "react";
import PersoImg from "../img/perso.png";
import {
	FaHtml5,
	FaCss3,
	FaJs,
	FaSass,
	FaPython,
	FaPhp,
} from "react-icons/fa6";
function Heroes() {
	return (
		<div className='h-screen flex justify-center items-center bg-img'>
			<div className='flex justify-center flex-col  items-center w-[75%] p-10 h-screen gap-10 '>
				<div className='px-8 text-center'>
					<h1 className='text-5xl font-bold mb-3 flex-none'>
						Bonjour ! Je suis Francis, développeur passionné.
					</h1>
					<p className='text-xl mb-5'>
						Mon portfolio est le résultat de ma passion pour le développement
						web et l'ingénierie logicielle. Expert en JavaScript, HTML, CSS et
						divers frameworks, je crée des solutions innovantes et esthétiques.
						Mon engagement dans des projets open source témoigne de ma volonté
						de contribuer et d'apprendre continuellement. Chaque ligne de code
						que je rédige reflète mon dévouement pour des expériences numériques
						remarquables.{" "}
						<a
							className='text-yellow-300 underline'
							href='https://github.com/francis-tg'
							target='_blank'
							rel='noreferrer'>
							Explorez mes réalisations
						</a>{" "}
						pour découvrir mon approche du développement logiciel. Je suis
						ouvert aux collaborations et aux nouvelles opportunités.
					</p>
					<div className='mt-3 flex gap-3 items-center justify-center'>
						<FaHtml5 size={40} />
						<FaCss3 size={40} />
						<FaJs size={40} />
						<FaPhp size={40} />
						<FaPython size={40} />
						<FaSass size={40} />
					</div>
				</div>
				<div>
					<button className='bg-yellow-500 border border-yellow-500 rounded-lg p-2'>
						Télécharger mon CV
					</button>
				</div>
			</div>
		</div>
	);
}

export default Heroes;
