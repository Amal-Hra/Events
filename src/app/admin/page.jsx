import React from "react";
import Styles from "./adminPage.module.css";
import Link from "next/link";
import RemoveBtn from "@/components/removeBtn/RemoveBtn";
import Image from "next/image";

export const metadata = {
	title: { absolute: " ArtEclat-Admin" },
	description: "Website of artistic events ",
};

const getEvents = async () => {
	try {
		const res = await fetch("http://localhost:3000/api/events", {
			cache: "no-store",
		});
		if (!res.ok) {
			throw new Error("Erreur lors du fetching events");
		}
		const data = await res.json(); // Ajout de await ici pour attendre la résolution de la promesse
		return data;
	} catch (error) {
		console.log("Erreur lors du fetching des evenements", error);
	}
};

const adminPage = async () => {
	const events = await getEvents();
	return (
		<div className={Styles.container}>
			<div className={Styles.containerTitleButton}>
				<h1 style={{ fontWeight: "bold", fontSize:"25px", textAlign: "center" }}>Liste des evenements</h1>
			</div>

			<table className={Styles.table}>
				<thead>
					<tr>
						<th>Titre</th>
						<th>Description</th>
						<th>Date</th>
						<th>Place</th>
						<th />
					</tr>
				</thead>
				<tbody>
					{events?.events?.map((element) => (
						<tr key={element._id}>
							<td>
								<div style={{ display: "flex", gap: "5px" }}>
									<Image
										src={`${element.img}`}
										height={50}
										width={50}
									/>
									<div>{element.title}</div>
								</div>
							</td>
							<td>{element.description}</td>
							<td>{element.date}</td>
							<td>{element.place}</td>
							<td>
								<RemoveBtn id={element._id} />
							</td>
						</tr>
					))}
				</tbody>
			</table>
			<div>
					<Link href="/admin/addEvent"> {/* Utilisation correcte de Link */}
						<a className={Styles.button}>Ajouter un evenement</a> {/* Utilisation d'une balise <a> à l'intérieur de Link */}
					</Link>
				</div>
		</div>
	);
};

export default adminPage;
