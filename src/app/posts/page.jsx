import Card from "@/components/card/Card";
import React from "react";

const Posts = async () => {
	const getData = async () => {
		const res = await fetch("http://jsonplaceholder.typicode.com/posts");

		if (!res.ok) {
			throw new Error("Erreur lors du fetching data");
		}

		return res.json();
	};

	const postsData = await getData();

	return (
		<div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
			{postsData &&
				postsData.map((post) => (
					<Card
						id={post.id}
						key={post.id}
						title={post.title}
						description={post.body}
						urlDestination="/posts/"
					/>
				))}
		</div>
	);
};

export default Posts;
