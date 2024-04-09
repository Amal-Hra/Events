import TemplatePage from "@/components/templatePage/TemplatePage";
import React from "react";

const PostDetails = async ({ params }) => {
	const getData = async (id) => {
		const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);

		if (!res.ok) {
			throw new Error("Erreur lors du fetching data");
		}

		return res.json();
	};

	const post = await getData(params.postId);
	return (
		<div>
			<TemplatePage title={post.title} description={post.body} />
		</div>
	);
};

export default PostDetails;
