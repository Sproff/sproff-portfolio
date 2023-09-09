import { Box, HStack, Text } from "@chakra-ui/react";
import React from "react";
import { NavLink } from "react-router-dom";

import { FaFolderOpen, FaHome, FaMicrophone } from "react-icons/fa";
import { BsFillChatDotsFill } from "react-icons/bs";
import { ImBlogger } from "react-icons/im";
import { GoProject } from "react-icons/go";

export const MobileNavBar = () => {
	const navLinks = [
		{
			id: 1,
			icon: <FaHome />,
			title: "Home",
			link: "/",
		},
		{
			id: 2,
			icon: <GoProject />,
			title: "Projects",
			link: "/projects",
		},
		{
			id: 3,
			icon: <FaFolderOpen />,
			title: "Resume",
			link: "/resume",
		},
		{
			id: 4,
			icon: <ImBlogger />,
			title: "Blog",
			link: "/blog",
		},
		{
			id: 5,
			icon: <FaMicrophone />,
			title: "Podcast",
			link: "/podcast",
		},
		{
			id: 6,
			icon: <BsFillChatDotsFill />,
			title: "Contact",
			link: "/contact",
		},
	];

	return (
		<Box>
			<HStack
				justifyContent="space-evenly"
				display={["flex", "flex", "flex", "none"]}
				position="fixed"
				bottom="0"
				height="12%"
				width="100%"
				bgColor="#1a1919"
				zIndex="999"
				padding="1.5rem 0"
				borderTop="1px solid rgba(255, 255, 255, 0.3)"
			>
				{navLinks.map((item) => {
					return (
						<NavLink
							key={item.id}
							exact
							to={item.link}
							activeClassName="selected"
						>
							<Box cursor="pointer">
								<Box
									className="active_mobile_border"
									borderRadius="8px"
									p=".3rem .5rem"
									display="flex"
									justifyContent="center"
									marginBottom=".2rem"
								>
									{item.icon}
								</Box>
								<Text
									fontFamily="Space Grotesk"
									fontSize=".5rem"
									textTransform="uppercase"
									fontWeight="700"
									textAlign="center"
									color="#747474"
								>
									{item.title}
								</Text>
							</Box>
						</NavLink>
					);
				})}
			</HStack>
		</Box>
	);
};
