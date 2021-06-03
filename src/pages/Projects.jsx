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
				<Box padding={["1.5rem", "1.5rem", "1.5rem", "3rem"]}>
					<SimpleGrid
						columns={["1", "1", "2", "2"]}
						spacing={4}
						mb="1rem"
						zIndex="99"
					>
						{projects.map((project) => {
							return (
								<Box
									key={project.id}
									bgColor="#09090A"
									color="#fff"
									fontFamily="Lato"
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
											color="rgba(255, 255, 255, 0.6)"
											fontWeight="900"
											fontSize="1.05rem"
											textTransform="uppercase"
										>
											{project.title}
										</Text>
										<Text
											fontSize=".85rem"
											lineHeight="1.8"
											color="rgba(255, 255, 255, 0.6)"
											fontWeight="300"
										>
											{project.tools}
										</Text>
										<br />
										<Text
											fontSize=".85rem"
											lineHeight="1.8"
											color="rgba(255, 255, 255, 0.6)"
											fontWeight="300"
										>
											{project.description}
										</Text>
									</Box>

									<Box color="rgba(255, 255, 255, 0.6)" fontWeight="300">
										<HStack>
											<Link
												href={project.live_link}
												isExternal
												boxShadow="none"
											>
												<Flex
													alignItems="center"
													color="rgba(255, 255, 255, 0.6)"
													fontSize=".85rem"
												>
													<AiFillEye
														style={{
															color: "rgba(255, 255, 255, 0.72)",
															marginRight: ".3rem",
														}}
													/>
													<Text>Live</Text>
												</Flex>
											</Link>

											<Spacer />

											<Link href={project.github_link}>
												<Flex
													alignItems="center"
													color="rgba(255, 255, 255, 0.6)"
													fontSize=".85rem"
												>
													<FaCodeBranch
														style={{
															color: "rgba(255, 255, 255, 0.72)",
															marginRight: ".3rem",
														}}
													/>
													<Text>Code</Text>
												</Flex>
											</Link>
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

export default Projects;
