import React from "react";
import { Box, Image } from "@chakra-ui/react";

import bgImg from "../../assets/images/bg_img.png";

export const BackgroundImage = () => {
	return (
		<Box>
			<Image
				src={bgImg}
				position="fixed"
				right="0"
				opacity="0.3"
				height="100vh"
				alt="Background Image"
			/>
		</Box>
	);
};
