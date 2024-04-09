import Card from "@/components/card/Card";
import Styles from "./home.module.css";

export default function Home() {
	const urlImgEvent = "/team/";
	return (
		<div className={Styles.container}>
			<h1 className={Styles.title}>Explorez l'art sous toutes ses formes avec ArtEclat</h1>
			<p className={Styles.description}>
			Bienvenue sur Arteclat, votre destination en ligne pour découvrir et explorer le monde fascinant de l'art sous toutes ses formes. Plongez dans un univers où la créativité s'exprime à travers des événements artistiques uniques, des expositions captivantes et des performances immersives. Que vous soyez un passionné d'art chevronné ou un novice curieux, Arteclat vous offre une plateforme dynamique pour découvrir de nouveaux talents, interagir avec des artistes renommés et participer à des expériences artistiques inoubliables. Rejoignez-nous alors que nous repoussons les limites de l'expression artistique et embrassons la diversité et l'innovation dans le monde de l'art.
			</p>
		</div>
	);
}
