import { Box, Text, VStack } from "@chakra-ui/react";
import React from "react";
import { NavLink } from "react-router-dom";

import { FaFolderOpen, FaHome, FaMicrophone } from "react-icons/fa";
import { BsFillChatDotsFill } from "react-icons/bs";
import { ImBlogger } from "react-icons/im";

export const SideBar = () => {
	const navLinks = [
		{
			id: 1,
			icon: <FaHome />,
			title: "Home",
			link: "/",
		},
		{
			id: 2,
			icon: <FaFolderOpen />,
			title: "Resume",
			link: "/resume",
		},
		{
			id: 3,
			icon: <ImBlogger />,
			title: "Blog",
			link: "/blog",
		},
		{
			id: 3,
			icon: <FaMicrophone />,
			title: "Podcast",
			link: "/podcast",
		},
		{
			id: 4,
			icon: <BsFillChatDotsFill />,
			title: "Contact",
			link: "/contact",
		},
	];

	return (
		<Box height="100vh">
			<Box>
				<VStack
					justifyContent="space-evenly"
					height="100vh"
					display={["none", "none", "none", "flex"]}
				>
					{navLinks.map((item) => {
						return (
							<NavLink
								key={item.id}
								exact
								to={item.link}
								activeClassName="selected"
							>
								<Box cursor="pointer" position="relative">
									<Box
										position="absolute"
										top={["-85px", "-85px", "-130px", "-90px"]}
										left="16px"
										width="3px"
										height={["85px", "85px", "130px", "90px"]}
										backgroundColor="rgba(255, 255, 255, 0.3)"
										className="vertical_line"
										_first={item.id === 1 && { display: "none" }}
									/>
									<Box
										className="active_border"
										border="3px solid rgba(255, 255, 255, 0.3)"
										borderRadius="8px"
										p=".4rem"
									>
										{item.icon}
									</Box>
									<Text
										fontSize=".5rem"
										textTransform="uppercase"
										fontWeight="700"
										textAlign="center"
										padding=".3rem 0"
										color="#747474"
									>
										{item.title}
									</Text>
								</Box>
							</NavLink>
						);
					})}
				</VStack>
			</Box>
		</Box>
	);
};
