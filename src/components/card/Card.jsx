"use client";
import React from "react";
import styles from "./card.module.css";
import { useRouter } from "next/navigation";

const Card = ({
	id,
	src = "/artist.jpg",
	alt = "artist",
	title,
	description,
	textButton = "Savoir Plus",
	urlDestination = "/events/",

	isProfile,
}) => {
	const router = useRouter();

	const openEventDetails = () => {
		router.push(urlDestination + id);
	};

	return (
		<div className={styles.cardContainer}>
			{isProfile ? (
				<img className={styles.avatar} src={src} alt={alt} />
			) : (
				<img className={styles.cardImg} src={src} alt={alt} />
			)}

			<h1 className={styles.cardTitle}>{title}</h1>
			<p className={styles.cardDescription}>{description}</p>
			<button className={styles.cardButton} onClick={openEventDetails}>
				{textButton}
			</button>
		</div>
	);
};

export default Card;
