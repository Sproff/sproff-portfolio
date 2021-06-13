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
import { projects } from "../services/projects";
import { MainLayout } from "../layouts/MainLayout";

export const Projects = () => {
	return (
		<Box w="100%">
			<MainLayout isMobile={true}>
				<Box
					padding={["1.5rem", "1.5rem", "1.5rem", "3rem"]}
					mb={["1.5rem", "1.5rem", "1.5rem", "1rem"]}
					mt={["1.5rem", "1.5rem", "1.5rem", "1rem"]}
				>
					<SimpleGrid columns={["1", "1", "2", "2"]} spacing={4} zIndex="99">
						{projects.map((project) => {
							return (
								<Box
									key={project.id}
									bgColor="#09090A"
									color="#fff"
									fontFamily="Space Grotesk"
									borderRadius="4px"
									height="264px"
									width="100%"
									padding="1.5rem"
									display="flex"
									flexDirection="column"
									justifyContent="space-between"
									zIndex="2"
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
										>
											{project.description}
										</Text>
									</Box>

									<Box color="rgba(255, 255, 255, 0.8)" fontWeight="300">
										<HStack>
											<Link
												href={project.live_link}
												isExternal
												boxShadow="none"
											>
												<Flex
													alignItems="center"
													color="rgba(255, 255, 255, 0.8)"
													fontSize=".85rem"
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
												<Link href={project.github_link}>
													<Flex
														alignItems="center"
														color="rgba(255, 255, 255, 0.8)"
														fontSize=".85rem"
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
											) : (
												""
											)}
										</HStack>
									</Box>
								</Box>
							);
						})}
					</SimpleGrid>
				</Box>
			</MainLayout>
		</Box>
	);
};
