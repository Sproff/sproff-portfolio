import {
	Avatar,
	Box,
	Button,
	Flex,
	HStack,
	Link as CLink,
	Text,
	Wrap,
	WrapItem,
} from "@chakra-ui/react";
import React from "react";

import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

export const Main = () => {
	return (
		<Box
			padding={["0 .1rem", "0", "0 4.5rem", "0 2.5rem"]}
			display="flex"
			w={["100%", "100%", "100%", "80%"]}
		>
			<Box
				display="flex"
				flexDirection="column"
				justifyContent="space-evenly"
				alignItems={["center", "center", "center", "flex-start"]}
			>
				<Box px={[".95rem", "1rem", "0", "0"]}>
					<Text
						color="rgba(255, 255, 255, 0.8)"
						textAlign={["center", "center", "center", "inherit"]}
						fontFamily="Space Grotesk"
						fontSize={["2rem", "2rem", "1.7rem", "2rem"]}
						fontWeight="700"
					>
						<span style={{ color: "rgb(226 101 62)" }}>Hello,</span> I’m
						<br />
						Samuel Ogunleye.
					</Text>

					<Text
						mt="1rem"
						color="rgba(255, 255, 255, 0.8)"
						textAlign={["center", "center", "center", "inherit"]}
						fontFamily="Space Grotesk"
						fontSize={["1rem", "1.1rem", "1.1rem", "1rem"]}
						fontWeight="300"
						width={["100%", "100%", "100%", "100%"]}
						lineHeight="2.1"
					>
						I'm currently a Lead Frontend Engineer at{" "}
						<CLink
							href="https://stickerkeen.com"
							style={{
								boxShadow: "none",
								color: "rgb(226 101 62)",
							}}
							isExternal
						>
							{" "}
							Stickerkeen
						</CLink>
						, where I focus on improving the quality of frontend code by paying
						close attention to details with the help of grade A softwares and
						developer tools/processes.
					</Text>
				</Box>

				<Box m="1rem 0">
					<Link to="/contact">
						<Button
							textDecoration="uppercase"
							variant="outline"
							border="3px solid"
							borderColor="rgb(226 101 62)"
							boxShadow="none"
							color="rgb(226 101 62)"
							fontFamily="Space Grotesk"
							fontSize={["1rem", "1rem", "1rem", "1.2rem"]}
							padding="0 2rem"
							_active={{ backgroundColor: "rgb(226 101 62)" }}
							_focus={{ boxShadow: "none" }}
							_hover={{
								backgroundColor: "rgb(226 101 62)",
								color: "rgba(255, 255, 255, 0.8)",
							}}
						>
							Let's Talk
						</Button>
					</Link>
				</Box>

				<Box>
					<HStack>
						<Box>
							<HStack>
								<Box style={{ marginRight: "2rem" }}>
									<Wrap
										display={["flex", "flex", "flex", "flex"]}
										justifyContent="center"
										my="1rem"
									>
										<WrapItem>
											<Avatar
												name="Samuel Ogunleye"
												src="https://res.cloudinary.com/sproff/image/upload/Sproff/sam_u6e4sc.jpg"
											/>
										</WrapItem>
									</Wrap>
								</Box>

								<Box style={{ marginRight: "1rem" }}>
									<a
										href="https://github.com/Sproff"
										target="_blank"
										rel="noreferrer"
										style={{
											boxShadow: "none",
										}}
									>
										<Flex alignItems="center" color="rgba(255, 255, 255, 0.8)">
											<FaGithub
												style={{
													color: "rgba(255, 255, 255, 0.72)",
													marginRight: ".3rem",
												}}
											/>
											<Text
												fontFamily="Space Grotesk"
												fontSize={["1rem", "1.1rem", "1.1rem", "1rem"]}
											>
												GitHub
											</Text>
										</Flex>
									</a>
								</Box>

								<Box style={{ marginRight: "1rem" }}>
									<a
										href="https://twitter.com/dev_sproff"
										target="_blank"
										rel="noreferrer"
										style={{
											boxShadow: "none",
										}}
									>
										<Flex alignItems="center" color="rgba(255, 255, 255, 0.8)">
											<FaTwitter
												style={{
													color: "rgba(255, 255, 255, 0.72)",
													marginRight: ".3rem",
												}}
											/>
											<Text
												fontFamily="Space Grotesk"
												fontSize={["1rem", "1.1rem", "1.1rem", "1rem"]}
											>
												Twitter
											</Text>
										</Flex>
									</a>
								</Box>

								<Box>
									<a
										href="https://www.linkedin.com/in/sam-ogunleye"
										target="_blank"
										rel="noreferrer"
										style={{
											boxShadow: "none",
										}}
									>
										<Flex alignItems="center" color="rgba(255, 255, 255, 0.8)">
											<FaLinkedin
												style={{
													color: "rgba(255, 255, 255, 0.72)",
													marginRight: ".3rem",
												}}
											/>
											<Text
												fontFamily="Space Grotesk"
												fontSize={["1rem", "1.1rem", "1.1rem", "1rem"]}
											>
												LinkedIn
											</Text>
										</Flex>
									</a>
								</Box>
							</HStack>
						</Box>
					</HStack>
				</Box>
			</Box>
		</Box>
	);
};
