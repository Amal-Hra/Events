import React from "react";
import styles from "./templatePage.module.css";
import Image from "next/image";
import ImageComponent from "./ImageComponent";

const TemplatePage = ({
	title,
	description,
	textBouton1 = "Read more",
	textBouton2 = "Contact",
	src = "/musicFest.jpg",
	altImg = "test",
}) => {
	return (
		<div className={styles.container}>
			<div className={styles.textContainer}>
				<h1 className={styles.title}>{title}</h1>
				<p className={styles.description}>{description}</p>
				<div className={styles.buttons}>
					<button className={styles.button}>{textBouton1}</button>
					<a href ={"/contact"} className={styles.button}>{textBouton2}</a>
				</div>
			</div>
			<div className={styles.imgContainer}>
				<ImageComponent srcImg={src} alt={altImg} />
			</div>
		</div>
	);
};

export default TemplatePage;
