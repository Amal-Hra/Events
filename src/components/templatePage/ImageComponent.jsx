import React from "react";
import Image from "next/image";

const ImageComponent = ({ srcImg = "/musicFest.jpg", alt = "music" }) => {
	return (
		<>
			<Image src={srcImg} alt={alt} fill />
		</>
	);
};

export default ImageComponent;
