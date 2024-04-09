
"use client"
import React, { useState, useEffect } from "react";
import Styles from "./events.module.css";
import Card from "@/components/card/Card";

const Events = () => {
    const [eventData, setEventData] = useState([]);

    useEffect(() => {
        const fetchEvents = async () => {
            try {
                const res = await fetch("http://localhost:3000/api/events/");
                if (!res.ok) {
                    throw new Error("Erreur lors du fetching data");
                }
                const data = await res.json();
                setEventData(data.events);
            } catch (error) {
                console.error("Erreur lors du chargement des événements :", error);
            }
        };
        fetchEvents();
    }, []); // Le tableau vide comme deuxième argument signifie que useEffect s'exécute une seule fois après le rendu initial
	
	console.log("1")
    return (
		<div className={Styles.container}>
				{eventData &&
					eventData.map((element) => (
							<Card {...element} id={element?._id} src = {element?.img} />
						))}
				</div>
    );
};

export default Events;

