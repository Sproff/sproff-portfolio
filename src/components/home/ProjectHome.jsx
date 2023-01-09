import {
	Box,
	Flex,
	HStack,
	Link,
	SimpleGrid,
	Spacer,
	Text,
} from "@chakra-ui/react";
import React from "react";

import { AiFillEye } from "react-icons/ai";
import { FaCodeBranch } from "react-icons/fa";
import { projects } from "../../services/projects";
import { MobileNavBar } from "../../layouts/MobileNavBar";

export const Projects = () => {
	return (
		<Box w="100%">
			<Box>
				<MobileNavBar />
			</Box>

			<Box padding={["2.5rem", "2.5rem", "2.5rem", "3rem"]}>
				<SimpleGrid
					columns={["1", "1", "2", "1", "2"]}
					spacing={4}
					mb="1rem"
					zIndex="99"
				>
					{projects.map((project) => {
						return (
							<Box
								key={project.id}
								bgColor="rgba(24, 22, 22, 0.5)"
								color="rgba(255, 255, 255, 0.8)"
								fontFamily="Space Grotesk"
								borderRadius="4px"
								height="264px"
								width="100%"
								padding="1.5rem"
								display="flex"
								flexDirection="column"
								justifyContent="space-between"
								zIndex="2"
								_hover={{
									transform: "scale(1.05)",
									transition: "all .5s",
								}}
							>
								<Box>
									<Text
										color="rgba(255, 255, 255, 0.8)"
										fontWeight="700"
										fontSize="1.05rem"
										textTransform="uppercase"
									>
										{project.title}
									</Text>
									<Text
										fontSize=".9rem"
										lineHeight="1.8"
										color="rgba(255, 255, 255, 0.8)"
										fontWeight="300"
									>
										{project.tools}
									</Text>
									<br />
									<Text
										fontSize=".95rem"
										lineHeight="2"
										color="rgba(255, 255, 255, 0.8)"
										fontWeight="300"
										opacity="0.6"
									>
										{project.description}
									</Text>
								</Box>

								<Box color="rgba(255, 255, 255, 0.8)" fontWeight="300">
									<HStack>
										<Link
											href={project.live_link}
											isExternal
											_focus={{ outline: "none" }}
										>
											<Flex
												alignItems="center"
												color="rgba(255, 255, 255, 0.8)"
												fontSize=".85rem"
												_focusVisible={{ outline: "none" }}
											>
												<AiFillEye
													style={{
														color: "rgba(255, 255, 255, 0.8)",
														marginRight: ".3rem",
													}}
												/>
												<Text>Live</Text>
											</Flex>
										</Link>

										<Spacer />

										{!project.isDisabled ? (
											<Link
												href={project.github_link}
												_focus={{ outline: "none" }}
												isExternal
											>
												<Flex
													alignItems="center"
													color="rgba(255, 255, 255, 0.8)"
													fontSize=".85rem"
													_focusVisible={{ outline: "none" }}
												>
													<FaCodeBranch
														style={{
															color: "rgba(255, 255, 255, 0.8)",
															marginRight: ".3rem",
														}}
													/>
													<Text>Code</Text>
												</Flex>
											</Link>
										) : null}
									</HStack>
								</Box>
							</Box>
						);
					})}
				</SimpleGrid>
			</Box>
		</Box>
	);
};
