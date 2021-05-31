import React from "react";
import { Box, Image } from "@chakra-ui/react";
import bgImg from "../../assets/images/bg_img.svg";

export const BackgroundImage = () => {
	return (
		<Box>
			<Image
				src={bgImg}
				position="absolute"
				right="0"
				opacity="0.5"
				height="100vh"
				alt="Background Image"
			/>
		</Box>
	);
};
